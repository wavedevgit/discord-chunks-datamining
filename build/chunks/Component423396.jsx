/** Chunk was on web.js **/
/** chunk id: 423396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gu: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166532 = require("./166532.js"),
  Chunk231018 = require("./231018.jsx"),
  Chunk685944 = require("./685944.jsx"),
  Chunk623020 = require("./623020.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk412463 = require("./412463.jsx"),
  Chunk492518 = require("./492518.jsx"),
  Chunk689614 = require("./689614.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk749226 = require("./749226.js");

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
let A = [{
    key: Chunk166532.pn.REVIEW,
    renderStep: e => (0, r.jsx)(c._M, b({}, e)),
    options: {
      useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
    }
  }, {
    key: Chunk166532.pn.ADD_PAYMENT_STEPS,
    renderStep: e => (0, r.jsx)(d.eO, O(b({}, e), {
      originStep: s.pn.REVIEW,
      text: "Add Payment Steps Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
    }
  }, {
    key: Chunk166532.pn.CONFIRM,
    renderStep: e => (0, r.jsx)(d.eO, O(b({}, e), {
      originStep: s.pn.REVIEW,
      text: "Confirm Step Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
    }
  }, {
    key: Chunk166532.pn.PLAN_SELECT,
    renderStep: e => (0, r.jsx)(d.eO, O(b({}, e), {
      originStep: s.pn.REVIEW,
      text: "Plan Select Step Placeholder"
    })),
    options: {
      useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
    }
  }],
  v = () => (0, r.jsx)(a.Text, {
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
      loadId: s,
      handleClose: c,
      handleComplete: p,
      isFetching: h,
      sku: m
    } = (0, d.ud)({
      skuId: t,
      isGift: n,
      applicationId: _.FYj
    }), E = (e, t, i) => n ? (0, r.jsx)(o.A, {
      step: i,
      onClose: () => t(false)
    }) : (0, r.jsx)(l.A, {
      step: i,
      onClose: () => t(false)
    }), b = u.Ay.isPremiumSku(t);
    return h || null == m || b ? (0, r.jsx)(f.k, {}) : (0, r.jsxs)("div", {
      className: g.Cd,
      children: [(0, r.jsx)(d.dL, {
        stepConfigs: A,
        analyticsLocations: a,
        applicationId: _.FYj,
        initialPlanId: true,
        skuId: t,
        isGift: n,
        hideErrors: i,
        loadId: s,
        purchaseType: _.VVm.ONE_TIME,
        disablePurchases: true,
        excludeSubscriptionPlansBySKU: true,
        renderHeader: E,
        onClose: c,
        onComplete: p
      }), (0, r.jsx)(v, {})]
    })
  },
  I = e => {
    let {
      skuId: t,
      isGift: n,
      hideErrors: a
    } = e, {
      analyticsLocations: s,
      loadId: o,
      handleClose: l,
      handleComplete: c,
      isFetching: p,
      sku: m
    } = (0, d.ud)({
      skuId: t,
      isGift: n,
      applicationId: h.tv
    }), E = u.Ay.isPremiumSku(t), b = E ? h.zE[t] : true, [y, O] = i.useState(b), S = i.useRef(false);
    i.useEffect(() => {
      S.current || null == b || (S.current = true, O(b))
    }, [b, y]);
    let {
      isLoadedForPremiumSKUs: I,
      selectedPlan: T
    } = (0, d.n1)({
      subscriptionPlanId: y
    });
    return !p && null != m && I && E && null != T ? (0, r.jsxs)("div", {
      className: g.Cd,
      children: [(0, r.jsx)(d.dL, {
        stepConfigs: A,
        analyticsLocations: s,
        applicationId: h.tv,
        initialPlanId: b,
        skuId: t,
        isGift: n,
        hideErrors: a,
        loadId: o,
        purchaseType: _.VVm.SUBSCRIPTION,
        disablePurchases: true,
        onClose: l,
        onComplete: c,
        paymentContextOverrides: {
          selectedPlan: T,
          setSelectedPlanId: O
        }
      }), (0, r.jsx)(v, {})]
    }) : (0, r.jsx)(f.k, {})
  },
  T = {
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
  C = (0, Chunk689614.R)(),
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
      }, T)
    }, {
      name: "Premium Review Step",
      id: "premium-checkout-review-step",
      component: I,
      controls: b({
        skuId: {
          label: "SKU ID",
          type: "select",
          options: [{
            value: Chunk788868.pe.TIER_0,
            label: "".concat(Chunk788868.pe.TIER_0, " (Nitro Basic)")
          }, {
            value: Chunk788868.pe.TIER_2,
            label: "".concat(Chunk788868.pe.TIER_2, " (Nitro Standard)")
          }],
          defaultValue: Chunk788868.pe.TIER_0
        }
      }, T)
    }]
  }