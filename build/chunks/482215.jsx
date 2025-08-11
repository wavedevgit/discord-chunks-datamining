/** Chunk was on web.js **/
/** chunk id: 482215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d,
  i: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk97519 = require("./97519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk857192 = require("./857192.js"),
  Chunk953543 = require("./953543.js");
let l = 4,
  c = 64,
  u = (0, Chunk97519.U)(e => ({
    horizontalSpacing: l,
    verticalSpacing: l,
    maxHorizontalSpacing: c,
    maxVerticalSpacing: c,
    setHorizontalSpacing: t => {
      e({
        horizontalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    },
    setVerticalSpacing: t => {
      e({
        verticalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    }
  }));

function d() {
  let e = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.layoutDebuggingEnabled),
    {
      horizontalSpacing: t,
      verticalSpacing: n
    } = u();
  return module ? <div className={Chunk953543.container}><div className={Chunk953543.gridOverlay} data-horizontal={exports > 0} data-vertical={require > 0} style={{
        "--custom-grid-horizontal-spacing": "".concat(exports, "px"),
        "--custom-grid-vertical-spacing": "".concat(require, "px")
      }} /></div> : null
}