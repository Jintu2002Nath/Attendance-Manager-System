const nodemailer=require("nodemailer")

require('dotenv').config()

const mailSender=async(email, title, body)=>{


try{

    let transporter=nodemailer.createTransport({


        host:process.env.MAIL_HOST,

        auth:{

            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }


    })


    let info=transporter.sendMail({

        from:"Attendence MAnager JEC",
        to:`${email}`,

        subject:`${title}`,
        html:`${body}`

    })


    console.log(info)

    return info;

}


catch(error)
{
    console.log(error)

    console.log("Error in mailsending")

}






}


module.exports=mailSender
