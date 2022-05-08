import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "908f991ec9bceb",
      pass: "1570006320ed6f"
    }
});

export class NodeMailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Fernando Ghiberti <ghiberti85@gmail.com>',
            subject,
            html: body,
        })

    };
}