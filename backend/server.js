const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "loganathantinkeshwari@gmail.com",
                pass: "Tinku_190706"
            }
        });

        const mailOptions = {
            from: email,
            to: "loganathantinkeshwari@gmail.com",
            subject: "New Contact Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.send("Message sent successfully!");
    } catch (error) {
        console.log(error);
        res.send("Failed to send message");
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});