/** Chunk was on web.js **/
/** chunk id: 117652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => M
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
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

function x(e, t, n) {
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
      x(e, t, n[t])
    })
  }
  return e
}
let M = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(j, L({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function k(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: o = false,
    loading: s = false
  } = e, {
    hasPaymentSources: l
  } = (0, S.JL)(), c = l ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      onClick: () => t(c),
      disabled: o,
      loading: s,
      text: P.intl.string(P.t.XiOHRX)
    }), i ? (0, r.jsx)(g.Z, {
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
    giftRecipientError: g,
    setGiftRecipientError: b,
    validatingGiftRecipient: A,
    giftRecipient: x,
    recommendedGiftSkuIds: L,
    giftingOrigin: M,
    setValidatingGiftRecipient: j
  } = (0, T.wD)(), {
    selectedSkuId: B,
    setSelectedSkuId: Z,
    selectedSkuPricePreview: F,
    paymentSourceId: V,
    skuPricePreviewsById: H,
    skusById: Y
  } = (0, S.JL)(), W = (0, i.e7)([y.default], () => y.default.getCurrentUser()), {
    enabled: K,
    giftRecommendationAlgorithm: z
  } = p.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), q = K && M === R.Wt.DM_CHANNEL, X = z === p.u.POPULAR ? P.intl.string(P.t.Kwgrrr) : P.intl.string(P.t.r1huYR), Q = async (e, t) => {
    j(true), null != g && b(), await (0, c.B1)(e.id, t) || b(P.intl.string(P.t["4kgVqQ"])), j(false)
  };
  (0, o.ZP)(() => {
    null != B && null != x && (v.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: B
    }), Q(x, B))
  });
  let J = e => {
      v.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != x && Q(x, e), Z(e)
    },
    $ = e => {
      let t = H[e],
        n = null;
      if (null != t) {
        var i;
        n = null != V && null != (i = t[V]) ? i : t[O.c]
      }
      if (null == n) return;
      let a = (0, I.T4)(n.amount, n.currency);
      return (0, r.jsx)(d.Z, {
        skuId: e,
        price: a,
        isSelected: e === B,
        onSelect: e => J(e),
        className: w.recommendedGiftPreview
      }, e)
    },
    ee = () => (0, r.jsx)(h.Z, {
      sectionTitle: P.intl.string(P.t.B3miE8),
      onTextChange: e => null == l ? true : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: true,
      className: w.customGiftMessageWrapper,
      innerClassName: w.customGiftMessage
    }),
    et = () => q ? (0, r.jsxs)("div", {
      className: w.bodyColumnLeft,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.selectGiftTitle,
        children: X.toLocaleUpperCase()
      }), L.map(e => $(e)), (0, r.jsx)(U, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: w.bodyColumnMiddle,
      children: (0, r.jsx)(m.q, {
        isShopGift: true
      })
    }),
    en = () => {
      if (q) return (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(E.s, {
          giftRecipient: x
        }), (0, r.jsx)(m.q, {
          isShopGift: true,
          className: D.adjustedGiftMainAnimation,
          optionsContainerClassName: D.adjustedGiftBoxOptionContainer
        }), ee()]
      });
      let e = (0, u.v5)({
        selectedSkuPricePreview: F,
        paymentSourceId: V,
        selectedSkuId: B,
        skuPricePreviewsById: H,
        skusById: Y,
        formatPrice: I.T4
      });
      return M === R.Wt.USER_PROFILE_WISHLIST || M === R.Wt.DM_CHANNEL_WISHLIST ? (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(E.s, {
          giftRecipient: x
        }), ee(), null != e && null != B && (0, r.jsx)(d.Z, {
          skuId: B,
          price: e,
          className: w.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true,
          hideProfilePreview: M === R.Wt.DM_CHANNEL_WISHLIST
        }), (0, r.jsx)(G, {
          handleClose: n,
          selectedSkuId: B
        })]
      }) : (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(f.Z, {
          selectedSkuId: B,
          className: w.sendTo,
          validateSelectedGift: Q
        }), ee(), null != e && (0, r.jsx)(d.Z, {
          skuId: B,
          price: e,
          className: w.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.C3, {
      children: (0, r.jsxs)("div", {
        className: w.stepBody,
        children: [et(), en()]
      })
    }), (0, r.jsx)(C.O3, {
      children: (0, r.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: _.Z.Justify.BETWEEN,
        align: _.Z.Align.CENTER,
        children: (0, r.jsx)(k, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != g || null == x || x.id === (null == W ? true : W.id) || s.length > R.$n,
          loading: A
        })
      })
    })]
  })
}

function U(e) {
  let {
    handleClose: t
  } = e, {
    analyticsLocations: n
  } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function i() {
    t(), (0, a.pTH)(), (0, c.mK)({
      analyticsLocations: n,
      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    })
  }
  return (0, r.jsx)(a.P3F, {
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: w.navigateToShopButton,
      children: [(0, r.jsxs)("div", {
        className: w.navigateToShopBody,
        children: [(0, r.jsx)("div", {
          className: w.shopIcon,
          children: (0, r.jsx)(a.EOn, {
            size: "custom",
            width: 18,
            height: 18,
            color: "var(--header-primary)"
          })
        }), (0, r.jsxs)("div", {
          className: w.navigateToShopTextWrapper,
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: P.intl.string(P.t["1+Co8G"])
          }), (0, r.jsx)(a.Heading, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: P.intl.string(P.t.nYn52B)
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

function G(e) {
  let {
    handleClose: t,
    selectedSkuId: n
  } = e, {
    analyticsLocations: i
  } = (0, l.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function o() {
    t(), (0, a.pTH)(), null == n ? (0, c.mK)({
      analyticsLocations: i,
      analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    }) : (0, b.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
  }
  return (0, r.jsx)(a.Avr, {
    text: P.intl.string(P.t.J82mpK),
    onClick: o,
    textVariant: "text-sm/medium"
  })
}