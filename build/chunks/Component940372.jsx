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
  } = t, o = i.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t["NX+WJN"]),
    onClick: c
  }], [c]);
  return (0, a.jsx)(n.aFV, {
    title: d.intl.string(d.t.AUIsQU),
    transitionState: s,
    onClose: c,
    actions: o,
    children: (0, a.jsx)("div", {
      className: l.s,
      children: e.map(t => (0, a.jsx)(r.A, {
        error: t
      }, t.filename))
    })
  })
}