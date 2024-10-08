import { Twilio } from "twilio";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Logging the incoming request data
    console.log("name, email, message: ", name, email, message);

    // Your Twilio credentials
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new Twilio(accountSid, authToken);

    // Compose the message body using the user's details
    const messageBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      // Send the WhatsApp message using Twilio
      const messageResponse = await client.messages.create({
        from: "whatsapp:+14155238886", // Twilio Sandbox WhatsApp number
        to: "whatsapp:+917746051290", // Recipient's WhatsApp number
        body: messageBody, // Use the constructed message body
      });

      console.log("Message sent with SID:", messageResponse.sid);
      res.status(200).json({ success: true, messageSid: messageResponse.sid });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
