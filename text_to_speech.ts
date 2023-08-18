/**
 * TextToSpeech module
 */
//% block="Emakefun"
namespace Emakefun {

  /**
   * Class to represent TextToSpeech module
   */
  export class TextToSpeech {
    private i2c_device: Emakefun.I2cDevice = undefined

    /**
     * Constructor
     * @param i2c_address I2C address of the module, default 0x40
     */
    constructor(i2c_address: number = 0x40) {
      this.i2c_device = new Emakefun.I2cDevice(i2c_address);
    }

    /**
     * Speak text from UTF-8 encoded string
     * @param text Text to speak, as UTF-8 encoded string
     */
    //% block="$this speak from utf-8 encoded string $text"
    //% subcategory="TextToSpeech"
    //% this.defl=tts
    //% inlineInputMode=external
    speakFromUtf8(text: string) {
      let text_bytes = Buffer.fromUTF8(text);
      let data = Buffer.fromArray([0x00, text_bytes.length + 2, 0x01, 0x04]).concat(text_bytes);
      this.i2c_device.writeBytes(0xFD, data);
    }

    /**
     * Speak text from Base64 encoded string
     * @param text Text to speak, as Base64 encoded string
     */
    //% block="$this speak from base64 encoded string $text"
    //% subcategory="TextToSpeech"
    //% this.defl=tts
    //% inlineInputMode=external
    speakFromBase64(text: string) {
      let text_bytes = Buffer.fromBase64(text);
      let data = Buffer.fromArray([0x00, text_bytes.length + 2, 0x01, 0x04]).concat(text_bytes);
      this.i2c_device.writeBytes(0xFD, data);
    }
  }

  /**
   * Create a new TextToSpeech instance
   * @param i2c_address I2C address of the module, default 0x40
   */
  //% block="create text to speech|I2C address = $i2c_address"
  //% subcategory="TextToSpeech"
  //% blockSetVariable=tts
  //% i2c_address.defl=0x40
  //% weight=100
  //% inlineInputMode=external
  export function createTextToSpeech(i2c_address: number): TextToSpeech {
    return new TextToSpeech(i2c_address);
  }
}