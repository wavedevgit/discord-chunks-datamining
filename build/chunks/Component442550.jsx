/** Chunk was on web.js **/
/** chunk id: 442550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk82214 = require("./82214.js");

function p(e) {
  let {
    src: t,
    size: n,
    constrain: a = "height",
    className: p,
    alt: _,
    fallbackSrc: m,
    "aria-hidden": h,
    showTooltip: g = false
  } = e, E = (0, u.ZP)(), b = "".concat(n, "px"), [y, O] = i.useState(false), [v, S] = i.useState(false), I = null == m || v;
  if (null == t || y && I) return (0, r.jsx)(c.IMN, {
    size: "custom",
    width: "100%",
    height: "100%",
    color: (0, l.wj)(E) ? c.TVs.colors.WHITE : c.TVs.colors.BLACK,
    style: {
      maxWidth: b
    },
    className: o()(f.contentImage, p)
  });
  let T = "height" === a ? {
    maxWidth: b,
    height: b
  } : {
    maxWidth: b,
    minHeight: b
  };
  return (0, r.jsx)(s.u, {
    "aria-label": _,
    __unsupportedReactNodeAsText: _,
    shouldShow: g,
    children: (0, r.jsx)("img", {
      style: T,
      className: o()(f.contentImage, p),
      src: y && null != m ? m : t,
      "aria-hidden": h,
      alt: null != _ ? _ : h ? true : d.intl.string(d.t["2B/phM"]),
      onError: e => y ? S(true) : O(true)
    })
  }, "content-image")
}