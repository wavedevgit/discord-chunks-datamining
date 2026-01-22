/** Chunk was on 94022 **/
/** chunk id: 924037, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./457529.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js");
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