/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => eP,
  d: () => eg
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk959840 = require("./959840.js"),
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

function ef(e) {
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
let eb = e => {
    let {
      profileEffectId: t,
      isHighlighted: r,
      isPurchased: l
    } = e;
    return (0, n.jsx)("div", {
      className: ep.profileEffectShopPreview,
      children: (0, n.jsx)(P.Z, {
        profileEffectId: t,
        isHovering: r,
        isPurchased: l && !r,
        removeSetHeight: true
      })
    })
  },
  eh = e => {
    let {
      isHighlighted: t,
      isPurchased: r,
      user: l,
      item: i
    } = e;
    return (0, n.jsx)("div", {
      className: ep.avatarContainer,
      children: (0, n.jsx)(q.R, {
        item: i,
        user: l,
        isPurchased: r,
        isHighlighted: t
      })
    })
  },
  eg = e => {
    let {
      showStatus: t,
      width: r,
      opacity: l
    } = e;
    return (0, n.jsxs)("div", {
      className: a()(ep.nameplatePreviewSampleItem, ep.placeholderItem),
      style: {
        opacity: l
      },
      children: [(0, n.jsx)(h.qEK, {
        src: null,
        size: h.EFr.SIZE_32,
        status: t ? ec.Skl.ONLINE : true,
        statusColor: "var(--border-subtle)",
        "aria-hidden": true,
        imageClassName: ep.nameplatePlaceholderAvatar
      }), (0, n.jsx)("div", {
        className: ep.placeholderBar,
        style: {
          maxWidth: null != r ? r : "100px"
        }
      })]
    })
  },
  ey = e => {
    let {
      user: t,
      nameplate: r,
      isHighlighted: l,
      isPurchased: i
    } = e;
    return (0, n.jsx)("div", {
      className: ep.nameplatePreviewRootContainer,
      children: (0, n.jsxs)("div", {
        className: ep.nameplatePreviewList,
        children: [(0, n.jsxs)("div", {
          className: ep.fadeIn,
          children: [(0, n.jsx)(eg, {
            showStatus: true,
            width: 94,
            opacity: .7
          }), (0, n.jsx)(eg, {
            showStatus: true,
            width: 110,
            opacity: .85
          })]
        }), (0, n.jsx)(J.Z, {
          user: t,
          nameplate: r,
          className: ep.nameplatePreviewSampleItem,
          isHighlighted: l,
          showPlaceholderUser: !l,
          showStatus: true,
          isPurchased: i
        }), (0, n.jsxs)("div", {
          className: ep.fadeOut,
          children: [(0, n.jsx)(eg, {
            showStatus: true,
            width: 110,
            opacity: .85
          }), (0, n.jsx)(eg, {
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
      selectedProduct: r,
      cardRef: l,
      children: i
    } = e, {
      handleCardVisibilityChange: a
    } = (0, Z.E)(r.skuId, t === es.AW.CATALOG ? "full" : t);
    return (0, n.jsx)(b.$, {
      innerRef: l,
      onChange: a,
      threshold: 0,
      children: i
    })
  },
  eO = Chunk647438.memo(function(e) {
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
    let s = (0, f.e7)([T.Z], () => T.Z.purchases),
      c = (0, N.o)(r, s),
      u = (0, $.W)(r, c),
      d = l.useRef(null),
      {
        previewingVariantIndex: p,
        handleEntering: b,
        handleLeaving: h
      } = (0, en.f)(r),
      g = (0, er.o)(r, s, p);
    return l.useEffect(() => {
      null == i || i(d, r)
    }, [i, r]), (0, n.jsx)(em, {
      tab: t,
      selectedProduct: u,
      cardRef: d,
      children: (0, n.jsx)(ej, ef({
        tab: t,
        product: r,
        selectedVariantIndex: c,
        selectedProduct: u,
        cardRef: d,
        previewingVariantIndex: p,
        handleEntering: b,
        handleLeaving: h,
        firstCollectibleItem: g,
        shopBlockType: a
      }, o))
    })
  });

function ev(e) {
  let {
    product: t,
    tab: r,
    selectedProduct: l,
    selectedVariantIndex: i,
    cardRef: a,
    analyticsLocations: o,
    buildHandlePreviewClick: c,
    isPremiumUser: d,
    isPremiumProduct: b,
    isPurchased: g,
    isPartiallyOwnedBundle: y,
    isDisabled: O,
    discount: P
  } = e, _ = (0, R.sp)(), E = (0, L.rN)(t), [A, N] = (0, f.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId]), D = (0, L.XM)(l, d, false), M = (0, L.Vw)(l, d, false), Z = (0, L.ne)({
    product: l,
    isPartiallyOwnedBundle: y,
    isPurchased: g
  }), {
    enabled: B
  } = (0, x.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: W,
    isApplying: H
  } = (0, k.W)({
    product: l
  }), Y = c(m.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), z = (0, ee.Iw)(t), K = null != z, {
    displayPrices: q,
    checkoutEligiblePrices: X,
    isOrbExclusive: J,
    shouldCheckoutWithOrbs: $,
    hasSufficientOrbs: et
  } = (0, ei.Ip)({
    product: t,
    isPremiumUser: d,
    tab: r,
    hasDiscountOffer: K
  });
  if (0 === q.length) return null;
  let er = () => (0, n.jsx)(h.zxk, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), Y(e)
    },
    text: ed.intl.string(ed.t.FdGl5O),
    fullWidth: true
  });
  return (0, n.jsxs)("div", {
    className: ep.detailsWrapper,
    children: [(0, n.jsx)("div", {
      className: ep.innerBlur,
      children: O ? (0, n.jsx)(h.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ep.priceTag,
        children: ed.intl.string(ed.t.wu4gyc)
      }) : g || y ? (0, n.jsx)(U.U, {
        className: ep.priceTag,
        isPartiallyPurchased: y
      }) : b ? (0, n.jsx)(h.Text, {
        variant: "text-md/semibold",
        className: ep.priceTag,
        children: ed.intl.string(ed.t.rt69oq)
      }) : B ? (0, n.jsx)(G.e, {
        displayPrices: q,
        isPremiumUser: d,
        discount: P,
        hasSufficientOrbs: et,
        discountOfferAmount: z
      }) : (0, n.jsx)(V.Z, {
        product: l,
        discount: P,
        isPremiumUser: d,
        className: ep.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: z
      })
    }), (0, n.jsx)("div", {
      className: ep.innerHover,
      children: (0, n.jsxs)(h.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (b && !d && !E) return (0, n.jsx)("div", {
            className: ep.hoverUpsellContainer,
            children: (0, n.jsx)(j.Z, {
              fullWidth: true,
              className: ep.__invalid_premiumSubscribeButton,
              disabled: N,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: ed.intl.string(ed.t.sEAnVF)
              },
              subscriptionTier: eu.Si.TIER_2
            })
          });
          if (!Z || O) return er();
          if (g) return (0, n.jsx)(h.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), W()
            },
            loading: H,
            text: ed.intl.string(ed.t.MAS7uL),
            fullWidth: true
          });
          {
            if (b) {
              let e = async () => {
                I.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == _ ? true : _.sessionId,
                  sku_id: t.skuId,
                  page_type: r,
                  page_section: null == _ ? true : _.pageSection,
                  page_category: r === es.AW.HOME || null == _ ? true : _.pageCategory,
                  page_index: r === es.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                  page_size: r === es.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                  tile_type: u.Z[t.type],
                  tile_position: String(null == _ ? true : _.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, w.fK)(t.skuId), (0, ea.Z)({
                  product: t,
                  analyticsLocations: o,
                  purchaseType: es.o8.PREMIUM_PURCHASE
                })
              };
              return (0, n.jsx)(h.zxk, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: N,
                loading: A,
                loadingStartedLabel: ed.intl.string(ed.t["TYw+9v"]),
                loadingFinishedLabel: ed.intl.string(ed.t.Pg1UPz),
                text: ed.intl.string(ed.t.zp6caG),
                fullWidth: true
              })
            }
            if ($)
              if (et) return (0, n.jsx)(h.zxk, {
                variant: "primary",
                text: ed.intl.format(ed.t.kAgx5O, {
                  orbPrice: X[0].amount,
                  orbIconHook: () => (0, n.jsx)(C.Z, {
                    className: ep.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), I.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == _ ? true : _.sessionId,
                    sku_id: t.skuId,
                    page_type: r,
                    page_section: null == _ ? true : _.pageSection,
                    page_category: r === es.AW.HOME || null == _ ? true : _.pageCategory,
                    page_index: r === es.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                    page_size: r === es.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                    tile_type: u.Z[t.type],
                    tile_position: String(null == _ ? true : _.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, S.qA)({
                    skuId: (0, Q.S)({
                      product: t,
                      selectedVariantIndex: i
                    }),
                    onCheckoutSuccess: e => {
                      var r;
                      let {
                        entitlements: n
                      } = e;
                      (0, w.qg)({
                        variantsReturnStyle: p.v.VARIANTS_GROUP
                      }), (0, ea.Z)({
                        product: t,
                        analyticsLocations: o,
                        itemConsumed: null == (r = n[0]) ? true : r.consumed,
                        purchaseType: es.o8.ORB
                      })
                    },
                    analyticsLocations: o
                  })
                },
                "aria-label": ed.intl.formatToPlainString(ed.t["fNG/09"], {
                  orbPrice: X[0].amount
                }),
                fullWidth: true
              });
              else return er();
            if (r === es.AW.ORBS) return (0, n.jsx)(h.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), Y(e)
              },
              text: ed.intl.string(ed.t.GpnHfH),
              fullWidth: true
            });
            let e = K ? ed.intl.formatToPlainString(ed.t["5U5RBw"], {
              discountOfferAmount: z
            }) : ed.intl.formatToPlainString(ed.t["cNSL/v"], {
              price: D
            });
            return (0, n.jsx)(h.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), I.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == _ ? true : _.sessionId,
                  sku_id: t.skuId,
                  page_type: r,
                  page_section: null == _ ? true : _.pageSection,
                  page_category: r === es.AW.HOME || null == _ ? true : _.pageCategory,
                  page_index: r === es.AW.CATALOG ? null == _ ? true : _.pageIndex : true,
                  page_size: r === es.AW.CATALOG ? null == _ ? true : _.pageSize : true,
                  tile_type: u.Z[t.type],
                  tile_position: String(null == _ ? true : _.tilePosition),
                  cta_name: "buy button"
                }), (0, v.Z)({
                  skuId: (0, Q.S)({
                    product: t,
                    selectedVariantIndex: i
                  }),
                  analyticsLocations: o,
                  returnRef: a,
                  variantsReturnStyle: p.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), b || s.tq || J || !Z || r === es.AW.ORBS || (0, L.iP)(null == M ? true : M.currency) ? null : E ? (0, n.jsx)(h.hU, {
          variant: "primary",
          "aria-label": ed.intl.string(ed.t.SKNnqq),
          icon: h.tEF,
          onClick: e => {
            e.stopPropagation(), Y(e)
          }
        }) : (0, n.jsx)(R.k0, {
          newValue: {
            pageCategory: r === es.AW.HOME || null == _ ? true : _.pageCategory
          },
          children: (0, n.jsx)(F.Z, {
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
let ej = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: r,
      category: i,
      tab: s,
      cardRef: p,
      selectedProduct: b,
      firstCollectibleItem: v,
      selectedVariantIndex: j,
      handleEntering: P,
      handleLeaving: x,
      previewingVariantIndex: C,
      className: S,
      shopBlockType: w
    } = e, {
      analyticsLocations: T
    } = (0, O.ZP)([m.Z.COLLECTIBLES_SHOP_CARD]), N = (0, R.sp)(), k = (0, eo.G)("CollectiblesShopTallCard"), Z = null != w && w === d.z.HERO && k ? es.Ch.THUMBNAIL : es.Ch.DEFAULT, U = (0, _.O)({
      location: "CollectiblesShopTallCard"
    }), F = (0, g.Z)(p), V = (0, et.m)(p), G = F || V, q = (0, el.To)(t), J = (0, f.e7)([y.Z], () => y.Z.useReducedMotion), Q = A.ZP.canUseCollectibles(r), $ = l.useMemo(() => (0, L.BH)(t, Q), [t, Q]), ee = (0, L.G1)(t), er = (0, f.e7)([E.Z], () => (0, h.wjy)(E.Z.theme)), en = (0, L.Yq)(t.skuId), ea = i.skuId === c.T.ANIME_V3 && (0, L.WW)(t.skuId), {
      isPurchased: eu,
      isPartiallyOwnedBundle: eg
    } = (0, M.L)(b), {
      isDisabled: em
    } = (0, D.G)(b.skuId), eO = null !== C ? C : j, [ej, eP] = l.useState(false), e_ = l.useCallback(function(e, t, l) {
      let i = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, o.EQ)(e.type).with(u.Z.PROFILE_EFFECT, () => (0, n.jsx)(eb, {
        isHighlighted: t,
        profileEffectId: e.id,
        isPurchased: l && !i
      })).with(u.Z.AVATAR_DECORATION, () => (0, n.jsx)(eh, {
        item: e,
        user: r,
        isHighlighted: t,
        isPurchased: l
      })).with(u.Z.NAMEPLATE, () => (0, n.jsx)(ey, {
        user: r,
        nameplate: e,
        isHighlighted: t,
        isPurchased: l
      })).otherwise(() => null)
    }, [r]), eE = l.useRef(null), {
      displayPrices: ex,
      isOrbExclusive: eC
    } = (0, ei.oo)({
      product: t,
      isPremiumUser: Q,
      tab: s
    }), eS = l.useCallback(e => r => {
      let n = (0, ei.oQ)({
        product: t
      });
      eE.current = r.currentTarget, I.default.track(ec.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == N ? true : N.sessionId,
        sku_id: t.skuId,
        page_type: s,
        page_section: null == N ? true : N.pageSection,
        page_category: s === es.AW.HOME ? true : i.name,
        page_index: s === es.AW.CATALOG ? null == N ? true : N.pageIndex : true,
        page_size: s === es.AW.CATALOG ? null == N ? true : N.pageSize : true,
        tile_type: u.Z[t.type],
        tile_position: String(null == N ? true : N.tilePosition),
        cta_name: null
      }), (0, W.T)({
        product: t,
        category: i,
        shouldCheckoutWithOrbs: n,
        analyticsLocations: T,
        analyticsSource: e,
        returnRef: eE,
        tab: s,
        variantType: Z
      })
    }, [t, i, s, T, N, Z]), eI = eS(m.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ex.length || (0, L.x6)(t) && null != $ && $.discountPercentage < 0) return null;
    let eA = a()(ep.badge, {
      [ep.badgeLeftAligned]: U
    });
    return (0, n.jsx)(h.tEY, {
      children: (0, n.jsxs)(h.kL8, {
        className: a()(S, er ? ep.shopCardDark : ep.shopCard, {
          [ep.partiallyOwned]: eg && !G,
          [ep.shopCardAnimation]: !J,
          [er ? ep.shopCardDarkHighlighted : ep.shopCardHighlighted]: G
        }),
        ref: p,
        onClick: eI,
        "aria-label": t.name,
        children: [ee && (0, n.jsx)(h.ua7, {
          tooltipContentClassName: ep.premiumWheelTooltipContent,
          color: h.ua7.Colors.PRIMARY,
          text: ed.intl.string(ed.t.nKdAlJ),
          children: e => {
            var t, r;
            return (0, n.jsx)(h.IGR, (t = ef({}, e), r = r = {
              className: a()(ep.premiumWheelBadge, {
                [ep.badgeLeftAligned]: U
              }),
              text: (0, n.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: ep.premiumWheel
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
        }), (0, n.jsx)(B.Z, {
          category: i,
          className: a()(ep.limitedTimeBadge, {
            [ep.badgeLeftAligned]: U
          }),
          display: B.k.CARD,
          shopBlockType: w
        }), U && !(0, L.x6)(t) && !eu && G && (0, n.jsx)(K.s, {
          skuId: t.skuId,
          className: ep.wishlistButton
        }), eg || eu || !en ? eC ? (0, n.jsx)(h.IGR, {
          text: ed.intl.string(ed.t["0TmQRE"]),
          disableColor: true,
          className: eA
        }) : ea ? (0, n.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.S6kE9v),
          disableColor: true,
          className: eA
        }) : null : (0, n.jsx)(h.IGR, {
          text: ed.intl.string(ed.t.y2b7CA),
          disableColor: true,
          className: eA
        }), (0, n.jsx)("div", {
          className: a()(ep.preview, {
            [ep.previewThumbnailVariant]: Z === es.Ch.THUMBNAIL
          }),
          children: (0, o.EQ)(t.type).with(u.Z.PROFILE_EFFECT, u.Z.AVATAR_DECORATION, u.Z.NAMEPLATE, () => e_(v, G, eu)).with(u.Z.BUNDLE, () => (0, n.jsx)(X.d, {
            product: t,
            user: r,
            isPurchased: eu,
            isHighlighted: G
          })).with(u.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[eO];
            if (null == e) return null;
            let [r] = e.items;
            return e_(r, G, eu, ej)
          }).with(u.Z.EXTERNAL_SKU, () => (0, n.jsx)(H.b, {
            product: t,
            animationState: G ? "on" : "off",
            className: em || eu && !G ? ep.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = eu ? h.sV5 : em ? h.mBM : null;
          return null == e ? null : (0, n.jsx)("div", {
            className: ep.cardStateIconWrapper,
            children: (0, n.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: a()(ep.cardStateIcon, {
                [ep.checkmark]: eu
              })
            })
          })
        })(), (0, n.jsxs)("div", {
          className: a()(ep.cardText, er ? ep.darkCardBackground : ep.lightCardBackground, {
            [ep.variantsGroup]: t.type === u.Z.VARIANTS_GROUP,
            [ep.thumbnailVariant]: t.type === u.Z.VARIANTS_GROUP && Z === es.Ch.THUMBNAIL
          }),
          children: [(0, n.jsx)(h.X6q, {
            variant: "text-lg/bold",
            className: ep.productName,
            children: q
          }), t.type === u.Z.VARIANTS_GROUP ? Z === es.Ch.DEFAULT ? (0, n.jsx)(Y.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: C,
              handleEntering: P,
              handleLeaving: x
            },
            selectedVariantIndex: j,
            setIsHoveringOnSwitch: eP,
            minimal: !G,
            alternativeBackgroundColor: (null == v ? true : v.type) === u.Z.PROFILE_EFFECT
          }) : (0, n.jsx)(z.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: C,
              handleEntering: P,
              handleLeaving: x
            },
            selectedVariantIndex: j,
            setIsHoveringOnSwitch: eP
          }) : null, (0, n.jsx)(ev, {
            product: t,
            tab: s,
            buildHandlePreviewClick: eS,
            selectedProduct: b,
            selectedVariantIndex: j,
            cardRef: p,
            analyticsLocations: T,
            isPremiumUser: Q,
            isPremiumProduct: ee,
            isPartiallyOwnedBundle: eg,
            isPurchased: eu,
            isDisabled: em,
            discount: $
          })]
        })]
      })
    })
  }),
  eP = eO