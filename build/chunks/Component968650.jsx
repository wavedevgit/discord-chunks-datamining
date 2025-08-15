/** Chunk was on 43057 **/
/** chunk id: 968650, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./49124.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js");
let a = t => {
  let {
    entry: e,
    transitionState: i,
    requestId: a,
    onClose: d
  } = t;
  return (0, n.jsx)(r.Modal, {
    title: "Debugging entry: ".concat(e.id),
    transitionState: i,
    actions: [],
    onClose: d,
    children: (0, n.jsx)("div", {
      style: {
        userSelect: "text",
        padding: "16px"
      },
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: (0, n.jsx)("pre", {
          children: JSON.stringify({
            entry: e,
            requestId: a
          }, null, 2)
        })
      })
    })
  })
}