## markdown2pdf

This script converts Markdown files to PDF documents using the `markdown-pdf` library.

### Installation

1. **Clone the repository:**
   - Open your terminal or command prompt and navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:
     ```bash
     git clone https://github.com/luongnv89/markdown2pdf.git
     ```

2. **Install the dependencies:**
   - Navigate to the cloned directory:
     ```bash
     cd markdown2pdf
     ```
   - Install the required libraries:
     ```bash
     npm install
     ```

### Usage

1. **Create a Markdown file:**
   - Create a Markdown file (e.g., `my_document.md`) with the content you want to convert to PDF.

2. **Run the script:**
   - Open your terminal or command prompt and navigate to the directory where you cloned the repository.
   - Run the following command:
     ```bash
     node markdown2pdf.js my_document.md [output_pdf_file]
     ```
     - Replace `my_document.md` with the name of your Markdown file.
     - Optionally replace `[output_pdf_file]` with the desired name for the output PDF file. If you don't specify an output file, the script will use the same name as the input file with a `.pdf` extension.

3. **View the PDF:**
   - The output PDF file will be created in the same directory as the script. You can open it using your preferred PDF viewer.

### Example

```
# My Document Title

This is some text in my Markdown document.

## Section Heading

Here's another section with more content.
```

To convert this Markdown content to PDF:

```bash
node markdown2pdf.js my_document.md
```

This will create a PDF file named `my_document.pdf` in the same directory as the script.

### Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.