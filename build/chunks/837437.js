/** Chunk was on web.js **/
/** chunk id: 837437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk190485 = require("./190485.js");
let i = {
  isAvifFile: o,
  findAvifOffsets: a
};

function o(e) {
  if (!e) returnfalse;
  try {
    let t = (0, r.ER)(e, 0);
    return t && "avif" === t.majorBrand
  } catch (e) {
    returnfalse
  }
}

function a(e) {
  return (0, r.ku)(e)
}