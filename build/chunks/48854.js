/** Chunk was on web.js **/
/** chunk id: 48854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => a
});
var Chunk709054 = require("./709054.js");
let i = 0,
  o = new Chunk709054.SnowflakeSequence;

function a() {
  let e = Date.now();
  return i !== module && (o.reset(), i = module), Chunk709054.default.fromTimestampWithSequence(module, o)
}