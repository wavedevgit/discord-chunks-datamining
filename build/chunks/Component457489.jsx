/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => R
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk602733 = require("./602733.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk55563 = require("./55563.js"),
  Chunk900849 = require("./900849.js"),
  Chunk411935 = require("./411935.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk417317 = require("./417317.js"),
  Chunk705338 = require("./705338.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk140594 = require("./140594.js");

function N(e) {
  let {
    storefront: n,
    guildId: t,
    selectedPageIndex: a,
    selectedSku: o
  } = e, r = (0, C.oR)(), s = i.useRef(r);
  return i.useEffect(() => {
    s.current = r
  }, [r]), i.useEffect(() => {
    null != o ? (0, j.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: t,
      isStorefront: true,
      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: s.current,
      onClose: () => {
        "POP" !== (0, p.s1)().action && (0, k.Z)({
          guildId: t,
          pageIndex: a
        })
      }
    }) : null == o && (0, j.U)()
  }, [t, a, o, n.applicationId]), (0, l.jsxs)("div", {
    className: E.container,
    children: [(0, l.jsx)(S.Z, {
      guildId: t,
      storefront: n,
      selectedPageIndex: a
    }), (0, l.jsx)(Z.$, {
      applicationId: n.applicationId,
      guildId: t,
      page: n.pages[a]
    })]
  })
}

function R(e) {
  var n, t, a, p, k;
  let {
    match: j
  } = e, {
    guildId: S,
    gameShopPageIndex: Z,
    gameShopSkuId: R
  } = j.params, {
    analyticsLocations: T
  } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), L = (0, b.Z)({
    guildId: S
  }), A = (0, s.e7)([f.default], () => f.default.getSessionId(), []), M = (0, s.e7)([x.Z], () => x.Z.get(R), [R]);
  (0, _.p2)();
  let O = (0, c.Z)((0, r.Z)()),
    P = (0, s.e7)([I.ZP, f.default], () => I.ZP.isMember(S, f.default.getId())),
    y = i.useMemo(() => {
      if (null == Z) return 0;
      let e = parseInt(Z, 10);
      return isNaN(e) || null != L && null != L.storefront && e >= L.storefront.pages.length ? 0 : e
    }, [Z, L]),
    w = null != (k = null == L || null == (t = L.storefront) || null == (n = t.pages[y]) ? true : n.title) ? k : null,
    G = (null == L || null == (p = L.storefront) || null == (a = p.pages[y]) ? true : a.leaderboard) != null,
    B = i.useMemo(() => ({
      sessionId: O,
      guildId: S,
      pageIndex: y,
      pageTitle: w,
      isUserGuildMember: P,
      pageHasLeaderboard: G
    }), [O, S, y, w, P, G]);
  return (i.useEffect(() => {
    null != S && (0, v.m0)(S, y, null != R ? R : null)
  }, [S, y, R]), i.useEffect(() => {
    null != S && null != A && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, {
      shouldNavigate: false
    })
  }, [S, A]), (null == L ? true : L.state) !== "fetched" && (null == L ? true : L.state) !== "error" || null == S || (null == L ? true : L.storefront) == null) ? (0, l.jsx)("div", {
    className: o()(E.spinner, E.container),
    children: (0, l.jsx)(d.$jN, {})
  }) : (0, l.jsx)(g.Gt, {
    value: T,
    children: (0, l.jsx)(C.hL, {
      newValue: B,
      children: (0, l.jsx)(N, {
        storefront: L.storefront,
        guildId: S,
        selectedPageIndex: y,
        selectedSku: M
      })
    })
  })
}