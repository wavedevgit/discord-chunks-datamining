/** Chunk was on web.js **/
/** chunk id: 943815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./747238.js");
var Chunk679740 = require("./679740.js");
let i = {
    LATIN12: Chunk679740.Xh,
    LATIN24: Chunk679740.ID,
    ASIAN: Chunk679740.KC
  },
  a = 5,
  s = /(AM|PM)$/;

function o(e) {
  return null != e.match(s) ? i.LATIN24 : e.length <= a ? i.LATIN12 : i.ASIAN
}