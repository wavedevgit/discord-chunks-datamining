/** Chunk was on web.js **/
/** chunk id: 356826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk872863 = require("./872863.js");
let i = {
  isAvifFile: a,
  findAvifOffsets: s
};

function a(e) {
  if (!e) returnfalse;
  try {
    let t = (0, r.vN)(e, 0);
    return t && "avif" === t.majorBrand
  } catch (e) {
    returnfalse
  }
}

function s(e) {
  return (0, r.OH)(e)
}