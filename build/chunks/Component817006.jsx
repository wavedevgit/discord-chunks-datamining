/** Chunk was on 71138 **/
/** chunk id: 817006, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk974175 = require("./974175.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    camera: t
  } = e;
  if (null == t) return (0, n.jsx)(l.y$y, {
    type: l.y$y.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (!(o.R[t] || true === e)) return (0, n.jsx)(o.q7, {
      label: t,
      value: e
    }, t)
  });
  return (0, n.jsxs)(l.BJc, {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-md/medium",
      children: d.intl.string(d.t["2AGBWH"])
    }), (0, s.C6)(r)]
  })
}