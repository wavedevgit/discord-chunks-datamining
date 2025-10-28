/** Chunk was on 95215 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk566697 = require("./566697.jsx"),
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
    return (0, c.EQ)(t.type).with(u.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: a ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(e_.R, {
        user: n,
        item: t
      })
    })).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: a ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(R.Z, {
        skuId: t.skuId,
        isHighlighted: o,
        removeSetHeight: true
      })
    })).with(u.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(S.Z, {
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
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === d.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(h.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eR.intl.format(eR.t.Q1scdE, {
        helpdeskArticle: G.Z.getArticleURL(eE.BhN.FRACTIONAL_PREMIUM_ABOUT)
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
      returnRef: d,
      previewingVariantIndexProps: _,
      selectedVariantIndex: x,
      tab: j,
      activeBundleSlide: O,
      variantType: C
    } = e, {
      analyticsLocations: I
    } = (0, P.ZP)(), w = H.ZP.canUseCollectibles(n), {
      previewingVariantIndex: y
    } = _, T = (0, ex.N)(t, y), S = (0, eP.W)(t, x);
    s()(null != S, "Selected product should not be null");
    let N = (0, Q.L)(t),
      {
        isPurchased: R,
        isPartiallyOwnedBundle: k
      } = (0, Q.L)(S),
      {
        isDisabled: L,
        disabledReason: B
      } = (0, X.G)(S.skuId),
      D = (0, q.ne)({
        product: S,
        isPartiallyOwnedBundle: k,
        isPurchased: R
      }),
      M = (0, p.e7)([W.Z], () => W.Z.isClaiming === (null == S ? true : S.skuId)),
      F = (0, g.ZP)(),
      G = (0, f.wj)(F),
      K = (0, q.G1)(S),
      ee = (0, q.ql)(S, eE.tuJ.DEFAULT),
      et = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: er
      } = (0, $.Rj)(null != T ? T : S),
      ei = i.useMemo(() => (0, q.BH)(S, w), [S, w]),
      {
        handleUseNow: ea,
        isApplying: em
      } = (0, Y.W)({
        product: S,
        onSuccess: c
      }),
      ep = (0, ew.To)(S),
      ev = (0, eC.J)(S),
      {
        enabled: eg
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      e_ = (0, ej.Iw)(t),
      eO = null != e_,
      {
        checkoutEligiblePrices: eI,
        isOrbExclusive: eL,
        hasSufficientOrbs: eB
      } = (0, ey.Ip)({
        product: S,
        isPremiumUser: w,
        tab: j,
        hasDiscountOffer: eO
      }),
      eZ = i.useCallback(() => (0, E.Z)({
        skuId: S.skuId,
        analyticsLocations: I,
        variantsReturnStyle: m.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eN.dG)()
      }), [I, c, S.skuId]);
    i.useEffect(() => {
      if (null != er) return (0, b.cV)(er), () => (0, b.cV)(true)
    }, [er]);
    let eU = (0, J.G)(S);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(eo.Z, {
          category: a,
          display: eo.k.MODAL
        })
      }), (0, r.jsx)(eD, {
        product: null != T ? T : S,
        user: n,
        activeSlide: O
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(el.Z, {
            product: S,
            isDarkText: !G,
            isOrbExclusive: eL
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: ep
          }), (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: eU
          }), (0, r.jsx)(eM, {
            skuId: S.skuId
          }), N.isPurchased || N.isPartiallyOwnedBundle ? (0, r.jsx)(en.U, {
            className: ek.priceTag,
            isPartiallyPurchased: k
          }) : K ? (0, r.jsx)(h.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eR.intl.string(eR.t.rt69oo)
          }) : eg ? (0, r.jsx)(ef.a, {
            prices: eI,
            product: S,
            isPremiumUser: w,
            discount: ei,
            hasSufficientOrbs: eB,
            isProductDisabled: L,
            discountOfferAmount: e_
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: S,
              discount: ei,
              isPremiumUser: w,
              hideStrikethroughPrice: !w || eO,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: e_
            }), w || eO ? null : (0, r.jsx)(eu.Z, {
              product: S
            })]
          })]
        }), (0, r.jsx)(h.Rny, {
          children: C === eS.Ch.DEFAULT ? (0, r.jsx)(eh.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsSwitch
          }) : (0, r.jsx)(eb.r, {
            variantGroupProduct: t,
            previewingVariantIndexProps: _,
            className: ek.variantsThumbnail,
            selectedVariantIndex: x
          })
        }), null !== B && (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: B
        }), (0, r.jsx)(h.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (K && !w && !et) {
              let e;
              return e = eR.intl.string(eR.t.sEAnVH), (0, r.jsx)(A.Z, {
                subscriptionTier: eA.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ed.v,
                onSubscribeModalClose: () => {
                  (0, ed.T)({
                    product: S,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: d,
                    analyticsLocations: I,
                    variantType: C
                  })
                }
              })
            }
            return D ? R ? (0, r.jsx)(h.Button, {
              variant: "primary",
              onClick: ea,
              loading: em,
              text: eR.intl.string(eR.t.MAS7uK),
              fullWidth: true
            }) : K ? (0, r.jsx)(h.Button, {
              loading: M,
              loadingStartedLabel: eR.intl.string(eR.t["TYw+9s"]),
              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UP5),
              onClick: async () => {
                await (0, z.fK)(S.skuId), c(), (0, eT.Z)({
                  product: S,
                  analyticsLocations: I,
                  purchaseType: eS.o8.PREMIUM_PURCHASE
                })
              },
              text: eR.intl.string(eR.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eI.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eN.pK.DISCORD_ORB) {
                  let t = L ? eR.intl.string(eR.t.cTdr3x) : eR.intl.string(eR.t.zqh7ZM),
                    n = !eB || L,
                    a = eR.intl.formatToPlainString(eR.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    l = n ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(v.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(h.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, U.qA)({
                          skuId: S.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, z.qg)({
                              variantsReturnStyle: m.v.VARIANTS_GROUP
                            }), c(), (0, eT.Z)({
                              product: S,
                              analyticsLocations: I,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eS.o8.ORB
                            })
                          },
                          analyticsLocations: I
                        })
                      },
                      disabled: n,
                      "aria-label": l,
                      text: eR.intl.format(eR.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(h.aQr, {
                          className: ek.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, q.x6)(S) ? eR.intl.string(eR.t.V1AWw0) : S.type === u.Z.PROFILE_EFFECT ? eR.intl.string(eR.t.kAeDcK) : S.type === u.Z.NAMEPLATE ? eR.intl.string(eR.t.H3vhqU) : eR.intl.string(eR.t.AQ0Veg), eO ? n = eR.intl.formatToPlainString(eR.t["5U5RB5"], {
                  discountOfferAmount: e_
                }) : eg && (n = eR.intl.formatToPlainString(eR.t["cNSL/j"], {
                  price: (0, V.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(h.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(h.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eZ,
                    text: n,
                    fullWidth: true
                  }), ev && (0, r.jsx)(es.Z, {
                    primary: i,
                    product: S,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(h.Text, {
          className: l()(ek.disclaimer, !G && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: K && !R ? eR.intl.string(eR.t.nKdAlO) : null
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
  eH = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, T.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eR.intl.string(eR.t.SZeUdR),
      children: (0, r.jsxs)(h.Rny, {
        children: [(0, r.jsx)(eG, {
          user: i.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eG, {
          user: i.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(S.Z, {
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
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["NG43/6"]), " - 12"]
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
  eV = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, p.e7)([_.Z], () => _.Z.useReducedMotion), s = H.ZP.canUsePremiumProfileCustomization(n), c = (0, p.cj)([D.Z], () => D.Z.getAllPending()), {
      pendingAvatar: d
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
    }(c, ["pendingAvatar"]), v = (0, k.SD)({
      userId: n.id,
      image: d
    }), f = t.type === u.Z.AVATAR_DECORATION, [h] = t.items, {
      firstAvatarDecoration: b,
      firstProfileEffect: g,
      firstNameplate: x
    } = (0, $.Rj)(t), P = null != g, j = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, eB(eL({}, m), {
        pendingAvatar: v,
        user: n,
        canUsePremiumCustomization: s,
        pendingAvatarDecoration: b,
        pendingProfileEffect: g,
        disabledInputs: true,
        hideMessageInput: !P,
        hideCustomStatus: true,
        hideBioSection: f,
        hideExampleButton: true,
        interactive: false
      })), f && (0, r.jsx)(ez, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e
    });
    if (t.type === u.Z.BUNDLE) {
      if (!(0, ee.L)(t)) return (0, r.jsx)("div", {
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
        return n.type === u.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(ek.nameplatePreviewContainerInner, a && c ? ek.sliding : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: l()(ek.profileEffectPreviewsContainerInner, a && c ? ek.sliding : ""),
          children: j()
        })
      }
    }
    return null != x ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: O(x)
    }) : (0, r.jsx)("div", {
      className: (null == h ? true : h.type) === u.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: j()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, C.e5)(eB(eL({}, (0, I.ZP)({
        author: t,
        channelId: "1337",
        content: eR.intl.string(eR.t.d5YwK5)
      })), {
        state: eE.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eR.intl.string(eR.t["TN+ZvB"]),
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
  eW = e => {
    let {
      transitionState: t,
      onClose: n,
      product: a,
      category: o,
      returnRef: c,
      analyticsSource: m,
      analyticsLocations: v,
      shouldCheckoutWithOrbs: f,
      tab: b,
      variantType: g = eS.Ch.DEFAULT
    } = e, _ = (0, p.e7)([M.default], () => M.default.getCurrentUser()), j = (0, eI.f)(a), {
      previewingVariantIndex: O
    } = j, C = (0, K.o)(a), I = (0, ex.N)(a, O), w = (0, eP.W)(a, C);
    s()(null != w, "Selected product should not be null");
    let {
      analyticsLocations: y
    } = (0, P.ZP)([...v, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ea.u9)(w.skuId);
    let T = (0, eO.kc)(o),
      S = (0, L.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != _ && (0, B.Z)(_.id, _.getAvatarURL(true, 80))
    }, [_]);
    let E = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      F.default.track(eE.rMx.OPEN_MODAL, {
        type: eE.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: m,
        location_stack: y,
        sku_id: w.skuId,
        product_type: E
      }), w.items.forEach(z.oK)
    }, [m, y, w.skuId, w.items, E]);
    let A = (0, U.r9)(),
      N = t === h.Dvm.EXITING,
      R = (0, ej.t0)(a),
      k = null == R ? true : R.amount,
      Z = i.useMemo(() => (0, q.x6)(w) ? w.items.length : 0, [w]),
      {
        activeSlide: D,
        isTransitioning: G
      } = (0, et.b)({
        slideCount: Z,
        intervalMs: 5e3
      });
    return null == _ ? null : (0, r.jsx)(P.Gt, {
      value: y,
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
            user: _,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: j,
            selectedVariantIndex: C,
            shouldCheckoutWithOrbs: f,
            tab: b,
            activeBundleSlide: D,
            variantType: g
          }), (0, r.jsxs)("div", {
            className: l()(ek.previewContainer, w.skuId === d.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : w.type === u.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(T, ")")
            },
            children: [(0, eS.o0)(a.skuId) ? a.skuId === eS.Vt.ORB_PROFILE_BADGE ? A || N ? null : (0, r.jsx)(ep.M, {
              user: _
            }) : a.skuId === d.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ev.b, {
              product: a,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eV, {
              user: _,
              product: null != I ? I : w,
              activeBundleSlide: D,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [S && (0, r.jsx)(eg.a, {
                product: a,
                selectedVariantIndex: C,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(er.n, {
                skuId: w.skuId,
                tab: b
              }), (0, r.jsx)(h.hU, {
                "aria-label": eR.intl.string(eR.t.cpT0Cq),
                onClick: n,
                icon: h.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != k && (0, r.jsx)(r.Fragment, {
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
                children: eR.intl.format(eR.t["78ph4b"], {
                  discountOfferAmount: k
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