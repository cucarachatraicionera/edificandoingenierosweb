import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, telefono, email, tema, mensaje } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Edificando Web <no-reply@edificandoingenieros.com>",
      to: [
        "edificandoingenierossas@gmail.com",
        "backupcliente@gmail.com", // ← agrega aquí cualquier otro correo adicional
      ],
      subject: `Mensaje nuevo: ${tema || "Contacto Web"}`,
      html: `
        <h3>Nuevo mensaje del formulario de contacto:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tema:</strong> ${tema}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    });

    return res.status(200).json({ message: "Correo enviado correctamente", data });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ message: "Error al enviar el correo" });
  }
}
