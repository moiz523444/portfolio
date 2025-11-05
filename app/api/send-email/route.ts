import { Resend } from "resend";
import React from "react";
import ContactEmail from "@/email/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Finnovator Contact <onboarding@resend.dev>",
      to: "finnovatormeweb@gmail.com",
      subject: "New Contact Form Submission",
      react: React.createElement(ContactEmail, { name, email, message }),
    });

    if (error) {
      console.error("Resend email error:", error);
      return new Response(JSON.stringify({ success: false, error }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err: any) {
    console.error("Resend email error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err?.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}

// import { Resend } from "resend";
// import ContactEmail from "@/components/section/ContactEmail";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     const { data, error }  = await resend.emails.send({
//       from: "Finnovator Contact <moizfinnovator@gmail.com>", // from your email
//       to: "usama_khan1994@live.com", // your receiving email
//       subject: "New Contact Form Submission",
//       react: <ContactEmail name={name} email={email} message={message} />, // call the component as a function
//     });
//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }
//     return new Response(JSON.stringify({ success: true, data }), { status: 200 });
//   } catch (error: string) {
//     console.error("Resend email error:", error);
//     return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
//   }
// }

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: <EmailTemplate firstName="John" />,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json({ data });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
