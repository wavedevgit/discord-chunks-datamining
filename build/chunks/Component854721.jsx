/** Chunk was on 14078 **/
/** chunk id: 854721, original params: e,l,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => R
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk594832 = require("./594832.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk67480 = require("./67480.js"),
  Chunk449054 = require("./449054.js"),
  Chunk733391 = require("./733391.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk35826 = require("./35826.js"),
  Chunk429635 = require("./429635.js"),
  Chunk317560 = require("./317560.jsx"),
  Chunk964395 = require("./964395.jsx"),
  Chunk542533 = require("./542533.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk332217 = require("./332217.js");

function L(e) {
  let {
    storefront: l,
    guildId: t,
    selectedPageIndex: a,
    selectedSku: i
  } = e, d = (0, k.jM)(), r = s.useRef(d);
  s.useEffect(() => {
    r.current = d
  }, [d]);
  let o = null == i ? true : i.id;
  return s.useEffect(() => {
    if (null != o) return (0, b.R)({
      skuId: o,
      applicationId: l.applicationId,
      guildId: t,
      isStorefront: true,
      analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: r.current,
      onClose: () => {
        (0, _.JK)().location.pathname.indexOf(C.BVt.CHANNELS_GAME_SHOP(t, a)) >= 0 && (0, v.A)({
          guildId: t,
          pageIndex: a
        })
      }
    }), () => {
      (0, b.j)()
    }
  }, [t, a, o, l.applicationId]), (0, n.jsxs)("div", {
    className: N.k,
    children: [(0, n.jsx)(E.A, {
      guildId: t,
      storefront: l,
      selectedPageIndex: a
    }), (0, n.jsx)(S.a, {
      applicationId: l.applicationId,
      guildId: t,
      page: l.pages[a]
    })]
  })
}

function R(e) {
  var l, t, a, _, v;
  let {
    match: b
  } = e, {
    guildId: E,
    gameShopPageIndex: S,
    gameShopSkuId: C
  } = b.params, {
    analyticsLocations: R
  } = (0, g.Ay)(u.A.SOCIAL_LAYER_STOREFRONT), T = (0, j.A)({
    guildId: E,
    location: "Social Layer Storefront"
  }), y = (0, r.bG)([I.default], () => I.default.getSessionId(), []), M = (0, r.bG)([h.A], () => h.A.get(C), [C]);
  (0, p.pE)();
  let O = (0, c.A)((0, d.A)()),
    w = (0, r.bG)([f.Ay, I.default], () => f.Ay.isMember(E, I.default.getId())),
    G = s.useMemo(() => {
      if (null == S) return 0;
      let e = parseInt(S, 10);
      return isNaN(e) || null != T && null != T.storefront && e >= T.storefront.pages.length ? 0 : e
    }, [S, T]),
    Y = null != (l = null == T || null == (a = T.storefront) || null == (t = a.pages[G]) ? true : t.title) ? l : null,
    P = (null == T || null == (v = T.storefront) || null == (_ = v.pages[G]) ? true : _.leaderboard) != null,
    H = s.useMemo(() => ({
      sessionId: O,
      guildId: E,
      pageIndex: G,
      pageTitle: Y,
      isUserGuildMember: w,
      pageHasLeaderboard: P
    }), [O, E, G, Y, w, P]);
  return (s.useEffect(() => {
    null != E && (0, m.SP)(E, G, null != C ? C : null)
  }, [E, G, C]), s.useEffect(() => {
    null == E || null == y || null == x.A.getGuild(E) && (0, A.Z2)(E, {}, {
      shouldNavigate: false
    })
  }, [E, y]), null == E || (null == T ? true : T.storefront) == null) ? (0, n.jsx)("div", {
    className: i()(N.u, N.k),
    children: (0, n.jsx)(o.y$y, {})
  }) : (0, n.jsx)(g.f5, {
    value: R,
    children: (0, n.jsx)(k.E9, {
      newValue: H,
      children: (0, n.jsx)(L, {
        storefront: T.storefront,
        guildId: E,
        selectedPageIndex: G,
        selectedSku: M
      })
    })
  })
}