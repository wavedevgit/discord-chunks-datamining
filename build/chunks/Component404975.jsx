/** Chunk was on 36878 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk845435 = require("./845435.js");

function d(e) {
  let {
    root: t,
    header: n,
    footer: l
  } = e, {
    showNavigationMobile: u
  } = (0, a.t)();
  return (0, i.jsxs)("div", {
    className: r()(c.sidebar, {
      [c.mobile]: o.tq,
      [c.mobileNavigationOpen]: u
    }),
    children: [null != n && (0, i.jsx)(n, {}), (0, i.jsx)(s.zJl, {
      className: c.navScroller,
      fade: true,
      children: (0, i.jsx)("nav", {
        className: c.nav,
        children: t.layout.map(e => (0, i.jsx)(f, {
          section: e
        }, e.key))
      })
    }), null != l && (0, i.jsx)("footer", {
      className: c.footer,
      children: (0, i.jsx)(l, {})
    })]
  })
}

function f(e) {
  let {
    section: t
  } = e;
  return (0, i.jsx)("ul", {
    className: c.section,
    children: t.layout.map(e => (0, i.jsx)("li", {
      children: (0, i.jsx)(u.Z, {
        node: e
      })
    }, e.key))
  })
}