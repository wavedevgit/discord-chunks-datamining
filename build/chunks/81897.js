/** Chunk was on web.js **/
/** chunk id: 81897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk211266 = require("./211266.js"),
  Chunk493773 = require("./493773.js");

function a() {
  let e = (0, Chunk211266.Z)(() => new AbortController);
  return (0, Chunk493773.zq)(() => {
    module.abort()
  }), module.signal
}