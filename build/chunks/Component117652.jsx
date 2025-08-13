/** Chunk was on web.js **/
/** chunk id: 117652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => L
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk628952 = require("./628952.jsx"),
  Chunk225657 = require("./225657.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk109213 = require("./109213.js"),
  Chunk927699 = require("./927699.jsx"),
  Chunk987716 = require("./987716.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk855775 = require("./855775.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419388 = require("./419388.js"),
  Chunk591858 = require("./591858.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}
let L = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(M, D({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+f"])
  }
};

function x(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: a = false,
    loading: s = false
  } = e, {
    hasPaymentSources: l
  } = (0, I.JL)(), c = l ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.zxk, {
      onClick: () => t(c),
      disabled: a,
      loading: s,
      text: C.intl.string(C.t.XiOHRU)
    }), i ? (0, r.jsx)(m.Z, {
      onClick: n
    }) : null]
  })
}

function M(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: s = "",
    setCustomGiftMessage: l,
    giftRecipientError: m,
    setGiftRecipientError: T,
    validatingGiftRecipient: w,
    giftRecipient: D,
    recommendedGiftSkuIds: L,
    giftingOrigin: M,
    setValidatingGiftRecipient: j
  } = (0, v.wD)(), {
    selectedSkuId: U,
    setSelectedSkuId: G,
    selectedSkuPricePreview: B,
    paymentSourceId: Z,
    skuPricePreviewsById: F
  } = (0, I.JL)(), V = (0, i.e7)([E.default], () => E.default.getCurrentUser()), {
    enabled: H,
    giftRecommendationAlgorithm: Y
  } = _.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), W = H && M === N.Wt.DM_CHANNEL, K = Y === _.u.POPULAR ? C.intl.string(C.t.Kwgrrq) : C.intl.string(C.t.r1huYW), z = async (e, t) => {
    j(true), null != m && T(), await (0, c.B1)(e.id, t) || T(C.intl.string(C.t["4kgVqa"])), j(false)
  };
  (0, a.ZP)(() => {
    null != U && null != D && (y.default.track(A.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: U
    }), z(D, U))
  });
  let q = e => {
      y.default.track(A.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != D && z(D, e), G(e)
    },
    X = e => {
      let t = F[e],
        n = null;
      if (null != t) {
        var i;
        n = null != Z && null != (i = t[Z]) ? i : t[b.c]
      }
      if (null == n) return;
      let o = (0, O.T4)(n.amount, n.currency);
      return (0, r.jsx)(u.Z, {
        skuId: e,
        price: o,
        isSelected: e === U,
        onSelect: e => q(e),
        className: R.recommendedGiftPreview
      }, e)
    },
    Q = () => (0, r.jsx)(p.Z, {
      sectionTitle: C.intl.string(C.t.B3miEx),
      onTextChange: e => null == l ? true : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: true,
      className: R.customGiftMessageWrapper,
      innerClassName: R.customGiftMessage
    }),
    J = () => W ? (0, r.jsxs)("div", {
      className: R.bodyColumnLeft,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: R.selectGiftTitle,
        children: K.toLocaleUpperCase()
      }), L.map(e => X(e)), (0, r.jsx)(k, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: R.bodyColumnMiddle,
      children: (0, r.jsx)(h.q, {
        isShopGift: true
      })
    }),
    $ = () => {
      if (W) return (0, r.jsxs)("div", {
        className: R.bodyColumnRight,
        children: [(0, r.jsx)(g.s, {
          giftRecipient: D
        }), (0, r.jsx)(h.q, {
          isShopGift: true,
          className: P.adjustedGiftMainAnimation,
          optionsContainerClassName: P.adjustedGiftBoxOptionContainer
        }), Q()]
      });
      let e = null != B ? (0, O.T4)(B.amount, B.currency) : true;
      return (0, r.jsxs)("div", {
        className: R.bodyColumnRight,
        children: [(0, r.jsx)(d.Z, {
          selectedSkuId: U,
          className: R.sendTo,
          validateSelectedGift: z
        }), Q(), null != e && (0, r.jsx)(u.Z, {
          skuId: U,
          price: e,
          className: R.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.C3, {
      children: (0, r.jsxs)("div", {
        className: R.stepBody,
        children: [J(), $()]
      })
    }), (0, r.jsx)(S.O3, {
      children: (0, r.jsx)(o.mzw, {
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        children: (0, r.jsx)(x, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != m || null == D || D.id === (null == V ? true : V.id) || s.length > N.$n,
          loading: w
        })
      })
    })]
  })
}

function k(e) {
  let {
    handleClose: t
  } = e, {
    analyticsLocations: n
  } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function i() {
    t(), (0, o.pTH)(), (0, c.mK)({
      openInLayer: false,
      analyticsLocations: n,
      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    })
  }
  return (0, r.jsx)(o.P3F, {
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: R.navigateToShopButton,
      children: [(0, r.jsxs)("div", {
        className: R.navigateToShopBody,
        children: [(0, r.jsx)("div", {
          className: R.shopIcon,
          children: (0, r.jsx)(o.EOn, {
            size: "custom",
            width: 18,
            height: 18,
            color: "var(--header-primary)"
          })
        }), (0, r.jsxs)("div", {
          className: R.navigateToShopTextWrapper,
          children: [(0, r.jsx)(o.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: C.intl.string(C.t["1+Co8P"])
          }), (0, r.jsx)(o.X6q, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: C.intl.string(C.t.nYn52N)
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(o.d4D, {
          size: "custom",
          width: 20,
          height: 20,
          color: "var(--header-primary)"
        })
      })]
    })
  })
}