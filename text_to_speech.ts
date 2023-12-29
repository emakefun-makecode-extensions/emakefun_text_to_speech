/**
 * TextToSpeech module
 */
//% block="Emakefun"
namespace emakefun {

  /**
   * Class to represent TextToSpeech module
   */
  export class TextToSpeech extends I2cDevice {
    /**
     * Constructor
     * @param i2c_address I2C address of the module, default 0x40
     */
    constructor(i2c_address: number = 0x40) {
      super(i2c_address);
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
      this.i2cWrite([0xFD, 0x00, text_bytes.length + 2, 0x01, 0x04, text_bytes]);
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
      this.i2cWrite([0xFD, 0x00, text_bytes.length + 2, 0x01, 0x04, text_bytes]);
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