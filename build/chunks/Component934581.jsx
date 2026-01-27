/** Chunk was on web.js **/
/** chunk id: 934581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => u,
  v: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk709917 = require("./709917.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk857365 = require("./857365.js"),
  Chunk694414 = require("./694414.js"),
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
  } = e, _ = t.fractionalState === o.xc.FP_SUB_PAUSED, h = (0, a.A)(t.endsAt, _), m = "", g = {
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
      className: l.OK,
      children: m
    }), (0, r.jsx)("hr", {
      className: l.oz
    })]
  }) : (h.days > 0 && h.hours > 0 ? m = s.intl.format(g.default.days_and_hours, {
    days: h.days,
    hours: h.hours
  }) : h.days > 0 ? m = s.intl.format(g.default.days, {
    days: h.days
  }) : h.hours > 0 && (m = s.intl.format(g.default.hours, {
    hours: h.hours
  })), "" === m) ? null : u ? (0, r.jsxs)("div", {
    className: l.bD,
    style: d,
    children: [(0, r.jsx)("img", {
      src: c,
      alt: "Nitro Icon",
      className: l.Zb
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      children: m
    })]
  }) : (0, r.jsxs)("div", {
    className: l.s2,
    style: d,
    children: [(0, r.jsxs)("div", {
      className: l.Dl,
      children: [(0, r.jsx)(i.tvc, {
        size: "md",
        color: "white",
        className: l.T8
      }), (0, r.jsx)(i.tvc, {
        size: "md",
        color: "currentColor",
        className: l.XI
      })]
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: m
    }), (0, r.jsx)("div", {
      className: l.WW
    })]
  })
}