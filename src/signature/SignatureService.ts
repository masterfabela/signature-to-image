import SignaturePad from 'signature_pad';

export class SignatureService {
  signaturePad?: SignaturePad;

  constructor(htmlElement: HTMLCanvasElement) {
    this.signaturePad = new SignaturePad(htmlElement);
  }

  private dataURLToBlob(dataUrl: string): Blob {
    const parts = dataUrl.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  private download(dataUrl: string, fileName: string) {
    console.log('download');
    const blob = this.dataURLToBlob(dataUrl);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  savePNG() {
    if (this.signaturePad && !this.isSignatureEmpty()) {
      this.download(this.signaturePad.toDataURL(), 'signature.png');
    }
  }

  isSignatureEmpty() {
    return this.signaturePad && this.signaturePad.isEmpty();
  }

  clearDraw() {
    if (this.signaturePad) {
      this.signaturePad.clear();
    }
  }
}
