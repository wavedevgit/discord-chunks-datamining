/** Chunk was on 21885 **/
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
    } = e, l = i.useRef(null), o = (0, O.X)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: a ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(ex.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: a ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(R.Z, {
        skuId: t.skuId,
        isHighlighted: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(e_.Z, {
        className: ek.nameplatePreview,
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
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(g.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(g.Mi4, {
            id: l,
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
    return (0, Y.x6)(t) ? (0, r.jsx)(eU, {
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
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(g.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eR.intl.format(eR.t.Q1scdH, {
        helpdeskArticle: G.Z.getArticleURL(ey.BhN.FRACTIONAL_PREMIUM_ABOUT)
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
      previewingVariantIndexProps: _,
      selectedVariantIndex: P,
      tab: j,
      activeBundleSlide: O,
      variantType: I
    } = e, {
      analyticsLocations: T
    } = (0, C.ZP)(), w = H.ZP.canUseCollectibles(n), {
      previewingVariantIndex: E
    } = _, S = (0, eP.N)(t, E), N = (0, eC.W)(t, P);
    s()(null != N, "Selected product should not be null");
    let R = (0, Q.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: L
      } = (0, Q.L)(N),
      {
        isDisabled: B,
        disabledReason: D
      } = (0, X.G)(N.skuId),
      F = (0, Y.ne)({
        product: N,
        isPartiallyOwnedBundle: L,
        isPurchased: k
      }),
      M = (0, v.e7)([W.Z], () => W.Z.isClaiming === (null == N ? true : N.skuId)),
      G = (0, x.ZP)(),
      q = (0, h.wj)(G),
      ee = (0, Y.G1)(N),
      et = (0, Y.ql)(N, ey.tuJ.DEFAULT),
      er = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, $.Rj)(null != S ? S : N),
      ea = i.useMemo(() => (0, Y.BH)(N, w), [N, w]),
      {
        handleUseNow: em,
        isApplying: ep
      } = (0, K.W)({
        product: N,
        onSuccess: c
      }),
      ev = (0, eT.To)(N),
      {
        enabled: eb
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      ex = (0, ej.Iw)(t),
      e_ = null != ex,
      {
        checkoutEligiblePrices: eO,
        isOrbExclusive: eI,
        hasSufficientOrbs: eL
      } = (0, ew.Ip)({
        product: N,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: e_
      }),
      eB = i.useCallback(() => (0, y.Z)({
        skuId: N.skuId,
        analyticsLocations: T,
        variantsReturnStyle: p.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [T, c, N.skuId]);
    i.useEffect(() => {
      if (null != ei) return (0, b.cV)(ei), () => (0, b.cV)(true)
    }, [ei]);
    let eZ = (0, J.G)(N);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: a,
          display: eo.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != S ? S : N,
        user: n,
        activeSlide: O
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(el.Z, {
            product: N,
            isDarkText: !q,
            isOrbExclusive: eI
          }), (0, r.jsx)(g.X6q, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: ev
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: eZ
          }), (0, r.jsx)(eF, {
            skuId: N.skuId
          }), R.isPurchased || R.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: ek.priceTag,
            isPartiallyPurchased: L
          }) : ee ? (0, r.jsx)(g.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eR.intl.string(eR.t.rt69oq)
          }) : eb ? (0, r.jsx)(ef.a, {
            prices: eO,
            product: N,
            isPremiumUser: w,
            discount: ea,
            hasSufficientOrbs: eL,
            isProductDisabled: B,
            discountOfferAmount: ex
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: N,
              discount: ea,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || e_,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: ex
            }), w || e_ ? null : (0, r.jsx)(eu.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(g.Rny, {
          children: I === eS.Ch.DEFAULT ? (0, r.jsx)(eh.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsSwitch
          }) : (0, r.jsx)(eg.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsThumbnail,
            selectedVariantIndex: P
          })
        }), null !== D && (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: D
        }), (0, r.jsx)(g.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !w && !er) {
              let e;
              return e = eR.intl.string(eR.t.sEAnVF), (0, r.jsx)(A.Z, {
                subscriptionTier: eA.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: N,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: m,
                    analyticsLocations: T,
                    variantType: I
                  })
                }
              })
            }
            return F ? k ? (0, r.jsx)(g.zxk, {
              variant: "primary",
              onClick: em,
              loading: ep,
              text: eR.intl.string(eR.t.MAS7uL),
              fullWidth: true
            }) : ee ? (0, r.jsx)(g.zxk, {
              loading: M,
              loadingStartedLabel: eR.intl.string(eR.t["TYw+9v"]),
              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UPz),
              onClick: async () => {
                await (0, V.fK)(N.skuId), c(), (0, eE.Z)({
                  product: N,
                  analyticsLocations: T,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: eR.intl.string(eR.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eO.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  let t = B ? eR.intl.string(eR.t.cTdr39) : eR.intl.string(eR.t.zqh7ZG),
                    i = !eL || B,
                    a = eR.intl.formatToPlainString(eR.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    l = i ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(f.u, {
                    position: "top",
                    text: t,
                    shouldShow: i,
                    "aria-label": false,
                    children: (0, r.jsx)(g.zxk, {
                      variant: n ? "primary" : "secondary",
                      onClick: () => {
                        (0, U.qA)({
                          skuId: N.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: p.v.VARIANTS_GROUP
                            }), c(), (0, eE.Z)({
                              product: N,
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
                      text: eR.intl.format(eR.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(g.aQr, {
                          className: ek.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                let i = !ee && !er && !u.tq && !eI && F,
                  a = (0, Y.x6)(N) ? eR.intl.string(eR.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? eR.intl.string(eR.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? eR.intl.string(eR.t.H3vhqa) : eR.intl.string(eR.t.AQ0Ven);
                return e_ ? a = eR.intl.formatToPlainString(eR.t["5U5RBw"], {
                  discountOfferAmount: ex
                }) : eb && (a = eR.intl.formatToPlainString(eR.t["cNSL/v"], {
                  price: (0, z.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(g.hE2, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(g.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: a,
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
        }), (0, r.jsx)(g.Text, {
          className: l()(ek.disclaimer, !q && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !k ? eR.intl.string(eR.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eG = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(j.Z, {
        avatar: (0, r.jsx)(g.qEK, {
          src: t.avatarSrc,
          size: g.EFr.SIZE_32,
          "aria-label": t.name,
          status: g.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(ek.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, S.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eR.intl.string(eR.t.SZeUdX),
      children: (0, r.jsxs)(g.Rny, {
        children: [(0, r.jsx)(eG, {
          user: i.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eG, {
          user: i.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(e_.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eG, {
          user: i.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eG, {
          user: i.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eG, {
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
      isTransitioning: a
    } = e, o = (0, v.e7)([_.Z], () => _.Z.useReducedMotion), s = H.ZP.canUsePremiumProfileCustomization(n), c = (0, v.cj)([D.Z], () => D.Z.getAllPending()), {
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
    }(c, ["pendingAvatar"]), p = (0, k.SD)({
      userId: n.id,
      image: u
    }), f = t.type === d.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: b,
      firstNameplate: x
    } = (0, $.Rj)(t), P = null != b, C = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eB(eL({}, m), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: g,
        pendingProfileEffect: b,
        disabledInputs: true,
        hideMessageInput: !P,
        hideCustomStatus: true,
        hideBioSection: f,
        hideExampleButton: true,
        interactive: false
      })), f && (0, r.jsx)(eV, {
        user: n
      })]
    }), j = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e
    });
    if (t.type === d.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
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
          className: l()(ek.nameplatePreviewContainerInner, a && c ? ek.sliding : ""),
          children: j(n)
        }) : (0, r.jsx)("div", {
          className: l()(ek.profileEffectPreviewsContainerInner, a && c ? ek.sliding : ""),
          children: C()
        })
      }
    }
    return null != x ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: j(x)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === d.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
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
      return (0, I.e5)(eB(eL({}, (0, T.ZP)({
        author: t,
        channelId: "1337",
        content: eR.intl.string(eR.t.d5YwKy)
      })), {
        state: ey.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eR.intl.string(eR.t["TN+ZvL"]),
      children: (0, r.jsx)(g.Rny, {
        children: (0, r.jsxs)(g.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(E.Z, {
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
      variantType: b = eS.Ch.DEFAULT
    } = e, x = (0, v.e7)([F.default], () => F.default.getCurrentUser()), _ = (0, eI.f)(a), {
      previewingVariantIndex: j
    } = _, O = (0, v.e7)([W.Z], () => W.Z.purchases), I = (0, q.o)(a, O), T = (0, eP.N)(a, j), w = (0, eC.W)(a, I);
    s()(null != w, "Selected product should not be null");
    let {
      analyticsLocations: E
    } = (0, C.ZP)([...p, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ea.u9)(w.skuId);
    let S = (0, eO.kc)(o),
      y = (0, L.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != x && (0, B.Z)(x.id, x.getAvatarURL(true, 80))
    }, [x]);
    let A = i.useMemo(() => (0, Y.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      M.default.track(ey.rMx.OPEN_MODAL, {
        type: ey.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: u,
        location_stack: E,
        sku_id: w.skuId,
        product_type: A
      }), w.items.forEach(V.oK)
    }, [u, E, w.skuId, w.items, A]);
    let N = (0, U.r9)(),
      R = t === g.Dvm.EXITING,
      k = (0, ej.t0)(a),
      Z = null == k ? true : k.amount,
      D = i.useMemo(() => (0, Y.x6)(w) ? w.items.length : 0, [w]),
      {
        activeSlide: G,
        isTransitioning: H
      } = (0, et.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == x ? null : (0, r.jsx)(C.Gt, {
      value: E,
      children: (0, r.jsxs)(g.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.modalRoot,
        returnRef: c,
        transitionState: t,
        size: g.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(g.hzk, {
          "data-migration-pending": true,
          className: ek.modalContent,
          children: [(0, r.jsx)(eM, {
            user: x,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: _,
            selectedVariantIndex: I,
            shouldCheckoutWithOrbs: f,
            tab: h,
            activeBundleSlide: G,
            variantType: b
          }), (0, r.jsxs)("div", {
            className: l()(ek.previewContainer, w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(S, ")")
            },
            children: [(0, eS.o0)(a.skuId) ? a.skuId === eS.Vt.ORB_PROFILE_BADGE ? N || R ? null : (0, r.jsx)(ep.M, {
              user: x
            }) : a.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ev.b, {
              product: a,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(ez, {
              user: x,
              product: null != T ? T : w,
              activeBundleSlide: G,
              isTransitioning: H
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [y && (0, r.jsx)(eb.a, {
                product: a,
                selectedVariantIndex: I,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: w.skuId,
                tab: h
              }), (0, r.jsx)(g.hU, {
                "aria-label": eR.intl.string(eR.t.cpT0Cg),
                onClick: n,
                icon: g.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != Z && (0, r.jsx)(r.Fragment, {
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
                children: eR.intl.format(eR.t["78ph4e"], {
                  discountOfferAmount: Z
                })
              }), (null == k ? true : k.expiresAt) != null && (0, r.jsx)(ei.R, {
                endDate: k.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }