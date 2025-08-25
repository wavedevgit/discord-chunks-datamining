/** Chunk was on 76210 **/
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
    footer: i
  } = e, {
    showNavigationMobile: a
  } = (0, u.t)();
  return (0, l.jsxs)("div", {
    className: r()(c.sidebar, {
      [c.mobile]: s.tq,
      [c.mobileNavigationOpen]: a
    }),
    children: [null != n && (0, l.jsx)(n, {}), (0, l.jsx)(o.zJl, {
      className: c.navScroller,
      fade: true,
      children: (0, l.jsx)("nav", {
        className: c.nav,
        children: t.layout.map(e => (0, l.jsx)(f, {
          section: e
        }, e.key))
      })
    }), null != i && (0, l.jsx)("footer", {
      className: c.footer,
      children: (0, l.jsx)(i, {})
    })]
  })
}

function f(e) {
  var t;
  let {
    section: n
  } = e, i = null == (t = n.useLabel) ? true : t.call(n);
  return (0, l.jsxs)("ul", {
    className: c.section,
    children: [null != i && (0, l.jsx)(o.X6q, {
      className: c.label,
      variant: "heading-sm/medium",
      color: "text-tertiary",
      children: i
    }), n.layout.map(e => (0, l.jsx)("li", {
      children: (0, l.jsx)(a.Z, {
        node: e
      })
    }, e.key))]
  })
}