/** Chunk was on web.js **/
/** chunk id: 555578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
});
var Chunk530702 = require("./530702.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n) {
  let a = (0, i.useMemo)(() => new(0, r.G), []),
    {
      children: s,
      items: o,
      collection: l
    } = e;
  return (0, i.useMemo)(() => l || t(a.build({
    children: s,
    items: o
  }, n)), [a, s, o, l, n, t])
}