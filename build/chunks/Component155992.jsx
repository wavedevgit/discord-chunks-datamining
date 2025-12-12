/** Chunk was on web.js **/
/** chunk id: 155992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gy: () => A,
  Vy: () => N,
  a0: () => T,
  rC: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk16084 = require("./16084.js"),
  Chunk821849 = require("./821849.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk676500 = require("./676500.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = e => {
    let {
      skuId: t,
      isGift: n,
      applicationId: r
    } = e, {
      analyticsLocations: l
    } = (0, p.ZP)(f.Z.PAYMENT_FLOW_TEST_PAGE), c = i.useRef(null), d = i.useRef(null), [_, m] = i.useState(() => (0, o.Z)());
    i.useEffect(() => {
      (c.current !== t || d.current !== n) && (m((0, o.Z)()), c.current = t, d.current = n)
    }, [t, n]);
    let [h, g] = (0, s.Wu)([b.Z], () => [b.Z.isFetching(t), b.Z.get(t)]);
    return i.useEffect(() => {
      null != g || h || (0, u.$N)(r, t, a.v.VARIANTS_GROUP).catch(e => {})
    }, [r, t, g, h]), {
      loadId: _,
      analyticsLocations: l,
      handleClose: i.useCallback(e => {}, []),
      handleComplete: i.useCallback(() => {}, []),
      isFetching: h,
      sku: g,
      skuId: t,
      isGift: n
    }
  },
  C = e => {
    let {
      subscriptionPlanId: t
    } = e;
    i.useEffect(() => {
      E.Z.isLoadedForPremiumSKUs() || c.Z.wait(() => (0, d.Y2)())
    }, []);
    let n = (0, s.e7)([E.Z], () => null != t ? E.Z.get(t) : null);
    return {
      isLoadedForPremiumSKUs: (0, s.e7)([E.Z], () => E.Z.isLoadedForPremiumSKUs()),
      selectedPlan: n
    }
  },
  A = e => (0, r.jsxs)("div", {
    style: {
      padding: 20
    },
    children: [(0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: e.text
    }), (0, r.jsx)("div", {
      style: {
        marginTop: 16
      },
      children: (0, r.jsx)(l.Anchor, {
        onClick: () => e.handleStepChange(e.originStep),
        children: "← Go Back"
      })
    })]
  }),
  N = e => {
    let {
      analyticsLocations: t,
      applicationId: n,
      skuId: i,
      isGift: o,
      onClose: a,
      onComplete: s,
      initialPlanId: c,
      purchaseType: u,
      stepConfigs: d,
      loadId: f,
      excludeSubscriptionPlansBySKU: p,
      renderHeader: E,
      hideErrors: b,
      disablePurchases: O,
      paymentContextOverrides: S
    } = e, T = b ? v({
      purchasePreviewError: null,
      purchaseError: null
    }, S) : v({}, S);
    O && (T.disablePurchasesForStorybook = true);
    let C = "".concat(i, "-").concat(o, "-").concat(f);
    return (0, r.jsx)(m.PaymentContextProvider, {
      stepConfigs: d,
      applicationId: n,
      skuIDs: null != i ? [i] : [],
      isGift: o,
      activeSubscription: null,
      purchaseType: u,
      excludeSubscriptionPlansBySKU: p,
      children: (0, r.jsx)(y.$, I(v({}, T), {
        children: (0, r.jsx)(h.c1, {
          children: (0, r.jsx)(_.KB, {
            isGift: o,
            children: (0, r.jsx)(g.PaymentModal, {
              transitionState: l.Dvm.ENTERED,
              onClose: a,
              onComplete: s,
              applicationId: n,
              skuId: i,
              initialPlanId: c,
              analyticsLocations: t,
              hideShadow: true,
              renderHeader: E
            }, C)
          })
        })
      }))
    }, C)
  }