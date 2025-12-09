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
      children: (0, r.jsx)(A.Z, {
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
      children: (0, r.jsx)(v.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(v.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eE.bundlePreviewSlide,
              children: [(0, r.jsx)(eL, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(v.Text, {
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
    }) : (0, ew.o0)(t.skuId) ? (0, r.jsx)(ef.b, {
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
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(v.Text, {
      variant: "text-sm/normal",
      className: eE.learnMoreLink,
      children: eA.intl.format(eA.t.Q1scdE, {
        helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT)
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
    } = b, N = (0, eb.N)(t, I), A = (0, ex.W)(t, P);
    s()(null != A, "Selected product should not be null");
    let E = (0, X.L)(t),
      {
        isPurchased: R,
        isPartiallyOwnedBundle: k,
        isRented: D
      } = (0, X.L)(A),
      {
        isDisabled: U,
        disabledReason: M
      } = (0, J.G)(A.skuId),
      F = (0, K.ne)({
        product: A,
        isPartiallyOwnedBundle: k,
        isPurchased: R
      }),
      W = null != O,
      $ = (0, m.e7)([H.Z], () => H.Z.isClaiming === (null == A ? true : A.skuId)),
      ee = (0, g.ZP)(),
      en = (0, p.wj)(ee),
      er = (0, K.G1)(A),
      ei = (0, K.ql)(A, eS.tuJ.DEFAULT),
      ed = (null == ei ? true : ei.amount) === 0,
      {
        firstAvatarDecoration: em
      } = (0, Q.Rj)(null != N ? N : A),
      ef = i.useMemo(() => (0, K.BH)(A, C), [A, C]),
      {
        handleUseNow: eg,
        isApplying: eh
      } = (0, q.W)({
        product: A,
        onSuccess: u
      }),
      ej = (0, ey.To)(A),
      e_ = (0, eO.J)(A),
      {
        enabled: eR
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      ek = (0, Y.G)(A, false, O),
      eL = (0, eP.Iw)(t),
      eZ = null != eL,
      {
        checkoutEligiblePrices: eU,
        isOrbExclusive: eM,
        hasSufficientOrbs: eF
      } = (0, eC.Ip)({
        product: A,
        isPremiumUser: C,
        hasDiscountOffer: eZ,
        isRental: null != O
      }),
      eG = i.useCallback(() => (0, w.Z)({
        skuId: A.skuId,
        analyticsLocations: _,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eN.dG)()
      }), [_, u, A.skuId]);
    return i.useEffect(() => {
      if (null != em) return (0, T.PO)(em), () => (0, T.PO)(true)
    }, [em]), (0, r.jsxs)("div", {
      className: eE.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eE.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: l
        })
      }), (0, r.jsx)(eB, {
        product: null != N ? N : A,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eE.description,
          children: [(0, r.jsx)(el.Z, {
            product: A,
            isDarkText: !en,
            isOrbExclusive: eM,
            rentalDuration: O
          }), (0, r.jsx)(v.Heading, {
            variant: "heading-xl/extrabold",
            className: eE.headingWithItemTypePill,
            children: ej
          }), (0, r.jsx)(v.Text, {
            variant: "text-sm/normal",
            children: ek
          }), (0, r.jsx)(eD, {
            skuId: A.skuId
          }), E.isPurchased || E.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: eE.priceTag,
            isPartiallyPurchased: k
          }) : er ? (0, r.jsx)(v.Text, {
            variant: "text-md/semibold",
            className: eE.priceTag,
            children: eA.intl.string(eA.t.rt69oo)
          }) : eR ? (0, r.jsx)(ep.a, {
            prices: eU,
            product: A,
            isPremiumUser: C,
            discount: ef,
            hasSufficientOrbs: eF,
            isProductDisabled: U,
            discountOfferAmount: eL
          }) : (0, r.jsxs)("div", {
            className: eE.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: A,
              discount: ef,
              isPremiumUser: C,
              hideStrikethroughPrice: !C || eZ,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eL
            }), C || eZ ? null : (0, r.jsx)(ec.Z, {
              product: A
            })]
          })]
        }), (0, r.jsx)(v.Rny, {
          children: (0, r.jsx)(ev.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eE.variantsSwitch
          })
        }), null !== M && (0, r.jsx)(v.Text, {
          variant: "text-xs/normal",
          className: eE.disabledReason,
          children: M
        }), (0, r.jsx)(v.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (er && !C && !ed) {
              let e;
              return e = eA.intl.string(eA.t.sEAnVH), (0, r.jsx)(S.Z, {
                subscriptionTier: eT.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eu.v,
                onSubscribeModalClose: () => {
                  (0, eu.T)({
                    product: A,
                    category: l,
                    shouldCheckoutWithOrbs: o,
                    returnRef: h,
                    analyticsLocations: _
                  })
                }
              })
            }
            if (!F) return null;
            let e = (0, r.jsx)(v.Button, {
              variant: "primary",
              onClick: eg,
              loading: eh,
              text: eA.intl.string(eA.t.MAS7uK),
              fullWidth: true
            });
            if (W) {
              if (R) return e
            } else if (R && !D) return e;
            return er ? (0, r.jsx)(v.Button, {
              loading: $,
              loadingStartedLabel: eA.intl.string(eA.t["TYw+9s"]),
              loadingFinishedLabel: eA.intl.string(eA.t.Pg1UP5),
              onClick: async () => {
                await (0, z.fK)(A.skuId), u(), (0, eI.Z)({
                  product: A,
                  analyticsLocations: _,
                  purchaseType: ew.o8.PREMIUM_PURCHASE
                })
              },
              text: eA.intl.string(eA.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eU.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  if (null != O) {
                    let e = U ? eA.intl.string(eA.t.cTdr3x) : eA.intl.string(eA.t.zqh7ZM),
                      t = !eF || U,
                      n = eA.intl.formatToPlainString(eA.t.DlNs2T, {
                        orbPrice: ew.As
                      }),
                      l = t ? "".concat(n, ", ").concat(e) : n;
                    return (0, r.jsx)(f.u, {
                      position: "top",
                      text: e,
                      shouldShow: t,
                      "aria-label": false,
                      children: (0, r.jsx)(v.Button, {
                        variant: i ? "primary" : "secondary",
                        onClick: () => {
                          (0, B.qA)({
                            skuId: A.skuId,
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
                                product: A,
                                analyticsLocations: _,
                                itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                purchaseType: ew.o8.ORB,
                                rentalDuration: O,
                                rentalExpiresAt: i
                              })
                            },
                            analyticsLocations: _,
                            rentalDuration: O
                          })
                        },
                        disabled: t,
                        "aria-label": l,
                        text: eA.intl.format(eA.t["4NKuqc"], {
                          orbPrice: ew.As,
                          orbIconHook: () => (0, r.jsx)(v.aQr, {
                            className: eE.orbIconAligned,
                            size: "sm",
                            color: "currentColor"
                          })
                        }),
                        fullWidth: true
                      })
                    })
                  }
                  let t = U ? eA.intl.string(eA.t.cTdr3x) : eA.intl.string(eA.t.zqh7ZM),
                    n = !eF || U,
                    l = eA.intl.formatToPlainString(eA.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    a = n ? "".concat(l, ", ").concat(t) : l;
                  return (0, r.jsx)(f.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(v.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, B.qA)({
                          skuId: A.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, z.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, eI.Z)({
                              product: A,
                              analyticsLocations: _,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: ew.o8.ORB
                            })
                          },
                          analyticsLocations: _
                        })
                      },
                      disabled: n,
                      "aria-label": a,
                      text: eA.intl.format(eA.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(v.aQr, {
                          className: eE.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, K.x6)(A) ? eA.intl.string(eA.t.V1AWw0) : A.type === c.Z.PROFILE_EFFECT ? eA.intl.string(eA.t.kAeDcK) : A.type === c.Z.NAMEPLATE ? eA.intl.string(eA.t.H3vhqU) : eA.intl.string(eA.t.AQ0Veg), eZ ? n = eA.intl.formatToPlainString(eA.t["5U5RB5"], {
                  discountOfferAmount: eL
                }) : eR && (n = eA.intl.formatToPlainString(eA.t["cNSL/j"], {
                  price: (0, V.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(v.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(v.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eG,
                    text: n,
                    fullWidth: true
                  }), e_ && (0, r.jsx)(eo.Z, {
                    primary: i,
                    product: A,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(v.Text, {
          className: a()(eE.disclaimer, !en && eE.disclaimerLight),
          variant: "text-xxs/normal",
          children: er && !R ? eA.intl.string(eA.t.nKdAlO) : null
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
        avatar: (0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
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
      "aria-label": eA.intl.string(eA.t.SZeUdR),
      children: (0, r.jsxs)(v.Rny, {
        children: [(0, r.jsx)(eM, {
          user: l.mallow,
          innerClassName: eE.userBlue
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eE.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["yzW/fZ"]), " - 3"]
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
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eE.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["NG43/6"]), " - 12"]
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
    } = u, f = function(e, t) {
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
    }(u, ["pendingAvatar"]), p = (0, E.SD)({
      userId: n.id,
      image: d
    }), v = t.type === c.Z.AVATAR_DECORATION, [g] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: x,
      firstNameplate: P
    } = (0, Q.Rj)(t), j = null != x, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, ek(eR({}, f), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffect: x,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(eV, {
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
        content: eA.intl.string(eA.t.d5YwK5)
      })), {
        state: eS.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eA.intl.string(eA.t["TN+ZvB"]),
      children: (0, r.jsx)(v.Rny, {
        children: (0, r.jsxs)(v.Zbd, {
          className: eE.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(y.Z, {
            className: eE.mockMessage,
            author: (0, _.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eE.mockInput,
            children: [(0, r.jsx)(v.oFk, {
              size: "md",
              color: "currentColor",
              className: eE.mockInputButton
            }), (0, r.jsx)(v.EO4, {
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
      analyticsSource: f,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: g,
      tab: h,
      rentalDuration: P
    } = e, j = (0, m.e7)([U.default], () => U.default.getCurrentUser()), O = (0, e_.f)(l), {
      previewingVariantIndex: _
    } = O, y = (0, W.o)(l), C = (0, eb.N)(l, _), I = (0, ex.W)(l, y);
    s()(null != I, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, x.ZP)([...p, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(I.skuId);
    let S = (0, ej.kc)(o),
      T = (0, R.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != j && (0, k.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let N = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(eS.rMx.OPEN_MODAL, {
        type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: f,
        location_stack: w,
        sku_id: I.skuId,
        product_type: N
      }), I.items.forEach(z.oK)
    }, [f, w, I.skuId, I.items, N]);
    let A = (0, B.r9)(),
      E = t === v.Dvm.EXITING,
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
      value: w,
      children: (0, r.jsxs)(v.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eE.modalRoot,
        returnRef: d,
        transitionState: t,
        size: v.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(v.hzk, {
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
              backgroundImage: "url(".concat(S, ")")
            },
            children: [(0, ew.o0)(l.skuId) ? l.skuId === ew.Vt.ORB_PROFILE_BADGE ? A || E ? null : (0, r.jsx)(em.M, {
              user: j
            }) : l.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(ef.b, {
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
              }), (0, r.jsx)(v.hU, {
                "aria-label": eA.intl.string(eA.t.cpT0Cq),
                onClick: n,
                icon: v.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != Z && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(v.mzw, {
            "data-migration-pending": true,
            className: eE.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eE.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eE.modalFooterContentContainer,
              children: [(0, r.jsx)(v.Text, {
                variant: "text-sm/semibold",
                className: eE.modalFooterText,
                children: eA.intl.format(eA.t["78ph4b"], {
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