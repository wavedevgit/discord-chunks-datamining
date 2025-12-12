/** Chunk was on web.js **/
/** chunk id: 98650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk872175 = require("./872175.js"),
  Chunk493773 = require("./493773.js");

function a(e) {
  let t = (0, r.Z)(e);
  (0, i.ZP)(() => {
    function e() {
      var r;
      null == (r = t.current) || r.call(t), n = requestAnimationFrame(e)
    }
    let n = requestAnimationFrame(e);
    return () => cancelAnimationFrame(n)
  })
}