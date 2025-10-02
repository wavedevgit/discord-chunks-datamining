/** Chunk was on 48785 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => ez
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk567400 = require("./567400.js"),
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
  Chunk325834 = require("./325834.jsx"),
  Chunk143941 = require("./143941.jsx"),
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

function eR(e, t) {
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
      isBundleItem: a = false
    } = e, l = i.useRef(null), o = (0, _.Z)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: a ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(e_.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: a ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(A.Z, {
        skuId: t.skuId,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(eg.Z, {
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
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(h.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(h.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: ek.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ek.bundleSlideTitle,
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
    return (0, q.x6)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eS.o0)(t.skuId) ? (0, r.jsx)(em.b, {
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
    return t === p.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(h.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eA.intl.format(eA.t.Q1scdH, {
        helpdeskArticle: U.Z.getArticleURL(eT.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eF = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: p,
      previewingVariantIndexProps: _,
      selectedVariantIndex: P,
      tab: x,
      activeBundleSlide: O,
      variantType: C
    } = e, {
      analyticsLocations: I
    } = (0, j.ZP)(), w = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: y
    } = _, S = (0, eP.N)(t, y), N = (0, ex.W)(t, P);
    s()(null != N, "Selected product should not be null");
    let A = (0, J.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: L
      } = (0, J.L)(N),
      {
        isDisabled: R,
        disabledReason: D
      } = (0, X.G)(N.skuId),
      M = (0, q.ne)({
        product: N,
        isPartiallyOwnedBundle: L,
        isPurchased: k
      }),
      F = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == N ? true : N.skuId)),
      U = (0, g.ZP)(),
      W = (0, v.wj)(U),
      $ = (0, q.G1)(N),
      ee = (0, q.ql)(N, eT.tuJ.DEFAULT),
      en = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, Q.Rj)(null != S ? S : N),
      ei = i.useMemo(() => (0, q.BH)(N, w), [N, w]),
      {
        handleUseNow: ed,
        isApplying: ep
      } = (0, K.W)({
        product: N,
        onSuccess: c
      }),
      em = (0, eI.To)(N),
      {
        enabled: eb
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      e_ = (0, ej.Iw)(t),
      eg = null != e_,
      {
        checkoutEligiblePrices: eO,
        isOrbExclusive: eC,
        hasSufficientOrbs: eZ
      } = (0, ew.Ip)({
        product: N,
        isPremiumUser: w,
        tab: x,
        hasDiscountOffer: eg
      }),
      eB = i.useCallback(() => (0, T.Z)({
        skuId: N.skuId,
        analyticsLocations: I,
        variantsReturnStyle: m.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [I, c, N.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, b.cV)(er), () => (0, b.cV)(true)
    }, [er]);
    let eF = (0, Y.G)(N);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(el.Z, {
          category: a,
          display: el.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != S ? S : N,
        user: n,
        activeSlide: O
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(ea.Z, {
            product: N,
            isDarkText: !W,
            isOrbExclusive: eC
          }), (0, r.jsx)(h.X6q, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: em
          }), (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: eF
          }), (0, r.jsx)(eM, {
            skuId: N.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: ek.priceTag,
            isPartiallyPurchased: L
          }) : $ ? (0, r.jsx)(h.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eA.intl.string(eA.t.rt69oq)
          }) : eb ? (0, r.jsx)(ef.a, {
            prices: eO,
            product: N,
            isPremiumUser: w,
            discount: ei,
            hasSufficientOrbs: eZ,
            isProductDisabled: R,
            discountOfferAmount: e_
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: N,
              discount: ei,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || eg,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: e_
            }), w || eg ? null : (0, r.jsx)(ec.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(h.Rny, {
          children: C === eS.Ch.DEFAULT ? (0, r.jsx)(ev.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsSwitch
          }) : (0, r.jsx)(eh.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsThumbnail,
            selectedVariantIndex: P
          })
        }), null !== D && (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: D
        }), (0, r.jsx)(h.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if ($ && !w && !en) {
              let e;
              return e = eA.intl.string(eA.t.sEAnVF), (0, r.jsx)(E.Z, {
                subscriptionTier: eE.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eu.v,
                onSubscribeModalClose: () => {
                  (0, eu.T)({
                    product: N,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: p,
                    analyticsLocations: I,
                    variantType: C
                  })
                }
              })
            }
            return M ? k ? (0, r.jsx)(h.zxk, {
              variant: "primary",
              onClick: ed,
              loading: ep,
              text: eA.intl.string(eA.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(h.zxk, {
              loading: F,
              loadingStartedLabel: eA.intl.string(eA.t["TYw+9v"]),
              loadingFinishedLabel: eA.intl.string(eA.t.Pg1UPz),
              onClick: async () => {
                await (0, V.fK)(N.skuId), c(), (0, ey.Z)({
                  product: N,
                  analyticsLocations: I,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: eA.intl.string(eA.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eO.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, B.qA)({
                        skuId: N.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, V.qg)({
                            variantsReturnStyle: m.v.VARIANTS_GROUP
                          }), c(), (0, ey.Z)({
                            product: N,
                            analyticsLocations: I,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eS.o8.ORB
                          })
                        },
                        analyticsLocations: I
                      })
                    },
                    i = R ? eA.intl.string(eA.t.cTdr39) : eA.intl.string(eA.t.zqh7ZG),
                    a = !eZ || R,
                    l = eA.intl.formatToPlainString(eA.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = a ? "".concat(l, ", ").concat(i) : l;
                  return (0, r.jsx)(h.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: a,
                    "aria-label": false,
                    children: i => (0, r.jsx)(h.zxk, eR(eL({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: a,
                      "aria-label": o,
                      text: eA.intl.format(eA.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(h.aQr, {
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
                  a = (0, q.x6)(N) ? eA.intl.string(eA.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eA.intl.string(eA.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eA.intl.string(eA.t.H3vhqa) : eA.intl.string(eA.t.AQ0Ven);
                return eg ? a = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                  discountOfferAmount: e_
                }) : eb && (a = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(h.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(h.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: a,
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
        }), (0, r.jsx)(h.Text, {
          className: l()(ek.disclaimer, !W && ek.disclaimerLight),
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
      children: (0, r.jsx)(O.Z, {
        avatar: (0, r.jsx)(h.qEK, {
          src: t.avatarSrc,
          size: h.EFr.SIZE_32,
          "aria-label": t.name,
          status: h.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(ek.nameplateRightPanePreviewAvatarInner, n)
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
      children: (0, r.jsxs)(h.Rny, {
        children: [(0, r.jsx)(eU, {
          user: i.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eU, {
          user: i.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eg.Z, {
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
        }), (0, r.jsxs)(h.Text, {
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
  eH = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, f.e7)([P.Z], () => P.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), c = (0, f.cj)([D.Z], () => D.Z.getAllPending()), {
      pendingAvatar: u
    } = c, p = function(e, t) {
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
    }(c, ["pendingAvatar"]), m = (0, k.SD)({
      userId: n.id,
      image: u
    }), v = t.type === d.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: _,
      firstNameplate: g
    } = (0, Q.Rj)(t), x = null != _, j = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eR(eL({}, p), {
        pendingAvatar: m,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffect: _,
        disabledInputs: true,
        hideMessageInput: !x,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(eV, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: ek.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: ek.combinedPreviewContent,
          children: j()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(ek.nameplatePreviewContainerInner, a && c ? ek.sliding : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: l()(ek.profileEffectPreviewsContainerInner, a && c ? ek.sliding : ""),
          children: j()
        })
      }
    }
    return null != g ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: O(g)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === d.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: j()
    })
  },
  eV = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eR(eL({}, (0, I.ZP)({
        author: t,
        channelId: "1337",
        content: eA.intl.string(eA.t.d5YwKy)
      })), {
        state: eT.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eA.intl.string(eA.t["TN+ZvL"]),
      children: (0, r.jsx)(h.Rny, {
        children: (0, r.jsxs)(h.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(y.Z, {
            className: ek.mockMessage,
            author: (0, w.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: ek.mockInput,
            children: [(0, r.jsx)(h.oFk, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
            }), (0, r.jsx)(h.EO4, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
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
      product: a,
      category: o,
      returnRef: c,
      analyticsSource: u,
      analyticsLocations: m,
      shouldCheckoutWithOrbs: v,
      tab: b,
      variantType: _ = eS.Ch.DEFAULT
    } = e, g = (0, f.e7)([M.default], () => M.default.getCurrentUser()), P = (0, eC.f)(a), {
      previewingVariantIndex: O
    } = P, C = (0, f.e7)([z.Z], () => z.Z.purchases), I = (0, W.o)(a, C), w = (0, eP.N)(a, O), y = (0, ex.W)(a, I);
    s()(null != y, "Selected product should not be null");
    let {
      analyticsLocations: S
    } = (0, j.ZP)([...m, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(y.skuId);
    let T = (0, eO.kc)(o),
      E = (0, L.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != g && (0, R.Z)(g.id, g.getAvatarURL(true, 80))
    }, [g]);
    let N = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      F.default.track(eT.rMx.OPEN_MODAL, {
        type: eT.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: u,
        location_stack: S,
        sku_id: y.skuId,
        product_type: N
      }), y.items.forEach(V.oK)
    }, [u, S, y.skuId, y.items, N]);
    let A = (0, B.r9)(),
      k = t === h.Dvm.EXITING,
      Z = (0, ej.t0)(a),
      D = null == Z ? true : Z.amount,
      U = i.useMemo(() => (0, q.x6)(y) ? y.items.length : 0, [y]),
      {
        activeSlide: G,
        isTransitioning: H
      } = (0, ee.b)({
        slideCount: U,
        intervalMs: 5e3
      });
    return null == g ? null : (0, r.jsx)(j.Gt, {
      value: S,
      children: (0, r.jsxs)(h.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.modalRoot,
        returnRef: c,
        transitionState: t,
        size: h.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(h.hzk, {
          "data-migration-pending": true,
          className: ek.modalContent,
          children: [(0, r.jsx)(eF, {
            user: g,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: P,
            selectedVariantIndex: I,
            shouldCheckoutWithOrbs: v,
            tab: b,
            activeBundleSlide: G,
            variantType: _
          }), (0, r.jsxs)("div", {
            className: l()(ek.previewContainer, y.skuId === p.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : y.type === d.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(T, ")")
            },
            children: [(0, eS.o0)(a.skuId) ? a.skuId === eS.Vt.ORB_PROFILE_BADGE ? A || k ? null : (0, r.jsx)(ep.M, {
              user: g
            }) : a.skuId === p.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(em.b, {
              product: a,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eH, {
              user: g,
              product: null != w ? w : y,
              activeBundleSlide: G,
              isTransitioning: H
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [E && (0, r.jsx)(eb.a, {
                product: a,
                selectedVariantIndex: I,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.n, {
                skuId: y.skuId,
                tab: b
              }), (0, r.jsx)(h.hU, {
                "aria-label": eA.intl.string(eA.t.cpT0Cg),
                onClick: n,
                icon: h.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != D && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(h.mzw, {
            "data-migration-pending": true,
            className: ek.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: ek.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: ek.modalFooterContentContainer,
              children: [(0, r.jsx)(h.Text, {
                variant: "text-sm/semibold",
                className: ek.modalFooterText,
                children: eA.intl.format(eA.t["78ph4e"], {
                  discountOfferAmount: D
                })
              }), (null == Z ? true : Z.expiresAt) != null && (0, r.jsx)(er.R, {
                endDate: Z.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }