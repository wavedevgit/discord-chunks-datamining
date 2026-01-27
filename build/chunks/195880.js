/** Chunk was on web.js **/
/** chunk id: 195880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => o
});
var Chunk661191 = require("./661191.js");
let i = 0,
  a = new Chunk661191.SnowflakeSequence;

function o() {
  let e = Date.now();
  return i !== e && (a.reset(), i = e), r.default.fromTimestampWithSequence(e, a)
}