/** Chunk was on 96604 **/
/** chunk id: 729154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let x = e => {
    let {
      transitionState: t,
      onClose: n,
      premiumSubscription: o,
      premiumType: s,
      churnDiscount: c,
      planId: d,
      renewalInvoice: m,
      renewalInvoiceDetails: p,
      errorOnCancel: x,
      errorOnRedeem: f,
      setActiveStep: b,
      activeStep: v
    } = e, {
      analyticsLocations: j
    } = (0, i.ZP)(l.Z.USER_SETTINGS), [_, y] = r.useState(g(v));
    return (0, r.useEffect)(() => {
      y(g(v))
    }, [v]), (0, a.jsx)(u.CancellationContext.Provider, {
      value: {
        setStep: b,
        premiumType: s,
        onClose: n,
        transitionState: t,
        premiumSubscription: o,
        analyticsLocations: j,
        analyticsLocation: h.Sbl.USER_SETTINGS,
        confettiCanvas: null,
        churnUserDiscountOffer: c,
        isFetchingChurnDiscountOffer: false,
        fullPrice: "$9.99",
        discountedPrice: "$4.99",
        planId: d,
        paymentsBlocked: false,
        renewalInvoice: m,
        renewalInvoiceDetails: p,
        handleCancellation: () => new Promise((e, t) => {
          setTimeout(() => {
            if (x) return void t();
            e()
          }, 1e3)
        }),
        applyOffer: () => new Promise((e, t) => {
          setTimeout(() => {
            if (f) return void t();
            e()
          }, 1e3)
        }),
        pauseDuration: null,
        setPauseDuration: () => {}
      },
      children: _
    })
  },
  g = e => {
    switch (e) {
      case d.R.DISCOUNT_APPLIED:
        return (0, a.jsx)(c.i, {});
      case d.R.CONFIRM_DISCOUNT:
        return (0, a.jsx)(s.U, {});
      case d.R.CONFIRM:
        return (0, a.jsx)(o.G, {});
      case d.R.PREVIEW:
        return (0, a.jsx)(m.w, {});
      case d.R.WHAT_YOU_LOSE:
      default:
        return (0, a.jsx)(p.n, {})
    }
  }