/** Chunk was on 4093 **/
/** chunk id: 148381, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, g = r.useRef(null), [x, h] = r.useState(false), [j, v] = r.useState(false), p = r.useCallback(() => {
    let {
      current: e
    } = g;
    null != e && (h(!e.isScrolledToTop()), v(!e.isScrolledToBottom()))
  }, []);
  return (0, c.Ng)(() => p()), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: s()(d.title, d.scrollWrapper),
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        className: u.formItemTitle,
        children: n
      }), (0, l.jsx)(o.Z, {
        separator: x
      })]
    }), (0, l.jsx)("div", {
      className: t,
      children: (0, l.jsx)(a.Den, {
        ref: g,
        className: s()(d.scrollerInner, i, {
          [d.bottomSeparator]: j
        }),
        onScroll: p,
        children: m
      })
    })]
  })
}