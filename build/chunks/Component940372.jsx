/** Chunk was on 84981 **/
/** chunk id: 940372, original params: t,s,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk563863 = require("./563863.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk267322 = require("./267322.js");
let c = t => {
  let {
    transitionState: s,
    errors: e,
    onClose: c
  } = t, d = i.useMemo(() => [{
    variant: "secondary",
    text: l.intl.string(l.t["NX+WJN"]),
    onClick: c
  }], [c]);
  return (0, r.jsx)(a.aFV, {
    title: l.intl.string(l.t.AUIsQU),
    transitionState: s,
    onClose: c,
    actions: d,
    children: (0, r.jsx)("div", {
      className: o.s,
      children: e.map(t => (0, r.jsx)(n.A, {
        error: t
      }, t.filename))
    })
  })
}