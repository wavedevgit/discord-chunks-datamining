/** Chunk was on 14078 **/
/** chunk id: 854721, original params: e,l,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => T
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

function R(e) {
  let {
    storefront: l,
    guildId: t,
    selectedPageIndex: s,
    selectedSku: i
  } = e, d = (0, m.jM)(), r = a.useRef(d);
  a.useEffect(() => {
    r.current = d
  }, [d]);
  let o = null == i ? true : i.id;
  return a.useEffect(() => {
    if (null != o) return (0, j.R)({
      skuId: o,
      applicationId: l.applicationId,
      guildId: t,
      isStorefront: true,
      analyticsLocations: [u.A.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: r.current,
      onClose: () => {
        (0, g.JK)().location.pathname.indexOf(N.BVt.CHANNELS_GAME_SHOP(t, s)) >= 0 && (0, k.A)({
          guildId: t,
          pageIndex: s
        })
      }
    }), () => {
      (0, j.j)()
    }
  }, [t, s, o, l.applicationId]), (0, n.jsxs)("div", {
    className: L.k,
    children: [(0, n.jsx)(E.A, {
      guildId: t,
      storefront: l,
      selectedPageIndex: s
    }), (0, n.jsx)(S.a, {
      applicationId: l.applicationId,
      guildId: t,
      page: l.pages[s]
    })]
  })
}

function T(e) {
  var l, t, s, g, k;
  let {
    match: j
  } = e, {
    guildId: E,
    gameShopPageIndex: S,
    gameShopSkuId: N
  } = j.params, {
    analyticsLocations: T
  } = (0, f.Ay)(u.A.SOCIAL_LAYER_STOREFRONT), C = (0, v.A)({
    guildId: E,
    location: "Social Layer Storefront"
  }), y = (0, r.bG)([I.default], () => I.default.getSessionId(), []), M = (0, r.bG)([h.A], () => h.A.get(N), [N]);
  (0, p.pE)();
  let O = (0, c.A)((0, d.A)()),
    w = (0, r.bG)([_.Ay, I.default], () => _.Ay.isMember(E, I.default.getId())),
    Y = a.useMemo(() => {
      if (null == S) return 0;
      let e = parseInt(S, 10);
      return isNaN(e) || null != C && null != C.storefront && e >= C.storefront.pages.length ? 0 : e
    }, [S, C]),
    G = null != (l = null == C || null == (s = C.storefront) || null == (t = s.pages[Y]) ? true : t.title) ? l : null,
    H = (null == C || null == (k = C.storefront) || null == (g = k.pages[Y]) ? true : g.leaderboard) != null,
    P = a.useMemo(() => ({
      sessionId: O,
      guildId: E,
      pageIndex: Y,
      pageTitle: G,
      isUserGuildMember: w,
      pageHasLeaderboard: H
    }), [O, E, Y, G, w, H]);
  return (a.useEffect(() => {
    null != E && (0, b.SP)(E, Y, null != N ? N : null)
  }, [E, Y, N]), a.useEffect(() => {
    null == E || null == y || null == x.A.getGuild(E) && (0, A.Z2)(E, {}, {
      shouldNavigate: false
    })
  }, [E, y]), null == E || (null == C ? true : C.storefront) == null) ? (0, n.jsx)("div", {
    className: i()(L.u, L.k),
    children: (0, n.jsx)(o.y$y, {})
  }) : (0, n.jsx)(f.f5, {
    value: T,
    children: (0, n.jsx)(m.E9, {
      newValue: P,
      children: (0, n.jsx)(R, {
        storefront: C.storefront,
        guildId: E,
        selectedPageIndex: Y,
        selectedSku: M
      })
    })
  })
}