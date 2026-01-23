/** Chunk was on web.js **/
/** chunk id: 931088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk95337 = require("./95337.jsx"),
  Chunk412314 = require("./412314.jsx"),
  Chunk456459 = require("./456459.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk347378 = require("./347378.jsx"),
  Chunk606423 = require("./606423.jsx"),
  Chunk652215 = require("./652215.js");
let h = e => {
    let {
      transitionState: t,
      onClose: n,
      premiumSubscription: o,
      premiumType: l,
      churnDiscount: c,
      planId: u,
      renewalInvoice: f,
      renewalInvoiceDetails: p,
      errorOnCancel: h,
      errorOnRedeem: g,
      setActiveStep: E,
      activeStep: y
    } = e, {
      analyticsLocations: b
    } = (0, s.Ay)(a.A.USER_SETTINGS), [O, v] = i.useState(m(y));
    return (0, i.useEffect)(() => {
      v(m(y))
    }, [y]), (0, r.jsx)(d.CancellationContext.Provider, {
      value: {
        setStep: E,
        premiumType: l,
        onClose: n,
        transitionState: t,
        premiumSubscription: o,
        analyticsLocations: b,
        analyticsLocation: _.ThZ.USER_SETTINGS,
        confettiCanvas: null,
        churnUserDiscountOffer: c,
        isFetchingChurnDiscountOffer: false,
        fullPrice: "$9.99",
        discountedPrice: "$4.99",
        planId: u,
        paymentsBlocked: false,
        renewalInvoice: f,
        renewalInvoiceDetails: p,
        handleCancellation: () => new Promise((e, t) => {
          setTimeout(() => {
            h ? t() : e()
          }, 1e3)
        }),
        applyOffer: () => new Promise((e, t) => {
          setTimeout(() => {
            g ? t() : e()
          }, 1e3)
        }),
        pauseDuration: null,
        setPauseDuration: () => {}
      },
      children: O
    })
  },
  m = e => {
    switch (e) {
      case u.g.DISCOUNT_APPLIED:
        return (0, r.jsx)(c.V, {});
      case u.g.CONFIRM_DISCOUNT:
        return (0, r.jsx)(l.M, {});
      case u.g.CONFIRM:
        return (0, r.jsx)(o.r, {});
      case u.g.PREVIEW:
        return (0, r.jsx)(f.E, {});
      case u.g.WHAT_YOU_LOSE:
      default:
        return (0, r.jsx)(p.Z, {})
    }
  }