/** Chunk was on 94857 **/
/** chunk id: 888675, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk449859 = require("./449859.jsx"),
  Chunk256883 = require("./256883.js");

function c(e) {
  let {
    icon: s,
    iconNode: t,
    timestamp: l,
    timestampFormat: i,
    className: c,
    children: u,
    contentClassName: m,
    iconClassName: d,
    iconContainerClassName: h,
    timestampClassName: g,
    compact: p = false,
    additionalContent: j
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(c, {
      [o.kL]: true,
      [o.oE]: p,
      [o.E]: !p
    }),
    children: [null != t && (0, n.jsx)("div", {
      className: a()(o.zc, h),
      children: t
    }), null != s && (0, n.jsx)("div", {
      className: o.zc,
      children: (0, n.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a()(o.Kk, o.RK, d),
        style: {
          backgroundImage: "url('".concat(s, "')")
        }
      })
    }), (0, n.jsxs)("div", {
      className: a()(m, o.Qs),
      children: [(0, n.jsxs)("div", {
        children: [u, null != l && (0, n.jsx)(r.A, {
          timestamp: l,
          timestampFormat: i,
          className: g
        })]
      }), j]
    })]
  })
}
c.Action = e => {
  let {
    onClick: s,
    children: t
  } = e;
  return (0, n.jsxs)("span", {
    className: o.XI,
    children: ["—", (0, n.jsx)(i.MzZ, {
      onClick: s,
      className: o.si,
      children: t
    })]
  })
};
let u = c