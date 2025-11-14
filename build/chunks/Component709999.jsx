/** Chunk was on 91394 **/
/** chunk id: 709999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ex
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
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
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300179 = require("./300179.js");
let eo = e => {
    let {
      skuId: t,
      isHighlighted: n,
      isPurchased: l
    } = e;
    return (0, a.jsx)("div", {
      className: es.profileEffectShopPreview,
      children: (0, a.jsx)(j.Z, {
        skuId: t,
        isHighlighted: n,
        isPurchased: l && !n,
        removeSetHeight: true
      })
    })
  },
  ec = e => {
    let {
      isHighlighted: t,
      isPurchased: n,
      user: l,
      item: r
    } = e;
    return (0, a.jsx)("div", {
      className: es.avatarContainer,
      children: (0, a.jsx)(H.R, {
        item: r,
        user: l,
        isPurchased: n,
        isHighlighted: t
      })
    })
  },
  ed = e => {
    let {
      user: t,
      nameplate: n,
      isHighlighted: l,
      isPurchased: r
    } = e;
    return (0, a.jsx)("div", {
      className: es.nameplateContainer,
      children: (0, a.jsx)(K.Z, {
        user: t,
        nameplate: n,
        isHighlighted: l,
        isPurchased: r
      })
    })
  },
  eu = e => {
    let {
      tab: t,
      selectedProduct: n,
      cardRef: l,
      children: r
    } = e, {
      handleCardVisibilityChange: i
    } = (0, Z.E)(n.skuId, t === ea.AW.CATALOG ? "full" : t);
    return (0, a.jsx)(u.$, {
      innerRef: l,
      onChange: i,
      threshold: 0,
      children: r
    })
  },
  em = Chunk647438.memo(function(e) {
    var {
      tab: t,
      product: n,
      onMount: r
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, a, l = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["tab", "product", "onMount"]);
    let s = (0, w.o)(n),
      o = (0, Y.W)(n, s),
      c = l.useRef(null),
      {
        previewingVariantIndex: d,
        handleEntering: u,
        handleLeaving: m
      } = (0, $.f)(n),
      p = (0, Q.o)(n, d);
    return l.useEffect(() => {
      null == r || r(c, n)
    }, [r, n]), (0, a.jsx)(eu, {
      tab: t,
      selectedProduct: o,
      cardRef: c,
      children: (0, a.jsx)(eh, function(e) {
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
        selectedProduct: o,
        cardRef: c,
        previewingVariantIndex: d,
        handleEntering: u,
        handleLeaving: m,
        firstCollectibleItem: p
      }, i))
    })
  });

function ep(e) {
  let {
    product: t,
    tab: n,
    selectedProduct: l,
    selectedVariantIndex: r,
    cardRef: i,
    analyticsLocations: s,
    buildHandlePreviewClick: u,
    isPremiumUser: m,
    isPremiumProduct: h,
    isPurchased: g,
    isPartiallyOwnedBundle: f,
    isDisabled: j,
    discount: _
  } = e, y = (0, N.sp)(), O = (0, I.rN)(t), [w, R] = (0, d.Wu)([P.Z], () => [P.Z.isClaiming === t.skuId, null != P.Z.isClaiming && P.Z.isClaiming !== t.skuId]), A = (0, I.XM)(l, m, false), Z = (0, I.ne)({
    product: l,
    isPartiallyOwnedBundle: f,
    isPurchased: g
  }), L = (0, X.J)(t, n === ea.AW.ORBS ? B.tA.ORBS : true), {
    handleUseNow: F,
    isApplying: G
  } = (0, k.W)({
    product: l
  }), z = u(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), V = (0, J.Iw)(t), H = null != V, {
    displayPrices: W,
    checkoutEligiblePrices: K,
    shouldCheckoutWithOrbs: Y,
    hasSufficientOrbs: Q
  } = (0, et.Ip)({
    product: t,
    isPremiumUser: m,
    hasDiscountOffer: H,
    prioritizedCurrency: n === ea.AW.ORBS ? B.tA.ORBS : true
  });
  if (0 === W.length) return null;
  let $ = () => (0, a.jsx)(p.Button, {
    variant: "primary",
    onClick: e => {
      e.stopPropagation(), z(e)
    },
    text: ei.intl.string(ei.t.FdGl5A),
    fullWidth: true
  });
  return (0, a.jsxs)("div", {
    className: es.detailsWrapper,
    children: [(0, a.jsx)("div", {
      className: es.innerBlur,
      children: j ? (0, a.jsx)(p.Text, {
        tag: "div",
        variant: "heading-md/semibold",
        color: "header-muted",
        className: es.priceTag,
        children: ei.intl.string(ei.t.wu4gyV)
      }) : g || f ? (0, a.jsx)(D.U, {
        className: es.priceTag,
        isPartiallyPurchased: f
      }) : h ? (0, a.jsx)(p.Text, {
        variant: "text-md/semibold",
        className: es.priceTag,
        children: ei.intl.string(ei.t.rt69oo)
      }) : (0, a.jsx)("div", {
        className: es.priceLine,
        children: W.map((e, t) => (0, a.jsx)(U.F, {
          price: e,
          discount: _,
          discountOfferAmount: V,
          nitroIconType: m ? "default" : true,
          nitroIconSize: "md",
          className: e.currency !== el.pKx.DISCORD_ORB || Q ? true : es.insufficientOrbs
        }, t))
      })
    }), (0, a.jsx)("div", {
      className: es.innerHover,
      children: (0, a.jsxs)(p.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [(() => {
          if (h && !m && !O) return (0, a.jsx)("div", {
            className: es.hoverUpsellContainer,
            children: (0, a.jsx)(v.Z, {
              fullWidth: true,
              className: es.__invalid_premiumSubscribeButton,
              disabled: R,
              onClick: e => e.stopPropagation(),
              textOptions: {
                textOverride: ei.intl.string(ei.t.sEAnVH)
              },
              subscriptionTier: er.Si.TIER_2
            })
          });
          if (!Z || j) return $();
          if (g) return (0, a.jsx)(p.Button, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), F()
            },
            loading: G,
            text: ei.intl.string(ei.t.MAS7uK),
            fullWidth: true
          });
          {
            if (h) {
              let e = async () => {
                E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == y ? true : y.sessionId,
                  sku_id: t.skuId,
                  page_type: n,
                  page_section: null == y ? true : y.pageSection,
                  page_category: n === ea.AW.HOME || null == y ? true : y.pageCategory,
                  page_index: n === ea.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                  page_size: n === ea.AW.CATALOG ? null == y ? true : y.pageSize : true,
                  tile_type: o.Z[t.type],
                  tile_position: String(null == y ? true : y.tilePosition),
                  cta_name: "claim premium product button"
                }), await (0, T.fK)(t.skuId), (0, en.Z)({
                  product: t,
                  analyticsLocations: s,
                  purchaseType: ea.o8.PREMIUM_PURCHASE
                })
              };
              return (0, a.jsx)(p.Button, {
                variant: "primary",
                onClick: t => {
                  t.stopPropagation(), e()
                },
                disabled: R,
                loading: w,
                loadingStartedLabel: ei.intl.string(ei.t["TYw+9s"]),
                loadingFinishedLabel: ei.intl.string(ei.t.Pg1UP5),
                text: ei.intl.string(ei.t.zp6caO),
                fullWidth: true
              })
            }
            if (Y)
              if (Q) return (0, a.jsx)(p.Button, {
                variant: "primary",
                text: ei.intl.format(ei.t.kAgx5L, {
                  orbPrice: K[0].amount,
                  orbIconHook: () => (0, a.jsx)(C.Z, {
                    className: es.orbIconAligned
                  })
                }),
                onClick: e => {
                  e.stopPropagation(), E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == y ? true : y.sessionId,
                    sku_id: t.skuId,
                    page_type: n,
                    page_section: null == y ? true : y.pageSection,
                    page_category: n === ea.AW.HOME || null == y ? true : y.pageCategory,
                    page_index: n === ea.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                    page_size: n === ea.AW.CATALOG ? null == y ? true : y.pageSize : true,
                    tile_type: o.Z[t.type],
                    tile_position: String(null == y ? true : y.tilePosition),
                    cta_name: "claim with orbs button"
                  }), (0, S.qA)({
                    skuId: (0, q.S)({
                      product: t,
                      selectedVariantIndex: r
                    }),
                    onCheckoutSuccess: e => {
                      var n;
                      let {
                        entitlements: a
                      } = e;
                      (0, T.qg)({
                        variantsReturnStyle: c.v.VARIANTS_GROUP
                      }), (0, en.Z)({
                        product: t,
                        analyticsLocations: s,
                        itemConsumed: null == (n = a[0]) ? true : n.consumed,
                        purchaseType: ea.o8.ORB
                      })
                    },
                    analyticsLocations: s
                  })
                },
                "aria-label": ei.intl.formatToPlainString(ei.t["fNG/05"], {
                  orbPrice: K[0].amount
                }),
                fullWidth: true
              });
              else if (K.length > 1) return (0, a.jsx)(p.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), z(e)
              },
              text: ei.intl.string(ei.t.GpnHfH),
              fullWidth: true
            });
            else return $();
            let e = H ? ei.intl.formatToPlainString(ei.t["5U5RB5"], {
              discountOfferAmount: V
            }) : ei.intl.formatToPlainString(ei.t["cNSL/j"], {
              price: A
            });
            return (0, a.jsx)(p.Button, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == y ? true : y.sessionId,
                  sku_id: t.skuId,
                  page_type: n,
                  page_section: null == y ? true : y.pageSection,
                  page_category: n === ea.AW.HOME || null == y ? true : y.pageCategory,
                  page_index: n === ea.AW.CATALOG ? null == y ? true : y.pageIndex : true,
                  page_size: n === ea.AW.CATALOG ? null == y ? true : y.pageSize : true,
                  tile_type: o.Z[t.type],
                  tile_position: String(null == y ? true : y.tilePosition),
                  cta_name: "buy button"
                }), (0, b.Z)({
                  skuId: (0, q.S)({
                    product: t,
                    selectedVariantIndex: r
                  }),
                  analyticsLocations: s,
                  returnRef: i,
                  variantsReturnStyle: c.v.VARIANTS_GROUP
                })
              },
              text: e,
              fullWidth: true
            })
          }
        })(), L ? (0, a.jsx)(N.k0, {
          newValue: {
            pageCategory: n === ea.AW.HOME || null == y ? true : y.pageCategory
          },
          children: (0, a.jsx)(M.Z, {
            primary: true,
            product: t,
            selectedVariantIndex: r,
            returnRef: i,
            tooltipDelay: 250
          })
        }) : null]
      })
    })]
  })
}
let eh = Chunk647438.memo(function(e) {
    let {
      product: t,
      user: n,
      category: r,
      tab: c,
      cardRef: u,
      selectedProduct: b,
      firstCollectibleItem: v,
      selectedVariantIndex: j,
      handleEntering: C,
      handleLeaving: S,
      previewingVariantIndex: T,
      className: P,
      skipLimitedTimeCheck: w
    } = e, {
      analyticsLocations: k
    } = (0, g.ZP)([x.Z.COLLECTIBLES_SHOP_CARD]), Z = (0, N.sp)(), D = (0, _.Y)({
      location: "CollectiblesShopTallCard"
    }), {
      isHoveringOrFocusing: M
    } = (0, f.Z)(u), U = (0, ee.To)(t), H = (0, d.e7)([h.Z], () => h.Z.useReducedMotion), K = O.ZP.canUseCollectibles(n), q = l.useMemo(() => (0, I.BH)(t, K), [t, K]), Y = (0, I.G1)(t), J = (0, d.e7)([y.Z], () => (0, p.wjy)(y.Z.theme)), {
      isPurchased: X,
      isPartiallyOwnedBundle: Q
    } = (0, A.L)(b), {
      isDisabled: $
    } = (0, R.G)(b.skuId), en = null !== T ? T : j, [er, eu] = l.useState(false), em = l.useCallback(function(e, t, l) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      return (0, s.EQ)(e.type).with(o.Z.PROFILE_EFFECT, () => (0, a.jsx)(eo, {
        isHighlighted: t,
        skuId: e.skuId,
        isPurchased: l && !r
      })).with(o.Z.AVATAR_DECORATION, () => (0, a.jsx)(ec, {
        item: e,
        user: n,
        isHighlighted: t,
        isPurchased: l
      })).with(o.Z.NAMEPLATE, () => (0, a.jsx)(ed, {
        user: n,
        nameplate: e,
        isHighlighted: t,
        isPurchased: l
      })).otherwise(() => null)
    }, [n]), eh = l.useRef(null), {
      displayPrices: ex,
      isOrbExclusive: eg
    } = (0, et.oo)({
      product: t,
      isPremiumUser: K,
      prioritizedCurrency: c === ea.AW.ORBS ? B.tA.ORBS : true
    }), ef = l.useCallback(e => n => {
      let a = (0, et.oQ)({
        product: t
      });
      eh.current = n.currentTarget, E.default.track(el.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == Z ? true : Z.sessionId,
        sku_id: t.skuId,
        page_type: c,
        page_section: null == Z ? true : Z.pageSection,
        page_category: c === ea.AW.HOME ? true : r.name,
        page_index: c === ea.AW.CATALOG ? null == Z ? true : Z.pageIndex : true,
        page_size: c === ea.AW.CATALOG ? null == Z ? true : Z.pageSize : true,
        tile_type: o.Z[t.type],
        tile_position: String(null == Z ? true : Z.tilePosition),
        cta_name: null
      }), (0, F.T)({
        product: t,
        category: r,
        shouldCheckoutWithOrbs: a,
        analyticsLocations: k,
        analyticsSource: e,
        returnRef: eh,
        tab: c
      })
    }, [t, r, c, k, Z]), eb = ef(x.Z.COLLECTIBLES_SHOP_CARD);
    if (0 === ex.length || (0, I.x6)(t) && null != q && q.discountPercentage < 0) return null;
    let ev = i()(es.badge, {
      [es.badgeLeftAligned]: D
    });
    return (0, a.jsx)(p.tEY, {
      children: (0, a.jsxs)(p.kL8, {
        className: i()(P, J ? es.shopCardDark : es.shopCard, {
          [es.partiallyOwned]: Q && !M,
          [es.shopCardAnimation]: !H,
          [J ? es.shopCardDarkHighlighted : es.shopCardHighlighted]: M
        }),
        ref: u,
        onClick: eb,
        "aria-label": t.name,
        children: [Y && (0, a.jsx)(m.u, {
          text: ei.intl.string(ei.t.nKdAlO),
          children: (0, a.jsx)(p.IGR, {
            className: i()(es.premiumWheelBadge, {
              [es.badgeLeftAligned]: D
            }),
            text: (0, a.jsx)(p.SrA, {
              size: "md",
              color: "currentColor",
              className: es.premiumWheel
            })
          })
        }), !w && (0, a.jsx)(L.Z, {
          category: r,
          className: i()(es.limitedTimeBadge, {
            [es.badgeLeftAligned]: D
          })
        }), D && (0, a.jsx)(V.a, {
          product: t,
          selectedVariantIndex: j,
          className: es.wishlistButton,
          isCardHovered: M
        }), !Q && !X && (0, I.Yq)(t.skuId) ? (0, a.jsx)(p.IGR, {
          text: ei.intl.string(ei.t.y2b7CA),
          disableColor: true,
          className: ev
        }) : eg ? (0, a.jsx)(p.IGR, {
          text: ei.intl.string(ei.t["0TmQRG"]),
          disableColor: true,
          className: ev
        }) : null, (0, a.jsx)("div", {
          className: es.preview,
          children: (0, s.EQ)(t.type).with(o.Z.PROFILE_EFFECT, o.Z.AVATAR_DECORATION, o.Z.NAMEPLATE, () => em(v, M, X)).with(o.Z.BUNDLE, () => (0, a.jsx)(W.d, {
            product: t,
            user: n,
            isPurchased: X,
            isHighlighted: M
          })).with(o.Z.VARIANTS_GROUP, () => {
            if (null == t.variants || 0 === t.variants.length) return null;
            let e = t.variants[en];
            if (null == e) return null;
            let [n] = e.items;
            return em(n, M, X, er)
          }).with(o.Z.EXTERNAL_SKU, () => (0, a.jsx)(G.b, {
            product: t,
            animationState: M ? "on" : "off",
            className: $ || X && !M ? es.externalProductDimmed : true
          })).otherwise(() => null)
        }), (() => {
          let e = X ? p.sV5 : $ ? p.mBM : null;
          return null == e ? null : (0, a.jsx)("div", {
            className: es.cardStateIconWrapper,
            children: (0, a.jsx)(e, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: i()(es.cardStateIcon, {
                [es.checkmark]: X
              })
            })
          })
        })(), (0, a.jsxs)("div", {
          className: i()(es.cardText, J ? es.darkCardBackground : es.lightCardBackground, {
            [es.variantsGroup]: t.type === o.Z.VARIANTS_GROUP
          }),
          children: [(0, a.jsx)(p.Heading, {
            variant: "text-lg/bold",
            className: es.productName,
            children: U
          }), t.type === o.Z.VARIANTS_GROUP ? (0, a.jsx)(z.P, {
            variantGroupProduct: t,
            previewingVariantIndexProps: {
              previewingVariantIndex: T,
              handleEntering: C,
              handleLeaving: S
            },
            selectedVariantIndex: j,
            setIsHoveringOnSwitch: eu,
            minimal: !M,
            alternativeBackgroundColor: (null == v ? true : v.type) === o.Z.PROFILE_EFFECT
          }) : null, (0, a.jsx)(ep, {
            product: t,
            tab: c,
            buildHandlePreviewClick: ef,
            selectedProduct: b,
            selectedVariantIndex: j,
            cardRef: u,
            analyticsLocations: k,
            isPremiumUser: K,
            isPremiumProduct: Y,
            isPartiallyOwnedBundle: Q,
            isPurchased: X,
            isDisabled: $,
            discount: q
          })]
        })]
      })
    })
  }),
  ex = em