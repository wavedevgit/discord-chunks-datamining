/** Chunk was on 80960 **/
/** chunk id: 189648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    camera: t
  } = e;
  if (null == t) return (0, r.jsx)(l.$jN, {
    type: l.$jN.Type.SPINNING_CIRCLE
  });
  let n = i().map(t, (e, t) => {
    if (!(s.al[t] || true === e)) return (0, r.jsx)(s.ck, {
      label: t,
      value: e
    }, t)
  });
  return (0, r.jsx)(l.hjN, {
    tag: l.RB0.H2,
    title: c.intl.string(c.t["2AGBWF"]),
    children: (0, o.VE)(n)
  })
}