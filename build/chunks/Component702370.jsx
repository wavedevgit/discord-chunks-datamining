/** Chunk was on 2026 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ez
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
  Chunk508925 = require("./508925.jsx"),
  Chunk953405 = require("./953405.jsx"),
  Chunk453713 = require("./453713.jsx"),
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

function eR(e) {
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
      user: l
    } = e, a = i.useRef(null), o = (0, K.x6)(n), {
      firstAvatarDecoration: s
    } = (0, Q.Rj)(n);
    return t.type === c.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: o ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
      children: (0, r.jsx)(eh.R, {
        user: l,
        item: t,
        isHighlighted: true
      })
    }) : t.type === c.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: o ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(N.Z, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: a,
      className: eE.nameplatePreviewContainer,
      children: (0, r.jsx)(I.Z, {
        className: eE.nameplatePreview,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: s,
        isHighlighted: true
      })
    }) : null
  },
  eZ = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, l = t.items.length;
    return (0, r.jsx)("div", {
      className: eE.bundlePreviewContainer,
      children: (0, r.jsx)(f.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(f.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eE.bundlePreviewSlide,
              children: [(0, r.jsx)(eL, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eE.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", s]
              })]
            })
          }, a)
        })
      })
    })
  },
  eB = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, K.x6)(t) ? (0, r.jsx)(eZ, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eS.o0)(t.skuId) ? (0, r.jsx)(ep.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eL, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eD = e => {
    let {
      skuId: t
    } = e;
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(f.Text, {
      variant: "text-sm/normal",
      className: eE.learnMoreLink,
      children: eN.intl.format(eN.t.Q1scdE, {
        helpdeskArticle: F.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eU = e => {
    let {
      product: t,
      user: n,
      category: l,
      shouldCheckoutWithOrbs: o,
      onClose: u,
      returnRef: h,
      previewingVariantIndexProps: b,
      selectedVariantIndex: P,
      activeBundleSlide: j,
      rentalDuration: O
    } = e, {
      analyticsLocations: _
    } = (0, x.ZP)(), y = (0, m.e7)([L.default], () => L.default.locale), C = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: I
    } = b, A = (0, eb.N)(t, I), N = (0, ex.W)(t, P);
    s()(null != N, "Selected product should not be null");
    let E = (0, X.L)(t),
      {
        isPurchased: R,
        isPartiallyOwnedBundle: k
      } = (0, X.L)(N),
      {
        isDisabled: D,
        disabledReason: U
      } = (0, J.G)(N.skuId),
      M = (0, K.ne)({
        product: N,
        isPartiallyOwnedBundle: k,
        isPurchased: R
      }),
      F = (0, m.e7)([H.Z], () => H.Z.isClaiming === (null == N ? true : N.skuId)),
      W = (0, g.ZP)(),
      $ = (0, v.wj)(W),
      ee = (0, K.G1)(N),
      en = (0, K.ql)(N, ew.tuJ.DEFAULT),
      er = (null == en ? true : en.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, Q.Rj)(null != A ? A : N),
      ed = i.useMemo(() => (0, K.BH)(N, C), [N, C]),
      {
        handleUseNow: em,
        isApplying: ep
      } = (0, q.W)({
        product: N,
        onSuccess: u
      }),
      eg = (0, ey.To)(N),
      eh = (0, eO.J)(N),
      {
        enabled: ej
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      e_ = (0, Y.G)(N, false, O),
      eR = (0, eP.Iw)(t),
      ek = null != eR,
      {
        checkoutEligiblePrices: eL,
        isOrbExclusive: eZ,
        hasSufficientOrbs: eU
      } = (0, eC.Ip)({
        product: N,
        isPremiumUser: C,
        hasDiscountOffer: ek,
        isRental: null != O
      }),
      eM = i.useCallback(() => (0, S.Z)({
        skuId: N.skuId,
        analyticsLocations: _,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eA.dG)()
      }), [_, u, N.skuId]);
    return i.useEffect(() => {
      if (null != ei) return (0, T.PO)(ei), () => (0, T.PO)(true)
    }, [ei]), (0, r.jsxs)("div", {
      className: eE.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eE.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: l
        })
      }), (0, r.jsx)(eB, {
        product: null != A ? A : N,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eE.description,
          children: [(0, r.jsx)(el.Z, {
            product: N,
            isDarkText: !$,
            isOrbExclusive: eZ,
            rentalDuration: O
          }), (0, r.jsx)(f.Heading, {
            variant: "heading-xl/extrabold",
            className: eE.headingWithItemTypePill,
            children: eg
          }), (0, r.jsx)(f.Text, {
            variant: "text-sm/normal",
            children: e_
          }), (0, r.jsx)(eD, {
            skuId: N.skuId
          }), E.isPurchased || E.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: eE.priceTag,
            isPartiallyPurchased: k
          }) : ee ? (0, r.jsx)(f.Text, {
            variant: "text-md/semibold",
            className: eE.priceTag,
            children: eN.intl.string(eN.t.rt69oo)
          }) : ej ? (0, r.jsx)(ev.a, {
            prices: eL,
            product: N,
            isPremiumUser: C,
            discount: ed,
            hasSufficientOrbs: eU,
            isProductDisabled: D,
            discountOfferAmount: eR
          }) : (0, r.jsxs)("div", {
            className: eE.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: N,
              discount: ed,
              isPremiumUser: C,
              hideStrikethroughPrice: !C || ek,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eR
            }), C || ek ? null : (0, r.jsx)(ec.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(f.Rny, {
          children: (0, r.jsx)(ef.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eE.variantsSwitch
          })
        }), null !== U && (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          className: eE.disabledReason,
          children: U
        }), (0, r.jsx)(f.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !C && !er) {
              let e;
              return e = eN.intl.string(eN.t.sEAnVH), (0, r.jsx)(w.Z, {
                subscriptionTier: eT.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eu.v,
                onSubscribeModalClose: () => {
                  (0, eu.T)({
                    product: N,
                    category: l,
                    shouldCheckoutWithOrbs: o,
                    returnRef: h,
                    analyticsLocations: _
                  })
                }
              })
            }
            return M ? R ? (0, r.jsx)(f.Button, {
              variant: "primary",
              onClick: em,
              loading: ep,
              text: eN.intl.string(eN.t.MAS7uK),
              fullWidth: true
            }) : ee ? (0, r.jsx)(f.Button, {
              loading: F,
              loadingStartedLabel: eN.intl.string(eN.t["TYw+9s"]),
              loadingFinishedLabel: eN.intl.string(eN.t.Pg1UP5),
              onClick: async () => {
                await (0, z.fK)(N.skuId), u(), (0, eI.Z)({
                  product: N,
                  analyticsLocations: _,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: eN.intl.string(eN.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eL.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eA.pK.DISCORD_ORB) {
                  if (null != O) {
                    let e = D ? eN.intl.string(eN.t.cTdr3x) : eN.intl.string(eN.t.zqh7ZM),
                      t = !eU || D,
                      n = eN.intl.formatToPlainString(eN.t.DlNs2T, {
                        orbPrice: eS.As
                      }),
                      l = t ? "".concat(n, ", ").concat(e) : n;
                    return (0, r.jsx)(p.u, {
                      position: "top",
                      text: e,
                      shouldShow: t,
                      "aria-label": false,
                      children: (0, r.jsx)(f.Button, {
                        variant: i ? "primary" : "secondary",
                        onClick: () => {
                          (0, B.qA)({
                            skuId: N.skuId,
                            onCheckoutSuccess: e => {
                              var t, n;
                              let {
                                entitlements: r
                              } = e;
                              (0, z.qg)({
                                variantsReturnStyle: d.v.VARIANTS_GROUP
                              }), u();
                              let i = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(y, {
                                minute: "numeric",
                                hour: "numeric",
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                              }) : true;
                              (0, eI.Z)({
                                product: N,
                                analyticsLocations: _,
                                itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                purchaseType: eS.o8.ORB,
                                rentalDuration: O,
                                rentalExpiresAt: i
                              })
                            },
                            analyticsLocations: _,
                            isRental: true
                          })
                        },
                        disabled: t,
                        "aria-label": l,
                        text: eN.intl.format(eN.t["4NKuqc"], {
                          orbPrice: eS.As,
                          orbIconHook: () => (0, r.jsx)(f.aQr, {
                            className: eE.orbIconAligned,
                            size: "sm",
                            color: "currentColor"
                          })
                        }),
                        fullWidth: true
                      })
                    })
                  }
                  let t = D ? eN.intl.string(eN.t.cTdr3x) : eN.intl.string(eN.t.zqh7ZM),
                    n = !eU || D,
                    l = eN.intl.formatToPlainString(eN.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    a = n ? "".concat(l, ", ").concat(t) : l;
                  return (0, r.jsx)(p.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(f.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, B.qA)({
                          skuId: N.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, z.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, eI.Z)({
                              product: N,
                              analyticsLocations: _,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eS.o8.ORB
                            })
                          },
                          analyticsLocations: _
                        })
                      },
                      disabled: n,
                      "aria-label": a,
                      text: eN.intl.format(eN.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(f.aQr, {
                          className: eE.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, K.x6)(N) ? eN.intl.string(eN.t.V1AWw0) : N.type === c.Z.PROFILE_EFFECT ? eN.intl.string(eN.t.kAeDcK) : N.type === c.Z.NAMEPLATE ? eN.intl.string(eN.t.H3vhqU) : eN.intl.string(eN.t.AQ0Veg), ek ? n = eN.intl.formatToPlainString(eN.t["5U5RB5"], {
                  discountOfferAmount: eR
                }) : ej && (n = eN.intl.formatToPlainString(eN.t["cNSL/j"], {
                  price: (0, V.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(f.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(f.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eM,
                    text: n,
                    fullWidth: true
                  }), eh && (0, r.jsx)(eo.Z, {
                    primary: i,
                    product: N,
                    onSuccess: u
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(f.Text, {
          className: a()(eE.disclaimer, !$ && eE.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !R ? eN.intl.string(eN.t.nKdAlO) : null
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
      className: eE.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(f.qEK, {
          src: t.avatarSrc,
          size: f.EFr.SIZE_32,
          "aria-label": t.name,
          status: f.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eE.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eF = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, l = (0, C.w$)();
    return (0, r.jsx)("div", {
      className: eE.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eN.intl.string(eN.t.SZeUdR),
      children: (0, r.jsxs)(f.Rny, {
        children: [(0, r.jsx)(eM, {
          user: l.mallow,
          innerClassName: eE.userBlue
        }), (0, r.jsxs)(f.Text, {
          variant: "text-sm/semibold",
          className: eE.nameplateRightPanePreviewSectionGroup,
          children: [eN.intl.string(eN.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eM, {
          user: l.phibi,
          innerClassName: eE.userPink
        }), (0, r.jsx)("div", {
          className: eE.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(I.Z, {
            className: eE.nameplatePreview,
            innerClassName: eE.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eM, {
          user: l.locke,
          innerClassName: eE.userPink
        }), (0, r.jsxs)(f.Text, {
          variant: "text-sm/semibold",
          className: eE.nameplateRightPanePreviewSectionGroup,
          children: [eN.intl.string(eN.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eM, {
          user: l.boom,
          innerClassName: eE.userGreen
        }), (0, r.jsx)(eM, {
          user: l.cherry,
          innerClassName: eE.userGreen
        })]
      })
    })
  },
  eG = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: l
    } = e, o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([D.Z], () => D.Z.getAllPending()), {
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
    }(u, ["pendingAvatar"]), v = (0, E.SD)({
      userId: n.id,
      image: d
    }), f = t.type === c.Z.AVATAR_DECORATION, [g] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: x,
      firstNameplate: P
    } = (0, Q.Rj)(t), j = null != x, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.Z, ek(eR({}, p), {
        pendingAvatar: v,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffect: x,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: f,
        hideExampleButton: true,
        interactive: false
      })), f && (0, r.jsx)(eV, {
        user: n
      })]
    }), _ = e => (0, r.jsx)(eF, {
      user: n,
      nameplate: e,
      avatarDecoration: b
    });
    if (t.type === c.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: eE.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eE.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          u = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eE.nameplatePreviewContainerInner, l && u ? eE.sliding : ""),
          children: _(n)
        }) : (0, r.jsx)("div", {
          className: a()(eE.profileEffectPreviewsContainerInner, l && u ? eE.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: eE.nameplatePreviewContainerInner,
      children: _(P)
    }) : (0, r.jsx)("div", {
      className: (null == g ? true : g.type) === c.Z.AVATAR_DECORATION ? eE.previewsContainerInner : eE.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  eV = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(ek(eR({}, (0, O.ZP)({
        author: t,
        channelId: "1337",
        content: eN.intl.string(eN.t.d5YwK5)
      })), {
        state: ew.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eN.intl.string(eN.t["TN+ZvB"]),
      children: (0, r.jsx)(f.Rny, {
        children: (0, r.jsxs)(f.Zbd, {
          className: eE.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(y.Z, {
            className: eE.mockMessage,
            author: (0, _.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eE.mockInput,
            children: [(0, r.jsx)(f.oFk, {
              size: "md",
              color: "currentColor",
              className: eE.mockInputButton
            }), (0, r.jsx)(f.EO4, {
              size: "md",
              color: "currentColor",
              className: eE.mockInputButton
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
      product: l,
      category: o,
      returnRef: d,
      analyticsSource: p,
      analyticsLocations: v,
      shouldCheckoutWithOrbs: g,
      tab: h,
      rentalDuration: P
    } = e, j = (0, m.e7)([U.default], () => U.default.getCurrentUser()), O = (0, e_.f)(l), {
      previewingVariantIndex: _
    } = O, y = (0, W.o)(l), C = (0, eb.N)(l, _), I = (0, ex.W)(l, y);
    s()(null != I, "Selected product should not be null");
    let {
      analyticsLocations: S
    } = (0, x.ZP)([...v, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(I.skuId);
    let w = (0, ej.kc)(o),
      T = (0, R.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != j && (0, k.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let A = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(ew.rMx.OPEN_MODAL, {
        type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: p,
        location_stack: S,
        sku_id: I.skuId,
        product_type: A
      }), I.items.forEach(z.oK)
    }, [p, S, I.skuId, I.items, A]);
    let N = (0, B.r9)(),
      E = t === f.Dvm.EXITING,
      L = (0, eP.t0)(l),
      Z = null == L ? true : L.amount,
      D = i.useMemo(() => (0, K.x6)(I) ? I.items.length : 0, [I]),
      {
        activeSlide: F,
        isTransitioning: G
      } = (0, ee.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == j ? null : (0, r.jsx)(x.Gt, {
      value: S,
      children: (0, r.jsxs)(f.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eE.modalRoot,
        returnRef: d,
        transitionState: t,
        size: f.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(f.hzk, {
          "data-migration-pending": true,
          className: eE.modalContent,
          children: [(0, r.jsx)(eU, {
            user: j,
            product: l,
            category: o,
            onClose: n,
            previewingVariantIndexProps: O,
            selectedVariantIndex: y,
            shouldCheckoutWithOrbs: g,
            activeBundleSlide: F,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: a()(eE.previewContainer, I.skuId === u.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : I.type === c.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(w, ")")
            },
            children: [(0, eS.o0)(l.skuId) ? l.skuId === eS.Vt.ORB_PROFILE_BADGE ? N || E ? null : (0, r.jsx)(em.M, {
              user: j
            }) : l.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(ep.b, {
              product: l,
              className: eE.externalProductProfilePreview
            }) : (0, r.jsx)(eG, {
              user: j,
              product: null != C ? C : I,
              activeBundleSlide: F,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: eE.pdpControls,
              children: [T && (0, r.jsx)(eg.a, {
                product: l,
                selectedVariantIndex: y,
                className: eE.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.n, {
                skuId: I.skuId,
                tab: h
              }), (0, r.jsx)(f.hU, {
                "aria-label": eN.intl.string(eN.t.cpT0Cq),
                onClick: n,
                icon: f.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != Z && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(f.mzw, {
            "data-migration-pending": true,
            className: eE.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eE.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eE.modalFooterContentContainer,
              children: [(0, r.jsx)(f.Text, {
                variant: "text-sm/semibold",
                className: eE.modalFooterText,
                children: eN.intl.format(eN.t["78ph4b"], {
                  discountOfferAmount: Z
                })
              }), (null == L ? true : L.expiresAt) != null && (0, r.jsx)(er.R, {
                endDate: L.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }