"use client";
import GoogleIcon from "@/icons/GoogleIcon";
import { Button, Divider, Link } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import EmailInput from "@/components/common/form/EmailInput";
import PasswordInput from "@/components/common/form/PasswordInput";
import { Axios } from "@/components/hooks/useAxios";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState('');

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data ={email: "123@gmail.com",
  password: "123",}
     const res= await Axios.post("usersd/login",data) 
     console.log(res.data)
  }

  return (
    <section className="pt-12 pb-20">
      <h1 className="text-center text-primary text-4xl my-4">
        Login
      </h1>
      <form className="flex flex-col gap-2 max-w-lg mx-auto mt-12" onSubmit={handleFormSubmit}>
        <EmailInput emailValue={email} setEmail={setEmail} disabled={loginInProgress} className="mb-4" />
        <PasswordInput passwordValue={password} setPassword={setPassword} disabled={loginInProgress} />
        <div className="text-danger my-2">{error}</div>
        <Button type="submit" fullWidth isLoading={loginInProgress} isDisabled={loginInProgress} className="font-semibold">Login</Button>
        <div className="text-center mt-4 text-gray-400">
        dont&apos;t have an account? {' '}
          <Link href={"/register"} isDisabled={loginInProgress}>Sign Up</Link>
        </div>
        <div className="my-3 text-center grid grid-cols-3 items-center">
          <Divider />
          OR
          <Divider />
        </div>
        <Button
          fullWidth
          disabled={loginInProgress}
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="font-semibold text-dark bg-white border border-dark"
          startContent={<GoogleIcon className={"w-6"} />}>
          Login with Google
        </Button>
      </form>
    </section>
  )
}

export default LoginPage