/** Chunk was on 47129 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => _
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk845435 = require("./845435.js");

function _(e) {
  let {
    root: t,
    header: n,
    footer: r
  } = e, {
    showNavigationMobile: c
  } = (0, u.t)(), _ = t.layout.flatMap(e => e.layout).flatMap(e => {
    var t;
    return null == (t = e.trailing) ? true : t.newIndicatorDismissibleContentTypes
  }).filter(e => null != e);
  return (0, i.jsx)(a.ZP, {
    contentTypes: _,
    children: e => {
      let {
        visibleContent: a
      } = e;
      return (0, i.jsxs)("div", {
        className: l()(d.sidebar, {
          [d.mobile]: o.tq,
          [d.mobileNavigationOpen]: c
        }),
        children: [null != n && (0, i.jsx)(n, {}), (0, i.jsx)(s.zJl, {
          className: d.navScroller,
          fade: true,
          children: (0, i.jsx)("nav", {
            className: d.nav,
            children: t.layout.map(e => (0, i.jsx)(E, {
              section: e,
              visibleContent: a
            }, e.key))
          })
        }), null != r && (0, i.jsx)("footer", {
          className: d.footer,
          children: (0, i.jsx)(r, {})
        })]
      })
    }
  })
}

function E(e) {
  var t;
  let {
    section: n,
    visibleContent: r
  } = e, l = null == (t = n.useLabel) ? true : t.call(n);
  return (0, i.jsxs)("ul", {
    className: d.section,
    children: [null != l && (0, i.jsx)(s.X6q, {
      className: d.label,
      variant: "heading-sm/medium",
      color: "text-tertiary",
      children: l
    }), n.layout.map(e => (0, i.jsx)("li", {
      children: (0, i.jsx)(c.Z, {
        node: e,
        visibleContent: r
      })
    }, e.key))]
  })
}