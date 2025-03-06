/** Chunk was on 45620 **/
"use strict";
n.r(t), n.d(t, {
  default: () => el
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(979554),
  i = n(399606),
  c = n(704215),
  d = n(952265),
  u = n(481060),
  m = n(150063),
  g = n(434650),
  f = n(100527),
  h = n(906732),
  p = n(702486),
  b = n(605236),
  C = n(977395),
  _ = n(214852),
  v = n(479446),
  x = n(981632),
  j = n(290026),
  k = n(511050),
  y = n(819640),
  S = n(594174),
  O = n(626135),
  E = n(74538),
  B = n(335131),
  T = n(381585),
  I = n(597688),
  L = n(328347),
  w = n(223143),
  N = n(298228),
  P = n(937510),
  Z = n(309956),
  A = n(853748),
  R = n(426171),
  W = n(823941),
  H = n(752053),
  F = n(963102),
  M = n(508498),
  V = n(38900),
  D = n(709999),
  U = n(373113),
  z = n(141594),
  G = n(566564),
  q = n(531864),
  $ = n(302800),
  K = n(215023),
  Y = n(981631),
  X = n(921944),
  J = n(420212),
  Q = n(474936),
  ee = n(577852);

function et(e) {
  let {
    products: t,
    handleShopCardMount: n,
    header: l,
    category: a,
    isPremiumUser: s,
    isGiftEasterEggEnabled: o
  } = e, c = (0, i.e7)([S.default], () => S.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != l ? (0, r.jsx)(u.Text, {
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, r.jsx)(u.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: ee.cardsContainer,
      children: t.map((e, t) => (0, r.jsx)(T.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(D.Z, {
          onMount: n(e),
          isPremiumUser: s,
          category: a,
          product: e,
          user: c,
          isGiftEasterEggEnabled: o,
          tab: K.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function en(e) {
  var {
    category: t,
    initialItemCardRef: n
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["category", "initialItemCardRef"]);
  let s = (0, P.l)(t.products),
    o = (0, i.e7)([L.Z], () => L.Z.initialProductSkuId),
    c = l.useCallback(e => t => {
      var r;
      (e.skuId === o || (null === (r = e.variants) || void 0 === r ? void 0 : r.some(e => e.skuId === o)) === !0) && (n.current = t.current)
    }, [o, n]);
  return (0, r.jsx)(et, function(e) {
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
  }({
    products: s,
    handleShopCardMount: c,
    category: t
  }, a))
}

function er(e) {
  let {
    category: t,
    isPremiumUser: n,
    initialItemCardRef: a,
    isGiftEasterEggEnabled: o,
    setIsGiftEasterEggEnabled: i,
    showEasterEggToggle: c,
    isFullScreen: d
  } = e, m = l.useRef(10 + 70 * Math.random()), [f, h] = l.useState(!1), p = (0, $.M7)(t.skuId), b = (0, g.O)(e => {
    h(e && null != p)
  }, d ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: b,
    children: [c && (0, r.jsx)(u.P3F, {
      className: s()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: o
      }),
      onClick: () => i(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, r.jsx)(x.Z, {
        idleAnimationState: v.SR.IDLE,
        giftStyle: Q.Cj.BOX
      })
    }), (0, r.jsx)(W.Z, {
      category: t,
      hideLimitedTimeBadge: null != p
    }), (0, r.jsx)(en, {
      category: t,
      initialItemCardRef: a,
      isPremiumUser: n,
      isGiftEasterEggEnabled: o
    }), null != p && null != t.unpublishedAt && (0, r.jsx)(A.$, {
      unpublishedAt: t.unpublishedAt,
      isVisible: f,
      displayOptions: p,
      isFullScreen: d
    })]
  })
}
let el = function(e) {
  var t;
  let {
    isFullScreen: n = !0,
    tab: a = K.AW.HOME
  } = e;
  (0, _.z)(C.f);
  let {
    analyticsSource: g,
    analyticsLocations: v
  } = (0, i.cj)([L.Z], () => L.Z.getAnalytics()), {
    analyticsLocations: x
  } = (0, h.ZP)([...v, f.Z.COLLECTIBLES_SHOP]), {
    sessionId: P,
    scrollerRef: A,
    scrollHandler: W
  } = (0, p._)(Y.rMx.COLLECTIBLES_SHOP_SCROLLED, g), {
    selectedTab: D,
    transitionState: $,
    transitionToTab: et
  } = (0, Z.B)(A, a, n), [en, el] = l.useState(!1), [ea, es] = l.useState(K.IV), [eo, ei] = l.useState(), [ec, ed] = l.useState(), {
    closeIntroToOrbsClaimedCoachmark: eu
  } = (0, k.Z)({
    location: "CollectiblesShop"
  });
  l.useEffect(() => () => {
    eu()
  }, [g, eu]);
  let em = (0, i.e7)([y.Z], () => y.Z.getLayers().includes(Y.S9g.COLLECTIBLES_SHOP)),
    eg = (0, d.f9)(),
    {
      onClose: ef
    } = (0, M.Db)(),
    eh = (0, i.e7)([S.default], () => S.default.getCurrentUser()),
    ep = E.ZP.canUseCollectibles(eh),
    {
      categories: eb,
      isFetchingCategories: eC,
      fetchCategoriesError: e_,
      fetchPurchasesError: ev,
      claimError: ex,
      refreshCategories: ej
    } = (0, w.ZP)({
      location: "CollectiblesShop.web"
    }),
    ek = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : ex;
  (0, j.P)();
  let ey = (0, N.O)(eb),
    eS = l.useRef(null),
    [eO, eE] = l.useState(!1);
  (0, R.Kp)({
    isFetchingCategories: eC,
    isLayer: em,
    initialItemCardRef: eS
  }), l.useEffect(() => {
    if ($ === K.f7.VISIBLE) {
      var e;
      let t;
      t = D === K.AW.CATALOG ? ec : g, O.default.track(Y.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: x,
        source: t,
        page_session_id: P,
        page_type: D === K.AW.HOME ? "home" : "full",
        category: D === K.AW.HOME ? void 0 : null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
      })
    }
    ep || O.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Q.cd.COLLECTIBLES_SHOP,
      location_stack: x
    })
  }, [ep, x, g, P, eo, ei, ec, $, D]);
  let {
    dismissCollectiblesShopTabNewBadge: eB
  } = (0, z.Z)();
  l.useEffect(() => {
    eB(), !(0, b.un)(c.z.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.EW)(c.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: X.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eB]), l.useEffect(() => {
    n || (0, m.Y)(Y.Z5c.COLLECTIBLES_SHOP)
  }, [n]), l.useEffect(() => () => {
    (0, B.K$)({
      categories: [...eb.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [eb]), l.useEffect(() => {
    if (!n || em || eg) return;
    let e = e => {
      e.key === J.mR.Escape && ef()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [n, em, eg, ef]);
  let eT = l.useCallback(() => {
      ej()
    }, [ej]),
    {
      setCategoryRef: eI,
      handleScrollToCategory: eL
    } = (0, R.xV)(A.current),
    {
      reducedMotion: ew
    } = l.useContext(u.Sfi),
    eN = l.useRef(null),
    eP = l.useRef(null);
  (0, u.Tbt)(eN), l.useEffect(() => {
    if (!n) {
      var e;
      null === (e = eP.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let eZ = l.useCallback(async (e, t, r) => {
      let l = r && !n && !ew.enabled;
      ed(e), ei(t), await et(K.AW.CATALOG, l), t && eL(t)
    }, [eL, n, ew.enabled, et]),
    eA = (0, i.e7)([I.Z], () => {
      var e;
      return null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
    });
  return (0, r.jsx)(h.Gt, {
    value: x,
    children: (0, r.jsxs)(T.k0, {
      newValue: {
        sessionId: P,
        pageCategory: eA
      },
      children: [(0, r.jsx)("div", {
        className: ee.shop,
        ref: n ? eN : eP,
        tabIndex: -1,
        children: (0, r.jsx)(u.Den, {
          className: ee.shopScroll,
          ref: A,
          onScroll: () => {
            if (W(), null != A.current) {
              let e = A.current.getDistanceFromBottom();
              ea >= K.iA ? el(e < 20) : e <= 200 && es(ea + K.IV)
            }
          },
          children: (0, r.jsxs)("div", {
            className: s()(ee.shopViewWrapper, {
              [ee.visible]: $ === K.f7.VISIBLE,
              [ee.in]: $ === K.f7.IN,
              [ee.out]: $ === K.f7.OUT
            }),
            children: [(0, r.jsx)(F.I, {
              isFullScreen: n,
              isLayer: em,
              onClose: ef,
              handleTransition: et,
              selectedTab: D
            }), function(e) {
              switch (e) {
                case K.AW.HOME:
                case K.AW.ORBS:
                  return (0, r.jsx)(G.Z, {
                    isFullScreen: n,
                    handleTransition: eZ,
                    numVisibleItems: ea,
                    tab: e
                  });
                case K.AW.CATALOG:
                  return (0, r.jsx)("div", {
                    className: ee.pageWrapper,
                    children: (0, r.jsx)("main", {
                      className: s()(ee.page, {
                        [ee.pageFullscreen]: n
                      }),
                      children: eC ? (0, r.jsx)(V.Z, {}) : null != ek ? (0, r.jsx)(H.Z, {
                        onRetry: eT,
                        errorOrigin: H.i.SHOP_PAGE
                      }) : (0, r.jsx)("div", {
                        className: ee.categories,
                        children: ey.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                          let {
                            products: t
                          } = e;
                          return t.length > 0
                        }).map((e, t) => (0, r.jsx)("div", {
                          ref: t => eI(e.skuId, t),
                          children: (0, r.jsx)(T.k0, {
                            newValue: {
                              categoryPosition: t
                            },
                            children: (0, r.jsx)(er, {
                              isPremiumUser: ep,
                              category: e,
                              initialItemCardRef: eS,
                              setIsGiftEasterEggEnabled: eE,
                              isGiftEasterEggEnabled: eO,
                              isFullScreen: n
                            })
                          })
                        }, e.skuId))
                      })
                    })
                  });
                default:
                  return null
              }
            }(D)]
          })
        })
      }), eO && (0, r.jsx)(U.Z, {}), !n && D === K.AW.HOME && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(q.Z, {
          peaking: en,
          transitioning: $ === K.f7.OUT
        }), (0, r.jsx)(q.Z, {
          style: {
            left: 1850
          },
          peaking: en,
          transitioning: $ === K.f7.OUT
        })]
      })]
    })
  })
}