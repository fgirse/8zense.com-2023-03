import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailMessage from "@/app/api/emails/EmailMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest) {
    const {firstName,lastName,mobileNumber,email,message} = await req.json();

    try{
        const data = await resend.emails.send({
          from: 'Theresa <onboarding@resend.dev>', //your verified domain
            to  : email, //the email address you want to send a message 
            subject : 'Ihre Anfrage', //email subject
            react : EmailMessage({firstName,lastName,mobileNumber,email,message})
        })

        return NextResponse.json(data)
          } catch(error) {
          console.log(error)
    }
}



      