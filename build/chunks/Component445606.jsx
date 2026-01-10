/** Chunk was on 81985 **/
/** chunk id: 445606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk882508 = require("./882508.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339531 = require("./339531.js"),
  Chunk993516 = require("./993516.js");

function u(e) {
  let {
    targetElementRef: t,
    onRender: n,
    onRequestClose: u,
    onActionClick: d,
    onActionMouseDown: p,
    position: f = "right",
    align: h = "top",
    caretConfig: g = {
      align: "start"
    },
    skuImageDetails: m,
    title: b,
    body: y
  } = e;
  i.useEffect(() => {
    null == n || n()
  }, [n]);
  let v = i.useMemo(() => (null == m ? true : m.imageUrl) == null ? {
    type: "image",
    src: c.Z,
    aspectRatio: "6/4"
  } : (0, a.D)({
    imageUrl: null == m ? true : m.imageUrl,
    backgroundImageUrl: null == m ? true : m.backgroundImageUrl,
    altText: o.intl.string(o.t["ulQB+t"]),
    customClassNames: {
      containerClassName: s.dynamicGraphicContainer,
      foregroundImageClassName: s.dynamicGraphicForegroundImage
    }
  }), [null == m ? true : m.imageUrl, null == m ? true : m.backgroundImageUrl]);
  return (0, r.jsx)(l.J2, {
    size: "lg",
    shouldShow: true,
    position: f,
    caretConfig: g,
    gradientColor: "purple",
    alignmentStrategy: "edge",
    align: h,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: u,
    actions: [{
      text: o.intl.string(o.t.RzWDqY),
      variant: "primary",
      onClick: d,
      onMouseDown: p
    }],
    targetElementRef: t,
    title: null != b ? b : o.intl.string(o.t.Ylu2JM),
    body: null != y ? y : o.intl.string(o.t.vgylLQ),
    graphic: v
  })
}