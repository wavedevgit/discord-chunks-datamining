/** Chunk was on 2026 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eV
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk873546 = require("./873546.js"),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk727637 = require("./727637.js"),
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
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk484459 = require("./484459.js"),
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
  Chunk141011 = require("./141011.jsx"),
  Chunk525518 = require("./525518.jsx"),
  Chunk168020 = require("./168020.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk224068 = require("./224068.jsx"),
  Chunk813083 = require("./813083.jsx"),
  Chunk680942 = require("./680942.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk539598 = require("./539598.jsx"),
  Chunk237031 = require("./237031.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk38914 = require("./38914.jsx"),
  Chunk259673 = require("./259673.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk953405 = require("./953405.jsx"),
  Chunk453713 = require("./453713.jsx"),
  Chunk325834 = require("./325834.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk332246 = require("./332246.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk794324 = require("./794324.js"),
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
let eZ = e => {
    let {
      item: t,
      user: n,
      isBundleItem: l = false
    } = e, a = i.useRef(null), o = (0, h.Z)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(eh.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(A.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(eP.Z, {
        className: ek.nameplatePreview,
        nameplate: t,
        isHighlighted: o,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eB = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, l = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(g.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(g.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: ek.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(g.Text, {
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
  eD = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, W.x6)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eS.o0)(t.skuId) ? (0, r.jsx)(ep.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eZ, {
      item: t.items[0],
      user: n
    }) : null
  },
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(g.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eA.intl.format(eA.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(eE.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eF = e => {
    let {
      product: t,
      user: n,
      category: l,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: h,
      selectedVariantIndex: x,
      tab: j,
      activeBundleSlide: _,
      variantType: C
    } = e, {
      analyticsLocations: y
    } = (0, O.ZP)(), w = U.ZP.canUseCollectibles(n), {
      previewingVariantIndex: T
    } = h, S = (0, ex.N)(t, T), N = (0, ej.W)(t, x);
    s()(null != N, "Selected product should not be null");
    let A = (0, X.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: R
      } = (0, X.L)(N),
      {
        isDisabled: B,
        disabledReason: D
      } = (0, Y.G)(N.skuId),
      M = (0, W.ne)({
        product: N,
        isPartiallyOwnedBundle: R,
        isPurchased: k
      }),
      F = (0, p.e7)([H.Z], () => H.Z.isClaiming === (null == N ? true : N.skuId)),
      V = (0, P.ZP)(),
      Q = (0, v.wj)(V),
      $ = (0, W.G1)(N),
      et = (0, W.ql)(N, eE.tuJ.DEFAULT),
      en = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, J.Rj)(null != S ? S : N),
      ei = i.useMemo(() => (0, W.BH)(N, w), [N, w]),
      {
        handleUseNow: ed,
        isApplying: em
      } = (0, K.W)({
        product: N,
        onSuccess: c
      }),
      ef = (0, ey.To)(N),
      {
        enabled: ep
      } = (0, L.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eh = (0, eO.Iw)(t),
      eP = null != eh,
      {
        checkoutEligiblePrices: e_,
        isOrbExclusive: eC,
        hasSufficientOrbs: eZ
      } = (0, ew.Ip)({
        product: N,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: eP
      }),
      eB = i.useCallback(() => (0, E.Z)({
        skuId: N.skuId,
        analyticsLocations: y,
        variantsReturnStyle: f.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [y, c, N.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, b.cV)(er), () => (0, b.cV)(true)
    }, [er]);
    let eF = (0, q.G)(N);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: l,
          display: ea.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != S ? S : N,
        user: n,
        activeSlide: _
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(el.Z, {
            product: N,
            isDarkText: !Q,
            isOrbExclusive: eC
          }), (0, r.jsx)(g.X6q, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: ef
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: eF
          }), (0, r.jsx)(eM, {
            skuId: N.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(ee.U, {
            className: ek.priceTag,
            isPartiallyPurchased: R
          }) : $ ? (0, r.jsx)(g.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eA.intl.string(eA.t.rt69oq)
          }) : ep ? (0, r.jsx)(ev.a, {
            prices: e_,
            product: N,
            isPremiumUser: w,
            discount: ei,
            hasSufficientOrbs: eZ,
            isProductDisabled: B,
            discountOfferAmount: eh
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: N,
              discount: ei,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || eP,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eh
            }), w || eP ? null : (0, r.jsx)(ec.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(g.Rny, {
          children: C === eS.Ch.DEFAULT ? (0, r.jsx)(eg.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: ek.variantsSwitch
          }) : (0, r.jsx)(eb.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: ek.variantsThumbnail,
            selectedVariantIndex: x
          })
        }), null !== D && (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: D
        }), (0, r.jsx)(g.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if ($ && !w && !en) {
              let e;
              return e = eA.intl.string(eA.t.sEAnVF), (0, r.jsx)(I.Z, {
                subscriptionTier: eI.Si.TIER_2,
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
                    returnRef: m,
                    analyticsLocations: y,
                    variantType: C
                  })
                }
              })
            }
            return M ? k ? (0, r.jsx)(g.zxk, {
              variant: "primary",
              onClick: ed,
              loading: em,
              text: eA.intl.string(eA.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(g.zxk, {
              loading: F,
              loadingStartedLabel: eA.intl.string(eA.t["TYw+9v"]),
              loadingFinishedLabel: eA.intl.string(eA.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(N.skuId), c(), (0, eT.Z)({
                  product: N,
                  analyticsLocations: y,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: eA.intl.string(eA.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: e_.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, Z.qA)({
                        skuId: N.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, z.qg)({
                            variantsReturnStyle: f.v.VARIANTS_GROUP
                          }), c(), (0, eT.Z)({
                            product: N,
                            analyticsLocations: y,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eS.o8.ORB
                          })
                        },
                        analyticsLocations: y
                      })
                    },
                    i = B ? eA.intl.string(eA.t.cTdr39) : eA.intl.string(eA.t.zqh7ZG),
                    l = !eZ || B,
                    a = eA.intl.formatToPlainString(eA.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = l ? "".concat(a, ", ").concat(i) : a;
                  return (0, r.jsx)(g.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: l,
                    "aria-label": false,
                    children: i => (0, r.jsx)(g.zxk, eL(eR({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: l,
                      "aria-label": o,
                      text: eA.intl.format(eA.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(g.aQr, {
                          className: ek.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let i = !$ && !en && !u.tq && !eC && M,
                  l = (0, W.x6)(N) ? eA.intl.string(eA.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eA.intl.string(eA.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eA.intl.string(eA.t.H3vhqa) : eA.intl.string(eA.t.AQ0Ven);
                return eP ? l = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                  discountOfferAmount: eh
                }) : ep && (l = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                  price: (0, G.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(g.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(g.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: l,
                    fullWidth: true
                  }), i && (0, r.jsx)(eo.Z, {
                    primary: n,
                    product: N,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(g.Text, {
          className: a()(ek.disclaimer, !Q && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? eA.intl.string(eA.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eU = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(_.Z, {
        avatar: (0, r.jsx)(g.qEK, {
          src: t.avatarSrc,
          size: g.EFr.SIZE_32,
          "aria-label": t.name,
          status: g.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(ek.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eG = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, S.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eA.intl.string(eA.t.SZeUdX),
      children: (0, r.jsxs)(g.Rny, {
        children: [(0, r.jsx)(eU, {
          user: i.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eU, {
          user: i.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eP.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eU, {
          user: i.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eU, {
          user: i.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eU, {
          user: i.cherry,
          innerClassName: ek.userGreen
        })]
      })
    })
  },
  ez = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: l
    } = e, o = (0, p.e7)([x.Z], () => x.Z.useReducedMotion), s = U.ZP.canUsePremiumProfileCustomization(n), c = (0, p.cj)([B.Z], () => B.Z.getAllPending()), {
      pendingAvatar: u
    } = c, m = function(e, t) {
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
    }(c, ["pendingAvatar"]), f = (0, k.SD)({
      userId: n.id,
      image: u
    }), v = t.type === d.Z.AVATAR_DECORATION, [g] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: h,
      firstNameplate: P
    } = (0, J.Rj)(t), j = null != h, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eL(eR({}, m), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffectId: null == h ? true : h.id,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideViewFullProfileButton: true,
        interactive: false
      })), v && (0, r.jsx)(eH, {
        user: n
      })]
    }), _ = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, Q.L)(t)) return (0, r.jsx)("div", {
        className: ek.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: ek.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(ek.nameplatePreviewContainerInner, l && c ? ek.sliding : ""),
          children: _(n)
        }) : (0, r.jsx)("div", {
          className: a()(ek.profileEffectPreviewsContainerInner, l && c ? ek.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: _(P)
    }) : (0, r.jsx)("div", {
      className: (null == g ? true : g.type) === d.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  eH = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eL(eR({}, (0, y.ZP)({
        author: t,
        channelId: "1337",
        content: eA.intl.string(eA.t.d5YwKy)
      })), {
        state: eE.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eA.intl.string(eA.t["TN+ZvL"]),
      children: (0, r.jsx)(g.Rny, {
        children: (0, r.jsxs)(g.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(T.Z, {
            className: ek.mockMessage,
            author: (0, w.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: ek.mockInput,
            children: [(0, r.jsx)(g.oFk, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
            }), (0, r.jsx)(g.EO4, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
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
      product: l,
      category: a,
      returnRef: o,
      analyticsSource: c,
      analyticsLocations: u,
      shouldCheckoutWithOrbs: f,
      tab: v,
      variantType: b = eS.Ch.DEFAULT
    } = e, h = (0, p.e7)([D.default], () => D.default.getCurrentUser()), P = (0, eC.f)(l), {
      previewingVariantIndex: x
    } = P, _ = (0, p.e7)([H.Z], () => H.Z.purchases), C = (0, V.o)(l, _), y = (0, ex.N)(l, x), w = (0, ej.W)(l, C);
    s()(null != w, "Selected product should not be null");
    let {
      analyticsLocations: T
    } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(w.skuId);
    let S = (0, e_.kc)(a);
    i.useEffect(() => {
      null != h && (0, R.Z)(h.id, h.getAvatarURL(true, 80))
    }, [h]);
    let E = i.useMemo(() => (0, W.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(eE.rMx.OPEN_MODAL, {
        type: eE.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: T,
        sku_id: w.skuId,
        product_type: E
      }), w.items.forEach(z.oK)
    }, [c, T, w.skuId, w.items, E]);
    let I = (0, Z.r9)(),
      N = t === g.Dvm.EXITING,
      A = (0, eO.t0)(l),
      k = null == A ? true : A.amount,
      L = i.useMemo(() => (0, W.x6)(w) ? w.items.length : 0, [w]),
      {
        activeSlide: B,
        isTransitioning: F
      } = (0, $.b)({
        slideCount: L,
        intervalMs: 5e3
      });
    if (null == h) return null;
    let U = (0, eS.ZS)(a.skuId);
    return (0, r.jsx)(O.Gt, {
      value: T,
      children: (0, r.jsxs)(g.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.modalRoot,
        returnRef: o,
        transitionState: t,
        size: g.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(g.hzk, {
          "data-migration-pending": true,
          className: ek.modalContent,
          children: [(0, r.jsx)(eF, {
            user: h,
            product: l,
            category: a,
            onClose: n,
            previewingVariantIndexProps: P,
            selectedVariantIndex: C,
            shouldCheckoutWithOrbs: f,
            tab: v,
            activeBundleSlide: B,
            variantType: b
          }), (0, r.jsxs)("div", {
            className: w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)(et.Z, {
              asset: S,
              size: (0, ed.ML)(540),
              className: ek.categoryBanner,
              categoryBannerOverride: U
            }), (0, eS.o0)(l.skuId) ? l.skuId === eS.Vt.ORB_PROFILE_BADGE ? I || N ? null : (0, r.jsx)(ef.M, {
              user: h
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ep.b, {
              product: l,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(ez, {
              user: h,
              product: null != y ? y : w,
              activeBundleSlide: B,
              isTransitioning: F
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [(0, r.jsx)(en.n, {
                skuId: w.skuId,
                tab: v
              }), (0, r.jsx)(g.hU, {
                "aria-label": eA.intl.string(eA.t.cpT0Cg),
                onClick: n,
                icon: g.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != k && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(g.mzw, {
            "data-migration-pending": true,
            className: ek.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: ek.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: ek.modalFooterContentContainer,
              children: [(0, r.jsx)(g.Text, {
                variant: "text-sm/semibold",
                className: ek.modalFooterText,
                children: eA.intl.format(eA.t["78ph4e"], {
                  discountOfferAmount: k
                })
              }), (null == A ? true : A.expiresAt) != null && (0, r.jsx)(er.R, {
                endDate: A.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }