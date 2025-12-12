/** Chunk was on web.js **/
/** chunk id: 729154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk562218 = require("./562218.jsx"),
  Chunk284829 = require("./284829.jsx"),
  Chunk586920 = require("./586920.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk881493 = require("./881493.jsx"),
  Chunk407965 = require("./407965.jsx"),
  Chunk981631 = require("./981631.js");
let m = e => {
    let {
      transitionState: t,
      onClose: n,
      premiumSubscription: s,
      premiumType: l,
      churnDiscount: c,
      planId: u,
      renewalInvoice: f,
      renewalInvoiceDetails: p,
      errorOnCancel: m,
      errorOnRedeem: g,
      setActiveStep: E,
      activeStep: b
    } = e, {
      analyticsLocations: y
    } = (0, o.ZP)(a.Z.USER_SETTINGS), [O, v] = i.useState(h(b));
    return (0, i.useEffect)(() => {
      v(h(b))
    }, [b]), (0, r.jsx)(d.CancellationContext.Provider, {
      value: {
        setStep: E,
        premiumType: l,
        onClose: n,
        transitionState: t,
        premiumSubscription: s,
        analyticsLocations: y,
        analyticsLocation: _.Sbl.USER_SETTINGS,
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
            if (m) return void t();
            e()
          }, 1e3)
        }),
        applyOffer: () => new Promise((e, t) => {
          setTimeout(() => {
            if (g) return void t();
            e()
          }, 1e3)
        }),
        pauseDuration: null,
        setPauseDuration: () => {}
      },
      children: O
    })
  },
  h = e => {
    switch (e) {
      case u.R.DISCOUNT_APPLIED:
        return (0, r.jsx)(c.i, {});
      case u.R.CONFIRM_DISCOUNT:
        return (0, r.jsx)(l.U, {});
      case u.R.CONFIRM:
        return (0, r.jsx)(s.G, {});
      case u.R.PREVIEW:
        return (0, r.jsx)(f.w, {});
      case u.R.WHAT_YOU_LOSE:
      default:
        return (0, r.jsx)(p.n, {})
    }
  }