/** Chunk was on 73322 **/
/** chunk id: 776045, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function r(t) {
  let {
    transitionState: n,
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
  }, y = null != r ? r : e.intl.string(e.t.D94rwc), C = [];
  return null != u && C.push({
    variant: "secondary",
    text: u,
    onClick: i
  }), C.push({
    variant: "primary",
    text: o,
    onClick: k,
    loading: p
  }), (0, a.jsx)(s.Modal, {
    title: y,
    actions: C,
    transitionState: n,
    onClose: i,
    children: c
  })
}