/** Chunk was on web.js **/
/** chunk id: 396955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  w: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk217241 = require("./217241.js"),
  s = function(e) {
    return e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD", e.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD", e
  }({});

function l(e) {
  let {
    paymentRestrictionBannerType: t
  } = e, n = "";
  if (!t) return null;
  switch (t) {
    case "SELECT_PAYMENT_METHOD":
      n = a.intl.string(a.t.Tdb5qb);
      break;
    case "ADD_NEW_PAYMENT_METHOD":
      n = a.intl.string(a.t["6d44F5"])
  }
  return (0, r.jsxs)("div", {
    className: o.paymentRestrictionBannerContainer,
    children: [(0, r.jsxs)("div", {
      className: o.appsIconContainer,
      children: [(0, r.jsx)(i.jje, {
        size: "md",
        color: "white",
        className: o.icon
      }), (0, r.jsx)(i.jje, {
        size: "md",
        color: "currentColor",
        className: o.iconDark
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: n
    }), (0, r.jsx)("div", {
      className: o.paymentRestrictionBannerBackgroundImage
    })]
  })
}