const inlineCSS = require('inline-css');
const mailgun = require('mailgun-js')({
  domain: 'mg.rafinbassfishing.com.mx',
  apiKey: process.env.MAILGUN_KEY,
});

const getTemplate = ({ name, phone, email, text, subject }) => `
<div>
  <style>
    h2 { color: #256cb2; }
    img.logo { width: 120px }
  </style>
  Hola Rafin! <br />
  <strong>From:</strong> ${name} <br />
  ${phone ? `<strong>Phone:</strong> ${phone} <br />` : ''}
  ${email ? `<strong>Email:</strong> ${email} <br />` : ''}
  <strong>Message:</strong> <br />
  ${text}
  <br />
  <img class="logo" src="https://rafinbassfishing.com.mx/l_rbfgao_wh90.png" />
</div>
`;

const getMessage = async (msgProps) => {
  const html = await inlineCSS(getTemplate(msgProps), { url: 'fake' });

  return {
    from: 'Rafin Bass Fishing <no-reply@rafinbassfishing.com.mx>',
    to: 'esantinie@gmail.com',
    subject: `${msgProps.subject}: ${msgProps.name}`,
    html,
  };
}

const sendMail = async props => {
  const message = await getMessage(props);

  await mailgun.messages().send(message, (error, body) => {
    if (error) throw error;
    Promise.resolve();
  });
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ msg: `invalid booking method: ${req.method}` });
  } else {
    console.log('sending mail');
    return sendMail(req.body).then(() => {
      console.log('Mail Sent');
      res.status(200).json({ status: 'OK', msg: 'Mail sent' });
    });
  }
}
