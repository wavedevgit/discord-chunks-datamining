/** Chunk was on 8087 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ez
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk314794 = require("./314794.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk566697 = require("./566697.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk484459 = require("./484459.js"),
  Chunk706454 = require("./706454.js"),
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
  Chunk83479 = require("./83479.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk328456 = require("./328456.js"),
  Chunk27123 = require("./27123.js"),
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
  Chunk17137 = require("./17137.jsx"),
  Chunk38914 = require("./38914.jsx"),
  Chunk259673 = require("./259673.jsx"),
  Chunk749068 = require("./749068.jsx"),
  Chunk406667 = require("./406667.jsx"),
  Chunk508925 = require("./508925.jsx"),
  Chunk953405 = require("./953405.jsx"),
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
  Chunk260321 = require("./260321.js");

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

function eL(e, t) {
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
      product: n,
      user: a
    } = e, l = i.useRef(null), o = (0, W.x6)(n), {
      firstAvatarDecoration: c
    } = (0, Y.Rj)(n);
    return t.type === s.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: o ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
      children: (0, r.jsx)(ex.R, {
        user: a,
        item: t,
        isHighlighted: true
      })
    }) : t.type === s.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: o ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(A.Z, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === s.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: l,
      className: e_.nameplatePreviewContainer,
      children: (0, r.jsx)(y.Z, {
        className: e_.nameplatePreview,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: c,
        isHighlighted: true
      })
    }) : null
  },
  eB = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: e_.bundlePreviewContainer,
      children: (0, r.jsx)(b.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            c = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(b.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: e_.bundlePreviewSlide,
              children: [(0, r.jsx)(eZ, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(b.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: e_.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", c]
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
    return (0, W.x6)(t) ? (0, r.jsx)(eB, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eE.o0)(t.skuId) ? (0, r.jsx)(eb.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eZ, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eU = e => {
    let {
      skuId: t
    } = e;
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(b.Text, {
      variant: "text-sm/normal",
      className: e_.learnMoreLink,
      children: eR.intl.format(eR.t.Q1scdE, {
        helpdeskArticle: M.Z.getArticleURL(eN.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eM = e => {
    let {
      product: t,
      user: n,
      category: a,
      shouldCheckoutWithOrbs: o,
      onClose: u,
      returnRef: h,
      previewingVariantIndexProps: x,
      selectedVariantIndex: P,
      activeBundleSlide: j,
      rentalDuration: O
    } = e, {
      analyticsLocations: C
    } = (0, g.ZP)(), I = (0, m.e7)([k.default], () => k.default.locale), T = F.ZP.canUseCollectibles(n), {
      previewingVariantIndex: y,
      handleEntering: S,
      handleLeaving: A
    } = x, R = (0, eg.N)(t, y), _ = (0, eP.W)(t, P);
    c()(null != _, "Selected product should not be null");
    let B = (0, J.L)(t),
      {
        isPurchased: D,
        isPartiallyOwnedBundle: U,
        isRented: M
      } = (0, J.L)(_),
      {
        isDisabled: z,
        disabledReason: Q
      } = (0, K.G)(_.skuId),
      $ = (0, W.ne)({
        product: _,
        isPartiallyOwnedBundle: U,
        isPurchased: D
      }),
      et = null != O,
      en = (0, m.e7)([V.Z], () => V.Z.isClaiming === (null == _ ? true : _.skuId)),
      er = (0, v.ZP)(),
      ed = (0, p.wj)(er),
      em = (0, W.G1)(_),
      eb = (0, W.ql)(_, eN.tuJ.DEFAULT),
      eh = (null == eb ? true : eb.amount) === 0,
      {
        firstAvatarDecoration: ex
      } = (0, Y.Rj)(null != R ? R : _),
      eO = i.useMemo(() => (0, W.BH)(_, T), [_, T]),
      eI = (0, eT.To)(_),
      ek = (0, eC.J)(_),
      {
        enabled: eL
      } = (0, L.W)({
        location: "collectibles_shop_product_details_modal"
      }),
      eZ = (0, q.G)(_, false, O),
      eB = (0, ej.Iw)(t),
      eM = null != eB,
      {
        checkoutEligiblePrices: eF,
        isOrbExclusive: eG,
        hasSufficientOrbs: eH
      } = (0, ey.Ip)({
        product: _,
        isPremiumUser: T,
        hasDiscountOffer: eM,
        isRental: null != O
      }),
      eV = i.useCallback(() => (0, w.Z)({
        skuId: _.skuId,
        analyticsLocations: C,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eA.dG)()
      }), [C, u, _.skuId]);
    return i.useEffect(() => {
      if (null != ex) return (0, N.PO)(ex), () => (0, N.PO)(true)
    }, [ex]), (0, r.jsxs)("div", {
      className: e_.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: e_.titleContainer,
        children: (0, r.jsx)(ea.Z, {
          category: a
        })
      }), (0, r.jsx)(eD, {
        product: null != R ? R : _,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: e_.description,
          children: [(0, r.jsx)(ei.Z, {
            product: _,
            isDarkText: !ed,
            isOrbExclusive: eG,
            rentalDuration: O
          }), (0, r.jsx)(b.Heading, {
            variant: "heading-xl/extrabold",
            className: e_.headingWithItemTypePill,
            children: eI
          }), (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: eZ
          }), (0, r.jsx)(eU, {
            skuId: _.skuId
          }), B.isPurchased || B.isPartiallyOwnedBundle ? (0, r.jsx)(ee.U, {
            className: e_.priceTag,
            isPartiallyPurchased: U
          }) : em ? (0, r.jsx)(b.Text, {
            variant: "text-md/semibold",
            className: e_.priceTag,
            children: eR.intl.string(eR.t.rt69oo)
          }) : eL ? (0, r.jsx)(ev.a, {
            prices: eF,
            product: _,
            isPremiumUser: T,
            discount: eO,
            hasSufficientOrbs: eH,
            isProductDisabled: z,
            discountOfferAmount: eB
          }) : (0, r.jsxs)("div", {
            className: e_.priceTagContainer,
            children: [(0, r.jsx)(eo.Z, {
              product: _,
              discount: eO,
              isPremiumUser: T,
              hideStrikethroughPrice: !T || eM,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eB
            }), T || eM ? null : (0, r.jsx)(ec.Z, {
              product: _
            })]
          })]
        }), (0, X.ox)(t) && (0, r.jsx)(b.Rny, {
          children: (0, r.jsxs)("div", {
            className: e_.variantsContainer,
            children: [(0, r.jsx)(ep.Z, {
              skuId: t.skuId,
              onVariantEnter: S,
              onVariantExit: A
            }), (0, r.jsx)(ef.Z, {
              skuId: t.skuId,
              overrideVariantIndex: y
            })]
          })
        }), null !== Q && (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          className: e_.disabledReason,
          children: Q
        }), (0, r.jsx)(b.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (em && !T && !eh) {
              let e;
              return e = eR.intl.string(eR.t.sEAnVH), (0, r.jsx)(E.Z, {
                subscriptionTier: eS.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: es.v,
                onSubscribeModalClose: () => {
                  (0, es.T)({
                    product: _,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: h,
                    analyticsLocations: C
                  })
                }
              })
            }
            if (!$) return ek ? (0, r.jsx)(el.Z, {
              primary: true,
              product: _,
              onSuccess: u,
              fullWidth: true
            }) : null;
            if (et) {
              if (D) return (0, r.jsx)(eu.Z, {
                product: _,
                onSuccess: u
              })
            } else if (D && !M) return ek ? (0, r.jsxs)(b.ButtonGroup, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(eu.Z, {
                product: _,
                onSuccess: u
              }), (0, r.jsx)(el.Z, {
                primary: true,
                product: _,
                onSuccess: u
              })]
            }) : (0, r.jsx)(eu.Z, {
              product: _,
              onSuccess: u
            });
            return em ? (0, r.jsx)(b.Button, {
              loading: en,
              loadingStartedLabel: eR.intl.string(eR.t["TYw+9s"]),
              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UP5),
              onClick: async () => {
                await (0, H.fK)(_.skuId), u(), (0, ew.Z)({
                  product: _,
                  analyticsLocations: C,
                  purchaseType: eE.o8.PREMIUM_PURCHASE
                })
              },
              text: eR.intl.string(eR.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eF.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eA.pK.DISCORD_ORB) {
                  if (null != O) return (e => {
                    let t = z ? eR.intl.string(eR.t.cTdr3x) : eR.intl.string(eR.t.zqh7ZM),
                      n = !eH || z,
                      i = eR.intl.formatToPlainString(eR.t.DlNs2T, {
                        orbPrice: eE.As
                      }),
                      a = n ? "".concat(i, ", ").concat(t) : i,
                      o = new Date,
                      c = null == O ? null : o.setDate(o.getDate() + O),
                      s = null != c ? new Date(c).toLocaleDateString(I, {
                        minute: "numeric",
                        hour: "numeric",
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }) : null;
                    return (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(f.u, {
                        position: "top",
                        text: t,
                        shouldShow: n,
                        "aria-label": false,
                        children: (0, r.jsx)(b.Button, {
                          variant: e ? "primary" : "secondary",
                          onClick: () => {
                            (0, Z.qA)({
                              skuId: _.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, H.qg)({
                                  variantsReturnStyle: d.v.VARIANTS_GROUP
                                }), u();
                                let i = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(I, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, ew.Z)({
                                  product: _,
                                  analyticsLocations: C,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eE.o8.ORB,
                                  rentalDuration: O,
                                  rentalExpiresAt: i
                                })
                              },
                              analyticsLocations: C,
                              rentalDuration: O
                            })
                          },
                          disabled: n,
                          "aria-label": a,
                          text: eR.intl.format(eR.t["4NKuqc"], {
                            orbPrice: eE.As,
                            orbIconHook: () => (0, r.jsx)(b.aQr, {
                              className: e_.orbIconAligned,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != s && (0, r.jsx)(b.Text, {
                        variant: "text-xs/normal",
                        className: l()(e_.disclaimer, !ed && e_.disclaimerLight),
                        children: eR.intl.format(eR.t.pLAiJ4, {
                          date: s
                        })
                      })]
                    })
                  })(i);
                  let t = z ? eR.intl.string(eR.t.cTdr3x) : eR.intl.string(eR.t.zqh7ZM),
                    n = !eH || z,
                    a = eR.intl.formatToPlainString(eR.t["fNG/05"], {
                      orbPrice: e.amount
                    }),
                    o = n ? "".concat(a, ", ").concat(t) : a;
                  return (0, r.jsx)(f.u, {
                    position: "top",
                    text: t,
                    shouldShow: n,
                    "aria-label": false,
                    children: (0, r.jsx)(b.Button, {
                      variant: i ? "primary" : "secondary",
                      onClick: () => {
                        (0, Z.qA)({
                          skuId: _.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, H.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, ew.Z)({
                              product: _,
                              analyticsLocations: C,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eE.o8.ORB
                            })
                          },
                          analyticsLocations: C
                        })
                      },
                      disabled: n,
                      "aria-label": o,
                      text: eR.intl.format(eR.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(b.aQr, {
                          className: e_.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, W.x6)(_) ? eR.intl.string(eR.t.V1AWw0) : _.type === s.Z.PROFILE_EFFECT ? eR.intl.string(eR.t.kAeDcK) : _.type === s.Z.NAMEPLATE ? eR.intl.string(eR.t.H3vhqU) : eR.intl.string(eR.t.AQ0Veg), eM ? n = eR.intl.formatToPlainString(eR.t["5U5RB5"], {
                  discountOfferAmount: eB
                }) : eL && (n = eR.intl.formatToPlainString(eR.t["cNSL/j"], {
                  price: (0, G.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(b.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(b.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eV,
                    text: n,
                    fullWidth: true
                  }), ek && (0, r.jsx)(el.Z, {
                    primary: i,
                    product: _,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(b.Text, {
          className: l()(e_.disclaimer, !ed && e_.disclaimerLight),
          variant: "text-xxs/normal",
          children: em && !D ? eR.intl.string(eR.t.nKdAlO) : null
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
      className: e_.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(b.qEK, {
          src: t.avatarSrc,
          size: b.EFr.SIZE_32,
          "aria-label": t.name,
          status: b.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(e_.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eG = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, a = (0, T.w$)();
    return (0, r.jsx)("div", {
      className: e_.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": eR.intl.string(eR.t.SZeUdR),
      children: (0, r.jsxs)(b.Rny, {
        children: [(0, r.jsx)(eF, {
          user: a.mallow,
          innerClassName: e_.userBlue
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: e_.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eF, {
          user: a.phibi,
          innerClassName: e_.userPink
        }), (0, r.jsx)("div", {
          className: e_.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(y.Z, {
            className: e_.nameplatePreview,
            innerClassName: e_.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eF, {
          user: a.locke,
          innerClassName: e_.userPink
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: e_.nameplateRightPanePreviewSectionGroup,
          children: [eR.intl.string(eR.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eF, {
          user: a.boom,
          innerClassName: e_.userGreen
        }), (0, r.jsx)(eF, {
          user: a.cherry,
          innerClassName: e_.userGreen
        })]
      })
    })
  },
  eH = e => {
    let {
      product: t,
      user: n,
      activeBundleSlide: i,
      isTransitioning: a
    } = e, o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion), c = F.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([B.Z], () => B.Z.getAllPending()), {
      pendingAvatar: d
    } = u, f = function(e, t) {
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
    }(u, ["pendingAvatar"]), p = (0, R.SD)({
      userId: n.id,
      image: d
    }), b = t.type === s.Z.AVATAR_DECORATION, [v] = t.items, {
      firstAvatarDecoration: x,
      firstProfileEffect: g,
      firstNameplate: P
    } = (0, Y.Rj)(t), j = null != g, O = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.Z, eL(ek({}, f), {
        pendingAvatar: p,
        user: n,
        canUsePremiumCustomization: c,
        pendingAvatarDecoration: x,
        pendingProfileEffect: g,
        disabledInputs: true,
        hideMessageInput: !j,
        hideCustomStatus: true,
        hideBioSection: b,
        hideExampleButton: true,
        interactive: false
      })), b && (0, r.jsx)(eV, {
        user: n
      })]
    }), C = e => (0, r.jsx)(eG, {
      user: n,
      nameplate: e,
      avatarDecoration: x
    });
    if (t.type === s.Z.BUNDLE) {
      if (!(0, Q.L)(t)) return (0, r.jsx)("div", {
        className: e_.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: e_.combinedPreviewContent,
          children: O()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          c = t.items[Math.max(0, e - 1)],
          u = (null == c ? true : c.type) !== (null == n ? true : n.type) && !o;
        return n.type === s.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(e_.nameplatePreviewContainerInner, a && u ? e_.sliding : ""),
          children: C(n)
        }) : (0, r.jsx)("div", {
          className: l()(e_.profileEffectPreviewsContainerInner, a && u ? e_.sliding : ""),
          children: O()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: e_.nameplatePreviewContainerInner,
      children: C(P)
    }) : (0, r.jsx)("div", {
      className: (null == v ? true : v.type) === s.Z.AVATAR_DECORATION ? e_.previewsContainerInner : e_.profileEffectPreviewsContainerInner,
      children: O()
    })
  },
  eV = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(eL(ek({}, (0, O.ZP)({
        author: t,
        channelId: "1337",
        content: eR.intl.string(eR.t.d5YwK5)
      })), {
        state: eN.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": eR.intl.string(eR.t["TN+ZvB"]),
      children: (0, r.jsx)(b.Rny, {
        children: (0, r.jsxs)(b.Zbd, {
          className: e_.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(I.Z, {
            className: e_.mockMessage,
            author: (0, C.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: e_.mockInput,
            children: [(0, r.jsx)(b.oFk, {
              size: "md",
              color: "currentColor",
              className: e_.mockInputButton
            }), (0, r.jsx)(b.EO4, {
              size: "md",
              color: "currentColor",
              className: e_.mockInputButton
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
      product: a,
      category: o,
      returnRef: d,
      analyticsSource: f,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: v,
      tab: h,
      rentalDuration: P
    } = e, j = (0, m.e7)([D.default], () => D.default.getCurrentUser()), O = (0, eI.f)(a), {
      previewingVariantIndex: C
    } = O, I = (0, z.o)(a), T = (0, eg.N)(a, C), y = (0, eP.W)(a, I);
    c()(null != y, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, g.ZP)([...p, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != P ? [x.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, er.u9)(y.skuId);
    let E = (0, eO.kc)(o);
    i.useEffect(() => {
      null != j && (0, _.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let N = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      U.default.track(eN.rMx.OPEN_MODAL, {
        type: eN.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: f,
        location_stack: w,
        sku_id: y.skuId,
        product_type: N
      }), y.items.forEach(H.oK)
    }, [f, w, y.skuId, y.items, N]);
    let S = (0, Z.r9)(),
      A = t === b.Dvm.EXITING,
      R = (0, ej.t0)(a),
      k = null == R ? true : R.amount,
      L = i.useMemo(() => (0, W.x6)(y) ? y.items.length : 0, [y]),
      {
        activeSlide: B,
        isTransitioning: M
      } = (0, $.b)({
        slideCount: L,
        intervalMs: 5e3
      });
    return null == j ? null : (0, r.jsx)(g.Gt, {
      value: w,
      children: (0, r.jsxs)(b.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: e_.modalRoot,
        returnRef: d,
        transitionState: t,
        size: b.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(b.hzk, {
          "data-migration-pending": true,
          className: e_.modalContent,
          children: [(0, r.jsx)(eM, {
            user: j,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: O,
            selectedVariantIndex: I,
            shouldCheckoutWithOrbs: v,
            activeBundleSlide: B,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: l()(e_.previewContainer, y.skuId === u.a.PREMIUM_TIER_2_3_DAY ? e_.fractionalNitroPreviewContainer : y.type === s.Z.AVATAR_DECORATION ? e_.collectiblePreviewsContainerWithChat : e_.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(E, ")")
            },
            children: [(0, eE.o0)(a.skuId) ? a.skuId === eE.Vt.ORB_PROFILE_BADGE ? S || A ? null : (0, r.jsx)(em.M, {
              user: j
            }) : a.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(ed.q, {}) : (0, r.jsx)(eb.b, {
              product: a,
              className: e_.externalProductProfilePreview
            }) : (0, r.jsx)(eH, {
              user: j,
              product: null != T ? T : y,
              activeBundleSlide: B,
              isTransitioning: M
            }), (0, r.jsxs)("div", {
              className: e_.pdpControls,
              children: [(0, r.jsx)(eh.a, {
                product: a,
                selectedVariantIndex: I,
                className: e_.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(et.n, {
                skuId: y.skuId,
                tab: h
              }), (0, r.jsx)(b.hU, {
                "aria-label": eR.intl.string(eR.t.cpT0Cq),
                onClick: n,
                icon: b.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != k && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(b.mzw, {
            "data-migration-pending": true,
            className: e_.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: e_.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: e_.modalFooterContentContainer,
              children: [(0, r.jsx)(b.Text, {
                variant: "text-sm/semibold",
                className: e_.modalFooterText,
                children: eR.intl.format(eR.t["78ph4b"], {
                  discountOfferAmount: k
                })
              }), (null == R ? true : R.expiresAt) != null && (0, r.jsx)(en.R, {
                endDate: R.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }