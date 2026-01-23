/** Chunk was on web.js **/
/** chunk id: 263577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895237 = require("./895237.js");

function p(e) {
  let {
    src: t,
    size: n,
    constrain: a = "height",
    className: p,
    alt: _,
    fallbackSrc: h,
    "aria-hidden": m,
    showTooltip: g = false
  } = e, E = (0, u.Ay)(), y = "".concat(n, "px"), [b, O] = i.useState(false), [v, A] = i.useState(false), I = null == h || v;
  if (null == t || b && I) return (0, r.jsx)(c._7Z, {
    size: "custom",
    width: "100%",
    height: "100%",
    color: (0, l.Mw)(E) ? c.LU0.colors.WHITE : c.LU0.colors.BLACK,
    style: {
      maxWidth: y
    },
    className: s()(f.f, p)
  });
  let S = "height" === a ? {
    maxWidth: y,
    height: y
  } : {
    maxWidth: y,
    minHeight: y
  };
  return (0, r.jsx)(o.m, {
    "aria-label": _,
    __unsupportedReactNodeAsText: _,
    shouldShow: g,
    children: (0, r.jsx)("img", {
      style: S,
      className: s()(f.f, p),
      src: b && null != h ? h : t,
      "aria-hidden": m,
      alt: null != _ ? _ : m ? true : d.intl.string(d.t["2B/phM"]),
      onError: e => b ? A(true) : O(true)
    })
  }, "content-image")
}