/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => eP,
  d: () => eh
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
  Chunk670185 = require("./670185.js");

function eu(e) {
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
let ep = e => {
    let {
      skuId: t,
      isHighlighted: i,
      isPurchased: r
    } = e;
    return (0, l.jsx)("div", {
      className: ec.profileEffectShopPreview,
      children: (0, l.jsx)(_.Z, {
        skuId: t,
        isHighlighted: i,
        isPurchased: r && !i,
        removeSetHeight: true
      })
    })
  },
  eg = e => {
    let {
      isHighlighted: t,
      isPurchased: i,
      user: r,
      item: n
    } = e;
    return (0, l.jsx)("div", {
      className: ec.avatarContainer,
      children: (0, l.jsx)(q.R, {
        item: n,
        user: r,
        isPurchased: i,
        isHighlighted: t
      })
    })
  },
  eh = e => {
    let {
      showStatus: t,
      width: i,
      opacity: r
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(ec.nameplatePreviewSampleItem, ec.placeholderItem),
      style: {
        opacity: r
      },
      children: [(0, l.jsx)(h.qEK, {
        src: null,
        size: h.EFr.SIZE_32,
        status: t ? es.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: ec.nameplatePlaceholderAvatar
      }), (0, l.jsx)("div", {
        className: ec.placeholderBar,
        style: {
          maxWidth: null != i ? i : "100px"
        }
      })]
    })
  },
  em = e => {
    let {
      user: t,
      nameplate: i,
      isHighlighted: r,
      isPurchased: n
    } = e;
    return (0, l.jsx)("div", {
      className: ec.nameplatePreviewRootContainer,
      children: (0, l.jsxs)("div", {
        className: ec.nameplatePreviewList,
        children: [(0, l.jsxs)("div", {
          className: ec.fadeIn,
          children: [(0, l.jsx)(eh, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, l.jsx)(eh, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, l.jsx)(Q.Z, {
          user: t,
          nameplate: i,
          className: ec.nameplatePreviewSampleItem,
          isHighlighted: r,
          showPlaceholderUser: !r,
          showStatus: true,
          isPurchased: n
        }), (0, l.jsxs)("div", {
          className: ec.fadeOut,
          children: [(0, l.jsx)(eh, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, l.jsx)(eh, {
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
      selectedProduct: i,
      cardRef: r,
      children: n
    } = e, {
      handleCardVisibilityChange: a
    } = (0, H.E)(i.skuId, t === ea.AW.CATALOG ? "full" : t);
    return (0, l.jsx)(g.$, {
      innerRef: r,
      onChange: a,
      threshold: 0,
      children: n
    })
  },
  ex = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: i,
      onMount: n,
      shopBlockType: a
    } = e, s = function(e, t) {
      if (null == e) return {};
      var i, l, r = function(e, t) {
        if (null == e) return {};
        var i, l, r = {},
          n = Object.keys(e);
        for (l = 0; l < n.length; l++) i = n[l], t.indexOf(i) >= 0 || (r[i] = e[i]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (l = 0; l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
      }
      return r
    }(e, ["tab", "product", "onMount", "shopBlockType"]);
    let o = (0, p.e7)([T.Z], () => T.Z.purchases),
      d = (0, L.o)(i, o),
      c = (0, J.W)(i, d),
      u = r.useRef(null),
      {
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m
      } = (0, et.f)(i),
      v = (0, ee.o)(i, o, g);
    return r.useEffect(() => {
      null == n || n(u, i)
    }, [n, i]), (0, l.jsx)(ev, {
      tab: t,
      selectedProduct: c,
      cardRef: u,
      children: (0, l.jsx)(eC, eu({
        tab: t,
        product: i,
        selectedVariantIndex: d,
        selectedProduct: c,
        cardRef: u,
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m,
        firstCollectibleItem: v,
        shopBlockType: a
      }, s))
    })
  });

function ef(e) {
  let {
    product: t,
    tab: i,
    selectedProduct: r,
    selectedVariantIndex: n,
    cardRef: a,
    analyticsLocations: s,
    buildHandlePreviewClick: c,
    isPremiumUser: g,
    isPremiumProduct: m,
    isPurchased: x,
    isPartiallyOwnedBundle: f,
    isDisabled: _,
    discount: y
  } = e, I = (0, k.sp)(), E = (0, N.rN)(t), [L, R] = (0, p.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]), Z = (0, N.XM)(r, g, false), H = (0, N.ne)({
    product: r,
    isPartiallyOwnedBundle: f,
    isPurchased: x
  }), {
    enabled: B
  } = (0, O.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: D,
    isApplying: G
  } = (0, w.W)({
    product: r
  }), V = c(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), F = (0, $.Iw)(t), K = null != F, {
    displayPrices: q,
    checkoutEligiblePrices: Y,
    isOrbExclusive: Q,
    shouldCheckoutWithOrbs: J,
    hasSufficientOrbs: ee
  } = (0, el.Ip)({
    product: t,
    isPremiumUser: g,
    tab: i,
    hasDiscountOffer: K
  });
  if (0 === q.length) return null;
  let et = () => (0, l.jsx)(h.zxk, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), V(e)
    },
    text: ed.intl.string(ed.t.FdGl5O),
    fullWidth: true
  });
  return (0, l.jsxs)("div", {
    className: ec.detailsWrapper,
    children: [(0, l.jsx)("div", {
      className: ec.innerBlur,
      children: _ ? (0, l.jsx)(h.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ec.priceTag,
        children: ed.intl.string(ed.t.wu4gyc)
      }) : x || f ? (0, l.jsx)(W.U, {
        className: ec.priceTag,
        isPartiallyPurchased: f
      }) : m ? (0, l.jsx)(h.Text, {
        variant: "text-md/semibold",
        className: ec.priceTag,
        children: ed.intl.string(ed.t.rt69oq)
      }) : B ? (0, l.jsx)(z.e, {
        displayPrices: q,
        isPremiumUser: g,
        discount: y,
        hasSufficientOrbs: ee,
        discountOfferAmount: F
      }) : (0, l.jsx)(U.Z, {
        product: r,
        discount: y,
        isPremiumUser: g,
        className: ec.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: F
      })
    }), (0, l.jsx)("div", {
      className: ec.innerHover,
      children: (0, l.jsxs)(h.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (m && !g && !E) return (0, l.jsx)("div", {
            className: ec.hoverUpsellContainer,
            children: (0, l.jsx)(P.Z, {
              fullWidth: true,
              className: ec.__invalid_premiumSubscribeButton,
              disabled: R,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: ed.intl.string(ed.t.sEAnVF)
              },
              subscriptionTier: eo.Si.TIER_2
            })
          });
          if (!H || _) return et();
          if (x) return (0, l.jsx)(h.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), D()
            },
            loading: G,
            text: ed.intl.string(ed.t.MAS7uL),
            fullWidth: true
          });
          {
            if (m) {
              let e = async () => {
                j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == I ? true : I.pageSection,
                  page_category: i === ea.AW.HOME || null == I ? true : I.pageCategory,
                  page_index: i === ea.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                  page_size: i === ea.AW.CATALOG ? null == I ? true : I.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == I ? true : I.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, A.fK)(t.skuId), (0, er.Z)({
                  product: t,
                  analyticsLocations: s,
                  purchaseType: ea.o8.PREMIUM_PURCHASE
                })
              };
              return (0, l.jsx)(h.zxk, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: R,
                loading: L,
                loadingStartedLabel: ed.intl.string(ed.t["TYw+9v"]),
                loadingFinishedLabel: ed.intl.string(ed.t.Pg1UPz),
                text: ed.intl.string(ed.t.zp6caG),
                fullWidth: true
              })
            }
            if (J)
              if (ee) return (0, l.jsx)(h.zxk, {
                variant: "primary",
                text: ed.intl.format(ed.t.kAgx5O, {
                  orbPrice: Y[0].amount,
                  orbIconHook: () => (0, l.jsx)(S.Z, {
                    className: ec.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? true : I.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == I ? true : I.pageSection,
                    page_category: i === ea.AW.HOME || null == I ? true : I.pageCategory,
                    page_index: i === ea.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                    page_size: i === ea.AW.CATALOG ? null == I ? true : I.pageSize : true,
                    tile_type: d.Z[t.type],
                    tile_position: String(null == I ? true : I.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, b.qA)({
                    skuId: (0, X.S)({
                      product: t,
                      selectedVariantIndex: n
                    }),
                    onCheckoutSuccess: e => {
                      var i;
                      let {
                        entitlements: l
                      } = e;
                      (0, A.qg)({
                        variantsReturnStyle: u.v.VARIANTS_GROUP
                      }), (0, er.Z)({
                        product: t,
                        analyticsLocations: s,
                        itemConsumed: null == (i = l[0]) ? true : i.consumed,
                        purchaseType: ea.o8.ORB
                      })
                    },
                    analyticsLocations: s
                  })
                },
                "aria-label": ed.intl.formatToPlainString(ed.t["fNG/09"], {
                  orbPrice: Y[0].amount
                }),
                fullWidth: true
              });
              else return et();
            if (i === ea.AW.ORBS) return (0, l.jsx)(h.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), V(e)
              },
              text: ed.intl.string(ed.t.GpnHfH),
              fullWidth: true
            });
            let e = K ? ed.intl.formatToPlainString(ed.t["5U5RBw"], {
              discountOfferAmount: F
            }) : ed.intl.formatToPlainString(ed.t["cNSL/v"], {
              price: Z
            });
            return (0, l.jsx)(h.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == I ? true : I.pageSection,
                  page_category: i === ea.AW.HOME || null == I ? true : I.pageCategory,
                  page_index: i === ea.AW.CATALOG ? null == I ? true : I.pageIndex : true,
                  page_size: i === ea.AW.CATALOG ? null == I ? true : I.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == I ? true : I.tilePosition),
                  cta_name: "buy button"
                }), (0, C.Z)({
                  skuId: (0, X.S)({
                    product: t,
                    selectedVariantIndex: n
                  }),
                  analyticsLocations: s,
                  returnRef: a,
                  variantsReturnStyle: u.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), m || o.tq || Q || !H || i === ea.AW.ORBS ? null : E ? (0, l.jsx)(h.hU, {
          variant: "primary",
          "aria-label": ed.intl.string(ed.t.SKNnqq),
          icon: h.tEF,
          onClick: e => {
            e.stopPropagation(), V(e)
          }
        }) : (0, l.jsx)(k.k0, {
          newValue: {
            pageCategory: i === ea.AW.HOME || null == I ? true : I.pageCategory
          },
          children: (0, l.jsx)(M.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: n,
            returnRef: a,
            tooltipDelay: 250
          })
        })]
      })
    })]
  })
}
let eC = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: i,
      category: n,
      tab: o,
      cardRef: u,
      selectedProduct: g,
      firstCollectibleItem: C,
      selectedVariantIndex: P,
      handleEntering: _,
      handleLeaving: O,
      previewingVariantIndex: S,
      className: b,
      shopBlockType: A
    } = e, {
      analyticsLocations: T
    } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]), L = (0, k.sp)(), w = (0, en.G)("CollectiblesShopTallCard"), H = null != A && A === c.z.HERO && w ? ea.Ch.THUMBNAIL : ea.Ch.DEFAULT, W = (0, y.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: M
    } = (0, f.Z)(u), U = (0, ei.To)(t), z = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), q = E.ZP.canUseCollectibles(i), Q = r.useMemo(() => (0, N.BH)(t, q), [t, q]), X = (0, N.G1)(t), J = (0, p.e7)([I.Z], () => (0, h.wjy)(I.Z.theme)), $ = (0, N.Yq)(t.skuId), ee = n.skuId === ea.bu && (0, N.WW)(t.skuId), {
      isPurchased: et,
      isPartiallyOwnedBundle: er
    } = (0, Z.L)(g), {
      isDisabled: eo
    } = (0, R.G)(g.skuId), eh = null !== S ? S : P, [ev, ex] = r.useState(false), eC = r.useCallback(function(e, t, r) {
      let n = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(d.Z.PROFILE_EFFECT, () => (0, l.jsx)(ep, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: r && !n
      })).with(d.Z.AVATAR_DECORATION, () => (0, l.jsx)(eg, {
        item: e,
        user: i,
        isHighlighted: t,
        isPurchased: r
      })).with(d.Z.NAMEPLATE, () => (0, l.jsx)(em, {
        user: i,
        nameplate: e,
        isHighlighted: t,
        isPurchased: r
      })).otherwise(() => null)
    }, [i]), eP = r.useRef(null), {
      displayPrices: e_,
      isOrbExclusive: ey
    } = (0, el.oo)({
      product: t,
      isPremiumUser: q,
      tab: o
    }), eI = r.useCallback(e => i => {
      let l = (0, el.oQ)({
        product: t
      });
      eP.current = i.currentTarget, j.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        sku_id: t.skuId,
        page_type: o,
        page_section: null == L ? true : L.pageSection,
        page_category: o === ea.AW.HOME ? true : n.name,
        page_index: o === ea.AW.CATALOG ? null == L ? true : L.pageIndex : true,
        page_size: o === ea.AW.CATALOG ? null == L ? true : L.pageSize : true,
        tile_type: d.Z[t.type],
        tile_position: String(null == L ? true : L.tilePosition),
        cta_name: null
      }), (0, D.T)({
        product: t,
        category: n,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: T,
        analyticsSource: e,
        returnRef: eP,
        tab: o,
        variantType: H
      })
    }, [t, n, o, T, L, H]), eO = eI(v.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === e_.length || (0, N.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eS = a()(ec.badge, {
      [ec.badgeLeftAligned]: W
    });
    return (0, l.jsx)(h.tEY, {
      children: (0, l.jsxs)(h.kL8, {
        className: a()(b, J ? ec.shopCardDark : ec.shopCard, {
          [ec.partiallyOwned]: er && !M,
          [ec.shopCardAnimation]: !z,
          [J ? ec.shopCardDarkHighlighted : ec.shopCardHighlighted]: M
        }),
        ref: u,
        onClick: eO,
        "aria-label": t.name,
        children: [X && (0, l.jsx)(h.ua7, {
          tooltipContentClassName: ec.premiumWheelTooltipContent,
          color: h.ua7.Colors.PRIMARY,
          text: ed.intl.string(ed.t.nKdAlJ),
          children: e => {
            var t, i;
            return (0, l.jsx)(h.IGR, (t = eu({}, e), i = i = {
              className: a()(ec.premiumWheelBadge, {
                [ec.badgeLeftAligned]: W
              }),
              text: (0, l.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: ec.premiumWheel
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
        }), (0, l.jsx)(B.Z, {
          category: n,
          className: a()(ec.limitedTimeBadge, {
            [ec.badgeLeftAligned]: W
          }),
          display: B.k.CARD,
          shopBlockType: A
        }), W && (0, l.jsx)(K.a, {
          product: t,
          selectedVariantIndex: P,
          className: ec.wishlistButton,
          isCardHovered: M
        }), er || et || !$ ? ey ? (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t["0TmQRE"]),
          disableColor: true,
          className: eS
        }) : ee ? (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.S6kE9v),
          disableColor: true,
          className: eS
        }) : null : (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.y2b7CA),
          disableColor: true,
          className: eS
        }), (0, l.jsx)("div", {
          className: a()(ec.preview, {
            [ec.previewThumbnailVariant]: H === ea.Ch.THUMBNAIL
          }),
          children: (0, s.EQ)(t.type).with(d.Z.PROFILE_EFFECT, d.Z.AVATAR_DECORATION, d.Z.NAMEPLATE, () => eC(C, M, et)).with(d.Z.BUNDLE, () => (0, l.jsx)(Y.d, {
            product: t,
            user: i,
            isPurchased: et,
            isHighlighted: M
          })).with(d.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[eh];
            if (null == e) return null;
            let [i] = e.items;
            return eC(i, M, et, ev)
          }).with(d.Z.EXTERNAL_SKU, () => (0, l.jsx)(G.b, {
            product: t,
            animationState: M ? "on" : "off",
            className: eo || et && !M ? ec.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = et ? h.sV5 : eo ? h.mBM : null;
          return null == e ? null : (0, l.jsx)("div", {
            className: ec.cardStateIconWrapper,
            children: (0, l.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(ec.cardStateIcon, {
                [ec.checkmark]: et
              })
            })
          })
        })(), (0, l.jsxs)("div", {
          className: a()(ec.cardText, J ? ec.darkCardBackground : ec.lightCardBackground, {
            [ec.variantsGroup]: t.type === d.Z.VARIANTS_GROUP,
            [ec.thumbnailVariant]: t.type === d.Z.VARIANTS_GROUP && H === ea.Ch.THUMBNAIL
          }),
          children: [(0, l.jsx)(h.X6q, {
            variant: "text-lg/bold",
            className: ec.productName,
            children: U
          }), t.type === d.Z.VARIANTS_GROUP ? H === ea.Ch.DEFAULT ? (0, l.jsx)(V.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: S,
              handleEntering: _,
              handleLeaving: O
            },
            selectedVariantIndex: P,
            setIsHoveringOnSwitch: ex,
            minimal: !M,
            alternativeBackgroundColor: (null == C ? true : C.type) === d.Z.PROFILE_EFFECT
          }) : (0, l.jsx)(F.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: S,
              handleEntering: _,
              handleLeaving: O
            },
            selectedVariantIndex: P,
            setIsHoveringOnSwitch: ex
          }) : null, (0, l.jsx)(ef, {
            product: t,
            tab: o,
            buildHandlePreviewClick: eI,
            selectedProduct: g,
            selectedVariantIndex: P,
            cardRef: u,
            analyticsLocations: T,
            isPremiumUser: q,
            isPremiumProduct: X,
            isPartiallyOwnedBundle: er,
            isPurchased: et,
            isDisabled: eo,
            discount: Q
          })]
        })]
      })
    })
  }),
  eP = ex