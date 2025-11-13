/** Chunk was on 11788 **/
/** chunk id: 445606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk907862 = require("./907862.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: o,
    position: a = "right",
    align: s = "top",
    caretConfig: c = {
      align: "start",
      position: "top"
    }
  } = e;
  return (0, r.jsx)(i.J2, {
    size: "lg",
    shouldShow: true,
    position: a,
    caretConfig: c,
    gradientColor: "purple",
    align: s,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: n,
    actions: [{
      text: l.intl.string(l.t.RzWDqY),
      variant: "primary",
      onClick: o
    }],
    targetElementRef: t,
    title: l.intl.string(l.t.Ylu2JM),
    body: l.intl.string(l.t.vgylLQ),
    graphic: true
  })
}