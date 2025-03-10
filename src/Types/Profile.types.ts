import { ReactElement } from "react";

export interface CookProfileType {
  img: string | ReactElement;
  name: string;
  date?: string;
  className?: string;
}
