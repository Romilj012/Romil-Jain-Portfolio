import PDFDocument from "pdfkit"
import fs from "fs"

const doc = new PDFDocument()
doc.pipe(fs.createWriteStream("public/resume.pdf"))

// Add resume content
doc.fontSize(20).text("ROMIL JAIN", { align: "center" })
doc.fontSize(12).text("Dallas, TX | (315) 766-4572 | romilj01@gmail.com")
// ... add the rest of the resume content

doc.end()

