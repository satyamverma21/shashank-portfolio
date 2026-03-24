from PyPDF2 import PdfReader
from PIL import Image
import io
import os

output_dir = r"d:\blacky\main\files\portfolio\pages"
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(r"d:\blacky\main\files\portfolio\p1_compressed (1)_260316_182644.pdf")
print(f"Total pages: {len(reader.pages)}")

for i, page in enumerate(reader.pages):
    if '/XObject' in page['/Resources']:
        xObject = page['/Resources']['/XObject'].get_object()
        count = 0
        for obj in xObject:
            if xObject[obj]['/Subtype'] == '/Image':
                try:
                    data = xObject[obj].get_data()
                    w = xObject[obj]['/Width']
                    h = xObject[obj]['/Height']
                    
                    filt = xObject[obj].get('/Filter', '')
                    if isinstance(filt, list):
                        filt = filt[0] if filt else ''
                    filt = str(filt)
                    
                    if '/DCTDecode' in filt:
                        ext = 'jpg'
                        fname = os.path.join(output_dir, f"page_{i+1:02d}_{count}.{ext}")
                        with open(fname, 'wb') as f:
                            f.write(data)
                        print(f"  Saved: {fname} ({w}x{h})")
                    elif '/FlateDecode' in filt:
                        cs = xObject[obj].get('/ColorSpace', '/DeviceRGB')
                        cs = str(cs)
                        if 'RGB' in cs:
                            img = Image.frombytes("RGB", (w, h), data)
                        elif 'Gray' in cs:
                            img = Image.frombytes("L", (w, h), data)
                        else:
                            img = Image.frombytes("RGB", (w, h), data)
                        fname = os.path.join(output_dir, f"page_{i+1:02d}_{count}.png")
                        img.save(fname)
                        print(f"  Saved: {fname} ({w}x{h})")
                    elif '/JPXDecode' in filt:
                        ext = 'jp2'
                        fname = os.path.join(output_dir, f"page_{i+1:02d}_{count}.{ext}")
                        with open(fname, 'wb') as f:
                            f.write(data)
                        print(f"  Saved: {fname} ({w}x{h})")
                    else:
                        print(f"  Page {i+1} obj {obj}: Unknown filter {filt}, size {w}x{h}")
                    count += 1
                except Exception as e:
                    print(f"  Page {i+1} obj {obj}: Error - {e}")
    else:
        print(f"  Page {i+1}: No images found")
