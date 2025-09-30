/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => ej,
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
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
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

function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let ef = e => {
    let {
      profileEffectId: t,
      isHighlighted: r,
      isPurchased: l
    } = e;
    return (0, n.jsx)("div", {
      className: ed.profileEffectShopPreview,
      children: (0, n.jsx)(j.Z, {
        profileEffectId: t,
        isHovering: r,
        isPurchased: l && !r,
        removeSetHeight: true
      })
    })
  },
  eb = e => {
    let {
      isHighlighted: t,
      isPurchased: r,
      user: l,
      item: i
    } = e;
    return (0, n.jsx)("div", {
      className: ed.avatarContainer,
      children: (0, n.jsx)(K.R, {
        item: i,
        user: l,
        isPurchased: r,
        isHighlighted: t
      })
    })
  },
  eh = e => {
    let {
      showStatus: t,
      width: r,
      opacity: l
    } = e;
    return (0, n.jsxs)("div", {
      className: a()(ed.nameplatePreviewSampleItem, ed.placeholderItem),
      style: {
        opacity: l
      },
      children: [(0, n.jsx)(b.qEK, {
        src: null,
        size: b.EFr.SIZE_32,
        status: t ? es.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: ed.nameplatePlaceholderAvatar
      }), (0, n.jsx)("div", {
        className: ed.placeholderBar,
        style: {
          maxWidth: null != r ? r : "100px"
        }
      })]
    })
  },
  eg = e => {
    let {
      user: t,
      nameplate: r,
      isHighlighted: l,
      isPurchased: i
    } = e;
    return (0, n.jsx)("div", {
      className: ed.nameplatePreviewRootContainer,
      children: (0, n.jsxs)("div", {
        className: ed.nameplatePreviewList,
        children: [(0, n.jsxs)("div", {
          className: ed.fadeIn,
          children: [(0, n.jsx)(eh, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, n.jsx)(eh, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, n.jsx)(X.Z, {
          user: t,
          nameplate: r,
          className: ed.nameplatePreviewSampleItem,
          isHighlighted: l,
          showPlaceholderUser: !l,
          showStatus: true,
          isPurchased: i
        }), (0, n.jsxs)("div", {
          className: ed.fadeOut,
          children: [(0, n.jsx)(eh, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, n.jsx)(eh, {
            showStatus: true,
            width: 94,
            opacity: .7
          })]
        })]
      })
    })
  },
  ey = e => {
    let {
      tab: t,
      selectedProduct: r,
      cardRef: l,
      children: i
    } = e, {
      handleCardVisibilityChange: a
    } = (0, M.E)(r.skuId, t === eo.AW.CATALOG ? "full" : t);
    return (0, n.jsx)(f.$, {
      innerRef: l,
      onChange: a,
      threshold: 0,
      children: i
    })
  },
  em = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: r,
      onMount: i,
      shopBlockType: a
    } = e, o = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["tab", "product", "onMount", "shopBlockType"]);
    let s = (0, p.e7)([T.Z], () => T.Z.purchases),
      c = (0, R.o)(r, s),
      u = (0, Q.W)(r, c),
      d = l.useRef(null),
      {
        previewingVariantIndex: f,
        handleEntering: b,
        handleLeaving: h
      } = (0, er.f)(r),
      g = (0, et.o)(r, s, f);
    return l.useEffect(() => {
      null == i || i(d, r)
    }, [i, r]), (0, n.jsx)(ey, {
      tab: t,
      selectedProduct: u,
      cardRef: d,
      children: (0, n.jsx)(ev, ep({
        tab: t,
        product: r,
        selectedVariantIndex: c,
        selectedProduct: u,
        cardRef: d,
        previewingVariantIndex: f,
        handleEntering: b,
        handleLeaving: h,
        firstCollectibleItem: g,
        shopBlockType: a
      }, o))
    })
  });

