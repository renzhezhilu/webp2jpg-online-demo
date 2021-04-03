# browser-image-conversion-dome
Here are some libraries about using the browser to do image processing (format conversion), and make the corresponding demo pages.

这里收集了一些关于使用浏览器做图片处理（格式转换）的库，并制作了相应的演示页面。
### demo
[github page](https://renzhezhilu.github.io/browser-image-conversion-dome/) or [gitee page](https://renzhezhilu.gitee.io/browser-image-conversion-dome/)


### format conversion

|format|demo|intput data type|from|
|---|-----|----|----|-----|---|
|mozjpeg|✔️|[Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)|[squoosh](https://github.com/GoogleChromeLabs/squoosh)|
|avif|✔️|[Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)|[squoosh](https://github.com/GoogleChromeLabs/squoosh)|
|webp|✔️|[Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)|[squoosh](https://github.com/GoogleChromeLabs/squoosh)|
|gif to webp|✔️| [arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)| [wasm-im](https://github.com/mk33mk333/wasm-im)|
|svg tiny|✔️|svg text|[libsvgo](https://github.com/dr-js/libsvgo)
|psd to png|||[WASM-ImageMagick](https://github.com/KnicKnic/WASM-ImageMagick)
||||[Magick.WASM](https://github.com/dlemstra/Magick.WASM)



<!-- ### local
Please use a static server to access html files. If you are familiar with node, [http-plug](https://github.com/renzhezhilu/http-plug) is recommended -->
