/** Chunk was on web.js **/
/** chunk id: 698708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk63063 = require("./63063.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    planError: t,
    purchaseErrorBlockRef: n,
    className: p
  } = e, {
    currencies: _,
    paymentError: h,
    purchaseError: m,
    purchasePreviewError: g,
    setSelectedPlanNotification: E
  } = (0, c.JL)(), b = null;
  null != g ? b = g : null != h && null == (0, u.ly)(h) ? b = h : null != m ? b = m : null != t && (b = t);
  let y = _.length > 1,
    O = null != b ? b.message : "";
  if (null != b && b instanceof o.HF && (b.code === s.SM.CARD_DECLINED && y && (O += " ".concat(f.intl.string(f.t.iWvwQS))), b.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd8)), b.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWE)), b.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fjz)), b.code === s.SM.INVALID_BILLING_ADDRESS)) {
    let e = f.intl.format(f.t.BPDKoA, {
      helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS)
    });
    O = (0, r.jsxs)(r.Fragment, {
      children: [f.intl.string(f.t["yVIm/G"]), " ", e]
    })
  }
  return (i.useEffect(() => {
    null != b && E(null)
  }, [b, E]), null == b) ? null : (0, r.jsx)("div", {
    ref: n,
    className: p,
    children: (0, r.jsx)(a.M14, {
      type: "critical",
      children: O
    })
  })
}