function eO(e) {
  let {
    product: t,
    tab: r,
    selectedProduct: l,
    selectedVariantIndex: i,
    cardRef: a,
    analyticsLocations: o,
    buildHandlePreviewClick: u,
    isPremiumUser: f,
    isPremiumProduct: h,
    isPurchased: g,
    isPartiallyOwnedBundle: m,
    isDisabled: j,
    discount: P
  } = e, _ = (0, w.sp)(), I = (0, N.rN)(t), [R, k] = (0, p.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]), D = (0, N.XM)(l, f, false), M = (0, N.ne)({
    product: l,
    isPartiallyOwnedBundle: m,
    isPurchased: g
  }), {
    enabled: U
  } = (0, E.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: V,
    isApplying: W
  } = (0, L.W)({
    product: l
  }), G = u(y.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), Y = (0, $.Iw)(t), z = null != Y, {
    displayPrices: K,
    checkoutEligiblePrices: q,
    isOrbExclusive: X,
    shouldCheckoutWithOrbs: Q,
    hasSufficientOrbs: ee
  } = (0, el.Ip)({
    product: t,
    isPremiumUser: f,
    tab: r,
    hasDiscountOffer: z
  });
  if (0 === K.length) return null;
  let et = () => (0, n.jsx)(b.zxk, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), G(e)
    },
    text: eu.intl.string(eu.t.FdGl5O),
    fullWidth: true
  });
  return (0, n.jsxs)("div", {
    className: ed.detailsWrapper,
    children: [(0, n.jsx)("div", {
      className: ed.innerBlur,
      children: j ? (0, n.jsx)(b.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ed.priceTag,
        children: eu.intl.string(eu.t.wu4gyc)
      }) : g || m ? (0, n.jsx)(Z.U, {
        className: ed.priceTag,
        isPartiallyPurchased: m
      }) : h ? (0, n.jsx)(b.Text, {
        variant: "text-md/semibold",
        className: ed.priceTag,
        children: eu.intl.string(eu.t.rt69oq)
      }) : U ? (0, n.jsx)(H.e, {
        displayPrices: K,
        isPremiumUser: f,
        discount: P,
        hasSufficientOrbs: ee,
        discountOfferAmount: Y
      }) : (0, n.jsx)(F.Z, {
        product: l,
        discount: P,
        isPremiumUser: f,
        className: ed.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: Y
      })
    }), (0, n.jsx)("div", {
      className: ed.innerHover,
      children: (0, n.jsxs)(b.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (h && !f && !I) return (0, n.jsx)("div", {
            className: ed.hoverUpsellContainer,
            children: (0, n.jsx)(v.Z, {
              fullWidth: true,
              className: ed.__invalid_premiumSubscribeButton,
              disabled: k,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: eu.intl.string(eu.t.sEAnVF)
              },
              subscriptionTier: ec.Si.TIER_2
            })
          });
          if (!M || j) return et();
          if (g) return (0, n.jsx)(b.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), V()
            },
            loading: W,
            text: eu.intl.string(eu.t.MAS7uL),
            fullWidth: true
          });
          {
            if (h) {
              let e = async () => {
                S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == _ ? true : _.sessionId,
                  sku_id: t.skuId,
                  page_type: r,
                  page_section: null == _ ? true : _.pageSection,
                  page_category: r === eo.AW.HOME || null == _ ? true : _.pageCategory,
                  page_index: r === eo.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                  page_size: r === eo.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                  tile_type: c.Z[t.type],
                  tile_position: String(null == _ ? true : _.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, A.fK)(t.skuId), (0, ei.Z)({
                  product: t,
                  analyticsLocations: o,
                  purchaseType: eo.o8.PREMIUM_PURCHASE
                })
              };
              return (0, n.jsx)(b.zxk, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: k,
                loading: R,
                loadingStartedLabel: eu.intl.string(eu.t["TYw+9v"]),
                loadingFinishedLabel: eu.intl.string(eu.t.Pg1UPz),
                text: eu.intl.string(eu.t.zp6caG),
                fullWidth: true
              })
            }
            if (Q)
              if (ee) return (0, n.jsx)(b.zxk, {
                variant: "primary",
                text: eu.intl.format(eu.t.kAgx5O, {
                  orbPrice: q[0].amount,
                  orbIconHook: () => (0, n.jsx)(x.Z, {
                    className: ed.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == _ ? true : _.sessionId,
                    sku_id: t.skuId,
                    page_type: r,
                    page_section: null == _ ? true : _.pageSection,
                    page_category: r === eo.AW.HOME || null == _ ? true : _.pageCategory,
                    page_index: r === eo.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                    page_size: r === eo.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                    tile_type: c.Z[t.type],
                    tile_position: String(null == _ ? true : _.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, C.qA)({
                    skuId: (0, J.S)({
                      product: t,
                      selectedVariantIndex: i
                    }),
                    onCheckoutSuccess: e => {
                      var r;
                      let {
                        entitlements: n
                      } = e;
                      (0, A.qg)({
                        variantsReturnStyle: d.v.VARIANTS_GROUP
                      }), (0, ei.Z)({
                        product: t,
                        analyticsLocations: o,
                        itemConsumed: null == (r = n[0]) ? true : r.consumed,
                        purchaseType: eo.o8.ORB
                      })
                    },
                    analyticsLocations: o
                  })
                },
                "aria-label": eu.intl.formatToPlainString(eu.t["fNG/09"], {
                  orbPrice: q[0].amount
                }),
                fullWidth: true
              });
              else return et();
            if (r === eo.AW.ORBS) return (0, n.jsx)(b.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), G(e)
              },
              text: eu.intl.string(eu.t.GpnHfH),
              fullWidth: true
            });
            let e = z ? eu.intl.formatToPlainString(eu.t["5U5RBw"], {
              discountOfferAmount: Y
            }) : eu.intl.formatToPlainString(eu.t["cNSL/v"], {
              price: D
            });
            return (0, n.jsx)(b.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == _ ? true : _.sessionId,
                  sku_id: t.skuId,
                  page_type: r,
                  page_section: null == _ ? true : _.pageSection,
                  page_category: r === eo.AW.HOME || null == _ ? true : _.pageCategory,
                  page_index: r === eo.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                  page_size: r === eo.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                  tile_type: c.Z[t.type],
                  tile_position: String(null == _ ? true : _.tilePosition),
                  cta_name: "buy button"
                }), (0, O.Z)({
                  skuId: (0, J.S)({
                    product: t,
                    selectedVariantIndex: i
                  }),
                  analyticsLocations: o,
                  returnRef: a,
                  variantsReturnStyle: d.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), h || s.tq || X || !M || r === eo.AW.ORBS ? null : I ? (0, n.jsx)(b.hU, {
          variant: "primary",
          "aria-label": eu.intl.string(eu.t.SKNnqq),
          icon: b.tEF,
          onClick: e => {
            e.stopPropagation(), G(e)
          }
        }) : (0, n.jsx)(w.k0, {
          newValue: {
            pageCategory: r === eo.AW.HOME || null == _ ? true : _.pageCategory
          },
          children: (0, n.jsx)(B.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: i,
            returnRef: a,
            tooltipDelay: 250
          })
        })]
      })
    })]
  })
}
let ev = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: r,
      category: i,
      tab: s,
      cardRef: d,
      selectedProduct: f,
      firstCollectibleItem: O,
      selectedVariantIndex: v,
      handleEntering: j,
      handleLeaving: E,
      previewingVariantIndex: x,
      className: C,
      shopBlockType: A
    } = e, {
      analyticsLocations: T
    } = (0, m.ZP)([y.Z.COLLECTIBLES_SHOP_CARD]), R = (0, w.sp)(), L = (0, ea.G)("CollectiblesShopTallCard"), M = null != A && A === u.z.HERO && L ? eo.Ch.THUMBNAIL : eo.Ch.DEFAULT, Z = (0, P.Y)({
      location: "CollectiblesShopTallCard"
    }), B = (0, h.Z)(d), F = (0, ee.m)(d), H = B || F, K = (0, en.To)(t), X = (0, p.e7)([g.Z], () => g.Z.useReducedMotion), J = I.ZP.canUseCollectibles(r), Q = l.useMemo(() => (0, N.BH)(t, J), [t, J]), $ = (0, N.G1)(t), et = (0, p.e7)([_.Z], () => (0, b.wjy)(_.Z.theme)), er = (0, N.Yq)(t.skuId), ei = i.skuId === eo.bu && (0, N.WW)(t.skuId), {
      isPurchased: ec,
      isPartiallyOwnedBundle: eh
    } = (0, D.L)(f), {
      isDisabled: ey
    } = (0, k.G)(f.skuId), em = null !== x ? x : v, [ev, ej] = l.useState(false), eP = l.useCallback(function(e, t, l) {
      let i = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, o.EQ)(e.type).with(c.Z.PROFILE_EFFECT, () => (0, n.jsx)(ef, {
        isHighlighted: t,
        profileEffectId: e.id,
        isPurchased: l && !i
      })).with(c.Z.AVATAR_DECORATION, () => (0, n.jsx)(eb, {
        item: e,
        user: r,
        isHighlighted: t,
        isPurchased: l
      })).with(c.Z.NAMEPLATE, () => (0, n.jsx)(eg, {
        user: r,
        nameplate: e,
        isHighlighted: t,
        isPurchased: l
      })).otherwise(() => null)
    }, [r]), e_ = l.useRef(null), {
      displayPrices: eE,
      isOrbExclusive: ex
    } = (0, el.oo)({
      product: t,
      isPremiumUser: J,
      tab: s
    }), eC = l.useCallback(e => r => {
      let n = (0, el.oQ)({
        product: t
      });
      e_.current = r.currentTarget, S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == R ? true : R.sessionId,
        sku_id: t.skuId,
        page_type: s,
        page_section: null == R ? true : R.pageSection,
        page_category: s === eo.AW.HOME ? true : i.name,
        page_index: s === eo.AW.CATALOG ? null == R ? true : R.pageIndex : true,
        page_size: s === eo.AW.CATALOG ? null == R ? true : R.pageSize : true,
        tile_type: c.Z[t.type],
        tile_position: String(null == R ? true : R.tilePosition),
        cta_name: null
      }), (0, V.T)({
        product: t,
        category: i,
        shouldCheckoutWithOrbs: n,
        analyticsLocations: T,
        analyticsSource: e,
        returnRef: e_,
        tab: s,
        variantType: M
      })
    }, [t, i, s, T, R, M]), eS = eC(y.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === eE.length || (0, N.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eI = a()(ed.badge, {
      [ed.badgeLeftAligned]: Z
    });
    return (0, n.jsx)(b.tEY, {
      children: (0, n.jsxs)(b.kL8, {
        className: a()(C, et ? ed.shopCardDark : ed.shopCard, {
          [ed.partiallyOwned]: eh && !H,
          [ed.shopCardAnimation]: !X,
          [et ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: H
        }),
        ref: d,
        onClick: eS,
        "aria-label": t.name,
        children: [$ && (0, n.jsx)(b.ua7, {
          tooltipContentClassName: ed.premiumWheelTooltipContent,
          color: b.ua7.Colors.PRIMARY,
          text: eu.intl.string(eu.t.nKdAlJ),
          children: e => {
            var t, r;
            return (0, n.jsx)(b.IGR, (t = ep({}, e), r = r = {
              className: a()(ed.premiumWheelBadge, {
                [ed.badgeLeftAligned]: Z
              }),
              text: (0, n.jsx)(b.SrA, {
                size: "md",
                color: "currentColor",
                className: ed.premiumWheel
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(r)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t))
          }
        }), (0, n.jsx)(U.Z, {
          category: i,
          className: a()(ed.limitedTimeBadge, {
            [ed.badgeLeftAligned]: Z
          }),
          display: U.k.CARD,
          shopBlockType: A
        }), Z && (0, n.jsx)(z.a, {
          product: t,
          className: ed.wishlistButton,
          isCardHovered: H
        }), eh || ec || !er ? ex ? (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t["0TmQRE"]),
          disableColor: true,
          className: eI
        }) : ei ? (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t.S6kE9v),
          disableColor: true,
          className: eI
        }) : null : (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t.y2b7CA),
          disableColor: true,
          className: eI
        }), (0, n.jsx)("div", {
          className: a()(ed.preview, {
            [ed.previewThumbnailVariant]: M === eo.Ch.THUMBNAIL
          }),
          children: (0, o.EQ)(t.type).with(c.Z.PROFILE_EFFECT, c.Z.AVATAR_DECORATION, c.Z.NAMEPLATE, () => eP(O, H, ec)).with(c.Z.BUNDLE, () => (0, n.jsx)(q.d, {
            product: t,
            user: r,
            isPurchased: ec,
            isHighlighted: H
          })).with(c.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[em];
            if (null == e) return null;
            let [r] = e.items;
            return eP(r, H, ec, ev)
          }).with(c.Z.EXTERNAL_SKU, () => (0, n.jsx)(W.b, {
            product: t,
            animationState: H ? "on" : "off",
            className: ey || ec && !H ? ed.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = ec ? b.sV5 : ey ? b.mBM : null;
          return null == e ? null : (0, n.jsx)("div", {
            className: ed.cardStateIconWrapper,
            children: (0, n.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(ed.cardStateIcon, {
                [ed.checkmark]: ec
              })
            })
          })
        })(), (0, n.jsxs)("div", {
          className: a()(ed.cardText, et ? ed.darkCardBackground : ed.lightCardBackground, {
            [ed.variantsGroup]: t.type === c.Z.VARIANTS_GROUP,
            [ed.thumbnailVariant]: t.type === c.Z.VARIANTS_GROUP && M === eo.Ch.THUMBNAIL
          }),
          children: [(0, n.jsx)(b.X6q, {
            variant: "text-lg/bold",
            className: ed.productName,
            children: K
          }), t.type === c.Z.VARIANTS_GROUP ? M === eo.Ch.DEFAULT ? (0, n.jsx)(G.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: x,
              handleEntering: j,
              handleLeaving: E
            },
            selectedVariantIndex: v,
            setIsHoveringOnSwitch: ej,
            minimal: !H,
            alternativeBackgroundColor: (null == O ? true : O.type) === c.Z.PROFILE_EFFECT
          }) : (0, n.jsx)(Y.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: x,
              handleEntering: j,
              handleLeaving: E
            },
            selectedVariantIndex: v,
            setIsHoveringOnSwitch: ej
          }) : null, (0, n.jsx)(eO, {
            product: t,
            tab: s,
            buildHandlePreviewClick: eC,
            selectedProduct: f,
            selectedVariantIndex: v,
            cardRef: d,
            analyticsLocations: T,
            isPremiumUser: J,
            isPremiumProduct: $,
            isPartiallyOwnedBundle: eh,
            isPurchased: ec,
            isDisabled: ey,
            discount: Q
          })]
        })]
      })
    })
  }),
  ej = em