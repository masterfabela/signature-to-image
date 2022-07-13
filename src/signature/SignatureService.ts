import SignaturePad from "signature_pad";


export class SignatureService {

  signaturePad?: SignaturePad

  constructor(htmlElement: HTMLCanvasElement) {
    this.signaturePad = new SignaturePad(htmlElement)
  }

  savePNG() {
    if (!this.signaturePad.isEmpty()) {
      return this.signaturePad.toDataURL()
    }
  } 

  clearDraw(){
    this.signaturePad.clear()
  }

}