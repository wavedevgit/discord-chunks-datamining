/** Chunk was on web.js **/
/** chunk id: 663803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk643239 = require("./643239.js");

function u(e) {
  return "" === e || "-" === e
}
let d = e => {
  let {
    value: t,
    onChange: n,
    className: a,
    minValue: d,
    maxValue: f
  } = e, [p, _] = i.useState(t), h = u(p) || null != d && p <= d, m = u(p) || null != f && p >= f, g = e => {
    n(u(e) ? null != d ? d : 0 : e), _(e)
  }, E = e => {
    e.stopPropagation(), h || g(p - 1)
  }, y = e => {
    e.stopPropagation(), m || g(p + 1)
  }, b = e => {
    if (u(e)) return g(e);
    let t = parseInt(e);
    if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t)
  };
  return (0, r.jsxs)("div", {
    className: s()(c.o, a),
    children: [(0, r.jsx)(o.K0, {
      variant: "icon-only",
      size: "sm",
      icon: o.QGg,
      onClick: E,
      "aria-label": l.intl.string(l.t["k+ohJm"]),
      disabled: h
    }), (0, r.jsx)("div", {
      className: c.U,
      children: (0, r.jsx)(o.ksK, {
        value: "".concat(p),
        onChange: b
      })
    }), (0, r.jsx)(o.K0, {
      size: "sm",
      variant: "icon-only",
      icon: o.j96,
      onClick: y,
      "aria-label": l.intl.string(l.t.w8Sc4B),
      disabled: m
    })]
  })
}