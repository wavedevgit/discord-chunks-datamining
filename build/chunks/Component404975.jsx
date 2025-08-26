/** Chunk was on 76210 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => T
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk845435 = require("./845435.js");

function T(e) {
  let {
    root: t,
    header: n,
    footer: i
  } = e, {
    showNavigationMobile: c
  } = (0, u.t)(), T = t.layout.flatMap(e => e.layout).flatMap(e => {
    var t;
    return null == (t = e.trailing) ? true : t.newIndicatorDismissibleContentTypes
  }).filter(e => null != e);
  return (0, l.jsx)(o.ZP, {
    contentTypes: T,
    children: e => {
      let {
        visibleContent: o
      } = e;
      return (0, l.jsxs)("div", {
        className: r()(d.sidebar, {
          [d.mobile]: s.tq,
          [d.mobileNavigationOpen]: c
        }),
        children: [null != n && (0, l.jsx)(n, {}), (0, l.jsx)(a.zJl, {
          className: d.navScroller,
          fade: true,
          children: (0, l.jsx)("nav", {
            className: d.nav,
            children: t.layout.map(e => (0, l.jsx)(O, {
              section: e,
              visibleContent: o
            }, e.key))
          })
        }), null != i && (0, l.jsx)("footer", {
          className: d.footer,
          children: (0, l.jsx)(i, {})
        })]
      })
    }
  })
}

function O(e) {
  var t;
  let {
    section: n,
    visibleContent: i
  } = e, r = null == (t = n.useLabel) ? true : t.call(n);
  return (0, l.jsxs)("ul", {
    className: d.section,
    children: [null != r && (0, l.jsx)(a.X6q, {
      className: d.label,
      variant: "heading-sm/medium",
      color: "text-tertiary",
      children: r
    }), n.layout.map(e => (0, l.jsx)("li", {
      children: (0, l.jsx)(c.Z, {
        node: e,
        visibleContent: i
      })
    }, e.key))]
  })
}