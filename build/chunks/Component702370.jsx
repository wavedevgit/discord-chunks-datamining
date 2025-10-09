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
    } = e, a = i.useRef(null), o = (0, C.X)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? eL.bundleAvatarPreviewContainer : eL.avatarPreviewContainer,
      children: (0, r.jsx)(eb.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? eL.bundlePfxPreviewContainer : eL.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(k.Z, {
        skuId: t.skuId,
        isHighlighted: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: eL.nameplatePreviewContainer,
      children: (0, r.jsx)(ex.Z, {
        className: eL.nameplatePreview,
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
      className: eL.bundlePreviewContainer,
      children: (0, r.jsx)(g.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let a = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(l, ")");
          return (0, r.jsx)(g.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eL.bundlePreviewSlide,
              children: [(0, r.jsx)(eB, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(g.Text, {
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
    }) : (0, ew.o0)(t.skuId) ? (0, r.jsx)(ef.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eB, {
      item: t.items[0],
      user: n
    }) : null
  },
  eH = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(g.Text, {
      variant: "text-sm/normal",
      className: eL.learnMoreLink,
      children: ek.intl.format(ek.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(ey.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eM = e => {
    let {
      product: t,
      user: n,
      category: l,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: x,
      selectedVariantIndex: P,
      tab: S,
      activeBundleSlide: C,
      variantType: T
    } = e, {
      analyticsLocations: j
    } = (0, I.ZP)(), E = W.ZP.canUseCollectibles(n), {
      previewingVariantIndex: O
    } = x, w = (0, eP.N)(t, O), N = (0, eI.W)(t, P);
    s()(null != N, "Selected product should not be null");
    let k = (0, Q.L)(t),
      {
        isPurchased: L,
        isPartiallyOwnedBundle: R
      } = (0, Q.L)(N),
      {
        isDisabled: Z,
        disabledReason: D
      } = (0, X.G)(N.skuId),
      H = (0, Y.ne)({
        product: N,
        isPartiallyOwnedBundle: R,
        isPurchased: L
      }),
      M = (0, f.e7)([z.Z], () => z.Z.isClaiming === (null == N ? true : N.skuId)),
      F = (0, b.ZP)(),
      K = (0, v.wj)(F),
      ee = (0, Y.G1)(N),
      et = (0, Y.ql)(N, ey.tuJ.DEFAULT),
      er = (null == et ? true : et.amount) === 0,
      {
        firstAvatarDecoration: ei
      } = (0, $.Rj)(null != w ? w : N),
      el = i.useMemo(() => (0, Y.BH)(N, E), [N, E]),
      {
        handleUseNow: em,
        isApplying: ep
      } = (0, q.W)({
        product: N,
        onSuccess: c
      }),
      ef = (0, ej.To)(N),
      {
        enabled: e_
      } = (0, B.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eb = (0, eS.Iw)(t),
      ex = null != eb,
      {
        checkoutEligiblePrices: eC,
        isOrbExclusive: eT,
        hasSufficientOrbs: eR
      } = (0, eE.Ip)({
        product: N,
        isPremiumUser: E,
        tab: S,
        hasDiscountOffer: ex
      }),
      eZ = i.useCallback(() => (0, y.Z)({
        skuId: N.skuId,
        analyticsLocations: j,
        variantsReturnStyle: p.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [j, c, N.skuId]);
    i.useEffect(() => {
      if (null != ei) return (0, _.cV)(ei), () => (0, _.cV)(true)
    }, [ei]);
    let eB = (0, J.G)(N);
    return (0, r.jsxs)("div", {
      className: eL.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eL.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: l,
          display: eo.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != w ? w : N,
        user: n,
        activeSlide: C
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eL.description,
          children: [(0, r.jsx)(ea.Z, {
            product: N,
            isDarkText: !K,
            isOrbExclusive: eT
          }), (0, r.jsx)(g.Heading, {
            variant: "heading-xl/extrabold",
            className: eL.headingWithItemTypePill,
            children: ef
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: eB
          }), (0, r.jsx)(eH, {
            skuId: N.skuId
          }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: eL.priceTag,
            isPartiallyPurchased: R
          }) : ee ? (0, r.jsx)(g.Text, {
            variant: "text-md/semibold",
            className: eL.priceTag,
            children: ek.intl.string(ek.t.rt69oq)
          }) : e_ ? (0, r.jsx)(eh.a, {
            prices: eC,
            product: N,
            isPremiumUser: E,
            discount: el,
            hasSufficientOrbs: eR,
            isProductDisabled: Z,
            discountOfferAmount: eb
          }) : (0, r.jsxs)("div", {
            className: eL.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: N,
              discount: el,
              isPremiumUser: E,
              hideStrikethroughPrice: !E || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eb
            }), E || ex ? null : (0, r.jsx)(eu.Z, {
              product: N
            })]
          })]
        }), (0, r.jsx)(g.Rny, {
          children: T === ew.Ch.DEFAULT ? (0, r.jsx)(ev.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: x,
            className: eL.variantsSwitch
          }) : (0, r.jsx)(eg.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: x,
            className: eL.variantsThumbnail,
            selectedVariantIndex: P
          })
        }), null !== D && (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          className: eL.disabledReason,
          children: D
        }), (0, r.jsx)(g.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (ee && !E && !er) {
              let e;
              return e = ek.intl.string(ek.t.sEAnVF), (0, r.jsx)(A.Z, {
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
                    analyticsLocations: j,
                    variantType: T
                  })
                }
              })
            }
            return H ? L ? (0, r.jsx)(g.Button, {
              variant: "primary",
              onClick: em,
              loading: ep,
              text: ek.intl.string(ek.t.MAS7uL),
              fullWidth: true
            }) : ee ? (0, r.jsx)(g.Button, {
              loading: M,
              loadingStartedLabel: ek.intl.string(ek.t["TYw+9v"]),
              loadingFinishedLabel: ek.intl.string(ek.t.Pg1UPz),
              onClick: async () => {
                await (0, V.fK)(N.skuId), c(), (0, eO.Z)({
                  product: N,
                  analyticsLocations: j,
                  purchaseType: ew.o8.PREMIUM_PURCHASE
                })
              },
              text: ek.intl.string(ek.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eC.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  let t = Z ? ek.intl.string(ek.t.cTdr39) : ek.intl.string(ek.t.zqh7ZG),
                    i = !eR || Z,
                    l = ek.intl.formatToPlainString(ek.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    a = i ? "".concat(l, ", ").concat(t) : l;
                  return (0, r.jsx)(h.u, {
                    position: "top",
                    text: t,
                    shouldShow: i,
                    "aria-label": false,
                    children: (0, r.jsx)(g.Button, {
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
                            }), c(), (0, eO.Z)({
                              product: N,
                              analyticsLocations: j,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: ew.o8.ORB
                            })
                          },
                          analyticsLocations: j
                        })
                      },
                      disabled: i,
                      "aria-label": a,
                      text: ek.intl.format(ek.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(g.aQr, {
                          className: eL.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                let i = !ee && !er && !u.tq && !eT && H,
                  l = (0, Y.x6)(N) ? ek.intl.string(ek.t.V1AWw8) : N.type === d.Z.PROFILE_EFFECT ? ek.intl.string(ek.t.kAeDcH) : N.type === d.Z.NAMEPLATE ? ek.intl.string(ek.t.H3vhqa) : ek.intl.string(ek.t.AQ0Ven);
                return ex ? l = ek.intl.formatToPlainString(ek.t["5U5RBw"], {
                  discountOfferAmount: eb
                }) : e_ && (l = ek.intl.formatToPlainString(ek.t["cNSL/v"], {
                  price: (0, G.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(g.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(g.Button, {
                    variant: n ? "primary" : "secondary",
                    onClick: eZ,
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
        }), (0, r.jsx)(g.Text, {
          className: a()(eL.disclaimer, !K && eL.disclaimerLight),
          variant: "text-xxs/normal",
          children: ee && !L ? ek.intl.string(ek.t.nKdAlJ) : null
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
      className: eL.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(S.Z, {
        avatar: (0, r.jsx)(g.qEK, {
          src: t.avatarSrc,
          size: g.EFr.SIZE_32,
          "aria-label": t.name,
          status: g.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eL.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eW = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, w.w$)();
    return (0, r.jsx)("div", {
      className: eL.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": ek.intl.string(ek.t.SZeUdX),
      children: (0, r.jsxs)(g.Rny, {
        children: [(0, r.jsx)(eF, {
          user: i.mallow,
          innerClassName: eL.userBlue
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: eL.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eF, {
          user: i.phibi,
          innerClassName: eL.userPink
        }), (0, r.jsx)("div", {
          className: eL.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(ex.Z, {
            className: eL.nameplatePreview,
            innerClassName: eL.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true
          })
        }), (0, r.jsx)(eF, {
          user: i.locke,
          innerClassName: eL.userPink
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: eL.nameplateRightPanePreviewSectionGroup,
          children: [ek.intl.string(ek.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eF, {
          user: i.boom,
          innerClassName: eL.userGreen
        }), (0, r.jsx)(eF, {
          user: i.cherry,
          innerClassName: eL.userGreen
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
    } = e, o = (0, f.e7)([x.Z], () => x.Z.useReducedMotion), s = W.ZP.canUsePremiumProfileCustomization(n), c = (0, f.cj)([D.Z], () => D.Z.getAllPending()), {
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
    }(c, ["pendingAvatar"]), p = (0, L.SD)({
      userId: n.id,
      image: u
    }), h = t.type === d.Z.AVATAR_DECORATION, [v] = t.items, {
      firstAvatarDecoration: g,
      firstProfileEffect: _,
      firstNameplate: b
    } = (0, $.Rj)(t), P = null != _, I = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eZ(eR({}, m), {
        pendingAvatar: p,
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
    if (t.type === d.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
        className: eL.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: eL.combinedPreviewContent,
          children: I()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          s = t.items[Math.max(0, e - 1)],
          c = (null == s ? true : s.type) !== (null == n ? true : n.type) && !o;
        return n.type === d.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: a()(eL.nameplatePreviewContainerInner, l && c ? eL.sliding : ""),
          children: S(n)
        }) : (0, r.jsx)("div", {
          className: a()(eL.profileEffectPreviewsContainerInner, l && c ? eL.sliding : ""),
          children: I()
        })
      }
    }
    return null != b ? (0, r.jsx)("div", {
      className: eL.nameplatePreviewContainerInner,
      children: S(b)
    }) : (0, r.jsx)("div", {
      className: (null == v ? true : v.type) === d.Z.AVATAR_DECORATION ? eL.previewsContainerInner : eL.profileEffectPreviewsContainerInner,
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
      return (0, T.e5)(eZ(eR({}, (0, j.ZP)({
        author: t,
        channelId: "1337",
        content: ek.intl.string(ek.t.d5YwKy)
      })), {
        state: ey.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": ek.intl.string(ek.t["TN+ZvL"]),
      children: (0, r.jsx)(g.Rny, {
        children: (0, r.jsxs)(g.Zbd, {
          className: eL.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(O.Z, {
            className: eL.mockMessage,
            author: (0, E.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eL.mockInput,
            children: [(0, r.jsx)(g.oFk, {
              size: "md",
              color: "currentColor",
              className: eL.mockInputButton
            }), (0, r.jsx)(g.EO4, {
              size: "md",
              color: "currentColor",
              className: eL.mockInputButton
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
      analyticsSource: u,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: h,
      tab: v,
      variantType: _ = ew.Ch.DEFAULT
    } = e, b = (0, f.e7)([H.default], () => H.default.getCurrentUser()), x = (0, eT.f)(l), {
      previewingVariantIndex: S
    } = x, C = (0, f.e7)([z.Z], () => z.Z.purchases), T = (0, K.o)(l, C), j = (0, eP.N)(l, S), E = (0, eI.W)(l, T);
    s()(null != E, "Selected product should not be null");
    let {
      analyticsLocations: O
    } = (0, I.ZP)([...p, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, el.u9)(E.skuId);
    let w = (0, eC.kc)(o),
      y = (0, R.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != b && (0, Z.Z)(b.id, b.getAvatarURL(true, 80))
    }, [b]);
    let A = i.useMemo(() => (0, Y.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(ey.rMx.OPEN_MODAL, {
        type: ey.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: u,
        location_stack: O,
        sku_id: E.skuId,
        product_type: A
      }), E.items.forEach(V.oK)
    }, [u, O, E.skuId, E.items, A]);
    let N = (0, U.r9)(),
      k = t === g.Dvm.EXITING,
      L = (0, eS.t0)(l),
      B = null == L ? true : L.amount,
      D = i.useMemo(() => (0, Y.x6)(E) ? E.items.length : 0, [E]),
      {
        activeSlide: F,
        isTransitioning: W
      } = (0, et.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == b ? null : (0, r.jsx)(I.Gt, {
      value: O,
      children: (0, r.jsxs)(g.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eL.modalRoot,
        returnRef: c,
        transitionState: t,
        size: g.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(g.hzk, {
          "data-migration-pending": true,
          className: eL.modalContent,
          children: [(0, r.jsx)(eM, {
            user: b,
            product: l,
            category: o,
            onClose: n,
            previewingVariantIndexProps: x,
            selectedVariantIndex: T,
            shouldCheckoutWithOrbs: h,
            tab: v,
            activeBundleSlide: F,
            variantType: _
          }), (0, r.jsxs)("div", {
            className: a()(eL.previewContainer, E.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eL.fractionalNitroPreviewContainer : E.type === d.Z.AVATAR_DECORATION ? eL.collectiblePreviewsContainerWithChat : eL.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(w, ")")
            },
            children: [(0, ew.o0)(l.skuId) ? l.skuId === ew.Vt.ORB_PROFILE_BADGE ? N || k ? null : (0, r.jsx)(ep.M, {
              user: b
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ef.b, {
              product: l,
              className: eL.externalProductProfilePreview
            }) : (0, r.jsx)(eG, {
              user: b,
              product: null != j ? j : E,
              activeBundleSlide: F,
              isTransitioning: W
            }), (0, r.jsxs)("div", {
              className: eL.pdpControls,
              children: [y && (0, r.jsx)(e_.a, {
                product: l,
                selectedVariantIndex: T,
                className: eL.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: E.skuId,
                tab: v
              }), (0, r.jsx)(g.hU, {
                "aria-label": ek.intl.string(ek.t.cpT0Cg),
                onClick: n,
                icon: g.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != B && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(g.mzw, {
            "data-migration-pending": true,
            className: eL.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eL.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eL.modalFooterContentContainer,
              children: [(0, r.jsx)(g.Text, {
                variant: "text-sm/semibold",
                className: eL.modalFooterText,
                children: ek.intl.format(ek.t["78ph4e"], {
                  discountOfferAmount: B
                })
              }), (null == L ? true : L.expiresAt) != null && (0, r.jsx)(ei.R, {
                endDate: L.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }