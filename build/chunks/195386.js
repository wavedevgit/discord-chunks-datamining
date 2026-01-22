/** Chunk was on web.js **/
/** chunk id: 195386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk643479 = require("./643479.js");
let i = {
    isGifFile: o,
    findOffsets: l
  },
  a = 6,
  s = ["GIF87a", "GIF89a"];

function o(e) {
  return !!e && s.includes((0, r.hT)(e, 0, a))
}

function l() {
  return {
    gifHeaderOffset: 0
  }
}