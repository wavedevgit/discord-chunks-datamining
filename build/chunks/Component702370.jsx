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
  Chunk959840 = require("./959840.js"),
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
    } = e, a = i.useRef(null), o = (0, P.Z)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(eP.R, {
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
      children: (0, r.jsx)(ex.Z, {
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
      children: (0, r.jsx)(h.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(h.Mi4, {
            id: a,
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
    return (0, q.x6)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eI.o0)(t.skuId) ? (0, r.jsx)(ep.b, {
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
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(h.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eA.intl.format(eA.t.Q1scdH, {
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
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: P,
      selectedVariantIndex: b,
      tab: j,
      activeBundleSlide: _,
      variantType: O
    } = e, {
      analyticsLocations: T
    } = (0, C.ZP)(), w = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: E
    } = P, I = (0, eb.N)(t, E), N = (0, ej.W)(t, b);
    s()(null != N, "Selected product should not be null");
    let A = (0, J.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: R
      } = (0, J.L)(N),
      {
        isDisabled: L,
        disabledReason: D
      } = (0, X.G)(N.skuId),
      M = (0, q.ne)({
        product: N,
        isPartiallyOwnedBundle: R,
        isPurchased: k
      }),
      U = (0, v.e7)([V.Z], () => V.Z.isClaiming === (null == N ? true : N.skuId)),
      F = (0, x.ZP)(),
      W = (0, f.wj)(F),
      $ = (0, q.G1)(N),
      ee = (0, q.ql)(N, eS.tuJ.DEFAULT),
      en = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, Q.Rj)(null != I ? I : N),
      ei = i.useMemo(() => (0, q.BH)(N, w), [N, w]),
      {
        handleUseNow: ed,
        isApplying: em
      } = (0, K.W)({
        product: N,
        onSuccess: c
      }),
      ep = (0, eT.To)(N),
      {
        enabled: eg
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eP = (0, eC.Iw)(t),
      ex = null != eP,
      {
        checkoutEligiblePrices: e_,
        isOrbExclusive: eO,
        hasSufficientOrbs: eZ
      } = (0, ew.Ip)({
        product: N,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: ex
      }),
      eB = i.useCallback(() => (0, S.Z)({
        skuId: N.skuId,
        analyticsLocations: T,
        variantsReturnStyle: p.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [T, c, N.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, g.cV)(er), () => (0, g.cV)(true)
    }, [er]);
    let eU = (0, Y.G)(N);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: l,
          display: ea.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != I ? I : N,
        user: n,
        activeSlide: _
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(el.Z, {
            product: N,
            isDarkText: !W,
            isOrbExclusive: eO
          }), (0, r.jsx)(h.X6q, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: ep
          }), (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: eU
          }), (0, r.jsx)(eM, {
            skuId: N.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: ek.priceTag,
            isPartiallyPurchased: R
          }) : $ ? (0, r.jsx)(h.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eA.intl.string(eA.t.rt69oq)
          }) : eg ? (0, r.jsx)(ev.a, {
            prices: e_,
            product: N,
            isPremiumUser: w,
            discount: ei,
            hasSufficientOrbs: eZ,
            isProductDisabled: L,
            discountOfferAmount: eP
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: N,
              discount: ei,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eP
            }), w || ex ? null : (0, r.jsx)(ec.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(h.Rny, {
          children: O === eI.Ch.DEFAULT ? (0, r.jsx)(ef.P, {
            selectedVariantIndex: b,
            variantGroupProduct: t,
            previewingVariantIndexProps: P,
            className: ek.variantsSwitch
          }) : (0, r.jsx)(eh.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: P,
            className: ek.variantsThumbnail,
            selectedVariantIndex: b
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
              return e = eA.intl.string(eA.t.sEAnVF), (0, r.jsx)(y.Z, {
                subscriptionTier: ey.Si.TIER_2,
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
                    analyticsLocations: T,
                    variantType: O
                  })
                }
              })
            }
            return M ? k ? (0, r.jsx)(h.zxk, {
              variant: "primary",
              onClick: ed,
              loading: em,
              text: eA.intl.string(eA.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(h.zxk, {
              loading: U,
              loadingStartedLabel: eA.intl.string(eA.t["TYw+9v"]),
              loadingFinishedLabel: eA.intl.string(eA.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(N.skuId), c(), (0, eE.Z)({
                  product: N,
                  analyticsLocations: T,
                  purchaseType: eI.o8.PREMIUM_PURCHASE
                })
              },
              text: eA.intl.string(eA.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: e_.map((e, t) => {
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
                          (0, z.qg)({
                            variantsReturnStyle: p.v.VARIANTS_GROUP
                          }), c(), (0, eE.Z)({
                            product: N,
                            analyticsLocations: T,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eI.o8.ORB
                          })
                        },
                        analyticsLocations: T
                      })
                    },
                    i = L ? eA.intl.string(eA.t.cTdr39) : eA.intl.string(eA.t.zqh7ZG),
                    l = !eZ || L,
                    a = eA.intl.formatToPlainString(eA.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = l ? "".concat(a, ", ").concat(i) : a;
                  return (0, r.jsx)(h.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: l,
                    "aria-label": false,
                    children: i => (0, r.jsx)(h.zxk, eL(eR({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: l,
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
                let i = !$ && !en && !u.tq && !eO && M && !(0, q.iP)(e.currency),
                  l = (0, q.x6)(N) ? eA.intl.string(eA.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eA.intl.string(eA.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eA.intl.string(eA.t.H3vhqa) : eA.intl.string(eA.t.AQ0Ven);
                return ex ? l = eA.intl.formatToPlainString(eA.t["5U5RBw"], {
                  discountOfferAmount: eP
                }) : eg && (l = eA.intl.formatToPlainString(eA.t["cNSL/v"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(h.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(h.zxk, {
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
        }), (0, r.jsx)(h.Text, {
          className: a()(ek.disclaimer, !W && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? eA.intl.string(eA.t.nKdAlJ) : null
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
      className: ek.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(_.Z, {
        avatar: (0, r.jsx)(h.qEK, {
          src: t.avatarSrc,
          size: h.EFr.SIZE_32,
          "aria-label": t.name,
          status: h.Skl.ONLINE
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
    } = e, i = (0, I.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eA.intl.string(eA.t.SZeUdX),
      children: (0, r.jsxs)(h.Rny, {
        children: [(0, r.jsx)(eF, {
          user: i.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eF, {
          user: i.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(ex.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eF, {
          user: i.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eA.intl.string(eA.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eF, {
          user: i.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eF, {
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
      isTransitioning: l
    } = e, o = (0, v.e7)([b.Z], () => b.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), c = (0, v.cj)([D.Z], () => D.Z.getAllPending()), {
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
    }(c, ["pendingAvatar"]), p = (0, k.SD)({
      userId: n.id,
      image: u
    }), f = t.type === d.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: P,
      firstNameplate: x
    } = (0, Q.Rj)(t), j = null != P, C = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eL(eR({}, m), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffectId: null == P ? true : P.id,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: f,
        hideExampleButton: true,
        interactive: false
      })), f && (0, r.jsx)(ez, {
        user: n
      })]
    }), _ = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: ek.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: ek.combinedPreviewContent,
          children: C()
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
          children: C()
        })
      }
    }
    return null != x ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: _(x)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === d.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: C()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, O.e5)(eL(eR({}, (0, T.ZP)({
        author: t,
        channelId: "1337",
        content: eA.intl.string(eA.t.d5YwKy)
      })), {
        state: eS.yb.SENT,
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
          children: [(0, r.jsx)(E.Z, {
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
  eV = e => {
    let {
      transitionState: t,
      onClose: n,
      product: l,
      category: o,
      returnRef: c,
      analyticsSource: u,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: f,
      tab: g,
      variantType: P = eI.Ch.DEFAULT
    } = e, x = (0, v.e7)([M.default], () => M.default.getCurrentUser()), b = (0, eO.f)(l), {
      previewingVariantIndex: _
    } = b, O = (0, v.e7)([V.Z], () => V.Z.purchases), T = (0, W.o)(l, O), w = (0, eb.N)(l, _), E = (0, ej.W)(l, T);
    s()(null != E, "Selected product should not be null");
    let {
      analyticsLocations: I
    } = (0, C.ZP)([...p, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(E.skuId);
    let S = (0, e_.kc)(o),
      y = (0, R.O)({
        location: "CollectiblesShopProductDetailsModal"
      }),
      {
        isPurchased: N
      } = (0, J.L)(E),
      A = y && !N && !(0, q.x6)(E);
    i.useEffect(() => {
      null != x && (0, L.Z)(x.id, x.getAvatarURL(true, 80))
    }, [x]);
    let k = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      U.default.track(eS.rMx.OPEN_MODAL, {
        type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: u,
        location_stack: I,
        sku_id: E.skuId,
        product_type: k
      }), E.items.forEach(z.oK)
    }, [u, I, E.skuId, E.items, k]);
    let Z = (0, B.r9)(),
      D = t === h.Dvm.EXITING,
      F = (0, eC.t0)(l),
      G = null == F ? true : F.amount,
      H = i.useMemo(() => (0, q.x6)(E) ? E.items.length : 0, [E]),
      {
        activeSlide: K,
        isTransitioning: Y
      } = (0, ee.b)({
        slideCount: H,
        intervalMs: 5e3
      });
    return null == x ? null : (0, r.jsx)(C.Gt, {
      value: I,
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
          children: [(0, r.jsx)(eU, {
            user: x,
            product: l,
            category: o,
            onClose: n,
            previewingVariantIndexProps: b,
            selectedVariantIndex: T,
            shouldCheckoutWithOrbs: f,
            tab: g,
            activeBundleSlide: K,
            variantType: P
          }), (0, r.jsxs)("div", {
            className: a()(ek.previewContainer, E.skuId === m.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : E.type === d.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(S, ")")
            },
            children: [(0, eI.o0)(l.skuId) ? l.skuId === eI.Vt.ORB_PROFILE_BADGE ? Z || D ? null : (0, r.jsx)(em.M, {
              user: x
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(ep.b, {
              product: l,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eH, {
              user: x,
              product: null != w ? w : E,
              activeBundleSlide: K,
              isTransitioning: Y
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [A && (0, r.jsx)(eg.s, {
                skuId: E.skuId,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.n, {
                skuId: E.skuId,
                tab: g
              }), (0, r.jsx)(h.hU, {
                "aria-label": eA.intl.string(eA.t.cpT0Cg),
                onClick: n,
                icon: h.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != G && (0, r.jsx)(r.Fragment, {
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
                  discountOfferAmount: G
                })
              }), (null == F ? true : F.expiresAt) != null && (0, r.jsx)(er.R, {
                endDate: F.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }