/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => eb
}), r(47120), r(627341);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(512722),
  s = r.n(a),
  c = r(278074),
  u = r(873546),
  d = r(180650),
  p = r(979554),
  f = r(399606),
  b = r(622535),
  h = r(481060),
  m = r(727637),
  C = r(607070),
  g = r(100527),
  v = r(906732),
  x = r(693728),
  j = r(333867),
  _ = r(197115),
  y = r(876917),
  O = r(210887),
  k = r(822857),
  P = r(960919),
  S = r(74538),
  E = r(335131),
  w = r(1870),
  L = r(429368),
  I = r(884697),
  N = r(664018),
  T = r(228624),
  B = r(635552),
  Z = r(905357),
  F = r(724994),
  A = r(297651),
  R = r(390698),
  W = r(813083),
  D = r(680942),
  H = r(558060),
  M = r(237031),
  V = r(508925),
  U = r(385797),
  G = r(453713),
  z = r(616066),
  q = r(216541),
  K = r(22267),
  Y = r(67409),
  $ = r(58201),
  J = r(201964),
  X = r(361110),
  Q = r(956472),
  ee = r(832149),
  et = r(474936),
  er = r(231338),
  en = r(388032),
  el = r(661252);

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function ea(e, t) {
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
}
let es = e => {
    var {
      children: t,
      onClick: r
    } = e, l = ea(e, ["children", "onClick"]);
    return (0, n.jsx)(h.zxk, eo(ei({
      fullWidth: !0,
      look: h.zxk.Looks.FILLED,
      innerClassName: el.cardButtonInner,
      onClick: e => {
        e.stopPropagation(), r(e)
      }
    }, l), {
      children: t
    }))
  },
  ec = e => {
    var {
      className: t
    } = e, r = ea(e, ["className"]);
    return (0, n.jsx)(h.zxk, eo(ei({
      color: h.Ttl.BRAND,
      look: h.zxk.Looks.FILLED,
      size: h.PhG.ICON,
      className: o()(el.previewButton, t),
      innerClassName: el.previewButtonInner,
      "aria-label": en.NW.string(en.t.SKNnqq)
    }, r), {
      children: (0, n.jsx)(h.tEF, {
        size: "md",
        color: "currentColor"
      })
    }))
  },
  eu = e => {
    let {
      profileEffectId: t,
      isHighlighted: r,
      isPurchased: l
    } = e;
    return (0, n.jsx)("div", {
      className: el.profileEffectShopPreview,
      children: (0, n.jsx)(y.Z, {
        profileEffectId: t,
        isHovering: r,
        isPurchased: l && !r,
        removeSetHeight: !0
      })
    })
  },
  ed = e => {
    let {
      isStormMysteryItem: t,
      isHighlighted: r,
      isPurchased: l,
      user: i,
      item: a
    } = e;
    return (0, n.jsx)("div", {
      className: o()(el.avatarContainer, t && el.mysteryAvatarContainer),
      children: (0, n.jsx)(z.R, {
        item: a,
        user: i,
        isPurchased: l,
        isHighlighted: r
      })
    })
  },
  ep = e => {
    let {
      isDarkTheme: t
    } = e;
    return (0, n.jsx)(x.Z, {
      avatarSize: h.EFr.SIZE_32,
      className: o()(el.nameplatePreviewSampleItem, el.placeholderItem),
      childrenClassName: t ? el.placeholderItemChildrenDark : el.placeholderItemChildrenLight,
      doNotAnimate: !0
    })
  },
  ef = e => {
    let {
      user: t,
      isDarkTheme: r,
      nameplate: l,
      isHighlighted: i
    } = e;
    return (0, n.jsx)("div", {
      className: el.nameplatePreviewRootContainer,
      children: (0, n.jsxs)("div", {
        className: el.nameplatePreviewList,
        children: [(0, n.jsx)(ep, {
          isDarkTheme: r
        }), (0, n.jsx)(ep, {
          isDarkTheme: r
        }), (0, n.jsx)(K.Z, {
          user: t,
          nameplate: l,
          className: el.nameplatePreviewSampleItem,
          isHighlighted: i,
          showWumpus: !i
        }), (0, n.jsx)(ep, {
          isDarkTheme: r
        }), (0, n.jsx)(ep, {
          isDarkTheme: r
        })]
      })
    })
  },
  eb = function(e) {
    let {
      product: t,
      user: r,
      category: i,
      onMount: a,
      isGiftEasterEggEnabled: x,
      isInFeedView: y,
      tab: z
    } = e, {
      analyticsLocations: K
    } = (0, v.ZP)([...y ? [g.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : [], g.Z.COLLECTIBLES_SHOP_CARD]), ea = l.useRef(null), ep = (0, m.Z)(ea), [eb, eh] = l.useState(!1), em = ep || eb, eC = (0, X.f)(t), {
      previewingVariantIndex: eg
    } = eC, ev = (0, Z.T)(t), ex = (0, f.e7)([C.Z], () => C.Z.useReducedMotion), ej = S.ZP.canUseCollectibles(r), e_ = l.useMemo(() => (0, I.BH)(t, ej), [t, ej]), ey = (0, I.G1)(t), eO = (0, I.rN)(t), [ek, eP, eS] = (0, f.Wu)([w.Z], () => [w.Z.isClaiming === t.skuId, null != w.Z.isClaiming && w.Z.isClaiming !== t.skuId, w.Z.purchases]), eE = (0, J.o)(t, eS, eg), ew = (0, f.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)), eL = (0, I.Yq)(t.skuId), eI = i.skuId === d.T.ANIME_V3 && (0, I.WW)(t.skuId), {
      hoverVariant: eN
    } = (0, N.E)("CollectiblesShopTallCard"), eT = i.skuId === d.T.STORM && "1268362891946627103" === t.skuId, eB = (0, T.hv)("CollectiblesShopTallCard"), eZ = (0, L.o)(t, eS), eF = (0, $.W)(t, eZ), eA = (0, I.XM)(eF, ej, !1), {
      isPurchased: eR,
      isPartiallyOwnedBundle: eW
    } = (0, F.L)(eF), eD = null !== eg ? eg : eZ, [eH, eM] = l.useState(!1), {
      enabled: eV
    } = (0, k.W)({
      location: "collectibles_shop_tall_card"
    }), {
      handleCardVisibilityChange: eU
    } = (0, A.E)(eF.skuId, y ? "home" : "full");
    l.useEffect(() => {
      let {
        current: e
      } = ea;
      if (null == e) return;
      let t = () => eh(!0),
        r = t => {
          e.contains(t.relatedTarget) || eh(!1)
        };
      return e.addEventListener("focusin", t), e.addEventListener("focusout", r), e.blur(), () => {
        e.removeEventListener("focusin", t), e.removeEventListener("focusout", r)
      }
    }, []), l.useEffect(() => {
      null == a || a(ea)
    }, [a]);
    let eG = l.useRef(null),
      {
        handleUseNow: ez,
        isApplying: eq
      } = (0, B.W)({
        product: eF
      }),
      {
        displayPrices: eK,
        checkoutEligiblePrices: eY,
        isOrbExclusive: e$,
        shouldCheckoutWithOrbs: eJ
      } = (0, Q.Ip)({
        product: t,
        isPremiumUser: ej,
        tab: z
      }),
      eX = e => r => {
        eG.current = r.currentTarget, (0, M.T)({
          product: t,
          category: i,
          shouldCheckoutWithOrbs: eJ,
          analyticsLocations: K,
          analyticsSource: e,
          returnRef: eG,
          tab: z
        })
      },
      eQ = eX(g.Z.COLLECTIBLES_SHOP_CARD),
      e1 = eX(g.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
      e0 = () => (0, n.jsx)("div", {
        className: el.hoverUpsellContainer,
        children: (0, n.jsx)(_.Z, {
          fullWidth: !0,
          className: el.__invalid_premiumSubscribeButton,
          disabled: eP,
          onClick: e => e.stopPropagation(),
          buttonText: en.NW.string(en.t.sEAnVF),
          subscriptionTier: et.Si.TIER_2
        })
      });
    if (0 === eK.length) return null;
    let e2 = () => ey || u.tq ? null : eO ? (0, n.jsx)(ec, {
      onClick: e1
    }) : (0, n.jsx)(D.Z, {
      product: t,
      selectedVariantIndex: eZ,
      returnRef: ea,
      isGiftEasterEggEnabled: x,
      disableCustomColor: !0,
      tooltipDelay: 250
    });
    return (0, I.x6)(t) && null != e_ && e_.discountPercentage < 0 ? null : (0, n.jsx)(b.$, {
      onChange: eU,
      threshold: 0,
      children: (0, n.jsx)(h.tEY, {
        children: (0, n.jsxs)(h.kL8, {
          className: o()(ew ? el.shopCardDark : el.shopCard, {
            [el.partiallyOwned]: eW && !em,
            [el.shopCardAnimation]: !ex && eN !== N.D.NO_MOVEMENT,
            [ew ? el.shopCardDarkHighlighted : el.shopCardHighlighted]: em,
            [el.mysteryShopCard]: eT
          }),
          ref: ea,
          onClick: eQ,
          "aria-label": t.name,
          children: [ey && (0, n.jsx)(h.ua7, {
            tooltipContentClassName: el.premiumWheelTooltipContent,
            color: h.ua7.Colors.PRIMARY,
            text: en.NW.string(en.t.O2K0xM),
            children: e => (0, n.jsx)(h.IGR, eo(ei({}, e), {
              className: el.premiumWheelBadge,
              text: (0, n.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: el.premiumWheel
              })
            }))
          }), (0, n.jsx)("div", {
            className: el.preview,
            children: (0, c.EQ)(t.type).with(p.Z.PROFILE_EFFECT, () => (0, n.jsx)(eu, {
              isHighlighted: em,
              profileEffectId: eE.id,
              isPurchased: eR
            })).with(p.Z.AVATAR_DECORATION, () => (s()(eE.type === p.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)(ed, {
              item: eE,
              user: r,
              isStormMysteryItem: eT,
              isHighlighted: em,
              isPurchased: eR
            }))).with(p.Z.NAMEPLATE, () => (0, n.jsx)(ef, {
              user: r,
              isDarkTheme: ew,
              nameplate: eE,
              isHighlighted: em
            })).with(p.Z.BUNDLE, () => (0, n.jsx)(q.d, {
              product: t,
              user: r,
              isPurchased: eR,
              isHighlighted: em
            })).with(p.Z.VARIANTS_GROUP, () => {
              if (null == t.variants || 0 === t.variants.length) return null;
              let e = t.variants[eD];
              return null == e ? null : (0, c.EQ)(e.type).with(p.Z.PROFILE_EFFECT, () => {
                let [t] = e.items;
                return (0, n.jsx)(eu, {
                  isHighlighted: em,
                  profileEffectId: t.id,
                  isPurchased: eR && !eH
                })
              }).with(p.Z.AVATAR_DECORATION, () => {
                let [t] = e.items;
                return s()(t.type === p.Z.AVATAR_DECORATION, "ts-match already checked the type"), (0, n.jsx)(ed, {
                  item: t,
                  user: r,
                  isStormMysteryItem: eT,
                  isHighlighted: em,
                  isPurchased: eR
                })
              }).otherwise(() => null)
            }).with(p.Z.EXTERNAL_SKU, () => (0, n.jsx)(V.b, {
              product: t
            })).otherwise(() => null)
          }), eR ? (0, n.jsx)("div", {
            className: el.checkmarkWrapper,
            children: (0, n.jsx)(h.sV5, {
              size: "custom",
              color: "currentColor",
              width: 38,
              height: 38,
              className: el.checkmark
            })
          }) : null, (0, n.jsxs)("div", {
            className: o()(el.cardText, ew ? el.darkCardBackground : el.lightCardBackground, {
              [el.variantsGroup]: t.type === p.Z.VARIANTS_GROUP
            }),
            children: [(0, n.jsx)(h.Text, {
              variant: "text-lg/bold",
              className: el.productName,
              children: ev
            }), t.type === p.Z.VARIANTS_GROUP ? (0, n.jsx)(G.P, {
              variantGroupProduct: t,
              previewingVariantIndexProps: eC,
              setIsHoveringOnSwitch: eM,
              purchases: eS,
              minimal: !em,
              alternativeBackgroundColor: (null == eE ? void 0 : eE.type) === p.Z.PROFILE_EFFECT
            }) : null, (0, n.jsxs)("div", {
              className: el.detailsWrapper,
              children: [(0, n.jsx)("div", {
                className: eW ? void 0 : el.innerBlur,
                children: eR || eW ? (0, n.jsx)(R.U, {
                  className: el.priceTag,
                  isPartiallyPurchased: eW
                }) : ey ? (0, n.jsx)(h.Text, {
                  variant: "text-md/semibold",
                  className: el.priceTag,
                  children: en.NW.string(en.t.rt69oq)
                }) : eV ? (0, n.jsx)(U.Z, {
                  displayPrices: eK,
                  isPremiumUser: ej
                }) : (0, n.jsx)(H.Z, {
                  product: eF,
                  discount: e_,
                  isPremiumUser: ej,
                  className: el.priceTag
                })
              }), (0, n.jsx)("div", {
                className: el.innerHover,
                children: (() => {
                  var e;
                  if (ey && !ej && !eO) return e0();
                  let r = eV && (null === (e = eY[0]) || void 0 === e ? void 0 : e.currency) === er.pK.DISCORD_ORB,
                    l = ey ? {
                      submitting: ek,
                      submittingStartedLabel: en.NW.string(en.t["TYw+9v"]),
                      submittingFinishedLabel: en.NW.string(en.t.Pg1UPz),
                      onClick: async () => {
                        await (0, E.fK)(t.skuId), (0, ee.Z)({
                          product: t,
                          analyticsLocations: K
                        })
                      }
                    } : {
                      onClick: e => {
                        r ? e1(e) : (0, j.Z)({
                          skuId: (0, Y.S)({
                            product: t,
                            selectedVariantIndex: eZ
                          }),
                          analyticsLocations: K,
                          returnRef: ea,
                          variantsReturnStyle: eB
                        })
                      }
                    };
                  return (0, n.jsxs)("div", {
                    className: el.buttonsContainer,
                    children: [eW ? null : eR ? (0, n.jsx)(es, {
                      disabled: eP,
                      onClick: ez,
                      submitting: eq,
                      children: en.NW.string(en.t.MAS7uL)
                    }) : (0, n.jsx)(es, eo(ei({
                      disabled: eP
                    }, l), {
                      children: ey ? en.NW.string(en.t.zp6caG) : r ? en.NW.format(en.t.kAgx5O, {
                        orbPrice: eY[0].amount,
                        orbIconHook: () => (0, n.jsx)(P.Z, {})
                      }) : en.NW.formatToPlainString(en.t["cNSL/v"], {
                        price: eA
                      })
                    })), e2()]
                  })
                })()
              })]
            })]
          }), (0, n.jsx)(W.Z, {
            category: i,
            className: el.limitedTimeBadge,
            display: "card"
          }), eW || eR || !eL ? e$ ? (0, n.jsx)(h.IGR, {
            text: en.NW.string(en.t.Q2K5pa),
            disableColor: !0,
            className: el.badge
          }) : eI ? (0, n.jsx)(h.IGR, {
            text: en.NW.string(en.t.S6kE9v),
            disableColor: !0,
            className: el.badge
          }) : null : (0, n.jsx)(h.IGR, {
            text: en.NW.string(en.t.y2b7CA),
            disableColor: !0,
            className: el.badge
          })]
        })
      })
    })
  }