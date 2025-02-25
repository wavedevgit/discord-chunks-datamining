/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(881052),
  s = n(128069),
  l = n(63063),
  c = n(563132),
  u = n(409813),
  d = n(981631),
  f = n(388032);

function _(e) {
  let {
    planError: t,
    purchaseErrorBlockRef: n,
    className: _
  } = e, {
    currencies: p,
    paymentError: h,
    purchaseError: g,
    purchasePreviewError: m,
    setSelectedPlanNotification: E
  } = (0, c.JL)(), v = null;
  null != m ? v = m : null != h && null == (0, u.ly)(h) ? v = h : null != g ? v = g : null != t && (v = t);
  let b = p.length > 1,
    y = null != v ? v.message : "";
  if (null != v && v instanceof a.HF && (v.code === s.SM.CARD_DECLINED && b && (y += " ".concat(f.NW.string(f.t.iWvwQU))), v.code === s.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = f.NW.string(f.t.ypuSd3)), v.code === d.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = f.NW.string(f.t.mXMmWF)), v.code === s.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = f.NW.string(f.t.mC1Fj4)), v.code === s.SM.INVALID_BILLING_ADDRESS)) {
    let e = f.NW.format(f.t.BPDKoK, {
      helpdeskArticle: l.Z.getArticleURL(d.BhN.BILLING).concat(d.Bjg.INVALID_BILLING_ADDRESS)
    });
    y = (0, r.jsxs)(r.Fragment, {
      children: [f.NW.string(f.t["yVIm/P"]), " ", e]
    })
  }
  return (i.useEffect(() => {
    null != v && E(null)
  }, [v, E]), null == v) ? null : (0, r.jsx)("div", {
    className: _,
    children: (0, r.jsx)(o.kzN, {
      ref: n,
      children: y
    })
  })
}