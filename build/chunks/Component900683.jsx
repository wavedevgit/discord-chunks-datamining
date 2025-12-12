/** Chunk was on web.js **/
/** chunk id: 900683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  e: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252073 = require("./252073.js"),
  Chunk531599 = require("./531599.js");

function u() {
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk252073.upsellFooter, Chunk252073.reverseTrialUpsellContainer),
    children: [(0, Chunk54381.jsx)("img", {
      src: Chunk531599.Z,
      alt: "reverse trial unlock",
      className: Chunk252073.unlockIcon
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: Chunk252073.upsellText,
      children: Chunk388032.intl.format(Chunk388032.t.f5VHKm, {})
    })]
  })
}

function d(e) {
  let {
    text: t,
    color: n
  } = e;
  return (0, r.jsxs)("div", {
    className: l.upsellFooter,
    children: [(0, r.jsx)(a.SrA, {
      size: "md",
      className: l.upsellFooterIcon,
      color: n
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}