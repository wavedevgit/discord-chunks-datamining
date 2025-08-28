/** Chunk was on 47129 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => g
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk845435 = require("./845435.js");

function g(e) {
  let {
    root: t,
    header: n,
    footer: l
  } = e, {
    showNavigationMobile: c
  } = (0, u.t)(), g = t.layout.flatMap(e => e.layout).flatMap(e => {
    var t;
    return null == (t = e.trailing) ? true : t.newIndicatorDismissibleContentTypes
  }).filter(e => null != e);
  return (0, r.jsx)(a.ZP, {
    contentTypes: g,
    children: e => {
      let {
        visibleContent: a
      } = e;
      return (0, r.jsxs)("div", {
        className: i()(d.sidebar, {
          [d.mobile]: o.tq,
          [d.mobileNavigationOpen]: c
        }),
        children: [null != n && (0, r.jsx)(n, {}), (0, r.jsx)(s.zJl, {
          className: d.navScroller,
          fade: true,
          children: (0, r.jsx)("nav", {
            className: d.nav,
            children: t.layout.map(e => (0, r.jsx)(f, {
              section: e,
              visibleContent: a
            }, e.key))
          })
        }), null != l && (0, r.jsx)("footer", {
          className: d.footer,
          children: (0, r.jsx)(l, {})
        })]
      })
    }
  })
}

function f(e) {
  var t;
  let {
    section: n,
    visibleContent: l
  } = e, i = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: d.section,
    children: [null != i && (0, r.jsx)(s.X6q, {
      className: d.label,
      variant: "heading-sm/medium",
      color: "text-tertiary",
      children: i
    }), n.layout.map(e => (0, r.jsx)("li", {
      children: (0, r.jsx)(c.Z, {
        node: e,
        visibleContent: l
      })
    }, e.key))]
  })
}