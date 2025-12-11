/** Chunk was on web.js **/
/** chunk id: 223021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js");
var Chunk549578 = require("./549578.js");
let i = {
    LATIN12: Chunk549578.latin12CompactTimeStamp,
    LATIN24: Chunk549578.latin24CompactTimeStamp,
    ASIAN: Chunk549578.asianCompactTimeStamp
  },
  a = 5,
  o = /(AM|PM)$/;

function s(e) {
  return null != e.match(o) ? i.LATIN24 : e.length <= a ? i.LATIN12 : i.ASIAN
}