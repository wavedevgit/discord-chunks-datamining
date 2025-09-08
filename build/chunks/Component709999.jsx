/** Chunk was on web.js **/
/** chunk id: 709999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eA,
  d: () => ey
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk873546 = require("./873546.js"),
  Chunk180650 = require("./180650.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk825102 = require("./825102.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk335131 = require("./335131.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk297651 = require("./297651.js"),
  Chunk390698 = require("./390698.jsx"),
  Chunk813083 = require("./813083.jsx"),
  Chunk680942 = require("./680942.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk306092 = require("./306092.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk325834 = require("./325834.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk67409 = require("./67409.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk466679 = require("./466679.js"),
  Chunk201964 = require("./201964.js"),
  Chunk361110 = require("./361110.js"),
  Chunk29121 = require("./29121.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300179 = require("./300179.js");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function e_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ep(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : e_(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eh(e, t) {
  if (null == e) return {};
  var n, r, i = em(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function em(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eg = 250,
  eE = e => {
    let {
      profileEffectId: t,
      isHighlighted: n,
      isPurchased: i
    } = e;
    return (0, r.jsx)("div", {
      className: eu.profileEffectShopPreview,
      children: (0, r.jsx)(v.Z, {
        profileEffectId: t,
        isHovering: n,
        isPurchased: i && !n,
        removeSetHeight: true
      })
    })
  },
  eb = e => {
    let {
      isHighlighted: t,
      isPurchased: n,
      user: i,
      item: a
    } = e;
    return (0, r.jsx)("div", {
      className: eu.avatarContainer,
      children: (0, r.jsx)(K.R, {
        item: a,
        user: i,
        isPurchased: n,
        isHighlighted: t
      })
    })
  },
  ey = e => {
    let {
      showStatus: t,
      width: n,
      opacity: i
    } = e, a = "var(--border-subtle)";
    return (0, r.jsxs)("div", {
      className: o()(eu.nameplatePreviewSampleItem, eu.placeholderItem),
      style: {
        opacity: i
      },
      children: [(0, r.jsx)(h.qEK, {
        src: null,
        size: h.EFr.SIZE_32,
        status: t ? es.Skl.ONLINE : true,
        statusColor: a,
        "aria-hidden": true,
        imageClassName: eu.nameplatePlaceholderAvatar
      }), (0, r.jsx)("div", {
        className: eu.placeholderBar,
        style: {
          maxWidth: null != n ? n : "100px"
        }
      })]
    })
  },
  eO = e => {
    let {
      user: t,
      nameplate: n,
      isHighlighted: i,
      isPurchased: a
    } = e;
    return (0, r.jsx)("div", {
      className: eu.nameplatePreviewRootContainer,
      children: (0, r.jsxs)("div", {
        className: eu.nameplatePreviewList,
        children: [(0, r.jsxs)("div", {
          className: eu.fadeIn,
          children: [(0, r.jsx)(ey, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, r.jsx)(ey, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, r.jsx)(q.Z, {
          user: t,
          nameplate: n,
          className: eu.nameplatePreviewSampleItem,
          isHighlighted: i,
          showPlaceholderUser: !i,
          showStatus: true,
          isPurchased: a
        }), (0, r.jsxs)("div", {
          className: eu.fadeOut,
          children: [(0, r.jsx)(ey, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, r.jsx)(ey, {
            showStatus: true,
            width: 94,
            opacity: .7
          })]
        })]
      })
    })
  },
  ev = e => {
    let {
      tab: t,
      selectedProduct: n,
      cardRef: i,
      children: a
    } = e, {
      handleCardVisibilityChange: o
    } = (0, k.E)(n.skuId, t === eo.AW.CATALOG ? "full" : t);
    return (0, r.jsx)(p.$, {
      innerRef: i,
      onChange: o,
      threshold: 0,
      children: a
    })
  },
  eI = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: n,
      onMount: a,
      shopBlockType: o
    } = e, s = eh(e, ["tab", "product", "onMount", "shopBlockType"]);
    let l = (0, _.e7)([w.Z], () => w.Z.purchases),
      c = (0, D.o)(n, l),
      u = (0, Q.W)(n, c),
      d = i.useRef(null),
      {
        previewingVariantIndex: f,
        handleEntering: p,
        handleLeaving: h
      } = (0, et.f)(n),
      m = (0, ee.o)(n, l, f);
    return i.useEffect(() => {
      null == a || a(d, n)
    }, [a, n]), (0, r.jsx)(ev, {
      tab: t,
      selectedProduct: u,
      cardRef: d,
      children: (0, r.jsx)(eS, ef({
        tab: t,
        product: n,
        selectedVariantIndex: c,
        selectedProduct: u,
        cardRef: d,
        previewingVariantIndex: f,
        handleEntering: p,
        handleLeaving: h,
        firstCollectibleItem: m,
        shopBlockType: o
      }, s))
    })
  });

function eT(e) {
  let {
    product: t,
    tab: n,
    selectedProduct: i,
    selectedVariantIndex: a,
    cardRef: o,
    analyticsLocations: s,
    buildHandlePreviewClick: c,
    isPremiumUser: d,
    isPremiumProduct: p,
    isPurchased: m,
    isPartiallyOwnedBundle: g,
    isDisabled: b,
    discount: v
  } = e, I = (0, P.sp)(), N = (0, x.rN)(t), [D, j] = (0, _.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId]), M = (0, x.XM)(i, d, false), k = (0, x.ne)({
    product: i,
    isPartiallyOwnedBundle: g,
    isPurchased: m
  }), {
    enabled: G
  } = (0, T.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: F,
    isApplying: V
  } = (0, L.W)({
    product: i
  }), Y = c(E.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), W = (0, J.Iw)(t), K = null != W, {
    displayPrices: z,
    checkoutEligiblePrices: q,
    isOrbExclusive: Q,
    shouldCheckoutWithOrbs: $,
    hasSufficientOrbs: ee
  } = (0, er.Ip)({
    product: t,
    isPremiumUser: d,
    tab: n,
    hasDiscountOffer: K
  });
  if (0 === z.length) return null;
  let et = () => (0, r.jsx)("div", {
      className: eu.hoverUpsellContainer,
      children: (0, r.jsx)(O.Z, {
        fullWidth: true,
        className: eu.__invalid_premiumSubscribeButton,
        disabled: j,
        onClick: e => e.stopPropagation(),
        textOptions: {
          textOverride: ec.intl.string(ec.t.sEAnVF)
        },
        subscriptionTier: el.Si.TIER_2
      })
    }),
    en = () => b ? (0, r.jsx)(h.Text, {
      tag: "div",
      variant: "heading-md/semibold",
      color: "header-muted",
      className: eu.priceTag,
      children: ec.intl.string(ec.t.wu4gyc)
    }) : m || g ? (0, r.jsx)(U.U, {
      className: eu.priceTag,
      isPartiallyPurchased: g
    }) : p ? (0, r.jsx)(h.Text, {
      variant: "text-md/semibold",
      className: eu.priceTag,
      children: ec.intl.string(ec.t.rt69oq)
    }) : G ? (0, r.jsx)(H.e, {
      displayPrices: z,
      isPremiumUser: d,
      discount: v,
      hasSufficientOrbs: ee,
      discountOfferAmount: W
    }) : (0, r.jsx)(Z.Z, {
      product: i,
      discount: v,
      isPremiumUser: d,
      className: eu.priceTag,
      hideStrikethroughPrice: true,
      nitroIconType: "default",
      nitroIconSize: "md",
      discountOfferAmount: W
    }),
    ea = () => p || l.tq || Q || !k || n === eo.AW.ORBS ? null : N ? (0, r.jsx)(h.hU, {
      variant: "primary",
      "aria-label": ec.intl.string(ec.t.SKNnqq),
      icon: h.tEF,
      onClick: e => {
        e.stopPropagation(), Y(e)
      }
    }) : (0, r.jsx)(P.k0, {
      newValue: {
        pageCategory: n === eo.AW.HOME || null == I ? true : I.pageCategory
      },
      children: (0, r.jsx)(B.Z, {
        primary: true,
        product: t,
        selectedVariantIndex: a,
        returnRef: o,
        tooltipDelay: eg
      })
    }),
    ed = () => (0, r.jsx)(h.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), Y(e)
      },
      text: ec.intl.string(ec.t.FdGl5O),
      fullWidth: true
    }),
    ef = () => {
      let e = () => {
          C.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == I ? true : I.sessionId,
            sku_id: t.skuId,
            page_type: n,
            page_section: null == I ? true : I.pageSection,
            page_category: n === eo.AW.HOME || null == I ? true : I.pageCategory,
            page_index: n === eo.AW.CATALOG ? null == I ? true : I.pageIndex : true,
            page_size: n === eo.AW.CATALOG ? null == I ? true : I.pageSize : true,
            tile_type: u.Z[t.type],
            tile_position: String(null == I ? true : I.tilePosition),
            cta_name: "buy button"
          }), (0, y.Z)({
            skuId: (0, X.S)({
              product: t,
              selectedVariantIndex: a
            }),
            analyticsLocations: s,
            returnRef: o,
            variantsReturnStyle: f.v.VARIANTS_GROUP
          })
        },
        i = K ? ec.intl.formatToPlainString(ec.t["5U5RBw"], {
          discountOfferAmount: W
        }) : ec.intl.formatToPlainString(ec.t["cNSL/v"], {
          price: M
        });
      return (0, r.jsx)(h.zxk, {
        variant: "primary",
        onClick: t => {
          t.stopPropagation(), e()
        },
        text: i,
        fullWidth: true
      })
    },
    e_ = () => {
      let e = () => {
        C.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == I ? true : I.sessionId,
          sku_id: t.skuId,
          page_type: n,
          page_section: null == I ? true : I.pageSection,
          page_category: n === eo.AW.HOME || null == I ? true : I.pageCategory,
          page_index: n === eo.AW.CATALOG ? null == I ? true : I.pageIndex : true,
          page_size: n === eo.AW.CATALOG ? null == I ? true : I.pageSize : true,
          tile_type: u.Z[t.type],
          tile_position: String(null == I ? true : I.tilePosition),
          cta_name: "claim with orbs button"
        }), (0, A.qA)({
          skuId: (0, X.S)({
            product: t,
            selectedVariantIndex: a
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: r
            } = e;
            (0, R.qg)({
              variantsReturnStyle: f.v.VARIANTS_GROUP
            }), (0, ei.Z)({
              product: t,
              analyticsLocations: s,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: eo.o8.ORB
            })
          },
          analyticsLocations: s
        })
      };
      return (0, r.jsx)(h.zxk, {
        variant: "primary",
        text: ec.intl.format(ec.t.kAgx5O, {
          orbPrice: q[0].amount,
          orbIconHook: () => (0, r.jsx)(S.Z, {
            className: eu.orbIconAligned
          })
        }),
        onClick: t => {
          t.stopPropagation(), e()
        },
        "aria-label": ec.intl.formatToPlainString(ec.t["fNG/09"], {
          orbPrice: q[0].amount
        }),
        fullWidth: true
      })
    },
    ep = () => {
      let e = async () => {
        C.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == I ? true : I.sessionId,
          sku_id: t.skuId,
          page_type: n,
          page_section: null == I ? true : I.pageSection,
          page_category: n === eo.AW.HOME || null == I ? true : I.pageCategory,
          page_index: n === eo.AW.CATALOG ? null == I ? true : I.pageIndex : true,
          page_size: n === eo.AW.CATALOG ? null == I ? true : I.pageSize : true,
          tile_type: u.Z[t.type],
          tile_position: String(null == I ? true : I.tilePosition),
          cta_name: "claim premium product button"
        }), await (0, R.fK)(t.skuId), (0, ei.Z)({
          product: t,
          analyticsLocations: s,
          purchaseType: eo.o8.PREMIUM_PURCHASE
        })
      };
      return (0, r.jsx)(h.zxk, {
        variant: "primary",
        onClick: t => {
          t.stopPropagation(), e()
        },
        disabled: j,
        loading: D,
        loadingStartedLabel: ec.intl.string(ec.t["TYw+9v"]),
        loadingFinishedLabel: ec.intl.string(ec.t.Pg1UPz),
        text: ec.intl.string(ec.t.zp6caG),
        fullWidth: true
      })
    },
    eh = () => (0, r.jsx)(h.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), F()
      },
      loading: V,
      text: ec.intl.string(ec.t.MAS7uL),
      fullWidth: true
    }),
    em = () => (0, r.jsx)(h.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), Y(e)
      },
      text: ec.intl.string(ec.t.GpnHfH),
      fullWidth: true
    }),
    eE = () => {
      if (p && !d && !N) return et();
      if (!k || b) return ed();
      if (m) return eh();
      if (p) return ep();
      if ($)
        if (ee) return e_();
        else return ed();
      return n === eo.AW.ORBS ? em() : ef()
    };
  return (0, r.jsxs)("div", {
    className: eu.detailsWrapper,
    children: [(0, r.jsx)("div", {
      className: eu.innerBlur,
      children: en()
    }), (0, r.jsx)("div", {
      className: eu.innerHover,
      children: (0, r.jsxs)(h.hE2, {
        wrap: false,
        fullWidth: true,
        children: [eE(), ea()]
      })
    })]
  })
}
let eS = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: n,
      category: a,
      tab: l,
      cardRef: f,
      selectedProduct: p,
      firstCollectibleItem: y,
      selectedVariantIndex: O,
      handleEntering: v,
      handleLeaving: T,
      previewingVariantIndex: S,
      className: A,
      shopBlockType: R
    } = e, {
      analyticsLocations: w
    } = (0, b.ZP)([E.Z.COLLECTIBLES_SHOP_CARD]), D = (0, P.sp)(), L = (0, ea.G)("CollectiblesShopTallCard"), k = null != R && R === d.z.HERO && L ? eo.Ch.THUMBNAIL : eo.Ch.DEFAULT, U = (0, m.Z)(f), B = (0, $.m)(f), Z = U || B, H = (0, en.To)(t), K = (0, _.e7)([g.Z], () => g.Z.useReducedMotion), q = N.ZP.canUseCollectibles(n), X = i.useMemo(() => (0, x.BH)(t, q), [t, q]), Q = (0, x.G1)(t), J = (0, _.e7)([I.Z], () => (0, h.wjy)(I.Z.theme)), ee = (0, x.Yq)(t.skuId), et = a.skuId === c.T.ANIME_V3 && (0, x.WW)(t.skuId), {
      isPurchased: ei,
      isPartiallyOwnedBundle: el
    } = (0, M.L)(p), {
      isDisabled: ed
    } = (0, j.G)(p.skuId), e_ = null !== S ? S : O, [eh, em] = i.useState(false), eg = Z, ey = i.useCallback(function(e, t, i) {
      let a = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)(eE, {
        isHighlighted: t,
        profileEffectId: e.id,
        isPurchased: i && !a
      })).with(u.Z.AVATAR_DECORATION, () => (0, r.jsx)(eb, {
        item: e,
        user: n,
        isHighlighted: t,
        isPurchased: i
      })).with(u.Z.NAMEPLATE, () => (0, r.jsx)(eO, {
        user: n,
        nameplate: e,
        isHighlighted: t,
        isPurchased: i
      })).otherwise(() => null)
    }, [n]), ev = i.useRef(null), {
      displayPrices: eI,
      isOrbExclusive: eS
    } = (0, er.oo)({
      product: t,
      isPremiumUser: q,
      tab: l
    }), eA = i.useCallback(e => n => {
      let r = (0, er.oQ)({
        product: t
      });
      ev.current = n.currentTarget, C.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == D ? true : D.sessionId,
        sku_id: t.skuId,
        page_type: l,
        page_section: null == D ? true : D.pageSection,
        page_category: l === eo.AW.HOME ? true : a.name,
        page_index: l === eo.AW.CATALOG ? null == D ? true : D.pageIndex : true,
        page_size: l === eo.AW.CATALOG ? null == D ? true : D.pageSize : true,
        tile_type: u.Z[t.type],
        tile_position: String(null == D ? true : D.tilePosition),
        cta_name: null
      }), (0, F.T)({
        product: t,
        category: a,
        shouldCheckoutWithOrbs: r,
        analyticsLocations: w,
        analyticsSource: e,
        returnRef: ev,
        tab: l,
        variantType: k
      })
    }, [t, a, l, w, D, k]), eC = eA(E.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === eI.length) return null;
    let eN = () => {
        let e = ei ? h.sV5 : ed ? h.mBM : null;
        return null == e ? null : (0, r.jsx)("div", {
          className: eu.cardStateIconWrapper,
          children: (0, r.jsx)(e, {
            size: "custom",
            color: "currentColor",
            width: 38,
            height: 38,
            className: o()(eu.cardStateIcon, {
              [eu.checkmark]: ei
            })
          })
        })
      },
      eR = e => (0, r.jsxs)("div", {
        className: o()(eu.cardText, J ? eu.darkCardBackground : eu.lightCardBackground, {
          [eu.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
          [eu.thumbnailVariant]: t.type === u.Z.VARIANTS_GROUP && e === eo.Ch.THUMBNAIL
        }),
        children: [(0, r.jsx)(h.X6q, {
          variant: "text-lg/bold",
          className: eu.productName,
          children: H
        }), t.type === u.Z.VARIANTS_GROUP ? e === eo.Ch.DEFAULT ? (0, r.jsx)(Y.P, {
          variantGroupProduct: t,
          previewingVariantIndexProps: {
            previewingVariantIndex: S,
            handleEntering: v,
            handleLeaving: T
          },
          selectedVariantIndex: O,
          setIsHoveringOnSwitch: em,
          minimal: !Z,
          alternativeBackgroundColor: (null == y ? true : y.type) === u.Z.PROFILE_EFFECT
        }) : (0, r.jsx)(W.r, {
          variantGroupProduct: t,
          previewingVariantIndexProps: {
            previewingVariantIndex: S,
            handleEntering: v,
            handleLeaving: T
          },
          selectedVariantIndex: O,
          setIsHoveringOnSwitch: em
        }) : null, (0, r.jsx)(eT, {
          product: t,
          tab: l,
          buildHandlePreviewClick: eA,
          selectedProduct: p,
          selectedVariantIndex: O,
          cardRef: f,
          analyticsLocations: w,
          isPremiumUser: q,
          isPremiumProduct: Q,
          isPartiallyOwnedBundle: el,
          isPurchased: ei,
          isDisabled: ed,
          discount: X
        })]
      });
    return (0, x.x6)(t) && null != X && X.discountPercentage < 0 ? null : (0, r.jsx)(h.tEY, {
      children: (0, r.jsxs)(h.kL8, {
        className: o()(A, J ? eu.shopCardDark : eu.shopCard, {
          [eu.partiallyOwned]: el && !Z,
          [eu.shopCardAnimation]: !K,
          [J ? eu.shopCardDarkHighlighted : eu.shopCardHighlighted]: Z
        }),
        ref: f,
        onClick: eC,
        "aria-label": t.name,
        children: [Q && (0, r.jsx)(h.ua7, {
          tooltipContentClassName: eu.premiumWheelTooltipContent,
          color: h.ua7.Colors.PRIMARY,
          text: ec.intl.string(ec.t.nKdAlJ),
          children: e => (0, r.jsx)(h.IGR, ep(ef({}, e), {
            className: eu.premiumWheelBadge,
            text: (0, r.jsx)(h.SrA, {
              size: "md",
              color: "currentColor",
              className: eu.premiumWheel
            })
          }))
        }), (0, r.jsx)(G.Z, {
          category: a,
          className: eu.limitedTimeBadge,
          display: G.k.CARD,
          shopBlockType: R
        }), el || ei || !ee ? eS ? (0, r.jsx)(h.IGR, {
          text: ec.intl.string(ec.t["0TmQRE"]),
          disableColor: true,
          className: eu.badge
        }) : et ? (0, r.jsx)(h.IGR, {
          text: ec.intl.string(ec.t.S6kE9v),
          disableColor: true,
          className: eu.badge
        }) : null : (0, r.jsx)(h.IGR, {
          text: ec.intl.string(ec.t.y2b7CA),
          disableColor: true,
          className: eu.badge
        }), (0, r.jsx)("div", {
          className: eu.preview,
          children: (0, s.EQ)(t.type).with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => ey(y, eg, ei)).with(u.Z.BUNDLE, () => (0, r.jsx)(z.d, {
            product: t,
            user: n,
            isPurchased: ei,
            isHighlighted: Z
          })).with(u.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[e_];
            if (null == e) return null;
            let [n] = e.items;
            return ey(n, eg, ei, eh)
          }).with(u.Z.EXTERNAL_SKU, () => (0, r.jsx)(V.b, {
            product: t,
            animationState: eg ? "on" : "off",
            className: ed || ei && !eg ? eu.externalProductDimmed : true
          })).otherwise(() => null)
        }), eN(), eR(k)]
      })
    })
  }),
  eA = eI