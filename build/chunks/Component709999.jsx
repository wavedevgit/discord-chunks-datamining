/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => e_,
  d: () => eg
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
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
  Chunk786040 = require("./786040.jsx"),
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
  Chunk694364 = require("./694364.js"),
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
let ec = e => {
    let {
      skuId: t,
      isHighlighted: i,
      isPurchased: n
    } = e;
    return (0, l.jsx)("div", {
      className: ed.profileEffectShopPreview,
      children: (0, l.jsx)(f.Z, {
        skuId: t,
        isHighlighted: i,
        isPurchased: n && !i,
        removeSetHeight: true
      })
    })
  },
  ep = e => {
    let {
      isHighlighted: t,
      isPurchased: i,
      user: n,
      item: r
    } = e;
    return (0, l.jsx)("div", {
      className: ed.avatarContainer,
      children: (0, l.jsx)(z.R, {
        item: r,
        user: n,
        isPurchased: i,
        isHighlighted: t
      })
    })
  },
  eg = e => {
    let {
      showStatus: t,
      width: i,
      opacity: n
    } = e;
    return (0, l.jsxs)("div", {
      className: a()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
      style: {
        opacity: n
      },
      children: [(0, l.jsx)(g.qEK, {
        src: null,
        size: g.EFr.SIZE_32,
        status: t ? ea.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: ed.nameplatePlaceholderAvatar
      }), (0, l.jsx)("div", {
        className: ed.placeholderBar,
        style: {
          maxWidth: null != i ? i : "100px"
        }
      })]
    })
  },
  eh = e => {
    let {
      user: t,
      nameplate: i,
      isHighlighted: n,
      isPurchased: r
    } = e;
    return (0, l.jsx)("div", {
      className: ed.nameplatePreviewRootContainer,
      children: (0, l.jsxs)("div", {
        className: ed.nameplatePreviewList,
        children: [(0, l.jsxs)("div", {
          className: ed.fadeIn,
          children: [(0, l.jsx)(eg, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, l.jsx)(eg, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, l.jsx)(Y.Z, {
          user: t,
          nameplate: i,
          className: ed.nameplatePreviewSampleItem,
          isHighlighted: n,
          showPlaceholderUser: !n,
          showStatus: true,
          isPurchased: r
        }), (0, l.jsxs)("div", {
          className: ed.fadeOut,
          children: [(0, l.jsx)(eg, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, l.jsx)(eg, {
            showStatus: true,
            width: 94,
            opacity: .7
          })]
        })]
      })
    })
  },
  em = e => {
    let {
      tab: t,
      selectedProduct: i,
      cardRef: n,
      children: r
    } = e, {
      handleCardVisibilityChange: a
    } = (0, w.E)(i.skuId, t === er.AW.CATALOG ? "full" : t);
    return (0, l.jsx)(p.$, {
      innerRef: n,
      onChange: a,
      threshold: 0,
      children: r
    })
  },
  ev = Chunk647438.memo(function(e) {
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
    let o = (0, c.e7)([j.Z], () => j.Z.purchases),
      d = (0, T.o)(i, o),
      u = (0, Q.W)(i, d),
      p = n.useRef(null),
      {
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m
      } = (0, ee.f)(i),
      v = (0, $.o)(i, o, g);
    return n.useEffect(() => {
      null == r || r(p, i)
    }, [r, i]), (0, l.jsx)(em, {
      tab: t,
      selectedProduct: u,
      cardRef: p,
      children: (0, l.jsx)(eC, eu({
        tab: t,
        product: i,
        selectedVariantIndex: d,
        selectedProduct: u,
        cardRef: p,
        previewingVariantIndex: g,
        handleEntering: h,
        handleLeaving: m,
        firstCollectibleItem: v,
        shopBlockType: a
      }, s))
    })
  });

function ex(e) {
  let {
    product: t,
    tab: i,
    selectedProduct: n,
    selectedVariantIndex: r,
    cardRef: a,
    analyticsLocations: s,
    buildHandlePreviewClick: d,
    isPremiumUser: p,
    isPremiumProduct: h,
    isPurchased: v,
    isPartiallyOwnedBundle: x,
    isDisabled: f,
    discount: y
  } = e, O = (0, E.sp)(), A = (0, L.rN)(t), [T, N] = (0, c.Wu)([j.Z], () => [j.Z.isClaiming === t.skuId, null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId]), R = (0, L.XM)(n, p, false), w = (0, L.ne)({
    product: n,
    isPartiallyOwnedBundle: x,
    isPurchased: v
  }), B = (0, J.J)(t, i === er.AW.ORBS ? G.tA.ORBS : true), {
    handleUseNow: M,
    isApplying: U
  } = (0, k.W)({
    product: n
  }), V = d(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), D = (0, X.Iw)(t), F = null != D, {
    displayPrices: z,
    checkoutEligiblePrices: K,
    shouldCheckoutWithOrbs: Y,
    hasSufficientOrbs: Q
  } = (0, ei.Ip)({
    product: t,
    isPremiumUser: p,
    tab: i,
    hasDiscountOffer: F
  });
  if (0 === z.length) return null;
  let $ = () => (0, l.jsx)(g.Button, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), V(e)
    },
    text: eo.intl.string(eo.t.FdGl5A),
    fullWidth: true
  });
  return (0, l.jsxs)("div", {
    className: ed.detailsWrapper,
    children: [(0, l.jsx)("div", {
      className: ed.innerBlur,
      children: f ? (0, l.jsx)(g.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ed.priceTag,
        children: eo.intl.string(eo.t.wu4gyV)
      }) : v || x ? (0, l.jsx)(Z.U, {
        className: ed.priceTag,
        isPartiallyPurchased: x
      }) : h ? (0, l.jsx)(g.Text, {
        variant: "text-md/semibold",
        className: ed.priceTag,
        children: eo.intl.string(eo.t.rt69oo)
      }) : (0, l.jsx)("div", {
        className: ed.priceLine,
        children: z.map((e, t) => (0, l.jsx)(W.F, {
          price: e,
          discount: y,
          discountOfferAmount: D,
          nitroIconType: p ? "default" : true,
          nitroIconSize: "md",
          className: e.currency !== ea.pKx.DISCORD_ORB || Q ? true : ed.insufficientOrbs
        }, t))
      })
    }), (0, l.jsx)("div", {
      className: ed.innerHover,
      children: (0, l.jsxs)(g.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (h && !p && !A) return (0, l.jsx)("div", {
            className: ed.hoverUpsellContainer,
            children: (0, l.jsx)(_.Z, {
              fullWidth: true,
              className: ed.__invalid_premiumSubscribeButton,
              disabled: N,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: eo.intl.string(eo.t.sEAnVH)
              },
              subscriptionTier: es.Si.TIER_2
            })
          });
          if (!w || f) return $();
          if (v) return (0, l.jsx)(g.Button, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), M()
            },
            loading: U,
            text: eo.intl.string(eo.t.MAS7uK),
            fullWidth: true
          });
          {
            if (h) {
              let e = async () => {
                b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == O ? true : O.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == O ? true : O.pageSection,
                  page_category: i === er.AW.HOME || null == O ? true : O.pageCategory,
                  page_index: i === er.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                  page_size: i === er.AW.CATALOG ? null == O ? true : O.pageSize : true,
                  tile_type: o.Z[t.type],
                  tile_position: String(null == O ? true : O.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, S.fK)(t.skuId), (0, el.Z)({
                  product: t,
                  analyticsLocations: s,
                  purchaseType: er.o8.PREMIUM_PURCHASE
                })
              };
              return (0, l.jsx)(g.Button, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: N,
                loading: T,
                loadingStartedLabel: eo.intl.string(eo.t["TYw+9s"]),
                loadingFinishedLabel: eo.intl.string(eo.t.Pg1UP5),
                text: eo.intl.string(eo.t.zp6caO),
                fullWidth: true
              })
            }
            if (Y)
              if (Q) return (0, l.jsx)(g.Button, {
                variant: "primary",
                text: eo.intl.format(eo.t.kAgx5L, {
                  orbPrice: K[0].amount,
                  orbIconHook: () => (0, l.jsx)(P.Z, {
                    className: ed.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == O ? true : O.sessionId,
                    sku_id: t.skuId,
                    page_type: i,
                    page_section: null == O ? true : O.pageSection,
                    page_category: i === er.AW.HOME || null == O ? true : O.pageCategory,
                    page_index: i === er.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                    page_size: i === er.AW.CATALOG ? null == O ? true : O.pageSize : true,
                    tile_type: o.Z[t.type],
                    tile_position: String(null == O ? true : O.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, I.qA)({
                    skuId: (0, q.S)({
                      product: t,
                      selectedVariantIndex: r
                    }),
                    onCheckoutSuccess: e => {
                      var i;
                      let {
                        entitlements: l
                      } = e;
                      (0, S.qg)({
                        variantsReturnStyle: u.v.VARIANTS_GROUP
                      }), (0, el.Z)({
                        product: t,
                        analyticsLocations: s,
                        itemConsumed: null == (i = l[0]) ? true : i.consumed,
                        purchaseType: er.o8.ORB
                      })
                    },
                    analyticsLocations: s
                  })
                },
                "aria-label": eo.intl.formatToPlainString(eo.t["fNG/05"], {
                  orbPrice: K[0].amount
                }),
                fullWidth: true
              });
              else return $();
            if (i === er.AW.ORBS) return (0, l.jsx)(g.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), V(e)
              },
              text: eo.intl.string(eo.t.GpnHfH),
              fullWidth: true
            });
            let e = F ? eo.intl.formatToPlainString(eo.t["5U5RB5"], {
              discountOfferAmount: D
            }) : eo.intl.formatToPlainString(eo.t["cNSL/j"], {
              price: R
            });
            return (0, l.jsx)(g.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == O ? true : O.sessionId,
                  sku_id: t.skuId,
                  page_type: i,
                  page_section: null == O ? true : O.pageSection,
                  page_category: i === er.AW.HOME || null == O ? true : O.pageCategory,
                  page_index: i === er.AW.CATALOG ? null == O ? true : O.pageIndex : true,
                  page_size: i === er.AW.CATALOG ? null == O ? true : O.pageSize : true,
                  tile_type: o.Z[t.type],
                  tile_position: String(null == O ? true : O.tilePosition),
                  cta_name: "buy button"
                }), (0, C.Z)({
                  skuId: (0, q.S)({
                    product: t,
                    selectedVariantIndex: r
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
        })(), B ? (0, l.jsx)(E.k0, {
          newValue: {
            pageCategory: i === er.AW.HOME || null == O ? true : O.pageCategory
          },
          children: (0, l.jsx)(H.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: r,
            returnRef: a,
            tooltipDelay: 250
          })
        }) : null]
      })
    })]
  })
}
let eC = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: i,
      category: r,
      tab: u,
      cardRef: p,
      selectedProduct: C,
      firstCollectibleItem: _,
      selectedVariantIndex: f,
      handleEntering: P,
      handleLeaving: I,
      previewingVariantIndex: S,
      className: j,
      shopBlockType: T
    } = e, {
      analyticsLocations: k
    } = (0, v.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]), w = (0, E.sp)(), Z = (0, en.G)("CollectiblesShopTallCard"), H = null != T && T === d.z.HERO && Z ? er.Ch.THUMBNAIL : er.Ch.DEFAULT, W = (0, y.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: G
    } = (0, x.Z)(p), z = (0, et.To)(t), Y = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), q = A.ZP.canUseCollectibles(i), Q = n.useMemo(() => (0, L.BH)(t, q), [t, q]), X = (0, L.G1)(t), J = (0, c.e7)([O.Z], () => (0, g.wjy)(O.Z.theme)), $ = (0, L.Yq)(t.skuId), ee = r.skuId === er.bu && (0, L.WW)(t.skuId), {
      isPurchased: el,
      isPartiallyOwnedBundle: es
    } = (0, R.L)(C), {
      isDisabled: eg
    } = (0, N.G)(C.skuId), em = null !== S ? S : f, [ev, eC] = n.useState(false), e_ = n.useCallback(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(o.Z.PROFILE_EFFECT, () => (0, l.jsx)(ec, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: n && !r
      })).with(o.Z.AVATAR_DECORATION, () => (0, l.jsx)(ep, {
        item: e,
        user: i,
        isHighlighted: t,
        isPurchased: n
      })).with(o.Z.NAMEPLATE, () => (0, l.jsx)(eh, {
        user: i,
        nameplate: e,
        isHighlighted: t,
        isPurchased: n
      })).otherwise(() => null)
    }, [i]), ef = n.useRef(null), {
      displayPrices: ey,
      isOrbExclusive: eO
    } = (0, ei.oo)({
      product: t,
      isPremiumUser: q,
      tab: u
    }), eP = n.useCallback(e => i => {
      let l = (0, ei.oQ)({
        product: t
      });
      ef.current = i.currentTarget, b.default.track(ea.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == w ? true : w.sessionId,
        sku_id: t.skuId,
        page_type: u,
        page_section: null == w ? true : w.pageSection,
        page_category: u === er.AW.HOME ? true : r.name,
        page_index: u === er.AW.CATALOG ? null == w ? true : w.pageIndex : true,
        page_size: u === er.AW.CATALOG ? null == w ? true : w.pageSize : true,
        tile_type: o.Z[t.type],
        tile_position: String(null == w ? true : w.tilePosition),
        cta_name: null
      }), (0, M.T)({
        product: t,
        category: r,
        shouldCheckoutWithOrbs: l,
        analyticsLocations: k,
        analyticsSource: e,
        returnRef: ef,
        tab: u,
        variantType: H
      })
    }, [t, r, u, k, w, H]), eI = eP(m.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ey.length || (0, L.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eb = a()(ed.badge, {
      [ed.badgeLeftAligned]: W
    });
    return (0, l.jsx)(g.tEY, {
      children: (0, l.jsxs)(g.kL8, {
        className: a()(j, J ? ed.shopCardDark : ed.shopCard, {
          [ed.partiallyOwned]: es && !G,
          [ed.shopCardAnimation]: !Y,
          [J ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: G
        }),
        ref: p,
        onClick: eI,
        "aria-label": t.name,
        children: [X && (0, l.jsx)(g.aML, {
          "data-migration-pending": true,
          tooltipContentClassName: ed.premiumWheelTooltipContent,
          color: g.aML.Colors.PRIMARY,
          text: eo.intl.string(eo.t.nKdAlO),
          children: e => {
            var t, i;
            return (0, l.jsx)(g.IGR, (t = eu({}, e), i = i = {
              className: a()(ed.premiumWheelBadge, {
                [ed.badgeLeftAligned]: W
              }),
              text: (0, l.jsx)(g.SrA, {
                size: "md",
                color: "currentColor",
                className: ed.premiumWheel
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
          className: a()(ed.limitedTimeBadge, {
            [ed.badgeLeftAligned]: W
          }),
          display: B.k.CARD,
          shopBlockType: T
        }), W && (0, l.jsx)(F.a, {
          product: t,
          selectedVariantIndex: f,
          className: ed.wishlistButton,
          isCardHovered: G
        }), es || el || !$ ? eO ? (0, l.jsx)(g.IGR, {
          text: eo.intl.string(eo.t["0TmQRG"]),
          disableColor: true,
          className: eb
        }) : ee ? (0, l.jsx)(g.IGR, {
          text: eo.intl.string(eo.t.S6kE9h),
          disableColor: true,
          className: eb
        }) : null : (0, l.jsx)(g.IGR, {
          text: eo.intl.string(eo.t.y2b7CA),
          disableColor: true,
          className: eb
        }), (0, l.jsx)("div", {
          className: a()(ed.preview, {
            [ed.previewThumbnailVariant]: H === er.Ch.THUMBNAIL
          }),
          children: (0, s.EQ)(t.type).with(o.Z.PROFILE_EFFECT, o.Z.AVATAR_DECORATION, o.Z.NAMEPLATE, () => e_(_, G, el)).with(o.Z.BUNDLE, () => (0, l.jsx)(K.d, {
            product: t,
            user: i,
            isPurchased: el,
            isHighlighted: G
          })).with(o.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[em];
            if (null == e) return null;
            let [i] = e.items;
            return e_(i, G, el, ev)
          }).with(o.Z.EXTERNAL_SKU, () => (0, l.jsx)(U.b, {
            product: t,
            animationState: G ? "on" : "off",
            className: eg || el && !G ? ed.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = el ? g.sV5 : eg ? g.mBM : null;
          return null == e ? null : (0, l.jsx)("div", {
            className: ed.cardStateIconWrapper,
            children: (0, l.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(ed.cardStateIcon, {
                [ed.checkmark]: el
              })
            })
          })
        })(), (0, l.jsxs)("div", {
          className: a()(ed.cardText, J ? ed.darkCardBackground : ed.lightCardBackground, {
            [ed.variantsGroup]: t.type === o.Z.VARIANTS_GROUP,
            [ed.thumbnailVariant]: t.type === o.Z.VARIANTS_GROUP && H === er.Ch.THUMBNAIL
          }),
          children: [(0, l.jsx)(g.Heading, {
            variant: "text-lg/bold",
            className: ed.productName,
            children: z
          }), t.type === o.Z.VARIANTS_GROUP ? H === er.Ch.DEFAULT ? (0, l.jsx)(V.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: S,
              handleEntering: P,
              handleLeaving: I
            },
            selectedVariantIndex: f,
            setIsHoveringOnSwitch: eC,
            minimal: !G,
            alternativeBackgroundColor: (null == _ ? true : _.type) === o.Z.PROFILE_EFFECT
          }) : (0, l.jsx)(D.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: S,
              handleEntering: P,
              handleLeaving: I
            },
            selectedVariantIndex: f,
            setIsHoveringOnSwitch: eC
          }) : null, (0, l.jsx)(ex, {
            product: t,
            tab: u,
            buildHandlePreviewClick: eP,
            selectedProduct: C,
            selectedVariantIndex: f,
            cardRef: p,
            analyticsLocations: k,
            isPremiumUser: q,
            isPremiumProduct: X,
            isPartiallyOwnedBundle: es,
            isPurchased: el,
            isDisabled: eg,
            discount: Q
          })]
        })]
      })
    })
  }),
  e_ = ev