/** Chunk was on 68720 **/
/** chunk id: 70846, original params: t,r,e (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk426642 = require("./426642.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk778565 = require("./778565.js");
let l = t => {
  let {
    transitionState: r,
    errors: e,
    onClose: l
  } = t, d = i.useMemo(() => [{
    variant: "secondary",
    text: o.intl.string(o.t["NX+WJN"]),
    onClick: l
  }], [l]);
  return (0, s.jsx)(n.u_l, {
    title: o.intl.string(o.t.AUIsQU),
    transitionState: r,
    onClose: l,
    actions: d,
    children: (0, s.jsx)("div", {
      className: c.errors,
      children: e.map(t => (0, s.jsx)(a.Z, {
        error: t
      }, t.filename))
    })
  })
}