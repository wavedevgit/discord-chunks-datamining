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
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk95687 = require("./95687.js"),
  Chunk723564 = require("./723564.js");

function u() {
  return (0, Chunk54381.jsxs)("div", {
    className: a()(Chunk95687.upsellFooter, Chunk95687.reverseTrialUpsellContainer),
    children: [(0, Chunk54381.jsx)("img", {
      src: Chunk723564.Z,
      alt: "reverse trial unlock",
      className: Chunk95687.unlockIcon
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: Chunk95687.upsellText,
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
    children: [(0, r.jsx)(o.SrA, {
      size: "md",
      className: l.upsellFooterIcon,
      color: n
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}