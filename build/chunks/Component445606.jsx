/** Chunk was on 64722 **/
/** chunk id: 445606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30399 = require("./30399.js");

function s(e) {
  let {
    targetElementRef: t,
    onRender: n,
    onRequestClose: s,
    onActionClick: c,
    position: u = "right",
    align: d = "top",
    caretConfig: f = {
      align: "start"
    }
  } = e;
  return i.useEffect(() => {
    null == n || n()
  }, [n]), (0, r.jsx)(l.J2, {
    size: "lg",
    shouldShow: true,
    position: u,
    caretConfig: f,
    gradientColor: "purple",
    alignmentStrategy: "edge",
    align: d,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: s,
    actions: [{
      text: o.intl.string(o.t.RzWDqY),
      variant: "primary",
      onClick: c
    }],
    targetElementRef: t,
    title: o.intl.string(o.t.Ylu2JM),
    body: o.intl.string(o.t.vgylLQ),
    graphic: {
      type: "image",
      src: a.Z
    }
  })
}