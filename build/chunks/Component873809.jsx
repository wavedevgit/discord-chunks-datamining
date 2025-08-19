/** Chunk was on 67753 **/
/** chunk id: 873809, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx");

function e(t) {
  let {
    transitionState: i,
    header: a,
    body: e,
    confirmText: r,
    onClose: o,
    onConfirm: u
  } = t;
  return (0, n.jsx)(s.Modal, {
    title: a,
    subtitle: e,
    transitionState: i,
    onClose: o,
    actions: [{
      text: r,
      onClick: () => {
        o(), null == u || u()
      },
      variant: "primary"
    }]
  })
}