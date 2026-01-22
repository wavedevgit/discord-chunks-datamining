/** Chunk was on web.js **/
/** chunk id: 412463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  dL: () => N,
  eO: () => C,
  n1: () => T,
  ud: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830382 = require("./830382.js"),
  Chunk73825 = require("./73825.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk491057 = require("./491057.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk582658 = require("./582658.jsx");

function O(e, t, n) {
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
      O(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      skuId: t,
      isGift: n,
      applicationId: r
    } = e, {
      analyticsLocations: l
    } = (0, p.Ay)(f.A.PAYMENT_FLOW_TEST_PAGE), c = i.useRef(null), d = i.useRef(null), [_, h] = i.useState(() => (0, a.A)());
    i.useEffect(() => {
      (c.current !== t || d.current !== n) && (h((0, a.A)()), c.current = t, d.current = n)
    }, [t, n]);
    let [m, g] = (0, o.yK)([b.A], () => [b.A.isFetching(t), b.A.get(t)]);
    return i.useEffect(() => {
      null != g || m || (0, u.EX)(r, t, s.g.VARIANTS_GROUP).catch(e => {})
    }, [r, t, g, m]), {
      loadId: _,
      analyticsLocations: l,
      handleClose: i.useCallback(e => {}, []),
      handleComplete: i.useCallback(() => {}, []),
      isFetching: m,
      sku: g,
      skuId: t,
      isGift: n
    }
  },
  T = e => {
    let {
      subscriptionPlanId: t
    } = e;
    i.useEffect(() => {
      E.A.isLoadedForPremiumSKUs() || c.h.wait(() => (0, d.zS)())
    }, []);
    let n = (0, o.bG)([E.A], () => null != t ? E.A.get(t) : null);
    return {
      isLoadedForPremiumSKUs: (0, o.bG)([E.A], () => E.A.isLoadedForPremiumSKUs()),
      selectedPlan: n
    }
  },
  C = e => (0, r.jsxs)("div", {
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
      children: (0, r.jsx)(l.MzZ, {
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
      isGift: a,
      onClose: s,
      onComplete: o,
      initialPlanId: c,
      purchaseType: u,
      stepConfigs: d,
      loadId: f,
      excludeSubscriptionPlansBySKU: p,
      renderHeader: E,
      hideErrors: b,
      disablePurchases: O,
      paymentContextOverrides: v
    } = e, I = b ? A({
      purchasePreviewError: null,
      purchaseError: null
    }, v) : A({}, v);
    O && (I.disablePurchasesForStorybook = true);
    let T = "".concat(i, "-").concat(a, "-").concat(f);
    return (0, r.jsx)(h.PaymentContextProvider, {
      stepConfigs: d,
      applicationId: n,
      skuIDs: null != i ? [i] : [],
      isGift: a,
      activeSubscription: null,
      purchaseType: u,
      excludeSubscriptionPlansBySKU: p,
      children: (0, r.jsx)(y.Y, S(A({}, I), {
        children: (0, r.jsx)(m.Qt, {
          children: (0, r.jsx)(_.dX, {
            isGift: a,
            children: (0, r.jsx)(g.PaymentModal, {
              transitionState: l.ip4.ENTERED,
              onClose: s,
              onComplete: o,
              applicationId: n,
              skuId: i,
              initialPlanId: c,
              analyticsLocations: t,
              hideShadow: true,
              renderHeader: E
            }, T)
          })
        })
      }))
    }, T)
  }