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
  m = n(150063),
  g = n(434650),
  h = n(100527),
  f = n(906732),
  p = n(702486),
  b = n(605236),
  C = n(977395),
  _ = n(214852),
  v = n(479446),
  x = n(981632),
  k = n(290026),
  j = n(511050),
  S = n(819640),
  y = n(594174),
  O = n(626135),
  B = n(74538),
  E = n(335131),
  T = n(381585),
  I = n(597688),
  N = n(328347),
  L = n(223143),
  Z = n(298228),
  w = n(937510),
  P = n(309956),
  A = n(853748),
  W = n(426171),
  H = n(823941),
  R = n(752053),
  F = n(963102),
  M = n(508498),
  V = n(38900),
  D = n(709999),
  z = n(373113),
  U = n(141594),
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
  let s = (0, w.l)(t.products),
    o = (0, i.e7)([N.Z], () => N.Z.initialProductSkuId),
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
  } = e, m = l.useRef(10 + 70 * Math.random()), [h, f] = l.useState(!1), p = (0, $.M7)(t.skuId), b = (0, g.O)(e => {
    f(e && null != p)
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
        left: "".concat(m.current, "%")
      },
      children: (0, r.jsx)(x.Z, {
        idleAnimationState: v.SR.IDLE,
        giftStyle: Q.Cj.BOX
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
      isVisible: h,
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
    analyticsSource: g,
    analyticsLocations: v
  } = (0, i.cj)([N.Z], () => N.Z.getAnalytics()), {
    analyticsLocations: x
  } = (0, f.ZP)([...v, h.Z.COLLECTIBLES_SHOP]), {
    sessionId: w,
    scrollerRef: A,
    scrollHandler: H
  } = (0, p._)(Y.rMx.COLLECTIBLES_SHOP_SCROLLED, g), {
    selectedTab: D,
    transitionState: $,
    transitionToTab: et
  } = (0, P.B)(A, a, n), [en, el] = l.useState(!1), [ea, es] = l.useState(K.IV), [eo, ei] = l.useState(), [ed, ec] = l.useState(), {
    closeIntroToOrbsClaimedCoachmark: eu
  } = (0, j.Z)({
    location: "CollectiblesShop"
  });
  l.useEffect(() => () => {
    eu()
  }, [g, eu]);
  let em = (0, i.e7)([S.Z], () => S.Z.getLayers().includes(Y.S9g.COLLECTIBLES_SHOP)),
    eg = (0, c.f9)(),
    {
      onClose: eh
    } = (0, M.Db)(),
    ef = (0, i.e7)([y.default], () => y.default.getCurrentUser()),
    ep = B.ZP.canUseCollectibles(ef),
    {
      categories: eb,
      isFetchingCategories: eC,
      fetchCategoriesError: e_,
      fetchPurchasesError: ev,
      claimError: ex,
      refreshCategories: ek
    } = (0, L.ZP)({
      location: "CollectiblesShop.web"
    }),
    ej = null !== (t = null != e_ ? e_ : ev) && void 0 !== t ? t : ex;
  (0, k.P)();
  let eS = (0, Z.O)(eb),
    ey = l.useRef(null),
    [eO, eB] = l.useState(!1);
  (0, W.Kp)({
    isFetchingCategories: eC,
    isLayer: em,
    initialItemCardRef: ey
  }), l.useEffect(() => {
    if ($ === K.f7.VISIBLE) {
      var e;
      let t;
      t = D === K.AW.CATALOG ? ed : g, O.default.track(Y.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: x,
        source: t,
        page_session_id: w,
        page_type: D === K.AW.HOME ? "home" : "full",
        category: D === K.AW.HOME ? void 0 : null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
      })
    }
    ep || O.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Q.cd.COLLECTIBLES_SHOP,
      location_stack: x
    })
  }, [ep, x, g, w, eo, ei, ed, $, D]);
  let {
    dismissCollectiblesShopTabNewBadge: eE
  } = (0, U.Z)();
  l.useEffect(() => {
    eE(), !(0, b.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: X.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eE]), l.useEffect(() => {
    n || (0, m.Y)(Y.Z5c.COLLECTIBLES_SHOP)
  }, [n]), l.useEffect(() => () => {
    (0, E.K$)({
      categories: [...eb.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [eb]), l.useEffect(() => {
    if (!n || em || eg) return;
    let e = e => {
      e.key === J.mR.Escape && eh()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [n, em, eg, eh]);
  let eT = l.useCallback(() => {
      ek()
    }, [ek]),
    {
      setCategoryRef: eI,
      handleScrollToCategory: eN
    } = (0, W.xV)(A.current),
    {
      reducedMotion: eL
    } = l.useContext(u.Sfi),
    eZ = l.useRef(null),
    ew = l.useRef(null);
  (0, u.Tbt)(eZ), l.useEffect(() => {
    if (!n) {
      var e;
      null === (e = ew.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let eP = l.useCallback(async (e, t, r) => {
      let l = r && !n && !eL.enabled;
      ec(e), ei(t), await et(K.AW.CATALOG, l), t && eN(t)
    }, [eN, n, eL.enabled, et]),
    eA = (0, i.e7)([I.Z], () => {
      var e;
      return null === (e = I.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
    });
  return (0, r.jsx)(f.Gt, {
    value: x,
    children: (0, r.jsxs)(T.k0, {
      newValue: {
        sessionId: w,
        pageCategory: eA
      },
      children: [(0, r.jsx)("div", {
        className: ee.shop,
        ref: n ? eZ : ew,
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
              isLayer: em,
              onClose: eh,
              handleTransition: et,
              selectedTab: D
            }), function(e) {
              switch (e) {
                case K.AW.HOME:
                case K.AW.ORBS:
                  return (0, r.jsx)(G.Z, {
                    isFullScreen: n,
                    handleTransition: eP,
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
                              setIsGiftEasterEggEnabled: eB,
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
      }), eO && (0, r.jsx)(z.Z, {}), !n && D === K.AW.HOME && (0, r.jsxs)(r.Fragment, {
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