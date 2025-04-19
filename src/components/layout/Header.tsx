"use client";
import { CartIcon } from "@/icons/CartIcon";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
import { ChevronDownIcon } from "@/icons/ChevronDownIcon";
import { UserIcon } from "@/icons/UserIcon";
import { TagIcon } from "@/icons/TagIcon";
import { UsersIcon } from "@/icons/UsersIcon";
import { ShoppingBagIcon } from "@/icons/ShoppingBagIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SignOutIcon } from "@/icons/SignOutIcon";
import { usePathname } from "next/navigation";
import { CartContext } from "../../util/ContextProvider";
import { useProfile } from "../hooks/useProfile";

import threeDots from "../../../public/threeDotsIcon.png";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  const { cartProducts } = useContext(CartContext);
  const pathname = usePathname();
  const { data: profileData } = useProfile();
  const [sideBarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const menuItem: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  React.useEffect(() => {
    if (sideBarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Optional cleanup (not strictly necessary here but good practice)
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sideBarOpen]);

  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`${
          sideBarOpen ? "fixed inset-0 z-40 block" : "hidden"
        } w-full backdrop-blur-lg`}
      />

      <Navbar
        className="font-semibold bg-dark py-3 shadow-xl "
        classNames={{ item: "data-[active=true]:text-primary" }}
      >
        <NavbarBrand className="hidden md:flex">
          <Link
            href="/"
            className="text-primary text-[22px] lg:text-2xl font-josefin"
          >
            Slice Savvy
          </Link>
        </NavbarBrand>

        <NavbarContent className="flex md:hidden " justify="start">
          <Button
            className="bg-transparent relative"
            onPress={() => setSidebarOpen(true)}
          >
            <Image
              className="absolute top-0 left-0"
              src={threeDots}
              alt="menu"
              width={30}
              height={30}
            />
          </Button>

          <div
            className={`${
              sideBarOpen ? "translate-x-0" : "translate-x-[-260px]"
            }  w-64 absolute  top-0 left-0 transition-all duration-400  h-screen bg-dark z-50 px-6 `}
          >
            <NavbarBrand className="flex justify-center items-center py-4">
              <Link
                href="/"
                className="text-primary text-[22px] lg:text-2xl font-josefin"
                onClick={(pre) => setSidebarOpen(!pre)}
              >
                Slice Savvy
              </Link>
            </NavbarBrand>
            {menuItem.map((item) => (
              <NavbarItem
                key={item.name}
                isActive={pathname === item.path}
                className="flex items-center gap-2 py-4 justify-center"
                onClick={(pre) => setSidebarOpen(!pre)}
                style={{ borderTop: "1px solid #4B5563" }}
              >
                <Link
                  href={item.path}
                  className="hover:text-primary text-sm lg:text-[16px]"
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}

            <button
              className="flex rounded-full justify-center items-center w-full py-3 mt-4 text-[#fac564]"
              style={{ border: "2px  solid #fac564" }}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="uppercase text-[#fac564] text-xs">Close</span>
            </button>
          </div>
        </NavbarContent>

        <NavbarContent
          className="gap-5 hidden md:flex lg:gap-8 w-full"
          justify="center"
        >
          {menuItem.map((item) => (
            <NavbarItem key={item.name} isActive={pathname === item.path}>
              <Link
                href={item.path}
                className="hover:text-primary text-sm lg:text-[18px]"
                aria-current="page"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="" justify="end">
          {profileData ? (
            <div className="flex items-center h-full">
              <Dropdown className="text-gray-300">
                <DropdownTrigger>
                  <Button
                    className="bg-transparent h-full"
                    startContent={
                      <Avatar
                        src={profileData?.image ? profileData.image : ""}
                        isBordered
                        color="primary"
                        size="sm"
                      />
                    }
                    endContent={
                      <ChevronDownIcon className={"w-4 stroke-white"} />
                    }
                    disableAnimation
                  />
                </DropdownTrigger>

                <DropdownMenu
                  aria-label="Link Actions"
                  color="primary"
                  variant="flat"
                >
                  <DropdownItem
                    key="profile"
                    href="/profile"
                    startContent={<UserIcon className={"w-6"} />}
                  >
                    My Profile
                  </DropdownItem>
                  <DropdownItem
                    key="orders"
                    href="/orders"
                    startContent={<ShoppingBagIcon className={"w-6"} />}
                  >
                    Orders
                  </DropdownItem>
                  {
                    <DropdownItem
                      className={profileData.isAdmin ? "" : "hidden"}
                      key="categories"
                      href="/categories"
                      startContent={<TagIcon className={"w-6"} />}
                    >
                      Categories
                    </DropdownItem>
                  }
                  {
                    <DropdownItem
                      className={profileData.isAdmin ? "" : "hidden"}
                      key="menu-items"
                      href="/menu-items"
                      startContent={<MenuIcon className={"w-6"} />}
                    >
                      Menu Items
                    </DropdownItem>
                  }
                  {
                    <DropdownItem
                      className={profileData.isAdmin ? "" : "hidden"}
                      key="users"
                      href="/users"
                      startContent={<UsersIcon className={"w-6"} />}
                    >
                      Users
                    </DropdownItem>
                  }
                  <DropdownItem
                    key="signOut"
                    startContent={<SignOutIcon className={"w-6"} />}
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {profileData != null && !profileData.isAdmin && (
                <Button
                  as={Link}
                  href="/cart"
                  className="bg-transparent relative min-w-10"
                  startContent={<CartIcon className={"w-8 stroke-white"} />}
                >
                  {cartProducts.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-primary text-dark text-xs text-center absolute right-1 top-0">
                      {cartProducts.length}
                    </span>
                  )}
                </Button>
              )}
            </div>
          ) : (
            <div className="flex gap-5 lg:gap-6 items-center text-sm lg:text-[18px]">
              {session === null && (
                <>
                  <Link href={"/login"} className="hover:text-primary ">
                    Login
                  </Link>
                  <Button
                    as={Link}
                    color="primary"
                    href={"/register"}
                    className=" font-semibold rounded-full px-6 py-2 text-dark block"
                  >
                    <span className="text-sm lg:text-[16px]">Sign Up</span>
                  </Button>
                </>
              )}
            </div>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
