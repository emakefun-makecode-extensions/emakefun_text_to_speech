# MakeCode Extension for Emakefun Text To Speech

## Introduction

- This project implements a MakeCode extension for Microbit to integrate the Emakefun text to speech (TTS) module's capabilities on the micro:bit.

- Through this extension, you can easily synthesize speech from text and play back on a speaker using the Emakefun TTS module in the MakeCode Blocks editor.

## Usage

- Use the createTextToSpeech block to create an instance of the TTS module and configure the I2C address.

- Use the speakFromUtf8 block to speak a string of text encoded in UTF-8.

- Use the speakFromBase64 block to speak a string of text encoded in base64.

- Insert pauses between speak calls to separate phrases.

## Example

You can copy the code from below or view the project (blocks and JavaScript view) [here](https://makecode.microbit.org/_UzAcv10uvc5z).

```blocks
let tts = Emakefun.createTextToSpeech(64)

basic.forever(function() {
  tts.speakFromUtf8('hello world')
  basic.pause(2000)
  tts.speakFromBase64('5LiA5LqM5LiJ5Zub5LqU')
  basic.pause(2000)
})
```

## FAQ

如何合成播报中文，请参考文档: [FAQ.md](docs/FAQ.md)
