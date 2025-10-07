/** Chunk was on 35791 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eW
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
  Chunk28664 = require("./28664.jsx"),
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
      user: n,
      isBundleItem: a = false
    } = e, l = i.useRef(null), o = (0, b.Z)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: a ? eR.bundleAvatarPreviewContainer : eR.avatarPreviewContainer,
      children: (0, r.jsx)(eb.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: a ? eR.bundlePfxPreviewContainer : eR.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(k.Z, {
        skuId: t.skuId,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: eR.nameplatePreviewContainer,
      children: (0, r.jsx)(ex.Z, {
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
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: eR.bundlePreviewContainer,
      children: (0, r.jsx)(_.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(_.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: eR.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(_.Text, {
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
    return (0, q.x6)(t) ? (0, r.jsx)(eU, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eS.o0)(t.skuId) ? (0, r.jsx)(ev.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eZ, {
      item: t.items[0],
      user: n
    }) : null
  },
  eF = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(_.Text, {
      variant: "text-sm/normal",
      className: eR.learnMoreLink,
      children: ek.intl.format(ek.t.Q1scdH, {
        helpdeskArticle: H.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eM = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: b,
      selectedVariantIndex: P,
      tab: C,
      activeBundleSlide: j,
      variantType: w
    } = e, {
      analyticsLocations: T
    } = (0, I.ZP)(), O = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: E
    } = b, S = (0, eP.N)(t, E), y = (0, eC.W)(t, P);
    s()(null != y, "Selected product should not be null");
    let k = (0, Q.L)(t),
      {
        isPurchased: R,
        isPartiallyOwnedBundle: L
      } = (0, Q.L)(y),
      {
        isDisabled: B,
        disabledReason: D
      } = (0, J.G)(y.skuId),
      F = (0, q.ne)({
        product: y,
        isPartiallyOwnedBundle: L,
        isPurchased: R
      }),
      M = (0, v.e7)([W.Z], () => W.Z.isClaiming === (null == y ? true : y.skuId)),
      H = (0, x.ZP)(),
      Y = (0, h.wj)(H),
      ee = (0, q.G1)(y),
      et = (0, q.ql)(y, eA.tuJ.DEFAULT),
      er = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, $.Rj)(null != S ? S : y),
      ea = i.useMemo(() => (0, q.BH)(y, O), [y, O]),
      {
        handleUseNow: em,
        isApplying: ep
      } = (0, K.W)({
        product: y,
        onSuccess: c
      }),
      ev = (0, eT.To)(y),
      {
        enabled: eg
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eb = (0, eI.Iw)(t),
      ex = null != eb,
      {
        checkoutEligiblePrices: ej,
        isOrbExclusive: ew,
        hasSufficientOrbs: eL
      } = (0, eO.Ip)({
        product: y,
        isPremiumUser: O,
        tab: C,
        hasDiscountOffer: ex
      }),
      eB = i.useCallback(() => (0, A.Z)({
        skuId: y.skuId,
        analyticsLocations: T,
        variantsReturnStyle: p.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, ey.dG)()
      }), [T, c, y.skuId]);
    i.useEffect(() => {
      if (null != ei) return (0, g.cV)(ei), () => (0, g.cV)(true)
    }, [ei]);
    let eZ = (0, X.G)(y);
    return (0, r.jsxs)("div", {
      className: eR.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eR.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: a,
          display: eo.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != S ? S : y,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eR.description,
          children: [(0, r.jsx)(el.Z, {
            product: y,
            isDarkText: !Y,
            isOrbExclusive: ew
          }), (0, r.jsx)(_.X6q, {
            variant: "heading-xl/extrabold",
            className: eR.headingWithItemTypePill,
            children: ev
          }), (0, r.jsx)(_.Text, {
            variant: "text-sm/normal",
            children: eZ
          }), (0, r.jsx)(eF, {
            skuId: y.skuId
          }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: eR.priceTag,
            isPartiallyPurchased: L
          }) : ee ? (0, r.jsx)(_.Text, {
            variant: "text-md/semibold",
            className: eR.priceTag,
            children: ek.intl.string(ek.t.rt69oq)
          }) : eg ? (0, r.jsx)(ef.a, {
            prices: ej,
            product: y,
            isPremiumUser: O,
            discount: ea,
            hasSufficientOrbs: eL,
            isProductDisabled: B,
            discountOfferAmount: eb
          }) : (0, r.jsxs)("div", {
            className: eR.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: y,
              discount: ea,
              isPremiumUser: O,
              hideStrikethroughPrice: !O || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eb
            }), O || ex ? null : (0, r.jsx)(eu.Z, {
              product: y
            })]
          })]
        }), (0, r.jsx)(_.Rny, {
          children: w === eS.Ch.DEFAULT ? (0, r.jsx)(eh.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eR.variantsSwitch
          }) : (0, r.jsx)(e_.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eR.variantsThumbnail,
            selectedVariantIndex: P
          })
        }), null !== D && (0, r.jsx)(_.Text, {
          variant: "text-xs/normal",
          className: eR.disabledReason,
          children: D
        }), (0, r.jsx)(_.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !O && !er) {
              let e;
              return e = ek.intl.string(ek.t.sEAnVF), (0, r.jsx)(N.Z, {
                subscriptionTier: eN.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: y,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: m,
                    analyticsLocations: T,
                    variantType: w
                  })
                }
              })
            }
            return F ? R ? (0, r.jsx)(_.zxk, {
              variant: "primary",
              onClick: em,
              loading: ep,
              text: ek.intl.string(ek.t.MAS7uL),
              fullWidth: true
            }) : ee ? (0, r.jsx)(_.zxk, {
              loading: M,
              loadingStartedLabel: ek.intl.string(ek.t["TYw+9v"]),
              loadingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
              onClick: async () => {
                await (0, V.fK)(y.skuId), c(), (0, eE.Z)({
                  product: y,
                  analyticsLocations: T,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: ek.intl.string(ek.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ej.map((e, t) => {
                let n = 0 === t;
                if (e.currency === ey.pK.DISCORD_ORB) {
                  let t = B ? ek.intl.string(ek.t.cTdr39) : ek.intl.string(ek.t.zqh7ZG),
                    i = !eL || B,
                    a = ek.intl.formatToPlainString(ek.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    l = i ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(f.u, {
                    position: "top",
                    text: t,
                    shouldShow: i,
                    "aria-label": false,
                    children: (0, r.jsx)(_.zxk, {
                      variant: n ? "primary" : "secondary",
                      onClick: () => {
                        (0, U.qA)({
                          skuId: y.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: p.v.VARIANTS_GROUP
                            }), c(), (0, eE.Z)({
                              product: y,
                              analyticsLocations: T,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eS.o8.ORB
                            })
                          },
                          analyticsLocations: T
                        })
                      },
                      disabled: i,
                      "aria-label": l,
                      text: ek.intl.format(ek.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(_.aQr, {
                          className: eR.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                let i = !ee && !er && !u.tq && !ew && F,
                  a = (0, q.x6)(y) ? ek.intl.string(ek.t.V1AWw8) : y.type === d.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : y.type === d.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven);
                return ex ? a = ek.intl.formatToPlainString(ek.t["5U5RBw"], {
                  discountOfferAmount: eb
                }) : eg && (a = ek.intl.formatToPlainString(ek.t["cNSL/v"], {
                  price: (0, z.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(_.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(_.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: a,
                    fullWidth: true
                  }), i && (0, r.jsx)(es.Z, {
                    primary: n,
                    product: y,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(_.Text, {
          className: l()(eR.disclaimer, !Y && eR.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !R ? ek.intl.string(ek.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eH = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eR.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(j.Z, {
        avatar: (0, r.jsx)(_.qEK, {
          src: t.avatarSrc,
          size: _.EFr.SIZE_32,
          "aria-label": t.name,
          status: _.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(eR.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eG = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, S.w$)();
    return (0, r.jsx)("div", {
      className: eR.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": ek.intl.string(ek.t.SZeUdX),
      children: (0, r.jsxs)(_.Rny, {
        children: [(0, r.jsx)(eH, {
          user: i.mallow,
          innerClassName: eR.userBlue
        }), (0, r.jsxs)(_.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eH, {
          user: i.phibi,
          innerClassName: eR.userPink
        }), (0, r.jsx)("div", {
          className: eR.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(ex.Z, {
            className: eR.nameplatePreview,
            innerClassName: eR.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eH, {
          user: i.locke,
          innerClassName: eR.userPink
        }), (0, r.jsxs)(_.Text, {
          variant: "text-sm/semibold",
          className: eR.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eH, {
          user: i.boom,
          innerClassName: eR.userGreen
        }), (0, r.jsx)(eH, {
          user: i.cherry,
          innerClassName: eR.userGreen
        })]
      })
    })
  },
  ez = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, v.e7)([P.Z], () => P.Z.useReducedMotion), s = G.ZP.canUsePremiumProfileCustomization(n), c = (0, v.cj)([D.Z], () => D.Z.getAllPending()), {
      pendingAvatar: u
    } = c, m = function(e, t) {
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
    }(c, ["pendingAvatar"]), p = (0, R.SD)({
      userId: n.id,
      image: u
    }), f = t.type === d.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: _,
      firstProfileEffect: g,
      firstNameplate: b
    } = (0, $.Rj)(t), x = null != g, C = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.Z, eB(eL({}, m), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: _,
        pendingProfileEffect: g,
        disabledInputs: true,
        hideMessageInput: !x,
        hideCustomStatus: true,
        hideBioSection: f,
        hideExampleButton: true,
        interactive: false
      })), f && (0, r.jsx)(eV, {
        user: n
      })]
    }), I = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: eR.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eR.combinedPreviewContent,
          children: C()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(eR.nameplatePreviewContainerInner, a && c ? eR.sliding : ""),
          children: I(n)
        }) : (0, r.jsx)("div", {
          className: l()(eR.profileEffectPreviewsContainerInner, a && c ? eR.sliding : ""),
          children: C()
        })
      }
    }
    return null != b ? (0, r.jsx)("div", {
      className: eR.nameplatePreviewContainerInner,
      children: I(b)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === d.Z.AVATAR_DECORATION ? eR.previewsContainerInner : eR.profileEffectPreviewsContainerInner,
      children: C()
    })
  },
  eV = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, w.e5)(eB(eL({}, (0, T.ZP)({
        author: t,
        channelId: "1337",
        content: ek.intl.string(ek.t.d5YwKy)
      })), {
        state: eA.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ek.intl.string(ek.t["TN+ZvL"]),
      children: (0, r.jsx)(_.Rny, {
        children: (0, r.jsxs)(_.Zbd, {
          className: eR.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(E.Z, {
            className: eR.mockMessage,
            author: (0, O.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eR.mockInput,
            children: [(0, r.jsx)(_.oFk, {
              size: "md",
              color: "currentColor",
              className: eR.mockInputButton
            }), (0, r.jsx)(_.EO4, {
              size: "md",
              color: "currentColor",
              className: eR.mockInputButton
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
      returnRef: c,
      analyticsSource: u,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: f,
      tab: h,
      variantType: g = eS.Ch.DEFAULT
    } = e, b = (0, v.e7)([F.default], () => F.default.getCurrentUser()), x = (0, ew.f)(a), {
      previewingVariantIndex: P
    } = x, j = (0, v.e7)([W.Z], () => W.Z.purchases), w = (0, Y.o)(a, j), T = (0, eP.N)(a, P), O = (0, eC.W)(a, w);
    s()(null != O, "Selected product should not be null");
    let {
      analyticsLocations: E
    } = (0, I.ZP)([...p, C.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ea.u9)(O.skuId);
    let S = (0, ej.kc)(o),
      A = (0, L.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != b && (0, B.Z)(b.id, b.getAvatarURL(true, 80))
    }, [b]);
    let N = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      M.default.track(eA.rMx.OPEN_MODAL, {
        type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: u,
        location_stack: E,
        sku_id: O.skuId,
        product_type: N
      }), O.items.forEach(V.oK)
    }, [u, E, O.skuId, O.items, N]);
    let y = (0, U.r9)(),
      k = t === _.Dvm.EXITING,
      R = (0, eI.t0)(a),
      Z = null == R ? true : R.amount,
      D = i.useMemo(() => (0, q.x6)(O) ? O.items.length : 0, [O]),
      {
        activeSlide: H,
        isTransitioning: G
      } = (0, et.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == b ? null : (0, r.jsx)(I.Gt, {
      value: E,
      children: (0, r.jsxs)(_.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eR.modalRoot,
        returnRef: c,
        transitionState: t,
        size: _.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(_.hzk, {
          "data-migration-pending": true,
          className: eR.modalContent,
          children: [(0, r.jsx)(eM, {
            user: b,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: x,
            selectedVariantIndex: w,
            shouldCheckoutWithOrbs: f,
            tab: h,
            activeBundleSlide: H,
            variantType: g
          }), (0, r.jsxs)("div", {
            className: l()(eR.previewContainer, O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eR.fractionalNitroPreviewContainer : O.type === d.Z.AVATAR_DECORATION ? eR.collectiblePreviewsContainerWithChat : eR.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(S, ")")
            },
            children: [(0, eS.o0)(a.skuId) ? a.skuId === eS.Vt.ORB_PROFILE_BADGE ? y || k ? null : (0, r.jsx)(ep.M, {
              user: b
            }) : a.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ev.b, {
              product: a,
              className: eR.externalProductProfilePreview
            }) : (0, r.jsx)(ez, {
              user: b,
              product: null != T ? T : O,
              activeBundleSlide: H,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: eR.pdpControls,
              children: [A && (0, r.jsx)(eg.a, {
                product: a,
                selectedVariantIndex: w,
                className: eR.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: O.skuId,
                tab: h
              }), (0, r.jsx)(_.hU, {
                "aria-label": ek.intl.string(ek.t.cpT0Cg),
                onClick: n,
                icon: _.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != Z && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(_.mzw, {
            "data-migration-pending": true,
            className: eR.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eR.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eR.modalFooterContentContainer,
              children: [(0, r.jsx)(_.Text, {
                variant: "text-sm/semibold",
                className: eR.modalFooterText,
                children: ek.intl.format(ek.t["78ph4e"], {
                  discountOfferAmount: Z
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