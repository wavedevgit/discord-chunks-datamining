/** Chunk was on web.js **/
/** chunk id: 506438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk462049 = require("./462049.js");
let i = {
  isHeicFile: a,
  findHeicOffsets: o
};

function a(e) {
  if (!e) returnfalse;
  let t = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
  try {
    let n = (0, r.ER)(e, 0);
    return n && false !== t.indexOf(n.majorBrand)
  } catch (e) {
    returnfalse
  }
}

function o(e) {
  return (0, r.ku)(e)
}