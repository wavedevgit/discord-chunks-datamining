/** Chunk was on 44252 **/
/** chunk id: 790743, original params: t,a,i (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

function r(t) {
  let {
    transitionState: a,
    onClose: i,
    title: r,
    body: c,
    cta: o,
    closeLabel: u,
    onConfirm: d
  } = t, [p, h] = l.useState(false), k = async () => {
    h(true);
    try {
      await d(), i()
    } finally {
      h(false)
    }
  }, y = null != r ? r : e.intl.string(e.t.D94rwS), C = [];
  return null != u && C.push({
    variant: "secondary",
    text: u,
    onClick: i
  }), C.push({
    variant: "primary",
    text: o,
    onClick: k,
    loading: p
  }), (0, n.jsx)(s.Modal, {
    title: y,
    actions: C,
    transitionState: a,
    onClose: i,
    children: c
  })
}