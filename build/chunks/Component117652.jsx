/** Chunk was on web.js **/
/** chunk id: 117652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk855775 = require("./855775.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614277 = require("./614277.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk359739 = require("./359739.js"),
  Chunk611344 = require("./611344.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}
let x = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(j, L({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+f"])
  }
};

function M(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: o = false,
    loading: s = false
  } = e, {
    hasPaymentSources: l
  } = (0, T.JL)(), c = l ? S.h8.REVIEW : S.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.zxk, {
      onClick: () => t(c),
      disabled: o,
      loading: s,
      text: R.intl.string(R.t.XiOHRU)
    }), i ? (0, r.jsx)(m.Z, {
      onClick: n
    }) : null]
  })
}

function j(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: s = "",
    setCustomGiftMessage: l,
    giftRecipientError: m,
    setGiftRecipientError: E,
    validatingGiftRecipient: S,
    giftRecipient: D,
    recommendedGiftSkuIds: L,
    giftingOrigin: x,
    setValidatingGiftRecipient: j
  } = (0, I.wD)(), {
    selectedSkuId: G,
    setSelectedSkuId: B,
    selectedSkuPricePreview: Z,
    paymentSourceId: F,
    skuPricePreviewsById: V
  } = (0, T.JL)(), H = (0, i.e7)([b.default], () => b.default.getCurrentUser()), {
    enabled: Y,
    giftRecommendationAlgorithm: W
  } = _.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), K = Y && x === N.Wt.DM_CHANNEL, z = W === _.u.POPULAR ? R.intl.string(R.t.Kwgrrq) : R.intl.string(R.t.r1huYW), q = async (e, t) => {
    j(true), null != m && E(), await (0, c.B1)(e.id, t) || E(R.intl.string(R.t["4kgVqa"])), j(false)
  };
  (0, o.ZP)(() => {
    null != G && null != D && (O.default.track(C.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: G
    }), q(D, G))
  });
  let X = e => {
      O.default.track(C.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != D && q(D, e), B(e)
    },
    Q = e => {
      let t = V[e],
        n = null;
      if (null != t) {
        var i;
        n = null != F && null != (i = t[F]) ? i : t[y.c]
      }
      if (null == n) return;
      let a = (0, v.T4)(n.amount, n.currency);
      return (0, r.jsx)(u.Z, {
        skuId: e,
        price: a,
        isSelected: e === G,
        onSelect: e => X(e),
        className: P.recommendedGiftPreview
      }, e)
    },
    J = () => (0, r.jsx)(p.Z, {
      sectionTitle: R.intl.string(R.t.B3miEx),
      onTextChange: e => null == l ? true : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: true,
      className: P.customGiftMessageWrapper,
      innerClassName: P.customGiftMessage
    }),
    $ = () => K ? (0, r.jsxs)("div", {
      className: P.bodyColumnLeft,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: P.selectGiftTitle,
        children: z.toLocaleUpperCase()
      }), L.map(e => Q(e)), (0, r.jsx)(k, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: P.bodyColumnMiddle,
      children: (0, r.jsx)(h.q, {
        isShopGift: true
      })
    }),
    ee = () => {
      if (K) return (0, r.jsxs)("div", {
        className: P.bodyColumnRight,
        children: [(0, r.jsx)(g.s, {
          giftRecipient: D
        }), (0, r.jsx)(h.q, {
          isShopGift: true,
          className: w.adjustedGiftMainAnimation,
          optionsContainerClassName: w.adjustedGiftBoxOptionContainer
        }), J()]
      });
      let e = null != Z ? (0, v.T4)(Z.amount, Z.currency) : true;
      return x === N.Wt.USER_PROFILE_WISHLIST ? (0, r.jsxs)("div", {
        className: P.bodyColumnRight,
        children: [(0, r.jsx)(g.s, {
          giftRecipient: D
        }), J(), null != e && null != G && (0, r.jsx)(u.Z, {
          skuId: G,
          price: e,
          className: P.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        }), (0, r.jsx)(U, {
          handleClose: n,
          selectedSkuId: G
        })]
      }) : (0, r.jsxs)("div", {
        className: P.bodyColumnRight,
        children: [(0, r.jsx)(d.Z, {
          selectedSkuId: G,
          className: P.sendTo,
          validateSelectedGift: q
        }), J(), null != e && (0, r.jsx)(u.Z, {
          skuId: G,
          price: e,
          className: P.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.C3, {
      children: (0, r.jsxs)("div", {
        className: P.stepBody,
        children: [$(), ee()]
      })
    }), (0, r.jsx)(A.O3, {
      children: (0, r.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        children: (0, r.jsx)(M, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != m || null == D || D.id === (null == H ? true : H.id) || s.length > N.$n,
          loading: S
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
    t(), (0, a.pTH)(), (0, c.mK)({
      openInLayer: false,
      analyticsLocations: n,
      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    })
  }
  return (0, r.jsx)(a.P3F, {
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: P.navigateToShopButton,
      children: [(0, r.jsxs)("div", {
        className: P.navigateToShopBody,
        children: [(0, r.jsx)("div", {
          className: P.shopIcon,
          children: (0, r.jsx)(a.EOn, {
            size: "custom",
            width: 18,
            height: 18,
            color: "var(--header-primary)"
          })
        }), (0, r.jsxs)("div", {
          className: P.navigateToShopTextWrapper,
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: R.intl.string(R.t["1+Co8P"])
          }), (0, r.jsx)(a.X6q, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: R.intl.string(R.t.nYn52N)
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(a.d4D, {
          size: "custom",
          width: 20,
          height: 20,
          color: "var(--header-primary)"
        })
      })]
    })
  })
}

function U(e) {
  let {
    handleClose: t,
    selectedSkuId: n
  } = e, {
    analyticsLocations: i
  } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function o() {
    t(), (0, a.pTH)(), null == n ? (0, c.mK)({
      openInLayer: false,
      analyticsLocations: i,
      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    }) : (0, E.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
  }
  return (0, r.jsx)(a.Avr, {
    text: R.intl.string(R.t.J82mpK),
    onClick: o,
    textVariant: "text-sm/medium"
  })
}