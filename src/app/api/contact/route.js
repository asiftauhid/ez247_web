import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'asiftauhid717@gmail.com', // replace with your Gmail
      pass: '$2@Gmail$2@gmail',    // use an App Password, not your real password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'asiftauhid717@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}