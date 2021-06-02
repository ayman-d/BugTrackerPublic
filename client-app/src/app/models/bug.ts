import { Interface } from "readline";

export interface IBug {
  id: string;
  title: string;
  description: string;
  createdOn: string;
  admin: string;
  developer: string;
  category: string;
  priority: string;
  status: string;
  resolvedOn: string;
}

export default IBug;
