import {
  Body,
  Container,
  Head,
  Html,
  Markdown,
  Preview,
  Text,
} from '@react-email/components';
import { CSSProperties } from 'react';

interface ContactUsEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactUsEmail = ({
  name,
  email,
  message,
}: ContactUsEmailProps) => (
  <Html>
    <Head />
    <Preview>Vielen herzlichen Dank , dass Sie Wir anscheinend ihr Interesse geweckt haben {name}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hallo, Salute , welcome, ciao {name},</Text>
        <Text style={paragraph}>Wir haben Ihre Nachricht mit Freude erhalten</Text>
        <Markdown
          markdownContainerStyles={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #e5e7eb',
          }}
        >
          {message}
        </Markdown>
        <Text style={paragraph}>
          Sie werden zeitnah von uns eien Antwort-Nachricht bezüglich Ihres Anliegens an folgende Adresse erhalten {email}.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: CSSProperties = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph: CSSProperties = {
  fontSize: '16px',
  lineHeight: '26px',
};