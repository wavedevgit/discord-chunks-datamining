/** Chunk was on web.js **/
/** chunk id: 443702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk231428 = require("./231428.jsx"),
  Chunk390954 = require("./390954.jsx"),
  Chunk89057 = require("./89057.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk706454 = require("./706454.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk61365 = require("./61365.js");

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = () => (0, Chunk951288.jsx)("div", {
  className: Chunk61365.syncing,
  children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
});
class P extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk570140.Z.wait(() => {
      Chunk355467.tZ(), Chunk355467.jg()
    })
  }
  handleRedemptionRedirect() {
    Chunk230711.Z.setSection(Chunk981631.oAB.INVENTORY)
  }
  render() {
    let {
      syncing: e,
      hide: t,
      paymentSources: n,
      defaultPaymentSourceId: i,
      locale: a,
      premiumSubscription: s,
      isRemovingPaymentSource: l,
      isUpdatingPaymentSource: c
    } = this.props;
    return exports ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)("div", {
      children: [module && 0 === Object.keys(require).length ? (0, Chunk951288.jsx)(R, {}) : (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.BILLING_PAYMENT_METHODS,
        children: (0, Chunk951288.jsx)(Chunk390954.Z, {
          paymentSources: require,
          defaultPaymentSourceId: Chunk647438,
          premiumSubscriptionPaymentSourceId: null != Chunk570140 && Chunk570140.status !== Chunk981631.O0b.CANCELED ? Chunk570140.paymentSourceId : null,
          locale: Chunk442837,
          removing: Chunk355467,
          submitting: Chunk230711
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.BILLING_TRANSACTION_HISTORY,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk61365.paymentHistory,
          children: (0, Chunk951288.jsxs)(Chunk481060.y5t, {
            component: (0, Chunk951288.jsx)(Chunk481060.vwX, {
              tag: "h1",
              children: Chunk388032.intl.string(Chunk388032.t.obLrcH)
            }),
            children: [(0, Chunk951288.jsx)(Chunk89057.oQ, {}), (0, Chunk951288.jsx)(Chunk231428.Z, {
              locale: Chunk442837
            })]
          })
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.INFO,
        className: Chunk61365.codeRedemptionRedirect,
        children: Chunk388032.intl.format(Chunk388032.t["8b+FXF"], {
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function w() {
  let e = (0, Chunk442837.cj)([Chunk706454.default, Chunk351402.Z, Chunk853872.Z, Chunk594174.default, Chunk246946.Z, Chunk78839.Z], () => {
    let e = Chunk78839.Z.getPremiumTypeSubscription(),
      t = Chunk594174.default.getCurrentUser();
    return null == exports ? {
      shouldRenderBillingSettings: false
    } : {
      shouldRenderBillingSettings: true,
      locale: Chunk706454.default.locale,
      hide: Chunk246946.Z.enabled,
      isClaimed: exports.isClaimed(),
      isVerified: exports.verified,
      premiumSubscription: module,
      defaultPaymentSourceId: Chunk853872.Z.defaultPaymentSourceId,
      paymentSources: Chunk853872.Z.paymentSources,
      syncing: Chunk351402.Z.isSyncing,
      isRemovingPaymentSource: Chunk351402.Z.isRemovingPaymentSource,
      isUpdatingPaymentSource: Chunk351402.Z.isUpdatingPaymentSource
    }
  });
  if (!module.shouldRenderBillingSettings) return (0, Chunk951288.jsx)(R, {});
  let {
    shouldRenderBillingSettings: t
  } = module, n = C(module, ["shouldRenderBillingSettings"]);
  return (0, Chunk951288.jsx)(P, A({}, require))
}