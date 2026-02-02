/** Chunk was on 42402 **/
/** chunk id: 874100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk996150 = require("./996150.js"),
  Chunk393007 = require("./393007.js");

function c(e) {
  let {
    targetElementRef: t,
    onRender: n,
    onRequestClose: c,
    onActionClick: u,
    onActionMouseDown: d,
    position: p = "right",
    align: h = "top",
    caretConfig: g = {
      align: "start"
    }
  } = e;
  l.useEffect(() => {
    null == n || n()
  }, [n]);
  let f = {
    type: "image",
    src: o.A,
    aspectRatio: "6/4"
  };
  return (0, r.jsx)(i.AM, {
    size: "lg",
    shouldShow: true,
    position: p,
    caretConfig: g,
    gradientColor: "purple",
    alignmentStrategy: "edge",
    align: h,
    badge: {
      type: "new",
      variant: "default"
    },
    onRequestClose: c,
    actions: [{
      text: s.intl.string(s.t.RzWDqY),
      variant: "primary",
      onClick: u,
      onMouseDown: d
    }],
    targetElementRef: t,
    title: (0, r.jsx)("span", {
      className: a.V,
      children: s.intl.format(s.t.tSDb6p, {})
    }),
    body: s.intl.string(s.t.wLwMmO),
    graphic: f
  })
}