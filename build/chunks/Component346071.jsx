/** Chunk was on web.js **/
/** chunk id: 346071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk886969 = require("./886969.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796926 = require("./796926.js"),
  Chunk774945 = require("./774945.js");

function u(e) {
  let {
    fractionalPremiumInfo: t,
    variant: n = "default",
    enablePremiumBrandRefresh: u = false,
    style: d
  } = e, f = t.fractionalState === o.a$.FP_SUB_PAUSED, _ = (0, a.Z)(t.endsAt, f), p = "", h = {
    trial: {
      days_and_hours: s.t.SQyVVd,
      days: s.t["2ifAYG"],
      hours: s.t.kZSTYg
    },
    default: {
      days_and_hours: s.t["6r9LLp"],
      days: s.t.c2BbVA,
      hours: s.t["8Xm6uL"]
    }
  };
  return (_.days > 0 && _.hours > 0 ? p = s.intl.format(h[n].days_and_hours, {
    days: _.days,
    hours: _.hours
  }) : _.days > 0 ? p = s.intl.format(h[n].days, {
    days: _.days
  }) : _.hours > 0 && (p = s.intl.format(h[n].hours, {
    hours: _.hours
  })), "" === p) ? null : u ? (0, r.jsxs)("div", {
    className: l.premiumBrandRefreshContainer,
    style: d,
    children: [(0, r.jsx)("img", {
      src: c,
      alt: "Nitro Icon",
      className: l.premiumBrandRefreshIcon
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      children: p
    })]
  }) : (0, r.jsxs)("div", {
    className: l.activeFractionalPremiumBannerContainer,
    style: d,
    children: [(0, r.jsxs)("div", {
      className: l.nitroIconContainer,
      children: [(0, r.jsx)(i.SrA, {
        size: "md",
        color: "white",
        className: l.iconFractional
      }), (0, r.jsx)(i.SrA, {
        size: "md",
        color: "currentColor",
        className: l.iconFractionalDark
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: p
    }), (0, r.jsx)("div", {
      className: l.activeFractionalPremiumBannerBackgroundImage
    })]
  })
}