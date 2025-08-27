/** Chunk was on web.js **/
/** chunk id: 798451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk849572 = require("./849572.js"),
  Chunk647438 = require("./647438.js");

function a(e, t, n) {
  let a = (0, i.useMemo)(() => new(0, r.y), []),
    {
      children: o,
      items: s,
      collection: l
    } = e;
  return (0, i.useMemo)(() => l || t(a.build({
    children: o,
    items: s
  }, n)), [a, o, s, l, n, t])
}