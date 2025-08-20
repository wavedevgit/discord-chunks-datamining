/** Chunk was on 17768 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eU
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
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
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk83479 = require("./83479.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk328456 = require("./328456.js"),
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

function ek(e) {
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

function eE(e, t) {
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
let eN = e => {
    let {
      item: t,
      user: n,
      isBundleItem: i = false
    } = e, o = a.useRef(null), l = (0, v.Z)(o);
    return (0, s.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: i ? eA.bundleAvatarPreviewContainer : eA.avatarPreviewContainer,
      children: (0, r.jsx)(ef.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: i ? eA.bundlePfxPreviewContainer : eA.pfxPreviewContainer,
      ref: o,
      children: (0, r.jsx)(k.Z, {
        profileEffectId: t.id,
        isHovering: l,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: o,
      className: eA.nameplatePreviewContainer,
      children: (0, r.jsx)(e_.Z, {
        className: eA.nameplatePreview,
        nameplate: t,
        isHighlighted: l,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eR = e => {
    let {
      product: t,
      user: n
    } = e, [i, o] = a.useState(0);
    a.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && o(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, n.id]);
    let l = t.items.length;
    return (0, r.jsx)("div", {
      className: eA.bundlePreviewContainer,
      children: (0, r.jsx)(_.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            o = null != t.bundledProducts ? t.bundledProducts[a] : true,
            c = "(".concat(a + 1, "/").concat(l, ")");
          return (0, r.jsx)(_.Mi4, {
            id: i,
            children: (0, r.jsxs)("div", {
              className: eA.bundlePreviewSlide,
              children: [(0, r.jsx)(eN, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(_.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eA.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", c]
              })]
            })
          }, i)
        })
      })
    })
  },
  eL = e => {
    let {
      product: t,
      user: n
    } = e;
    return (0, W.x6)(t) ? (0, r.jsx)(eR, {
      product: t,
      user: n
    }) : (0, ej.o0)(t.skuId) ? (0, r.jsx)(ep.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eN, {
      item: t.items[0],
      user: n
    }) : null
  },
  eZ = e => {
    let {
      skuId: t
    } = e;
    return t === p.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(_.Text, {
      variant: "text-sm/normal",
      className: eA.learnMoreLink,
      children: eS.intl.format(eS.t.Q1scdH, {
        helpdeskArticle: H.Z.getArticleURL(eT.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      category: i,
      shouldCheckoutWithOrbs: l,
      onClose: s,
      returnRef: p,
      previewingVariantIndexProps: v,
      selectedVariantIndex: P,
      tab: C
    } = e, {
      analyticsLocations: O
    } = (0, x.ZP)(), y = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: j
    } = v, T = (0, eb.N)(t, j), w = (0, ev.W)(t, P);
    c()(null != w, "Selected product should not be null");
    let A = (0, J.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: E
      } = (0, J.L)(w),
      {
        isDisabled: N,
        disabledReason: B
      } = (0, Y.G)(w.skuId),
      M = (0, W.ne)({
        product: w,
        isPartiallyOwnedBundle: E,
        isPurchased: k
      }),
      D = (0, g.e7)([F.Z], () => F.Z.isClaiming === (null == w ? true : w.skuId)),
      H = (0, h.ZP)(),
      V = (0, f.wj)(H),
      $ = (0, W.G1)(w),
      ee = (0, W.ql)(w, eT.tuJ.DEFAULT),
      et = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: en
      } = (0, X.Rj)(null != T ? T : w),
      es = a.useMemo(() => (0, W.BH)(w, y), [w, y]),
      {
        handleUseNow: eu,
        isApplying: ed
      } = (0, K.W)({
        product: w,
        onSuccess: s
      }),
      ep = (0, eC.To)(w),
      {
        enabled: ef
      } = (0, R.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      e_ = (0, eh.I)(t),
      eP = null != e_,
      {
        checkoutEligiblePrices: ex,
        isOrbExclusive: eN,
        hasSufficientOrbs: eR
      } = (0, eO.Ip)({
        product: w,
        isPremiumUser: y,
        tab: C,
        hasDiscountOffer: eP
      }),
      eB = a.useCallback(() => (0, I.Z)({
        skuId: w.skuId,
        analyticsLocations: O,
        variantsReturnStyle: m.v.VARIANTS_GROUP,
        onClose: e => e ? s() : (0, eI.dG)()
      }), [O, s, w.skuId]);
    a.useEffect(() => {
      if (null != en) return (0, b.cV)(en), () => (0, b.cV)(true)
    }, [en]);
    let eM = (0, q.G)(w);
    return (0, r.jsxs)("div", {
      className: eA.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eA.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: i,
          display: ea.k.MODAL
        })
      }), (0, r.jsx)(eL, {
        product: null != T ? T : w,
        user: n
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eA.description,
          children: [(0, r.jsx)(er.Z, {
            product: w,
            isDarkText: !V,
            isOrbExclusive: eN
          }), (0, r.jsx)(_.X6q, {
            variant: "heading-xl/extrabold",
            className: eA.headingWithItemTypePill,
            children: ep
          }), (0, r.jsx)(_.Text, {
            variant: "text-sm/normal",
            children: eM
          }), (0, r.jsx)(eZ, {
            skuId: w.skuId
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(Q.U, {
            className: eA.priceTag,
            isPartiallyPurchased: E
          }) : $ ? (0, r.jsx)(_.Text, {
            variant: "text-md/semibold",
            className: eA.priceTag,
            children: eS.intl.string(eS.t.rt69oq)
          }) : ef ? (0, r.jsx)(em.a, {
            prices: ex,
            product: w,
            isPremiumUser: y,
            discount: es,
            hasSufficientOrbs: eR,
            isProductDisabled: N,
            discountOfferAmount: e_
          }) : (0, r.jsxs)("div", {
            className: eA.priceTagContainer,
            children: [(0, r.jsx)(eo.Z, {
              product: w,
              discount: es,
              isPremiumUser: y,
              hideStrikethroughPrice: !y || eP,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: e_
            }), y || eP ? null : (0, r.jsx)(el.Z, {
              product: w
            })]
          })]
        }), (0, r.jsx)(_.Rny, {
          children: (0, r.jsx)(eg.P, {
            selectedVariantIndex: P,
            variantGroupProduct: t,
            previewingVariantIndexProps: v,
            className: eA.variantsSwitch
          })
        }), null !== B && (0, r.jsx)(_.Text, {
          variant: "text-xs/normal",
          className: eA.disabledReason,
          children: B
        }), (0, r.jsx)("div", {
          className: eA.buttonsContainer,
          children: (() => {
            if ($ && !y && !et) {
              let e;
              return e = eS.intl.string(eS.t.sEAnVF), (0, r.jsx)(S.Z, {
                subscriptionTier: ew.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: ec.v,
                onSubscribeModalClose: () => {
                  (0, ec.T)({
                    product: w,
                    category: i,
                    shouldCheckoutWithOrbs: l,
                    returnRef: p,
                    analyticsLocations: O
                  })
                }
              })
            }
            return M ? k ? (0, r.jsx)(_.zxk, {
              variant: "primary",
              onClick: eu,
              loading: ed,
              text: eS.intl.string(eS.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(_.zxk, {
              loading: D,
              loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
              loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(w.skuId), s(), (0, ey.Z)({
                  product: w,
                  analyticsLocations: O,
                  purchaseType: ej.o8.PREMIUM_PURCHASE
                })
              },
              text: eS.intl.string(eS.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ex.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eI.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, Z.qA)({
                        skuId: w.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, z.qg)({
                            variantsReturnStyle: m.v.VARIANTS_GROUP
                          }), s(), (0, ey.Z)({
                            product: w,
                            analyticsLocations: O,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: ej.o8.ORB
                          })
                        },
                        analyticsLocations: O
                      })
                    },
                    a = N ? eS.intl.string(eS.t.cTdr39) : eS.intl.string(eS.t.zqh7ZG),
                    i = !eR || N,
                    o = eS.intl.formatToPlainString(eS.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    l = i ? "".concat(o, ", ").concat(a) : o;
                  return (0, r.jsx)(_.ua7, {
                    position: "top",
                    text: a,
                    shouldShow: i,
                    "aria-label": false,
                    children: a => (0, r.jsx)(_.zxk, eE(ek({}, a), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: i,
                      "aria-label": l,
                      text: eS.intl.format(eS.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(L.Z, {
                          className: eA.orbIconAligned,
                          shouldUseThemeColor: i && !t
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let a = !$ && !et && !u.tq && !eN && M,
                  i = (0, W.x6)(w) ? eS.intl.string(eS.t.V1AWw8) : w.type === d.Z.PROFILE_EFFECT ? eS.intl.string(eS.t.kAeDcH) : w.type === d.Z.NAMEPLATE ? eS.intl.string(eS.t.H3vhqa) : eS.intl.string(eS.t.AQ0Ven);
                return eP ? i = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
                  discountOfferAmount: e_
                }) : ef && (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                  price: (0, U.T4)(e.amount, e.currency)
                })), (0, r.jsxs)("div", {
                  className: eA.checkoutButtonsRow,
                  children: [(0, r.jsx)(_.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: i,
                    fullWidth: true
                  }), a && (0, r.jsx)(ei.Z, {
                    primary: n,
                    product: w,
                    onSuccess: s
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(_.Text, {
          className: o()(eA.disclaimer, !V && eA.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? eS.intl.string(eS.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eM = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eA.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(C.Z, {
        avatar: (0, r.jsx)(_.qEK, {
          src: t.avatarSrc,
          size: _.EFr.SIZE_32,
          "aria-label": t.name,
          status: _.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: o()(eA.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eD = e => {
    let {
      user: t,
      nameplate: n
    } = e, a = (0, w.w$)();
    return (0, r.jsx)("div", {
      className: eA.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eS.intl.string(eS.t.SZeUdX),
      children: (0, r.jsxs)(_.Rny, {
        children: [(0, r.jsx)(eM, {
          user: a.mallow,
          innerClassName: eA.userBlue
        }), (0, r.jsxs)(_.Text, {
          variant: "text-sm/semibold",
          className: eA.namplateRightPanePreviewSectionGroup,
          children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eM, {
          user: a.phibi,
          innerClassName: eA.userPink
        }), (0, r.jsx)("div", {
          className: eA.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(e_.Z, {
            className: eA.nameplatePreview,
            innerClassName: eA.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true
          })
        }), (0, r.jsx)(eM, {
          user: a.locke,
          innerClassName: eA.userPink
        }), (0, r.jsxs)(_.Text, {
          variant: "text-sm/semibold",
          className: eA.namplateRightPanePreviewSectionGroup,
          children: [eS.intl.string(eS.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eM, {
          user: a.boom,
          innerClassName: eA.userGreen
        }), (0, r.jsx)(eM, {
          user: a.cherry,
          innerClassName: eA.userGreen
        })]
      })
    })
  },
  eH = e => {
    let {
      product: t,
      user: n
    } = e, a = G.ZP.canUsePremiumProfileCustomization(n), i = (0, g.cj)([B.Z], () => B.Z.getAllPending()), {
      pendingAvatar: o
    } = i, l = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(i, ["pendingAvatar"]), c = (0, E.SD)({
      userId: n.id,
      image: o
    }), s = t.type === d.Z.AVATAR_DECORATION, [u] = t.items, {
      firstAvatarDecoration: p,
      firstProfileEffect: m
    } = (0, X.Rj)(t), f = null != m;
    return (0, r.jsx)("div", {
      className: (null == u ? true : u.type) === d.Z.AVATAR_DECORATION ? eA.previewsContainerInner : eA.profileEffectPreviewsContainerInner,
      children: (null == u ? true : u.type) === d.Z.NAMEPLATE ? (0, r.jsx)(eD, {
        user: n,
        nameplate: u
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A.Z, eE(ek({}, l), {
          pendingAvatar: c,
          user: n,
          canUsePremiumCustomization: a,
          pendingAvatarDecoration: p,
          pendingProfileEffectId: null == m ? true : m.id,
          disabledInputs: true,
          hideMessageInput: !f,
          hideCustomStatus: true,
          hideBioSection: s,
          hideViewFullProfileButton: true,
          interactive: false
        })), s && (0, r.jsx)(eG, {
          user: n
        })]
      })
    })
  },
  eG = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, O.e5)(eE(ek({}, (0, y.ZP)({
        author: t,
        channelId: "1337",
        content: eS.intl.string(eS.t.d5YwKy)
      })), {
        state: eT.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
      children: (0, r.jsx)(_.Rny, {
        children: (0, r.jsxs)(_.Zbd, {
          className: eA.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(T.Z, {
            className: eA.mockMessage,
            author: (0, j.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eA.mockInput,
            children: [(0, r.jsx)(_.oFk, {
              size: "md",
              color: "currentColor",
              className: eA.mockInputButton
            }), (0, r.jsx)(_.EO4, {
              size: "md",
              color: "currentColor",
              className: eA.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eU = e => {
    let {
      transitionState: t,
      onClose: n,
      product: i,
      category: o,
      returnRef: l,
      analyticsSource: s,
      analyticsLocations: u,
      shouldCheckoutWithOrbs: m,
      tab: f
    } = e, b = (0, g.e7)([M.default], () => M.default.getCurrentUser()), v = (0, ex.f)(i), {
      previewingVariantIndex: h
    } = v, C = (0, g.e7)([F.Z], () => F.Z.purchases), O = (0, V.o)(i, C), y = (0, eb.N)(i, h), j = (0, ev.W)(i, O);
    c()(null != j, "Selected product should not be null");
    let {
      analyticsLocations: T
    } = (0, x.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, en.u9)(j.skuId);
    let w = (0, eP.kc)(o);
    a.useEffect(() => {
      null != b && (0, N.Z)(b.id, b.getAvatarURL(true, 80))
    }, [b]);
    let I = a.useMemo(() => (0, W.jm)(i.type, i.skuId), [i.type, i.skuId]);
    a.useEffect(() => {
      D.default.track(eT.rMx.OPEN_MODAL, {
        type: eT.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: s,
        location_stack: T,
        sku_id: j.skuId,
        product_type: I
      }), j.items.forEach(z.oK)
    }, [s, T, j.skuId, j.items, I]);
    let S = (0, Z.r9)(),
      A = t === _.Dvm.EXITING,
      k = (0, eh.t)(i),
      E = null == k ? true : k.amount;
    if (null == b) return null;
    let R = (0, ej.ZS)(o.skuId);
    return (0, r.jsx)(x.Gt, {
      value: T,
      children: (0, r.jsxs)(_.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eA.modalRoot,
        returnRef: l,
        transitionState: t,
        size: _.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(_.hzk, {
          "data-migration-pending": true,
          className: eA.modalContent,
          children: [(0, r.jsx)(eB, {
            user: b,
            product: i,
            category: o,
            onClose: n,
            previewingVariantIndexProps: v,
            selectedVariantIndex: O,
            shouldCheckoutWithOrbs: m,
            tab: f
          }), (0, r.jsxs)("div", {
            className: j.skuId === p.a.PREMIUM_TIER_2_3_DAY ? eA.fractionalNitroPreviewContainer : j.type === d.Z.AVATAR_DECORATION ? eA.collectiblePreviewsContainerWithChat : eA.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)($.Z, {
              asset: w,
              size: (0, es.ML)(540),
              className: eA.categoryBanner,
              categoryBannerOverride: R
            }), (0, ej.o0)(i.skuId) ? i.skuId === ej.Vt.ORB_PROFILE_BADGE ? S || A ? null : (0, r.jsx)(ed.M, {
              user: b
            }) : i.skuId === p.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.q, {}) : (0, r.jsx)(ep.b, {
              product: i,
              className: eA.externalProductProfilePreview
            }) : (0, r.jsx)(eH, {
              user: b,
              product: null != y ? y : j
            }), (0, r.jsxs)("div", {
              className: eA.pdpControls,
              children: [(0, r.jsx)(ee.n, {
                skuId: j.skuId,
                tab: f
              }), (0, r.jsx)(_.hU, {
                "aria-label": eS.intl.string(eS.t.cpT0Cg),
                onClick: n,
                icon: _.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != E && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(_.mzw, {
            className: eA.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eA.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eA.modalFooterContentContainer,
              children: [(0, r.jsx)(_.Text, {
                variant: "text-sm/semibold",
                className: eA.modalFooterText,
                children: eS.intl.format(eS.t["78ph4e"], {
                  discountOfferAmount: E
                })
              }), (null == k ? true : k.expiresAt) != null && (0, r.jsx)(et.R, {
                endDate: k.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }