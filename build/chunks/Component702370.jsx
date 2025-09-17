/** Chunk was on 2026 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eK
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
  Chunk653193 = require("./653193.js");

function eZ(e) {
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
let eD = e => {
    let {
      item: t,
      user: n,
      isBundleItem: l = false
    } = e, a = i.useRef(null), o = (0, h.Z)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? eL.bundleAvatarPreviewContainer : eL.avatarPreviewContainer,
      children: (0, r.jsx)(ex.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? eL.bundlePfxPreviewContainer : eL.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(A.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: eL.nameplatePreviewContainer,
      children: (0, r.jsx)(ej.Z, {
        className: eL.nameplatePreview,
        nameplate: t,
        isHighlighted: o,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eM = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, l = t.items.length;
    return (0, r.jsx)("div", {
      className: eL.bundlePreviewContainer,
      children: (0, r.jsx)(b.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(b.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eL.bundlePreviewSlide,
              children: [(0, r.jsx)(eD, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(b.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eL.bundleSlideTitle,
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
    return (0, K.x6)(t) ? (0, r.jsx)(eM, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eI.o0)(t.skuId) ? (0, r.jsx)(ev.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eD, {
      item: t.items[0],
      user: n
    }) : null
  },
  eF = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(b.Text, {
      variant: "text-sm/normal",
      className: eL.learnMoreLink,
      children: eR.intl.format(eR.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(eN.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eG = e => {
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
    } = (0, O.ZP)(), w = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: S
    } = h, T = (0, eO.N)(t, S), N = (0, e_.W)(t, x);
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
      M = (0, K.ne)({
        product: N,
        isPartiallyOwnedBundle: R,
        isPurchased: k
      }),
      U = (0, p.e7)([V.Z], () => V.Z.isClaiming === (null == N ? true : N.skuId)),
      F = (0, P.ZP)(),
      W = (0, v.wj)(F),
      $ = (0, K.G1)(N),
      ee = (0, K.ql)(N, eN.tuJ.DEFAULT),
      en = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, Q.Rj)(null != T ? T : N),
      ei = i.useMemo(() => (0, K.BH)(N, w), [N, w]),
      {
        handleUseNow: el,
        isApplying: em
      } = (0, q.W)({
        product: N,
        onSuccess: c
      }),
      ef = (0, eS.To)(N),
      {
        enabled: ep
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      ev = (0, eC.Iw)(t),
      eP = null != ev,
      {
        checkoutEligiblePrices: ex,
        isOrbExclusive: ej,
        hasSufficientOrbs: ey
      } = (0, eT.Ip)({
        product: N,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: eP
      }),
      ew = i.useCallback(() => (0, E.Z)({
        skuId: N.skuId,
        analyticsLocations: y,
        variantsReturnStyle: f.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, ek.dG)()
      }), [y, c, N.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, g.cV)(er), () => (0, g.cV)(true)
    }, [er]);
    let eD = (0, Y.G)(N);
    return (0, r.jsxs)("div", {
      className: eL.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eL.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: l,
          display: eo.k.MODAL
        })
      }), (0, r.jsx)(eU, {
        product: null != T ? T : N,
        user: n,
        activeSlide: _
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eL.description,
          children: [(0, r.jsx)(ea.Z, {
            product: N,
            isDarkText: !W,
            isOrbExclusive: ej
          }), (0, r.jsx)(b.X6q, {
            variant: "heading-xl/extrabold",
            className: eL.headingWithItemTypePill,
            children: ef
          }), (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eF, {
            skuId: N.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: eL.priceTag,
            isPartiallyPurchased: R
          }) : $ ? (0, r.jsx)(b.Text, {
            variant: "text-md/semibold",
            className: eL.priceTag,
            children: eR.intl.string(eR.t.rt69oq)
          }) : ep ? (0, r.jsx)(eb.a, {
            prices: ex,
            product: N,
            isPremiumUser: w,
            discount: ei,
            hasSufficientOrbs: ey,
            isProductDisabled: L,
            discountOfferAmount: ev
          }) : (0, r.jsxs)("div", {
            className: eL.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: N,
              discount: ei,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || eP,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: ev
            }), w || eP ? null : (0, r.jsx)(eu.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(b.Rny, {
          children: C === eI.Ch.DEFAULT ? (0, r.jsx)(eg.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: eL.variantsSwitch
          }) : (0, r.jsx)(eh.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: eL.variantsThumbnail,
            selectedVariantIndex: x
          })
        }), null !== D && (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          className: eL.disabledReason,
          children: D
        }), (0, r.jsx)(b.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if ($ && !w && !en) {
              let e;
              return e = eR.intl.string(eR.t.sEAnVF), (0, r.jsx)(I.Z, {
                subscriptionTier: eA.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
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
            return M ? k ? (0, r.jsx)(b.zxk, {
              variant: "primary",
              onClick: el,
              loading: em,
              text: eR.intl.string(eR.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(b.zxk, {
              loading: U,
              loadingStartedLabel: eR.intl.string(eR.t["TYw+9v"]),
              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UPz),
              onClick: async () => {
                await (0, H.fK)(N.skuId), c(), (0, eE.Z)({
                  product: N,
                  analyticsLocations: y,
                  purchaseType: eI.o8.PREMIUM_PURCHASE
                })
              },
              text: eR.intl.string(eR.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ex.map((e, t) => {
                let n = 0 === t;
                if (e.currency === ek.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, B.qA)({
                        skuId: N.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, H.qg)({
                            variantsReturnStyle: f.v.VARIANTS_GROUP
                          }), c(), (0, eE.Z)({
                            product: N,
                            analyticsLocations: y,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eI.o8.ORB
                          })
                        },
                        analyticsLocations: y
                      })
                    },
                    i = L ? eR.intl.string(eR.t.cTdr39) : eR.intl.string(eR.t.zqh7ZG),
                    l = !ey || L,
                    a = eR.intl.formatToPlainString(eR.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = l ? "".concat(a, ", ").concat(i) : a;
                  return (0, r.jsx)(b.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: l,
                    "aria-label": false,
                    children: i => (0, r.jsx)(b.zxk, eB(eZ({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: l,
                      "aria-label": o,
                      text: eR.intl.format(eR.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(b.aQr, {
                          className: eL.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let i = !$ && !en && !u.tq && !ej && M,
                  l = (0, K.x6)(N) ? eR.intl.string(eR.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eR.intl.string(eR.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eR.intl.string(eR.t.H3vhqa) : eR.intl.string(eR.t.AQ0Ven);
                return eP ? l = eR.intl.formatToPlainString(eR.t["5U5RBw"], {
                  discountOfferAmount: ev
                }) : ep && (l = eR.intl.formatToPlainString(eR.t["cNSL/v"], {
                  price: (0, z.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(b.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(b.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: ew,
                    text: l,
                    fullWidth: true
                  }), i && (0, r.jsx)(es.Z, {
                    primary: n,
                    product: N,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(b.Text, {
          className: a()(eL.disclaimer, !W && eL.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? eR.intl.string(eR.t.nKdAlJ) : null
        })]
      })]
    })
  },
  ez = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eL.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(_.Z, {
        avatar: (0, r.jsx)(b.qEK, {
          src: t.avatarSrc,
          size: b.EFr.SIZE_32,
          "aria-label": t.name,
          status: b.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eL.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, T.w$)();
    return (0, r.jsx)("div", {
      className: eL.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eR.intl.string(eR.t.SZeUdX),
      children: (0, r.jsxs)(b.Rny, {
        children: [(0, r.jsx)(ez, {
          user: i.mallow,
          innerClassName: eL.userBlue
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eL.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(ez, {
          user: i.phibi,
          innerClassName: eL.userPink
        }), (0, r.jsx)("div", {
          className: eL.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(ej.Z, {
            className: eL.nameplatePreview,
            innerClassName: eL.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(ez, {
          user: i.locke,
          innerClassName: eL.userPink
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eL.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(ez, {
          user: i.boom,
          innerClassName: eL.userGreen
        }), (0, r.jsx)(ez, {
          user: i.cherry,
          innerClassName: eL.userGreen
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
    } = e, o = (0, p.e7)([x.Z], () => x.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), c = (0, p.cj)([D.Z], () => D.Z.getAllPending()), {
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
    }), v = t.type === d.Z.AVATAR_DECORATION, [b] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: h,
      firstNameplate: P
    } = (0, Q.Rj)(t), j = null != h, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eB(eZ({}, m), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffectId: null == h ? true : h.id,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideExampleButton: true,
        interactive: false
      })), v && (0, r.jsx)(eW, {
        user: n
      })]
    }), _ = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: eL.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eL.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eL.nameplatePreviewContainerInner, l && c ? eL.sliding : ""),
          children: _(n)
        }) : (0, r.jsx)("div", {
          className: a()(eL.profileEffectPreviewsContainerInner, l && c ? eL.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: eL.nameplatePreviewContainerInner,
      children: _(P)
    }) : (0, r.jsx)("div", {
      className: (null == b ? true : b.type) === d.Z.AVATAR_DECORATION ? eL.previewsContainerInner : eL.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  eW = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eB(eZ({}, (0, y.ZP)({
        author: t,
        channelId: "1337",
        content: eR.intl.string(eR.t.d5YwKy)
      })), {
        state: eN.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eR.intl.string(eR.t["TN+ZvL"]),
      children: (0, r.jsx)(b.Rny, {
        children: (0, r.jsxs)(b.Zbd, {
          className: eL.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(S.Z, {
            className: eL.mockMessage,
            author: (0, w.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eL.mockInput,
            children: [(0, r.jsx)(b.oFk, {
              size: "md",
              color: "currentColor",
              className: eL.mockInputButton
            }), (0, r.jsx)(b.EO4, {
              size: "md",
              color: "currentColor",
              className: eL.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eK = e => {
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
      variantType: g = eI.Ch.DEFAULT
    } = e, h = (0, p.e7)([M.default], () => M.default.getCurrentUser()), P = (0, ew.f)(l), {
      previewingVariantIndex: x
    } = P, _ = (0, p.e7)([V.Z], () => V.Z.purchases), C = (0, W.o)(l, _), y = (0, eO.N)(l, x), w = (0, e_.W)(l, C);
    s()(null != w, "Selected product should not be null");
    let {
      analyticsLocations: S
    } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, el.u9)(w.skuId);
    let T = (0, ey.kc)(a),
      E = (0, R.O)({
        location: "CollectiblesShopProductDetailsModal"
      }),
      {
        isPurchased: I
      } = (0, J.L)(w),
      N = E && !I && !(0, K.x6)(w);
    i.useEffect(() => {
      null != h && (0, L.Z)(h.id, h.getAvatarURL(true, 80))
    }, [h]);
    let A = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      U.default.track(eN.rMx.OPEN_MODAL, {
        type: eN.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: S,
        sku_id: w.skuId,
        product_type: A
      }), w.items.forEach(H.oK)
    }, [c, S, w.skuId, w.items, A]);
    let k = (0, B.r9)(),
      Z = t === b.Dvm.EXITING,
      D = (0, eC.t0)(l),
      F = null == D ? true : D.amount,
      G = i.useMemo(() => (0, K.x6)(w) ? w.items.length : 0, [w]),
      {
        activeSlide: z,
        isTransitioning: q
      } = (0, ee.b)({
        slideCount: G,
        intervalMs: 5e3
      });
    if (null == h) return null;
    let Y = (0, eI.ZS)(a.skuId);
    return (0, r.jsx)(O.Gt, {
      value: S,
      children: (0, r.jsxs)(b.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eL.modalRoot,
        returnRef: o,
        transitionState: t,
        size: b.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(b.hzk, {
          "data-migration-pending": true,
          className: eL.modalContent,
          children: [(0, r.jsx)(eG, {
            user: h,
            product: l,
            category: a,
            onClose: n,
            previewingVariantIndexProps: P,
            selectedVariantIndex: C,
            shouldCheckoutWithOrbs: f,
            tab: v,
            activeBundleSlide: z,
            variantType: g
          }), (0, r.jsxs)("div", {
            className: w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eL.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? eL.collectiblePreviewsContainerWithChat : eL.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)(en.Z, {
              asset: T,
              size: (0, em.ML)(540),
              className: eL.categoryBanner,
              categoryBannerOverride: Y
            }), (0, eI.o0)(l.skuId) ? l.skuId === eI.Vt.ORB_PROFILE_BADGE ? k || Z ? null : (0, r.jsx)(ep.M, {
              user: h
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ef.q, {}) : (0, r.jsx)(ev.b, {
              product: l,
              className: eL.externalProductProfilePreview
            }) : (0, r.jsx)(eV, {
              user: h,
              product: null != y ? y : w,
              activeBundleSlide: z,
              isTransitioning: q
            }), (0, r.jsxs)("div", {
              className: eL.pdpControls,
              children: [N && (0, r.jsx)(eP.s, {
                skuId: w.skuId,
                className: eL.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: w.skuId,
                tab: v
              }), (0, r.jsx)(b.hU, {
                "aria-label": eR.intl.string(eR.t.cpT0Cg),
                onClick: n,
                icon: b.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != F && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(b.mzw, {
            "data-migration-pending": true,
            className: eL.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eL.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eL.modalFooterContentContainer,
              children: [(0, r.jsx)(b.Text, {
                variant: "text-sm/semibold",
                className: eL.modalFooterText,
                children: eR.intl.format(eR.t["78ph4e"], {
                  discountOfferAmount: F
                })
              }), (null == D ? true : D.expiresAt) != null && (0, r.jsx)(ei.R, {
                endDate: D.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }