import { sendMail } from '../../utils';

export default function handler(req, res) {
  if (req.method === 'POST') {
    sendMail(req.body);
  }
  res.status(200).json({ status: 'OK' });
}
