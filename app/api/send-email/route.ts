import { Resend } from "resend";
import ContactEmail from "@/email/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log(process.env.RESEND_API_KEY)
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Finnovator Contact <moizfinnovator@gmail.com>", // from your email
      to: "moizfinnovator@gmail.com", // your receiving email
      subject: "New Contact Form Submission",
      react: ContactEmail({ name, email, message }), // call the component as a function
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error("Resend email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
