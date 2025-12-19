/** Chunk was on 8087 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eW
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk260321 = require("./260321.js");

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
      user: a
    } = e, l = i.useRef(null), o = (0, q.x6)(n), {
      firstAvatarDecoration: s
    } = (0, X.Rj)(n);
    return t.type === c.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: o ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
      children: (0, r.jsx)(ex.R, {
        user: a,
        item: t,
        isHighlighted: true
      })
    }) : t.type === c.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: o ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(N.Z, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: l,
      className: e_.nameplatePreviewContainer,
      children: (0, r.jsx)(T.Z, {
        className: e_.nameplatePreview,
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
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: e_.bundlePreviewContainer,
      children: (0, r.jsx)(v.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(v.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: e_.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(v.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: e_.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", s]
              })]
            })
          }, l)
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
    }) : (0, eA.o0)(t.skuId) ? (0, r.jsx)(eb.b, {
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
      className: e_.learnMoreLink,
      children: ek.intl.format(ek.t.Q1scdE, {
        helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eF = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: u,
      returnRef: h,
      previewingVariantIndexProps: g,
      selectedVariantIndex: P,
      activeBundleSlide: j,
      rentalDuration: O
    } = e, {
      analyticsLocations: C
    } = (0, x.ZP)(), I = (0, m.e7)([L.default], () => L.default.locale), y = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: T,
      handleEntering: S,
      handleLeaving: N
    } = g, R = (0, eP.N)(t, T), k = (0, ej.W)(t, P);
    s()(null != k, "Selected product should not be null");
    let _ = (0, Q.L)(t),
      {
        isPurchased: D,
        isPartiallyOwnedBundle: U,
        isRented: M
      } = (0, Q.L)(k),
      {
        isDisabled: F,
        disabledReason: W
      } = (0, J.G)(k.skuId),
      ee = (0, q.ne)({
        product: k,
        isPartiallyOwnedBundle: U,
        isPurchased: D
      }),
      et = null != O,
      er = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == k ? true : k.skuId)),
      ei = (0, b.ZP)(),
      ea = (0, p.wj)(ei),
      em = (0, q.G1)(k),
      ef = (0, q.ql)(k, eS.tuJ.DEFAULT),
      eb = (null == ef ? true : ef.amount) === 0,
      {
        firstAvatarDecoration: eg
      } = (0, X.Rj)(null != R ? R : k),
      ex = i.useMemo(() => (0, q.BH)(k, y), [k, y]),
      {
        handleUseNow: eC,
        isApplying: ey
      } = (0, K.W)({
        product: k,
        onSuccess: u
      }),
      eL = (0, eT.To)(k),
      eB = (0, eI.J)(k),
      {
        enabled: eZ
      } = (0, B.W)({
        location: "collectibles_shop_product_details_modal"
      }),
      eD = (0, Y.G)(k, false, O),
      eF = (0, eO.Iw)(t),
      eG = null != eF,
      {
        checkoutEligiblePrices: eH,
        isOrbExclusive: eV,
        hasSufficientOrbs: ez
      } = (0, ew.Ip)({
        product: k,
        isPremiumUser: y,
        hasDiscountOffer: eG,
        isRental: null != O
      }),
      eW = i.useCallback(() => (0, w.Z)({
        skuId: k.skuId,
        analyticsLocations: C,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eR.dG)()
      }), [C, u, k.skuId]);
    return i.useEffect(() => {
      if (null != eg) return (0, A.PO)(eg), () => (0, A.PO)(true)
    }, [eg]), (0, r.jsxs)("div", {
      className: e_.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: e_.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: a
        })
      }), (0, r.jsx)(eU, {
        product: null != R ? R : k,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: e_.description,
          children: [(0, r.jsx)(el.Z, {
            product: k,
            isDarkText: !ea,
            isOrbExclusive: eV,
            rentalDuration: O
          }), (0, r.jsx)(v.Heading, {
            variant: "heading-xl/extrabold",
            className: e_.headingWithItemTypePill,
            children: eL
          }), (0, r.jsx)(v.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eM, {
            skuId: k.skuId
          }), _.isPurchased || _.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: e_.priceTag,
            isPartiallyPurchased: U
          }) : em ? (0, r.jsx)(v.Text, {
            variant: "text-md/semibold",
            className: e_.priceTag,
            children: ek.intl.string(ek.t.rt69oo)
          }) : eZ ? (0, r.jsx)(eh.a, {
            prices: eH,
            product: k,
            isPremiumUser: y,
            discount: ex,
            hasSufficientOrbs: ez,
            isProductDisabled: F,
            discountOfferAmount: eF
          }) : (0, r.jsxs)("div", {
            className: e_.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: k,
              discount: ex,
              isPremiumUser: y,
              hideStrikethroughPrice: !y || eG,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eF
            }), y || eG ? null : (0, r.jsx)(eu.Z, {
              product: k
            })]
          })]
        }), (0, $.ox)(t) && (0, r.jsx)(v.Rny, {
          children: (0, r.jsxs)("div", {
            className: e_.variantsContainer,
            children: [(0, r.jsx)(ev.Z, {
              skuId: t.skuId,
              onVariantEnter: S,
              onVariantExit: N
            }), (0, r.jsx)(ep.Z, {
              skuId: t.skuId,
              overrideVariantIndex: T
            })]
          })
        }), null !== W && (0, r.jsx)(v.Text, {
          variant: "text-xs/normal",
          className: e_.disabledReason,
          children: W
        }), (0, r.jsx)(v.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (em && !y && !eb) {
              let e;
              return e = ek.intl.string(ek.t.sEAnVH), (0, r.jsx)(E.Z, {
                subscriptionTier: eN.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: k,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: h,
                    analyticsLocations: C
                  })
                }
              })
            }
            if (!ee) return null;
            let e = (0, r.jsx)(v.Button, {
              variant: "primary",
              onClick: eC,
              loading: ey,
              text: ek.intl.string(ek.t.MAS7uK),
              fullWidth: true
            });
            if (et) {
              if (D) return e
            } else if (D && !M) return e;
            return em ? (0, r.jsx)(v.Button, {
              loading: er,
              loadingStartedLabel: ek.intl.string(ek.t["TYw+9s"]),
              loadingFinishedLabel: ek.intl.string(ek.t.Pg1UP5),
              onClick: async () => {
                await (0, V.fK)(k.skuId), u(), (0, eE.Z)({
                  product: k,
                  analyticsLocations: C,
                  purchaseType: eA.o8.PREMIUM_PURCHASE
                })
              },
              text: ek.intl.string(ek.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eH.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eR.pK.DISCORD_ORB) {
                  if (null != O) return (e => {
                    let t = F ? ek.intl.string(ek.t.cTdr3x) : ek.intl.string(ek.t.zqh7ZM),
                      n = !ez || F,
                      i = ek.intl.formatToPlainString(ek.t.DlNs2T, {
                        orbPrice: eA.As
                      }),
                      a = n ? "".concat(i, ", ").concat(t) : i,
                      o = new Date,
                      s = null == O ? null : o.setDate(o.getDate() + O),
                      c = null != s ? new Date(s).toLocaleDateString(I, {
                        minute: "numeric",
                        hour: "numeric",
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }) : null;
                    return (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(f.u, {
                        position: "top",
                        text: t,
                        shouldShow: n,
                        "aria-label": false,
                        children: (0, r.jsx)(v.Button, {
                          variant: e ? "primary" : "secondary",
                          onClick: () => {
                            (0, Z.qA)({
                              skuId: k.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, V.qg)({
                                  variantsReturnStyle: d.v.VARIANTS_GROUP
                                }), u();
                                let i = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(I, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, eE.Z)({
                                  product: k,
                                  analyticsLocations: C,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eA.o8.ORB,
                                  rentalDuration: O,
                                  rentalExpiresAt: i
                                })
                              },
                              analyticsLocations: C,
                              rentalDuration: O
                            })
                          },
                          disabled: n,
                          "aria-label": a,
                          text: ek.intl.format(ek.t["4NKuqc"], {
                            orbPrice: eA.As,
                            orbIconHook: () => (0, r.jsx)(v.aQr, {
                              className: e_.orbIconAligned,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != c && (0, r.jsx)(v.Text, {
                        variant: "text-xs/normal",
                        className: l()(e_.disclaimer, !ea && e_.disclaimerLight),
                        children: ek.intl.format(ek.t.pLAiJ4, {
                          date: c
                        })
                      })]
                    })
                  })(i);
                  let t = F ? ek.intl.string(ek.t.cTdr3x) : ek.intl.string(ek.t.zqh7ZM),
                    n = !ez || F,
                    a = ek.intl.formatToPlainString(ek.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    o = n ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(f.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(v.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, Z.qA)({
                          skuId: k.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, eE.Z)({
                              product: k,
                              analyticsLocations: C,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eA.o8.ORB
                            })
                          },
                          analyticsLocations: C
                        })
                      },
                      disabled: n,
                      "aria-label": o,
                      text: ek.intl.format(ek.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(v.aQr, {
                          className: e_.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, q.x6)(k) ? ek.intl.string(ek.t.V1AWw0) : k.type === c.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcK) : k.type === c.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqU) : ek.intl.string(ek.t.AQ0Veg), eG ? n = ek.intl.formatToPlainString(ek.t["5U5RB5"], {
                  discountOfferAmount: eF
                }) : eZ && (n = ek.intl.formatToPlainString(ek.t["cNSL/j"], {
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
                    product: k,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(v.Text, {
          className: l()(e_.disclaimer, !ea && e_.disclaimerLight),
          variant: "text-xxs/normal",
          children: em && !D ? ek.intl.string(ek.t.nKdAlO) : null
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
      className: e_.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(e_.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, a = (0, y.w$)();
    return (0, r.jsx)("div", {
      className: e_.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": ek.intl.string(ek.t.SZeUdR),
      children: (0, r.jsxs)(v.Rny, {
        children: [(0, r.jsx)(eG, {
          user: a.mallow,
          innerClassName: e_.userBlue
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: e_.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eG, {
          user: a.phibi,
          innerClassName: e_.userPink
        }), (0, r.jsx)("div", {
          className: e_.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(T.Z, {
            className: e_.nameplatePreview,
            innerClassName: e_.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eG, {
          user: a.locke,
          innerClassName: e_.userPink
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: e_.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eG, {
          user: a.boom,
          innerClassName: e_.userGreen
        }), (0, r.jsx)(eG, {
          user: a.cherry,
          innerClassName: e_.userGreen
        })]
      })
    })
  },
  eV = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([D.Z], () => D.Z.getAllPending()), {
      pendingAvatar: d
    } = u, f = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(u, ["pendingAvatar"]), p = (0, R.SD)({
      userId: n.id,
      image: d
    }), v = t.type === c.Z.AVATAR_DECORATION, [b] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: x,
      firstNameplate: P
    } = (0, X.Rj)(t), j = null != x, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.Z, eB(eL({}, f), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffect: x,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(ez, {
        user: n
      })]
    }), C = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e,
      avatarDecoration: g
    });
    if (t.type === c.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: e_.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: e_.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          u = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(e_.nameplatePreviewContainerInner, a && u ? e_.sliding : ""),
          children: C(n)
        }) : (0, r.jsx)("div", {
          className: l()(e_.profileEffectPreviewsContainerInner, a && u ? e_.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: e_.nameplatePreviewContainerInner,
      children: C(P)
    }) : (0, r.jsx)("div", {
      className: (null == b ? true : b.type) === c.Z.AVATAR_DECORATION ? e_.previewsContainerInner : e_.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(eB(eL({}, (0, O.ZP)({
        author: t,
        channelId: "1337",
        content: ek.intl.string(ek.t.d5YwK5)
      })), {
        state: eS.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ek.intl.string(ek.t["TN+ZvB"]),
      children: (0, r.jsx)(v.Rny, {
        children: (0, r.jsxs)(v.Zbd, {
          className: e_.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(I.Z, {
            className: e_.mockMessage,
            author: (0, C.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: e_.mockInput,
            children: [(0, r.jsx)(v.oFk, {
              size: "md",
              color: "currentColor",
              className: e_.mockInputButton
            }), (0, r.jsx)(v.EO4, {
              size: "md",
              color: "currentColor",
              className: e_.mockInputButton
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
      product: a,
      category: o,
      returnRef: d,
      analyticsSource: f,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: b,
      tab: h,
      rentalDuration: P
    } = e, j = (0, m.e7)([U.default], () => U.default.getCurrentUser()), O = (0, ey.f)(a), {
      previewingVariantIndex: C
    } = O, I = (0, W.o)(a), y = (0, eP.N)(a, C), T = (0, ej.W)(a, I);
    s()(null != T, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, x.ZP)([...p, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != P ? [g.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, ea.u9)(T.skuId);
    let E = (0, eC.kc)(o),
      A = (0, k.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != j && (0, _.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let S = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      M.default.track(eS.rMx.OPEN_MODAL, {
        type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: f,
        location_stack: w,
        sku_id: T.skuId,
        product_type: S
      }), T.items.forEach(V.oK)
    }, [f, w, T.skuId, T.items, S]);
    let N = (0, Z.r9)(),
      R = t === v.Dvm.EXITING,
      L = (0, eO.t0)(a),
      B = null == L ? true : L.amount,
      D = i.useMemo(() => (0, q.x6)(T) ? T.items.length : 0, [T]),
      {
        activeSlide: F,
        isTransitioning: G
      } = (0, et.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == j ? null : (0, r.jsx)(x.Gt, {
      value: w,
      children: (0, r.jsxs)(v.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: e_.modalRoot,
        returnRef: d,
        transitionState: t,
        size: v.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(v.hzk, {
          "data-migration-pending": true,
          className: e_.modalContent,
          children: [(0, r.jsx)(eF, {
            user: j,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: O,
            selectedVariantIndex: I,
            shouldCheckoutWithOrbs: b,
            activeBundleSlide: F,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: l()(e_.previewContainer, T.skuId === u.a.PREMIUM_TIER_2_3_DAY ? e_.fractionalNitroPreviewContainer : T.type === c.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(E, ")")
            },
            children: [(0, eA.o0)(a.skuId) ? a.skuId === eA.Vt.ORB_PROFILE_BADGE ? N || R ? null : (0, r.jsx)(ef.M, {
              user: j
            }) : a.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(eb.b, {
              product: a,
              className: e_.externalProductProfilePreview
            }) : (0, r.jsx)(eV, {
              user: j,
              product: null != y ? y : T,
              activeBundleSlide: F,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: e_.pdpControls,
              children: [A && (0, r.jsx)(eg.a, {
                product: a,
                selectedVariantIndex: I,
                className: e_.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: T.skuId,
                tab: h
              }), (0, r.jsx)(v.hU, {
                "aria-label": ek.intl.string(ek.t.cpT0Cq),
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
            className: e_.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: e_.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: e_.modalFooterContentContainer,
              children: [(0, r.jsx)(v.Text, {
                variant: "text-sm/semibold",
                className: e_.modalFooterText,
                children: ek.intl.format(ek.t["78ph4b"], {
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