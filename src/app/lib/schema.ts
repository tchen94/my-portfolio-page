import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().nonempty("Please provide your name."),
    email: z.string().nonempty("Please provide your email.").email(),
    message: z.string().nonempty("Message can't be empty."),
    access_key: z.string().nonempty("Access Key Needed"),
});