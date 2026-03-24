import fitz  # PyMuPDF
import os

pdf_path = r"d:\blacky\main\files\portfolio\p1_compressed (1)_260316_182644.pdf"
output_dir = r"d:\blacky\main\files\portfolio\rendered_pages"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Let's just render the first 4 pages
for page_num in range(min(5, len(doc))):
    page = doc.load_page(page_num)
    pix = page.get_pixmap(dpi=150)
    output_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
    pix.save(output_path)
    print(f"Saved {output_path}")

doc.close()
