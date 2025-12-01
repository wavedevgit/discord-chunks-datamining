/** Chunk was on web.js **/
/** chunk id: 117652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => M
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

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}
let M = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(U, j({}, e)),
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
  } = (0, A.JL)(), c = l ? C.h8.REVIEW : C.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      onClick: () => t(c),
      disabled: o,
      loading: s,
      text: w.intl.string(w.t.XiOHRX)
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
    giftRecipient: L,
    recommendedGiftSkuIds: j,
    giftingOrigin: M,
    setValidatingGiftRecipient: U
  } = (0, T.wD)(), {
    selectedSkuId: B,
    setSelectedSkuId: F,
    selectedSkuPricePreview: V,
    paymentSourceId: H,
    skuPricePreviewsById: Y,
    skusById: W
  } = (0, A.JL)(), K = (0, i.e7)([O.default], () => O.default.getCurrentUser()), {
    enabled: z,
    giftRecommendationAlgorithm: q
  } = m.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), Q = (0, p.Z)({}), X = z && M === R.Wt.DM_CHANNEL, J = q === m.u.POPULAR ? w.intl.string(w.t.Kwgrrr) : w.intl.string(w.t.r1huYR), $ = async (e, t) => {
    U(true), null != E && y(), await (0, c.B1)(e.id, t) || y(w.intl.string(w.t["4kgVqQ"])), U(false)
  };
  (0, o.ZP)(() => {
    null != B && null != L && (M !== R.Wt.DM_CHANNEL_WISHLIST && S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: B
    }), $(L, B))
  });
  let ee = e => {
      M !== R.Wt.DM_CHANNEL_WISHLIST && S.default.track(P.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != L && $(L, e), F(e)
    },
    et = e => {
      let t = Y[e],
        n = null;
      if (null != t) {
        var i;
        n = null != H && null != (i = t[H]) ? i : t[v.c]
      }
      if (null == n) return;
      let a = (0, I.T4)(n.amount, n.currency);
      return (0, r.jsx)(d.Z, {
        skuId: e,
        price: a,
        isSelected: e === B,
        onSelect: e => ee(e),
        className: D.recommendedGiftPreview
      }, e)
    },
    en = () => (0, r.jsx)(h.Z, {
      sectionTitle: w.intl.string(w.t.B3miE8),
      onTextChange: e => null == l ? true : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: true,
      className: D.customGiftMessageWrapper,
      innerClassName: D.customGiftMessage
    }),
    er = () => X ? (0, r.jsxs)("div", {
      className: D.bodyColumnLeft,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.selectGiftTitle,
        children: J.toLocaleUpperCase()
      }), j.map(e => et(e)), (0, r.jsx)(G, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: D.bodyColumnMiddle,
      children: (0, r.jsx)(g.q, {
        isShopGift: true
      })
    }),
    ei = () => {
      if (X) return (0, r.jsxs)("div", {
        className: D.bodyColumnRight,
        children: [(0, r.jsx)(b.s, {
          giftRecipient: L
        }), (0, r.jsx)(g.q, {
          isShopGift: true,
          className: x.adjustedGiftMainAnimation,
          optionsContainerClassName: x.adjustedGiftBoxOptionContainer
        }), en()]
      });
      let e = (0, u.v5)({
        selectedSkuPricePreview: V,
        paymentSourceId: H,
        selectedSkuId: B,
        skuPricePreviewsById: Y,
        skusById: W,
        formatPrice: I.T4
      });
      return M === R.Wt.USER_PROFILE_WISHLIST || M === R.Wt.DM_CHANNEL_WISHLIST ? (0, r.jsxs)("div", {
        className: D.bodyColumnRight,
        children: [(0, r.jsx)(b.s, {
          giftRecipient: L
        }), en(), null != e && null != B && (0, r.jsx)(d.Z, {
          skuId: B,
          price: e,
          className: D.wishlistGiftPreview,
          previewHeaderClassName: D.wishlistGiftPreviewHeader,
          isSelected: true,
          shouldDisplayHeader: true,
          hideProfilePreview: true
        }), (0, r.jsx)("div", {
          className: D.wishlistGiftPreviewFooter,
          children: (0, r.jsx)(Z, {
            handleClose: n,
            selectedSkuId: B
          })
        })]
      }) : (0, r.jsxs)("div", {
        className: D.bodyColumnRight,
        children: [(0, r.jsx)(f.Z, {
          selectedSkuId: B,
          recipients: Q,
          className: D.sendTo,
          validateSelectedGift: $
        }), en(), null != e && (0, r.jsx)(d.Z, {
          skuId: B,
          price: e,
          className: D.giftPreview,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.C3, {
      children: (0, r.jsxs)("div", {
        className: D.stepBody,
        children: [er(), ei()]
      })
    }), (0, r.jsx)(N.O3, {
      children: (0, r.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: _.Z.Justify.BETWEEN,
        align: _.Z.Align.CENTER,
        children: (0, r.jsx)(k, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != E || null == L || L.id === (null == K ? true : K.id) || s.length > R.$n,
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
      className: D.navigateToShopButton,
      children: [(0, r.jsxs)("div", {
        className: D.navigateToShopBody,
        children: [(0, r.jsx)("div", {
          className: D.shopIcon,
          children: (0, r.jsx)(a.EOn, {
            size: "custom",
            width: 18,
            height: 18,
            color: "var(--header-primary)"
          })
        }), (0, r.jsxs)("div", {
          className: D.navigateToShopTextWrapper,
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: w.intl.string(w.t["1+Co8G"])
          }), (0, r.jsx)(a.Heading, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: w.intl.string(w.t.nYn52B)
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

function Z(e) {
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
    }) : (0, y.uL)("".concat(P.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
  }
  return (0, r.jsx)(a.Avr, {
    text: w.intl.string(w.t.J82mpK),
    onClick: o,
    textVariant: "text-sm/medium"
  })
}