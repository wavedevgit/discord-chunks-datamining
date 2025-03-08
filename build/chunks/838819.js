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
  d = n(704215),
  c = n(952265),
  u = n(481060),
  g = n(150063),
  h = n(434650),
  f = n(100527),
  m = n(906732),
  p = n(702486),
  b = n(605236),
  C = n(977395),
  _ = n(214852),
  x = n(479446),
  v = n(981632),
  k = n(290026),
  j = n(511050),
  S = n(819640),
  y = n(594174),
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
  W = n(426171),
  H = n(823941),
  R = n(752053),
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
  Q = n(981631),
  X = n(921944),
  Y = n(420212),
  J = n(474936),
  ee = n(577852);

function et(e) {
  let {
    products: t,
    handleShopCardMount: n,
    header: l,
    category: a,
    isPremiumUser: s,
    isGiftEasterEggEnabled: o
  } = e, d = (0, i.e7)([y.default], () => y.default.getCurrentUser());
  return null == d || 0 === t.length ? null : (0, r.jsxs)("div", {
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
          user: d,
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
    d = l.useCallback(e => t => {
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
    handleShopCardMount: d,
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
    showEasterEggToggle: d,
    isFullScreen: c
  } = e, g = l.useRef(10 + 70 * Math.random()), [f, m] = l.useState(!1), p = (0, $.M7)(t.skuId), b = (0, h.O)(e => {
    m(e && null != p)
  }, c ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: b,
    children: [d && (0, r.jsx)(u.P3F, {
      className: s()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: o
      }),
      onClick: () => i(!0),
      style: {
        left: "".concat(g.current, "%")
      },
      children: (0, r.jsx)(v.Z, {
        idleAnimationState: x.SR.IDLE,
        giftStyle: J.Cj.BOX
      })
    }), (0, r.jsx)(H.Z, {
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
      isFullScreen: c
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
    analyticsSource: h,
    analyticsLocations: x
  } = (0, i.cj)([L.Z], () => L.Z.getAnalytics()), {
    analyticsLocations: v
  } = (0, m.ZP)([...x, f.Z.COLLECTIBLES_SHOP]), {
    sessionId: P,
    scrollerRef: A,
    scrollHandler: H
  } = (0, p._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, h), {
    selectedTab: D,
    transitionState: $,
    transitionToTab: et
  } = (0, Z.B)(A, a, n), [en, el] = l.useState(!1), [ea, es] = l.useState(K.IV), [eo, ei] = l.useState(), [ed, ec] = l.useState(), {
    closeIntroToOrbsClaimedCoachmark: eu
  } = (0, j.Z)({
    location: "CollectiblesShop"
  });
  l.useEffect(() => () => {
    eu()
  }, [h, eu]);
  let eg = (0, i.e7)([S.Z], () => S.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
    eh = (0, c.f9)(),
    {
      onClose: ef
    } = (0, M.Db)(),
    em = (0, i.e7)([y.default], () => y.default.getCurrentUser()),
    ep = E.ZP.canUseCollectibles(em),
    {
      categories: eb,
      isFetchingCategories: eC,
      fetchCategoriesError: e_,
      fetchPurchasesError: ex,
      claimError: ev,
      refreshCategories: ek
    } = (0, w.ZP)({
      location: "CollectiblesShop.web"
    }),
    ej = null !== (t = null != e_ ? e_ : ex) && void 0 !== t ? t : ev;
  (0, k.P)();
  let eS = (0, N.O)(eb),
    ey = l.useRef(null),
    [eO, eE] = l.useState(!1);
  (0, W.Kp)({
    isFetchingCategories: eC,
    isLayer: eg,
    initialItemCardRef: ey
  }), l.useEffect(() => {
    if ($ === K.f7.VISIBLE) {
      var e;
      let t;
      t = D === K.AW.CATALOG ? ed : h, O.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: v,
        source: t,
        page_session_id: P,
        page_type: D === K.AW.HOME ? "home" : "full",
        category: D === K.AW.HOME ? void 0 : null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
      })
    }
    ep || O.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
      type: J.cd.COLLECTIBLES_SHOP,
      location_stack: v
    })
  }, [ep, v, h, P, eo, ei, ed, $, D]);
  let {
    dismissCollectiblesShopTabNewBadge: eB
  } = (0, z.Z)();
  l.useEffect(() => {
    eB(), !(0, b.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: X.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eB]), l.useEffect(() => {
    n || (0, g.Y)(Q.Z5c.COLLECTIBLES_SHOP)
  }, [n]), l.useEffect(() => () => {
    (0, B.K$)({
      categories: [...eb.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [eb]), l.useEffect(() => {
    if (!n || eg || eh) return;
    let e = e => {
      e.key === Y.mR.Escape && ef()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [n, eg, eh, ef]);
  let eT = l.useCallback(() => {
      ek()
    }, [ek]),
    {
      setCategoryRef: eI,
      handleScrollToCategory: eL
    } = (0, W.xV)(A.current),
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
      ec(e), ei(t), await et(K.AW.CATALOG, l), t && eL(t)
    }, [eL, n, ew.enabled, et]),
    eA = (0, i.e7)([I.Z], () => {
      var e;
      return null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
    });
  return (0, r.jsx)(m.Gt, {
    value: v,
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
            if (H(), null != A.current) {
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
              isLayer: eg,
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
                      children: eC ? (0, r.jsx)(V.Z, {}) : null != ej ? (0, r.jsx)(R.Z, {
                        onRetry: eT,
                        errorOrigin: R.i.SHOP_PAGE
                      }) : (0, r.jsx)("div", {
                        className: ee.categories,
                        children: eS.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
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
                              initialItemCardRef: ey,
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