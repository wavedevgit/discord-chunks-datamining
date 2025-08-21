/** Chunk was on 2026 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eF
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

function eA(e) {
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

function eN(e, t) {
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
let ek = e => {
    let {
      item: t,
      user: n,
      isBundleItem: l = false
    } = e, a = i.useRef(null), o = (0, h.Z)(a);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: l ? eI.bundleAvatarPreviewContainer : eI.avatarPreviewContainer,
      children: (0, r.jsx)(ev.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: l ? eI.bundlePfxPreviewContainer : eI.pfxPreviewContainer,
      ref: a,
      children: (0, r.jsx)(A.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: a,
      className: eI.nameplatePreviewContainer,
      children: (0, r.jsx)(eb.Z, {
        className: eI.nameplatePreview,
        nameplate: t,
        isHighlighted: o,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eR = e => {
    let {
      product: t,
      user: n
    } = e, [l, a] = i.useState(0);
    i.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && a(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, n.id]);
    let o = t.items.length;
    return (0, r.jsx)("div", {
      className: eI.bundlePreviewContainer,
      children: (0, r.jsx)(b.MyZ, {
        activeSlide: String(l),
        children: t.items.map((e, i) => {
          let l = String(i),
            a = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(o, ")");
          return (0, r.jsx)(b.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: eI.bundlePreviewSlide,
              children: [(0, r.jsx)(ek, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(b.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eI.bundleSlideTitle,
                children: [null == a ? true : a.name, " ", s]
              })]
            })
          }, l)
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
    }) : (0, ey.o0)(t.skuId) ? (0, r.jsx)(em.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(ek, {
      item: t.items[0],
      user: n
    }) : null
  },
  eZ = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(b.Text, {
      variant: "text-sm/normal",
      className: eI.learnMoreLink,
      children: eE.intl.format(eE.t.Q1scdH, {
        helpdeskArticle: U.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      category: l,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: h,
      selectedVariantIndex: x,
      tab: O
    } = e, {
      analyticsLocations: _
    } = (0, j.ZP)(), C = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: y
    } = h, w = (0, eg.N)(t, y), T = (0, eh.W)(t, x);
    s()(null != T, "Selected product should not be null");
    let I = (0, X.L)(t),
      {
        isPurchased: A,
        isPartiallyOwnedBundle: N
      } = (0, X.L)(T),
      {
        isDisabled: k,
        disabledReason: B
      } = (0, Y.G)(T.skuId),
      D = (0, W.ne)({
        product: T,
        isPartiallyOwnedBundle: N,
        isPurchased: A
      }),
      M = (0, p.e7)([z.Z], () => z.Z.isClaiming === (null == T ? true : T.skuId)),
      U = (0, P.ZP)(),
      V = (0, v.wj)(U),
      $ = (0, W.G1)(T),
      ee = (0, W.ql)(T, ew.tuJ.DEFAULT),
      et = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: en
      } = (0, J.Rj)(null != w ? w : T),
      ec = i.useMemo(() => (0, W.BH)(T, C), [T, C]),
      {
        handleUseNow: eu,
        isApplying: ed
      } = (0, K.W)({
        product: T,
        onSuccess: c
      }),
      em = (0, eO.To)(T),
      {
        enabled: ev
      } = (0, R.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eb = (0, eP.I)(t),
      ex = null != eb,
      {
        checkoutEligiblePrices: ej,
        isOrbExclusive: ek,
        hasSufficientOrbs: eR
      } = (0, e_.Ip)({
        product: T,
        isPremiumUser: C,
        tab: O,
        hasDiscountOffer: ex
      }),
      eB = i.useCallback(() => (0, S.Z)({
        skuId: T.skuId,
        analyticsLocations: _,
        variantsReturnStyle: f.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eS.dG)()
      }), [_, c, T.skuId]);
    i.useEffect(() => {
      if (null != en) return (0, g.cV)(en), () => (0, g.cV)(true)
    }, [en]);
    let eD = (0, q.G)(T);
    return (0, r.jsxs)("div", {
      className: eI.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eI.titleContainer,
        children: (0, r.jsx)(ei.Z, {
          category: l,
          display: ei.k.MODAL
        })
      }), (0, r.jsx)(eL, {
        product: null != w ? w : T,
        user: n
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eI.description,
          children: [(0, r.jsx)(er.Z, {
            product: T,
            isDarkText: !V,
            isOrbExclusive: ek
          }), (0, r.jsx)(b.X6q, {
            variant: "heading-xl/extrabold",
            className: eI.headingWithItemTypePill,
            children: em
          }), (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eZ, {
            skuId: T.skuId
          }), I.isPurchased || I.isPartiallyOwnedBundle ? (0, r.jsx)(Q.U, {
            className: eI.priceTag,
            isPartiallyPurchased: N
          }) : $ ? (0, r.jsx)(b.Text, {
            variant: "text-md/semibold",
            className: eI.priceTag,
            children: eE.intl.string(eE.t.rt69oq)
          }) : ev ? (0, r.jsx)(ef.a, {
            prices: ej,
            product: T,
            isPremiumUser: C,
            discount: ec,
            hasSufficientOrbs: eR,
            isProductDisabled: k,
            discountOfferAmount: eb
          }) : (0, r.jsxs)("div", {
            className: eI.priceTagContainer,
            children: [(0, r.jsx)(ea.Z, {
              product: T,
              discount: ec,
              isPremiumUser: C,
              hideStrikethroughPrice: !C || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eb
            }), C || ex ? null : (0, r.jsx)(eo.Z, {
              product: T
            })]
          })]
        }), (0, r.jsx)(b.Rny, {
          children: (0, r.jsx)(ep.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: h,
            className: eI.variantsSwitch
          })
        }), null !== B && (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          className: eI.disabledReason,
          children: B
        }), (0, r.jsx)("div", {
          className: eI.buttonsContainer,
          children: (() => {
            if ($ && !C && !et) {
              let e;
              return e = eE.intl.string(eE.t.sEAnVF), (0, r.jsx)(E.Z, {
                subscriptionTier: eT.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: es.v,
                onSubscribeModalClose: () => {
                  (0, es.T)({
                    product: T,
                    category: l,
                    shouldCheckoutWithOrbs: o,
                    returnRef: m,
                    analyticsLocations: _
                  })
                }
              })
            }
            return D ? A ? (0, r.jsx)(b.zxk, {
              variant: "primary",
              onClick: eu,
              loading: ed,
              text: eE.intl.string(eE.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(b.zxk, {
              loading: M,
              loadingStartedLabel: eE.intl.string(eE.t["TYw+9v"]),
              loadingFinishedLabel: eE.intl.string(eE.t.Pg1UPz),
              onClick: async () => {
                await (0, H.fK)(T.skuId), c(), (0, eC.Z)({
                  product: T,
                  analyticsLocations: _,
                  purchaseType: ey.o8.PREMIUM_PURCHASE
                })
              },
              text: eE.intl.string(eE.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ej.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eS.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, Z.qA)({
                        skuId: T.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, H.qg)({
                            variantsReturnStyle: f.v.VARIANTS_GROUP
                          }), c(), (0, eC.Z)({
                            product: T,
                            analyticsLocations: _,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: ey.o8.ORB
                          })
                        },
                        analyticsLocations: _
                      })
                    },
                    i = k ? eE.intl.string(eE.t.cTdr39) : eE.intl.string(eE.t.zqh7ZG),
                    l = !eR || k,
                    a = eE.intl.formatToPlainString(eE.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = l ? "".concat(a, ", ").concat(i) : a;
                  return (0, r.jsx)(b.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: l,
                    "aria-label": false,
                    children: i => (0, r.jsx)(b.zxk, eN(eA({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: l,
                      "aria-label": o,
                      text: eE.intl.format(eE.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(L.Z, {
                          className: eI.orbIconAligned,
                          shouldUseThemeColor: l && !t
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let i = !$ && !et && !u.tq && !ek && D,
                  l = (0, W.x6)(T) ? eE.intl.string(eE.t.V1AWw8) : T.type === d.Z.PROFILE_EFFECT ? eE.intl.string(eE.t.kAeDcH) : T.type === d.Z.NAMEPLATE ? eE.intl.string(eE.t.H3vhqa) : eE.intl.string(eE.t.AQ0Ven);
                return ex ? l = eE.intl.formatToPlainString(eE.t["5U5RBw"], {
                  discountOfferAmount: eb
                }) : ev && (l = eE.intl.formatToPlainString(eE.t["cNSL/v"], {
                  price: (0, F.T4)(e.amount, e.currency)
                })), (0, r.jsxs)("div", {
                  className: eI.checkoutButtonsRow,
                  children: [(0, r.jsx)(b.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: l,
                    fullWidth: true
                  }), i && (0, r.jsx)(el.Z, {
                    primary: n,
                    product: T,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(b.Text, {
          className: a()(eI.disclaimer, !V && eI.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !A ? eE.intl.string(eE.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eD = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: eI.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(O.Z, {
        avatar: (0, r.jsx)(b.qEK, {
          src: t.avatarSrc,
          size: b.EFr.SIZE_32,
          "aria-label": t.name,
          status: b.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: a()(eI.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eM = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, T.w$)();
    return (0, r.jsx)("div", {
      className: eI.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eE.intl.string(eE.t.SZeUdX),
      children: (0, r.jsxs)(b.Rny, {
        children: [(0, r.jsx)(eD, {
          user: i.mallow,
          innerClassName: eI.userBlue
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eI.namplateRightPanePreviewSectionGroup,
          children: [eE.intl.string(eE.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eD, {
          user: i.phibi,
          innerClassName: eI.userPink
        }), (0, r.jsx)("div", {
          className: eI.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eb.Z, {
            className: eI.nameplatePreview,
            innerClassName: eI.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true
          })
        }), (0, r.jsx)(eD, {
          user: i.locke,
          innerClassName: eI.userPink
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: eI.namplateRightPanePreviewSectionGroup,
          children: [eE.intl.string(eE.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eD, {
          user: i.boom,
          innerClassName: eI.userGreen
        }), (0, r.jsx)(eD, {
          user: i.cherry,
          innerClassName: eI.userGreen
        })]
      })
    })
  },
  eU = e => {
    let {
      product: t,
      user: n
    } = e, i = G.ZP.canUsePremiumProfileCustomization(n), l = (0, p.cj)([B.Z], () => B.Z.getAllPending()), {
      pendingAvatar: a
    } = l, o = function(e, t) {
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
    }(l, ["pendingAvatar"]), s = (0, N.SD)({
      userId: n.id,
      image: a
    }), c = t.type === d.Z.AVATAR_DECORATION, [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: f
    } = (0, J.Rj)(t), v = null != f;
    return (0, r.jsx)("div", {
      className: (null == u ? true : u.type) === d.Z.AVATAR_DECORATION ? eI.previewsContainerInner : eI.profileEffectPreviewsContainerInner,
      children: (null == u ? true : u.type) === d.Z.NAMEPLATE ? (0, r.jsx)(eM, {
        user: n,
        nameplate: u
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I.Z, eN(eA({}, o), {
          pendingAvatar: s,
          user: n,
          canUsePremiumCustomization: i,
          pendingAvatarDecoration: m,
          pendingProfileEffectId: null == f ? true : f.id,
          disabledInputs: true,
          hideMessageInput: !v,
          hideCustomStatus: true,
          hideBioSection: c,
          hideViewFullProfileButton: true,
          interactive: false
        })), c && (0, r.jsx)(eG, {
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
      return (0, _.e5)(eN(eA({}, (0, C.ZP)({
        author: t,
        channelId: "1337",
        content: eE.intl.string(eE.t.d5YwKy)
      })), {
        state: ew.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eE.intl.string(eE.t["TN+ZvL"]),
      children: (0, r.jsx)(b.Rny, {
        children: (0, r.jsxs)(b.Zbd, {
          className: eI.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(w.Z, {
            className: eI.mockMessage,
            author: (0, y.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eI.mockInput,
            children: [(0, r.jsx)(b.oFk, {
              size: "md",
              color: "currentColor",
              className: eI.mockInputButton
            }), (0, r.jsx)(b.EO4, {
              size: "md",
              color: "currentColor",
              className: eI.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eF = e => {
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
    } = e, g = (0, p.e7)([D.default], () => D.default.getCurrentUser()), h = (0, ej.f)(l), {
      previewingVariantIndex: P
    } = h, O = (0, p.e7)([z.Z], () => z.Z.purchases), _ = (0, V.o)(l, O), C = (0, eg.N)(l, P), y = (0, eh.W)(l, _);
    s()(null != y, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, j.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, en.u9)(y.skuId);
    let T = (0, ex.kc)(a);
    i.useEffect(() => {
      null != g && (0, k.Z)(g.id, g.getAvatarURL(true, 80))
    }, [g]);
    let S = i.useMemo(() => (0, W.jm)(l.type, l.skuId), [l.type, l.skuId]);
    i.useEffect(() => {
      M.default.track(ew.rMx.OPEN_MODAL, {
        type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: w,
        sku_id: y.skuId,
        product_type: S
      }), y.items.forEach(H.oK)
    }, [c, w, y.skuId, y.items, S]);
    let E = (0, Z.r9)(),
      I = t === b.Dvm.EXITING,
      A = (0, eP.t)(l),
      N = null == A ? true : A.amount;
    if (null == g) return null;
    let R = (0, ey.ZS)(a.skuId);
    return (0, r.jsx)(j.Gt, {
      value: w,
      children: (0, r.jsxs)(b.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eI.modalRoot,
        returnRef: o,
        transitionState: t,
        size: b.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(b.hzk, {
          "data-migration-pending": true,
          className: eI.modalContent,
          children: [(0, r.jsx)(eB, {
            user: g,
            product: l,
            category: a,
            onClose: n,
            previewingVariantIndexProps: h,
            selectedVariantIndex: _,
            shouldCheckoutWithOrbs: f,
            tab: v
          }), (0, r.jsxs)("div", {
            className: y.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eI.fractionalNitroPreviewContainer : y.type === d.Z.AVATAR_DECORATION ? eI.collectiblePreviewsContainerWithChat : eI.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)($.Z, {
              asset: T,
              size: (0, ec.ML)(540),
              className: eI.categoryBanner,
              categoryBannerOverride: R
            }), (0, ey.o0)(l.skuId) ? l.skuId === ey.Vt.ORB_PROFILE_BADGE ? E || I ? null : (0, r.jsx)(ed.M, {
              user: g
            }) : l.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.q, {}) : (0, r.jsx)(em.b, {
              product: l,
              className: eI.externalProductProfilePreview
            }) : (0, r.jsx)(eU, {
              user: g,
              product: null != C ? C : y
            }), (0, r.jsxs)("div", {
              className: eI.pdpControls,
              children: [(0, r.jsx)(ee.n, {
                skuId: y.skuId,
                tab: v
              }), (0, r.jsx)(b.hU, {
                "aria-label": eE.intl.string(eE.t.cpT0Cg),
                onClick: n,
                icon: b.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != N && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(b.mzw, {
            "data-migration-pending": true,
            className: eI.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: eI.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: eI.modalFooterContentContainer,
              children: [(0, r.jsx)(b.Text, {
                variant: "text-sm/semibold",
                className: eI.modalFooterText,
                children: eE.intl.format(eE.t["78ph4e"], {
                  discountOfferAmount: N
                })
              }), (null == A ? true : A.expiresAt) != null && (0, r.jsx)(et.R, {
                endDate: A.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }