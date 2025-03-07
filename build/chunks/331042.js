/** Chunk was on web.js **/
"use strict";
n.d(t, {
  default: () => es,
  e: () => er
}), n(47120), n(627341);
var r = n(200651),
  i = n(192379),
  o = n(119617),
  a = n(512722),
  s = n.n(a),
  l = n(642128),
  c = n(278074),
  u = n(979554),
  d = n(314794),
  f = n(399606),
  _ = n(481060),
  p = n(37234),
  h = n(607070),
  m = n(100527),
  g = n(906732),
  E = n(1585),
  v = n(333867),
  b = n(286961),
  y = n(300284),
  O = n(876917),
  I = n(642619),
  S = n(824393),
  T = n(594174),
  N = n(597688),
  A = n(1870),
  C = n(429368),
  R = n(884697),
  P = n(587792),
  w = n(228624),
  D = n(318028),
  L = n(635552),
  x = n(905357),
  M = n(328456),
  k = n(624377),
  j = n(530618),
  U = n(141011),
  G = n(372654),
  B = n(616066),
  V = n(216541),
  F = n(22267),
  Z = n(58201),
  H = n(302800),
  W = n(215023),
  Y = n(474936),
  K = n(388032),
  z = n(567863);

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let $ = 880,
  ee = e => {
    let {
      product: t,
      pairedProduct: n
    } = e, [i] = t.items, o = null == n ? void 0 : n.items[0], a = (0, f.e7)([T.default], () => {
      let e = T.default.getCurrentUser();
      return s()(null != e, "User cannot be undefined"), e
    });
    return (0, c.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: z.profileEffectShopPreview,
      children: (0, r.jsx)(O.Z, {
        forCollectedModal: !0,
        profileEffectId: i.id
      })
    })).with(u.Z.AVATAR_DECORATION, () => (s()(i.type === u.Z.AVATAR_DECORATION, "ts-match already checked the type"), null != o && o.type === u.Z.AVATAR_DECORATION) ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: z.avatarDecorationPairOne,
        children: (0, r.jsx)(B.R, {
          item: i,
          user: a,
          avatarSize: _.EFr.SIZE_120,
          isPurchased: !1,
          isHighlighted: !0
        })
      }), (0, r.jsx)("div", {
        className: z.avatarDecorationPairTwo,
        children: (0, r.jsx)(B.R, {
          item: o,
          avatarSize: _.EFr.SIZE_120,
          isPurchased: !1
        })
      })]
    }) : (0, r.jsx)("div", {
      className: z.avatarDecoration,
      children: (0, r.jsx)(B.R, {
        item: i,
        user: a,
        avatarSize: _.EFr.SIZE_120,
        isPurchased: !1,
        isHighlighted: !0
      })
    })).with(u.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      className: z.nameplate,
      children: (0, r.jsx)(F.Z, {
        nameplate: i,
        user: a,
        isHighlighted: !0
      })
    })).with(u.Z.BUNDLE, () => (0, r.jsx)("div", {
      className: z.bundlePreview,
      children: (0, r.jsx)(V.d, {
        product: t,
        user: a,
        isPurchased: !1,
        isHighlighted: !0,
        profileEffectClassName: z.bundleProfileEffectCard
      })
    })).otherwise(() => null)
  },
  et = e => {
    let {
      reducedMotion: t,
      displayOptions: n
    } = e, [o, a] = i.useState(!1), s = (0, _.q_F)({
      from: {
        transform: "translateX(100%)",
        right: "-100%"
      },
      to: {
        transform: "translateX(50%)",
        right: "50%"
      },
      config: {
        duration: 1550
      },
      onRest: () => setTimeout(() => a(!0), 100)
    }), c = (0, _.q_F)({
      from: {
        transform: "translateX(100%)",
        right: "-100%"
      },
      to: {
        transform: "translateX(50%)",
        right: "50%"
      },
      config: {
        duration: 1550
      },
      reverse: o
    }), u = (0, _.q_F)({
      from: {
        transform: "translateX(50%)",
        right: "50%",
        opacity: 1
      },
      to: {
        transform: "translateX(50%)",
        right: "50%",
        opacity: 0
      },
      config: {
        duration: 300
      },
      delay: 600
    }, "animate-always");
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.animated.div, {
        className: z.easterEggContainer,
        style: s,
        children: (0, r.jsx)(ee, Q({}, e))
      }), (0, r.jsx)(l.animated.div, {
        className: z.easterEggContainer,
        style: t ? u : c,
        children: (0, r.jsx)("img", {
          src: n.imageSrc,
          style: n.style,
          alt: "",
          "aria-hidden": "true"
        })
      })]
    })
  },
  en = e => {
    let t = (0, H.v)(e.product.categorySkuId);
    return null != t ? (0, r.jsx)(et, J(Q({}, e), {
      displayOptions: t
    })) : (0, r.jsx)(ee, Q({}, e))
  },
  er = e => {
    var t;
    let {
      product: n,
      onClose: o,
      confettiTarget: a,
      confettiCanvas: s,
      hideConfetti: l = !1,
      analyticsLocations: c,
      overrideTitle: p,
      overrideDescription: E,
      selectedVariantIndex: v,
      shouldShowPromotionalExperience: b,
      itemConsumed: y = !0
    } = e, O = (0, P.o)("CollectiblesCollectedModal"), I = (0, Z.W)(n, v), A = (0, f.e7)([T.default], () => {
      var e, t;
      return null !== (t = null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
    }), C = i.useMemo(() => {
      if (!O) return;
      let e = I.type === u.Z.AVATAR_DECORATION ? (0, H.R9)(I.skuId, A) : null;
      return null != e ? N.Z.getProduct(e) : void 0
    }, [O, I.skuId, I.type, A]), {
      confettiColors: R
    } = (0, k.Z)(I.styles), w = (0, f.e7)([h.Z], () => h.Z.useReducedMotion), L = i.useRef(null), {
      analyticsLocations: x
    } = (0, g.ZP)([...c, m.Z.COLLECTIBLES_COLLECTED_MODAL]), {
      category: M,
      isFetching: B
    } = (0, D.l)(I.skuId), V = null !== (t = null == M ? void 0 : M.successModalBg) && void 0 !== t ? t : I.banner, F = B ? void 0 : V;

    function Y() {
      if (I.skuId === d.a.PREMIUM_TIER_2_3_DAY) {
        let e = K.NW.formatToPlainString(K.t.fYmir6, {
          days: 3
        });
        return y ? (0, r.jsx)(S.j, {
          duration: e,
          onClose: o
        }) : (0, r.jsx)(S.h, {
          duration: e,
          onClose: o
        })
      }
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: z.bannerContainer,
          children: [b ? (0, r.jsx)("div", {
            className: z.promotionalBanner
          }) : (0, r.jsx)(U.Z, {
            asset: F,
            size: (0, G.ML)($),
            className: z.decorationBanner,
            categoryBannerOverride: (0, W.ZS)(I.categorySkuId)
          }), (0, r.jsx)(en, {
            product: I,
            pairedProduct: C,
            reducedMotion: w
          })]
        }), (0, r.jsx)(ei, {
          product: I,
          pairedProduct: C,
          onClose: o,
          analyticsLocations: x,
          overrideTitle: p,
          overrideDescription: E,
          selectedVariantIndex: v,
          shouldShowPromotionalExperience: b
        }), (0, r.jsx)(_.olH, {
          onClick: o,
          className: z.modalCloseButton,
          withCircleBackground: !0
        })]
      })
    }
    return (0, r.jsxs)(g.Gt, {
      value: x,
      children: [(0, r.jsx)("div", {
        className: z.modalInner,
        ref: L,
        children: Y()
      }), !l && !w && (0, r.jsx)(j.Z, {
        confettiTarget: null != a ? a : L.current,
        confettiCanvas: s,
        sprites: (0, G.vK)(I.categorySkuId),
        colors: null == R ? void 0 : R.map(e => e.toHexString())
      })]
    })
  },
  ei = e => {
    var t;
    let {
      product: n,
      pairedProduct: o,
      onClose: a,
      analyticsLocations: s,
      overrideTitle: l,
      overrideDescription: d,
      shouldShowPromotionalExperience: f
    } = e, p = (0, w.ed)("CollectiblesCollectedModal"), h = (0, x.k)(n), m = (0, x.k)(o), g = null != o, E = (0, b.Z)(), v = null == E ? void 0 : null === (t = E.giftPurchaseConfirmation) || void 0 === t ? void 0 : t.rewardCollectedText(), {
      handleUseNow: y,
      isApplying: O
    } = (0, L.W)({
      product: n,
      onSuccess: a,
      onError: a
    }), {
      firstAvatarDecoration: I,
      firstProfileEffect: S
    } = (0, M.R)(n), T = (0, R.x6)(n) ? null != I && null != S : null != I || null != S, N = i.useMemo(() => null != l ? l : g ? K.NW.format(new Date < W.a$ ? K.t.BhGU09 : K.t.Jfv5Qk, {
      purchased_item: h,
      suggested_item: m
    }) : p && !f ? K.NW.string(K.t["1xr2SU"]) : K.NW.format(K.t.YNaxMj, {
      itemName: h
    }), [l, p, f, h, m, g]), A = i.useMemo(() => null != d ? d : g ? K.NW.format(new Date < W.a$ ? K.t["1jBC0t"] : K.t.qSrp39, {
      purchased_item: h,
      suggested_item: m
    }) : (0, c.EQ)(null == n ? void 0 : n.type).with(u.Z.BUNDLE, () => K.NW.string(K.t.zJPoLy)).with(u.Z.PROFILE_EFFECT, () => K.NW.string(K.t.f9M1YG)).otherwise(() => f && null != v ? v : K.NW.string(K.t["44b50t"])), [d, null == n ? void 0 : n.type, v, f, h, m, g]);
    return (0, r.jsxs)("div", {
      className: z.collectedInfoContainer,
      children: [(0, r.jsxs)("div", {
        className: z.collectedTextContainer,
        children: [(0, r.jsx)(_.X6q, {
          variant: "heading-lg/bold",
          children: N
        }), (0, r.jsx)(_.Text, {
          variant: "text-sm/normal",
          children: A
        })]
      }), (0, r.jsxs)("div", {
        className: z.buttons,
        children: [g ? (0, r.jsx)(eo, {
          onClose: a,
          product: o,
          analyticsLocations: s
        }) : (0, r.jsx)(ea, {
          product: n,
          onClose: a,
          hasRequiredProductItems: T,
          analyticsLocations: s
        }), T ? (0, r.jsx)(_.zxk, {
          onClick: y,
          submitting: O,
          children: K.NW.string(K.t.MAS7uL)
        }) : null]
      })]
    })
  },
  eo = e => {
    let {
      onClose: t,
      product: n,
      analyticsLocations: o
    } = e, a = (0, w.hv)("CollectiblesShopGiftButton"), s = i.useCallback(e => {
      e.stopPropagation(), (0, v.Z)({
        skuId: n.skuId,
        isGift: !0,
        giftingOrigin: Y.Wt.SHOP_PAGE,
        analyticsLocations: o,
        variantsReturnStyle: a,
        onClose: e => {
          e && t()
        }
      })
    }, [n.skuId, o, a, t]);
    return (0, r.jsxs)(_.zxk, {
      color: _.Ttl.PRIMARY,
      onClick: s,
      innerClassName: z.buyButton,
      children: [(0, r.jsx)(_.OgN, {
        color: _.TVs.colors.WHITE,
        size: "sm"
      }), K.NW.string(K.t.ouo4FB)]
    })
  },
  ea = e => {
    let {
      product: t,
      onClose: n,
      hasRequiredProductItems: o,
      analyticsLocations: a
    } = e, l = (0, y.Z)({
      analyticsLocations: a
    }), [c] = t.items, d = i.useCallback(() => {
      if (n(), (0, p.xf)(), l(), t.type === u.Z.AVATAR_DECORATION) {
        s()(c.type === u.Z.AVATAR_DECORATION, "product type and item type are the same"), (0, E.ps)({
          initialSelectedDecoration: c,
          analyticsLocations: a
        });
        return
      }
      t.type === u.Z.PROFILE_EFFECT && (0, I.H)({
        initialSelectedEffectId: c.id,
        analyticsLocations: a
      })
    }, [n, l, t.type, c, a]);
    return (0, r.jsx)(_.zxk, {
      color: o ? _.Ttl.PRIMARY : _.Ttl.BRAND,
      onClick: d,
      children: K.NW.string(K.t["2p2aY2"])
    })
  },
  es = e => {
    let {
      transitionState: t,
      product: n,
      onClose: a,
      analyticsLocations: s,
      overrideTitle: l,
      overrideDescription: c,
      shouldShowPromotionalExperience: u,
      itemConsumed: d
    } = e, p = (0, f.e7)([A.Z], () => A.Z.purchases), h = (0, C.o)(n, p), m = (0, Z.W)(n, h), g = i.useRef(new o.qA), [E, v] = i.useState(null), b = (0, H.UY)(m.skuId);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.O_, {
        ref: v,
        className: z.confettiCanvas,
        environment: g.current
      }), (0, r.jsxs)(_.Y0X, {
        hideShadow: !0,
        transitionState: t,
        size: _.CgR.DYNAMIC,
        className: z.modalRoot,
        children: [null != b && (0, r.jsx)("img", {
          src: b.imageSrc,
          className: z.customConfetti,
          style: b.style,
          alt: "",
          "aria-hidden": "true"
        }), (0, r.jsx)(_.hzk, {
          className: z.modalContent,
          scrollbarType: "none",
          children: (0, r.jsx)(er, {
            product: m,
            onClose: a,
            confettiCanvas: E,
            hideConfetti: null != b,
            analyticsLocations: s,
            overrideTitle: l,
            overrideDescription: c,
            selectedVariantIndex: h,
            shouldShowPromotionalExperience: u,
            itemConsumed: d
          })
        })]
      })]
    })
  }