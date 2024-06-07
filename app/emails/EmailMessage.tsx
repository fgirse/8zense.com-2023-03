import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

type MessageEmailProp = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  message: string;
};

const EmailMessage = ({
  firstName,
  lastName,
  mobileNumber,
  email,
  message,
}: MessageEmailProp) => {
  const PreviewText = "Ihre Anfrage an 8zense.com";
  const fullName = `${firstName} ${lastName}`;
  return (
    <Html>
      <Head />
      <Preview>{PreviewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[20px] max-w-4xl p-[20px]">
            <Heading className="text-left text-[20px] font-normal text-black">
              <strong>Details Here . . .</strong>
            </Heading>
            <Hr className="mx-0 my-[16px] w-full" />
            <Text className="text-[14px] leading-[24px] text-black">
              <b>Full Name :</b>
              {fullName}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <b>Mobile Number :</b>
              {mobileNumber}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <b>Email :</b>
              {email}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <b>Message :</b>
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailMessage;
