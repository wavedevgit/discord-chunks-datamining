/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Dd: () => x
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(493773),
  s = n(100527),
  l = n(906732),
  c = n(335131),
  u = n(628952),
  d = n(225657),
  f = n(600164),
  p = n(109213),
  _ = n(927699),
  h = n(987716),
  m = n(311821),
  g = n(251660),
  E = n(594174),
  v = n(855775),
  b = n(626135),
  y = n(937615),
  O = n(987209),
  S = n(563132),
  I = n(409813),
  T = n(614277),
  N = n(981631),
  A = n(474936),
  C = n(388032),
  R = n(654412),
  P = n(572408);

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let x = {
  key: I.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, r.jsx)(M, D({}, e)),
  options: {
    isLargeModal: !0,
    useBreadcrumbLabel: () => C.NW.string(C.t["W685+f"])
  }
};

function L(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: i = !1,
    disabled: a = !1,
    loading: s = !1
  } = e, {
    hasPaymentSources: l
  } = (0, S.JL)(), c = l ? I.h8.REVIEW : I.h8.ADD_PAYMENT_STEPS;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.zxk, {
      onClick: () => t(c),
      disabled: a,
      submitting: s,
      children: C.NW.string(C.t.XiOHRU)
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
    setGiftRecipientError: I,
    validatingGiftRecipient: w,
    giftRecipient: D,
    recommendedGiftSkuIds: x,
    giftingOrigin: M,
    setValidatingGiftRecipient: j
  } = (0, O.wD)(), {
    selectedSkuId: U,
    setSelectedSkuId: G,
    selectedSkuPricePreview: B,
    paymentSourceId: Z,
    skuPricePreviewsById: F
  } = (0, S.JL)(), V = (0, i.e7)([E.default], () => E.default.getCurrentUser()), {
    enabled: H,
    giftRecommendationAlgorithm: W
  } = p.G.useExperiment({
    location: "CollectiblesPaymentModalGiftCustomizationStep"
  }, {
    autoTrackExposure: !1
  }), Y = H && M === A.Wt.DM_CHANNEL, K = W === p.u.POPULAR ? C.NW.string(C.t.Kwgrrq) : C.NW.string(C.t.r1huYW), z = async (e, t) => {
    j(!0), null != m && I(), await (0, c.B1)(e.id, t) || I(C.NW.string(C.t["4kgVqa"])), j(!1)
  };
  (0, a.ZP)(() => {
    null != U && null != D && (b.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
      sku_id: U
    }), z(D, U))
  });
  let q = e => {
      b.default.track(N.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
        sku_id: e
      }), null != D && z(D, e), G(e)
    },
    Q = e => {
      let t = F[e],
        n = null;
      if (null != t) {
        var i;
        n = null != Z && null !== (i = t[Z]) && void 0 !== i ? i : t[v.c]
      }
      if (null == n) return;
      let o = (0, y.T4)(n.amount, n.currency);
      return (0, r.jsx)(u.Z, {
        skuId: e,
        price: o,
        isSelected: e === U,
        onSelect: e => q(e),
        className: R.recommendedGiftPreview
      }, e)
    },
    X = () => (0, r.jsx)(_.Z, {
      sectionTitle: C.NW.string(C.t.B3miEx),
      onTextChange: e => null == l ? void 0 : l(e),
      pendingText: s,
      currentText: s,
      disableThemedBackground: !0,
      className: R.customGiftMessageWrapper,
      innerClassName: R.customGiftMessage
    }),
    J = () => Y ? (0, r.jsxs)("div", {
      className: R.bodyColumnLeft,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: R.selectGiftTitle,
        children: K.toLocaleUpperCase()
      }), x.map(e => Q(e)), (0, r.jsx)(k, {
        handleClose: n
      })]
    }) : (0, r.jsx)("div", {
      className: R.bodyColumnMiddle,
      children: (0, r.jsx)(h.q, {
        isShopGift: !0
      })
    }),
    $ = () => {
      if (Y) return (0, r.jsxs)("div", {
        className: R.bodyColumnRight,
        children: [(0, r.jsx)(g.s, {
          giftRecipient: D
        }), (0, r.jsx)(h.q, {
          isShopGift: !0,
          className: P.adjustedGiftMainAnimation,
          optionsContainerClassName: P.adjustedGiftBoxOptionContainer
        }), X()]
      });
      let e = null != B ? (0, y.T4)(B.amount, B.currency) : void 0;
      return (0, r.jsxs)("div", {
        className: R.bodyColumnRight,
        children: [(0, r.jsx)(d.Z, {
          selectedSkuId: U,
          className: R.sendTo,
          validateSelectedGift: z
        }), X(), null != e && (0, r.jsx)(u.Z, {
          skuId: U,
          price: e,
          className: R.giftPreview,
          isSelected: !0,
          shouldDisplayHeader: !0
        })]
      })
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.C3, {
      children: (0, r.jsxs)("div", {
        className: R.stepBody,
        children: [J(), $()]
      })
    }), (0, r.jsx)(T.O3, {
      children: (0, r.jsx)(o.mzw, {
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        children: (0, r.jsx)(L, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != m || null == D || D.id === (null == V ? void 0 : V.id) || s.length > A.$n,
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
      openInLayer: !1,
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
            children: C.NW.string(C.t["1+Co8P"])
          }), (0, r.jsx)(o.X6q, {
            color: "header-secondary",
            variant: "heading-sm/medium",
            children: C.NW.string(C.t.nYn52N)
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