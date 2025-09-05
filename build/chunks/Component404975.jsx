/** Chunk was on 47129 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => y
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk854014 = require("./854014.jsx"),
  Chunk565184 = require("./565184.js");

function y(e) {
  let {
    root: t,
    header: n,
    footer: i
  } = e, {
    showNavigationMobile: d
  } = (0, u.t)(), g = t.layout.flatMap(e => e.layout).flatMap(e => {
    var t;
    return e.type === c.J.PANEL && (null == (t = e.trailing) ? true : t.newIndicatorDismissibleContentTypes) != null ? e.trailing.newIndicatorDismissibleContentTypes : []
  }).filter(e => null != e);
  return (0, r.jsx)(a.ZP, {
    contentTypes: g,
    children: e => {
      let {
        visibleContent: a
      } = e;
      return (0, r.jsxs)("div", {
        className: l()(f.sidebar, {
          [f.mobile]: o.tq,
          [f.mobileNavigationOpen]: d
        }),
        children: [null != n && (0, r.jsx)(n, {}), (0, r.jsx)(s.zJl, {
          className: f.navScroller,
          fade: true,
          children: (0, r.jsx)("nav", {
            className: f.nav,
            children: t.layout.map(e => (0, r.jsx)(O, {
              section: e,
              visibleContent: a
            }, e.key))
          })
        }), null != i && (0, r.jsx)("footer", {
          className: f.footer,
          children: (0, r.jsx)(i, {})
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
  } = e, l = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: f.section,
    children: [null != l && (0, r.jsx)(s.X6q, {
      className: f.label,
      variant: "heading-sm/medium",
      color: "text-tertiary",
      children: l
    }), n.layout.map(e => (0, r.jsx)("li", {
      children: e.type === c.J.PANEL ? (0, r.jsx)(d.Z, {
        node: e,
        visibleContent: i
      }) : (0, r.jsx)(g.Z, {
        icon: e.icon,
        title: e.useTitle(),
        onClick: e.onClick
      })
    }, e.key))]
  })
}