/** Chunk was on 30202 **/
/** chunk id: 443702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let S = () => (0, Chunk255367.jsx)("div", {
  className: Chunk61365.syncing,
  children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
});
class T extends Chunk73800.PureComponent {
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
      defaultPaymentSourceId: r,
      locale: s,
      premiumSubscription: l,
      isRemovingPaymentSource: o,
      isUpdatingPaymentSource: c
    } = this.props;
    return exports ? (0, Chunk255367.jsx)(Chunk497321.Z, {}) : (0, Chunk255367.jsxs)("div", {
      className: Chunk61365.__invalid_userSettingsBilling,
      children: [module && 0 === Object.keys(require).length ? (0, Chunk255367.jsx)(S, {}) : (0, Chunk255367.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.BILLING_PAYMENT_METHODS,
        children: (0, Chunk255367.jsx)(Chunk390954.Z, {
          paymentSources: require,
          defaultPaymentSourceId: Chunk73800,
          premiumSubscriptionPaymentSourceId: null != Chunk570140 && Chunk570140.status !== Chunk981631.O0b.CANCELED ? Chunk570140.paymentSourceId : null,
          locale: Chunk442837,
          removing: Chunk355467,
          submitting: Chunk230711
        })
      }), (0, Chunk255367.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.BILLING_TRANSACTION_HISTORY,
        children: (0, Chunk255367.jsx)("div", {
          className: Chunk61365.paymentHistory,
          children: (0, Chunk255367.jsxs)(Chunk481060.y5t, {
            component: (0, Chunk255367.jsx)(Chunk481060.vwX, {
              tag: "h1",
              children: Chunk388032.intl.string(Chunk388032.t.obLrcH)
            }),
            children: [(0, Chunk255367.jsx)(Chunk89057.oQ, {}), (0, Chunk255367.jsx)(Chunk231428.Z, {
              locale: Chunk442837
            })]
          })
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Zbd, {
        className: Chunk61365.codeRedemptionRedirect,
        type: Chunk481060.Zbd.Types.CUSTOM,
        children: Chunk388032.intl.format(Chunk388032.t["8b+FXF"], {
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function N() {
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
  if (!module.shouldRenderBillingSettings) return (0, Chunk255367.jsx)(S, {});
  let {
    shouldRenderBillingSettings: t
  } = module, n = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(module, ["shouldRenderBillingSettings"]);
  return (0, Chunk255367.jsx)(T, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, require))
}