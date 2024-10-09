import { Twilio } from "twilio";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Twilio credentials from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const apiKey = process.env.TWILIO_API_KEY;
    const apiSecret = process.env.TWILIO_API_SECRET;

    if (!accountSid || !apiKey || !apiSecret) {
      return res
        .status(500)
        .json({ success: false, error: "Twilio credentials not set" });
    }

    const client = new Twilio(apiKey, apiSecret, { accountSid });

    const messageBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      const messageResponse = await client.messages.create({
        from: "whatsapp:+14155238886",
        to: "whatsapp:+917746051290",
        body: messageBody,
      });

      res.status(200).json({ success: true, messageSid: messageResponse.sid });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
