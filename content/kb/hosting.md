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

## Sending Emails Programmatically

You can use email setup in this way to send emails programmatically as well.

Here is a `golang` code sample for the same:

```golang
addr := fmt.Sprintf("%s:%s", h.Cfg.SMTPHost, h.Cfg.SMTPPort)
auth := smtp.PlainAuth("", h.Cfg.SMTPUsername, h.Cfg.SMTPPassword, h.Cfg.SMTPHost)

msg := fmt.Appendf(nil, "From: %s <%s>\r\n"+
    "To: %s\r\n"+
    "Subject: Test Email\r\n"+
    "\r\n"+
    "This is an test email to test sending email using custom email via Gamil\r\n", h.Cfg.SMTPSenderName, h.Cfg.SMTPEmail, email)

err := smtp.SendMail(addr, auth, h.Cfg.SMTPEmail, []string{email}, msg)
if err != nil {
    log.Printf("Failed to send email to %s: %v", email, err)
}
```

- `h.Cfg.SMTPUsername` is your `@gmail` address.
- `h.Cfg.SMTPPassword` is the SMTP password that you generated earlier.
- `h.Cfg.SMTPEmail` is your email on your custom domain.

Notice that we are using `h.Cfg.SMTPEmail` twice, in `smtp.SendMail`, as well as
in `From` header. Without this, the `@gmail` address is used instead of your
custom domain email!
