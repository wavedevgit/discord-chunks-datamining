/** Chunk was on 2026 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eq
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
  Chunk822857 = require("./822857.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk335131 = require("./335131.js"),
  Chunk381585 = require("./381585.jsx"),
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
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188336 = require("./188336.js");

function eB(e) {
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

function eD(e, t) {
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
let eM = e => {
    let {
      item: t,
      user: n,
      isBundleItem: l = false
    } = e, a = i.useRef(null), o = (0, h.Z)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? eZ.bundleAvatarPreviewContainer : eZ.avatarPreviewContainer,
      children: (0, r.jsx)(ex.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? eZ.bundlePfxPreviewContainer : eZ.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(A.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: eZ.nameplatePreviewContainer,
      children: (0, r.jsx)(ej.Z, {
        className: eZ.nameplatePreview,
        nameplate: t,
        isHighlighted: o,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eU = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, l = t.items.length;
    return (0, r.jsx)("div", {
      className: eZ.bundlePreviewContainer,
      children: (0, r.jsx)(b.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(b.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eZ.bundlePreviewSlide,
              children: [(0, r.jsx)(eM, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(b.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eZ.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", s]
              })]
            })
          }, a)
        })
      })
    })
  },
  eF = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, q.x6)(t) ? (0, r.jsx)(eU, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eN.o0)(t.skuId) ? (0, r.jsx)(eb.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eM, {
      item: t.items[0],
      user: n
    }) : null
  },
  eG = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(b.Text, {
      variant: "text-sm/normal",
      className: eZ.learnMoreLink,
      children: eL.intl.format(eL.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eH = e => {
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
      previewingVariantIndex: T
    } = h, S = (0, eO.N)(t, T), N = (0, e_.W)(t, x);
    s()(null != N, "Selected product should not be null");
    let A = (0, Q.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: R
      } = (0, Q.L)(N),
      {
        isDisabled: D,
        disabledReason: M
      } = (0, J.G)(N.skuId),
      U = (0, q.ne)({
        product: N,
        isPartiallyOwnedBundle: R,
        isPurchased: k
      }),
      F = (0, p.e7)([W.Z], () => W.Z.isClaiming === (null == N ? true : N.skuId)),
      V = (0, P.ZP)(),
      K = (0, v.wj)(V),
      ee = (0, q.G1)(N),
      et = (0, q.ql)(N, eA.tuJ.DEFAULT),
      er = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, $.Rj)(null != S ? S : N),
      el = i.useMemo(() => (0, q.BH)(N, w), [N, w]),
      {
        handleUseNow: ea,
        isApplying: ef
      } = (0, Y.W)({
        product: N,
        onSuccess: c
      }),
      ep = (0, eT.To)(N),
      {
        enabled: ev
      } = (0, L.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eb = (0, eC.Iw)(t),
      ex = null != eb,
      {
        checkoutEligiblePrices: ej,
        isOrbExclusive: ey,
        hasSufficientOrbs: ew
      } = (0, eS.Ip)({
        product: N,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: ex
      }),
      eI = i.useCallback(() => (0, E.Z)({
        skuId: N.skuId,
        analyticsLocations: y,
        variantsReturnStyle: f.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eR.dG)()
      }), [y, c, N.skuId]);
    i.useEffect(() => {
      if (null != ei) return (0, g.cV)(ei), () => (0, g.cV)(true)
    }, [ei]);
    let eM = (0, X.G)(N);
    return (0, r.jsxs)("div", {
      className: eZ.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eZ.titleContainer,
        children: (0, r.jsx)(es.Z, {
          category: l,
          display: es.k.MODAL
        })
      }), (0, r.jsx)(eF, {
        product: null != S ? S : N,
        user: n,
        activeSlide: _
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eZ.description,
          children: [(0, r.jsx)(eo.Z, {
            product: N,
            isDarkText: !K,
            isOrbExclusive: ey
          }), (0, r.jsx)(b.X6q, {
            variant: "heading-xl/extrabold",
            className: eZ.headingWithItemTypePill,
            children: ep
          }), (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: eM
          }), (0, r.jsx)(eG, {
            skuId: N.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: eZ.priceTag,
            isPartiallyPurchased: R
          }) : ee ? (0, r.jsx)(b.Text, {
            variant: "text-md/semibold",
            className: eZ.priceTag,
            children: eL.intl.string(eL.t.rt69oq)
          }) : ev ? (0, r.jsx)(eg.a, {
            prices: ej,
            product: N,
            isPremiumUser: w,
            discount: el,
            hasSufficientOrbs: ew,
            isProductDisabled: D,
            discountOfferAmount: eb
          }) : (0, r.jsxs)("div", {
            className: eZ.priceTagContainer,
            children: [(0, r.jsx)(eu.Z, {
              product: N,
              discount: el,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eb
            }), w || ex ? null : (0, r.jsx)(ed.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(b.Rny, {
          children: C === eN.Ch.DEFAULT ? (0, r.jsx)(eh.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: eZ.variantsSwitch
          }) : (0, r.jsx)(eP.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: eZ.variantsThumbnail,
            selectedVariantIndex: x
          })
        }), null !== M && (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          className: eZ.disabledReason,
          children: M
        }), (0, r.jsx)(b.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !w && !er) {
              let e;
              return e = eL.intl.string(eL.t.sEAnVF), (0, r.jsx)(I.Z, {
                subscriptionTier: ek.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: em.v,
                onSubscribeModalClose: () => {
                  (0, em.T)({
                    product: N,
                    category: l,
                    shouldCheckoutWithOrbs: o,
                    returnRef: m,
                    analyticsLocations: y
                  })
                }
              })
            }
            return U ? k ? (0, r.jsx)(b.zxk, {
              variant: "primary",
              onClick: ea,
              loading: ef,
              text: eL.intl.string(eL.t.MAS7uL),
              fullWidth: true
            }) : ee ? (0, r.jsx)(b.zxk, {
              loading: F,
              loadingStartedLabel: eL.intl.string(eL.t["TYw+9v"]),
              loadingFinishedLabel: eL.intl.string(eL.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(N.skuId), c(), (0, eE.Z)({
                  product: N,
                  analyticsLocations: y,
                  purchaseType: eN.o8.PREMIUM_PURCHASE
                })
              },
              text: eL.intl.string(eL.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ej.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eR.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, B.qA)({
                        skuId: N.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, z.qg)({
                            variantsReturnStyle: f.v.VARIANTS_GROUP
                          }), c(), (0, eE.Z)({
                            product: N,
                            analyticsLocations: y,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eN.o8.ORB
                          })
                        },
                        analyticsLocations: y
                      })
                    },
                    i = D ? eL.intl.string(eL.t.cTdr39) : eL.intl.string(eL.t.zqh7ZG),
                    l = !ew || D,
                    a = eL.intl.formatToPlainString(eL.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = l ? "".concat(a, ", ").concat(i) : a;
                  return (0, r.jsx)(b.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: l,
                    "aria-label": false,
                    children: i => (0, r.jsx)(b.zxk, eD(eB({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: l,
                      "aria-label": o,
                      text: eL.intl.format(eL.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(Z.Z, {
                          className: eZ.orbIconAligned,
                          shouldUseThemeColor: l && !t
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let i = !ee && !er && !u.tq && !ey && U,
                  l = (0, q.x6)(N) ? eL.intl.string(eL.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eL.intl.string(eL.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eL.intl.string(eL.t.H3vhqa) : eL.intl.string(eL.t.AQ0Ven);
                return ex ? l = eL.intl.formatToPlainString(eL.t["5U5RBw"], {
                  discountOfferAmount: eb
                }) : ev && (l = eL.intl.formatToPlainString(eL.t["cNSL/v"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(b.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(b.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eI,
                    text: l,
                    fullWidth: true
                  }), i && (0, r.jsx)(ec.Z, {
                    primary: n,
                    product: N,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(b.Text, {
          className: a()(eZ.disclaimer, !K && eZ.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !k ? eL.intl.string(eL.t.nKdAlJ) : null
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
      className: eZ.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(_.Z, {
        avatar: (0, r.jsx)(b.qEK, {
          src: t.avatarSrc,
          size: b.EFr.SIZE_32,
          "aria-label": t.name,
          status: b.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eZ.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eV = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, S.w$)();
    return (0, r.jsx)("div", {
      className: eZ.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eL.intl.string(eL.t.SZeUdX),
      children: (0, r.jsxs)(b.Rny, {
        children: [(0, r.jsx)(ez, {
          user: i.mallow,
          innerClassName: eZ.userBlue
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eZ.nameplateRightPanePreviewSectionGroup,
          children: [eL.intl.string(eL.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(ez, {
          user: i.phibi,
          innerClassName: eZ.userPink
        }), (0, r.jsx)("div", {
          className: eZ.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(ej.Z, {
            className: eZ.nameplatePreview,
            innerClassName: eZ.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(ez, {
          user: i.locke,
          innerClassName: eZ.userPink
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eZ.nameplateRightPanePreviewSectionGroup,
          children: [eL.intl.string(eL.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(ez, {
          user: i.boom,
          innerClassName: eZ.userGreen
        }), (0, r.jsx)(ez, {
          user: i.cherry,
          innerClassName: eZ.userGreen
        })]
      })
    })
  },
  eW = e => {
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
    } = (0, $.Rj)(t), j = null != h, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eD(eB({}, m), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffectId: null == h ? true : h.id,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: v,
        hideViewFullProfileButton: true,
        interactive: false
      })), v && (0, r.jsx)(eK, {
        user: n
      })]
    }), _ = e => (0, r.jsx)(eV, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: eZ.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eZ.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eZ.nameplatePreviewContainerInner, l && c ? eZ.sliding : ""),
          children: _(n)
        }) : (0, r.jsx)("div", {
          className: a()(eZ.profileEffectPreviewsContainerInner, l && c ? eZ.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: eZ.nameplatePreviewContainerInner,
      children: _(P)
    }) : (0, r.jsx)("div", {
      className: (null == b ? true : b.type) === d.Z.AVATAR_DECORATION ? eZ.previewsContainerInner : eZ.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  eK = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eD(eB({}, (0, y.ZP)({
        author: t,
        channelId: "1337",
        content: eL.intl.string(eL.t.d5YwKy)
      })), {
        state: eA.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eL.intl.string(eL.t["TN+ZvL"]),
      children: (0, r.jsx)(b.Rny, {
        children: (0, r.jsxs)(b.Zbd, {
          className: eZ.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(T.Z, {
            className: eZ.mockMessage,
            author: (0, w.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eZ.mockInput,
            children: [(0, r.jsx)(b.oFk, {
              size: "md",
              color: "currentColor",
              className: eZ.mockInputButton
            }), (0, r.jsx)(b.EO4, {
              size: "md",
              color: "currentColor",
              className: eZ.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eq = e => {
    let {
      transitionState: t,
      onClose: n,
      product: l,
      category: a,
      returnRef: o,
      analyticsSource: c,
      analyticsLocations: u,
      shouldCheckoutWithOrbs: f,
      tab: v
    } = e, g = (0, p.e7)([M.default], () => M.default.getCurrentUser()), h = (0, V.sp)(), P = (0, eI.G)("CollectiblesShopProductDetailsModal") && (null == h ? true : h.pageSection) === "top 4" ? eN.Ch.THUMBNAIL : eN.Ch.DEFAULT, x = (0, ew.f)(l), {
      previewingVariantIndex: _
    } = x, C = (0, p.e7)([W.Z], () => W.Z.purchases), y = (0, K.o)(l, C), w = (0, eO.N)(l, _), T = (0, e_.W)(l, y);
    s()(null != T, "Selected product should not be null");
    let {
      analyticsLocations: S
    } = (0, O.ZP)([...u, j.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ea.u9)(T.skuId);
    let E = (0, ey.kc)(a);
    i.useEffect(() => {
      null != g && (0, R.Z)(g.id, g.getAvatarURL(true, 80))
    }, [g]);
    let I = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      U.default.track(eA.rMx.OPEN_MODAL, {
        type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: S,
        sku_id: T.skuId,
        product_type: I
      }), T.items.forEach(z.oK)
    }, [c, S, T.skuId, T.items, I]);
    let N = (0, B.r9)(),
      A = t === b.Dvm.EXITING,
      k = (0, eC.t0)(l),
      L = null == k ? true : k.amount,
      Z = i.useMemo(() => (0, q.x6)(T) ? T.items.length : 0, [T]),
      {
        activeSlide: D,
        isTransitioning: F
      } = (0, et.b)({
        slideCount: Z,
        intervalMs: 5e3
      });
    if (null == g) return null;
    let G = (0, eN.ZS)(a.skuId);
    return (0, r.jsx)(O.Gt, {
      value: S,
      children: (0, r.jsxs)(b.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eZ.modalRoot,
        returnRef: o,
        transitionState: t,
        size: b.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(b.hzk, {
          "data-migration-pending": true,
          className: eZ.modalContent,
          children: [(0, r.jsx)(eH, {
            user: g,
            product: l,
            category: a,
            onClose: n,
            previewingVariantIndexProps: x,
            selectedVariantIndex: y,
            shouldCheckoutWithOrbs: f,
            tab: v,
            activeBundleSlide: D,
            variantType: P
          }), (0, r.jsxs)("div", {
            className: T.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eZ.fractionalNitroPreviewContainer : T.type === d.Z.AVATAR_DECORATION ? eZ.collectiblePreviewsContainerWithChat : eZ.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)(er.Z, {
              asset: E,
              size: (0, ef.ML)(540),
              className: eZ.categoryBanner,
              categoryBannerOverride: G
            }), (0, eN.o0)(l.skuId) ? l.skuId === eN.Vt.ORB_PROFILE_BADGE ? N || A ? null : (0, r.jsx)(ev.M, {
              user: g
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ep.q, {}) : (0, r.jsx)(eb.b, {
              product: l,
              className: eZ.externalProductProfilePreview
            }) : (0, r.jsx)(eW, {
              user: g,
              product: null != w ? w : T,
              activeBundleSlide: D,
              isTransitioning: F
            }), (0, r.jsxs)("div", {
              className: eZ.pdpControls,
              children: [(0, r.jsx)(ei.n, {
                skuId: T.skuId,
                tab: v
              }), (0, r.jsx)(b.hU, {
                "aria-label": eL.intl.string(eL.t.cpT0Cg),
                onClick: n,
                icon: b.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != L && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(b.mzw, {
            "data-migration-pending": true,
            className: eZ.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eZ.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eZ.modalFooterContentContainer,
              children: [(0, r.jsx)(b.Text, {
                variant: "text-sm/semibold",
                className: eZ.modalFooterText,
                children: eL.intl.format(eL.t["78ph4e"], {
                  discountOfferAmount: L
                })
              }), (null == k ? true : k.expiresAt) != null && (0, r.jsx)(el.R, {
                endDate: k.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }