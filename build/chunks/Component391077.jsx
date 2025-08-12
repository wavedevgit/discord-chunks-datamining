/** Chunk was on 20501 **/
/** chunk id: 391077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk927359 = require("./927359.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731202 = require("./731202.js");

function m(e) {
  let {
    showChargingUpState: t,
    rowValueText: n,
    endsAt: r,
    fractionalState: l,
    activationDate: o
  } = e, m = t ? d.intl.string(d.t["hT6i//"]) : d.intl.string(d.t["3G0CTE"]), p = t ? true === o ? null : d.intl.format(d.t["0Vwb/v"], {
    activateDate: o
  }) : l === c.a$.FP_SUB_PAUSED ? d.intl.format(d.t.MMvaIC, {
    resumeDate: r.toDate()
  }) : null, g = s()({
    [u.fractionalUnactivatedPill]: t,
    [u.fractionalTimeRemainingPill]: !t
  }), h = s()({
    [u.fractionalUnactivatedPillText]: t,
    [u.fractionalTimeRemainingPillText]: !t
  }), f = s()({
    [u.fractionalTimeRemainingRowHeader]: !t
  });
  return (0, i.jsxs)("div", {
    className: u.fractionalTimeRemainingRow,
    children: [(0, i.jsxs)("div", {
      className: u.fractionalTimeRemainingRowDetails,
      children: [(0, i.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        className: f,
        children: m
      }), null !== p && (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: p
      })]
    }), (0, i.jsx)("div", {
      className: u.fractionalTimeRemainingPillWrapper,
      children: (0, i.jsx)("div", {
        className: g,
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/semibold",
          className: h,
          children: n
        })
      })
    })]
  })
}
let p = function(e) {
  let {
    fractionalPremiumInfo: t,
    className: n,
    activationDate: r
  } = e, c = (0, o.jp)(t), p = c.length > 0, g = (0, l.ZP)(t.endsAt, l.aj.SHORT_TIME), h = p ? c : g;
  return (0, i.jsx)("div", {
    children: (0, i.jsxs)("div", {
      className: s()(n, u.fractionalPremiumAccountCredit),
      children: [(0, i.jsx)("div", {
        className: u.accountCreditsContainer,
        children: (0, i.jsxs)("div", {
          className: u.accountCreditRow,
          children: [(0, i.jsx)("div", {
            className: u.iconBackgroundFractional,
            children: (0, i.jsx)(a.SrA, {
              size: "md",
              color: "white",
              className: u.iconFractional
            })
          }), (0, i.jsx)("div", {
            className: u.rowDetails,
            children: (0, i.jsx)(a.X6q, {
              variant: "heading-md/semibold",
              children: d.intl.string(d.t.DFMPWV)
            })
          }), (0, i.jsx)(a.Text, {
            className: u.rowCreditCount,
            variant: "text-md/semibold",
            children: c.length > 0 ? c : d.intl.string(d.t["B66Z+f"])
          })]
        })
      }), (0, i.jsx)(m, {
        showChargingUpState: p,
        rowValueText: h,
        endsAt: t.endsAt,
        fractionalState: t.fractionalState,
        activationDate: r
      })]
    })
  })
}