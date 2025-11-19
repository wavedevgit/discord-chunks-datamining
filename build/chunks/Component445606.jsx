/** Chunk was on 10023 **/
/** chunk id: 445606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk907862 = require("./907862.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30399 = require("./30399.js");

function a(e) {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onActionClick: a,
    position: s = "right",
    align: c = "top",
    caretConfig: u = {
      align: "start",
      position: "top"
    }
  } = e;
  return (0, r.jsx)(i.J2, {
    size: "lg",
    shouldShow: true,
    position: s,
    caretConfig: u,
    gradientColor: "purple",
    align: c,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: n,
    actions: [{
      text: l.intl.string(l.t.RzWDqY),
      variant: "primary",
      onClick: a
    }],
    targetElementRef: t,
    title: l.intl.string(l.t.Ylu2JM),
    body: l.intl.string(l.t.vgylLQ),
    graphic: {
      type: "image",
      src: o.Z
    }
  })
}