/** Chunk was on 45620 **/
"use strict";
n.r(t), n.d(t, {
  default: () => es
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  i = n(180650),
  s = n(979554),
  c = n(399606),
  u = n(704215),
  d = n(952265),
  b = n(481060),
  p = n(150063),
  f = n(434650),
  g = n(100527),
  h = n(906732),
  m = n(702486),
  v = n(605236),
  _ = n(977395),
  C = n(214852),
  x = n(479446),
  O = n(981632),
  y = n(290026),
  j = n(511050),
  k = n(819640),
  S = n(594174),
  P = n(626135),
  E = n(74538),
  I = n(335131),
  w = n(381585),
  B = n(597688),
  T = n(328347),
  N = n(139668),
  L = n(370039),
  Z = n(223143),
  R = n(298228),
  A = n(937510),
  F = n(309956),
  W = n(853748),
  D = n(426171),
  H = n(823941),
  M = n(752053),
  V = n(963102),
  U = n(508498),
  G = n(38900),
  z = n(709999),
  q = n(373113),
  K = n(681435),
  Y = n(566564),
  $ = n(531864),
  J = n(302800),
  X = n(215023),
  Q = n(981631),
  ee = n(921944),
  et = n(420212),
  en = n(474936),
  er = n(577852);

function el(e) {
  let {
    products: t,
    handleShopCardMount: n,
    header: l,
    category: o,
    isPremiumUser: a,
    isGiftEasterEggEnabled: i
  } = e, s = (0, c.e7)([S.default], () => S.default.getCurrentUser());
  return null == s || 0 === t.length ? null : (0, r.jsxs)("div", {
    children: [null != l ? (0, r.jsx)(b.Text, {
      className: er.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: l
    }) : (0, r.jsx)(b.LZC, {
      size: 24
    }), (0, r.jsx)("div", {
      className: er.cardsContainer,
      children: t.map((e, t) => (0, r.jsx)(w.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(z.Z, {
          onMount: n(e),
          isPremiumUser: a,
          category: o,
          product: e,
          user: s,
          isGiftEasterEggEnabled: i,
          tab: X.AW.CATALOG
        }, e.skuId)
      }, e.skuId))
    })]
  })
}

function eo(e) {
  var {
    category: t,
    initialItemCardRef: n
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["category", "initialItemCardRef"]);
  let a = (0, A.l)(t.products),
    i = (0, L.a)()(a),
    s = (0, c.e7)([T.Z], () => T.Z.initialProductSkuId),
    u = l.useCallback(e => t => {
      var r;
      (e.skuId === s || (null === (r = e.variants) || void 0 === r ? void 0 : r.some(e => e.skuId === s)) === !0) && (n.current = t.current)
    }, [s, n]);
  return (0, r.jsx)(el, function(e) {
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
    products: i,
    handleShopCardMount: u,
    category: t
  }, o))
}
let ea = e => {
  let {
    isFullScreen: t,
    tab: n
  } = e;
  return !t && n !== X.AW.CATALOG
};

