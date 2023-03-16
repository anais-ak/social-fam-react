import { IPost } from "@/types/post";
export interface IPerson {
  id: number;
  name: string;
  posts?: IPost[];
}
