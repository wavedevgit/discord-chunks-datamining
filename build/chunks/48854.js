/** Chunk was on web.js **/
/** chunk id: 48854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o
});
var Chunk709054 = require("./709054.js");
let i = 0,
  a = new Chunk709054.SnowflakeSequence;

function o() {
  let e = Date.now();
  return i !== e && (a.reset(), i = e), r.default.fromTimestampWithSequence(e, a)
}