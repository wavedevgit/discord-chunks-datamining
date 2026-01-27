/** Chunk was on web.js **/
/** chunk id: 67286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk643479 = require("./643479.js");
let i = [6, 7, 99],
  a = {
    get: o
  };

function o(e, t, n) {
  if (s(t)) {
    t.type = "image/jpeg";
    let i = n + t.JPEGInterchangeFormat.value;
    t.image = e.buffer.slice(i, i + t.JPEGInterchangeFormatLength.value), (0, r.L$)(t, "base64", function() {
      return (0, r.Zo)(this.image)
    })
  }
  return t
}

function s(e) {
  return e && (true === e.Compression || i.includes(e.Compression.value)) && e.JPEGInterchangeFormat && e.JPEGInterchangeFormat.value && e.JPEGInterchangeFormatLength && e.JPEGInterchangeFormatLength.value
}