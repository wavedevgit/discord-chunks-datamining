/** Chunk was on 31099 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ez
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
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

function eZ(e, t) {
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
      user: n,
      isBundleItem: l = false
    } = e, a = i.useRef(null), o = (0, S.X)(a);
    return (0, c.EQ)(t.type).with(u.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
      children: (0, r.jsx)(e_.R, {
        user: n,
        item: t
      })
    })).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(N.Z, {
        skuId: t.skuId,
        isHighlighted: o,
        removeSetHeight: true
      })
    })).with(u.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: eR.nameplatePreviewContainer,
      children: (0, r.jsx)(eb.Z, {
        className: eR.nameplatePreview,
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
      className: eR.bundlePreviewContainer,
      children: (0, r.jsx)(v.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(v.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eR.bundlePreviewSlide,
              children: [(0, r.jsx)(eB, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(v.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eR.bundleSlideTitle,
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
    return (0, K.x6)(t) ? (0, r.jsx)(eU, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, ey.o0)(t.skuId) ? (0, r.jsx)(ep.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eB, {
      item: t.items[0],
      user: n
    }) : null
  },
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === d.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(v.Text, {
      variant: "text-sm/normal",
      className: eR.learnMoreLink,
      children: ek.intl.format(ek.t.Q1scdH, {
        helpdeskArticle: H.Z.getArticleURL(eO.BhN.FRACTIONAL_PREMIUM_ABOUT)
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
      returnRef: d,
      previewingVariantIndexProps: b,
      selectedVariantIndex: x,
      tab: I,
      activeBundleSlide: S,
      variantType: C
    } = e, {
      analyticsLocations: j
    } = (0, P.ZP)(), T = F.ZP.canUseCollectibles(n), {
      previewingVariantIndex: E
    } = b, w = (0, ex.N)(t, E), A = (0, eP.W)(t, x);
    s()(null != A, "Selected product should not be null");
    let N = (0, X.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: R
      } = (0, X.L)(A),
      {
        isDisabled: L,
        disabledReason: U
      } = (0, J.G)(A.skuId),
      D = (0, K.ne)({
        product: A,
        isPartiallyOwnedBundle: R,
        isPurchased: k
      }),
      M = (0, p.e7)([V.Z], () => V.Z.isClaiming === (null == A ? true : A.skuId)),
      H = (0, _.ZP)(),
      z = (0, h.wj)(H),
      $ = (0, K.G1)(A),
      ee = (0, K.ql)(A, eO.tuJ.DEFAULT),
      en = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, Q.Rj)(null != w ? w : A),
      ei = i.useMemo(() => (0, K.BH)(A, T), [A, T]),
      {
        handleUseNow: ed,
        isApplying: em
      } = (0, Y.W)({
        product: A,
        onSuccess: c
      }),
      ep = (0, eT.To)(A),
      eg = (0, eC.J)(A),
      {
        enabled: e_
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eb = (0, eI.Iw)(t),
      eS = null != eb,
      {
        checkoutEligiblePrices: ej,
        isOrbExclusive: eL,
        hasSufficientOrbs: eZ
      } = (0, eE.Ip)({
        product: A,
        isPremiumUser: T,
        tab: I,
        hasDiscountOffer: eS
      }),
      eB = i.useCallback(() => (0, y.Z)({
        skuId: A.skuId,
        analyticsLocations: j,
        variantsReturnStyle: m.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [j, c, A.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, g.cV)(er), () => (0, g.cV)(true)
    }, [er]);
    let eU = (0, q.G)(A);
    return (0, r.jsxs)("div", {
      className: eR.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eR.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: l,
          display: ea.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != w ? w : A,
        user: n,
        activeSlide: S
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eR.description,
          children: [(0, r.jsx)(el.Z, {
            product: A,
            isDarkText: !z,
            isOrbExclusive: eL
          }), (0, r.jsx)(v.Heading, {
            variant: "heading-xl/extrabold",
            className: eR.headingWithItemTypePill,
            children: ep
          }), (0, r.jsx)(v.Text, {
            variant: "text-sm/normal",
            children: eU
          }), (0, r.jsx)(eM, {
            skuId: A.skuId
          }), N.isPurchased || N.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: eR.priceTag,
            isPartiallyPurchased: R
          }) : $ ? (0, r.jsx)(v.Text, {
            variant: "text-md/semibold",
            className: eR.priceTag,
            children: ek.intl.string(ek.t.rt69oq)
          }) : e_ ? (0, r.jsx)(ef.a, {
            prices: ej,
            product: A,
            isPremiumUser: T,
            discount: ei,
            hasSufficientOrbs: eZ,
            isProductDisabled: L,
            discountOfferAmount: eb
          }) : (0, r.jsxs)("div", {
            className: eR.priceTagContainer,
            children: [(0, r.jsx)(es.Z, {
              product: A,
              discount: ei,
              isPremiumUser: T,
              hideStrikethroughPrice: !T || eS,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eb
            }), T || eS ? null : (0, r.jsx)(ec.Z, {
              product: A
            })]
          })]
        }), (0, r.jsx)(v.Rny, {
          children: C === ey.Ch.DEFAULT ? (0, r.jsx)(eh.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eR.variantsSwitch
          }) : (0, r.jsx)(ev.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eR.variantsThumbnail,
            selectedVariantIndex: x
          })
        }), null !== U && (0, r.jsx)(v.Text, {
          variant: "text-xs/normal",
          className: eR.disabledReason,
          children: U
        }), (0, r.jsx)(v.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if ($ && !T && !en) {
              let e;
              return e = ek.intl.string(ek.t.sEAnVF), (0, r.jsx)(O.Z, {
                subscriptionTier: eA.Si.TIER_2,
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
                    returnRef: d,
                    analyticsLocations: j,
                    variantType: C
                  })
                }
              })
            }
            return D ? k ? (0, r.jsx)(v.Button, {
              variant: "primary",
              onClick: ed,
              loading: em,
              text: ek.intl.string(ek.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(v.Button, {
              loading: M,
              loadingStartedLabel: ek.intl.string(ek.t["TYw+9v"]),
              loadingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
              onClick: async () => {
                await (0, G.fK)(A.skuId), c(), (0, ew.Z)({
                  product: A,
                  analyticsLocations: j,
                  purchaseType: ey.o8.PREMIUM_PURCHASE
                })
              },
              text: ek.intl.string(ek.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ej.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  let t = L ? ek.intl.string(ek.t.cTdr39) : ek.intl.string(ek.t.zqh7ZG),
                    n = !eZ || L,
                    l = ek.intl.formatToPlainString(ek.t["fNG/09"], {
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
                            (0, G.qg)({
                              variantsReturnStyle: m.v.VARIANTS_GROUP
                            }), c(), (0, ew.Z)({
                              product: A,
                              analyticsLocations: j,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: ey.o8.ORB
                            })
                          },
                          analyticsLocations: j
                        })
                      },
                      disabled: n,
                      "aria-label": a,
                      text: ek.intl.format(ek.t.kAgx5O, {
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
                return n = (0, K.x6)(A) ? ek.intl.string(ek.t.V1AWw8) : A.type === u.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : A.type === u.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven), eS ? n = ek.intl.formatToPlainString(ek.t["5U5RBw"], {
                  discountOfferAmount: eb
                }) : e_ && (n = ek.intl.formatToPlainString(ek.t["cNSL/v"], {
                  price: (0, W.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(v.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(v.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eB,
                    text: n,
                    fullWidth: true
                  }), eg && (0, r.jsx)(eo.Z, {
                    primary: i,
                    product: A,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(v.Text, {
          className: a()(eR.disclaimer, !z && eR.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? ek.intl.string(ek.t.nKdAlJ) : null
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
      children: (0, r.jsx)(I.Z, {
        avatar: (0, r.jsx)(v.qEK, {
          src: t.avatarSrc,
          size: v.EFr.SIZE_32,
          "aria-label": t.name,
          status: v.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eR.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eW = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, w.w$)();
    return (0, r.jsx)("div", {
      className: eR.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": ek.intl.string(ek.t.SZeUdX),
      children: (0, r.jsxs)(v.Rny, {
        children: [(0, r.jsx)(eF, {
          user: i.mallow,
          innerClassName: eR.userBlue
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eF, {
          user: i.phibi,
          innerClassName: eR.userPink
        }), (0, r.jsx)("div", {
          className: eR.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eb.Z, {
            className: eR.nameplatePreview,
            innerClassName: eR.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eF, {
          user: i.locke,
          innerClassName: eR.userPink
        }), (0, r.jsxs)(v.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eF, {
          user: i.boom,
          innerClassName: eR.userGreen
        }), (0, r.jsx)(eF, {
          user: i.cherry,
          innerClassName: eR.userGreen
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
    } = e, o = (0, p.e7)([b.Z], () => b.Z.useReducedMotion), s = F.ZP.canUsePremiumProfileCustomization(n), c = (0, p.cj)([U.Z], () => U.Z.getAllPending()), {
      pendingAvatar: d
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
      image: d
    }), h = t.type === u.Z.AVATAR_DECORATION, [v] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: _,
      firstNameplate: x
    } = (0, Q.Rj)(t), P = null != _, I = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(A.Z, eZ(eL({}, m), {
        pendingAvatar: f,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffect: _,
        disabledInputs: true,
        hideMessageInput: !P,
        hideCustomStatus: true,
        hideBioSection: h,
        hideExampleButton: true,
        interactive: false
      })), h && (0, r.jsx)(eV, {
        user: n
      })]
    }), S = e => (0, r.jsx)(eW, {
      user: n,
      nameplate: e
    });
    if (t.type === u.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: eR.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eR.combinedPreviewContent,
          children: I()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === u.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eR.nameplatePreviewContainerInner, l && c ? eR.sliding : ""),
          children: S(n)
        }) : (0, r.jsx)("div", {
          className: a()(eR.profileEffectPreviewsContainerInner, l && c ? eR.sliding : ""),
          children: I()
        })
      }
    }
    return null != x ? (0, r.jsx)("div", {
      className: eR.nameplatePreviewContainerInner,
      children: S(x)
    }) : (0, r.jsx)("div", {
      className: (null == v ? true : v.type) === u.Z.AVATAR_DECORATION ? eR.previewsContainerInner : eR.profileEffectPreviewsContainerInner,
      children: I()
    })
  },
  eV = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eZ(eL({}, (0, j.ZP)({
        author: t,
        channelId: "1337",
        content: ek.intl.string(ek.t.d5YwKy)
      })), {
        state: eO.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ek.intl.string(ek.t["TN+ZvL"]),
      children: (0, r.jsx)(v.Rny, {
        children: (0, r.jsxs)(v.Zbd, {
          className: eR.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(E.Z, {
            className: eR.mockMessage,
            author: (0, T.ZH)(n),
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
  ez = e => {
    let {
      transitionState: t,
      onClose: n,
      product: l,
      category: o,
      returnRef: c,
      analyticsSource: m,
      analyticsLocations: f,
      shouldCheckoutWithOrbs: h,
      tab: g,
      variantType: _ = ey.Ch.DEFAULT
    } = e, b = (0, p.e7)([D.default], () => D.default.getCurrentUser()), I = (0, ej.f)(l), {
      previewingVariantIndex: S
    } = I, C = (0, p.e7)([V.Z], () => V.Z.purchases), j = (0, z.o)(l, C), T = (0, ex.N)(l, S), E = (0, eP.W)(l, j);
    s()(null != E, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, P.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ei.u9)(E.skuId);
    let y = (0, eS.kc)(o),
      O = (0, R.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != b && (0, L.Z)(b.id, b.getAvatarURL(true, 80))
    }, [b]);
    let A = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(eO.rMx.OPEN_MODAL, {
        type: eO.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: m,
        location_stack: w,
        sku_id: E.skuId,
        product_type: A
      }), E.items.forEach(G.oK)
    }, [m, w, E.skuId, E.items, A]);
    let N = (0, B.r9)(),
      k = t === v.Dvm.EXITING,
      Z = (0, eI.t0)(l),
      U = null == Z ? true : Z.amount,
      H = i.useMemo(() => (0, K.x6)(E) ? E.items.length : 0, [E]),
      {
        activeSlide: F,
        isTransitioning: W
      } = (0, ee.b)({
        slideCount: H,
        intervalMs: 5e3
      });
    return null == b ? null : (0, r.jsx)(P.Gt, {
      value: w,
      children: (0, r.jsxs)(v.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eR.modalRoot,
        returnRef: c,
        transitionState: t,
        size: v.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(v.hzk, {
          "data-migration-pending": true,
          className: eR.modalContent,
          children: [(0, r.jsx)(eH, {
            user: b,
            product: l,
            category: o,
            onClose: n,
            previewingVariantIndexProps: I,
            selectedVariantIndex: j,
            shouldCheckoutWithOrbs: h,
            tab: g,
            activeBundleSlide: F,
            variantType: _
          }), (0, r.jsxs)("div", {
            className: a()(eR.previewContainer, E.skuId === d.a.PREMIUM_TIER_2_3_DAY ? eR.fractionalNitroPreviewContainer : E.type === u.Z.AVATAR_DECORATION ? eR.collectiblePreviewsContainerWithChat : eR.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(y, ")")
            },
            children: [(0, ey.o0)(l.skuId) ? l.skuId === ey.Vt.ORB_PROFILE_BADGE ? N || k ? null : (0, r.jsx)(em.M, {
              user: b
            }) : l.skuId === d.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(ep.b, {
              product: l,
              className: eR.externalProductProfilePreview
            }) : (0, r.jsx)(eG, {
              user: b,
              product: null != T ? T : E,
              activeBundleSlide: F,
              isTransitioning: W
            }), (0, r.jsxs)("div", {
              className: eR.pdpControls,
              children: [O && (0, r.jsx)(eg.a, {
                product: l,
                selectedVariantIndex: j,
                className: eR.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.n, {
                skuId: E.skuId,
                tab: g
              }), (0, r.jsx)(v.hU, {
                "aria-label": ek.intl.string(ek.t.cpT0Cg),
                onClick: n,
                icon: v.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != U && (0, r.jsx)(r.Fragment, {
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
                children: ek.intl.format(ek.t["78ph4e"], {
                  discountOfferAmount: U
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