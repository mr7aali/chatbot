import { IChatBotMessage } from "@/components/layout/Chatboot";

type UserProfile = {
  _id?: string;
  name: string;
  email?: string;
  image: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  isAdmin: boolean;
  createdAt?: string;
  updatedAt?: string;
  ChatingWithSystem:IChatBotMessage[]

};

export default UserProfile;