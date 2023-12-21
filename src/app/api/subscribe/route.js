import { NextResponse } from "next/server";
import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: "e857cc58235072589f121b9397e88d38-us21",
  server: "us21",
});


export const POST = async (request) => {
    const body = await request.json();
    const {email} = body;
    console.log(email)
    try {

         const response = await client.lists.addListMember(
             "9f0106babc", // Replace with your actual audience ID
             {
               email_address: email,
               status: "subscribed",
             }
         )
        console.log(email)
        return new NextResponse('user has been subscibed', {status: 200})
    } catch (error) {
        console.log(email)
        return new NextResponse(JSON.stringify(error.message), {status: 500})
    }
}

