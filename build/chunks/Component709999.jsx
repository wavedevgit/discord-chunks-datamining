/** Chunk was on 204 **/
/** chunk id: 709999, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => ej,
  d: () => eg
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
  eg = e => {
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
  eh = e => {
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
          className: ed.nameplatePreviewSampleItem,
          isHighlighted: l,
          showPlaceholderUser: !l,
          showStatus: true,
          isPurchased: i
        }), (0, n.jsxs)("div", {
          className: ed.fadeOut,
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
    let s = (0, p.e7)([w.Z], () => w.Z.purchases),
      c = (0, N.o)(r, s),
      u = (0, Q.W)(r, c),
      d = l.useRef(null),
      {
        previewingVariantIndex: f,
        handleEntering: b,
        handleLeaving: g
      } = (0, er.f)(r),
      h = (0, et.o)(r, s, f);
    return l.useEffect(() => {
      null == i || i(d, r)
    }, [i, r]), (0, n.jsx)(ey, {
      tab: t,
      selectedProduct: u,
      cardRef: d,
      children: (0, n.jsx)(eO, ep({
        tab: t,
        product: r,
        selectedVariantIndex: c,
        selectedProduct: u,
        cardRef: d,
        previewingVariantIndex: f,
        handleEntering: b,
        handleLeaving: g,
        firstCollectibleItem: h,
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
    buildHandlePreviewClick: u,
    isPremiumUser: f,
    isPremiumProduct: g,
    isPurchased: h,
    isPartiallyOwnedBundle: m,
    isDisabled: j,
    discount: P
  } = e, _ = (0, R.sp)(), A = (0, T.rN)(t), [N, k] = (0, p.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId]), D = (0, T.XM)(l, f, false), M = (0, T.Vw)(l, f, false), U = (0, T.ne)({
    product: l,
    isPartiallyOwnedBundle: m,
    isPurchased: h
  }), {
    enabled: V
  } = (0, E.WX)({
    location: "collectibles_shop_tall_card"
  }), {
    handleUseNow: W,
    isApplying: Y
  } = (0, L.W)({
    product: l
  }), G = u(y.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), z = (0, $.Iw)(t), K = null != z, {
    displayPrices: q,
    checkoutEligiblePrices: J,
    isOrbExclusive: Q,
    shouldCheckoutWithOrbs: ee,
    hasSufficientOrbs: et
  } = (0, el.Ip)({
    product: t,
    isPremiumUser: f,
    tab: r,
    hasDiscountOffer: K
  });
  if (0 === q.length) return null;
  let er = () => (0, n.jsx)(b.zxk, {
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
      }) : h || m ? (0, n.jsx)(Z.U, {
        className: ed.priceTag,
        isPartiallyPurchased: m
      }) : g ? (0, n.jsx)(b.Text, {
        variant: "text-md/semibold",
        className: ed.priceTag,
        children: eu.intl.string(eu.t.rt69oq)
      }) : V ? (0, n.jsx)(H.e, {
        displayPrices: q,
        isPremiumUser: f,
        discount: P,
        hasSufficientOrbs: et,
        discountOfferAmount: z
      }) : (0, n.jsx)(F.Z, {
        product: l,
        discount: P,
        isPremiumUser: f,
        className: ed.priceTag,
        hideStrikethroughPrice: true,
        nitroIconType: "default",
        nitroIconSize: "md",
        discountOfferAmount: z
      })
    }), (0, n.jsx)("div", {
      className: ed.innerHover,
      children: (0, n.jsxs)(b.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (g && !f && !A) return (0, n.jsx)("div", {
            className: ed.hoverUpsellContainer,
            children: (0, n.jsx)(O.Z, {
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
          if (!U || j) return er();
          if (h) return (0, n.jsx)(b.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), W()
            },
            loading: Y,
            text: eu.intl.string(eu.t.MAS7uL),
            fullWidth: true
          });
          {
            if (g) {
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
                }), await (0, I.fK)(t.skuId), (0, ei.Z)({
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
                loading: N,
                loadingStartedLabel: eu.intl.string(eu.t["TYw+9v"]),
                loadingFinishedLabel: eu.intl.string(eu.t.Pg1UPz),
                text: eu.intl.string(eu.t.zp6caG),
                fullWidth: true
              })
            }
            if (ee)
              if (et) return (0, n.jsx)(b.zxk, {
                variant: "primary",
                text: eu.intl.format(eu.t.kAgx5O, {
                  orbPrice: J[0].amount,
                  orbIconHook: () => (0, n.jsx)(C.Z, {
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
                  }), (0, x.qA)({
                    skuId: (0, X.S)({
                      product: t,
                      selectedVariantIndex: i
                    }),
                    onCheckoutSuccess: e => {
                      var r;
                      let {
                        entitlements: n
                      } = e;
                      (0, I.qg)({
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
                  orbPrice: J[0].amount
                }),
                fullWidth: true
              });
              else return er();
            if (r === eo.AW.ORBS) return (0, n.jsx)(b.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), G(e)
              },
              text: eu.intl.string(eu.t.GpnHfH),
              fullWidth: true
            });
            let e = K ? eu.intl.formatToPlainString(eu.t["5U5RBw"], {
              discountOfferAmount: z
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
                }), (0, v.Z)({
                  skuId: (0, X.S)({
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
        })(), g || s.tq || Q || !U || r === eo.AW.ORBS || (0, T.iP)(null == M ? true : M.currency) ? null : A ? (0, n.jsx)(b.hU, {
          variant: "primary",
          "aria-label": eu.intl.string(eu.t.SKNnqq),
          icon: b.tEF,
          onClick: e => {
            e.stopPropagation(), G(e)
          }
        }) : (0, n.jsx)(R.k0, {
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
let eO = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: r,
      category: i,
      tab: s,
      cardRef: d,
      selectedProduct: f,
      firstCollectibleItem: v,
      selectedVariantIndex: O,
      handleEntering: j,
      handleLeaving: E,
      previewingVariantIndex: C,
      className: x,
      shopBlockType: I
    } = e, {
      analyticsLocations: w
    } = (0, m.ZP)([y.Z.COLLECTIBLES_SHOP_CARD]), N = (0, R.sp)(), L = (0, ea.G)("CollectiblesShopTallCard"), M = null != I && I === u.z.HERO && L ? eo.Ch.THUMBNAIL : eo.Ch.DEFAULT, Z = (0, P.Y)({
      location: "CollectiblesShopTallCard"
    }), B = (0, g.Z)(d), F = (0, ee.m)(d), H = B || F, K = (0, en.To)(t), J = (0, p.e7)([h.Z], () => h.Z.useReducedMotion), X = A.ZP.canUseCollectibles(r), Q = l.useMemo(() => (0, T.BH)(t, X), [t, X]), $ = (0, T.G1)(t), et = (0, p.e7)([_.Z], () => (0, b.wjy)(_.Z.theme)), er = (0, T.Yq)(t.skuId), ei = i.skuId === eo.bu && (0, T.WW)(t.skuId), {
      isPurchased: ec,
      isPartiallyOwnedBundle: eg
    } = (0, D.L)(f), {
      isDisabled: ey
    } = (0, k.G)(f.skuId), em = null !== C ? C : O, [eO, ej] = l.useState(false), eP = l.useCallback(function(e, t, l) {
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
      })).with(c.Z.NAMEPLATE, () => (0, n.jsx)(eh, {
        user: r,
        nameplate: e,
        isHighlighted: t,
        isPurchased: l
      })).otherwise(() => null)
    }, [r]), e_ = l.useRef(null), {
      displayPrices: eE,
      isOrbExclusive: eC
    } = (0, el.oo)({
      product: t,
      isPremiumUser: X,
      tab: s
    }), ex = l.useCallback(e => r => {
      let n = (0, el.oQ)({
        product: t
      });
      e_.current = r.currentTarget, S.default.track(es.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == N ? true : N.sessionId,
        sku_id: t.skuId,
        page_type: s,
        page_section: null == N ? true : N.pageSection,
        page_category: s === eo.AW.HOME ? true : i.name,
        page_index: s === eo.AW.CATALOG ? null == N ? true : N.pageIndex : true,
        page_size: s === eo.AW.CATALOG ? null == N ? true : N.pageSize : true,
        tile_type: c.Z[t.type],
        tile_position: String(null == N ? true : N.tilePosition),
        cta_name: null
      }), (0, V.T)({
        product: t,
        category: i,
        shouldCheckoutWithOrbs: n,
        analyticsLocations: w,
        analyticsSource: e,
        returnRef: e_,
        tab: s,
        variantType: M
      })
    }, [t, i, s, w, N, M]), eS = ex(y.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === eE.length || (0, T.x6)(t) && null != Q && Q.discountPercentage < 0) return null;
    let eA = a()(ed.badge, {
      [ed.badgeLeftAligned]: Z
    });
    return (0, n.jsx)(b.tEY, {
      children: (0, n.jsxs)(b.kL8, {
        className: a()(x, et ? ed.shopCardDark : ed.shopCard, {
          [ed.partiallyOwned]: eg && !H,
          [ed.shopCardAnimation]: !J,
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
          shopBlockType: I
        }), Z && (0, n.jsx)(z.a, {
          product: t,
          className: ed.wishlistButton,
          isCardHovered: H
        }), eg || ec || !er ? eC ? (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t["0TmQRE"]),
          disableColor: true,
          className: eA
        }) : ei ? (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t.S6kE9v),
          disableColor: true,
          className: eA
        }) : null : (0, n.jsx)(b.IGR, {
          text: eu.intl.string(eu.t.y2b7CA),
          disableColor: true,
          className: eA
        }), (0, n.jsx)("div", {
          className: a()(ed.preview, {
            [ed.previewThumbnailVariant]: M === eo.Ch.THUMBNAIL
          }),
          children: (0, o.EQ)(t.type).with(c.Z.PROFILE_EFFECT, c.Z.AVATAR_DECORATION, c.Z.NAMEPLATE, () => eP(v, H, ec)).with(c.Z.BUNDLE, () => (0, n.jsx)(q.d, {
            product: t,
            user: r,
            isPurchased: ec,
            isHighlighted: H
          })).with(c.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[em];
            if (null == e) return null;
            let [r] = e.items;
            return eP(r, H, ec, eO)
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
          }), t.type === c.Z.VARIANTS_GROUP ? M === eo.Ch.DEFAULT ? (0, n.jsx)(Y.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: C,
              handleEntering: j,
              handleLeaving: E
            },
            selectedVariantIndex: O,
            setIsHoveringOnSwitch: ej,
            minimal: !H,
            alternativeBackgroundColor: (null == v ? true : v.type) === c.Z.PROFILE_EFFECT
          }) : (0, n.jsx)(G.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: C,
              handleEntering: j,
              handleLeaving: E
            },
            selectedVariantIndex: O,
            setIsHoveringOnSwitch: ej
          }) : null, (0, n.jsx)(ev, {
            product: t,
            tab: s,
            buildHandlePreviewClick: ex,
            selectedProduct: f,
            selectedVariantIndex: O,
            cardRef: d,
            analyticsLocations: w,
            isPremiumUser: X,
            isPremiumProduct: $,
            isPartiallyOwnedBundle: eg,
            isPurchased: ec,
            isDisabled: ey,
            discount: Q
          })]
        })]
      })
    })
  }),
  ej = em