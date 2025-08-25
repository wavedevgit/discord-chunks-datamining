/** Chunk was on web.js **/
/** chunk id: 223021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js");
var Chunk724913 = require("./724913.js");
let i = {
    LATIN12: Chunk724913.latin12CompactTimeStamp,
    LATIN24: Chunk724913.latin24CompactTimeStamp,
    ASIAN: Chunk724913.asianCompactTimeStamp
  },
  o = 5,
  a = /(AM|PM)$/;

function s(e) {
  return null != e.match(a) ? i.LATIN24 : e.length <= o ? i.LATIN12 : i.ASIAN
}