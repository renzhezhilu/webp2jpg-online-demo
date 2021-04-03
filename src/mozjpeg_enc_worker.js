onmessage = function(e) {
importScripts('mozjpeg_enc.js');
console.log(self.ss);
    let {imgData,width,height,fileSize} = e.data
    // console.log(mozjpeg_enc());
    mozjpeg_enc().then(mozjpeg_enc_wasm => {
        // console.log(mozjpeg_enc_wasm);
        let jpgImg = mozjpeg_enc_wasm.encode(
            imgData,
            width,
            height, {
                quality: 75,
                baseline: false,
                arithmetic: false,
                progressive: true,
                optimize_coding: true,
                smoothing: 0,
                color_space: 3,
                quant_table: 3,
                trellis_multipass: false,
                trellis_opt_zero: false,
                trellis_opt_table: false,
                trellis_loops: 1,
                auto_subsample: true,
                chroma_subsample: 2,
                separate_chroma_quality: false,
                chroma_quality: 75,
            }
        );
        let outImgBlob = new Blob([jpgImg.buffer], {
            type: "image/jpg"
        });
        postMessage({
            url: outImgBlob,
            size: (fileSize / 1024).toFixed(1) + ' Kb -> ' +
                (outImgBlob.size / 1024).toFixed(1) + ' Kb'
        });
    });
  }