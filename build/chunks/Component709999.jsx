/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => eC,
  d: () => ep
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk873546 = require("./873546.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk567400 = require("./567400.js"),
  Chunk210887 = require("./210887.js"),
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
  Chunk409116 = require("./409116.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk325834 = require("./325834.jsx"),
  Chunk143941 = require("./143941.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk67409 = require("./67409.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
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

function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = i[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let eu = e => {
    let {
      skuId: t,
      isHighlighted: i,
      isPurchased: n
    } = e;
    return (0, l.jsx)("div", {
      className: eo.profileEffectShopPreview,
      children: (0, l.jsx)(y.Z, {
        skuId: t,
        isHighlighted: i,
        isPurchased: n && !i,
        removeSetHeight: true
      })
    })
  },
  ec = e => {
    let {
      isHighlighted: t,
      isPurchased: i,
      user: n,
      item: r
    } = e;
    return (0, l.jsx)("div", {
      className: eo.avatarContainer,
      children: (0, l.jsx)(z.R, {
        item: r,
        user: n,
        isPurchased: i,
        isHighlighted: t
      })
    })
  },
  ep = e => {
    let {
      showStatus: t,
      width: i,
      opacity: n
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(eo.nameplatePreviewSampleItem, eo.placeholderItem),
      style: {
        opacity: n
      },
      children: [(0, l.jsx)(h.qEK, {
        src: null,
        size: h.EFr.SIZE_32,
        status: t ? er.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: eo.nameplatePlaceholderAvatar
      }), (0, l.jsx)("div", {
        className: eo.placeholderBar,
        style: {
          maxWidth: null != i ? i : "100px"
        }
      })]
    })
  },
  eg = e => {
    let {
      user: t,
      nameplate: i,
      isHighlighted: n,
      isPurchased: r
    } = e;
    return (0, l.jsx)("div", {
      className: eo.nameplatePreviewRootContainer,
      children: (0, l.jsxs)("div", {
        className: eo.nameplatePreviewList,
        children: [(0, l.jsxs)("div", {
          className: eo.fadeIn,
          children: [(0, l.jsx)(ep, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, l.jsx)(ep, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, l.jsx)(q.Z, {
          user: t,
          nameplate: i,
          className: eo.nameplatePreviewSampleItem,
          isHighlighted: n,
          showPlaceholderUser: !n,
          showStatus: true,
          isPurchased: r
        }), (0, l.jsxs)("div", {
          className: eo.fadeOut,
          children: [(0, l.jsx)(ep, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, l.jsx)(ep, {
            showStatus: true,
            width: 94,
            opacity: .7
          })]
        })]
      })
    })
  },
  eh = e => {
    let {
      tab: t,
      selectedProduct: i,
      cardRef: n,
      children: r
    } = e, {
      handleCardVisibilityChange: a
    } = (0, Z.E)(i.skuId, t === en.AW.CATALOG ? "full" : t);
    return (0, l.jsx)(g.$, {
      innerRef: n,
      onChange: a,
      threshold: 0,
      children: r
    })
  },
  em = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: i,
      onMount: r,
      shopBlockType: a
    } = e, s = function(e, t) {
      if (null == e) return {};
      var i, l, n = function(e, t) {
        if (null == e) return {};
        var i, l, n = {},
          r = Object.keys(e);
        for (l = 0; l < r.length; l++) i = r[l], t.indexOf(i) >= 0 || (n[i] = e[i]);
        return n
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++) i = r[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i])
      }
      return n
    }(e, ["tab", "product", "onMount", "shopBlockType"]);
    let o = (0, p.e7)([T.Z], () => T.Z.purchases),
      d = (0, L.o)(i, o),
      u = (0, Q.W)(i, d),
      c = n.useRef(null),
      {
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m
      } = (0, $.f)(i),
      v = (0, J.o)(i, o, g);
    return n.useEffect(() => {
      null == r || r(c, i)
    }, [r, i]), (0, l.jsx)(eh, {
      tab: t,
      selectedProduct: u,
      cardRef: c,
      children: (0, l.jsx)(ex, ed({
        tab: t,
        product: i,
        selectedVariantIndex: d,
        selectedProduct: u,
        cardRef: c,
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m,
        firstCollectibleItem: v,
        shopBlockType: a
      }, s))
    })
  });

function ev(e) {
  let {
    product: t,
    tab: i,
    selectedProduct: n,
    selectedVariantIndex: r,
    cardRef: a,
    analyticsLocations: s,
    buildHandlePreviewClick: u,
    isPremiumUser: g,
    isPremiumProduct: m,
    isPurchased: x,
    isPartiallyOwnedBundle: C,
    isDisabled: y,
    discount: P
  } = e, I = (0, j.sp)(), S = (0, k.rN)(t), [L, w] = (0, p.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]), R = (0, k.XM)(n, g, false), Z = (0, k.ne)({
    product: n,
    isPartiallyOwnedBundle: C,
    isPurchased: x
  }), {
    handleUseNow: H,
    isApplying: G
  } = (0, N.W)({
    product: n
  }), U = u(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), D = (0, X.Iw)(t), V = null != D, {
    displayPrices: F,
    checkoutEligiblePrices: z,
    isOrbExclusive: K,
    shouldCheckoutWithOrbs: q,
    hasSufficientOrbs: Q
  } = (0, et.Ip)({
    product: t,
    isPremiumUser: g,
    tab: i,
    hasDiscountOffer: V
  });
  if (0 === F.length) return null;
  let J = () => (0, l.jsx)(h.Button, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), U(e)
    },
    text: es.intl.string(es.t.FdGl5O),
    fullWidth: true
  });
  return (0, l.jsxs)("div", {
    className: eo.detailsWrapper,
    children: [(0, l.jsx)("div", {
      className: eo.innerBlur,
      children: y ? (0, l.jsx)(h.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: eo.priceTag,
        children: es.intl.string(es.t.wu4gyc)
      }) : x || C ? (0, l.jsx)(B.U, {
        className: eo.priceTag,
        isPartiallyPurchased: C
      }) : m ? (0, l.jsx)(h.Text, {
        variant: "text-md/semibold",
        className: eo.priceTag,
        children: es.intl.string(es.t.rt69oq)
      }) : (0, l.jsx)("div", {
        className: eo.priceLine,
        children: F.map((e, t) => (0, l.jsx)(M.F, {
          price: e,
          discount: P,
          discountOfferAmount: D,
          nitroIconType: g ? "default" : true,
          nitroIconSize: "md",
          className: e.currency !== er.pKx.DISCORD_ORB || Q ? true : eo.insufficientOrbs
        }, t))
      })
    }), (0, l.jsx)("div", {
      className: eo.innerHover,
      children: (0, l.jsxs)(h.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (m && !g && !S) return (0, l.jsx)("div", {
            className: eo.hoverUpsellContainer,
            children: (0, l.jsx)(f.Z, {
              fullWidth: true,
              className: eo.__invalid_premiumSubscribeButton,
              disabled: w,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: es.intl.string(es.t.sEAnVF)
              },
              subscriptionTier: ea.Si.TIER_2
            })
          });
          if (!Z || y) return J();
          if (x) return (0, l.jsx)(h.Button, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), H()
            },
            loading: G,
            text: es.intl.string(es.t.MAS7uL),
            fullWidth: true
          });
          {
            if (m) {
              let e = async () => {
                E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == I ? true : I.pageSection,
                  page_category: i === en.AW.HOME || null == I ? true : I.pageCategory,
                  page_index: i === en.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                  page_size: i === en.AW.CATALOG ? null == I ? true : I.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == I ? true : I.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, A.fK)(t.skuId), (0, ei.Z)({
                  product: t,
                  analyticsLocations: s,
                  purchaseType: en.o8.PREMIUM_PURCHASE
                })
              };
              return (0, l.jsx)(h.Button, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: w,
                loading: L,
                loadingStartedLabel: es.intl.string(es.t["TYw+9v"]),
                loadingFinishedLabel: es.intl.string(es.t.Pg1UPz),
                text: es.intl.string(es.t.zp6caG),
                fullWidth: true
              })
            }
            if (q)
              if (Q) return (0, l.jsx)(h.Button, {
                variant: "primary",
                text: es.intl.format(es.t.kAgx5O, {
                  orbPrice: z[0].amount,
                  orbIconHook: () => (0, l.jsx)(O.Z, {
                    className: eo.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? true : I.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == I ? true : I.pageSection,
                    page_category: i === en.AW.HOME || null == I ? true : I.pageCategory,
                    page_index: i === en.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                    page_size: i === en.AW.CATALOG ? null == I ? true : I.pageSize : true,
                    tile_type: d.Z[t.type],
                    tile_position: String(null == I ? true : I.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, b.qA)({
                    skuId: (0, Y.S)({
                      product: t,
                      selectedVariantIndex: r
                    }),
                    onCheckoutSuccess: e => {
                      var i;
                      let {
                        entitlements: l
                      } = e;
                      (0, A.qg)({
                        variantsReturnStyle: c.v.VARIANTS_GROUP
                      }), (0, ei.Z)({
                        product: t,
                        analyticsLocations: s,
                        itemConsumed: null == (i = l[0]) ? true : i.consumed,
                        purchaseType: en.o8.ORB
                      })
                    },
                    analyticsLocations: s
                  })
                },
                "aria-label": es.intl.formatToPlainString(es.t["fNG/09"], {
                  orbPrice: z[0].amount
                }),
                fullWidth: true
              });
              else return J();
            if (i === en.AW.ORBS) return (0, l.jsx)(h.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), U(e)
              },
              text: es.intl.string(es.t.GpnHfH),
              fullWidth: true
            });
            let e = V ? es.intl.formatToPlainString(es.t["5U5RBw"], {
              discountOfferAmount: D
            }) : es.intl.formatToPlainString(es.t["cNSL/v"], {
              price: R
            });
            return (0, l.jsx)(h.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == I ? true : I.pageSection,
                  page_category: i === en.AW.HOME || null == I ? true : I.pageCategory,
                  page_index: i === en.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                  page_size: i === en.AW.CATALOG ? null == I ? true : I.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == I ? true : I.tilePosition),
                  cta_name: "buy button"
                }), (0, _.Z)({
                  skuId: (0, Y.S)({
                    product: t,
                    selectedVariantIndex: r
                  }),
                  analyticsLocations: s,
                  returnRef: a,
                  variantsReturnStyle: c.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), m || o.tq || K || !Z || i === en.AW.ORBS ? null : S ? (0, l.jsx)(h.hU, {
          variant: "primary",
          "aria-label": es.intl.string(es.t.SKNnqq),
          icon: h.tEF,
          onClick: e => {
            e.stopPropagation(), U(e)
          }
        }) : (0, l.jsx)(j.k0, {
          newValue: {
            pageCategory: i === en.AW.HOME || null == I ? true : I.pageCategory
          },
          children: (0, l.jsx)(W.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: r,
            returnRef: a,
            tooltipDelay: 250
          })
        })]
      })
    })]
  })
}
let ex = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: i,
      category: r,
      tab: o,
      cardRef: c,
      selectedProduct: g,
      firstCollectibleItem: _,
      selectedVariantIndex: f,
      handleEntering: y,
      handleLeaving: O,
      previewingVariantIndex: b,
      className: A,
      shopBlockType: T
    } = e, {
      analyticsLocations: L
    } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]), N = (0, j.sp)(), Z = (0, el.G)("CollectiblesShopTallCard"), B = null != T && T === u.z.HERO && Z ? en.Ch.THUMBNAIL : en.Ch.DEFAULT, W = (0, P.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: M
    } = (0, C.Z)(c), z = (0, ee.To)(t), q = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), Y = S.ZP.canUseCollectibles(i), Q = n.useMemo(() => (0, k.BH)(t, Y), [t, Y]), X = (0, k.G1)(t), J = (0, p.e7)([I.Z], () => (0, h.wjy)(I.Z.theme)), $ = (0, k.Yq)(t.skuId), ei = r.skuId === en.bu && (0, k.WW)(t.skuId), {
      isPurchased: ea,
      isPartiallyOwnedBundle: ep
    } = (0, R.L)(g), {
      isDisabled: eh
    } = (0, w.G)(g.skuId), em = null !== b ? b : f, [ex, eC] = n.useState(false), e_ = n.useCallback(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(d.Z.PROFILE_EFFECT, () => (0, l.jsx)(eu, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: n && !r
      })).with(d.Z.AVATAR_DECORATION, () => (0, l.jsx)(ec, {
        item: e,
        user: i,
        isHighlighted: t,
        isPurchased: n
      })).with(d.Z.NAMEPLATE, () => (0, l.jsx)(eg, {
        user: i,
        nameplate: e,
        isHighlighted: t,
        isPurchased: n
      })).otherwise(() => null)
    }, [i]), ef = n.useRef(null), {
      displayPrices: ey,
      isOrbExclusive: eP
    } = (0, et.oo)({
      product: t,
      isPremiumUser: Y,
      tab: o
    }), eI = n.useCallback(e => i => {
      let l = (0, et.oQ)({
        product: t
      });
      ef.current = i.currentTarget, E.default.track(er.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == N ? true : N.sessionId,
        sku_id: t.skuId,
        page_type: o,
        page_section: null == N ? true : N.pageSection,
        page_category: o === en.AW.HOME ? true : r.name,
        page_index: o === en.AW.CATALOG ? null == N ? true : N.pageIndex : true,
        page_size: o === en.AW.CATALOG ? null == N ? true : N.pageSize : true,
        tile_type: d.Z[t.type],
        tile_position: String(null == N ? true : N.tilePosition),
        cta_name: null
      }), (0, G.T)({
        product: t,
        category: r,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: L,
        analyticsSource: e,
        returnRef: ef,
        tab: o,
        variantType: B
      })
    }, [t, r, o, L, N, B]), eO = eI(v.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ey.length || (0, k.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eb = a()(eo.badge, {
      [eo.badgeLeftAligned]: W
    });
    return (0, l.jsx)(h.tEY, {
      children: (0, l.jsxs)(h.kL8, {
        className: a()(A, J ? eo.shopCardDark : eo.shopCard, {
          [eo.partiallyOwned]: ep && !M,
          [eo.shopCardAnimation]: !q,
          [J ? eo.shopCardDarkHighlighted : eo.shopCardHighlighted]: M
        }),
        ref: c,
        onClick: eO,
        "aria-label": t.name,
        children: [X && (0, l.jsx)(h.aML, {
          tooltipContentClassName: eo.premiumWheelTooltipContent,
          color: h.aML.Colors.PRIMARY,
          text: es.intl.string(es.t.nKdAlJ),
          children: e => {
            var t, i;
            return (0, l.jsx)(h.IGR, (t = ed({}, e), i = i = {
              className: a()(eo.premiumWheelBadge, {
                [eo.badgeLeftAligned]: W
              }),
              text: (0, l.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: eo.premiumWheel
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var i = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                i.push.apply(i, l)
              }
              return i
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
          }
        }), (0, l.jsx)(H.Z, {
          category: r,
          className: a()(eo.limitedTimeBadge, {
            [eo.badgeLeftAligned]: W
          }),
          display: H.k.CARD,
          shopBlockType: T
        }), W && (0, l.jsx)(F.a, {
          product: t,
          selectedVariantIndex: f,
          className: eo.wishlistButton,
          isCardHovered: M
        }), ep || ea || !$ ? eP ? (0, l.jsx)(h.IGR, {
          text: es.intl.string(es.t["0TmQRE"]),
          disableColor: true,
          className: eb
        }) : ei ? (0, l.jsx)(h.IGR, {
          text: es.intl.string(es.t.S6kE9v),
          disableColor: true,
          className: eb
        }) : null : (0, l.jsx)(h.IGR, {
          text: es.intl.string(es.t.y2b7CA),
          disableColor: true,
          className: eb
        }), (0, l.jsx)("div", {
          className: a()(eo.preview, {
            [eo.previewThumbnailVariant]: B === en.Ch.THUMBNAIL
          }),
          children: (0, s.EQ)(t.type).with(d.Z.PROFILE_EFFECT, d.Z.AVATAR_DECORATION, d.Z.NAMEPLATE, () => e_(_, M, ea)).with(d.Z.BUNDLE, () => (0, l.jsx)(K.d, {
            product: t,
            user: i,
            isPurchased: ea,
            isHighlighted: M
          })).with(d.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[em];
            if (null == e) return null;
            let [i] = e.items;
            return e_(i, M, ea, ex)
          }).with(d.Z.EXTERNAL_SKU, () => (0, l.jsx)(U.b, {
            product: t,
            animationState: M ? "on" : "off",
            className: eh || ea && !M ? eo.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = ea ? h.sV5 : eh ? h.mBM : null;
          return null == e ? null : (0, l.jsx)("div", {
            className: eo.cardStateIconWrapper,
            children: (0, l.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(eo.cardStateIcon, {
                [eo.checkmark]: ea
              })
            })
          })
        })(), (0, l.jsxs)("div", {
          className: a()(eo.cardText, J ? eo.darkCardBackground : eo.lightCardBackground, {
            [eo.variantsGroup]: t.type === d.Z.VARIANTS_GROUP,
            [eo.thumbnailVariant]: t.type === d.Z.VARIANTS_GROUP && B === en.Ch.THUMBNAIL
          }),
          children: [(0, l.jsx)(h.Heading, {
            variant: "text-lg/bold",
            className: eo.productName,
            children: z
          }), t.type === d.Z.VARIANTS_GROUP ? B === en.Ch.DEFAULT ? (0, l.jsx)(D.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: b,
              handleEntering: y,
              handleLeaving: O
            },
            selectedVariantIndex: f,
            setIsHoveringOnSwitch: eC,
            minimal: !M,
            alternativeBackgroundColor: (null == _ ? true : _.type) === d.Z.PROFILE_EFFECT
          }) : (0, l.jsx)(V.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: b,
              handleEntering: y,
              handleLeaving: O
            },
            selectedVariantIndex: f,
            setIsHoveringOnSwitch: eC
          }) : null, (0, l.jsx)(ev, {
            product: t,
            tab: o,
            buildHandlePreviewClick: eI,
            selectedProduct: g,
            selectedVariantIndex: f,
            cardRef: c,
            analyticsLocations: L,
            isPremiumUser: Y,
            isPremiumProduct: X,
            isPartiallyOwnedBundle: ep,
            isPurchased: ea,
            isDisabled: eh,
            discount: Q
          })]
        })]
      })
    })
  }),
  eC = em