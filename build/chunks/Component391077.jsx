/** Chunk was on web.js **/
/** chunk id: 391077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk927359 = require("./927359.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196272 = require("./196272.js");

function f(e) {
  return (0, r.jsxs)("div", {
    className: d.accountCreditRow,
    children: [(0, r.jsx)("div", {
      className: d.iconBackgroundFractional,
      children: (0, r.jsx)(a.SrA, {
        size: "md",
        color: "white",
        className: d.iconFractional
      })
    }), (0, r.jsx)("div", {
      className: d.rowDetails,
      children: (0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: u.intl.string(u.t.DFMPWS)
      })
    }), (0, r.jsx)(a.Text, {
      className: d.rowCreditCount,
      variant: "text-md/semibold",
      children: e.length > 0 ? e : u.intl.string(u.t["B66Z+f"])
    })]
  })
}

function p(e) {
  let {
    showChargingUpState: t,
    rowValueText: n,
    endsAt: i,
    fractionalState: s,
    activationDate: l
  } = e, f = t ? u.intl.string(u.t["hT6i/0"]) : u.intl.string(u.t["3G0CTC"]), p = t ? true === l ? null : u.intl.format(u.t["0Vwb/l"], {
    activateDate: l
  }) : s === c.a$.FP_SUB_PAUSED ? u.intl.format(u.t.MMvaIG, {
    resumeDate: i.toDate()
  }) : null, _ = o()({
    [d.fractionalUnactivatedPill]: t,
    [d.fractionalTimeRemainingPill]: !t
  }), m = o()({
    [d.fractionalUnactivatedPillText]: t,
    [d.fractionalTimeRemainingPillText]: !t
  }), h = o()({
    [d.fractionalTimeRemainingRowHeader]: !t
  });
  return (0, r.jsxs)("div", {
    className: d.fractionalTimeRemainingRow,
    children: [(0, r.jsxs)("div", {
      className: d.fractionalTimeRemainingRowDetails,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        className: h,
        children: f
      }), null !== p && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: p
      })]
    }), (0, r.jsx)("div", {
      className: d.fractionalTimeRemainingPillWrapper,
      children: (0, r.jsx)("div", {
        className: _,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          className: m,
          children: n
        })
      })
    })]
  })
}
let _ = function(e) {
  let {
    fractionalPremiumInfo: t,
    className: n,
    activationDate: i
  } = e, a = (0, l.jp)(t), c = a.length > 0, u = (0, s.ZP)(t.endsAt, s.aj.SHORT_TIME), _ = c ? a : u;
  return (0, r.jsx)("div", {
    children: (0, r.jsxs)("div", {
      className: o()(n, d.fractionalPremiumAccountCredit),
      children: [(0, r.jsx)("div", {
        className: d.accountCreditsContainer,
        children: f(a)
      }), (0, r.jsx)(p, {
        showChargingUpState: c,
        rowValueText: _,
        endsAt: t.endsAt,
        fractionalState: t.fractionalState,
        activationDate: i
      })]
    })
  })
}