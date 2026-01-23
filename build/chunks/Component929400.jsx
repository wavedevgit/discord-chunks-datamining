/** Chunk was on 77313 **/
/** chunk id: 929400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ez
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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
  Chunk645178 = require("./645178.js"),
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
  Chunk525723 = require("./525723.js"),
  Chunk212407 = require("./212407.js"),
  Chunk347722 = require("./347722.js"),
  Chunk935094 = require("./935094.js"),
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

function ek(e, t) {
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
let eL = e => {
    let {
      item: t,
      product: n,
      user: i
    } = e, a = l.useRef(null), s = (0, W.aw)(n), {
      firstAvatarDecoration: o
    } = (0, X.f5)(n);
    return t.type === c.R.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: s ? eS.X2 : eS.h1,
      children: (0, r.jsx)(eb.i, {
        user: i,
        item: t,
        isHighlighted: true
      })
    }) : t.type === c.R.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: s ? eS.ME : eS.sm,
      ref: a,
      children: (0, r.jsx)(C.A, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === c.R.NAMEPLATE ? (0, r.jsx)("div", {
      ref: a,
      className: eS.Dz,
      children: (0, r.jsx)(P.A, {
        className: eS.M4,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: o,
        isHighlighted: true
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      activeSlide: l = 0
    } = e, i = t.items.length;
    return (0, r.jsx)("div", {
      className: eS.g4,
      children: (0, r.jsx)(x.tN_, {
        activeSlide: String(l),
        children: t.items.map((e, l) => {
          let a = String(l),
            s = null != t.bundledProducts ? t.bundledProducts[l] : true,
            o = "(".concat(l + 1, "/").concat(i, ")");
          return (0, r.jsx)(x.q7S, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eS.Kg,
              children: [(0, r.jsx)(eL, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(x.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eS.gx,
                children: [null == s ? true : s.name, " ", o]
              })]
            })
          }, a)
        })
      })
    })
  },
  eD = e => {
    let {
      product: t,
      user: n,
      activeSlide: l
    } = e;
    return (0, W.aw)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: l
    }) : (0, eR.pQ)(t.skuId) ? (0, r.jsx)(eh.B, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eL, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eU = e => {
    let {
      skuId: t
    } = e;
    return t === u.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(x.Text, {
      variant: "text-sm/normal",
      className: eS.CU,
      children: eC.intl.format(eC.t.Q1scdE, {
        helpdeskArticle: M.A.getArticleURL(eI.MVz.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eG = e => {
    let {
      product: t,
      user: n,
      category: i,
      shouldCheckoutWithOrbs: s,
      onClose: u,
      returnRef: v,
      previewingVariantIndexProps: g,
      selectedVariantIndex: j,
      activeBundleSlide: A,
      rentalDuration: _
    } = e, {
      analyticsLocations: O
    } = (0, b.Ay)(), y = (0, m.bG)([k.default], () => k.default.locale), N = H.Ay.canUseCollectibles(n), {
      previewingVariantIndex: P,
      handleEntering: T,
      handleLeaving: C
    } = g, S = (0, ej.q)(t, P), w = (0, Q.rb)(t, j);
    o()(null != w, "Selected product should not be null");
    let D = (0, Y.h)(t),
      {
        isPurchased: U,
        isPartiallyOwnedBundle: G,
        isRented: M
      } = (0, Y.h)(w),
      {
        isDisabled: q,
        disabledReason: $
      } = (0, J.I)(w.skuId),
      ee = (0, W.Zu)({
        product: w,
        isPartiallyOwnedBundle: G,
        isPurchased: U
      }),
      en = null != _,
      er = (0, m.bG)([z.A], () => z.A.isClaiming === (null == w ? true : w.skuId)),
      el = (0, h.Ay)(),
      em = (0, f.Mw)(el),
      ep = (0, W.G0)(w),
      eh = (0, W.yt)(w, eI.lid.DEFAULT),
      eg = (null == eh ? true : eh.amount) === 0,
      {
        firstAvatarDecoration: eb
      } = (0, X.f5)(null != S ? S : w),
      e_ = l.useMemo(() => (0, W.fT)(w, N), [w, N]),
      ey = (0, Z.dH)(w),
      ew = (0, eO.X)(w),
      {
        enabled: ek
      } = (0, L.Z)({
        location: "collectibles_shop_product_details_modal"
      }),
      eL = (0, K.r)(w, false, _),
      eB = (0, eA.V_)(t),
      eG = null != eB,
      {
        checkoutEligiblePrices: eM,
        isOrbExclusive: eH,
        hasSufficientOrbs: eV
      } = (0, eN.FI)({
        product: w,
        isPremiumUser: N,
        hasDiscountOffer: eG,
        isRental: null != _
      }),
      eF = l.useCallback(() => (0, R.A)({
        skuId: w.skuId,
        analyticsLocations: O,
        variantsReturnStyle: d.g.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eT.tE)()
      }), [O, u, w.skuId]);
    return l.useEffect(() => {
      if (null != eb) return (0, E.Dx)(eb), () => (0, E.Dx)(true)
    }, [eb]), (0, r.jsxs)("div", {
      className: eS.qA,
      children: [(0, r.jsx)("div", {
        className: eS.gn,
        children: (0, r.jsx)(ea.A, {
          category: i
        })
      }), (0, r.jsx)(eD, {
        product: null != S ? S : w,
        user: n,
        activeSlide: A
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eS.h_,
          children: [(0, r.jsx)(ei.A, {
            product: w,
            isDarkText: !em,
            isOrbExclusive: eH,
            rentalDuration: _
          }), (0, r.jsx)(x.Heading, {
            variant: "heading-xl/extrabold",
            className: eS.v7,
            children: ey
          }), (0, r.jsx)(x.Text, {
            variant: "text-sm/normal",
            children: eL
          }), (0, r.jsx)(eU, {
            skuId: w.skuId
          }), D.isPurchased || D.isPartiallyOwnedBundle ? (0, r.jsx)(et.c, {
            className: eS.On,
            isPartiallyPurchased: G
          }) : ep ? (0, r.jsx)(x.Text, {
            variant: "text-md/semibold",
            className: eS.On,
            children: eC.intl.string(eC.t.rt69oo)
          }) : ek ? (0, r.jsx)(ev.B, {
            prices: eM,
            product: w,
            isPremiumUser: N,
            discount: e_,
            hasSufficientOrbs: eV,
            isProductDisabled: q,
            discountOfferAmount: eB
          }) : (0, r.jsxs)("div", {
            className: eS.pw,
            children: [(0, r.jsx)(eo.A, {
              product: w,
              discount: e_,
              isPremiumUser: N,
              hideStrikethroughPrice: !N || eG,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eB
            }), N || eG ? null : (0, r.jsx)(ec.A, {
              product: w
            })]
          })]
        }), (0, Q.B1)(t) && (0, r.jsx)(x.M1G, {
          children: (0, r.jsxs)("div", {
            className: eS.Oj,
            children: [(0, r.jsx)(ex.A, {
              skuId: t.skuId,
              onVariantEnter: T,
              onVariantExit: C
            }), (0, r.jsx)(ef.A, {
              skuId: t.skuId,
              overrideVariantIndex: P
            })]
          })
        }), null !== $ && (0, r.jsx)(x.Text, {
          variant: "text-xs/normal",
          className: eS.H$,
          children: $
        }), (0, r.jsx)(x.BJc, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ep && !N && !eg) {
              let e;
              return e = eC.intl.string(eC.t.sEAnVH), (0, r.jsx)(I.A, {
                subscriptionTier: eE.pe.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eu.M,
                onSubscribeModalClose: () => {
                  (0, eu.t)({
                    product: w,
                    category: i,
                    shouldCheckoutWithOrbs: s,
                    returnRef: v,
                    analyticsLocations: O
                  })
                }
              })
            }
            if (!ee) return ew ? (0, r.jsx)(es.A, {
              primary: true,
              product: w,
              onSuccess: u,
              fullWidth: true
            }) : null;
            if (en) {
              if (U) return (0, r.jsx)(ed.A, {
                product: w,
                onSuccess: u
              })
            } else if (U && !M) return ew ? (0, r.jsxs)(x.ButtonGroup, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(ed.A, {
                product: w,
                onSuccess: u
              }), (0, r.jsx)(es.A, {
                primary: true,
                product: w,
                onSuccess: u
              })]
            }) : (0, r.jsx)(ed.A, {
              product: w,
              onSuccess: u
            });
            return ep ? (0, r.jsx)(x.Button, {
              loading: er,
              loadingStartedLabel: eC.intl.string(eC.t["TYw+9s"]),
              loadingFinishedLabel: eC.intl.string(eC.t.Pg1UP5),
              onClick: async () => {
                await (0, F.iJ)(w.skuId), u(), (0, eP.A)({
                  product: w,
                  analyticsLocations: O,
                  purchaseType: eR.gs.PREMIUM_PURCHASE
                })
              },
              text: eC.intl.string(eC.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eM.map((e, t) => {
                let n, l = 0 === t;
                if (e.currency === eT.Yr.DISCORD_ORB) {
                  let t, n, i, s;
                  if (null != _) {
                    let e, t, n, i, s, o, c;
                    return e = q ? eC.intl.string(eC.t.cTdr3x) : eC.intl.string(eC.t.zqh7ZM), t = !eV || q, n = eC.intl.formatToPlainString(eC.t.DlNs2T, {
                      orbPrice: eR.O0
                    }), i = t ? "".concat(n, ", ").concat(e) : n, s = new Date, c = null != (o = null == _ ? null : s.setDate(s.getDate() + _)) ? new Date(o).toLocaleDateString(y, {
                      minute: "numeric",
                      hour: "numeric",
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    }) : null, (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(p.m, {
                        position: "top",
                        text: e,
                        shouldShow: t,
                        "aria-label": false,
                        children: (0, r.jsx)(x.Button, {
                          variant: l ? "primary" : "secondary",
                          onClick: () => {
                            (0, B.B4)({
                              skuId: w.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, F.gB)({
                                  variantsReturnStyle: d.g.VARIANTS_GROUP
                                }), u();
                                let l = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(y, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, eP.A)({
                                  product: w,
                                  analyticsLocations: O,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eR.gs.ORB,
                                  rentalDuration: _,
                                  rentalExpiresAt: l
                                })
                              },
                              analyticsLocations: O,
                              rentalDuration: _
                            })
                          },
                          disabled: t,
                          "aria-label": i,
                          text: eC.intl.format(eC.t["4NKuqc"], {
                            orbPrice: eR.O0,
                            orbIconHook: () => (0, r.jsx)(x.Cp8, {
                              className: eS.fN,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != c && (0, r.jsx)(x.Text, {
                        variant: "text-xs/normal",
                        className: a()(eS.ed, !em && eS.un),
                        children: eC.intl.format(eC.t.pLAiJ4, {
                          date: c
                        })
                      })]
                    })
                  }
                  return t = q ? eC.intl.string(eC.t.cTdr3x) : eC.intl.string(eC.t.zqh7ZM), n = !eV || q, i = eC.intl.formatToPlainString(eC.t["fNG/05"], {
                    orbPrice: e.amount
                  }), s = n ? "".concat(i, ", ").concat(t) : i, (0, r.jsx)(p.m, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(x.Button, {
                      variant: l ? "primary" : "secondary",
                      onClick: () => {
                        (0, B.B4)({
                          skuId: w.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, F.gB)({
                              variantsReturnStyle: d.g.VARIANTS_GROUP
                            }), u(), (0, eP.A)({
                              product: w,
                              analyticsLocations: O,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eR.gs.ORB
                            })
                          },
                          analyticsLocations: O
                        })
                      },
                      disabled: n,
                      "aria-label": s,
                      text: eC.intl.format(eC.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(x.Cp8, {
                          className: eS.fN,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, W.aw)(w) ? eC.intl.string(eC.t.V1AWw0) : w.type === c.R.PROFILE_EFFECT ? eC.intl.string(eC.t.kAeDcK) : w.type === c.R.NAMEPLATE ? eC.intl.string(eC.t.H3vhqU) : eC.intl.string(eC.t.AQ0Veg), eG ? n = eC.intl.formatToPlainString(eC.t["5U5RB5"], {
                  discountOfferAmount: eB
                }) : ek && (n = eC.intl.formatToPlainString(eC.t["cNSL/j"], {
                  price: (0, V.$g)(e.amount, e.currency)
                })), (0, r.jsxs)(x.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(x.Button, {
                    variant: l ? "primary" : "secondary",
                    onClick: eF,
                    text: n,
                    fullWidth: true
                  }), ew && (0, r.jsx)(es.A, {
                    primary: l,
                    product: w,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(x.Text, {
          className: a()(eS.ed, !em && eS.un),
          variant: "text-xxs/normal",
          children: ep && !U ? eC.intl.string(eC.t.nKdAlO) : null
        })]
      })]
    })
  },
  eM = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eS.mV,
      children: (0, r.jsx)(j.A, {
        avatar: (0, r.jsx)(x.euF, {
          src: t.avatarSrc,
          size: x._3J.SIZE_32,
          "aria-label": t.name,
          status: x.clD.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eS.$L, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: l
    } = e, i = (0, N.Ov)();
    return (0, r.jsx)("div", {
      className: eS.nJ,
      role: "img",
      "aria-label": eC.intl.string(eC.t.SZeUdR),
      children: (0, r.jsxs)(x.M1G, {
        children: [(0, r.jsx)(eM, {
          user: i.mallow,
          innerClassName: eS.ab
        }), (0, r.jsxs)(x.Text, {
          variant: "text-sm/semibold",
          className: eS.OS,
          children: [eC.intl.string(eC.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eM, {
          user: i.phibi,
          innerClassName: eS.e9
        }), (0, r.jsx)("div", {
          className: eS.mV,
          children: (0, r.jsx)(P.A, {
            className: eS.M4,
            innerClassName: eS.e9,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: l
          })
        }), (0, r.jsx)(eM, {
          user: i.locke,
          innerClassName: eS.e9
        }), (0, r.jsxs)(x.Text, {
          variant: "text-sm/semibold",
          className: eS.OS,
          children: [eC.intl.string(eC.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eM, {
          user: i.boom,
          innerClassName: eS.bD
        }), (0, r.jsx)(eM, {
          user: i.cherry,
          innerClassName: eS.bD
        })]
      })
    })
  },
  eV = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: l,
      isTransitioning: i
    } = e, s = (0, m.bG)([v.A], () => v.A.useReducedMotion), o = H.Ay.canUsePremiumProfileCustomization(n), u = (0, m.cf)([D.A], () => D.A.getAllPending()), {
      pendingAvatar: d
    } = u, p = function(e, t) {
      if (null == e) return {};
      var n, r, l, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.getOwnPropertyNames(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }(u, ["pendingAvatar"]), f = (0, S.V7)({
      userId: n.id,
      image: d
    }), x = t.type === c.R.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: b,
      firstNameplate: j
    } = (0, X.f5)(t), A = null != b, _ = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(T.A, ek(ew({}, p), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: o,
        pendingAvatarDecoration: g,
        pendingProfileEffect: b,
        disabledInputs: true,
        hideMessageInput: !A,
        hideCustomStatus: true,
        hideBioSection: x,
        hideExampleButton: true,
        interactive: false
      })), x && (0, r.jsx)(eF, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e,
      avatarDecoration: g
    });
    if (t.type === c.R.BUNDLE) {
      if (!(0, $.W)(t)) return (0, r.jsx)("div", {
        className: eS.RA,
        children: (0, r.jsx)("div", {
          className: eS.bo,
          children: _()
        })
      });
      {
        let e = null != l ? l : 0,
          n = t.items[e],
          o = t.items[Math.max(0, e - 1)],
          u = (null == o ? true : o.type) !== (null == n ? true : n.type) && !s;
        return n.type === c.R.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eS.Zj, i && u ? eS.p2 : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: a()(eS.Ak, i && u ? eS.p2 : ""),
          children: _()
        })
      }
    }
    return null != j ? (0, r.jsx)("div", {
      className: eS.Zj,
      children: O(j)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === c.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
      children: _()
    })
  },
  eF = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, A.rh)(ek(ew({}, (0, _.Ay)({
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
      children: (0, r.jsx)(x.M1G, {
        children: (0, r.jsxs)(x.ZpM, {
          className: eS.f7,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(y.A, {
            className: eS.G5,
            author: (0, O.p_)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eS.lG,
            children: [(0, r.jsx)(x.U1e, {
              size: "md",
              color: "currentColor",
              className: eS.hq
            }), (0, r.jsx)(x.nm2, {
              size: "md",
              color: "currentColor",
              className: eS.hq
            })]
          })]
        })
      })
    })
  },
  ez = e => {
    let {
      transitionState: t,
      onClose: n,
      product: i,
      category: s,
      returnRef: d,
      analyticsSource: p,
      analyticsLocations: f,
      shouldCheckoutWithOrbs: h,
      tab: v,
      rentalDuration: j
    } = e, A = (0, m.bG)([U.default], () => U.default.getCurrentUser()), _ = (0, ey.f)(i), {
      previewingVariantIndex: O
    } = _, y = (0, q.Q)(i), N = (0, ej.q)(i, O), P = (0, Q.rb)(i, y);
    o()(null != P, "Selected product should not be null");
    let {
      analyticsLocations: R
    } = (0, b.Ay)([...f, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != j ? [g.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, el.Yr)(P.skuId);
    let I = (0, e_.U1)(s);
    l.useEffect(() => {
      null != A && (0, w.A)(A.id, A.getAvatarURL(true, 80))
    }, [A]);
    let E = l.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
    l.useEffect(() => {
      G.default.track(eI.HAw.OPEN_MODAL, {
        type: eI.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: p,
        location_stack: R,
        sku_id: P.skuId,
        product_type: E
      }), P.items.forEach(F.RD)
    }, [p, R, P.skuId, P.items, E]);
    let T = (0, B.o6)(),
      C = t === x.ip4.EXITING,
      S = (0, eA.$R)(i),
      k = null == S ? true : S.amount,
      L = null != k && ((null == S ? true : S.discountId) === eE.eR || (null == S ? true : S.discountId) === eE.Qz),
      D = l.useMemo(() => (0, W.aw)(P) ? P.items.length : 0, [P]),
      {
        activeSlide: M,
        isTransitioning: H
      } = (0, ee.X)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == A ? null : (0, r.jsx)(b.f5, {
      value: R,
      children: (0, r.jsxs)(x.EOs, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eS.CR,
        returnRef: d,
        transitionState: t,
        size: x.rIJ.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(x.$mQ, {
          "data-migration-pending": true,
          className: eS.jE,
          children: [(0, r.jsx)(eG, {
            user: A,
            product: i,
            category: s,
            onClose: n,
            previewingVariantIndexProps: _,
            selectedVariantIndex: y,
            shouldCheckoutWithOrbs: h,
            activeBundleSlide: M,
            rentalDuration: j
          }), (0, r.jsxs)("div", {
            className: a()(eS.i1, P.skuId === u.j.PREMIUM_TIER_2_3_DAY ? eS.bF : P.type === c.R.AVATAR_DECORATION ? eS.Jq : eS.eF),
            style: {
              backgroundImage: "url(".concat(I, ")")
            },
            children: [(0, eR.pQ)(i.skuId) ? i.skuId === eR.Dp.ORB_PROFILE_BADGE ? T || C ? null : (0, r.jsx)(ep.z, {
              user: A
            }) : i.skuId === u.j.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.I, {}) : (0, r.jsx)(eh.B, {
              product: i,
              className: eS.Ms
            }) : (0, r.jsx)(eV, {
              user: A,
              product: null != N ? N : P,
              activeBundleSlide: M,
              isTransitioning: H
            }), (0, r.jsxs)("div", {
              className: eS.VG,
              children: [(0, r.jsx)(eg.R, {
                product: i,
                selectedVariantIndex: y,
                className: eS.ij,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.V, {
                skuId: P.skuId,
                tab: v
              }), (0, r.jsx)(x.K0, {
                "aria-label": eC.intl.string(eC.t.cpT0Cq),
                onClick: n,
                icon: x.d$L,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), L && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(x.jlY, {
            "data-migration-pending": true,
            className: eS.Hx,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eS.OC
            }), (0, r.jsxs)("div", {
              className: eS.do,
              children: [(0, r.jsx)(x.Text, {
                variant: "text-sm/semibold",
                className: eS.Q2,
                children: eC.intl.format(eC.t["78ph4b"], {
                  discountOfferAmount: k
                })
              }), (null == S ? true : S.expiresAt) != null && (0, r.jsx)(er.e, {
                endDate: S.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }