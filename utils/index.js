const inlineCSS = require('inline-css');
const mailgun = require('mailgun-js')({
  domain: 'mg.rafinbassfishing.com.mx',
  apiKey: process.env.MAILGUN_KEY,
});

const getTemplate = (name, phone, email, text) => `
<div>
  <style>
    h2 { color: #256cb2; }
    img.logo { width: 120px }
  </style>
  <strong>From:</strong> ${name} <br />
  ${phone ? `<strong>Phone:</strong> ${phone} <br />` : ''}
  ${email ? `<strong>Email:</strong> ${email} <br />` : ''}
  <strong>Message:</strong> <br />
  ${text}
  <br />
  <img class="logo" src="https://rafinbassfishing.com.mx/l_rbfgao_wh90.png" />
</div>
`;


const getMessage = async ({ name, phone, email, subject, comments }) => {
  const html = await inlineCSS(getTemplate(name, phone, email, comments), { url: 'fake' });
  return {
    from: 'Rafin Bass Fishing <no-reply@rafinbassfishing.com.mx>',
    to: 'esantinie@gmail.com',
    subject,
    html,
  };
}

export const sendMail = async props => {
  const message = await getMessage(props);

  mailgun.messages().send(message, (error, body) => {
    if (error) throw error;
    console.log('Mail Sent: ', body.id);
  });
}
