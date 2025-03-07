/** Chunk was on 2026 **/
n.d(t, {
  default: () => eF
}), n(47120), n(627341), n(266796);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(512722),
  s = n.n(o),
  c = n(278074),
  u = n(873546),
  d = n(979554),
  m = n(399606),
  f = n(780384),
  p = n(481060),
  v = n(809206),
  h = n(727637),
  b = n(410030),
  g = n(100527),
  x = n(906732),
  P = n(570908),
  C = n(786761),
  j = n(3148),
  _ = n(739566),
  w = n(753206),
  N = n(333867),
  I = n(197115),
  k = n(921813),
  O = n(876917),
  y = n(643879),
  S = n(484459),
  E = n(43747),
  T = n(822857),
  L = n(82856),
  Z = n(960919),
  A = n(25990),
  B = n(594174),
  R = n(626135),
  W = n(74538),
  F = n(937615),
  D = n(335131),
  z = n(1870),
  M = n(429368),
  H = n(884697),
  U = n(72462),
  V = n(228624),
  G = n(188584),
  K = n(635552),
  q = n(905357),
  Y = n(724994),
  X = n(328456),
  J = n(390698),
  Q = n(141011),
  $ = n(525518),
  ee = n(426171),
  et = n(224068),
  en = n(813083),
  er = n(823941),
  ea = n(680942),
  ei = n(558060),
  el = n(237031),
  eo = n(372654),
  es = n(259673),
  ec = n(508925),
  eu = n(755419),
  ed = n(410937),
  em = n(385797),
  ef = n(453713),
  ep = n(616066),
  ev = n(22267),
  eh = n(332246),
  eb = n(58201),
  eg = n(361110),
  ex = n(956472),
  eP = n(832149),
  eC = n(215023),
  ej = n(981631),
  e_ = n(474936),
  ew = n(231338),
  eN = n(388032),
  eI = n(885611);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function eO(e, t) {
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
let ey = {
    mallow: {
      name: eN.NW.string(eN.t.SbKDHh),
      avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png"
    },
    phibi: {
      name: eN.NW.string(eN.t["LMSo+P"]),
      avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png"
    },
    locke: {
      name: eN.NW.string(eN.t.g5Dump),
      avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png"
    },
    cherry: {
      name: eN.NW.string(eN.t.p5Z3Oj),
      avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png"
    },
    boom: {
      name: eN.NW.string(eN.t.ncsliY),
      avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png"
    }
  },
  eS = e => {
    let {
      item: t,
      user: n,
      isBundleItem: i = !1
    } = e, l = a.useRef(null), o = (0, h.Z)(l);
    return (0, c.EQ)(t.type).with(d.Z.AVATAR_DECORATION, () => (0, r.jsx)("div", {
      className: i ? eI.bundleAvatarPreviewContainer : eI.avatarPreviewContainer,
      children: (0, r.jsx)(ep.R, {
        user: n,
        item: t
      })
    })).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)("div", {
      className: i ? eI.bundlePfxPreviewContainer : eI.pfxPreviewContainer,
      ref: l,
      children: (0, r.jsx)(O.Z, {
        profileEffectId: t.id,
        isHovering: o,
        removeSetHeight: !0
      })
    })).with(d.Z.NAMEPLATE, () => (0, r.jsx)("div", {
      ref: l,
      className: eI.nameplatePreviewContainer,
      children: (0, r.jsx)(ev.Z, {
        className: eI.nameplatePreview,
        user: n,
        nameplate: t,
        isHighlighted: o
      })
    })).otherwise(() => null)
  },
  eE = e => {
    let {
      product: t,
      user: n
    } = e, [i, l] = a.useState(0);
    a.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && l(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, n.id]);
    let o = t.items.length;
    return (0, r.jsx)("div", {
      className: eI.bundlePreviewContainer,
      children: (0, r.jsx)(p.MyZ, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            l = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            s = "(".concat(a + 1, "/").concat(o, ")");
          return (0, r.jsx)(p.Mi4, {
            id: i,
            children: (0, r.jsxs)("div", {
              className: eI.bundlePreviewSlide,
              children: [(0, r.jsx)(eS, {
                item: e,
                user: n,
                isBundleItem: !0
              }), (0, r.jsxs)(p.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: eI.bundleSlideTitle,
                children: [null == l ? void 0 : l.name, " ", s]
              })]
            })
          }, i)
        })
      })
    })
  },
  eT = e => {
    let {
      product: t,
      user: n
    } = e;
    return (0, H.x6)(t) ? (0, r.jsx)(eE, {
      product: t,
      user: n
    }) : (0, eu.o0)(t.skuId) ? (0, r.jsx)(ec.b, {
      product: t
    }) : t.items.length > 0 ? (0, r.jsx)(eS, {
      item: t.items[0],
      user: n
    }) : null
  },
  eL = e => {
    var t, n;
    let {
      product: i,
      user: o,
      category: c,
      shouldCheckoutWithOrbs: h,
      onClose: g,
      returnRef: P,
      previewingVariantIndexProps: C,
      selectedVariantIndex: j,
      tab: _
    } = e, {
      analyticsLocations: w
    } = (0, x.ZP)(), k = W.ZP.canUseCollectibles(o), {
      previewingVariantIndex: O
    } = C, y = (0, eh.N)(i, O), S = (0, eb.W)(i, j);
    s()(null != S, "Selected product should not be null");
    let A = (0, Y.L)(i),
      {
        isPurchased: B,
        isPartiallyOwnedBundle: R
      } = (0, Y.L)(S),
      M = (0, m.e7)([z.Z], () => z.Z.purchases),
      U = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == S ? void 0 : S.skuId)),
      Q = (0, b.ZP)(),
      $ = (0, f.wj)(Q),
      ee = (0, H.G1)(S),
      er = (0, H.ql)(S, ej.tuJ.DEFAULT),
      eo = (null == er ? void 0 : er.amount) === 0,
      {
        firstAvatarDecoration: es
      } = (0, X.R)(null != y ? y : S),
      ec = a.useMemo(() => (0, H.BH)(S, k), [S, k]),
      {
        handleUseNow: eu,
        isApplying: ep
      } = (0, K.W)({
        product: S,
        onSuccess: g
      }),
      ev = (0, V.hv)("CollectiblesProductPreviewInfo"),
      eg = (0, q.T)(S),
      {
        enabled: eC
      } = (0, T.W)({
        location: "collectibles_shop_product_details_modal"
      }),
      {
        displayPrices: ek,
        checkoutEligiblePrices: eO
      } = (0, ex.Ip)({
        product: S,
        isPremiumUser: k,
        tab: _
      }),
      ey = eC && h,
      {
        redeemVirtualCurrency: eS,
        isSubmitting: eE,
        error: eL
      } = (0, E.f)(),
      {
        balance: eZ
      } = (0, E.A)(),
      eA = a.useCallback(() => (0, N.Z)({
        skuId: S.skuId,
        analyticsLocations: w,
        variantsReturnStyle: ev,
        onClose: e => e ? g() : (0, ew.dG)()
      }), [w, g, S.skuId, ev]);
    a.useEffect(() => {
      if (null != es) return (0, v.cV)(es), () => (0, v.cV)(void 0)
    }, [es]);
    let eB = e => (0, r.jsx)(I.Z, {
        subscriptionTier: e_.Si.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: el.v,
        onSubscribeModalClose: () => {
          (0, el.T)({
            product: S,
            category: c,
            shouldCheckoutWithOrbs: h,
            returnRef: P,
            analyticsLocations: w
          })
        }
      }),
      {
        firstAvatarDecoration: eR,
        firstProfileEffect: eW
      } = (0, G.k)(S),
      eF = S.type === d.Z.BUNDLE ? eN.NW.formatToPlainString(eN.t["jM8/7+"], {
        avatarDecorationName: null !== (t = null == eR ? void 0 : eR.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (n = null == eW ? void 0 : eW.name) && void 0 !== n ? n : ""
      }) : S.summary;
    return (0, r.jsxs)("div", {
      className: eI.collectibleInfoContainer,
      children: [(0, r.jsx)("div", {
        className: eI.titleContainer,
        children: (0, r.jsx)(en.Z, {
          category: c,
          display: "modal"
        })
      }), (0, r.jsx)(eT, {
        product: null != y ? y : S,
        user: o
      }), (0, r.jsxs)("div", {
        children: [null == eL ? null : (0, r.jsxs)("div", {
          className: eI.errorMessageLine,
          children: [(0, r.jsx)(p.P4T, {
            size: "xs",
            color: "white"
          }), (0, r.jsx)(p.Text, {
            variant: "text-xs/medium",
            children: eL.message
          })]
        }), (0, r.jsxs)("div", {
          className: eI.description,
          children: [(0, r.jsx)(et.Z, {
            product: S,
            isDarkText: !$
          }), (0, r.jsx)(p.X6q, {
            variant: "heading-xl/extrabold",
            className: eI.headingWithItemTypePill,
            children: eg
          }), (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            children: eF
          }), A.isPurchased || A.isPartiallyOwnedBundle ? (0, r.jsx)(J.U, {
            className: eI.priceTag,
            isPartiallyPurchased: R
          }) : ee ? (0, r.jsx)(p.Text, {
            variant: "text-md/semibold",
            className: eI.priceTag,
            children: eN.NW.string(eN.t.rt69oq)
          }) : eC ? ey ? (0, r.jsx)(ed.Z, {
            orbPrice: eO[0]
          }) : (0, r.jsx)(em.Z, {
            displayPrices: ek,
            isPremiumUser: k,
            showInsufficientOrbBalanceTooltip: !0
          }) : (0, r.jsx)(ei.Z, {
            product: S,
            discount: ec,
            isPremiumUser: k,
            className: k ? eI.priceTag : eI.priceTagContainer,
            nitroUpsell: !k
          })]
        }), (0, r.jsx)(ef.P, {
          variantGroupProduct: i,
          previewingVariantIndexProps: C,
          className: eI.variantsSwitch,
          purchases: M
        }), (0, r.jsx)("div", {
          className: eI.buttonsContainer,
          children: (0, r.jsxs)("div", {
            className: eI.primaryButtons,
            children: [(() => {
              if (ee && !k && !eo) return eB(eN.NW.string(eN.t.sEAnVF));
              if (B) return (0, r.jsx)(p.zxk, {
                className: eI.button,
                look: p.zxk.Looks.FILLED,
                onClick: eu,
                submitting: ep,
                children: eN.NW.string(eN.t.MAS7uL)
              });
              if (R) return null;
              if (ee) return (0, r.jsx)(p.zxk, {
                className: eI.button,
                look: p.zxk.Looks.FILLED,
                submitting: U,
                submittingStartedLabel: eN.NW.string(eN.t["TYw+9v"]),
                submittingFinishedLabel: eN.NW.string(eN.t.Pg1UPz),
                onClick: async () => {
                  await (0, D.fK)(S.skuId), g(), (0, eP.Z)({
                    product: S,
                    analyticsLocations: w
                  })
                },
                children: eN.NW.string(eN.t.zp6caG)
              });
              let e = ey && (null == eZ || 0 === eO.length || eZ < eO[0].amount);
              return (0, r.jsx)(p.zxk, {
                className: l()(eI.button, {
                  [eI.enabledButton]: !e
                }),
                innerClassName: eI.buttonInner,
                look: p.zxk.Looks.FILLED,
                submitting: eE,
                disabled: e,
                onClick: () => {
                  ey ? eS(S.skuId, e => {
                    var t;
                    g(!0), (0, D.qg)({
                      variantsReturnStyle: ev,
                      location: "collectible_checkout_with_orb"
                    }), (0, eP.Z)({
                      product: S,
                      analyticsLocations: w,
                      onCloseCallback: () => {
                        (0, L.vp)()
                      },
                      itemConsumed: null === (t = e[0]) || void 0 === t ? void 0 : t.consumed
                    })
                  }) : eA()
                },
                children: ey ? eN.NW.format(eN.t.kAgx5O, {
                  orbPrice: eO.length > 0 ? eO[0].amount : 1 / 0,
                  orbIconHook: () => (0, r.jsx)(Z.Z, {})
                }) : (0, H.x6)(S) ? eN.NW.string(eN.t.V1AWw8) : S.type === d.Z.PROFILE_EFFECT ? eN.NW.string(eN.t.kAeDcH) : eN.NW.string(eN.t.AQ0Ven)
              })
            })(), !ee && !eo && !u.tq && (0, r.jsx)(ea.Z, {
              product: S,
              onSuccess: g,
              disableCustomColor: !0
            })]
          })
        }), !ey || eO.length <= 1 ? null : (0, r.jsx)(p.P3F, {
          onClick: eA,
          className: eI.payWithFiatLink,
          children: (0, r.jsx)(p.Text, {
            variant: "text-xxs/normal",
            className: eI.payWithFiatLinkText,
            children: eN.NW.format(eN.t.hDiZtL, {
              price: (0, F.T4)(eO[1].amount, eO[1].currency)
            })
          })
        }), (0, r.jsx)(p.Text, {
          className: l()(eI.disclaimer, !$ && eI.disclaimerLight),
          variant: "text-xxs/normal",
          children: B ? null : ee ? eN.NW.string(eN.t.O2K0xM) : (0, H.x6)(S) ? eN.NW.string(eN.t.Ifvd7O) : S.type === d.Z.PROFILE_EFFECT ? eN.NW.string(eN.t.pxunjo) : eN.NW.string(eN.t.IA8coq)
        })]
      })]
    })
  },
  eZ = e => {
    let {
      user: t
    } = e;
    return (0, r.jsx)("div", {
      className: eI.nameplateRightPanePreviewAvatarContainer,
      children: (0, r.jsx)(P.Z, {
        avatar: (0, r.jsx)(p.qEK, {
          src: t.avatarSrc,
          size: p.EFr.SIZE_32,
          "aria-label": t.name,
          status: p.Skl.ONLINE
        }),
        name: t.name,
        selected: !1,
        innerClassName: eI.nameplateRightPanePreviewAvatarInner
      })
    })
  },
  eA = e => {
    let {
      user: t,
      nameplate: n
    } = e, i = a.useRef(null), l = (0, h.Z)(i);
    return (0, r.jsxs)("div", {
      className: eI.nameplateRightPanePreviewContainer,
      children: [(0, r.jsx)(eZ, {
        user: ey.mallow
      }), (0, r.jsxs)(p.Text, {
        variant: "text-sm/semibold",
        className: eI.namplateRightPanePreviewSectionGroup,
        children: [eN.NW.string(eN.t["yzW/fX"]), " - 3"]
      }), (0, r.jsx)(eZ, {
        user: ey.phibi
      }), (0, r.jsx)("div", {
        ref: i,
        className: eI.nameplateRightPanePreviewAvatarContainer,
        children: (0, r.jsx)(ev.Z, {
          className: eI.nameplatePreview,
          user: t,
          nameplate: n,
          showStatus: !0,
          isHighlighted: l
        })
      }), (0, r.jsx)(eZ, {
        user: ey.locke
      }), (0, r.jsxs)(p.Text, {
        variant: "text-sm/semibold",
        className: eI.namplateRightPanePreviewSectionGroup,
        children: [eN.NW.string(eN.t["NG43//"]), " - 12"]
      }), (0, r.jsx)(eZ, {
        user: ey.boom
      }), (0, r.jsx)(eZ, {
        user: ey.cherry
      })]
    })
  },
  eB = e => {
    let {
      product: t,
      user: n
    } = e, a = W.ZP.canUsePremiumProfileCustomization(n), i = (0, m.cj)([A.Z], () => A.Z.getAllPending()), {
      pendingAvatarV2: l
    } = i, o = function(e, t) {
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
    }(i, ["pendingAvatarV2"]), s = (0, y.SD)({
      userId: n.id,
      image: l
    }), c = t.type === d.Z.AVATAR_DECORATION, [u] = t.items, {
      firstAvatarDecoration: f,
      firstProfileEffect: p
    } = (0, X.R)(t), v = null != p;
    return (0, r.jsx)("div", {
      className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eI.previewsContainerInner : eI.profileEffectPreviewsContainerInner,
      children: (null == u ? void 0 : u.type) === d.Z.NAMEPLATE ? (0, r.jsx)(eA, {
        user: n,
        nameplate: u
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k.Z, eO(ek({}, o), {
          pendingAvatar: s,
          user: n,
          canUsePremiumCustomization: a,
          pendingAvatarDecoration: f,
          pendingProfileEffectId: null == p ? void 0 : p.id,
          disabledInputs: !0,
          hideMessageInput: !v,
          hideExampleButton: !0,
          hideCustomStatus: !0,
          hideBioSection: c
        })), c && (0, r.jsx)(eW, {
          user: n
        })]
      })
    })
  },
  eR = e => {
    let {
      author: t
    } = e;
    return (0, C.e5)(eO(ek({}, (0, j.ZP)({
      author: t,
      channelId: "1337",
      content: eN.NW.string(eN.t.d5YwKy)
    })), {
      state: ej.yb.SENT,
      id: "0"
    }))
  },
  eW = e => {
    let {
      user: t
    } = e, n = eR({
      author: t
    });
    return (0, r.jsx)(p.Rny, {
      children: (0, r.jsxs)(p.Zbd, {
        className: eI.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, r.jsx)(w.Z, {
          className: eI.mockMessage,
          author: (0, _.ZH)(n),
          message: n
        }, n.id), (0, r.jsxs)("div", {
          className: eI.mockInput,
          children: [(0, r.jsx)(p.oFk, {
            size: "md",
            color: "currentColor",
            className: eI.mockInputButton
          }), (0, r.jsx)(p.EO4, {
            size: "md",
            color: "currentColor",
            className: eI.mockInputButton
          })]
        })]
      })
    })
  },
  eF = e => {
    var t;
    let {
      transitionState: n,
      onClose: i,
      product: l,
      category: o,
      returnRef: c,
      analyticsSource: u,
      analyticsLocations: f,
      shouldCheckoutWithOrbs: v,
      tab: h
    } = e, b = (0, m.e7)([B.default], () => B.default.getCurrentUser()), P = (0, eg.f)(l), {
      previewingVariantIndex: C
    } = P, j = (0, m.e7)([z.Z], () => z.Z.purchases), _ = (0, M.o)(l, j), w = (0, eh.N)(l, C), N = (0, eb.W)(l, _);
    s()(null != N, "Selected product should not be null");
    let {
      analyticsLocations: I
    } = (0, x.ZP)([...f, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, ee.u9)(N.skuId);
    let [k] = N.items, O = (0, U.s)("CollectiblesShopProductDetailsModal");
    if (a.useEffect(() => {
        null != b && (0, S.Z)(b.id, b.getAvatarURL(void 0, 80))
      }, [b]), a.useEffect(() => {
        let e = (null == k ? void 0 : k.type) === d.Z.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
        R.default.track(ej.rMx.OPEN_MODAL, {
          type: ej.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
          source: u,
          location_stack: I,
          sku_id: N.skuId,
          product_type: e
        }), N.items.map(D.oK)
      }, [u, I, null == k ? void 0 : k.type, N.skuId, N.items]), null == b) return null;
    let y = (0, eC.ZS)(o.skuId),
      E = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        i(), e || (0, L.vp)()
      };
    return (0, r.jsx)(x.Gt, {
      value: I,
      children: (0, r.jsx)(p.Y0X, {
        hideShadow: !0,
        className: eI.modalRoot,
        returnRef: c,
        transitionState: n,
        size: p.CgR.DYNAMIC,
        children: (0, r.jsxs)(p.hzk, {
          className: eI.modalContent,
          children: [(0, r.jsx)(eL, {
            user: b,
            product: l,
            category: o,
            onClose: E,
            previewingVariantIndexProps: P,
            selectedVariantIndex: _,
            shouldCheckoutWithOrbs: v,
            tab: h
          }), (0, r.jsxs)("div", {
            className: N.type === d.Z.AVATAR_DECORATION ? eI.collectiblePreviewsContainerWithChat : eI.collectiblePreviewsContainerNoChat,
            children: [(0, r.jsx)(Q.Z, {
              asset: null !== (t = o.pdpBg) && void 0 !== t ? t : l.banner,
              size: (0, eo.ML)(540),
              className: eI.categoryBanner,
              categoryBannerOverride: y
            }), (0, eu.o0)(l.skuId) ? l.skuId === eu.xJ ? (0, r.jsx)(es.M, {
              user: b
            }) : (0, r.jsx)(ec.b, {
              product: l,
              className: eI.externalProductProfilePreview
            }) : (0, r.jsx)(eB, {
              user: b,
              product: null != w ? w : N
            }), (0, r.jsxs)("div", {
              className: eI.profilePreviewHeader,
              children: [(0, r.jsx)("div", {
                className: eI.titleImageContainer,
                children: (0, r.jsx)("img", {
                  className: eI.titleImage,
                  style: null == y ? void 0 : y.pdpLogoStyle,
                  src: (0, H.uV)(o.logo, {
                    size: er.n
                  }),
                  alt: o.name
                })
              }), (0, r.jsxs)("div", {
                className: eI.headerButtonContainer,
                children: [O && (0, r.jsx)($.B, {
                  skuId: N.skuId,
                  tab: h
                }), (0, r.jsx)(p.olH, {
                  onClick: () => E(),
                  className: eI.modalCloseButton,
                  withCircleBackground: !0
                })]
              })]
            })]
          })]
        })
      })
    })
  }