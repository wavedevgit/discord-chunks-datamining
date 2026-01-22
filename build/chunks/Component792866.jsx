/** Chunk was on 11487 **/
/** chunk id: 792866, original params: t,a,i (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js");

function e(t) {
  let {
    transitionState: a,
    header: i,
    body: e,
    confirmText: r,
    onClose: l,
    onConfirm: o
  } = t;
  return (0, n.jsx)(s.Modal, {
    title: i,
    subtitle: e,
    transitionState: a,
    onClose: l,
    actions: [{
      text: r,
      onClick: () => {
        l(), null == o || o()
      },
      variant: "primary"
    }]
  })
}