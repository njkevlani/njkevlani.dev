---
title: "Hosting"
---

Things that I learnt about hosting.

# Email

A `@gmail.com` account can be used for sending and receiving emails from a
custom domain like `@njkevlani.dev`. This can either be done using some paid
service or for free as well.

To be able to do it for free:

## Receiving Emails

Some domain name service providers provide email forwarding free of cost, like
Cloudflare. You can use them to forward all emails on your domain to you
personal Gmail account.

If your service provider does not provide this functionality (like GoDaddy,
which has paid plans providing integrations with other email providers), then
you can use something like <https://improvmx.com/>. It lets you use their IMPS
servers for forwarding emails from your custom domain to service like Gmail.
ImproveMX's free plan is generous enough for person/light use cases.

At the end of the day, all these are just IMPS servers, either your DNS
provider's or ImproveMX's or someone else's or your own hosted.

## Sending Emails

Gmail allows you to configure additional emails to be used for sending emails.

You can do it from Settings > All Settings > Accounts and Imports > Send mail
as.

Fill in details, for SMTP settings, you can use these:

- SMTP Host: smtp.gmail.com
- Port: 587
- Username: Your `@gmail` email.
- Password: can be generated using the steps mentioned here - <https://support.google.com/mail/answer/185833?hl=en>.

A verification email will be sent to the email that you with to be used as
sender, so you'll need to configure receiving emails first in order to configure
this.
