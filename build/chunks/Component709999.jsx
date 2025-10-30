/** Chunk was on 95017 **/
/** chunk id: 709999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eb
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk685816 = require("./685816.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk622535 = require("./622535.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk786040 = require("./786040.js"),
  Chunk508925 = require("./508925.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk325834 = require("./325834.jsx"),
  Chunk143941 = require("./143941.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk216541 = require("./216541.jsx"),
  Chunk396728 = require("./396728.jsx"),
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
let eu = e => {
    let {
      skuId: t,
      isHighlighted: n,
      isPurchased: r
    } = e;
    return (0, a.jsx)("div", {
      className: ed.profileEffectShopPreview,
      children: (0, a.jsx)(_.Z, {
        skuId: t,
        isHighlighted: n,
        isPurchased: r && !n,
        removeSetHeight: true
      })
    })
  },
  em = e => {
    let {
      isHighlighted: t,
      isPurchased: n,
      user: r,
      item: l
    } = e;
    return (0, a.jsx)("div", {
      className: ed.avatarContainer,
      children: (0, a.jsx)(K.R, {
        item: l,
        user: r,
        isPurchased: n,
        isHighlighted: t
      })
    })
  },
  ep = e => {
    let {
      user: t,
      nameplate: n,
      isHighlighted: r,
      isPurchased: l
    } = e;
    return (0, a.jsx)("div", {
      className: ed.nameplateContainer,
      children: (0, a.jsx)(Y.Z, {
        user: t,
        nameplate: n,
        isHighlighted: r,
        isPurchased: l
      })
    })
  },
  eh = e => {
    let {
      tab: t,
      selectedProduct: n,
      cardRef: r,
      children: l
    } = e, {
      handleCardVisibilityChange: i
    } = (0, Z.E)(n.skuId, t === ei.AW.CATALOG ? "full" : t);
    return (0, a.jsx)(m.$, {
      innerRef: r,
      onChange: i,
      threshold: 0,
      children: l
    })
  },
  ex = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: n,
      onMount: l,
      shopBlockType: i
    } = e, o = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["tab", "product", "onMount", "shopBlockType"]);
    let s = (0, w.o)(n),
      c = (0, X.W)(n, s),
      d = r.useRef(null),
      {
        previewingVariantIndex: u,
        handleEntering: m,
        handleLeaving: p
      } = (0, et.f)(n),
      h = (0, ee.o)(n, u);
    return r.useEffect(() => {
      null == l || l(d, n)
    }, [l, n]), (0, a.jsx)(eh, {
      tab: t,
      selectedProduct: c,
      cardRef: d,
      children: (0, a.jsx)(ef, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        tab: t,
        product: n,
        selectedVariantIndex: s,
        selectedProduct: c,
        cardRef: d,
        previewingVariantIndex: u,
        handleEntering: m,
        handleLeaving: p,
        firstCollectibleItem: h,
        shopBlockType: i
      }, o))
    })
  });

function eg(e) {
  let {
    product: t,
    tab: n,
    selectedProduct: r,
    selectedVariantIndex: l,
    cardRef: i,
    analyticsLocations: o,
    buildHandlePreviewClick: c,
    isPremiumUser: m,
    isPremiumProduct: p,
    isPurchased: x,
    isPartiallyOwnedBundle: f,
    isDisabled: b,
    discount: _
  } = e, y = (0, P.sp)(), C = (0, k.rN)(t), [O, w] = (0, u.Wu)([I.Z], () => [I.Z.isClaiming === t.skuId, null != I.Z.isClaiming && I.Z.isClaiming !== t.skuId]), A = (0, k.XM)(r, m, false), D = (0, k.ne)({
    product: r,
    isPartiallyOwnedBundle: f,
    isPurchased: x
  }), Z = (0, $.J)(t, n === ei.AW.ORBS ? G.tA.ORBS : true), {
    handleUseNow: M,
    isApplying: F
  } = (0, R.W)({
    product: r
  }), H = c(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), z = (0, Q.Iw)(t), V = null != z, {
    displayPrices: W,
    checkoutEligiblePrices: K,
    shouldCheckoutWithOrbs: q,
    hasSufficientOrbs: Y
  } = (0, ea.Ip)({
    product: t,
    isPremiumUser: m,
    tab: n,
    hasDiscountOffer: V
  });
  if (0 === W.length) return null;
  let X = () => (0, a.jsx)(h.Button, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), H(e)
    },
    text: ec.intl.string(ec.t.FdGl5A),
    fullWidth: true
  });
  return (0, a.jsxs)("div", {
    className: ed.detailsWrapper,
    children: [(0, a.jsx)("div", {
      className: ed.innerBlur,
      children: b ? (0, a.jsx)(h.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: ed.priceTag,
        children: ec.intl.string(ec.t.wu4gyV)
      }) : x || f ? (0, a.jsx)(L.U, {
        className: ed.priceTag,
        isPartiallyPurchased: f
      }) : p ? (0, a.jsx)(h.Text, {
        variant: "text-md/semibold",
        className: ed.priceTag,
        children: ec.intl.string(ec.t.rt69oo)
      }) : (0, a.jsx)("div", {
        className: ed.priceLine,
        children: W.map((e, t) => (0, a.jsx)(B.F, {
          price: e,
          discount: _,
          discountOfferAmount: z,
          nitroIconType: m ? "default" : true,
          nitroIconSize: "md",
          className: e.currency !== eo.pKx.DISCORD_ORB || Y ? true : ed.insufficientOrbs
        }, t))
      })
    }), (0, a.jsx)("div", {
      className: ed.innerHover,
      children: (0, a.jsxs)(h.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (p && !m && !C) return (0, a.jsx)("div", {
            className: ed.hoverUpsellContainer,
            children: (0, a.jsx)(j.Z, {
              fullWidth: true,
              className: ed.__invalid_premiumSubscribeButton,
              disabled: w,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: ec.intl.string(ec.t.sEAnVH)
              },
              subscriptionTier: es.Si.TIER_2
            })
          });
          if (!D || b) return X();
          if (x) return (0, a.jsx)(h.Button, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), M()
            },
            loading: F,
            text: ec.intl.string(ec.t.MAS7uK),
            fullWidth: true
          });
          {
            if (p) {
              let e = async () => {
                T.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == y ? true : y.sessionId,
                  sku_id: t.skuId,
                  page_type: n,
                  page_section: null == y ? true : y.pageSection,
                  page_category: n === ei.AW.HOME || null == y ? true : y.pageCategory,
                  page_index: n === ei.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                  page_size: n === ei.AW.CATALOG ? null == y ? true : y.pageSize : true,
                  tile_type: s.Z[t.type],
                  tile_position: String(null == y ? true : y.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, N.fK)(t.skuId), (0, er.Z)({
                  product: t,
                  analyticsLocations: o,
                  purchaseType: ei.o8.PREMIUM_PURCHASE
                })
              };
              return (0, a.jsx)(h.Button, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: w,
                loading: O,
                loadingStartedLabel: ec.intl.string(ec.t["TYw+9s"]),
                loadingFinishedLabel: ec.intl.string(ec.t.Pg1UP5),
                text: ec.intl.string(ec.t.zp6caO),
                fullWidth: true
              })
            }
            if (q)
              if (Y) return (0, a.jsx)(h.Button, {
                variant: "primary",
                text: ec.intl.format(ec.t.kAgx5L, {
                  orbPrice: K[0].amount,
                  orbIconHook: () => (0, a.jsx)(S.Z, {
                    className: ed.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), T.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == y ? true : y.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == y ? true : y.pageSection,
                    page_category: n === ei.AW.HOME || null == y ? true : y.pageCategory,
                    page_index: n === ei.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                    page_size: n === ei.AW.CATALOG ? null == y ? true : y.pageSize : true,
                    tile_type: s.Z[t.type],
                    tile_position: String(null == y ? true : y.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, E.qA)({
                    skuId: (0, J.S)({
                      product: t,
                      selectedVariantIndex: l
                    }),
                    onCheckoutSuccess: e => {
                      var n;
                      let {
                        entitlements: a
                      } = e;
                      (0, N.qg)({
                        variantsReturnStyle: d.v.VARIANTS_GROUP
                      }), (0, er.Z)({
                        product: t,
                        analyticsLocations: o,
                        itemConsumed: null == (n = a[0]) ? true : n.consumed,
                        purchaseType: ei.o8.ORB
                      })
                    },
                    analyticsLocations: o
                  })
                },
                "aria-label": ec.intl.formatToPlainString(ec.t["fNG/05"], {
                  orbPrice: K[0].amount
                }),
                fullWidth: true
              });
              else return X();
            if (n === ei.AW.ORBS) return (0, a.jsx)(h.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), H(e)
              },
              text: ec.intl.string(ec.t.GpnHfH),
              fullWidth: true
            });
            let e = V ? ec.intl.formatToPlainString(ec.t["5U5RB5"], {
              discountOfferAmount: z
            }) : ec.intl.formatToPlainString(ec.t["cNSL/j"], {
              price: A
            });
            return (0, a.jsx)(h.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), T.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == y ? true : y.sessionId,
                  sku_id: t.skuId,
                  page_type: n,
                  page_section: null == y ? true : y.pageSection,
                  page_category: n === ei.AW.HOME || null == y ? true : y.pageCategory,
                  page_index: n === ei.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                  page_size: n === ei.AW.CATALOG ? null == y ? true : y.pageSize : true,
                  tile_type: s.Z[t.type],
                  tile_position: String(null == y ? true : y.tilePosition),
                  cta_name: "buy button"
                }), (0, v.Z)({
                  skuId: (0, J.S)({
                    product: t,
                    selectedVariantIndex: l
                  }),
                  analyticsLocations: o,
                  returnRef: i,
                  variantsReturnStyle: d.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), Z ? (0, a.jsx)(P.k0, {
          newValue: {
            pageCategory: n === ei.AW.HOME || null == y ? true : y.pageCategory
          },
          children: (0, a.jsx)(U.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: l,
            returnRef: i,
            tooltipDelay: 250
          })
        }) : null]
      })
    })]
  })
}
let ef = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: n,
      category: l,
      tab: d,
      cardRef: m,
      selectedProduct: v,
      firstCollectibleItem: j,
      selectedVariantIndex: _,
      handleEntering: S,
      handleLeaving: E,
      previewingVariantIndex: N,
      className: I,
      shopBlockType: w
    } = e, {
      analyticsLocations: R
    } = (0, f.ZP)([g.Z.COLLECTIBLES_SHOP_CARD]), Z = (0, P.sp)(), L = (0, el.G)("CollectiblesShopTallCard"), U = null != w && w === c.z.HERO && L ? ei.Ch.THUMBNAIL : ei.Ch.DEFAULT, B = (0, y.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: G
    } = (0, b.Z)(m), K = (0, en.To)(t), Y = (0, u.e7)([x.Z], () => x.Z.useReducedMotion), J = O.ZP.canUseCollectibles(n), X = r.useMemo(() => (0, k.BH)(t, J), [t, J]), Q = (0, k.G1)(t), $ = (0, u.e7)([C.Z], () => (0, h.wjy)(C.Z.theme)), {
      isPurchased: ee,
      isPartiallyOwnedBundle: et
    } = (0, D.L)(v), {
      isDisabled: er
    } = (0, A.G)(v.skuId), es = null !== N ? N : _, [eh, ex] = r.useState(false), ef = r.useCallback(function(e, t, r) {
      let l = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, o.EQ)(e.type).with(s.Z.PROFILE_EFFECT, () => (0, a.jsx)(eu, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: r && !l
      })).with(s.Z.AVATAR_DECORATION, () => (0, a.jsx)(em, {
        item: e,
        user: n,
        isHighlighted: t,
        isPurchased: r
      })).with(s.Z.NAMEPLATE, () => (0, a.jsx)(ep, {
        user: n,
        nameplate: e,
        isHighlighted: t,
        isPurchased: r
      })).otherwise(() => null)
    }, [n]), eb = r.useRef(null), {
      displayPrices: ev,
      isOrbExclusive: ej
    } = (0, ea.oo)({
      product: t,
      isPremiumUser: J,
      tab: d
    }), e_ = r.useCallback(e => n => {
      let a = (0, ea.oQ)({
        product: t
      });
      eb.current = n.currentTarget, T.default.track(eo.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Z ? true : Z.sessionId,
        sku_id: t.skuId,
        page_type: d,
        page_section: null == Z ? true : Z.pageSection,
        page_category: d === ei.AW.HOME ? true : l.name,
        page_index: d === ei.AW.CATALOG ? null == Z ? true : Z.pageIndex : true,
        page_size: d === ei.AW.CATALOG ? null == Z ? true : Z.pageSize : true,
        tile_type: s.Z[t.type],
        tile_position: String(null == Z ? true : Z.tilePosition),
        cta_name: null
      }), (0, F.T)({
        product: t,
        category: l,
        shouldCheckoutWithOrbs: a,
        analyticsLocations: R,
        analyticsSource: e,
        returnRef: eb,
        tab: d,
        variantType: U
      })
    }, [t, l, d, R, Z, U]), ey = e_(g.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ev.length || (0, k.x6)(t) && null != X && X.discountPercentage < 0) return null;
    let eC = i()(ed.badge, {
      [ed.badgeLeftAligned]: B
    });
    return (0, a.jsx)(h.tEY, {
      children: (0, a.jsxs)(h.kL8, {
        className: i()(I, $ ? ed.shopCardDark : ed.shopCard, {
          [ed.partiallyOwned]: et && !G,
          [ed.shopCardAnimation]: !Y,
          [$ ? ed.shopCardDarkHighlighted : ed.shopCardHighlighted]: G
        }),
        ref: m,
        onClick: ey,
        "aria-label": t.name,
        children: [Q && (0, a.jsx)(p.u, {
          text: ec.intl.string(ec.t.nKdAlO),
          children: (0, a.jsx)(h.IGR, {
            className: i()(ed.premiumWheelBadge, {
              [ed.badgeLeftAligned]: B
            }),
            text: (0, a.jsx)(h.SrA, {
              size: "md",
              color: "currentColor",
              className: ed.premiumWheel
            })
          })
        }), (0, a.jsx)(M.Z, {
          category: l,
          className: i()(ed.limitedTimeBadge, {
            [ed.badgeLeftAligned]: B
          }),
          display: M.k.CARD,
          shopBlockType: w
        }), B && (0, a.jsx)(W.a, {
          product: t,
          selectedVariantIndex: _,
          className: ed.wishlistButton,
          isCardHovered: G
        }), !et && !ee && (0, k.Yq)(t.skuId) ? (0, a.jsx)(h.IGR, {
          text: ec.intl.string(ec.t.y2b7CA),
          disableColor: true,
          className: eC
        }) : ej ? (0, a.jsx)(h.IGR, {
          text: ec.intl.string(ec.t["0TmQRG"]),
          disableColor: true,
          className: eC
        }) : null, (0, a.jsx)("div", {
          className: i()(ed.preview, {
            [ed.previewThumbnailVariant]: U === ei.Ch.THUMBNAIL
          }),
          children: (0, o.EQ)(t.type).with(s.Z.PROFILE_EFFECT, s.Z.AVATAR_DECORATION, s.Z.NAMEPLATE, () => ef(j, G, ee)).with(s.Z.BUNDLE, () => (0, a.jsx)(q.d, {
            product: t,
            user: n,
            isPurchased: ee,
            isHighlighted: G
          })).with(s.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[es];
            if (null == e) return null;
            let [n] = e.items;
            return ef(n, G, ee, eh)
          }).with(s.Z.EXTERNAL_SKU, () => (0, a.jsx)(H.b, {
            product: t,
            animationState: G ? "on" : "off",
            className: er || ee && !G ? ed.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = ee ? h.sV5 : er ? h.mBM : null;
          return null == e ? null : (0, a.jsx)("div", {
            className: ed.cardStateIconWrapper,
            children: (0, a.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: i()(ed.cardStateIcon, {
                [ed.checkmark]: ee
              })
            })
          })
        })(), (0, a.jsxs)("div", {
          className: i()(ed.cardText, $ ? ed.darkCardBackground : ed.lightCardBackground, {
            [ed.variantsGroup]: t.type === s.Z.VARIANTS_GROUP,
            [ed.thumbnailVariant]: t.type === s.Z.VARIANTS_GROUP && U === ei.Ch.THUMBNAIL
          }),
          children: [(0, a.jsx)(h.Heading, {
            variant: "text-lg/bold",
            className: ed.productName,
            children: K
          }), t.type === s.Z.VARIANTS_GROUP ? U === ei.Ch.DEFAULT ? (0, a.jsx)(z.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: N,
              handleEntering: S,
              handleLeaving: E
            },
            selectedVariantIndex: _,
            setIsHoveringOnSwitch: ex,
            minimal: !G,
            alternativeBackgroundColor: (null == j ? true : j.type) === s.Z.PROFILE_EFFECT
          }) : (0, a.jsx)(V.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: N,
              handleEntering: S,
              handleLeaving: E
            },
            selectedVariantIndex: _,
            setIsHoveringOnSwitch: ex
          }) : null, (0, a.jsx)(eg, {
            product: t,
            tab: d,
            buildHandlePreviewClick: e_,
            selectedProduct: v,
            selectedVariantIndex: _,
            cardRef: m,
            analyticsLocations: R,
            isPremiumUser: J,
            isPremiumProduct: Q,
            isPartiallyOwnedBundle: et,
            isPurchased: ee,
            isDisabled: er,
            discount: X
          })]
        })]
      })
    })
  }),
  eb = ex