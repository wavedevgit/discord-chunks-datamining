/** Chunk was on 28467 **/
/** chunk id: 834129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk686487 = require("./686487.js");

function c(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: a,
    timestampFormat: l,
    className: c,
    children: u,
    contentClassName: m,
    iconClassName: d,
    iconContainerClassName: p,
    timestampClassName: g,
    compact: h = false
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(c, {
      [o.container]: true,
      [o.compact]: h,
      [o.cozy]: !h
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: r()(o.iconContainer, p),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: r()(o.icon, o.iconSize, d),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: r()(m, o.content),
      children: [u, null != a && (0, s.jsx)(i.Z, {
        timestamp: a,
        timestampFormat: l,
        className: g
      })]
    })]
  })
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, s.jsxs)("span", {
    className: o.action,
    children: ["—", (0, s.jsx)(l.eee, {
      onClick: t,
      className: o.actionAnchor,
      children: n
    })]
  })
};
let u = c