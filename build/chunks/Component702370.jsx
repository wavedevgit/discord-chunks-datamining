/** Chunk was on 6377 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eV
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
  Chunk104505 = require("./104505.js"),
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

function ek(e) {
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
let eB = e => {
    let {
      item: t,
      product: n,
      user: a
    } = e, l = i.useRef(null), o = (0, _.X)(l), s = (0, K.x6)(n), {
      firstAvatarDecoration: u
    } = (0, $.Rj)(n);
    return t.type === c.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: s ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
      children: (0, r.jsx)(eb.R, {
        user: a,
        item: t
      })
    }) : t.type === c.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: s ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(N.Z, {
        skuId: t.skuId,
        isHighlighted: o,
        removeSetHeight: true
      })
    }) : t.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: l,
      className: eR.nameplatePreviewContainer,
      children: (0, r.jsx)(y.Z, {
        className: eR.nameplatePreview,
        nameplate: t,
        isHighlighted: o,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: u
      })
    }) : null
  },
  eZ = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: eR.bundlePreviewContainer,
      children: (0, r.jsx)(v.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(v.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: eR.bundlePreviewSlide,
              children: [(0, r.jsx)(eB, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(v.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eR.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", s]
              })]
            })
          }, l)
        })
      })
    })
  },
  eD = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, K.x6)(t) ? (0, r.jsx)(eZ, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eT.o0)(t.skuId) ? (0, r.jsx)(ef.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eB, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eU = e => {
    let {
      skuId: t
    } = e;
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(v.Text, {
      variant: "text-sm/normal",
      className: eR.learnMoreLink,
      children: eN.intl.format(eN.t.Q1scdE, {
        helpdeskArticle: G.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eM = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: u,
      returnRef: g,
      previewingVariantIndexProps: b,
      selectedVariantIndex: P,
      activeBundleSlide: _,
      rentalDuration: j
    } = e, {
      analyticsLocations: O
    } = (0, x.ZP)(), C = (0, m.e7)([B.default], () => B.default.locale), w = H.ZP.canUseCollectibles(n), {
      previewingVariantIndex: I
    } = b, y = (0, ex.N)(t, I), E = (0, eP.W)(t, P);
    s()(null != E, "Selected product should not be null");
    let N = (0, Q.L)(t),
      {
        isPurchased: R,
        isPartiallyOwnedBundle: k
      } = (0, Q.L)(E),
      {
        isDisabled: L,
        disabledReason: U
      } = (0, X.G)(E.skuId),
      M = (0, K.ne)({
        product: E,
        isPartiallyOwnedBundle: k,
        isPurchased: R
      }),
      F = (0, m.e7)([W.Z], () => W.Z.isClaiming === (null == E ? true : E.skuId)),
      G = (0, h.ZP)(),
      q = (0, f.wj)(G),
      ee = (0, K.G1)(E),
      et = (0, K.ql)(E, eS.tuJ.DEFAULT),
      er = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, $.Rj)(null != y ? y : E),
      ea = i.useMemo(() => (0, K.BH)(E, w), [E, w]),
      {
        handleUseNow: em,
        isApplying: ep
      } = (0, Y.W)({
        product: E,
        onSuccess: u
      }),
      ef = (0, ew.To)(E),
      eg = (0, eO.J)(E),
      {
        enabled: eb
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      ej = (0, J.G)(E, false, j),
      eC = (0, e_.Iw)(t),
      ek = null != eC,
      {
        checkoutEligiblePrices: eL,
        isOrbExclusive: eB,
        hasSufficientOrbs: eZ
      } = (0, eI.Ip)({
        product: E,
        isPremiumUser: w,
        hasDiscountOffer: ek,
        isRental: null != j
      }),
      eM = i.useCallback(() => (0, T.Z)({
        skuId: E.skuId,
        analyticsLocations: O,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eE.dG)()
      }), [O, u, E.skuId]);
    return i.useEffect(() => {
      if (null != ei) return (0, A.PO)(ei), () => (0, A.PO)(true)
    }, [ei]), (0, r.jsxs)("div", {
      className: eR.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eR.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: a
        })
      }), (0, r.jsx)(eD, {
        product: null != y ? y : E,
        user: n,
        activeSlide: _
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eR.description,
          children: [(0, r.jsx)(el.Z, {
            product: E,
            isDarkText: !q,
            isOrbExclusive: eB,
            rentalDuration: j
          }), (0, r.jsx)(v.Heading, {
            variant: "heading-xl/extrabold",
            className: eR.headingWithItemTypePill,
            children: ef
          }), (0, r.jsx)(v.Text, {
            variant: "text-sm/normal",
            children: ej
          }), (0, r.jsx)(eU, {
            skuId: E.skuId
          }), N.isPurchased || N.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: eR.priceTag,
            isPartiallyPurchased: k
          }) : ee ? (0, r.jsx)(v.Text, {
            variant: "text-md/semibold",
            className: eR.priceTag,
            children: eN.intl.string(eN.t.rt69oo)
          }) : eb ? (0, r.jsx)(ev.a, {
            prices: eL,
            product: E,
            isPremiumUser: w,
            discount: ea,
            hasSufficientOrbs: eZ,
            isProductDisabled: L,
            discountOfferAmount: eC
          }) : (0, r.jsxs)("div", {
            className: eR.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: E,
              discount: ea,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || ek,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eC
            }), w || ek ? null : (0, r.jsx)(eu.Z, {
              product: E
            })]
          })]
        }), (0, r.jsx)(v.Rny, {
          children: (0, r.jsx)(eh.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eR.variantsSwitch
          })
        }), null !== U && (0, r.jsx)(v.Text, {
          variant: "text-xs/normal",
          className: eR.disabledReason,
          children: U
        }), (0, r.jsx)(v.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !w && !er) {
              let e;
              return e = eN.intl.string(eN.t.sEAnVH), (0, r.jsx)(S.Z, {
                subscriptionTier: eA.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: E,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: g,
                    analyticsLocations: O
                  })
                }
              })
            }
            return M ? R ? (0, r.jsx)(v.Button, {
              variant: "primary",
              onClick: em,
              loading: ep,
              text: eN.intl.string(eN.t.MAS7uK),
              fullWidth: true
            }) : ee ? (0, r.jsx)(v.Button, {
              loading: F,
              loadingStartedLabel: eN.intl.string(eN.t["TYw+9s"]),
              loadingFinishedLabel: eN.intl.string(eN.t.Pg1UP5),
              onClick: async () => {
                await (0, V.fK)(E.skuId), u(), (0, ey.Z)({
                  product: E,
                  analyticsLocations: O,
                  purchaseType: eT.o8.PREMIUM_PURCHASE
                })
              },
              text: eN.intl.string(eN.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eL.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eE.pK.DISCORD_ORB) {
                  if (null != j) {
                    let e = L ? eN.intl.string(eN.t.cTdr3x) : eN.intl.string(eN.t.zqh7ZM),
                      t = !eZ || L,
                      n = eN.intl.formatToPlainString(eN.t.DlNs2T, {
                        orbPrice: eT.As
                      }),
                      a = t ? "".concat(n, ", ").concat(e) : n;
                    return (0, r.jsx)(p.u, {
                      position: "top",
                      text: e,
                      shouldShow: t,
                      "aria-label": false,
                      children: (0, r.jsx)(v.Button, {
                        variant: i ? "primary" : "secondary",
                        onClick: () => {
                          (0, D.qA)({
                            skuId: E.skuId,
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
                              (0, ey.Z)({
                                product: E,
                                analyticsLocations: O,
                                itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                purchaseType: eT.o8.ORB,
                                rentalDuration: j,
                                rentalExpiresAt: i
                              })
                            },
                            analyticsLocations: O,
                            isRental: true
                          })
                        },
                        disabled: t,
                        "aria-label": a,
                        text: eN.intl.format(eN.t["4NKuqc"], {
                          orbPrice: eT.As,
                          orbIconHook: () => (0, r.jsx)(v.aQr, {
                            className: eR.orbIconAligned,
                            size: "sm",
                            color: "currentColor"
                          })
                        }),
                        fullWidth: true
                      })
                    })
                  }
                  let t = L ? eN.intl.string(eN.t.cTdr3x) : eN.intl.string(eN.t.zqh7ZM),
                    n = !eZ || L,
                    a = eN.intl.formatToPlainString(eN.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    l = n ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(p.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(v.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, D.qA)({
                          skuId: E.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, ey.Z)({
                              product: E,
                              analyticsLocations: O,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eT.o8.ORB
                            })
                          },
                          analyticsLocations: O
                        })
                      },
                      disabled: n,
                      "aria-label": l,
                      text: eN.intl.format(eN.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(v.aQr, {
                          className: eR.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, K.x6)(E) ? eN.intl.string(eN.t.V1AWw0) : E.type === c.Z.PROFILE_EFFECT ? eN.intl.string(eN.t.kAeDcK) : E.type === c.Z.NAMEPLATE ? eN.intl.string(eN.t.H3vhqU) : eN.intl.string(eN.t.AQ0Veg), ek ? n = eN.intl.formatToPlainString(eN.t["5U5RB5"], {
                  discountOfferAmount: eC
                }) : eb && (n = eN.intl.formatToPlainString(eN.t["cNSL/j"], {
                  price: (0, z.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(v.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(v.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eM,
                    text: n,
                    fullWidth: true
                  }), eg && (0, r.jsx)(es.Z, {
                    primary: i,
                    product: E,
                    onSuccess: u
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(v.Text, {
          className: l()(eR.disclaimer, !q && eR.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !R ? eN.intl.string(eN.t.nKdAlO) : null
        })]
      })]
    })
  },
  eF = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eR.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(eR.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eG = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, a = (0, I.w$)();
    return (0, r.jsx)("div", {
      className: eR.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eN.intl.string(eN.t.SZeUdR),
      children: (0, r.jsxs)(v.Rny, {
        children: [(0, r.jsx)(eF, {
          user: a.mallow,
          innerClassName: eR.userBlue
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [eN.intl.string(eN.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eF, {
          user: a.phibi,
          innerClassName: eR.userPink
        }), (0, r.jsx)("div", {
          className: eR.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(y.Z, {
            className: eR.nameplatePreview,
            innerClassName: eR.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eF, {
          user: a.locke,
          innerClassName: eR.userPink
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [eN.intl.string(eN.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eF, {
          user: a.boom,
          innerClassName: eR.userGreen
        }), (0, r.jsx)(eF, {
          user: a.cherry,
          innerClassName: eR.userGreen
        })]
      })
    })
  },
  eH = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion), s = H.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([U.Z], () => U.Z.getAllPending()), {
      pendingAvatar: d
    } = u, p = function(e, t) {
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
    }(u, ["pendingAvatar"]), f = (0, R.SD)({
      userId: n.id,
      image: d
    }), v = t.type === c.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: x,
      firstNameplate: P
    } = (0, $.Rj)(t), _ = null != x, j = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.Z, eL(ek({}, p), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffect: x,
        disabledInputs: true,
        hideMessageInput: !_,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(ez, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e,
      avatarDecoration: b
    });
    if (t.type === c.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: eR.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eR.combinedPreviewContent,
          children: j()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          u = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === c.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(eR.nameplatePreviewContainerInner, a && u ? eR.sliding : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: l()(eR.profileEffectPreviewsContainerInner, a && u ? eR.sliding : ""),
          children: j()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: eR.nameplatePreviewContainerInner,
      children: O(P)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === c.Z.AVATAR_DECORATION ? eR.previewsContainerInner : eR.profileEffectPreviewsContainerInner,
      children: j()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(eL(ek({}, (0, O.ZP)({
        author: t,
        channelId: "1337",
        content: eN.intl.string(eN.t.d5YwK5)
      })), {
        state: eS.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eN.intl.string(eN.t["TN+ZvB"]),
      children: (0, r.jsx)(v.Rny, {
        children: (0, r.jsxs)(v.Zbd, {
          className: eR.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(w.Z, {
            className: eR.mockMessage,
            author: (0, C.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eR.mockInput,
            children: [(0, r.jsx)(v.oFk, {
              size: "md",
              color: "currentColor",
              className: eR.mockInputButton
            }), (0, r.jsx)(v.EO4, {
              size: "md",
              color: "currentColor",
              className: eR.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eV = e => {
    let {
      transitionState: t,
      onClose: n,
      product: a,
      category: o,
      returnRef: d,
      analyticsSource: p,
      analyticsLocations: f,
      shouldCheckoutWithOrbs: h,
      tab: g,
      rentalDuration: P
    } = e, _ = (0, m.e7)([M.default], () => M.default.getCurrentUser()), j = (0, eC.f)(a), {
      previewingVariantIndex: O
    } = j, C = (0, q.o)(a), w = (0, ex.N)(a, O), I = (0, eP.W)(a, C);
    s()(null != I, "Selected product should not be null");
    let {
      analyticsLocations: y
    } = (0, x.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ea.u9)(I.skuId);
    let T = (0, ej.kc)(o),
      S = (0, k.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != _ && (0, L.Z)(_.id, _.getAvatarURL(true, 80))
    }, [_]);
    let A = i.useMemo(() => (0, K.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      F.default.track(eS.rMx.OPEN_MODAL, {
        type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: p,
        location_stack: y,
        sku_id: I.skuId,
        product_type: A
      }), I.items.forEach(V.oK)
    }, [p, y, I.skuId, I.items, A]);
    let E = (0, D.r9)(),
      N = t === v.Dvm.EXITING,
      R = (0, e_.t0)(a),
      B = null == R ? true : R.amount,
      Z = i.useMemo(() => (0, K.x6)(I) ? I.items.length : 0, [I]),
      {
        activeSlide: U,
        isTransitioning: G
      } = (0, et.b)({
        slideCount: Z,
        intervalMs: 5e3
      });
    return null == _ ? null : (0, r.jsx)(x.Gt, {
      value: y,
      children: (0, r.jsxs)(v.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eR.modalRoot,
        returnRef: d,
        transitionState: t,
        size: v.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(v.hzk, {
          "data-migration-pending": true,
          className: eR.modalContent,
          children: [(0, r.jsx)(eM, {
            user: _,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: j,
            selectedVariantIndex: C,
            shouldCheckoutWithOrbs: h,
            activeBundleSlide: U,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: l()(eR.previewContainer, I.skuId === u.a.PREMIUM_TIER_2_3_DAY ? eR.fractionalNitroPreviewContainer : I.type === c.Z.AVATAR_DECORATION ? eR.collectiblePreviewsContainerWithChat : eR.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(T, ")")
            },
            children: [(0, eT.o0)(a.skuId) ? a.skuId === eT.Vt.ORB_PROFILE_BADGE ? E || N ? null : (0, r.jsx)(ep.M, {
              user: _
            }) : a.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ef.b, {
              product: a,
              className: eR.externalProductProfilePreview
            }) : (0, r.jsx)(eH, {
              user: _,
              product: null != w ? w : I,
              activeBundleSlide: U,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: eR.pdpControls,
              children: [S && (0, r.jsx)(eg.a, {
                product: a,
                selectedVariantIndex: C,
                className: eR.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: I.skuId,
                tab: g
              }), (0, r.jsx)(v.hU, {
                "aria-label": eN.intl.string(eN.t.cpT0Cq),
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
            className: eR.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eR.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eR.modalFooterContentContainer,
              children: [(0, r.jsx)(v.Text, {
                variant: "text-sm/semibold",
                className: eR.modalFooterText,
                children: eN.intl.format(eN.t["78ph4b"], {
                  discountOfferAmount: B
                })
              }), (null == R ? true : R.expiresAt) != null && (0, r.jsx)(ei.R, {
                endDate: R.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }