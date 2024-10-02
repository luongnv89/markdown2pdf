const markdownpdf = require("markdown-pdf"); // Import the markdown-pdf library for Markdown to PDF conversion
const fs = require("fs"); // Import the fs library for file system operations

function show_help() { // Function to display help message
  console.log("Usage: node markdown2pdf.js <input_markdown_file> [output_pdf_file]"); // Print the usage instructions
  console.log("  <input_markdown_file>: Path to the input Markdown file."); // Explain the input Markdown file argument
  console.log("  [output_pdf_file]: (Optional) Path to the output PDF file. If not provided, the generated PDF file will have the same name with the input file and at the same location."); // Explain the optional output PDF file argument
}

if (process.argv.length < 3 || process.argv.length > 4) { // Check if the number of arguments is correct
  show_help(); // Display help if arguments are incorrect
  process.exit(1); // Exit the program with an error code
}

const markdownFile = process.argv[2]; // Get the input Markdown file path from the command line arguments
const pdfFile = process.argv[3] || markdownFile.replace(/\.md$/, ".pdf"); // Get the output PDF file path from the command line arguments, or use the input file name with .pdf extension if not provided
// Convert Markdown to PDF
markdownpdf() // Create a new instance of the markdownpdf converter
  .from(markdownFile) // Set the input Markdown file
  .to(pdfFile, function () { // Set the output PDF file and specify the callback function
    console.log(`Converted ${markdownFile} to ${pdfFile}`); // Print a success message after the conversion is complete
  });
