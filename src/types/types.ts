import { z } from "zod";
import { contactSchema } from "@/app/lib/schema";

// Link and Photo Types
export type Link = { href: string; label: string };
export type LinkArray = Link[];

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type PhotoArray = Photo[];

// Type Schemas
export type ContactPageSchema = z.infer<typeof contactSchema>;

// Email Interface
export interface ContactFormEmailProps {
  name: string,
  email: string,
  message: string,
  access_key: string,
}

export interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck: boolean;
  name: string;
  email: string;
  message: string;
}
