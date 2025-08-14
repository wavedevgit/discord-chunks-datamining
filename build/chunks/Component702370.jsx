/** Chunk was on 84691 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eH
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let eZ = e => {
    let {
      item: t,
      user: n,
      isBundleItem: a = false
    } = e, l = i.useRef(null), o = (0, b.Z)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: a ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
      children: (0, r.jsx)(ev.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: a ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(k.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: true
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: eE.nameplatePreviewContainer,
      children: (0, r.jsx)(eh.Z, {
        className: eE.nameplatePreview,
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
    } = e, [a, l] = i.useState(0);
    i.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && l(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, n.id]);
    let o = t.items.length;
    return (0, r.jsx)("div", {
      className: eE.bundlePreviewContainer,
      children: (0, r.jsx)(h.MyZ, {
        activeSlide: String(a),
        children: t.items.map((e, i) => {
          let a = String(i),
            l = null != t.bundledProducts ? t.bundledProducts[i] : true,
            s = "(".concat(i + 1, "/").concat(o, ")");
          return (0, r.jsx)(h.Mi4, {
            id: a,
            children: (0, r.jsxs)("div", {
              className: eE.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                user: n,
                isBundleItem: true
              }), (0, r.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eE.bundleSlideTitle,
                children: [null == l ? true : l.name, " ", s]
              })]
            })
          }, a)
        })
      })
    })
  },
  eA = e => {
    let {
      product: t,
      user: n
    } = e;
    return (0, W.x6)(t) ? (0, r.jsx)(eR, {
      product: t,
      user: n
    }) : (0, ew.o0)(t.skuId) ? (0, r.jsx)(em.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eZ, {
      item: t.items[0],
      user: n
    }) : null
  },
  eL = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(h.Text, {
      variant: "text-sm/normal",
      className: eE.learnMoreLink,
      children: eT.intl.format(eT.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(ey.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: c,
      returnRef: m,
      previewingVariantIndexProps: b,
      selectedVariantIndex: x,
      tab: _
    } = e, {
      analyticsLocations: O
    } = (0, j.ZP)(), C = U.ZP.canUseCollectibles(n), {
      previewingVariantIndex: w
    } = b, y = (0, eg.N)(t, w), I = (0, eb.W)(t, x);
    s()(null != I, "Selected product should not be null");
    let E = (0, Y.L)(t),
      {
        isPurchased: k,
        isPartiallyOwnedBundle: N
      } = (0, Y.L)(I),
      {
        isDisabled: Z,
        disabledReason: B
      } = (0, X.G)(I.skuId),
      D = (0, W.ne)({
        product: I,
        isPartiallyOwnedBundle: N,
        isPurchased: k
      }),
      M = (0, p.e7)([G.Z], () => G.Z.isClaiming === (null == I ? true : I.skuId)),
      F = (0, P.ZP)(),
      V = (0, v.wj)(F),
      $ = (0, W.G1)(I),
      ee = (0, W.ql)(I, ey.tuJ.DEFAULT),
      et = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: en
      } = (0, J.Rj)(null != y ? y : I),
      ec = i.useMemo(() => (0, W.BH)(I, C), [I, C]),
      {
        handleUseNow: eu,
        isApplying: ed
      } = (0, q.W)({
        product: I,
        onSuccess: c
      }),
      em = (0, e_.To)(I),
      {
        enabled: ev
      } = (0, R.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eh = (0, eP.I)(t),
      ex = null != eh,
      {
        checkoutEligiblePrices: ej,
        isOrbExclusive: eZ,
        hasSufficientOrbs: eR
      } = (0, eO.Ip)({
        product: I,
        isPremiumUser: C,
        tab: _,
        hasDiscountOffer: ex
      }),
      eB = i.useCallback(() => (0, S.Z)({
        skuId: I.skuId,
        analyticsLocations: O,
        variantsReturnStyle: f.v.VARIANTS_GROUP,
        onClose: e => e ? c() : (0, eS.dG)()
      }), [O, c, I.skuId]);
    i.useEffect(() => {
      if (null != en) return (0, g.cV)(en), () => (0, g.cV)(true)
    }, [en]);
    let eD = (0, K.G)(I);
    return (0, r.jsxs)("div", {
      className: eE.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eE.titleContainer,
        children: (0, r.jsx)(ei.Z, {
          category: a,
          display: "modal"
        })
      }), (0, r.jsx)(eA, {
        product: null != y ? y : I,
        user: n
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: eE.description,
          children: [(0, r.jsx)(er.Z, {
            product: I,
            isDarkText: !V,
            isOrbExclusive: eZ
          }), (0, r.jsx)(h.X6q, {
            variant: "heading-xl/extrabold",
            className: eE.headingWithItemTypePill,
            children: em
          }), (0, r.jsx)(h.Text, {
            variant: "text-sm/normal",
            children: eD
          }), (0, r.jsx)(eL, {
            skuId: I.skuId
          }), E.isPurchased || E.isPartiallyOwnedBundle ? (0, r.jsx)(Q.U, {
            className: eE.priceTag,
            isPartiallyPurchased: N
          }) : $ ? (0, r.jsx)(h.Text, {
            variant: "text-md/semibold",
            className: eE.priceTag,
            children: eT.intl.string(eT.t.rt69oq)
          }) : ev ? (0, r.jsx)(ef.a, {
            prices: ej,
            product: I,
            isPremiumUser: C,
            discount: ec,
            hasSufficientOrbs: eR,
            isProductDisabled: Z,
            discountOfferAmount: eh
          }) : (0, r.jsxs)("div", {
            className: eE.priceTagContainer,
            children: [(0, r.jsx)(el.Z, {
              product: I,
              discount: ec,
              isPremiumUser: C,
              hideStrikethroughPrice: !C || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eh
            }), C || ex ? null : (0, r.jsx)(eo.Z, {
              product: I
            })]
          })]
        }), (0, r.jsx)(h.Rny, {
          children: (0, r.jsx)(ep.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: eE.variantsSwitch
          })
        }), null !== B && (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: eE.disabledReason,
          children: B
        }), (0, r.jsx)("div", {
          className: eE.buttonsContainer,
          children: (() => {
            if ($ && !C && !et) {
              let e;
              return e = eT.intl.string(eT.t.sEAnVF), (0, r.jsx)(T.Z, {
                subscriptionTier: eI.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: es.v,
                onSubscribeModalClose: () => {
                  (0, es.T)({
                    product: I,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: m,
                    analyticsLocations: O
                  })
                }
              })
            }
            return D ? k ? (0, r.jsx)(h.zxk, {
              variant: "primary",
              onClick: eu,
              loading: ed,
              text: eT.intl.string(eT.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(h.zxk, {
              loading: M,
              loadingStartedLabel: eT.intl.string(eT.t["TYw+9v"]),
              loadingFinishedLabel: eT.intl.string(eT.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(I.skuId), c(), (0, eC.Z)({
                  product: I,
                  analyticsLocations: O,
                  purchaseType: ew.o8.PREMIUM_PURCHASE
                })
              },
              text: eT.intl.string(eT.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: ej.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eS.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, L.qA)({
                        skuId: I.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, z.qg)({
                            variantsReturnStyle: f.v.VARIANTS_GROUP
                          }), c(), (0, eC.Z)({
                            product: I,
                            analyticsLocations: O,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: ew.o8.ORB
                          })
                        },
                        analyticsLocations: O
                      })
                    },
                    i = Z ? eT.intl.string(eT.t.cTdr39) : eT.intl.string(eT.t.zqh7ZG),
                    a = !eR || Z,
                    l = eT.intl.formatToPlainString(eT.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    o = a ? "".concat(l, ", ").concat(i) : l;
                  return (0, r.jsx)(h.ua7, {
                    position: "top",
                    text: i,
                    shouldShow: a,
                    "aria-label": false,
                    children: i => (0, r.jsx)(h.zxk, eN(ek({}, i), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: a,
                      "aria-label": o,
                      text: eT.intl.format(eT.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(A.Z, {
                          className: eE.orbIconAligned,
                          shouldUseThemeColor: a && !t
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let i = !$ && !et && !u.tq && !eZ && D,
                  a = (0, W.x6)(I) ? eT.intl.string(eT.t.V1AWw8) : I.type === d.Z.PROFILE_EFFECT ? eT.intl.string(eT.t.kAeDcH) : I.type === d.Z.NAMEPLATE ? eT.intl.string(eT.t.H3vhqa) : eT.intl.string(eT.t.AQ0Ven);
                return ex ? a = eT.intl.formatToPlainString(eT.t["5U5RBw"], {
                  discountOfferAmount: eh
                }) : ev && (a = eT.intl.formatToPlainString(eT.t["cNSL/v"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)("div", {
                  className: eE.checkoutButtonsRow,
                  children: [(0, r.jsx)(h.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eB,
                    text: a,
                    fullWidth: true
                  }), i && (0, r.jsx)(ea.Z, {
                    primary: n,
                    product: I,
                    onSuccess: c
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(h.Text, {
          className: l()(eE.disclaimer, !V && eE.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !k ? eT.intl.string(eT.t.nKdAlJ) : null
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
      className: eE.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(_.Z, {
        avatar: (0, r.jsx)(h.qEK, {
          src: t.avatarSrc,
          size: h.EFr.SIZE_32,
          "aria-label": t.name,
          status: h.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(eE.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eM = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = (0, I.w$)();
    return (0, r.jsx)("div", {
      className: eE.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eT.intl.string(eT.t.SZeUdX),
      children: (0, r.jsxs)(h.Rny, {
        children: [(0, r.jsx)(eD, {
          user: i.mallow,
          innerClassName: eE.userBlue
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: eE.namplateRightPanePreviewSectionGroup,
          children: [eT.intl.string(eT.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eD, {
          user: i.phibi,
          innerClassName: eE.userPink
        }), (0, r.jsx)("div", {
          className: eE.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eh.Z, {
            className: eE.nameplatePreview,
            innerClassName: eE.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true
          })
        }), (0, r.jsx)(eD, {
          user: i.locke,
          innerClassName: eE.userPink
        }), (0, r.jsxs)(h.Text, {
          variant: "text-sm/semibold",
          className: eE.namplateRightPanePreviewSectionGroup,
          children: [eT.intl.string(eT.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eD, {
          user: i.boom,
          innerClassName: eE.userGreen
        }), (0, r.jsx)(eD, {
          user: i.cherry,
          innerClassName: eE.userGreen
        })]
      })
    })
  },
  eF = e => {
    let {
      product: t,
      user: n
    } = e, i = U.ZP.canUsePremiumProfileCustomization(n), a = (0, p.cj)([B.Z], () => B.Z.getAllPending()), {
      pendingAvatar: l
    } = a, o = function(e, t) {
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
    }(a, ["pendingAvatar"]), s = (0, N.SD)({
      userId: n.id,
      image: l
    }), c = t.type === d.Z.AVATAR_DECORATION, [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: f
    } = (0, J.Rj)(t), v = null != f;
    return (0, r.jsx)("div", {
      className: (null == u ? true : u.type) === d.Z.AVATAR_DECORATION ? eE.previewsContainerInner : eE.profileEffectPreviewsContainerInner,
      children: (null == u ? true : u.type) === d.Z.NAMEPLATE ? (0, r.jsx)(eM, {
        user: n,
        nameplate: u
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(E.Z, eN(ek({}, o), {
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
        })), c && (0, r.jsx)(eU, {
          user: n
        })]
      })
    })
  },
  eU = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, O.e5)(eN(ek({}, (0, C.ZP)({
        author: t,
        channelId: "1337",
        content: eT.intl.string(eT.t.d5YwKy)
      })), {
        state: ey.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eT.intl.string(eT.t["TN+ZvL"]),
      children: (0, r.jsx)(h.Rny, {
        children: (0, r.jsxs)(h.Zbd, {
          className: eE.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(y.Z, {
            className: eE.mockMessage,
            author: (0, w.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: eE.mockInput,
            children: [(0, r.jsx)(h.oFk, {
              size: "md",
              color: "currentColor",
              className: eE.mockInputButton
            }), (0, r.jsx)(h.EO4, {
              size: "md",
              color: "currentColor",
              className: eE.mockInputButton
            })]
          })]
        })
      })
    })
  },
  eH = e => {
    let {
      transitionState: t,
      onClose: n,
      product: a,
      category: l,
      returnRef: o,
      analyticsSource: c,
      analyticsLocations: u,
      shouldCheckoutWithOrbs: f,
      tab: v
    } = e, g = (0, p.e7)([D.default], () => D.default.getCurrentUser()), b = (0, ej.f)(a), {
      previewingVariantIndex: P
    } = b, _ = (0, p.e7)([G.Z], () => G.Z.purchases), O = (0, V.o)(a, _), C = (0, eg.N)(a, P), w = (0, eb.W)(a, O);
    s()(null != w, "Selected product should not be null");
    let {
      analyticsLocations: y
    } = (0, j.ZP)([...u, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, en.u9)(w.skuId);
    let {
      pdpBackground: I,
      logo: S
    } = (0, ex.OR)(l);
    i.useEffect(() => {
      null != g && (0, Z.Z)(g.id, g.getAvatarURL(true, 80))
    }, [g]);
    let T = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      M.default.track(ey.rMx.OPEN_MODAL, {
        type: ey.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: c,
        location_stack: y,
        sku_id: w.skuId,
        product_type: T
      }), w.items.forEach(z.oK)
    }, [c, y, w.skuId, w.items, T]);
    let E = (0, L.r9)(),
      k = t === h.Dvm.EXITING,
      N = (0, eP.t)(a),
      R = null == N ? true : N.amount;
    if (null == g) return null;
    let A = (0, ew.ZS)(l.skuId);
    return (0, r.jsx)(j.Gt, {
      value: y,
      children: (0, r.jsxs)(h.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: eE.modalRoot,
        returnRef: o,
        transitionState: t,
        size: h.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(h.hzk, {
          "data-migration-pending": true,
          className: eE.modalContent,
          children: [(0, r.jsx)(eB, {
            user: g,
            product: a,
            category: l,
            onClose: n,
            previewingVariantIndexProps: b,
            selectedVariantIndex: O,
            shouldCheckoutWithOrbs: f,
            tab: v
          }), (0, r.jsxs)("div", {
            className: w.skuId === m.a.PREMIUM_TIER_2_3_DAY ? eE.fractionalNitroPreviewContainer : w.type === d.Z.AVATAR_DECORATION ? eE.collectiblePreviewsContainerWithChat : eE.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)($.Z, {
              asset: I,
              size: (0, ec.ML)(540),
              className: eE.categoryBanner,
              categoryBannerOverride: A
            }), (0, ew.o0)(a.skuId) ? a.skuId === ew.Vt.ORB_PROFILE_BADGE ? E || k ? null : (0, r.jsx)(ed.M, {
              user: g
            }) : a.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(eu.q, {}) : (0, r.jsx)(em.b, {
              product: a,
              className: eE.externalProductProfilePreview
            }) : (0, r.jsx)(eF, {
              user: g,
              product: null != C ? C : w
            }), (0, r.jsxs)("div", {
              className: eE.profilePreviewHeader,
              children: [(0, r.jsx)("div", {
                className: eE.titleImageContainer,
                children: (0, r.jsx)("img", {
                  className: eE.titleImage,
                  style: null == A ? true : A.pdpLogoStyle,
                  src: S,
                  alt: l.name
                })
              }), (0, r.jsxs)("div", {
                className: eE.headerButtonContainer,
                children: [(0, r.jsx)(ee.n, {
                  skuId: w.skuId,
                  tab: v
                }), (0, r.jsx)(h.hU, {
                  "aria-label": eT.intl.string(eT.t.cpT0Cg),
                  onClick: n,
                  icon: h.Uz9,
                  variant: "overlay-secondary",
                  size: "sm"
                })]
              })]
            })]
          })]
        }), null != R && (0, r.jsxs)(h.mzw, {
          className: eE.modalFooter,
          children: [(0, r.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
            alt: "",
            className: eE.modalFooterBackgroundImg
          }), (0, r.jsxs)("div", {
            className: eE.modalFooterContentContainer,
            children: [(0, r.jsx)(h.Text, {
              variant: "text-sm/semibold",
              className: eE.modalFooterText,
              children: eT.intl.format(eT.t["5KE2fX"], {
                discountOfferAmount: R
              })
            }), (null == N ? true : N.expiresAt) != null && (0, r.jsx)(et.R, {
              endDate: N.expiresAt
            })]
          })]
        })]
      })
    })
  }