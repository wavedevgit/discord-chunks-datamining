/** Chunk was on 44669 **/
/** chunk id: 580960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk793574 = require("./793574.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk219271 = require("./219271.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk882442 = require("./882442.js"),
  Chunk869968 = require("./869968.js"),
  Chunk694080 = require("./694080.js"),
  Chunk70730 = require("./70730.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class O extends Chunk272355.A {
  _initialize() {
    __OVERLAY__ ? i.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
  }
  _terminate() {
    __OVERLAY__ ? i.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: i
    } = e;
    (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("76725").then(n.bind(n, 798612));
      return n => (0, r.jsx)(e, A({
        channel: t,
        content: i
      }, n))
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, o.A)(y(A({}, e), {
        onClose: e => {
          e ? t() : n()
        }
      }))
    })
  }
  openPremiumPaymentModalInOverlay(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    let {
      initialPlanId: t,
      subscriptionTier: n,
      followupSKUInfo: r,
      analyticsObject: l
    } = null != e ? e : {};
    return new Promise((e, s) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = s, i.h.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: r,
        analyticsObject: l
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "_premiumPaymentModalCloseResolve", null), b(this, "_premiumPaymentModalCloseReject", null), b(this, "_maybeFetchPremiumOffer", async () => {
      let e = u.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = (d.A.canFractionalPremiumUserUseOffer() || !(0, p.TW)(e)) && !d.A.isFetchingOffer();
        await (0, f._D)("PremiumManager", t)
      }
      i.h.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), b(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = u.default.getCurrentUser();
      null != e && e.verified && !(0, p.TW)(e) && g.A.shouldFetchCheckoutRecovery() && await (0, h.c)()
    }), b(this, "_maybeFetchUserAffinities", () => {
      let {
        enabled: e
      } = m.u.getConfig({
        location: "PremiumManager"
      });
      e && (0, c.u)()
    }), b(this, "_handlePremiumPaymentModalOpen", e => {
      (0, o.A)(y(A({}, e), {
        analyticsLocations: [a.A.OVERLAY],
        onClose: e => {
          i.h.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      }))
    }), b(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
let j = new O