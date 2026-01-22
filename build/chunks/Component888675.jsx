/** Chunk was on web.js **/
/** chunk id: 888675, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    icon: t,
    iconNode: n,
    timestamp: i,
    timestampFormat: s,
    className: c,
    children: u,
    contentClassName: d,
    iconClassName: f,
    iconContainerClassName: p,
    timestampClassName: _,
    compact: h = false,
    additionalContent: m
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c, {
      [l.kL]: true,
      [l.oE]: h,
      [l.E]: !h
    }),
    children: [null != n && (0, r.jsx)("div", {
      className: a()(l.zc, p),
      children: n
    }), null != t && (0, r.jsx)("div", {
      className: l.zc,
      children: (0, r.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a()(l.Kk, l.RK, f),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, r.jsxs)("div", {
      className: a()(d, l.Qs),
      children: [(0, r.jsxs)("div", {
        children: [u, null != i && (0, r.jsx)(o.A, {
          timestamp: i,
          timestampFormat: s,
          className: _
        })]
      }), m]
    })]
  })
}
c.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, r.jsxs)("span", {
    className: l.XI,
    children: ["—", (0, r.jsx)(s.MzZ, {
      onClick: t,
      className: l.si,
      children: n
    })]
  })
};
let u = c