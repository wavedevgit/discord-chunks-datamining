/** Chunk was on web.js **/
/** chunk id: 423661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk872863 = require("./872863.js");
let i = {
  isHeicFile: a,
  findHeicOffsets: s
};

function a(e) {
  if (!e) returnfalse;
  let t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
  try {
    let n = (0, r.vN)(e, 0);
    return n && false !== t.indexOf(n.majorBrand)
  } catch (e) {
    returnfalse
  }
}

function s(e) {
  return (0, r.OH)(e)
}