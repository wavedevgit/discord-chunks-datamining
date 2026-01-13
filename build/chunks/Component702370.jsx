/** Chunk was on 8087 **/
/** chunk id: 702370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eW
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
  Chunk567400 = require("./567400.js"),
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
      product: n,
      user: a
    } = e, l = i.useRef(null), o = (0, q.x6)(n), {
      firstAvatarDecoration: c
    } = (0, Q.Rj)(n);
    return t.type === s.Z.AVATAR_DECORATION ? (0, r.jsx)("div", {
      className: o ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
      children: (0, r.jsx)(eg.R, {
        user: a,
        item: t,
        isHighlighted: true
      })
    }) : t.type === s.Z.PROFILE_EFFECT ? (0, r.jsx)("div", {
      className: o ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(A.Z, {
        skuId: t.skuId,
        removeSetHeight: true,
        isHighlighted: true,
        delayProfileEffectIntro: true
      })
    }) : t.type === s.Z.NAMEPLATE ? (0, r.jsx)("div", {
      ref: l,
      className: ek.nameplatePreviewContainer,
      children: (0, r.jsx)(y.Z, {
        className: ek.nameplatePreview,
        nameplate: t,
        showPlaceholderUser: true,
        nameplatePreviewSize: "large",
        pendingAvatarDecoration: c,
        isHighlighted: true
      })
    }) : null
  },
  eD = e => {
    let {
      product: t,
      user: n,
      activeSlide: i = 0
    } = e, a = t.items.length;
    return (0, r.jsx)("div", {
      className: ek.bundlePreviewContainer,
      children: (0, r.jsx)(b.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, i) => {
          let l = String(i),
            o = null != t.bundledProducts ? t.bundledProducts[i] : true,
            c = "(".concat(i + 1, "/").concat(a, ")");
          return (0, r.jsx)(b.Mi4, {
            id: l,
            children: (0, r.jsxs)("div", {
              className: ek.bundlePreviewSlide,
              children: [(0, r.jsx)(eB, {
                item: e,
                product: t,
                user: n
              }), (0, r.jsxs)(b.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ek.bundleSlideTitle,
                children: [null == o ? true : o.name, " ", c]
              })]
            })
          }, l)
        })
      })
    })
  },
  eU = e => {
    let {
      product: t,
      user: n,
      activeSlide: i
    } = e;
    return (0, q.x6)(t) ? (0, r.jsx)(eD, {
      product: t,
      user: n,
      activeSlide: i
    }) : (0, eN.o0)(t.skuId) ? (0, r.jsx)(ev.b, {
      animationState: "on_hover",
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eB, {
      item: t.items[0],
      product: t,
      user: n
    }) : null
  },
  eM = e => {
    let {
      skuId: t
    } = e;
    return t === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(b.Text, {
      variant: "text-sm/normal",
      className: ek.learnMoreLink,
      children: e_.intl.format(e_.t.Q1scdE, {
        helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }) : null
  },
  eF = e => {
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
      rentalDuration: C
    } = e, {
      analyticsLocations: O
    } = (0, g.ZP)(), I = (0, m.e7)([L.default], () => L.default.locale), T = G.ZP.canUseCollectibles(n), {
      previewingVariantIndex: y,
      handleEntering: S,
      handleLeaving: A
    } = x, R = (0, eP.N)(t, y), _ = (0, ej.W)(t, P);
    c()(null != _, "Selected product should not be null");
    let k = (0, Y.L)(t),
      {
        isPurchased: D,
        isPartiallyOwnedBundle: U,
        isRented: M
      } = (0, Y.L)(_),
      {
        isDisabled: F,
        disabledReason: W
      } = (0, J.G)(_.skuId),
      $ = (0, q.ne)({
        product: _,
        isPartiallyOwnedBundle: U,
        isPurchased: D
      }),
      ee = null != C,
      en = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == _ ? true : _.skuId)),
      er = (0, v.ZP)(),
      ei = (0, p.wj)(er),
      em = (0, q.G1)(_),
      ef = (0, q.ql)(_, eS.tuJ.DEFAULT),
      ev = (null == ef ? true : ef.amount) === 0,
      {
        firstAvatarDecoration: ex
      } = (0, Q.Rj)(null != R ? R : _),
      eg = i.useMemo(() => (0, q.BH)(_, T), [_, T]),
      eO = (0, ey.To)(_),
      eT = (0, eI.J)(_),
      {
        enabled: eL
      } = (0, Z.W)({
        location: "collectibles_shop_product_details_modal"
      }),
      eZ = (0, K.G)(_, false, C),
      eB = (0, eC.Iw)(t),
      eD = null != eB,
      {
        checkoutEligiblePrices: eF,
        isOrbExclusive: eG,
        hasSufficientOrbs: eH
      } = (0, ew.Ip)({
        product: _,
        isPremiumUser: T,
        hasDiscountOffer: eD,
        isRental: null != C
      }),
      eV = i.useCallback(() => (0, w.Z)({
        skuId: _.skuId,
        analyticsLocations: O,
        variantsReturnStyle: d.v.VARIANTS_GROUP,
        onClose: e => e ? u() : (0, eR.dG)()
      }), [O, u, _.skuId]);
    return i.useEffect(() => {
      if (null != ex) return (0, N.PO)(ex), () => (0, N.PO)(true)
    }, [ex]), (0, r.jsxs)("div", {
      className: ek.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: ek.titleContainer,
        children: (0, r.jsx)(el.Z, {
          category: a
        })
      }), (0, r.jsx)(eU, {
        product: null != R ? R : _,
        user: n,
        activeSlide: j
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: ek.description,
          children: [(0, r.jsx)(ea.Z, {
            product: _,
            isDarkText: !ei,
            isOrbExclusive: eG,
            rentalDuration: C
          }), (0, r.jsx)(b.Heading, {
            variant: "heading-xl/extrabold",
            className: ek.headingWithItemTypePill,
            children: eO
          }), (0, r.jsx)(b.Text, {
            variant: "text-sm/normal",
            children: eZ
          }), (0, r.jsx)(eM, {
            skuId: _.skuId
          }), k.isPurchased || k.isPartiallyOwnedBundle ? (0, r.jsx)(et.U, {
            className: ek.priceTag,
            isPartiallyPurchased: U
          }) : em ? (0, r.jsx)(b.Text, {
            variant: "text-md/semibold",
            className: ek.priceTag,
            children: e_.intl.string(e_.t.rt69oo)
          }) : eL ? (0, r.jsx)(eh.a, {
            prices: eF,
            product: _,
            isPremiumUser: T,
            discount: eg,
            hasSufficientOrbs: eH,
            isProductDisabled: F,
            discountOfferAmount: eB
          }) : (0, r.jsxs)("div", {
            className: ek.priceTagContainer,
            children: [(0, r.jsx)(ec.Z, {
              product: _,
              discount: eg,
              isPremiumUser: T,
              hideStrikethroughPrice: !T || eD,
              nitroIconType: "tooltip",
              nitroIconSize: "xs",
              discountOfferAmount: eB
            }), T || eD ? null : (0, r.jsx)(es.Z, {
              product: _
            })]
          })]
        }), (0, X.ox)(t) && (0, r.jsx)(b.Rny, {
          children: (0, r.jsxs)("div", {
            className: ek.variantsContainer,
            children: [(0, r.jsx)(eb.Z, {
              skuId: t.skuId,
              onVariantEnter: S,
              onVariantExit: A
            }), (0, r.jsx)(ep.Z, {
              skuId: t.skuId,
              overrideVariantIndex: y
            })]
          })
        }), null !== W && (0, r.jsx)(b.Text, {
          variant: "text-xs/normal",
          className: ek.disabledReason,
          children: W
        }), (0, r.jsx)(b.Kqy, {
          direction: "vertical",
          gap: 8,
          children: (() => {
            if (em && !T && !ev) {
              let e;
              return e = e_.intl.string(e_.t.sEAnVH), (0, r.jsx)(E.Z, {
                subscriptionTier: eA.Si.TIER_2,
                fullWidth: true,
                textOptions: {
                  textOverride: e
                },
                onClick: eu.v,
                onSubscribeModalClose: () => {
                  (0, eu.T)({
                    product: _,
                    category: a,
                    shouldCheckoutWithOrbs: o,
                    returnRef: h,
                    analyticsLocations: O
                  })
                }
              })
            }
            if (!$) return eT ? (0, r.jsx)(eo.Z, {
              primary: true,
              product: _,
              onSuccess: u,
              fullWidth: true
            }) : null;
            if (ee) {
              if (D) return (0, r.jsx)(ed.Z, {
                product: _,
                onSuccess: u
              })
            } else if (D && !M) return eT ? (0, r.jsxs)(b.ButtonGroup, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(ed.Z, {
                product: _,
                onSuccess: u
              }), (0, r.jsx)(eo.Z, {
                primary: true,
                product: _,
                onSuccess: u
              })]
            }) : (0, r.jsx)(ed.Z, {
              product: _,
              onSuccess: u
            });
            return em ? (0, r.jsx)(b.Button, {
              loading: en,
              loadingStartedLabel: e_.intl.string(e_.t["TYw+9s"]),
              loadingFinishedLabel: e_.intl.string(e_.t.Pg1UP5),
              onClick: async () => {
                await (0, V.fK)(_.skuId), u(), (0, eE.Z)({
                  product: _,
                  analyticsLocations: O,
                  purchaseType: eN.o8.PREMIUM_PURCHASE
                })
              },
              text: e_.intl.string(e_.t.zp6caO),
              fullWidth: true
            }) : (0, r.jsx)(r.Fragment, {
              children: eF.map((e, t) => {
                let n, i = 0 === t;
                if (e.currency === eR.pK.DISCORD_ORB) {
                  if (null != C) return (e => {
                    let t = F ? e_.intl.string(e_.t.cTdr3x) : e_.intl.string(e_.t.zqh7ZM),
                      n = !eH || F,
                      i = e_.intl.formatToPlainString(e_.t.DlNs2T, {
                        orbPrice: eN.As
                      }),
                      a = n ? "".concat(i, ", ").concat(t) : i,
                      o = new Date,
                      c = null == C ? null : o.setDate(o.getDate() + C),
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
                            (0, B.qA)({
                              skuId: _.skuId,
                              onCheckoutSuccess: e => {
                                var t, n;
                                let {
                                  entitlements: r
                                } = e;
                                (0, V.qg)({
                                  variantsReturnStyle: d.v.VARIANTS_GROUP
                                }), u();
                                let i = (null == (t = r[0]) ? true : t.ends_at) != null ? new Date(r[0].ends_at).toLocaleDateString(I, {
                                  minute: "numeric",
                                  hour: "numeric",
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric"
                                }) : true;
                                (0, eE.Z)({
                                  product: _,
                                  analyticsLocations: O,
                                  itemConsumed: null == (n = r[0]) ? true : n.consumed,
                                  purchaseType: eN.o8.ORB,
                                  rentalDuration: C,
                                  rentalExpiresAt: i
                                })
                              },
                              analyticsLocations: O,
                              rentalDuration: C
                            })
                          },
                          disabled: n,
                          "aria-label": a,
                          text: e_.intl.format(e_.t["4NKuqc"], {
                            orbPrice: eN.As,
                            orbIconHook: () => (0, r.jsx)(b.aQr, {
                              className: ek.orbIconAligned,
                              size: "sm",
                              color: "currentColor"
                            })
                          }),
                          fullWidth: true
                        })
                      }), null != s && (0, r.jsx)(b.Text, {
                        variant: "text-xs/normal",
                        className: l()(ek.disclaimer, !ei && ek.disclaimerLight),
                        children: e_.intl.format(e_.t.pLAiJ4, {
                          date: s
                        })
                      })]
                    })
                  })(i);
                  let t = F ? e_.intl.string(e_.t.cTdr3x) : e_.intl.string(e_.t.zqh7ZM),
                    n = !eH || F,
                    a = e_.intl.formatToPlainString(e_.t["fNG/05"], {
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
                        (0, B.qA)({
                          skuId: _.skuId,
                          onCheckoutSuccess: e => {
                            var t;
                            let {
                              entitlements: n
                            } = e;
                            (0, V.qg)({
                              variantsReturnStyle: d.v.VARIANTS_GROUP
                            }), u(), (0, eE.Z)({
                              product: _,
                              analyticsLocations: O,
                              itemConsumed: null == (t = n[0]) ? true : t.consumed,
                              purchaseType: eN.o8.ORB
                            })
                          },
                          analyticsLocations: O
                        })
                      },
                      disabled: n,
                      "aria-label": o,
                      text: e_.intl.format(e_.t.kAgx5L, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(b.aQr, {
                          className: ek.orbIconAligned,
                          size: "sm",
                          color: "currentColor"
                        })
                      }),
                      fullWidth: true
                    })
                  })
                }
                return n = (0, q.x6)(_) ? e_.intl.string(e_.t.V1AWw0) : _.type === s.Z.PROFILE_EFFECT ? e_.intl.string(e_.t.kAeDcK) : _.type === s.Z.NAMEPLATE ? e_.intl.string(e_.t.H3vhqU) : e_.intl.string(e_.t.AQ0Veg), eD ? n = e_.intl.formatToPlainString(e_.t["5U5RB5"], {
                  discountOfferAmount: eB
                }) : eL && (n = e_.intl.formatToPlainString(e_.t["cNSL/j"], {
                  price: (0, H.T4)(e.amount, e.currency)
                })), (0, r.jsxs)(b.ButtonGroup, {
                  wrap: false,
                  fullWidth: true,
                  children: [(0, r.jsx)(b.Button, {
                    variant: i ? "primary" : "secondary",
                    onClick: eV,
                    text: n,
                    fullWidth: true
                  }), eT && (0, r.jsx)(eo.Z, {
                    primary: i,
                    product: _,
                    onSuccess: u
                  })]
                })
              })
            })
          })()
        }), (0, r.jsx)(b.Text, {
          className: l()(ek.disclaimer, !ei && ek.disclaimerLight),
          variant: "text-xxs/normal",
          children: em && !D ? e_.intl.string(e_.t.nKdAlO) : null
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
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(b.qEK, {
          src: t.avatarSrc,
          size: b.EFr.SIZE_32,
          "aria-label": t.name,
          status: b.Skl.ONLINE
        }),
        name: t.name,
        innerClassName: l()(ek.nameplateRightPanePreviewAvatarInner, n)
      })
    })
  },
  eH = e => {
    let {
      user: t,
      nameplate: n,
      avatarDecoration: i
    } = e, a = (0, T.w$)();
    return (0, r.jsx)("div", {
      className: ek.nameplateRightPanePreviewContainer,
      role: "img",
      "aria-label": e_.intl.string(e_.t.SZeUdR),
      children: (0, r.jsxs)(b.Rny, {
        children: [(0, r.jsx)(eG, {
          user: a.mallow,
          innerClassName: ek.userBlue
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [e_.intl.string(e_.t["yzW/fZ"]), " - 3"]
        }), (0, r.jsx)(eG, {
          user: a.phibi,
          innerClassName: ek.userPink
        }), (0, r.jsx)("div", {
          className: ek.nameplateRightPanePreviewAvatarContainer,
          children: (0, r.jsx)(y.Z, {
            className: ek.nameplatePreview,
            innerClassName: ek.userPink,
            user: t,
            nameplate: n,
            showStatus: true,
            isHighlighted: true,
            skipEffectDisplayName: true,
            pendingAvatarDecoration: i
          })
        }), (0, r.jsx)(eG, {
          user: a.locke,
          innerClassName: ek.userPink
        }), (0, r.jsxs)(b.Text, {
          variant: "text-sm/semibold",
          className: ek.nameplateRightPanePreviewSectionGroup,
          children: [e_.intl.string(e_.t["NG43/6"]), " - 12"]
        }), (0, r.jsx)(eG, {
          user: a.boom,
          innerClassName: ek.userGreen
        }), (0, r.jsx)(eG, {
          user: a.cherry,
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
    } = e, o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion), c = G.ZP.canUsePremiumProfileCustomization(n), u = (0, m.cj)([D.Z], () => D.Z.getAllPending()), {
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
    } = (0, Q.Rj)(t), j = null != g, C = () => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.Z, eZ(eL({}, f), {
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
      })), b && (0, r.jsx)(ez, {
        user: n
      })]
    }), O = e => (0, r.jsx)(eH, {
      user: n,
      nameplate: e,
      avatarDecoration: x
    });
    if (t.type === s.Z.BUNDLE) {
      if (!(0, $.L)(t)) return (0, r.jsx)("div", {
        className: ek.previewsContainerInner,
        children: (0, r.jsx)("div", {
          className: ek.combinedPreviewContent,
          children: C()
        })
      });
      {
        let e = null != i ? i : 0,
          n = t.items[e],
          c = t.items[Math.max(0, e - 1)],
          u = (null == c ? true : c.type) !== (null == n ? true : n.type) && !o;
        return n.type === s.Z.NAMEPLATE ? (0, r.jsx)("div", {
          className: l()(ek.nameplatePreviewContainerInner, a && u ? ek.sliding : ""),
          children: O(n)
        }) : (0, r.jsx)("div", {
          className: l()(ek.profileEffectPreviewsContainerInner, a && u ? ek.sliding : ""),
          children: C()
        })
      }
    }
    return null != P ? (0, r.jsx)("div", {
      className: ek.nameplatePreviewContainerInner,
      children: O(P)
    }) : (0, r.jsx)("div", {
      className: (null == v ? true : v.type) === s.Z.AVATAR_DECORATION ? ek.previewsContainerInner : ek.profileEffectPreviewsContainerInner,
      children: C()
    })
  },
  ez = e => {
    let {
      user: t
    } = e, n = (e => {
      let {
        author: t
      } = e;
      return (0, j.e5)(eZ(eL({}, (0, C.ZP)({
        author: t,
        channelId: "1337",
        content: e_.intl.string(e_.t.d5YwK5)
      })), {
        state: eS.yb.SENT,
        id: "0"
      }))
    })({
      author: t
    });
    return (0, r.jsx)("div", {
      role: "img",
      "aria-label": e_.intl.string(e_.t["TN+ZvB"]),
      children: (0, r.jsx)(b.Rny, {
        children: (0, r.jsxs)(b.Zbd, {
          className: ek.chatPreview,
          outline: true,
          "aria-hidden": true,
          children: [(0, r.jsx)(I.Z, {
            className: ek.mockMessage,
            author: (0, O.ZH)(n),
            message: n
          }, n.id), (0, r.jsxs)("div", {
            className: ek.mockInput,
            children: [(0, r.jsx)(b.oFk, {
              size: "md",
              color: "currentColor",
              className: ek.mockInputButton
            }), (0, r.jsx)(b.EO4, {
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
      returnRef: d,
      analyticsSource: f,
      analyticsLocations: p,
      shouldCheckoutWithOrbs: v,
      tab: h,
      rentalDuration: P
    } = e, j = (0, m.e7)([U.default], () => U.default.getCurrentUser()), C = (0, eT.f)(a), {
      previewingVariantIndex: O
    } = C, I = (0, W.o)(a), T = (0, eP.N)(a, O), y = (0, ej.W)(a, I);
    c()(null != y, "Selected product should not be null");
    let {
      analyticsLocations: w
    } = (0, g.ZP)([...p, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL, ...null != P ? [x.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []]);
    (0, ei.u9)(y.skuId);
    let E = (0, eO.kc)(o),
      N = (0, _.Y)({
        location: "CollectiblesShopProductDetailsModal"
      });
    i.useEffect(() => {
      null != j && (0, k.Z)(j.id, j.getAvatarURL(true, 80))
    }, [j]);
    let S = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
    i.useEffect(() => {
      M.default.track(eS.rMx.OPEN_MODAL, {
        type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
        source: f,
        location_stack: w,
        sku_id: y.skuId,
        product_type: S
      }), y.items.forEach(V.oK)
    }, [f, w, y.skuId, y.items, S]);
    let A = (0, B.r9)(),
      R = t === b.Dvm.EXITING,
      L = (0, eC.t0)(a),
      Z = null == L ? true : L.amount,
      D = i.useMemo(() => (0, q.x6)(y) ? y.items.length : 0, [y]),
      {
        activeSlide: F,
        isTransitioning: G
      } = (0, ee.b)({
        slideCount: D,
        intervalMs: 5e3
      });
    return null == j ? null : (0, r.jsx)(g.Gt, {
      value: w,
      children: (0, r.jsxs)(b.Y0X, {
        "data-migration-pending": true,
        hideShadow: true,
        className: ek.modalRoot,
        returnRef: d,
        transitionState: t,
        size: b.CgR.DYNAMIC,
        parentComponent: "CollectiblesShopProductDetailsModal",
        children: [(0, r.jsxs)(b.hzk, {
          "data-migration-pending": true,
          className: ek.modalContent,
          children: [(0, r.jsx)(eF, {
            user: j,
            product: a,
            category: o,
            onClose: n,
            previewingVariantIndexProps: C,
            selectedVariantIndex: I,
            shouldCheckoutWithOrbs: v,
            activeBundleSlide: F,
            rentalDuration: P
          }), (0, r.jsxs)("div", {
            className: l()(ek.previewContainer, y.skuId === u.a.PREMIUM_TIER_2_3_DAY ? ek.fractionalNitroPreviewContainer : y.type === s.Z.AVATAR_DECORATION ? ek.collectiblePreviewsContainerWithChat : ek.collectiblePreviewsContainerNoChat),
            style: {
              backgroundImage: "url(".concat(E, ")")
            },
            children: [(0, eN.o0)(a.skuId) ? a.skuId === eN.Vt.ORB_PROFILE_BADGE ? A || R ? null : (0, r.jsx)(ef.M, {
              user: j
            }) : a.skuId === u.a.PREMIUM_TIER_2_3_DAY ? (0, r.jsx)(em.q, {}) : (0, r.jsx)(ev.b, {
              product: a,
              className: ek.externalProductProfilePreview
            }) : (0, r.jsx)(eV, {
              user: j,
              product: null != T ? T : y,
              activeBundleSlide: F,
              isTransitioning: G
            }), (0, r.jsxs)("div", {
              className: ek.pdpControls,
              children: [N && (0, r.jsx)(ex.a, {
                product: a,
                selectedVariantIndex: I,
                className: ek.wishlistButton,
                iconSize: 16,
                enableHoverEffect: true
              }), (0, r.jsx)(en.n, {
                skuId: y.skuId,
                tab: h
              }), (0, r.jsx)(b.hU, {
                "aria-label": e_.intl.string(e_.t.cpT0Cq),
                onClick: n,
                icon: b.Uz9,
                variant: "overlay-secondary",
                size: "sm"
              })]
            })]
          })]
        }), null != Z && (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(b.mzw, {
            "data-migration-pending": true,
            className: ek.modalFooter,
            children: [(0, r.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
              alt: "",
              className: ek.modalFooterBackgroundImg
            }), (0, r.jsxs)("div", {
              className: ek.modalFooterContentContainer,
              children: [(0, r.jsx)(b.Text, {
                variant: "text-sm/semibold",
                className: ek.modalFooterText,
                children: e_.intl.format(e_.t["78ph4b"], {
                  discountOfferAmount: Z
                })
              }), (null == L ? true : L.expiresAt) != null && (0, r.jsx)(er.R, {
                endDate: L.expiresAt
              })]
            })]
          })
        })]
      })
    })
  }