function ei(e) {
  let {
    category: t,
    isPremiumUser: n,
    initialItemCardRef: o,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: s,
    showEasterEggToggle: c,
    isFullScreen: u
  } = e, d = l.useRef(10 + 70 * Math.random()), [p, g] = l.useState(!1), h = (0, J.M7)(t.skuId), m = (0, f.O)(e => {
    g(e && null != h)
  }, u ? .13 : .15);
  return (0, r.jsxs)("div", {
    className: er.categoryWrapper,
    ref: m,
    children: [c && (0, r.jsx)(b.P3F, {
      className: a()(er.hiddenWumpus, {
        [er.hiddenWumpusEnabled]: i
      }),
      onClick: () => s(!0),
      style: {
        left: "".concat(d.current, "%")
      },
      children: (0, r.jsx)(O.Z, {
        idleAnimationState: x.SR.IDLE,
        giftStyle: en.Cj.BOX
      })
    }), (0, r.jsx)(H.Z, {
      category: t,
      hideLimitedTimeBadge: null != h
    }), (0, r.jsx)(eo, {
      category: t,
      initialItemCardRef: o,
      isPremiumUser: n,
      isGiftEasterEggEnabled: i
    }), null != h && null != t.unpublishedAt && (0, r.jsx)(W.$, {
      unpublishedAt: t.unpublishedAt,
      isVisible: p,
      displayOptions: h,
      isFullScreen: u
    })]
  })
}
let es = function(e) {
  var t;
  let {
    isFullScreen: n = !0,
    tab: o = X.AW.HOME
  } = e;
  (0, C.z)(_.f);
  let {
    analyticsSource: f,
    analyticsLocations: x
  } = (0, c.cj)([T.Z], () => T.Z.getAnalytics()), {
    analyticsLocations: O
  } = (0, h.ZP)([...x, g.Z.COLLECTIBLES_SHOP]), {
    sessionId: L,
    scrollerRef: A,
    scrollHandler: W
  } = (0, m._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, f), {
    selectedTab: H,
    transitionState: z,
    transitionToTab: J
  } = (0, F.B)(A, o, n), [el, eo] = l.useState(!1), es = (0, N.R)("CollectiblesShop"), [ec, eu] = l.useState(X.IV), [ed, eb] = l.useState(), [ep, ef] = l.useState(), {
    closeIntroToOrbsClaimedCoachmark: eg
  } = (0, j.Z)({
    location: "CollectiblesShop"
  });
  l.useEffect(() => () => {
    eg()
  }, [f, eg]);
  let eh = (0, c.e7)([k.Z], () => k.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
    em = (0, d.f9)(),
    {
      onClose: ev
    } = (0, U.Db)(),
    e_ = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
    eC = E.ZP.canUseCollectibles(e_),
    {
      categories: ex,
      isFetchingCategories: eO,
      fetchCategoriesError: ey,
      fetchPurchasesError: ej,
      claimError: ek,
      refreshCategories: eS
    } = (0, Z.ZP)({
      location: "CollectiblesShop.web"
    }),
    eP = null !== (t = null != ey ? ey : ej) && void 0 !== t ? t : ek;
  (0, y.P)();
  let eE = (0, R.O)(ex),
    eI = l.useRef(null),
    [ew, eB] = l.useState(!1);
  (0, D.Kp)({
    isFetchingCategories: eO,
    isLayer: eh,
    initialItemCardRef: eI
  }), l.useEffect(() => {
    if (z === X.f7.VISIBLE) {
      var e;
      let t;
      t = H === X.AW.CATALOG ? ep : f, P.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
        location_stack: O,
        source: t,
        page_session_id: L,
        page_type: H === X.AW.HOME ? "home" : "full",
        category: H === X.AW.HOME ? void 0 : null === (e = B.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name
      })
    }
    eC || P.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
      type: en.cd.COLLECTIBLES_SHOP,
      location_stack: O
    })
  }, [eC, O, f, L, ed, eb, ep, z, H]);
  let {
    dismissShopButtonDC: eT
  } = (0, K.Z)();
  l.useEffect(() => {
    eT(), !(0, v.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK) && (0, v.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: ee.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eT]), l.useEffect(() => {
    n || (0, p.Y)(Q.Z5c.COLLECTIBLES_SHOP)
  }, [n]), l.useEffect(() => () => {
    (0, I.K$)({
      categories: [...ex.values()],
      itemTypes: [s.Z.AVATAR_DECORATION, s.Z.PROFILE_EFFECT]
    })
  }, [ex]), l.useEffect(() => {
    if (!n || eh || em) return;
    let e = e => {
      e.key === et.mR.Escape && ev()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [n, eh, em, ev]);
  let eN = l.useCallback(() => {
      eS()
    }, [eS]),
    {
      setCategoryRef: eL,
      handleScrollToCategory: eZ
    } = (0, D.xV)(A.current),
    {
      reducedMotion: eR
    } = l.useContext(b.Sfi),
    eA = l.useRef(null),
    eF = l.useRef(null);
  (0, b.Tbt)(eA), l.useEffect(() => {
    if (!n) {
      var e;
      null === (e = eF.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let eW = l.useCallback(async (e, t, r) => {
      let l = r && !n && !eR.enabled;
      ef(e), eb(t), t === i.T.ORB ? await J(X.AW.ORBS, r) : (await J(X.AW.CATALOG, l), t && eZ(t))
    }, [eZ, n, eR.enabled, J]),
    eD = (0, c.e7)([B.Z], () => {
      var e;
      return null === (e = B.Z.getCategory(ed)) || void 0 === e ? void 0 : e.name
    });
  return (0, r.jsx)(h.Gt, {
    value: O,
    children: (0, r.jsxs)(w.k0, {
      newValue: {
        sessionId: L,
        pageCategory: eD
      },
      children: [(0, r.jsx)("div", {
        className: er.shop,
        ref: n ? eA : eF,
        tabIndex: -1,
        children: (0, r.jsx)(b.Den, {
          className: er.shopScroll,
          ref: A,
          onScroll: () => {
            if (W(), null != A.current) {
              let e = A.current.getDistanceFromBottom();
              ec >= es ? eo(e < 20) : e <= 200 && eu(ec + X.IV)
            }
          },
          children: (0, r.jsxs)("div", {
            className: a()(er.shopViewWrapper, {
              [er.visible]: z === X.f7.VISIBLE,
              [er.in]: z === X.f7.IN,
              [er.out]: z === X.f7.OUT
            }),
            children: [(0, r.jsx)(V.I, {
              isFullScreen: n,
              isLayer: eh,
              onClose: ev,
              handleTransition: J,
              selectedTab: H
            }), function(e) {
              switch (e) {
                case X.AW.HOME:
                case X.AW.ORBS:
                  return (0, r.jsx)(Y.Z, {
                    isFullScreen: n,
                    handleTransition: eW,
                    numVisibleItems: ec,
                    tab: e
                  });
                case X.AW.CATALOG:
                  return (0, r.jsx)("div", {
                    className: er.pageWrapper,
                    children: (0, r.jsx)("main", {
                      className: a()(er.page, {
                        [er.pageFullscreen]: n
                      }),
                      children: eO ? (0, r.jsx)(G.Z, {}) : null != eP ? (0, r.jsx)(M.Z, {
                        onRetry: eN,
                        errorOrigin: M.i.SHOP_PAGE
                      }) : (0, r.jsx)("div", {
                        className: er.categories,
                        children: eE.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                          let {
                            products: t
                          } = e;
                          return t.length > 0
                        }).map((e, t) => (0, r.jsx)("div", {
                          ref: t => eL(e.skuId, t),
                          children: (0, r.jsx)(w.k0, {
                            newValue: {
                              categoryPosition: t
                            },
                            children: (0, r.jsx)(ei, {
                              isPremiumUser: eC,
                              category: e,
                              initialItemCardRef: eI,
                              setIsGiftEasterEggEnabled: eB,
                              isGiftEasterEggEnabled: ew,
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
            }(H)]
          })
        })
      }), ew && (0, r.jsx)(q.Z, {}), ea({
        isFullScreen: n,
        tab: o
      }) && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)($.Z, {
          peaking: el,
          transitioning: z === X.f7.OUT
        }), (0, r.jsx)($.Z, {
          style: {
            left: 1850
          },
          peaking: el,
          transitioning: z === X.f7.OUT
        })]
      })]
    })
  })
}