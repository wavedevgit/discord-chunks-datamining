/** Chunk was on 4093 **/
/** chunk id: 148381, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk958707 = require("./958707.jsx"),
  Chunk79985 = require("./79985.js"),
  Chunk378671 = require("./378671.js");

function m(e) {
  let {
    title: n,
    scrollerClassName: t,
    scrollerInnerClassName: i,
    children: m
  } = e, x = r.useRef(null), [g, h] = r.useState(false), [j, p] = r.useState(false), v = r.useCallback(() => {
    let {
      current: e
    } = x;
    null != e && (h(!e.isScrolledToTop()), p(!e.isScrolledToBottom()))
  }, []);
  return (0, c.Ng)(() => v()), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: s()(d.title, d.scrollWrapper),
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        className: u.formItemTitle,
        children: n
      }), (0, l.jsx)(o.Z, {
        separator: g
      })]
    }), (0, l.jsx)("div", {
      className: t,
      children: (0, l.jsx)(a.Den, {
        ref: x,
        className: s()(d.scrollerInner, i, {
          [d.bottomSeparator]: j
        }),
        onScroll: v,
        children: m
      })
    })]
  })
}