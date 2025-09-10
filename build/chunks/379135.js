/** Chunk was on web.js **/
/** chunk id: 379135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk462049 = require("./462049.js");
let i = {
  isAvifFile: a,
  findAvifOffsets: o
};

function a(e) {
  if (!e) returnfalse;
  try {
    let t = (0, r.ER)(e, 0);
    return t && "avif" === t.majorBrand
  } catch (e) {
    returnfalse
  }
}

function o(e) {
  return (0, r.ku)(e)
}