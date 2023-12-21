import { NextResponse } from "next/server";
import axios from 'axios';

export const POST = async (request) => {
    const { email } = await request.json();
    console.log('this is the email', email);

    try {
     axios({
            method: "post",
            url: "https://live.waypointapi.com/v1/email_messages",
            headers: {
                "Content-Type": "application/json",
            },
            auth: {
                username: "658360bc7d67cb7984032eca",
                password: "FvJPVTto7x6wWqaHSHGiv9UG"
            },
            data: {
                "templateId": "wptemplate_ZN8cZEyQSnSdaVrk",
                "to": 'hoedd294@gmail.com',
                "variables": {
                    "displayName": "Tracy",
                    "giftCardPrice": "$550"
                }
            }
        });
        console.log('done')
        return new NextResponse('Subscribed', { status: 200 });
    } catch (error) {
        console.log(error.response.data);
        return new NextResponse("Something went wrong!", { status: 500 });
    }
};
