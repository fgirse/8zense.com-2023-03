import { NEXT_URL } from 'next/dist/client/components/app-router-headers';
import EmailTemplate  from '@/components/email/ContactUsForm';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Fernanda <sender info@8zense.com>",
      to: "${formData.email}",
      subject: 'Ihre Nachricht',
      text: "Sehr geehrte Frau/ Herr ${'{firstname}'",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}