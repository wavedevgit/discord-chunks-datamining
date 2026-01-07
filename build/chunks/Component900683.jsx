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
  return (0, r.jsxs)("div", {
    className: a()(l.upsellFooter, l.reverseTrialUpsellContainer),
    children: [(0, r.jsx)("img", {
      src: c.Z,
      alt: "reverse trial unlock",
      className: l.unlockIcon
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: l.upsellText,
      children: s.intl.format(s.t.f5VHKm, {})
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