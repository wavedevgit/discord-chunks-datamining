/** Chunk was on web.js **/
/** chunk id: 503516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  eI: () => U,
  gA: () => M
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk993408 = require("./993408.js"),
  Chunk482246 = require("./482246.jsx"),
  Chunk734925 = require("./734925.jsx"),
  Chunk687033 = require("./687033.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk547065 = require("./547065.js"),
  Chunk871181 = require("./871181.jsx"),
  Chunk318007 = require("./318007.jsx"),
  Chunk683433 = require("./683433.jsx"),
  Chunk285719 = require("./285719.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk79387 = require("./79387.js"),
  Chunk954571 = require("./954571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk931854 = require("./931854.js"),
  Chunk120459 = require("./120459.js");

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
  key: Chunk166532.pn.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(G, j({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => P.intl.string(P.t["W685+b"])
  }
};

function k(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = false,
    disabled: s = false,
    loading: o = false
  } = e, {
    hasPaymentSources: l
  } = (0, T.P5)(), c = l ? C.pn.REVIEW : C.pn.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Button, {
      onClick: () => t(c),
      disabled: s,
      loading: o,
      text: P.intl.string(P.t.XiOHRX)
    }), i ? (0, r.jsx)(E.A, {
      onClick: n
    }) : null]
  })
}
let U = e => {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: o = "",
    setCustomGiftMessage: l,
    giftRecipientError: _,
    setGiftRecipientError: E,
    validatingGiftRecipient: b,
    giftRecipient: C,
    recommendedGiftSkuIds: N,
    giftingOrigin: L,
    setValidatingGiftRecipient: j
  } = (0, S.Pv)(), {
    selectedSkuId: M,
    setSelectedSkuId: k,
    selectedSkuPricePreview: U,
    paymentSourceId: G,
    skuPricePreviewsById: B,
    skusById: H
  } = (0, T.P5)(), Y = (0, i.bG)([O.default], () => O.default.getCurrentUser()), {
    enabled: W,
    giftRecommendationAlgorithm: K
  } = h.P.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: false
  }), z = (0, p.A)(), q = W && L === w.vQ.DM_CHANNEL, X = K === h.J.POPULAR ? P.intl.string(P.t.Kwgrrr) : P.intl.string(P.t.r1huYR), Z = async (e, t) => {
    j(true), null != _ && E(), await (0, c.JJ)(e.id, t) || E(P.intl.string(P.t["4kgVqQ"])), j(false)
  };
  (0, s.Ay)(() => {
    null != M && null != C && (L !== w.vQ.DM_CHANNEL_WISHLIST && A.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: M
    }), Z(C, M))
  });
  let Q = e => {
      L !== w.vQ.DM_CHANNEL_WISHLIST && A.default.track(R.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != C && Z(C, e), k(e)
    },
    $ = e => {
      let t = B[e],
        n = null;
      if (null != t) {
        var i;
        n = null != G && null != (i = t[G]) ? i : t[v.B]
      }
      if (null == n) return;
      let a = (0, I.$g)(n.amount, n.currency);
      return (0, r.jsx)(d.A, {
        skuId: e,
        price: a,
        isSelected: e === M,
        onSelect: e => Q(e),
        className: D.Cb
      }, e)
    },
    J = () => (0, r.jsx)(m.A, {
      onTextChange: e => null == l ? true : l(e),
      pendingText: o,
      currentText: o,
      disableThemedBackground: true,
      className: D.iX,
      innerClassName: D.pt
    });
  return {
    renderLeftColumn: () => q ? (0, r.jsxs)("div", {
      className: D.mT,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-default",
        className: D.B7,
        children: X.toLocaleUpperCase()
      }), N.map(e => $(e)), (0, r.jsx)(V, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: D.qL,
      children: (0, r.jsx)(g.t, {
        isShopGift: true
      })
    }),
    renderRightColumn: () => {
      if (q) return (0, r.jsxs)("div", {
        className: D.Tc,
        children: [(0, r.jsx)(y.Z, {
          giftRecipient: C
        }), (0, r.jsx)(g.t, {
          isShopGift: true,
          className: x.mx,
          optionsContainerClassName: x.OZ
        }), J()]
      });
      let e = (0, u.Ee)({
        selectedSkuPricePreview: U,
        paymentSourceId: G,
        selectedSkuId: M,
        skuPricePreviewsById: B,
        skusById: H,
        formatPrice: I.$g
      });
      return L === w.vQ.USER_PROFILE_WISHLIST || L === w.vQ.DM_CHANNEL_WISHLIST ? (0, r.jsxs)("div", {
        className: D.Tc,
        children: [(0, r.jsx)(y.Z, {
          giftRecipient: C
        }), J(), null != e && null != M && (0, r.jsx)(d.A, {
          skuId: M,
          price: e,
          className: D.uW,
          previewHeaderClassName: D.vX,
          isSelected: true,
          shouldDisplayHeader: true,
          hideProfilePreview: true
        }), (0, r.jsx)("div", {
          className: D.fi,
          children: (0, r.jsx)(F, {
            handleClose: n,
            selectedSkuId: M
          })
        })]
      }) : (0, r.jsxs)("div", {
        className: D.Tc,
        children: [(0, r.jsx)(f.A, {
          selectedSkuId: M,
          recipients: z,
          className: D.uh,
          validateSelectedGift: Z
        }), J(), null != e && (0, r.jsx)(d.A, {
          skuId: M,
          price: e,
          className: D.Ng,
          isSelected: true,
          shouldDisplayHeader: true
        })]
      })
    },
    onStepChange: t,
    onBackClick: n,
    ctaDisabled: null != _ || null == C || C.id === (null == Y ? true : Y.id) || o.length > w.Jo,
    loading: b
  }
};

function G(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    renderLeftColumn: i,
    renderRightColumn: s,
    onStepChange: o,
    onBackClick: l,
    ctaDisabled: c,
    loading: u
  } = U({
    handleStepChange: t,
    handleClose: n
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N.dZ, {
      children: (0, r.jsxs)("div", {
        className: D.Du,
        children: [i(), s()]
      })
    }), (0, r.jsx)(N.UX, {
      children: (0, r.jsx)(a.jlY, {
        "data-migration-pending": true,
        justify: _.A.Justify.BETWEEN,
        align: _.A.Align.CENTER,
        children: (0, r.jsx)(k, {
          onStepChange: o,
          onBackClick: l,
          disabled: c,
          loading: u
        })
      })
    })]
  })
}

function V(e) {
  let {
    handleClose: t
  } = e, {
    analyticsLocations: n
  } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function i() {
    t(), (0, a.s7G)(), (0, c.Cz)({
      analyticsLocations: n,
      analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    })
  }
  return (0, r.jsx)(a.DUT, {
    onClick: i,
    children: (0, r.jsxs)("div", {
      className: D.D8,
      children: [(0, r.jsxs)("div", {
        className: D.V1,
        children: [(0, r.jsx)("div", {
          className: D.sV,
          children: (0, r.jsx)(a.U1X, {
            size: "custom",
            width: 18,
            height: 18,
            color: "var(--text-strong)"
          })
        }), (0, r.jsxs)("div", {
          className: D.Lc,
          children: [(0, r.jsx)(a.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            children: P.intl.string(P.t["1+Co8G"])
          }), (0, r.jsx)(a.Heading, {
            color: "text-default",
            variant: "heading-sm/medium",
            children: P.intl.string(P.t.nYn52B)
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(a.KS6, {
          size: "custom",
          width: 20,
          height: 20,
          color: "var(--text-strong)"
        })
      })]
    })
  })
}

function F(e) {
  let {
    handleClose: t,
    selectedSkuId: n
  } = e, {
    analyticsLocations: i
  } = (0, l.Ay)(o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

  function s() {
    t(), (0, a.s7G)(), null == n ? (0, c.Cz)({
      analyticsLocations: i,
      analyticsSource: o.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
    }) : (0, b.pX)("".concat(R.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
  }
  return (0, r.jsx)(a.QWc, {
    text: P.intl.string(P.t.J82mpK),
    onClick: s,
    textVariant: "text-sm/medium"
  })
}