/** Chunk was on web.js **/
/** chunk id: 442550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => _
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
  Chunk89863 = require("./89863.js");

function _(e) {
  let {
    src: t,
    size: n,
    constrain: a = "height",
    className: _,
    alt: p,
    fallbackSrc: h,
    "aria-hidden": m,
    showTooltip: g = false
  } = e, E = (0, u.ZP)(), b = "".concat(n, "px"), [y, O] = i.useState(false), [v, I] = i.useState(false), T = null == h || v;
  if (null == t || y && T) return (0, r.jsx)(c.IMN, {
    size: "custom",
    width: "100%",
    height: "100%",
    color: (0, l.wj)(E) ? c.TVs.colors.WHITE : c.TVs.colors.BLACK,
    style: {
      maxWidth: b
    },
    className: o()(f.contentImage, _)
  });
  let S = "height" === a ? {
    maxWidth: b,
    height: b
  } : {
    maxWidth: b,
    minHeight: b
  };
  return (0, r.jsx)(s.u, {
    "aria-label": p,
    __unsupportedReactNodeAsText: p,
    shouldShow: g,
    children: (0, r.jsx)("img", {
      style: S,
      className: o()(f.contentImage, _),
      src: y && null != h ? h : t,
      "aria-hidden": m,
      alt: null != p ? p : m ? true : d.intl.string(d.t["2B/phM"]),
      onError: e => y ? I(true) : O(true)
    })
  }, "content-image")
}