# Microbit Extension: Emakefun Text To Speech

## Example

```blocks
let tts = emakefun.createTextToSpeech(64)

basic.forever(function () {
  tts.speakFromUtf8("hello world")
  basic.pause(2000)
  tts.speakFromBase64("5LiA5LqM5LiJ5Zub5LqU")
  basic.pause(2000)
})
```

## Eample Block
[https://makecode.microbit.org/_YrdhvjFbec3V](https://makecode.microbit.org/_YrdhvjFbec3V)
