/** Chunk was on web.js **/
/** chunk id: 346071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u,
  n: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk886969 = require("./886969.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394682 = require("./394682.js"),
  Chunk774945 = require("./774945.js"),
  u = function(e) {
    return e.TRIAL = "trial", e.DEFAULT = "default", e
  }({});

function d(e) {
  let {
    fractionalPremiumInfo: t,
    variant: n = "default",
    enablePremiumBrandRefresh: u = false,
    style: d,
    trialPeriod: f,
    trialEnd: p
  } = e, _ = t.fractionalState === o.a$.FP_SUB_PAUSED, h = (0, a.Z)(t.endsAt, _), m = "", g = {
    trial: {
      days_and_hours: s.t["8VIDrU"],
      days: s.t["5e2wY0"],
      hours: s.t.sQcCKt
    },
    default: {
      days_and_hours: s.t["6r9LLp"],
      days: s.t.c2BbVA,
      hours: s.t["8Xm6uL"]
    }
  };
  return "trial" === n && null != f && null != p ? (h.days > 0 && h.hours > 0 ? m = s.intl.format(g.trial.days_and_hours, {
    days: h.days,
    hours: h.hours,
    trialPeriod: f,
    trialEnd: p
  }) : h.days > 0 ? m = s.intl.format(g.trial.days, {
    days: h.days,
    trialPeriod: f,
    trialEnd: p
  }) : h.hours > 0 && (m = s.intl.format(g.trial.hours, {
    days: h.days,
    hours: h.hours,
    trialPeriod: f,
    trialEnd: p
  })), "" === m) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: l.trialForAllHeader,
      children: m
    }), (0, r.jsx)("hr", {
      className: l.trialForAllSeparator
    })]
  }) : (h.days > 0 && h.hours > 0 ? m = s.intl.format(g.default.days_and_hours, {
    days: h.days,
    hours: h.hours
  }) : h.days > 0 ? m = s.intl.format(g.default.days, {
    days: h.days
  }) : h.hours > 0 && (m = s.intl.format(g.default.hours, {
    hours: h.hours
  })), "" === m) ? null : u ? (0, r.jsxs)("div", {
    className: l.premiumBrandRefreshContainer,
    style: d,
    children: [(0, r.jsx)("img", {
      src: c,
      alt: "Nitro Icon",
      className: l.premiumBrandRefreshIcon
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      children: m
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
      children: m
    }), (0, r.jsx)("div", {
      className: l.activeFractionalPremiumBannerBackgroundImage
    })]
  })
}