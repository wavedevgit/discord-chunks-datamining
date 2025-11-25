/** Chunk was on web.js **/
/** chunk id: 117652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => k
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk884697 = require("./884697.js"),
  Chunk628952 = require("./628952.jsx"),
  Chunk225657 = require("./225657.jsx"),
  Chunk334636 = require("./334636.js"),
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

function M(e) {
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
let k = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(U, M({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function j(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: o = false,
    loading: s = false
  } = e, {
    hasPaymentSources: l
  } = (0, A.JL)(), c = l ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      onClick: () => t(c),
      disabled: o,
      loading: s,
      text: D.intl.string(D.t.XiOHRX)
    }), i ? (0, r.jsx)(E.Z, {
      onClick: n
    }) : null]
  })
}

function U(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: s = "",
    setCustomGiftMessage: l,
    giftRecipientError: E,
    setGiftRecipientError: y,
    validatingGiftRecipient: C,
    giftRecipient: x,
    recommendedGiftSkuIds: M,
    giftingOrigin: k,
    setValidatingGiftRecipient: U
  } = (0, S.wD)(), {
    selectedSkuId: Z,
    setSelectedSkuId: F,
    selectedSkuPricePreview: V,
    paymentSourceId: H,
    skuPricePreviewsById: W,
    skusById: Y
  } = (0, A.JL)(), K = (0, i.e7)([O.default], () => O.default.getCurrentUser()), {
    enabled: z,
    giftRecommendationAlgorithm: q
  } = h.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), X = (0, _.Z)({}), Q = z && k === P.Wt.DM_CHANNEL, J = q === h.u.POPULAR ? D.intl.string(D.t.Kwgrrr) : D.intl.string(D.t.r1huYR), $ = async (e, t) => {
    U(true), null != E && y(), await (0, c.B1)(e.id, t) || y(D.intl.string(D.t["4kgVqQ"])), U(false)
  };
  (0, o.ZP)(() => {
    null != Z && null != x && (k !== P.Wt.DM_CHANNEL_WISHLIST && I.default.track(R.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: Z
    }), $(x, Z))
  });
  let ee = e => {
      k !== P.Wt.DM_CHANNEL_WISHLIST && I.default.track(R.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != x && $(x, e), F(e)
    },
    et = e => {
      let t = W[e],
        n = null;
      if (null != t) {
        var i;
        n = null != H && null != (i = t[H]) ? i : t[v.c]
      }
      if (null == n) return;
      let a = (0, T.T4)(n.amount, n.currency);
      return (0, r.jsx)(d.Z, {
        skuId: e,
        price: a,
        isSelected: e === Z,
        onSelect: e => ee(e),
        className: w.recommendedGiftPreview
      }, e)
    },
    en = () => (0, r.jsx)(m.Z, {
      sectionTitle: D.intl.string(D.t.B3miE8),
      onTextChange: e => null == l ? true : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: true,
      className: w.customGiftMessageWrapper,
      innerClassName: w.customGiftMessage
    }),
    er = () => Q ? (0, r.jsxs)("div", {
      className: w.bodyColumnLeft,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.selectGiftTitle,
        children: J.toLocaleUpperCase()
      }), M.map(e => et(e)), (0, r.jsx)(G, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: w.bodyColumnMiddle,
      children: (0, r.jsx)(g.q, {
        isShopGift: true
      })
    }),
    ei = () => {
      if (Q) return (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(b.s, {
          giftRecipient: x
        }), (0, r.jsx)(g.q, {
          isShopGift: true,
          className: L.adjustedGiftMainAnimation,
          optionsContainerClassName: L.adjustedGiftBoxOptionContainer
        }), en()]
      });
      let e = (0, u.v5)({
        selectedSkuPricePreview: V,
        paymentSourceId: H,
        selectedSkuId: Z,
        skuPricePreviewsById: W,
        skusById: Y,
        formatPrice: T.T4
      });
      return k === P.Wt.USER_PROFILE_WISHLIST || k === P.Wt.DM_CHANNEL_WISHLIST ? (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(b.s, {
          giftRecipient: x
        }), en(), null != e && null != Z && (0, r.jsx)(d.Z, {
          skuId: Z,
          price: e,
          className: w.wishlistGiftPreview,
          previewHeaderClassName: w.wishlistGiftPreviewHeader,
          isSelected: true,
          shouldDisplayHeader: true,
          hideProfilePreview: true
        }), (0, r.jsx)("div", {
          className: w.wishlistGiftPreviewFooter,
          children: (0, r.jsx)(B, {
            handleClose: n,
            selectedSkuId: Z
          })
        })]
      }) : (0, r.jsxs)("div", {
        className: w.bodyColumnRight,
        children: [(0, r.jsx)(f.Z, {
          selectedSkuId: Z,
          recipients: X,
          className: w.sendTo,
          validateSelectedGift: $
        }), en(), null != e && (0, r.jsx)(d.Z, {
          skuId: Z,
          price: e,
          className: w.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.C3, {
      children: (0, r.jsxs)("div", {
        className: w.stepBody,
        children: [er(), ei()]
      })
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: p.Z.Justify.BETWEEN,
        align: p.Z.Align.CENTER,
        children: (0, r.jsx)(j, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != E || null == x || x.id === (null == K ? true : K.id) || s.length > P.$n,
          loading: C
        })
      })
    })]
  })
}

function G(e) {
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
            children: D.intl.string(D.t["1+Co8G"])
          }), (0, r.jsx)(a.Heading, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: D.intl.string(D.t.nYn52B)
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

function B(e) {
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
    }) : (0, y.uL)("".concat(R.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
  }
  return (0, r.jsx)(a.Avr, {
    text: D.intl.string(D.t.J82mpK),
    onClick: o,
    textVariant: "text-sm/medium"
  })
}