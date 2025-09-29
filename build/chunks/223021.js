/** Chunk was on web.js **/
/** chunk id: 223021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js");
var Chunk136907 = require("./136907.js");
let i = {
    LATIN12: Chunk136907.latin12CompactTimeStamp,
    LATIN24: Chunk136907.latin24CompactTimeStamp,
    ASIAN: Chunk136907.asianCompactTimeStamp
  },
  a = 5,
  o = /(AM|PM)$/;

function s(e) {
  return null != e.match(o) ? i.LATIN24 : e.length <= a ? i.LATIN12 : i.ASIAN
}