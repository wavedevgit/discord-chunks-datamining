/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => e_,
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
  Chunk300179 = require("./300179.js");

function ec(e) {
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
      isPurchased: n
    } = e;
    return (0, l.jsx)("div", {
      className: eu.profileEffectShopPreview,
      children: (0, l.jsx)(y.Z, {
        skuId: t,
        isHighlighted: i,
        isPurchased: n && !i,
        removeSetHeight: true
      })
    })
  },
  eg = e => {
    let {
      isHighlighted: t,
      isPurchased: i,
      user: n,
      item: r
    } = e;
    return (0, l.jsx)("div", {
      className: eu.avatarContainer,
      children: (0, l.jsx)(q.R, {
        item: r,
        user: n,
        isPurchased: i,
        isHighlighted: t
      })
    })
  },
  eh = e => {
    let {
      showStatus: t,
      width: i,
      opacity: n
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(eu.nameplatePreviewSampleItem, eu.placeholderItem),
      style: {
        opacity: n
      },
      children: [(0, l.jsx)(h.qEK, {
        src: null,
        size: h.EFr.SIZE_32,
        status: t ? es.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: eu.nameplatePlaceholderAvatar
      }), (0, l.jsx)("div", {
        className: eu.placeholderBar,
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
      isHighlighted: n,
      isPurchased: r
    } = e;
    return (0, l.jsx)("div", {
      className: eu.nameplatePreviewRootContainer,
      children: (0, l.jsxs)("div", {
        className: eu.nameplatePreviewList,
        children: [(0, l.jsxs)("div", {
          className: eu.fadeIn,
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
          className: eu.nameplatePreviewSampleItem,
          isHighlighted: n,
          showPlaceholderUser: !n,
          showStatus: true,
          isPurchased: r
        }), (0, l.jsxs)("div", {
          className: eu.fadeOut,
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
      cardRef: n,
      children: r
    } = e, {
      handleCardVisibilityChange: a
    } = (0, H.E)(i.skuId, t === ea.AW.CATALOG ? "full" : t);
    return (0, l.jsx)(g.$, {
      innerRef: n,
      onChange: a,
      threshold: 0,
      children: r
    })
  },
  ex = Chunk647438.memo(function(e) {
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
    let o = (0, p.e7)([k.Z], () => k.Z.purchases),
      d = (0, L.o)(i, o),
      u = (0, J.W)(i, d),
      c = n.useRef(null),
      {
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m
      } = (0, et.f)(i),
      v = (0, ee.o)(i, o, g);
    return n.useEffect(() => {
      null == r || r(c, i)
    }, [r, i]), (0, l.jsx)(ev, {
      tab: t,
      selectedProduct: u,
      cardRef: c,
      children: (0, l.jsx)(eC, ec({
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

function ef(e) {
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
    isPartiallyOwnedBundle: f,
    isDisabled: y,
    discount: P
  } = e, O = (0, T.sp)(), j = (0, N.rN)(t), [L, R] = (0, p.Wu)([k.Z], () => [k.Z.isClaiming === t.skuId, null != k.Z.isClaiming && k.Z.isClaiming !== t.skuId]), Z = (0, N.XM)(n, g, false), H = (0, N.ne)({
    product: n,
    isPartiallyOwnedBundle: f,
    isPurchased: x
  }), {
    enabled: B
  } = (0, b.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: U,
    isApplying: D
  } = (0, w.W)({
    product: n
  }), z = u(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), F = (0, $.Iw)(t), K = null != F, {
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
      e.stopPropagation(), z(e)
    },
    text: ed.intl.string(ed.t.FdGl5O),
    fullWidth: true
  });
  return (0, l.jsxs)("div", {
    className: eu.detailsWrapper,
    children: [(0, l.jsx)("div", {
      className: eu.innerBlur,
      children: y ? (0, l.jsx)(h.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: eu.priceTag,
        children: ed.intl.string(ed.t.wu4gyc)
      }) : x || f ? (0, l.jsx)(W.U, {
        className: eu.priceTag,
        isPartiallyPurchased: f
      }) : m ? (0, l.jsx)(h.Text, {
        variant: "text-md/semibold",
        className: eu.priceTag,
        children: ed.intl.string(ed.t.rt69oq)
      }) : B ? (0, l.jsx)(V.e, {
        displayPrices: q,
        isPremiumUser: g,
        discount: P,
        hasSufficientOrbs: ee,
        discountOfferAmount: F
      }) : (0, l.jsx)(M.Z, {
        product: n,
        discount: P,
        isPremiumUser: g,
        className: eu.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: F
      })
    }), (0, l.jsx)("div", {
      className: eu.innerHover,
      children: (0, l.jsxs)(h.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (m && !g && !j) return (0, l.jsx)("div", {
            className: eu.hoverUpsellContainer,
            children: (0, l.jsx)(_.Z, {
              fullWidth: true,
              className: eu.__invalid_premiumSubscribeButton,
              disabled: R,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: ed.intl.string(ed.t.sEAnVF)
              },
              subscriptionTier: eo.Si.TIER_2
            })
          });
          if (!H || y) return et();
          if (x) return (0, l.jsx)(h.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), U()
            },
            loading: D,
            text: ed.intl.string(ed.t.MAS7uL),
            fullWidth: true
          });
          {
            if (m) {
              let e = async () => {
                A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == O ? true : O.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == O ? true : O.pageSection,
                  page_category: i === ea.AW.HOME || null == O ? true : O.pageCategory,
                  page_index: i === ea.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                  page_size: i === ea.AW.CATALOG ? null == O ? true : O.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == O ? true : O.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, E.fK)(t.skuId), (0, en.Z)({
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
                  orbIconHook: () => (0, l.jsx)(I.Z, {
                    className: eu.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == O ? true : O.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == O ? true : O.pageSection,
                    page_category: i === ea.AW.HOME || null == O ? true : O.pageCategory,
                    page_index: i === ea.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                    page_size: i === ea.AW.CATALOG ? null == O ? true : O.pageSize : true,
                    tile_type: d.Z[t.type],
                    tile_position: String(null == O ? true : O.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, S.qA)({
                    skuId: (0, X.S)({
                      product: t,
                      selectedVariantIndex: r
                    }),
                    onCheckoutSuccess: e => {
                      var i;
                      let {
                        entitlements: l
                      } = e;
                      (0, E.qg)({
                        variantsReturnStyle: c.v.VARIANTS_GROUP
                      }), (0, en.Z)({
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
                e.stopPropagation(), z(e)
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
                e.stopPropagation(), A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == O ? true : O.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == O ? true : O.pageSection,
                  page_category: i === ea.AW.HOME || null == O ? true : O.pageCategory,
                  page_index: i === ea.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                  page_size: i === ea.AW.CATALOG ? null == O ? true : O.pageSize : true,
                  tile_type: d.Z[t.type],
                  tile_position: String(null == O ? true : O.tilePosition),
                  cta_name: "buy button"
                }), (0, C.Z)({
                  skuId: (0, X.S)({
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
        })(), m || o.tq || Q || !H || i === ea.AW.ORBS ? null : j ? (0, l.jsx)(h.hU, {
          variant: "primary",
          "aria-label": ed.intl.string(ed.t.SKNnqq),
          icon: h.tEF,
          onClick: e => {
            e.stopPropagation(), z(e)
          }
        }) : (0, l.jsx)(T.k0, {
          newValue: {
            pageCategory: i === ea.AW.HOME || null == O ? true : O.pageCategory
          },
          children: (0, l.jsx)(G.Z, {
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
let eC = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: i,
      category: r,
      tab: o,
      cardRef: c,
      selectedProduct: g,
      firstCollectibleItem: C,
      selectedVariantIndex: _,
      handleEntering: y,
      handleLeaving: b,
      previewingVariantIndex: I,
      className: S,
      shopBlockType: E
    } = e, {
      analyticsLocations: k
    } = (0, x.ZP)([v.Z.COLLECTIBLES_SHOP_CARD]), L = (0, T.sp)(), w = (0, er.G)("CollectiblesShopTallCard"), H = null != E && E === u.z.HERO && w ? ea.Ch.THUMBNAIL : ea.Ch.DEFAULT, W = (0, P.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: G
    } = (0, f.Z)(c), M = (0, ei.To)(t), V = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), q = j.ZP.canUseCollectibles(i), Q = n.useMemo(() => (0, N.BH)(t, q), [t, q]), X = (0, N.G1)(t), J = (0, p.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)), $ = (0, N.Yq)(t.skuId), ee = r.skuId === ea.bu && (0, N.WW)(t.skuId), {
      isPurchased: et,
      isPartiallyOwnedBundle: en
    } = (0, Z.L)(g), {
      isDisabled: eo
    } = (0, R.G)(g.skuId), eh = null !== I ? I : _, [ev, ex] = n.useState(false), eC = n.useCallback(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(d.Z.PROFILE_EFFECT, () => (0, l.jsx)(ep, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: n && !r
      })).with(d.Z.AVATAR_DECORATION, () => (0, l.jsx)(eg, {
        item: e,
        user: i,
        isHighlighted: t,
        isPurchased: n
      })).with(d.Z.NAMEPLATE, () => (0, l.jsx)(em, {
        user: i,
        nameplate: e,
        isHighlighted: t,
        isPurchased: n
      })).otherwise(() => null)
    }, [i]), e_ = n.useRef(null), {
      displayPrices: ey,
      isOrbExclusive: eP
    } = (0, el.oo)({
      product: t,
      isPremiumUser: q,
      tab: o
    }), eO = n.useCallback(e => i => {
      let l = (0, el.oQ)({
        product: t
      });
      e_.current = i.currentTarget, A.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        sku_id: t.skuId,
        page_type: o,
        page_section: null == L ? true : L.pageSection,
        page_category: o === ea.AW.HOME ? true : r.name,
        page_index: o === ea.AW.CATALOG ? null == L ? true : L.pageIndex : true,
        page_size: o === ea.AW.CATALOG ? null == L ? true : L.pageSize : true,
        tile_type: d.Z[t.type],
        tile_position: String(null == L ? true : L.tilePosition),
        cta_name: null
      }), (0, U.T)({
        product: t,
        category: r,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: k,
        analyticsSource: e,
        returnRef: e_,
        tab: o,
        variantType: H
      })
    }, [t, r, o, k, L, H]), eb = eO(v.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ey.length || (0, N.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eI = a()(eu.badge, {
      [eu.badgeLeftAligned]: W
    });
    return (0, l.jsx)(h.tEY, {
      children: (0, l.jsxs)(h.kL8, {
        className: a()(S, J ? eu.shopCardDark : eu.shopCard, {
          [eu.partiallyOwned]: en && !G,
          [eu.shopCardAnimation]: !V,
          [J ? eu.shopCardDarkHighlighted : eu.shopCardHighlighted]: G
        }),
        ref: c,
        onClick: eb,
        "aria-label": t.name,
        children: [X && (0, l.jsx)(h.ua7, {
          tooltipContentClassName: eu.premiumWheelTooltipContent,
          color: h.ua7.Colors.PRIMARY,
          text: ed.intl.string(ed.t.nKdAlJ),
          children: e => {
            var t, i;
            return (0, l.jsx)(h.IGR, (t = ec({}, e), i = i = {
              className: a()(eu.premiumWheelBadge, {
                [eu.badgeLeftAligned]: W
              }),
              text: (0, l.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: eu.premiumWheel
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
          category: r,
          className: a()(eu.limitedTimeBadge, {
            [eu.badgeLeftAligned]: W
          }),
          display: B.k.CARD,
          shopBlockType: E
        }), W && (0, l.jsx)(K.a, {
          product: t,
          selectedVariantIndex: _,
          className: eu.wishlistButton,
          isCardHovered: G
        }), en || et || !$ ? eP ? (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t["0TmQRE"]),
          disableColor: true,
          className: eI
        }) : ee ? (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.S6kE9v),
          disableColor: true,
          className: eI
        }) : null : (0, l.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.y2b7CA),
          disableColor: true,
          className: eI
        }), (0, l.jsx)("div", {
          className: a()(eu.preview, {
            [eu.previewThumbnailVariant]: H === ea.Ch.THUMBNAIL
          }),
          children: (0, s.EQ)(t.type).with(d.Z.PROFILE_EFFECT, d.Z.AVATAR_DECORATION, d.Z.NAMEPLATE, () => eC(C, G, et)).with(d.Z.BUNDLE, () => (0, l.jsx)(Y.d, {
            product: t,
            user: i,
            isPurchased: et,
            isHighlighted: G
          })).with(d.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[eh];
            if (null == e) return null;
            let [i] = e.items;
            return eC(i, G, et, ev)
          }).with(d.Z.EXTERNAL_SKU, () => (0, l.jsx)(D.b, {
            product: t,
            animationState: G ? "on" : "off",
            className: eo || et && !G ? eu.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = et ? h.sV5 : eo ? h.mBM : null;
          return null == e ? null : (0, l.jsx)("div", {
            className: eu.cardStateIconWrapper,
            children: (0, l.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(eu.cardStateIcon, {
                [eu.checkmark]: et
              })
            })
          })
        })(), (0, l.jsxs)("div", {
          className: a()(eu.cardText, J ? eu.darkCardBackground : eu.lightCardBackground, {
            [eu.variantsGroup]: t.type === d.Z.VARIANTS_GROUP,
            [eu.thumbnailVariant]: t.type === d.Z.VARIANTS_GROUP && H === ea.Ch.THUMBNAIL
          }),
          children: [(0, l.jsx)(h.X6q, {
            variant: "text-lg/bold",
            className: eu.productName,
            children: M
          }), t.type === d.Z.VARIANTS_GROUP ? H === ea.Ch.DEFAULT ? (0, l.jsx)(z.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: I,
              handleEntering: y,
              handleLeaving: b
            },
            selectedVariantIndex: _,
            setIsHoveringOnSwitch: ex,
            minimal: !G,
            alternativeBackgroundColor: (null == C ? true : C.type) === d.Z.PROFILE_EFFECT
          }) : (0, l.jsx)(F.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: I,
              handleEntering: y,
              handleLeaving: b
            },
            selectedVariantIndex: _,
            setIsHoveringOnSwitch: ex
          }) : null, (0, l.jsx)(ef, {
            product: t,
            tab: o,
            buildHandlePreviewClick: eO,
            selectedProduct: g,
            selectedVariantIndex: _,
            cardRef: c,
            analyticsLocations: k,
            isPremiumUser: q,
            isPremiumProduct: X,
            isPartiallyOwnedBundle: en,
            isPurchased: et,
            isDisabled: eo,
            discount: Q
          })]
        })]
      })
    })
  }),
  e_ = ex