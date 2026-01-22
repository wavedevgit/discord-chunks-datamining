/** Chunk was on 1784 **/
/** chunk id: 929400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eq
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk575593 = require("./575593.js"),
  Chunk334279 = require("./334279.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk262295 = require("./262295.jsx"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk763754 = require("./763754.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk369496 = require("./369496.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk331402 = require("./331402.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk576622 = require("./576622.js"),
  Chunk773669 = require("./773669.js"),
  Chunk151252 = require("./151252.js"),
  Chunk652165 = require("./652165.jsx"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk979286 = require("./979286.js"),
  Chunk4227 = require("./4227.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk495565 = require("./495565.js"),
  Chunk740076 = require("./740076.js"),
  Chunk466459 = require("./466459.js"),
  Chunk442759 = require("./442759.js"),
  Chunk623373 = require("./623373.js"),
  Chunk660653 = require("./660653.js"),
  Chunk778992 = require("./778992.js"),
  Chunk49620 = require("./49620.jsx"),
  Chunk586445 = require("./586445.jsx"),
  Chunk854818 = require("./854818.jsx"),
  Chunk177366 = require("./177366.js"),
  Chunk11606 = require("./11606.jsx"),
  Chunk203312 = require("./203312.jsx"),
  Chunk878112 = require("./878112.jsx"),
  Chunk501664 = require("./501664.jsx"),
  Chunk882342 = require("./882342.jsx"),
  Chunk572595 = require("./572595.jsx"),
  Chunk641405 = require("./641405.jsx"),
  Chunk812016 = require("./812016.jsx"),
  Chunk184659 = require("./184659.jsx"),
  Chunk63574 = require("./63574.jsx"),
  Chunk364616 = require("./364616.jsx"),
  Chunk846957 = require("./846957.jsx"),
  Chunk293477 = require("./293477.jsx"),
  Chunk139146 = require("./139146.jsx"),
  Chunk929283 = require("./929283.jsx"),
  Chunk827066 = require("./827066.js"),
  Chunk767503 = require("./767503.js"),
  Chunk525723 = require("./525723.js"),
  Chunk212407 = require("./212407.js"),
  Chunk347722 = require("./347722.js"),
  Chunk935094 = require("./935094.js"),
  Chunk764999 = require("./764999.js"),
  Chunk57020 = require("./57020.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk484978 = require("./484978.js");

function ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function eL(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eD = e => {
    let {
      item: t,
      product: n,
      user: a
    } = e, i = l.useRef(null), s = (0, K.aw)(n), {
      firstAvatarDecoration: c
    } = (0, Y.f5)(n);
    return t.type === o.R.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: s ? ek.X2 : ek.h1,
      children: (0, r.jsx)(eg.i, {
        user: a,
        item: t,
        isHighlighted: true
      })
    }) : t.type === o.R.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: s ? ek.ME : ek.sm,
      ref: i,
      children: (0, r.jsx)(T.A, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === o.R.NAMEPLATE ? (0, r.jsx)("div", {
      ref: i,
      className: ek.Dz,
      children: (0, r.jsx)(R.A, {
        className: ek.M4,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: c,
        isHighlighted: true
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      activeSlide: l = 0
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.g4,
      children: (0, r.jsx)(p.tN_, {
        activeSlide: String(l),
        children: t.items.map((e, l) => {
          let i = String(l),
            s = null != t.bundledProducts ? t.bundledProducts[l] : true,
            c = "(".concat(l + 1, "/").concat(a, ")");
          return (0, r.jsx)(p.q7S, {
            id: i,
            children: (0, r.jsxs)("div", {
              className: ek.Kg,
              children: [(0, r.jsx)(eD, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(p.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ek.gx,
                children: [null == s ? true : s.name, " ", c]
              })]
            })
          }, i)
        })
      })
    })
  },
  eU = e => {
    let {
      product: t,
      user: n,
      activeSlide: l
    } = e;
    return (0, K.aw)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: l
    }) : (0, eP.pQ)(t.skuId) ? (0, r.jsx)(ep.B, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eD, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(p.Text, {
      variant: "text-sm/normal",
      className: ek.CU,
      children: eC.intl.format(eC.t.Q1scdE, {
        helpdeskArticle: G.A.getArticleURL(eI.MVz.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eG = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: s,
      onClose: d,
      returnRef: h,
      previewingVariantIndexProps: g,
      selectedVariantIndex: v,
      activeBundleSlide: O,
      rentalDuration: A
    } = e, {
      analyticsLocations: y
    } = (0, j.Ay)(), N = (0, m.bG)([w.default], () => w.default.locale), _ = V.Ay.canUseCollectibles(n), {
      previewingVariantIndex: R,
      handleEntering: S,
      handleLeaving: T
    } = g, C = (0, ej.q)(t, R), k = (0, ev.r)(t, v);
    c()(null != k, "Selected product should not be null");
    let B = (0, J.h)(t),
      {
        isPurchased: U,
        isPartiallyOwnedBundle: M,
        isRented: G
      } = (0, J.h)(k),
      {
        isDisabled: q,
        disabledReason: Q
      } = (0, Z.I)(k.skuId),
      $ = (0, K.Zu)({
        product: k,
        isPartiallyOwnedBundle: M,
        isPurchased: U
      }),
      et = null != A,
      en = (0, m.bG)([z.A], () => z.A.isClaiming === (null == k ? true : k.skuId)),
      er = (0, x.Ay)(),
      eu = (0, b.Mw)(er),
      em = (0, K.G0)(k),
      ep = (0, K.yt)(k, eI.lid.DEFAULT),
      eh = (null == ep ? true : ep.amount) === 0,
      {
        firstAvatarDecoration: eg
      } = (0, Y.f5)(null != C ? C : k),
      eA = l.useMemo(() => (0, K.fT)(k, _), [k, _]),
      eN = (0, e_.dH)(k),
      ew = (0, ey.X)(k),
      {
        enabled: eL
      } = (0, L.Z)({
        location: "collectibles_shop_product_details_modal"
      }),
      eD = (0, W.r)(k, false, A),
      eB = (0, eO.V_)(t),
      eG = null != eB,
      {
        checkoutEligiblePrices: eV,
        isOrbExclusive: eH,
        hasSufficientOrbs: eF
      } = (0, eR.FI)({
        product: k,
        isPremiumUser: _,
        hasDiscountOffer: eG,
        isRental: null != A
      }),
      ez = l.useCallback(() => (0, E.A)({
        skuId: k.skuId,
        analyticsLocations: y,
        variantsReturnStyle: u.g.VARIANTS_GROUP,
        onClose: e => e ? d() : (0, eT.tE)()
      }), [y, d, k.skuId]);
    return l.useEffect(() => {
      if (null != eg) return (0, I.Dx)(eg), () => (0, I.Dx)(true)
    }, [eg]), (0, r.jsxs)("div", {
      className: ek.qA,
      children: [(0, r.jsx)("div", {
        className: ek.gn,
        children: (0, r.jsx)(ea.A, {
          category: a
        })
      }), (0, r.jsx)(eU, {
        product: null != C ? C : k,
        user: n,
        activeSlide: O
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.h_,
          children: [(0, r.jsx)(el.A, {
            product: k,
            isDarkText: !eu,
            isOrbExclusive: eH,
            rentalDuration: A
          }), (0, r.jsx)(p.Heading, {
            variant: "heading-xl/extrabold",
            className: ek.v7,
            children: eN
          }), (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eM, {
            skuId: k.skuId
          }), B.isPurchased || B.isPartiallyOwnedBundle ? (0, r.jsx)(ee.c, {
            className: ek.On,
            isPartiallyPurchased: M
          }) : em ? (0, r.jsx)(p.Text, {
            variant: "text-md/semibold",
            className: ek.On,
            children: eC.intl.string(eC.t.rt69oo)
          }) : eL ? (0, r.jsx)(ex.B, {
            prices: eV,
            product: k,
            isPremiumUser: _,
            discount: eA,
            hasSufficientOrbs: eF,
            isProductDisabled: q,
            discountOfferAmount: eB
          }) : (0, r.jsxs)("div", {
            className: ek.pw,
            children: [(0, r.jsx)(es.A, {
              product: k,
              discount: eA,
              isPremiumUser: _,
              hideStrikethroughPrice: !_ || eG,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eB
            }), _ || eG ? null : (0, r.jsx)(ec.A, {
              product: k
            })]
          })]
        }), (0, X.B1)(t) && (0, r.jsx)(p.M1G, {
          children: (0, r.jsxs)("div", {
            className: ek.Oj,
            children: [(0, r.jsx)(eb.A, {
              skuId: t.skuId,
              onVariantEnter: S,
              onVariantExit: T
            }), (0, r.jsx)(ef.A, {
              skuId: t.skuId,
              overrideVariantIndex: R
            })]
          })
        }), null !== Q && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          className: ek.H$,
          children: Q
        }), (0, r.jsx)(p.BJc, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (em && !_ && !eh) {
              let e;
              return e = eC.intl.string(eC.t.sEAnVH), (0, r.jsx)(P.A, {
                subscriptionTier: eS.pe.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eo.M,
                onSubscribeModalClose: () => {
                  (0, eo.t)({
                    product: k,
                    category: a,
                    shouldCheckoutWithOrbs: s,
                    returnRef: h,
                    analyticsLocations: y
                  })
                }
              })
            }
            if (!$) return ew ? (0, r.jsx)(ei.A, {
              primary: true,
              product: k,
              onSuccess: d,
              fullWidth: true
            }) : null;
            if (et) {
              if (U) return (0, r.jsx)(ed.A, {
                product: k,
                onSuccess: d
              })
            } else if (U && !G) return ew ? (0, r.jsxs)(p.ButtonGroup, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(ed.A, {
                product: k,
                onSuccess: d
              }), (0, r.jsx)(ei.A, {
                primary: true,
                product: k,
                onSuccess: d
              })]
            }) : (0, r.jsx)(ed.A, {
              product: k,
              onSuccess: d
            });
            return em ? (0, r.jsx)(p.Button, {
              loading: en,
              loadingStartedLabel: eC.intl.string(eC.t["TYw+9s"]),
              loadingFinishedLabel: eC.intl.string(eC.t.Pg1UP5),
              onClick: async () => {
                await (0, F.iJ)(k.skuId), d(), (0, eE.A)({
                  product: k,
                  analyticsLocations: y,
                  purchaseType: eP.gs.PREMIUM_PURCHASE
                })
              },
              text: eC.intl.string(eC.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eV.map((e, t) => {
                let n, l = 0 === t;
                if (e.currency === eT.Yr.DISCORD_ORB) {
                  let t, n, a, s;
                  if (null != A) {
                    let e, t, n, a, s, c, o;
                    return e = q ? eC.intl.string(eC.t.cTdr3x) : eC.intl.string(eC.t.zqh7ZM), t = !eF || q, n = eC.intl.formatToPlainString(eC.t.DlNs2T, {
                      orbPrice: eP.O0
                    }), a = t ? "".concat(n, ", ").concat(e) : n, s = new Date, o = null != (c = null == A ? null : s.setDate(s.getDate() + A)) ? new Date(c).toLocaleDateString(N, {
                      minute: "numeric",
                      hour: "numeric",
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    }) : null, (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(f.m, {
                        position: "top",
                        text: e,
                        shouldShow: t,
                        "aria-label": false,
                        children: (0, r.jsx)(p.Button, {
                          variant: l ? "primary" : "secondary",
                          onClick: () => {
                            (0, D.B4)({
                              skuId: k.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, F.gB)({
                                  variantsReturnStyle: u.g.VARIANTS_GROUP
                                }), d();
                                let l = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(N, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, eE.A)({
                                  product: k,
                                  analyticsLocations: y,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eP.gs.ORB,
                                  rentalDuration: A,
                                  rentalExpiresAt: l
                                })
                              },
                              analyticsLocations: y,
                              rentalDuration: A
                            })
                          },
                          disabled: t,
                          "aria-label": a,
                          text: eC.intl.format(eC.t["4NKuqc"], {
                            orbPrice: eP.O0,
                            orbIconHook: () => (0, r.jsx)(p.Cp8, {
                              className: ek.fN,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != o && (0, r.jsx)(p.Text, {
                        variant: "text-xs/normal",
                        className: i()(ek.ed, !eu && ek.un),
                        children: eC.intl.format(eC.t.pLAiJ4, {
                          date: o
                        })
                      })]
                    })
                  }
                  return t = q ? eC.intl.string(eC.t.cTdr3x) : eC.intl.string(eC.t.zqh7ZM), n = !eF || q, a = eC.intl.formatToPlainString(eC.t["fNG/05"], {
                    orbPrice: e.amount
                  }), s = n ? "".concat(a, ", ").concat(t) : a, (0, r.jsx)(f.m, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(p.Button, {
                      variant: l ? "primary" : "secondary",
                      onClick: () => {
                        (0, D.B4)({
                          skuId: k.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, F.gB)({
                              variantsReturnStyle: u.g.VARIANTS_GROUP
                            }), d(), (0, eE.A)({
                              product: k,
                              analyticsLocations: y,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eP.gs.ORB
                            })
                          },
                          analyticsLocations: y
                        })
                      },
                      disabled: n,
                      "aria-label": s,
                      text: eC.intl.format(eC.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(p.Cp8, {
                          className: ek.fN,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, K.aw)(k) ? eC.intl.string(eC.t.V1AWw0) : k.type === o.R.PROFILE_EFFECT ? eC.intl.string(eC.t.kAeDcK) : k.type === o.R.NAMEPLATE ? eC.intl.string(eC.t.H3vhqU) : eC.intl.string(eC.t.AQ0Veg), eG ? n = eC.intl.formatToPlainString(eC.t["5U5RB5"], {
                  discountOfferAmount: eB
                }) : eL && (n = eC.intl.formatToPlainString(eC.t["cNSL/j"], {
                  price: (0, H.$g)(e.amount, e.currency)
                })), (0, r.jsxs)(p.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(p.Button, {
                    variant: l ? "primary" : "secondary",
                    onClick: ez,
                    text: n,
                    fullWidth: true
                  }), ew && (0, r.jsx)(ei.A, {
                    primary: l,
                    product: k,
                    onSuccess: d
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(p.Text, {
          className: i()(ek.ed, !eu && ek.un),
          variant: "text-xxs/normal",
          children: em && !U ? eC.intl.string(eC.t.nKdAlO) : null
        })]
      })]
    })
  },
  eV = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: ek.mV,
      children: (0, r.jsx)(v.A, {
        avatar: (0, r.jsx)(p.euF, {
          src: t.avatarSrc,
          size: p._3J.SIZE_32,
          "aria-label": t.name,
          status: p.clD.ONLINE
        }),
        name: t.name,
        innerClassName: i()(ek.$L, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: l
    } = e, a = (0, _.Ov)();
    return (0, r.jsx)("div", {
      className: ek.nJ,
      role: "img",
      "aria-label": eC.intl.string(eC.t.SZeUdR),
      children: (0, r.jsxs)(p.M1G, {
        children: [(0, r.jsx)(eV, {
          user: a.mallow,
          innerClassName: ek.ab
        }), (0, r.jsxs)(p.Text, {
          variant: "text-sm/semibold",
          className: ek.OS,
          children: [eC.intl.string(eC.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eV, {
          user: a.phibi,
          innerClassName: ek.e9
        }), (0, r.jsx)("div", {
          className: ek.mV,
          children: (0, r.jsx)(R.A, {
            className: ek.M4,
            innerClassName: ek.e9,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: l
          })
        }), (0, r.jsx)(eV, {
          user: a.locke,
          innerClassName: ek.e9
        }), (0, r.jsxs)(p.Text, {
          variant: "text-sm/semibold",
          className: ek.OS,
          children: [eC.intl.string(eC.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eV, {
          user: a.boom,
          innerClassName: ek.bD
        }), (0, r.jsx)(eV, {
          user: a.cherry,
          innerClassName: ek.bD
        })]
      })
    })
  },
  eF = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: l,
      isTransitioning: a
    } = e, s = (0, m.bG)([h.A], () => h.A.useReducedMotion), c = V.Ay.canUsePremiumProfileCustomization(n), d = (0, m.cf)([B.A], () => B.A.getAllPending()), {
      pendingAvatar: u
    } = d, f = function(e, t) {
      if (null == e) return {};
      var n, r, l, a = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
      }
      if (a = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            a = Object.getOwnPropertyNames(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }(d, ["pendingAvatar"]), b = (0, C.V7)({
      userId: n.id,
      image: u
    }), p = t.type === o.R.AVATAR_DECORATION, [x] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: j,
      firstNameplate: v
    } = (0, Y.f5)(t), O = null != j, A = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.A, eL(ew({}, f), {
        pendingAvatar: b,
        user: n,
        canUsePremiumCustomization: c,
        pendingAvatarDecoration: g,
        pendingProfileEffect: j,
        disabledInputs: true,
        hideMessageInput: !O,
        hideCustomStatus: true,
        hideBioSection: p,
        hideExampleButton: true,
        interactive: false
      })), p && (0, r.jsx)(ez, {
        user: n
      })]
    }), y = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e,
      avatarDecoration: g
    });
    if (t.type === o.R.BUNDLE) {
      if (!(0, Q.W)(t)) return (0, r.jsx)("div", {
        className: ek.RA,
        children: (0, r.jsx)("div", {
          className: ek.bo,
          children: A()
        })
      });
      {
        let e = null != l ? l : 0,
          n = t.items[e],
          c = t.items[Math.max(0, e - 1)],
          d = (null == c ? true : c.type) !== (null == n ? true : n.type) && !s;
        return n.type === o.R.NAMEPLATE ? (0, r.jsx)("div", {
          className: i()(ek.Zj, a && d ? ek.p2 : ""),
          children: y(n)
        }) : (0, r.jsx)("div", {
          className: i()(ek.Ak, a && d ? ek.p2 : ""),
          children: A()
        })
      }
    }
    return null != v ? (0, r.jsx)("div", {
      className: ek.Zj,
      children: y(v)
    }) : (0, r.jsx)("div", {
      className: (null == x ? true : x.type) === o.R.AVATAR_DECORATION ? ek.RA : ek.Ak,
      children: A()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, O.rh)(eL(ew({}, (0, A.Ay)({
        author: t,
        channelId: "1337",
        content: eC.intl.string(eC.t.d5YwK5)
      })), {
        state: eI.cmJ.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eC.intl.string(eC.t["TN+ZvB"]),
      children: (0, r.jsx)(p.M1G, {
        children: (0, r.jsxs)(p.ZpM, {
          className: ek.f7,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(N.A, {
            className: ek.G5,
            author: (0, y.p_)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: ek.lG,
            children: [(0, r.jsx)(p.U1e, {
              size: "md",
              color: "currentColor",
              className: ek.hq
            }), (0, r.jsx)(p.nm2, {
              size: "md",
              color: "currentColor",
              className: ek.hq
            })]
          })]
        })
      })
    })
  },
  eq = e => {
    let {
      transitionState: t,
      onClose: n,
      product: a,
      category: s,
      returnRef: u,
      analyticsSource: f,
      analyticsLocations: b,
      shouldCheckoutWithOrbs: x,
      tab: h,
      rentalDuration: v
    } = e, O = (0, m.bG)([U.default], () => U.default.getCurrentUser()), A = (0, eN.f)(a), {
      previewingVariantIndex: y
    } = A, N = (0, q.Q)(a), _ = (0, ej.q)(a, y), R = (0, ev.r)(a, N);
    c()(null != R, "Selected product should not be null");
    let {
      analyticsLocations: E
    } = (0, j.Ay)([...b, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != v ? [g.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, er.Yr)(R.skuId);
    let P = (0, eA.U1)(s);
    l.useEffect(() => {
      null != O && (0, k.A)(O.id, O.getAvatarURL(true, 80))
    }, [O]);
    let I = l.useMemo(() => (0, K.V6)(a.type, a.skuId), [a.type, a.skuId]);
    l.useEffect(() => {
      M.default.track(eI.HAw.OPEN_MODAL, {
        type: eI.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: f,
        location_stack: E,
        sku_id: R.skuId,
        product_type: I
      }), R.items.forEach(F.RD)
    }, [f, E, R.skuId, R.items, I]);
    let S = (0, D.o6)(),
      T = t === p.ip4.EXITING,
      C = (0, eO.$R)(a),
      w = null == C ? true : C.amount,
      L = l.useMemo(() => (0, K.aw)(R) ? R.items.length : 0, [R]),
      {
        activeSlide: B,
        isTransitioning: G
      } = (0, $.X)({
        slideCount: L,
        intervalMs: 5e3
      });
    return null == O ? null : (0, r.jsx)(j.f5, {
      value: E,
      children: (0, r.jsxs)(p.EOs, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.CR,
        returnRef: u,
        transitionState: t,
        size: p.rIJ.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(p.$mQ, {
          "data-migration-pending": true,
          className: ek.jE,
          children: [(0, r.jsx)(eG, {
            user: O,
            product: a,
            category: s,
            onClose: n,
            previewingVariantIndexProps: A,
            selectedVariantIndex: N,
            shouldCheckoutWithOrbs: x,
            activeBundleSlide: B,
            rentalDuration: v
          }), (0, r.jsxs)("div", {
            className: i()(ek.i1, R.skuId === d.j.PREMIUM_TIER_2_3_DAY ? ek.bF : R.type === o.R.AVATAR_DECORATION ? ek.Jq : ek.eF),
            style: {
              backgroundImage: "url(".concat(P, ")")
            },
            children: [(0, eP.pQ)(a.skuId) ? a.skuId === eP.Dp.ORB_PROFILE_BADGE ? S || T ? null : (0, r.jsx)(em.z, {
              user: O
            }) : a.skuId === d.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.I, {}) : (0, r.jsx)(ep.B, {
              product: a,
              className: ek.Ms
            }) : (0, r.jsx)(eF, {
              user: O,
              product: null != _ ? _ : R,
              activeBundleSlide: B,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: ek.VG,
              children: [(0, r.jsx)(eh.R, {
                product: a,
                selectedVariantIndex: N,
                className: ek.ij,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(et.V, {
                skuId: R.skuId,
                tab: h
              }), (0, r.jsx)(p.K0, {
                "aria-label": eC.intl.string(eC.t.cpT0Cq),
                onClick: n,
                icon: p.d$L,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != w && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(p.jlY, {
            "data-migration-pending": true,
            className: ek.Hx,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: ek.OC
            }), (0, r.jsxs)("div", {
              className: ek.do,
              children: [(0, r.jsx)(p.Text, {
                variant: "text-sm/semibold",
                className: ek.Q2,
                children: eC.intl.format(eC.t["78ph4b"], {
                  discountOfferAmount: w
                })
              }), (null == C ? true : C.expiresAt) != null && (0, r.jsx)(en.e, {
                endDate: C.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }