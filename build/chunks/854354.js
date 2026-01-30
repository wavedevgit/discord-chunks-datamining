/** Chunk was on web.js **/
/** chunk id: 854354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cq: () => c,
  YR: () => l,
  lp: () => u
}), require("./65821.js"), require("./896048.js"), require("./321073.js");
var Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t) {
  switch (e) {
    case a.WT.MONTH:
      if (1 !== t) return s.intl.formatToPlainString(o.default.OBVcgO, {
        intervalCount: t
      });
      return s.intl.string(o.default.FVzt1W);
    case a.WT.YEAR:
      return s.intl.string(o.default.NEHhLR);
    default:
      throw Error("Unexpected interval")
  }
}
let c = e => {
    let {
      subscriptionPlan: t,
      userLocale: n,
      discountOffer: i,
      yearlyPercentSavings: l
    } = e;
    if (null != l && t.interval === a.WT.YEAR) return s.intl.formatToPlainString(o.default.nsG1jw, {
      savingsText: (0, r.l9)(n, l / 100)
    });
    let c = null != i ? i.discount.amount : null;
    return null != i && i.discount.plan_ids.includes(t.id) && null != c ? s.intl.formatToPlainString(o.default.MSB4E4, {
      amountOrPercentOffText: (0, r.l9)(n, parseInt(c) / 100)
    }) : null
  },
  u = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        addTaxLineItem: true
      },
      {
        manualLineItems: n,
        addTaxLineItem: r
      } = t,
      a = [];
    return a = null != n ? [...n] : e.invoiceItems.map(e => ({
      id: e.id,
      label: (0, i.Mn)(e.subscriptionPlanId),
      amount: e.amount * e.quantity
    })), false !== r && a.push({
      id: "tax",
      label: s.intl.string(s.t.jiRvC7),
      amount: e.tax
    }), a
  }