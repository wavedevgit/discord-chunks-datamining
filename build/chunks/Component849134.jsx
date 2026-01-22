/** Chunk was on 97492 **/
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
    onActionMouseDown: f,
    position: p = "right",
    align: h = "top",
    caretConfig: b = {
      align: "start"
    },
    skuImageDetails: g,
    title: m,
    body: A
  } = e;
  l.useEffect(() => {
    null == n || n()
  }, [n]);
  let y = l.useMemo(() => (null == g ? true : g.imageUrl) == null ? {
    type: "image",
    src: c.A,
    aspectRatio: "6/4"
  } : (0, a.e)({
    imageUrl: null == g ? true : g.imageUrl,
    backgroundImageUrl: null == g ? true : g.backgroundImageUrl,
    altText: s.intl.string(s.t["ulQB+t"]),
    customClassNames: {
      containerClassName: o.z,
      foregroundImageClassName: o._
    }
  }), [null == g ? true : g.imageUrl, null == g ? true : g.backgroundImageUrl]);
  return (0, r.jsx)(i.AM, {
    size: "lg",
    shouldShow: true,
    position: p,
    caretConfig: b,
    gradientColor: "purple",
    alignmentStrategy: "edge",
    align: h,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: u,
    actions: [{
      text: s.intl.string(s.t.RzWDqY),
      variant: "primary",
      onClick: d,
      onMouseDown: f
    }],
    targetElementRef: t,
    title: null != m ? m : s.intl.string(s.t.Ylu2JM),
    body: null != A ? A : s.intl.string(s.t.vgylLQ),
    graphic: y
  })
}