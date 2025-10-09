/** Chunk was on 46746 **/
/** chunk id: 148381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk958707 = require("./958707.jsx"),
  Chunk542257 = require("./542257.js"),
  Chunk308300 = require("./308300.js");

function f(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: l,
    children: f
  } = e, h = i.useRef(null), [m, p] = i.useState(false), [g, x] = i.useState(false), _ = i.useCallback(() => {
    let {
      current: e
    } = h;
    null != e && (p(!e.isScrolledToTop()), x(!e.isScrolledToBottom()))
  }, []);
  return (0, a.Ng)(() => _()), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(u.title, u.scrollWrapper),
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        className: d.formItemTitle,
        children: t
      }), (0, r.jsx)(c.Z, {
        separator: m
      })]
    }), (0, r.jsx)("div", {
      className: n,
      children: (0, r.jsx)(o.Den, {
        ref: h,
        className: s()(u.scrollerInner, l, {
          [u.bottomSeparator]: g
        }),
        onScroll: _,
        children: f
      })
    })]
  })
}