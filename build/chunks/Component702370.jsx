/** Chunk was on 32160 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eU
}), require("./388685.js"), require("./314940.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function eN(e) {
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
let eA = e => {
    let {
      item: t,
      user: n,
      isBundleItem: i = false
    } = e, o = a.useRef(null), c = (0, b.Z)(o);
    return (0, l.EQ)(t.type).with(u.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: i ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(ef.R, {
        user: n,
        item: t
      })
    })).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: i ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: o,
      children: (0, r.jsx)(N.Z, {
        profileEffectId: t.id,
        isHovering: c,
        removeSetHeight: true
      })
    })).with(u.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: o,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(eg.Z, {
        className: ek.nameplatePreview,
        nameplate: t,
        isHighlighted: c,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large"
      })
    })).otherwise(() => null)
  },
  eZ = e => {
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
    let c = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(g.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            o = null != t.bundledProducts ? t.bundledProducts[a] : true,
            s = "(".concat(a + 1, "/").concat(c, ")");
          return (0, r.jsx)(g.Mi4, {
            id: i,
            children: (0, r.jsxs)("div", {
              className: ek.bundlePreviewSlide,
              children: [(0, r.jsx)(eA, {
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
          }, i)
        })
      })
    })
  },
  eR = e => {
    let {
      product: t,
      user: n
    } = e;
    return (0, W.x6)(t) ? (0, r.jsx)(eZ, {
      product: t,
      user: n
    }) : (0, eO.o0)(t.skuId) ? (0, r.jsx)(em.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eA, {
      item: t.items[0],
      user: n
    }) : null
  },
  eL = e => {
    let {
      skuId: t
    } = e;
    return t === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(g.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: eS.intl.format(eS.t.Q1scdH, {
        helpdeskArticle: F.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eM = e => {
    let {
      product: t,
      user: n,
      category: i,
      shouldCheckoutWithOrbs: c,
      onClose: l,
      returnRef: m,
      previewingVariantIndexProps: b,
      selectedVariantIndex: x,
      tab: P
    } = e, {
      analyticsLocations: y
    } = (0, C.ZP)(), j = H.ZP.canUseCollectibles(n), {
      previewingVariantIndex: O
    } = b, w = (0, eh.N)(t, O), I = (0, eb.W)(t, x);
    s()(null != I, "Selected product should not be null");
    let k = (0, X.L)(t),
      {
        isPurchased: N,
        isPartiallyOwnedBundle: E
      } = (0, X.L)(I),
      {
        isDisabled: A,
        disabledReason: M
      } = (0, Y.G)(I.skuId),
      B = (0, W.ne)({
        product: I,
        isPartiallyOwnedBundle: E,
        isPurchased: N
      }),
      D = (0, _.e7)([G.Z], () => G.Z.isClaiming === (null == I ? true : I.skuId)),
      F = (0, v.ZP)(),
      V = (0, f.wj)(F),
      $ = (0, W.G1)(I),
      ee = (0, W.ql)(I, ew.tuJ.DEFAULT),
      et = (null == ee ? true : ee.amount) === 0,
      {
        firstAvatarDecoration: en
      } = (0, J.Rj)(null != w ? w : I),
      el = a.useMemo(() => (0, W.BH)(I, j), [I, j]),
      {
        handleUseNow: ed,
        isApplying: eu
      } = (0, q.W)({
        product: I,
        onSuccess: l
      }),
      em = (0, eP.To)(I),
      {
        enabled: ef
      } = (0, Z.WX)({
        location: "collectibles_shop_product_details_modal"
      }),
      eg = (0, ev.I)(t),
      ex = null != eg,
      {
        checkoutEligiblePrices: eC,
        isOrbExclusive: eA,
        hasSufficientOrbs: eZ
      } = (0, ey.Ip)({
        product: I,
        isPremiumUser: j,
        tab: P,
        hasDiscountOffer: ex
      }),
      eM = a.useCallback(() => (0, T.Z)({
        skuId: I.skuId,
        analyticsLocations: y,
        variantsReturnStyle: p.v.VARIANTS_GROUP,
        onClose: e => e ? l() : (0, eT.dG)()
      }), [y, l, I.skuId]);
    a.useEffect(() => {
      if (null != en) return (0, h.cV)(en), () => (0, h.cV)(true)
    }, [en]);
    let eB = (0, K.G)(I);
    return (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: i,
          display: "modal"
        })
      }), (0, r.jsx)(eR, {
        product: null != w ? w : I,
        user: n
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(er.Z, {
            product: I,
            isDarkText: !V,
            isOrbExclusive: eA
          }), (0, r.jsx)(g.X6q, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: em
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: eB
          }), (0, r.jsx)(eL, {
            skuId: I.skuId
          }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, r.jsx)(Q.U, {
            className: ek.priceTag,
            isPartiallyPurchased: E
          }) : $ ? (0, r.jsx)(g.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: eS.intl.string(eS.t.rt69oq)
          }) : ef ? (0, r.jsx)(ep.a, {
            prices: eC,
            product: I,
            isPremiumUser: j,
            discount: el,
            hasSufficientOrbs: eZ,
            isProductDisabled: A,
            discountOfferAmount: eg
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(eo.Z, {
              product: I,
              discount: el,
              isPremiumUser: j,
              hideStrikethroughPrice: !j || ex,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eg
            }), j || ex ? null : (0, r.jsx)(ec.Z, {
              product: I
            })]
          })]
        }), (0, r.jsx)(g.Rny, {
          children: (0, r.jsx)(e_.P, {
            selectedVariantIndex: x,
            variantGroupProduct: t,
            previewingVariantIndexProps: b,
            className: ek.variantsSwitch
          })
        }), null !== M && (0, r.jsx)(g.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: M
        }), (0, r.jsx)("div", {
          className: ek.buttonsContainer,
          children: (() => {
            if ($ && !j && !et) {
              let e;
              return e = eS.intl.string(eS.t.sEAnVF), (0, r.jsx)(S.Z, {
                subscriptionTier: eI.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: es.v,
                onSubscribeModalClose: () => {
                  (0, es.T)({
                    product: I,
                    category: i,
                    shouldCheckoutWithOrbs: c,
                    returnRef: m,
                    analyticsLocations: y
                  })
                }
              })
            }
            return B ? N ? (0, r.jsx)(g.zxk, {
              variant: "primary",
              onClick: ed,
              loading: eu,
              text: eS.intl.string(eS.t.MAS7uL),
              fullWidth: true
            }) : $ ? (0, r.jsx)(g.zxk, {
              loading: D,
              loadingStartedLabel: eS.intl.string(eS.t["TYw+9v"]),
              loadingFinishedLabel: eS.intl.string(eS.t.Pg1UPz),
              onClick: async () => {
                await (0, z.fK)(I.skuId), l(), (0, ej.Z)({
                  product: I,
                  analyticsLocations: y,
                  purchaseType: eO.o8.PREMIUM_PURCHASE
                })
              },
              text: eS.intl.string(eS.t.zp6caG),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eC.map((e, t) => {
                let n = 0 === t;
                if (e.currency === eT.pK.DISCORD_ORB) return ((e, t) => {
                  let n = () => {
                      (0, L.qA)({
                        skuId: I.skuId,
                        onCheckoutSuccess: e => {
                          var t;
                          let {
                            entitlements: n
                          } = e;
                          (0, z.qg)({
                            variantsReturnStyle: p.v.VARIANTS_GROUP
                          }), l(), (0, ej.Z)({
                            product: I,
                            analyticsLocations: y,
                            itemConsumed: null == (t = n[0]) ? true : t.consumed,
                            purchaseType: eO.o8.ORB
                          })
                        },
                        analyticsLocations: y
                      })
                    },
                    a = A ? eS.intl.string(eS.t.cTdr39) : eS.intl.string(eS.t.zqh7ZG),
                    i = !eZ || A,
                    o = eS.intl.formatToPlainString(eS.t["fNG/09"], {
                      orbPrice: e.amount
                    }),
                    c = i ? "".concat(o, ", ").concat(a) : o;
                  return (0, r.jsx)(g.ua7, {
                    position: "top",
                    text: a,
                    shouldShow: i,
                    "aria-label": false,
                    children: a => (0, r.jsx)(g.zxk, eE(eN({}, a), {
                      variant: t ? "primary" : "secondary",
                      onClick: n,
                      disabled: i,
                      "aria-label": c,
                      text: eS.intl.format(eS.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(R.Z, {
                          className: ek.orbIconAligned,
                          shouldUseThemeColor: i && !t
                        })
                      }),
                      fullWidth: true
                    }))
                  })
                })(e, n);
                let a = !$ && !et && !d.tq && !eA && B,
                  i = (0, W.x6)(I) ? eS.intl.string(eS.t.V1AWw8) : I.type === u.Z.PROFILE_EFFECT ? eS.intl.string(eS.t.kAeDcH) : I.type === u.Z.NAMEPLATE ? eS.intl.string(eS.t.H3vhqa) : eS.intl.string(eS.t.AQ0Ven);
                return ex ? i = eS.intl.formatToPlainString(eS.t["5U5RBw"], {
                  discountOfferAmount: eg
                }) : ef && (i = eS.intl.formatToPlainString(eS.t["cNSL/v"], {
                  price: (0, U.T4)(e.amount, e.currency)
                })), (0, r.jsxs)("div", {
                  className: ek.checkoutButtonsRow,
                  children: [(0, r.jsx)(g.zxk, {
                    variant: n ? "primary" : "secondary",
                    onClick: eM,
                    text: i,
                    fullWidth: true
                  }), a && (0, r.jsx)(ei.Z, {
                    primary: n,
                    product: I,
                    onSuccess: l
                  })]
                })
              })
            }) : null
          })()
        }), (0, r.jsx)(g.Text, {
          className: o()(ek.disclaimer, !V && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: $ && !N ? eS.intl.string(eS.t.nKdAlJ) : null
        })]
      })]
    })
  },
  eB = e => {
    let {
      user: t,
      innerClassName: n
    } = e;
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(g.qEK, {
          src: t.avatarSrc,
          size: g.EFr.SIZE_32,
          "aria-label": t.name,
          status: g.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: o()(ek.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eD = e => {
    let {
      user: t,
      nameplate: n
    } = e, a = (0, I.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eS.intl.string(eS.t.SZeUdX),
      children: (0, r.jsxs)(g.Rny, {
        children: [(0, r.jsx)(eB, {
          user: a.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.namplateRightPanePreviewSectionGroup,
          children: [eS.intl.string(eS.t["yzW/fX"]), " - 3"]
        }), (0, r.jsx)(eB, {
          user: a.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(eg.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true
          })
        }), (0, r.jsx)(eB, {
          user: a.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(g.Text, {
          variant: "text-sm/semibold",
          className: ek.namplateRightPanePreviewSectionGroup,
          children: [eS.intl.string(eS.t["NG43//"]), " - 12"]
        }), (0, r.jsx)(eB, {
          user: a.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eB, {
          user: a.cherry,
          innerClassName: ek.userGreen
        })]
      })
    })
  },
  eF = e => {
    let {
      product: t,
      user: n
    } = e, a = H.ZP.canUsePremiumProfileCustomization(n), i = (0, _.cj)([M.Z], () => M.Z.getAllPending()), {
      pendingAvatar: o
    } = i, c = function(e, t) {
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
    }(i, ["pendingAvatar"]), s = (0, E.SD)({
      userId: n.id,
      image: o
    }), l = t.type === u.Z.AVATAR_DECORATION, [d] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: p
    } = (0, J.Rj)(t), f = null != p;
    return (0, r.jsx)("div", {
      className: (null == d ? true : d.type) === u.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: (null == d ? true : d.type) === u.Z.NAMEPLATE ? (0, r.jsx)(eD, {
        user: n,
        nameplate: d
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k.Z, eE(eN({}, c), {
          pendingAvatar: s,
          user: n,
          canUsePremiumCustomization: a,
          pendingAvatarDecoration: m,
          pendingProfileEffectId: null == p ? true : p.id,
          disabledInputs: true,
          hideMessageInput: !f,
          hideCustomStatus: true,
          hideBioSection: l,
          hideViewFullProfileButton: true,
          interactive: false
        })), l && (0, r.jsx)(eH, {
          user: n
        })]
      })
    })
  },
  eH = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, y.e5)(eE(eN({}, (0, j.ZP)({
        author: t,
        channelId: "1337",
        content: eS.intl.string(eS.t.d5YwKy)
      })), {
        state: ew.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eS.intl.string(eS.t["TN+ZvL"]),
      children: (0, r.jsx)(g.Rny, {
        children: (0, r.jsxs)(g.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(w.Z, {
            className: ek.mockMessage,
            author: (0, O.ZH)(n),
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
  eU = e => {
    let {
      transitionState: t,
      onClose: n,
      product: i,
      category: o,
      returnRef: c,
      analyticsSource: l,
      analyticsLocations: d,
      shouldCheckoutWithOrbs: p,
      tab: f
    } = e, h = (0, _.e7)([B.default], () => B.default.getCurrentUser()), b = (0, eC.f)(i), {
      previewingVariantIndex: v
    } = b, P = (0, _.e7)([G.Z], () => G.Z.purchases), y = (0, V.o)(i, P), j = (0, eh.N)(i, v), O = (0, eb.W)(i, y);
    s()(null != O, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, C.ZP)([...d, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, en.u9)(O.skuId);
    let {
      pdpBackground: I,
      logo: T
    } = (0, ex.OR)(o);
    a.useEffect(() => {
      null != h && (0, A.Z)(h.id, h.getAvatarURL(true, 80))
    }, [h]);
    let S = a.useMemo(() => (0, W.jm)(i.type, i.skuId), [i.type, i.skuId]);
    a.useEffect(() => {
      D.default.track(ew.rMx.OPEN_MODAL, {
        type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: l,
        location_stack: w,
        sku_id: O.skuId,
        product_type: S
      }), O.items.forEach(z.oK)
    }, [l, w, O.skuId, O.items, S]);
    let k = (0, L.r9)(),
      N = t === g.Dvm.EXITING,
      E = (0, ev.t)(i),
      Z = null == E ? true : E.amount;
    if (null == h) return null;
    let R = (0, eO.ZS)(o.skuId);
    return (0, r.jsx)(C.Gt, {
      value: w,
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
            user: h,
            product: i,
            category: o,
            onClose: n,
            previewingVariantIndexProps: b,
            selectedVariantIndex: y,
            shouldCheckoutWithOrbs: p,
            tab: f
          }), (0, r.jsxs)("div", {
            className: O.skuId === m.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : O.type === u.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)($.Z, {
              asset: I,
              size: (0, el.ML)(540),
              className: ek.categoryBanner,
              categoryBannerOverride: R
            }), (0, eO.o0)(i.skuId) ? i.skuId === eO.Vt.ORB_PROFILE_BADGE ? k || N ? null : (0, r.jsx)(eu.M, {
              user: h
            }) : i.skuId === m.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(em.b, {
              product: i,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eF, {
              user: h,
              product: null != j ? j : O
            }), (0, r.jsxs)("div", {
              className: ek.profilePreviewHeader,
              children: [(0, r.jsx)("div", {
                className: ek.titleImageContainer,
                children: (0, r.jsx)("img", {
                  className: ek.titleImage,
                  style: null == R ? true : R.pdpLogoStyle,
                  src: T,
                  alt: o.name
                })
              }), (0, r.jsxs)("div", {
                className: ek.headerButtonContainer,
                children: [(0, r.jsx)(ee.n, {
                  skuId: O.skuId,
                  tab: f
                }), (0, r.jsx)(g.hU, {
                  "aria-label": eS.intl.string(eS.t.cpT0Cg),
                  onClick: n,
                  icon: g.Uz9,
                  variant: "overlay-secondary",
                  size: "sm"
                })]
              })]
            })]
          })]
        }), null != Z && (0, r.jsxs)(g.mzw, {
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
              children: eS.intl.format(eS.t["5KE2fX"], {
                discountOfferAmount: Z
              })
            }), (null == E ? true : E.expiresAt) != null && (0, r.jsx)(et.R, {
              endDate: E.expiresAt
            })]
          })]
        })]
      })
    })
  }