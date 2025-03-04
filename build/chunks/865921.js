/** Chunk was on web.js **/
"use strict";
n.d(t, {
  v: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(399606),
  a = n(89057),
  s = n(597688),
  l = n(987209),
  c = n(563132),
  u = n(409813),
  d = n(48931),
  f = n(456251),
  _ = n(981631);

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: p,
    hasFetchedSkus: h,
    paymentSources: g,
    hasFetchedPaymentSources: m,
    application: E,
    skusById: v,
    selectedSkuId: b
  } = (0, c.JL)(), {
    isGift: y
  } = (0, l.wD)(), [O, S] = i.useState(!0), [I, T] = (0, o.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
  return (i.useEffect(() => {
    let e = null != E;
    h && m && e && S(I)
  }, [h, m, E, I]), i.useEffect(() => {
    if (O || p || null == b) return;
    let e = v[b];
    if (y && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES) {
      t(u.h8.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(g).length) {
      t(u.h8.ADD_PAYMENT_STEPS);
      return
    }
    t(u.h8.REVIEW)
  }, [O, p, t, g, y, v, b]), O) ? (0, r.jsx)(f.Z, {}) : p ? (0, r.jsx)(a.Vq, {
    onClose: n
  }) : null != T ? (0, r.jsx)(d.Z, {
    onClose: n
  }) : null
}