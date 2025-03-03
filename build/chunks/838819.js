/** Chunk was on 45620 **/
"use strict";
r.r(t), r.d(t, {
  default: () => el
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  o = r.n(i),
  a = r(979554),
  s = r(399606),
  c = r(704215),
  u = r(952265),
  d = r(481060),
  p = r(150063),
  f = r(434650),
  b = r(100527),
  h = r(906732),
  m = r(702486),
  C = r(605236),
  g = r(977395),
  v = r(214852),
  x = r(479446),
  j = r(981632),
  _ = r(290026),
  y = r(511050),
  O = r(819640),
  k = r(594174),
  P = r(626135),
  S = r(74538),
  E = r(335131),
  w = r(381585),
  L = r(597688),
  I = r(328347),
  N = r(223143),
  T = r(298228),
  B = r(937510),
  Z = r(309956),
  F = r(853748),
  A = r(426171),
  R = r(823941),
  W = r(752053),
  D = r(963102),
  H = r(508498),
  M = r(38900),
  V = r(709999),
  U = r(373113),
  G = r(141594),
  z = r(566564),
  q = r(531864),
  K = r(302800),
  Y = r(215023),
  $ = r(981631),
  J = r(921944),
  X = r(420212),
  Q = r(474936),
  ee = r(577852);

function et(e) {
  let {
    products: t,
    handleShopCardMount: r,
    header: l,
    category: i,
    isPremiumUser: o,
    isGiftEasterEggEnabled: a
  } = e, c = (0, s.e7)([k.default], () => k.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, n.jsxs)("div", {
    children: [null != l ? (0, n.jsx)(d.Text, {
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, n.jsx)(d.LZC, {
      size: 24
    }), (0, n.jsx)("div", {
      className: ee.cardsContainer,
      children: t.map((e, t) => (0, n.jsx)(w.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, n.jsx)(V.Z, {
          onMount: r(e),
          isPremiumUser: o,
          category: i,
          product: e,
          user: c,
          isGiftEasterEggEnabled: a,
          tab: Y.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function er(e) {
  var {
    category: t,
    initialItemCardRef: r
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["category", "initialItemCardRef"]);
  let o = (0, B.l)(t.products),
    a = (0, s.e7)([I.Z], () => I.Z.initialProductSkuId),
    c = l.useCallback(e => t => {
      var n;
      (e.skuId === a || (null === (n = e.variants) || void 0 === n ? void 0 : n.some(e => e.skuId === a)) === !0) && (r.current = t.current)
    }, [a, r]);
  return (0, n.jsx)(et, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({
    products: o,
    handleShopCardMount: c,
    category: t
  }, i))
}

function en(e) {
  let {
    category: t,
    isPremiumUser: r,
    initialItemCardRef: i,
    isGiftEasterEggEnabled: a,
    setIsGiftEasterEggEnabled: s,
    showEasterEggToggle: c,
    isFullScreen: u
  } = e, p = l.useRef(10 + 70 * Math.random()), [b, h] = l.useState(!1), m = (0, K.M7)(t.skuId), C = (0, f.O)(e => {
    h(e && null != m)
  }, u ? .13 : .15);
  return (0, n.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: C,
    children: [c && (0, n.jsx)(d.P3F, {
      className: o()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: a
      }),
      onClick: () => s(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, n.jsx)(j.Z, {
        idleAnimationState: x.SR.IDLE,
        giftStyle: Q.Cj.BOX
      })
    }), (0, n.jsx)(R.Z, {
      category: t,
      hideLimitedTimeBadge: null != m
    }), (0, n.jsx)(er, {
      category: t,
      initialItemCardRef: i,
      isPremiumUser: r,
      isGiftEasterEggEnabled: a
    }), null != m && null != t.unpublishedAt && (0, n.jsx)(F.$, {
      unpublishedAt: t.unpublishedAt,
      isVisible: b,
      displayOptions: m,
      isFullScreen: u
    })]
  })
}
let el = function(e) {
  var t;
  let {
    isFullScreen: r = !0,
    tab: i = Y.AW.HOME
  } = e;
  (0, v.z)(g.f);
  let {
    analyticsSource: f,
    analyticsLocations: x
  } = (0, s.cj)([I.Z], () => I.Z.getAnalytics()), {
    analyticsLocations: j
  } = (0, h.ZP)([...x, b.Z.COLLECTIBLES_SHOP]), {
    sessionId: B,
    scrollerRef: F,
    scrollHandler: R
  } = (0, m._)($.rMx.COLLECTIBLES_SHOP_SCROLLED, f), {
    selectedTab: V,
    transitionState: K,
    transitionToTab: et
  } = (0, Z.B)(F, i, r), [er, el] = l.useState(!1), [ei, eo] = l.useState(Y.IV), [ea, es] = l.useState(), [ec, eu] = l.useState(), {
    closeIntroToOrbsClaimedCoachmark: ed
  } = (0, y.Z)({
    location: "CollectiblesShop"
  });
  l.useEffect(() => () => {
    ed()
  }, [f, ed]);
  let ep = (0, s.e7)([O.Z], () => O.Z.getLayers().includes($.S9g.COLLECTIBLES_SHOP)),
    ef = (0, u.f9)(),
    {
      onClose: eb
    } = (0, H.Db)(),
    eh = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
    em = S.ZP.canUseCollectibles(eh),
    {
      categories: eC,
      isFetchingCategories: eg,
      fetchCategoriesError: ev,
      fetchPurchasesError: ex,
      claimError: ej,
      refreshCategories: e_
    } = (0, N.ZP)({
      location: "CollectiblesShop.web"
    }),
    ey = null !== (t = null != ev ? ev : ex) && void 0 !== t ? t : ej;
  (0, _.P)();
  let eO = (0, T.O)(eC),
    ek = l.useRef(null),
    [eP, eS] = l.useState(!1);
  (0, A.Kp)({
    isFetchingCategories: eg,
    isLayer: ep,
    initialItemCardRef: ek
  }), l.useEffect(() => {
    if (K === Y.f7.VISIBLE) {
      var e;
      let t;
      t = V === Y.AW.CATALOG ? ec : f, P.default.track($.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: j,
        source: t,
        page_session_id: B,
        page_type: V === Y.AW.HOME ? "home" : "full",
        category: V === Y.AW.HOME ? void 0 : null === (e = L.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name
      })
    }
    em || P.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Q.cd.COLLECTIBLES_SHOP,
      location_stack: j
    })
  }, [em, j, f, B, ea, es, ec, K, V]);
  let {
    dismissCollectiblesShopTabNewBadge: eE
  } = (0, G.Z)();
  l.useEffect(() => {
    eE(), !(0, C.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) && (0, C.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: J.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eE]), l.useEffect(() => {
    r || (0, p.Y)($.Z5c.COLLECTIBLES_SHOP)
  }, [r]), l.useEffect(() => () => {
    (0, E.K$)({
      categories: [...eC.values()],
      itemTypes: [a.Z.AVATAR_DECORATION, a.Z.PROFILE_EFFECT]
    })
  }, [eC]), l.useEffect(() => {
    if (!r || ep || ef) return;
    let e = e => {
      e.key === X.mR.Escape && eb()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [r, ep, ef, eb]);
  let ew = l.useCallback(() => {
      e_()
    }, [e_]),
    {
      setCategoryRef: eL,
      handleScrollToCategory: eI
    } = (0, A.xV)(F.current),
    {
      reducedMotion: eN
    } = l.useContext(d.Sfi),
    eT = l.useRef(null),
    eB = l.useRef(null);
  (0, d.Tbt)(eT), l.useEffect(() => {
    if (!r) {
      var e;
      null === (e = eB.current) || void 0 === e || e.focus()
    }
  }, [r]);
  let eZ = l.useCallback(async (e, t, n) => {
      let l = n && !r && !eN.enabled;
      eu(e), es(t), await et(Y.AW.CATALOG, l), t && eI(t)
    }, [eI, r, eN.enabled, et]),
    eF = (0, s.e7)([L.Z], () => {
      var e;
      return null === (e = L.Z.getCategory(ea)) || void 0 === e ? void 0 : e.name
    });
  return (0, n.jsx)(h.Gt, {
    value: j,
    children: (0, n.jsxs)(w.k0, {
      newValue: {
        sessionId: B,
        pageCategory: eF
      },
      children: [(0, n.jsx)("div", {
        className: ee.shop,
        ref: r ? eT : eB,
        tabIndex: -1,
        children: (0, n.jsx)(d.Den, {
          className: ee.shopScroll,
          ref: F,
          onScroll: () => {
            if (R(), null != F.current) {
              let e = F.current.getDistanceFromBottom();
              ei >= Y.iA ? el(e < 20) : e <= 200 && eo(ei + Y.IV)
            }
          },
          children: (0, n.jsxs)("div", {
            className: o()(ee.shopViewWrapper, {
              [ee.visible]: K === Y.f7.VISIBLE,
              [ee.in]: K === Y.f7.IN,
              [ee.out]: K === Y.f7.OUT
            }),
            children: [(0, n.jsx)(D.I, {
              isFullScreen: r,
              isLayer: ep,
              onClose: eb,
              handleTransition: et,
              selectedTab: V
            }), function(e) {
              switch (e) {
                case Y.AW.HOME:
                case Y.AW.ORBS:
                  return (0, n.jsx)(z.Z, {
                    isFullScreen: r,
                    handleTransition: eZ,
                    numVisibleItems: ei,
                    tab: e
                  });
                case Y.AW.CATALOG:
                  return (0, n.jsx)("div", {
                    className: ee.pageWrapper,
                    children: (0, n.jsx)("main", {
                      className: o()(ee.page, {
                        [ee.pageFullscreen]: r
                      }),
                      children: eg ? (0, n.jsx)(M.Z, {}) : null != ey ? (0, n.jsx)(W.Z, {
                        onRetry: ew,
                        errorOrigin: W.i.SHOP_PAGE
                      }) : (0, n.jsx)("div", {
                        className: ee.categories,
                        children: eO.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                          let {
                            products: t
                          } = e;
                          return t.length > 0
                        }).map((e, t) => (0, n.jsx)("div", {
                          ref: t => eL(e.skuId, t),
                          children: (0, n.jsx)(w.k0, {
                            newValue: {
                              categoryPosition: t
                            },
                            children: (0, n.jsx)(en, {
                              isPremiumUser: em,
                              category: e,
                              initialItemCardRef: ek,
                              setIsGiftEasterEggEnabled: eS,
                              isGiftEasterEggEnabled: eP,
                              isFullScreen: r
                            })
                          })
                        }, e.skuId))
                      })
                    })
                  });
                default:
                  return null
              }
            }(V)]
          })
        })
      }), eP && (0, n.jsx)(U.Z, {}), !r && V === Y.AW.HOME && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(q.Z, {
          peaking: er,
          transitioning: K === Y.f7.OUT
        }), (0, n.jsx)(q.Z, {
          style: {
            left: 1850
          },
          peaking: er,
          transitioning: K === Y.f7.OUT
        })]
      })]
    })
  })
}