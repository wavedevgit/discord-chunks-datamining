/** Chunk was on 80960 **/
/** chunk id: 189648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk392711 = require("./392711.js"),
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
  return (0, r.jsxs)(l.Kqy, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/medium",
      children: c.intl.string(c.t["2AGBWH"])
    }), (0, o.VE)(n)]
  })
}