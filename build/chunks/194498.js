/** Chunk was on web.js **/
/** chunk id: 194498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk66455 = require("./66455.js"),
  Chunk964486 = require("./964486.js");

function a(e) {
  let t = (0, r.A)(e);
  (0, i.Ay)(() => {
    function e() {
      var r;
      null == (r = t.current) || r.call(t), n = requestAnimationFrame(e)
    }
    let n = requestAnimationFrame(e);
    return () => cancelAnimationFrame(n)
  })
}