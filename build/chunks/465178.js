/** Chunk was on web.js **/
/** chunk id: 465178, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk822632 = require("./822632.js");
let i = {
    isGifFile: s,
    findOffsets: l
  },
  a = 6,
  o = ["GIF87a", "GIF89a"];

function s(e) {
  return !!e && o.includes((0, r.oH)(e, 0, a))
}

function l() {
  return {
    gifHeaderOffset: 0
  }
}