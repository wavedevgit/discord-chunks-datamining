/** Chunk was on 86111 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eW
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk570908 = require("./570908.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk4242 = require("./4242.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk567400 = require("./567400.js"),
  Chunk484459 = require("./484459.js"),
  Chunk706454 = require("./706454.js"),
  Chunk825102 = require("./825102.js"),
  Chunk275388 = require("./275388.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk83479 = require("./83479.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk328456 = require("./328456.js"),
  Chunk27123 = require("./27123.js"),
  Chunk330349 = require("./330349.js"),
  Chunk556971 = require("./556971.js"),
  Chunk390698 = require("./390698.jsx"),
  Chunk525518 = require("./525518.jsx"),
  Chunk168020 = require("./168020.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk224068 = require("./224068.jsx"),
  Chunk813083 = require("./813083.jsx"),
  Chunk680942 = require("./680942.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk38914 = require("./38914.jsx"),
  Chunk259673 = require("./259673.jsx"),
  Chunk749068 = require("./749068.jsx"),
  Chunk406667 = require("./406667.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk953405 = require("./953405.jsx"),
  Chunk143941 = require("./143941.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk332246 = require("./332246.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk794324 = require("./794324.js"),
  Chunk694364 = require("./694364.js"),
  Chunk361110 = require("./361110.js"),
  Chunk29121 = require("./29121.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188336 = require("./188336.js");

function eL(e) {
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

function eB(e, t) {
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
let eZ = e => {
    let {
      item: t,
      product: n,
      user: l
    } = e, a = i.useRef(null), o = (0, q.x6)(n), {
      firstAvatarDecoration: s
    } = (0, X.Rj)(n);
    return t.type === c.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: o ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(eb.R, {
        user: l,
        item: t,
        isHighlighted: true
      })
    }) : t.type === c.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: o ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(S.Z, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: a,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(T.Z, {
        className: ek.nameplatePreview,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: s,
        isHighlighted: true
      })
    }) : null
  },
  eD = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, l = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(v.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(v.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: ek.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(v.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ek.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", s]
              })]
            })
          }, a)
        })
      })
    })
  },
  eU = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, q.x6)(t) ? (0, r.jsx)(eD, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eE.o0)(t.skuId) ? (0, r.jsx)(eh.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eZ, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(v.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eR.intl.format(eR.t.Q1scdE, {
        helpdeskArticle: F.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eF = e => {
    let {
      product: t,
      user: n,
      category: l,
      shouldCheckoutWithOrbs: o,
      onClose: u,
      returnRef: g,
      previewingVariantIndexProps: x,
      selectedVariantIndex: P,
      activeBundleSlide: j,
      rentalDuration: _
    } = e, {
      analyticsLocations: O
    } = (0, b.ZP)(), C = (0, m.e7)([L.default], () => L.default.locale), I = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: T,
      handleEntering: A,
      handleLeaving: S
    } = x, N = (0, eP.N)(t, T), R = (0, ej.W)(t, P);
    s()(null != R, "Selected product should not be null");
    let k = (0, Q.L)(t),
      {
        isPurchased: D,
        isPartiallyOwnedBundle: U,
        isRented: M
      } = (0, Q.L)(R),
      {
        isDisabled: F,
        disabledReason: W
      } = (0, J.G)(R.skuId),
      ee = (0, q.ne)({
        product: R,
        isPartiallyOwnedBundle: U,
        isPurchased: D
      }),
      et = null != _,
      er = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == R ? true : R.skuId)),
      ei = (0, h.ZP)(),
      el = (0, f.wj)(ei),
      em = (0, q.G1)(R),
      ep = (0, q.ql)(R, eA.tuJ.DEFAULT),
      eh = (null == ep ? true : ep.amount) === 0,
      {
        firstAvatarDecoration: ex
      } = (0, X.Rj)(null != N ? N : R),
      eb = i.useMemo(() => (0, q.BH)(R, I), [R, I]),
      {
        handleUseNow: eO,
        isApplying: eI
      } = (0, K.W)({
        product: R,
        onSuccess: u
      }),
      eL = (0, eT.To)(R),
      eB = (0, eC.J)(R),
      {
        enabled: eZ
      } = (0, B.W)({
        location: "collectibles_shop_product_details_modal"
      }),
      eD = (0, Y.G)(R, false, _),
      eF = (0, e_.Iw)(t),
      eG = null != eF,
      {
        checkoutEligiblePrices: eH,
        isOrbExclusive: eV,
        hasSufficientOrbs: ez
      } = (0, ey.Ip)({
        product: R,
        isPremiumUser: I,
        hasDiscountOffer: eG,
        isRental: null != _
      }),
      eW = i.useCallback(() => (0, y.Z)({
        skuId: R.skuId,
        analyticsLocations: O,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eN.dG)()
      }), [O, u, R.skuId]);
    return i.useEffect(() => {
      if (null != ex) return (0, E.PO)(ex), () => (0, E.PO)(true)
    }, [ex]), (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: l
        })
      }), (0, r.jsx)(eU, {
        product: null != N ? N : R,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(ea.Z, {
            product: R,
            isDarkText: !el,
            isOrbExclusive: eV,
            rentalDuration: _
          }), (0, r.jsx)(v.Heading, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: eL
          }), (0, r.jsx)(v.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eM, {
            skuId: R.skuId
          }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: ek.priceTag,
            isPartiallyPurchased: U
          }) : em ? (0, r.jsx)(v.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eR.intl.string(eR.t.rt69oo)
          }) : eZ ? (0, r.jsx)(eg.a, {
            prices: eH,
            product: R,
            isPremiumUser: I,
            discount: eb,
            hasSufficientOrbs: ez,
            isProductDisabled: F,
            discountOfferAmount: eF
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: R,
              discount: eb,
              isPremiumUser: I,
              hideStrikethroughPrice: !I || eG,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eF
            }), I || eG ? null : (0, r.jsx)(eu.Z, {
              product: R
            })]
          })]
        }), (0, $.ox)(t) && (0, r.jsx)(v.Rny, {
          children: (0, r.jsxs)("div", {
            className: ek.variantsContainer,
            children: [(0, r.jsx)(ev.Z, {
              skuId: t.skuId,
              onVariantEnter: A,
              onVariantExit: S
            }), (0, r.jsx)(ef.Z, {
              skuId: t.skuId,
              overrideVariantIndex: T
            })]
          })
        }), null !== W && (0, r.jsx)(v.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: W
        }), (0, r.jsx)(v.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (em && !I && !eh) {
              let e;
              return e = eR.intl.string(eR.t.sEAnVH), (0, r.jsx)(w.Z, {
                subscriptionTier: eS.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: R,
                    category: l,
                    shouldCheckoutWithOrbs: o,
                    returnRef: g,
                    analyticsLocations: O
                  })
                }
              })
            }
            if (!ee) return null;
            let e = (0, r.jsx)(v.Button, {
              variant: "primary",
              onClick: eO,
              loading: eI,
              text: eR.intl.string(eR.t.MAS7uK),
              fullWidth: true
            });
            if (et) {
              if (D) return e
            } else if (D && !M) return e;
            return em ? (0, r.jsx)(v.Button, {
              loading: er,
              loadingStartedLabel: eR.intl.string(eR.t["TYw+9s"]),
              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UP5),
              onClick: async () => {
                await (0, V.fK)(R.skuId), u(), (0, ew.Z)({
                  product: R,
                  analyticsLocations: O,
                  purchaseType: eE.o8.PREMIUM_PURCHASE
                })
              },
              text: eR.intl.string(eR.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eH.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  if (null != _) return (e => {
                    let t = F ? eR.intl.string(eR.t.cTdr3x) : eR.intl.string(eR.t.zqh7ZM),
                      n = !ez || F,
                      i = eR.intl.formatToPlainString(eR.t.DlNs2T, {
                        orbPrice: eE.As
                      }),
                      l = n ? "".concat(i, ", ").concat(t) : i,
                      o = new Date,
                      s = null == _ ? null : o.setDate(o.getDate() + _),
                      c = null != s ? new Date(s).toLocaleDateString(C, {
                        minute: "numeric",
                        hour: "numeric",
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }) : null;
                    return (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(p.u, {
                        position: "top",
                        text: t,
                        shouldShow: n,
                        "aria-label": false,
                        children: (0, r.jsx)(v.Button, {
                          variant: e ? "primary" : "secondary",
                          onClick: () => {
                            (0, Z.qA)({
                              skuId: R.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, V.qg)({
                                  variantsReturnStyle: d.v.VARIANTS_GROUP
                                }), u();
                                let i = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(C, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, ew.Z)({
                                  product: R,
                                  analyticsLocations: O,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eE.o8.ORB,
                                  rentalDuration: _,
                                  rentalExpiresAt: i
                                })
                              },
                              analyticsLocations: O,
                              rentalDuration: _
                            })
                          },
                          disabled: n,
                          "aria-label": l,
                          text: eR.intl.format(eR.t["4NKuqc"], {
                            orbPrice: eE.As,
                            orbIconHook: () => (0, r.jsx)(v.aQr, {
                              className: ek.orbIconAligned,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != c && (0, r.jsx)(v.Text, {
                        variant: "text-xs/normal",
                        className: a()(ek.disclaimer, !el && ek.disclaimerLight),
                        children: eR.intl.format(eR.t.pLAiJ4, {
                          date: c
                        })
                      })]
                    })
                  })(i);
                  let t = F ? eR.intl.string(eR.t.cTdr3x) : eR.intl.string(eR.t.zqh7ZM),
                    n = !ez || F,
                    l = eR.intl.formatToPlainString(eR.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    o = n ? "".concat(l, ", ").concat(t) : l;
                  return (0, r.jsx)(p.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(v.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, Z.qA)({
                          skuId: R.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, ew.Z)({
                              product: R,
                              analyticsLocations: O,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eE.o8.ORB
                            })
                          },
                          analyticsLocations: O
                        })
                      },
                      disabled: n,
                      "aria-label": o,
                      text: eR.intl.format(eR.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(v.aQr, {
                          className: ek.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, q.x6)(R) ? eR.intl.string(eR.t.V1AWw0) : R.type === c.Z.PROFILE_EFFECT ? eR.intl.string(eR.t.kAeDcK) : R.type === c.Z.NAMEPLATE ? eR.intl.string(eR.t.H3vhqU) : eR.intl.string(eR.t.AQ0Veg), eG ? n = eR.intl.formatToPlainString(eR.t["5U5RB5"], {
                  discountOfferAmount: eF
                }) : eZ && (n = eR.intl.formatToPlainString(eR.t["cNSL/j"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(v.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(v.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eW,
                    text: n,
                    fullWidth: true
                  }), eB && (0, r.jsx)(es.Z, {
                    primary: i,
                    product: R,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(v.Text, {
          className: a()(ek.disclaimer, !el && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: em && !D ? eR.intl.string(eR.t.nKdAlO) : null
        })]
      })]
    })
  },
  eG = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(ek.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, l = (0, I.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eR.intl.string(eR.t.SZeUdR),
      children: (0, r.jsxs)(v.Rny, {
        children: [(0, r.jsx)(eG, {
          user: l.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eG, {
          user: l.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(T.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eG, {
          user: l.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eG, {
          user: l.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eG, {
          user: l.cherry,
          innerClassName: ek.userGreen
        })]
      })
    })
  },
  eV = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: l
    } = e, o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([D.Z], () => D.Z.getAllPending()), {
      pendingAvatar: d
    } = u, p = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(u, ["pendingAvatar"]), f = (0, N.SD)({
      userId: n.id,
      image: d
    }), v = t.type === c.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: x,
      firstProfileEffect: b,
      firstNameplate: P
    } = (0, X.Rj)(t), j = null != b, _ = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.Z, eB(eL({}, p), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: x,
        pendingProfileEffect: b,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(ez, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e,
      avatarDecoration: x
    });
    if (t.type === c.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: ek.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: ek.combinedPreviewContent,
          children: _()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          u = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(ek.nameplatePreviewContainerInner, l && u ? ek.sliding : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: a()(ek.profileEffectPreviewsContainerInner, l && u ? ek.sliding : ""),
          children: _()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: O(P)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === c.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: _()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(eB(eL({}, (0, _.ZP)({
        author: t,
        channelId: "1337",
        content: eR.intl.string(eR.t.d5YwK5)
      })), {
        state: eA.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eR.intl.string(eR.t["TN+ZvB"]),
      children: (0, r.jsx)(v.Rny, {
        children: (0, r.jsxs)(v.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(C.Z, {
            className: ek.mockMessage,
            author: (0, O.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: ek.mockInput,
            children: [(0, r.jsx)(v.oFk, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
            }), (0, r.jsx)(v.EO4, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eW = e => {
    let {
      transitionState: t,
      onClose: n,
      product: l,
      category: o,
      returnRef: d,
      analyticsSource: p,
      analyticsLocations: f,
      shouldCheckoutWithOrbs: h,
      tab: g,
      rentalDuration: P
    } = e, j = (0, m.e7)([U.default], () => U.default.getCurrentUser()), _ = (0, eI.f)(l), {
      previewingVariantIndex: O
    } = _, C = (0, W.o)(l), I = (0, eP.N)(l, O), T = (0, ej.W)(l, C);
    s()(null != T, "Selected product should not be null");
    let {
      analyticsLocations: y
    } = (0, b.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != P ? [x.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, el.u9)(T.skuId);
    let w = (0, eO.kc)(o),
      E = (0, R.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != j && (0, k.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let A = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(eA.rMx.OPEN_MODAL, {
        type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: p,
        location_stack: y,
        sku_id: T.skuId,
        product_type: A
      }), T.items.forEach(V.oK)
    }, [p, y, T.skuId, T.items, A]);
    let S = (0, Z.r9)(),
      N = t === v.Dvm.EXITING,
      L = (0, e_.t0)(l),
      B = null == L ? true : L.amount,
      D = i.useMemo(() => (0, q.x6)(T) ? T.items.length : 0, [T]),
      {
        activeSlide: F,
        isTransitioning: G
      } = (0, et.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == j ? null : (0, r.jsx)(b.Gt, {
      value: y,
      children: (0, r.jsxs)(v.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.modalRoot,
        returnRef: d,
        transitionState: t,
        size: v.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(v.hzk, {
          "data-migration-pending": true,
          className: ek.modalContent,
          children: [(0, r.jsx)(eF, {
            user: j,
            product: l,
            category: o,
            onClose: n,
            previewingVariantIndexProps: _,
            selectedVariantIndex: C,
            shouldCheckoutWithOrbs: h,
            activeBundleSlide: F,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: a()(ek.previewContainer, T.skuId === u.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : T.type === c.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(w, ")")
            },
            children: [(0, eE.o0)(l.skuId) ? l.skuId === eE.Vt.ORB_PROFILE_BADGE ? S || N ? null : (0, r.jsx)(ep.M, {
              user: j
            }) : l.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(eh.b, {
              product: l,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eV, {
              user: j,
              product: null != I ? I : T,
              activeBundleSlide: F,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [E && (0, r.jsx)(ex.a, {
                product: l,
                selectedVariantIndex: C,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: T.skuId,
                tab: g
              }), (0, r.jsx)(v.hU, {
                "aria-label": eR.intl.string(eR.t.cpT0Cq),
                onClick: n,
                icon: v.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != B && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(v.mzw, {
            "data-migration-pending": true,
            className: ek.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: ek.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: ek.modalFooterContentContainer,
              children: [(0, r.jsx)(v.Text, {
                variant: "text-sm/semibold",
                className: ek.modalFooterText,
                children: eR.intl.format(eR.t["78ph4b"], {
                  discountOfferAmount: B
                })
              }), (null == L ? true : L.expiresAt) != null && (0, r.jsx)(ei.R, {
                endDate: L.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }