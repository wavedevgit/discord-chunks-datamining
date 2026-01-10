/** Chunk was on 81985 **/
/** chunk id: 367207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk100527 = require("./100527.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk93127 = require("./93127.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk970645 = require("./970645.js"),
  Chunk30684 = require("./30684.js"),
  Chunk937579 = require("./937579.js"),
  Chunk522558 = require("./522558.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function v(e, t) {
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
class O extends Chunk317770.Z {
  _initialize() {
    __OVERLAY__ ? l.Z.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.Z.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.Z.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), l.Z.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
  }
  _terminate() {
    __OVERLAY__ ? l.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.Z.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.Z.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), l.Z.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: l
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, 465836));
      return n => (0, r.jsx)(e, y({
        channel: t,
        content: l
      }, n))
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, s.Z)(v(y({}, e), {
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
      analyticsObject: i
    } = null != e ? e : {};
    return new Promise((e, a) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = a, l.Z.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: r,
        analyticsObject: i
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "_premiumPaymentModalCloseResolve", null), b(this, "_premiumPaymentModalCloseReject", null), b(this, "_maybeFetchPremiumOffer", async () => {
      let e = u.default.getCurrentUser();
      if (null != e && e.verified) {
        let t = (d.Z.canFractionalPremiumUserUseOffer() || !(0, p.I5)(e)) && !d.Z.isFetchingOffer();
        await (0, g.Tf)("PremiumManager", t)
      }
      l.Z.dispatch({
        type: "PREMIUM_MARKETING_DATA_READY"
      })
    }), b(this, "_maybeFetchCheckoutRecovery", async () => {
      let e = u.default.getCurrentUser();
      null != e && e.verified && !(0, p.I5)(e) && h.Z.shouldFetchCheckoutRecovery() && await (0, f.o)()
    }), b(this, "_maybeFetchUserAffinities", () => {
      let {
        enabled: e
      } = m.w.getConfig({
        location: "PremiumManager"
      });
      e && (0, c._)()
    }), b(this, "_handlePremiumPaymentModalOpen", e => {
      (0, s.Z)(v(y({}, e), {
        analyticsLocations: [o.Z.OVERLAY],
        onClose: e => {
          l.Z.dispatch({
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