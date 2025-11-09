/** Chunk was on web.js **/
/** chunk id: 112726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  pl: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk742956 = require("./742956.jsx"),
  Chunk126982 = require("./126982.jsx"),
  Chunk710094 = require("./710094.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk610005 = require("./610005.jsx"),
  Chunk323043 = require("./323043.jsx"),
  Chunk793202 = require("./793202.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk609778 = require("./609778.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = [{
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(c.l, b({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }, {
    key: Chunk409813.h8.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(d.Gy, O(b({}, e), {
      originStep: o.h8.REVIEW,
      text: "Add Payment Steps Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }, {
    key: Chunk409813.h8.CONFIRM,
    renderStep: e => (0, r.jsx)(d.Gy, O(b({}, e), {
      originStep: o.h8.REVIEW,
      text: "Confirm Step Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }, {
    key: Chunk409813.h8.PLAN_SELECT,
    renderStep: e => (0, r.jsx)(d.Gy, O(b({}, e), {
      originStep: o.h8.REVIEW,
      text: "Plan Select Step Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }],
  I = () => (0, Chunk951288.jsx)(Chunk481060.Text, {
    variant: "text-sm/normal",
    children: "Purchase button is disabled for this story"
  }),
  S = e => {
    let {
      skuId: t,
      isGift: n,
      hideErrors: i
    } = e, {
      analyticsLocations: a,
      loadId: o,
      handleClose: c,
      handleComplete: _,
      isFetching: h,
      sku: m
    } = (0, d.a0)({
      skuId: t,
      isGift: n,
      applicationId: p.XAJ
    }), E = (e, t, i) => n ? (0, r.jsx)(s.Z, {
      step: i,
      onClose: () => t(false)
    }) : (0, r.jsx)(l.Z, {
      step: i,
      onClose: () => t(false)
    }), b = u.ZP.isPremiumSku(t);
    return h || null == m || b ? (0, r.jsx)(f.T, {}) : (0, r.jsxs)("div", {
      className: g.verticalContainerCentered,
      children: [(0, r.jsx)(d.Vy, {
        stepConfigs: v,
        analyticsLocations: a,
        applicationId: p.XAJ,
        initialPlanId: true,
        skuId: t,
        isGift: n,
        hideErrors: i,
        loadId: o,
        purchaseType: p.GZQ.ONE_TIME,
        disablePurchases: true,
        excludeSubscriptionPlansBySKU: true,
        renderHeader: E,
        onClose: c,
        onComplete: _
      }), (0, r.jsx)(I, {})]
    })
  },
  T = e => {
    let {
      skuId: t,
      isGift: n,
      hideErrors: a
    } = e, {
      analyticsLocations: o,
      loadId: s,
      handleClose: l,
      handleComplete: c,
      isFetching: _,
      sku: m
    } = (0, d.a0)({
      skuId: t,
      isGift: n,
      applicationId: h.CL
    }), E = u.ZP.isPremiumSku(t), b = E ? h.mn[t] : true, [y, O] = i.useState(b), S = i.useRef(false);
    i.useEffect(() => {
      S.current || null == b || (S.current = true, O(b))
    }, [b, y]);
    let {
      isLoadedForPremiumSKUs: T,
      selectedPlan: A
    } = (0, d.rC)({
      subscriptionPlanId: y
    });
    return !_ && null != m && T && E && null != A ? (0, r.jsxs)("div", {
      className: g.verticalContainerCentered,
      children: [(0, r.jsx)(d.Vy, {
        stepConfigs: v,
        analyticsLocations: o,
        applicationId: h.CL,
        initialPlanId: b,
        skuId: t,
        isGift: n,
        hideErrors: a,
        loadId: s,
        purchaseType: p.GZQ.SUBSCRIPTION,
        disablePurchases: true,
        onClose: l,
        onComplete: c,
        paymentContextOverrides: {
          selectedPlan: A,
          setSelectedPlanId: O
        }
      }), (0, r.jsx)(I, {})]
    }) : (0, r.jsx)(f.T, {})
  },
  A = {
    isGift: {
      label: "Is Gift",
      type: "boolean",
      defaultValue: false
    },
    hideErrors: {
      label: "Hide Errors",
      type: "boolean",
      defaultValue: true
    }
  },
  C = (0, Chunk793202.F)(),
  N = {
    title: "Checkout Review Step",
    stories: [{
      name: "Collectibles Review Step",
      id: "collectibles-checkout-review-step",
      component: S,
      controls: b({
        skuId: {
          label: "SKU ID",
          type: "select",
          options: C.options,
          defaultValue: C.defaultValue
        }
      }, A)
    }, {
      name: "Premium Review Step",
      id: "premium-checkout-review-step",
      component: T,
      controls: b({
        skuId: {
          label: "SKU ID",
          type: "select",
          options: [{
            value: Chunk474936.Si.TIER_0,
            label: "".concat(Chunk474936.Si.TIER_0, " (Nitro Basic)")
          }, {
            value: Chunk474936.Si.TIER_2,
            label: "".concat(Chunk474936.Si.TIER_2, " (Nitro Standard)")
          }],
          defaultValue: Chunk474936.Si.TIER_0
        }
      }, A)
    }]
  }