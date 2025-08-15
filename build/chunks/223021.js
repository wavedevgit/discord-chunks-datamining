/** Chunk was on 31978 **/
/** chunk id: 223021, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./35282.js");
var Chunk724913 = require("./724913.js");
let l = {
    LATIN12: Chunk724913.latin12CompactTimeStamp,
    LATIN24: Chunk724913.latin24CompactTimeStamp,
    ASIAN: Chunk724913.asianCompactTimeStamp
  },
  o = /(AM|PM)$/;

function i(e) {
  return null != e.match(o) ? l.LATIN24 : e.length <= 5 ? l.LATIN12 : l.ASIAN
}