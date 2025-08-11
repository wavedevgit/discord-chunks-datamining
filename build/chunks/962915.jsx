/** Chunk was on 75708 **/
/** chunk id: 962915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let h = e => {
    let {
      transitionState: t,
      onClose: n,
      premiumSubscription: l,
      premiumType: o,
      churnDiscount: c,
      planId: d,
      renewalInvoice: m,
      renewalInvoiceDetails: p,
      errorOnCancel: h,
      errorOnRedeem: b,
      setActiveStep: x,
      activeStep: _
    } = e, {
      analyticsLocations: j
    } = (0, a.ZP)(s.Z.USER_SETTINGS), [E, C] = r.useState(f(_));
    return (0, r.useEffect)(() => {
      C(f(_))
    }, [_]), <u.D.Provider value={{
        setStep: x,
        premiumType: o,
        onClose: n,
        transitionState: t,
        premiumSubscription: l,
        analyticsLocations: j,
        analyticsLocation: g.Sbl.USER_SETTINGS,
        confettiCanvas: null,
        discountPrimary: false,
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
            if (h) return void t();
            e()
          }, 1e3)
        }),
        applyOffer: () => new Promise((e, t) => {
          setTimeout(() => {
            if (b) return void t();
            e()
          }, 1e3)
        })
      }}>{E}</u.D.Provider>
  },
  f = e => {
    switch (e) {
      case d.R.DISCOUNT_APPLIED:
        return <c.i />;
      case d.R.CONFIRM_DISCOUNT:
        return <o.U />;
      case d.R.CONFIRM:
        return <l.G />;
      case d.R.PREVIEW:
        return <m.w />;
      case d.R.WHAT_YOU_LOSE:
      default:
        return <p.n />
    }
  }