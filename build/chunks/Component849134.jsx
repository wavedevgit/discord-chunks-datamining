/** Chunk was on 44669 **/
/** chunk id: 849134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk486318 = require("./486318.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk549724 = require("./549724.js"),
  Chunk585048 = require("./585048.js");

function u(e) {
  let {
    targetElementRef: t,
    onRender: n,
    onRequestClose: u,
    onActionClick: d,
    onActionMouseDown: p,
    position: h = "right",
    align: g = "top",
    caretConfig: f = {
      align: "start"
    },
    skuImageDetails: m,
    title: b,
    body: A
  } = e;
  l.useEffect(() => {
    null == n || n()
  }, [n]);
  let y = l.useMemo(() => (null == m ? true : m.imageUrl) == null ? {
    type: "image",
    src: c.A,
    aspectRatio: "6/4"
  } : (0, s.e)({
    imageUrl: null == m ? true : m.imageUrl,
    backgroundImageUrl: null == m ? true : m.backgroundImageUrl,
    altText: a.intl.string(a.t["ulQB+t"]),
    customClassNames: {
      containerClassName: o.z,
      foregroundImageClassName: o._
    }
  }), [null == m ? true : m.imageUrl, null == m ? true : m.backgroundImageUrl]);
  return (0, r.jsx)(i.AM, {
    size: "lg",
    shouldShow: true,
    position: h,
    caretConfig: f,
    gradientColor: "purple",
    alignmentStrategy: "edge",
    align: g,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: u,
    actions: [{
      text: a.intl.string(a.t.RzWDqY),
      variant: "primary",
      onClick: d,
      onMouseDown: p
    }],
    targetElementRef: t,
    title: null != b ? b : a.intl.string(a.t.Ylu2JM),
    body: null != A ? A : a.intl.string(a.t.vgylLQ),
    graphic: y
  })
}