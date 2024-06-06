import React from 'react'
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
} from '@react-email/components'

type MessageEmailProp = {
    firstName : string;
    lastName : string;
    mobileNumber : string;
    email : string;
    message : string;

}

const EmailMessage = ({firstName,lastName,mobileNumber,email,message}:MessageEmailProp) => {

    const PreviewText = "Ihre Anfrage an 8zense.com"
    const fullName = `${firstName} ${lastName}`;
  return (
    <Html>
        <Head/>
        <Preview>{PreviewText}</Preview>
        <Tailwind>
            <Body className='bg-white my-auto mx-auto font-sans'>
                <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
                    <Heading className='text-black text-[20px] font-normal text-left'>
                        <strong>Details Here . . .</strong>
                    </Heading>
                    <Hr className='my-[16px] mx-0 w-full'/>
                    <Text className='text-black text-[14px] leading-[24px]'>
                        <b>Full Name :</b>
                        {fullName}
                    </Text>
                    <Text className='text-black text-[14px] leading-[24px]'>
                        <b>Mobile Number :</b>
                        {mobileNumber}
                    </Text>
                    <Text className='text-black text-[14px] leading-[24px]'>
                        <b>Email :</b>
                        {email}
                    </Text>
                    <Text className='text-black text-[14px] leading-[24px]'>
                        <b>Message :</b>
                        {message}
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}


export default EmailMessage