/** Chunk was on 36878 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => f
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk183313 = require("./183313.js");

function f(e) {
  let {
    root: t,
    header: n,
    footer: l
  } = e, {
    showNavigationMobile: f
  } = (0, r.t)();
  return (0, i.jsxs)("div", {
    className: s()(d.sidebar, {
      [d.mobile]: o.tq,
      [d.mobileNavigationOpen]: f
    }),
    children: [null != n && (0, i.jsx)(n, {}), (0, i.jsx)(a.E1j, {
      placeholder: c.intl.string(c.t["5h0QOD"]),
      query: "",
      onChange: () => {},
      className: d.search
    }), (0, i.jsx)(a.zJl, {
      className: d.navScroller,
      fade: true,
      children: (0, i.jsx)("nav", {
        className: d.nav,
        children: (0, i.jsx)("ul", {
          children: t.layout.map(e => (0, i.jsx)("li", {
            children: (0, i.jsx)(u.Z, {
              node: e
            })
          }, e.key))
        })
      })
    }), null != l && (0, i.jsx)("footer", {
      className: d.footer,
      children: (0, i.jsx)(l, {})
    })]
  })
}