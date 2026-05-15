const { Resend } = require("resend");

const resend = new Resend("re_QNT6ProK_JkZe6sCyBEHHAng9mT1X5FRG");

async function send() {
  try {
    const data = await resend.emails.send({
      from: "SendPackage <noreply@sendpackage.xyz>",
      to: "mredsm4@gmail.com",
      subject: "Wire Transfer Received — Complete Your Delivery",
      text: `We've received your wire transfer of $192,050.00 successfully.

Tracking ID: SDT-P7KK5-US

Your cash is ready for delivery. To proceed, complete your tracking at sendpackage.xyz and select a delivery option:

Standard Delivery — (5-10 business days)
Priority Delivery — (2-3 business days)

Once delivery fee is cleared, a courier will be assigned.

⚠️ Important: If no action is completed within 14 days, the funds will be returned to the sender.

Need help? Reach out to us at support@sendpackage.xyz.

— SendPackage`,
      html: `
        <p>We've received your wire transfer of <strong>$192,050.00</strong> successfully.</p>
        <p><strong>Tracking ID:</strong> SDT-P7KK5-US</p>
        <p>Your cash is ready for delivery. Complete your tracking and select a delivery option:</p>
        <p><strong>Standard:</strong> (5-10 business days)<br><strong>Priority:</strong> (2-3 business days)</p>
        <p><a href="https://sendit-mu.vercel.app/">Complete your delivery →</a></p>
        <p style="color:#B45309;font-size:13px;margin-top:16px;">⚠️ If no action is completed within 14 days, the funds will be returned to the sender.</p>
        <p style="color:#666;font-size:13px;margin-top:20px;">Need help? Message us at <a href="mailto:support@sendpackage.xyz">support@sendpackage.xyz</a></p>
      `
    });

    console.log("Sent:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

send();