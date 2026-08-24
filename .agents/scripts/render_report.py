import fitz, os
pdf='attached_assets/Parent_Plus_Cameroon_Project_Report_1787404810636.pdf'
out='.agents/outputs/report_pages'
os.makedirs(out, exist_ok=True)
doc=fitz.open(pdf)
print('pages', doc.page_count)
print('metadata', doc.metadata)
for i,p in enumerate(doc):
    pix=p.get_pixmap(matrix=fitz.Matrix(1.5,1.5), alpha=False)
    path=f'{out}/page-{i+1}.png'
    pix.save(path)
    print(path, p.rect)
