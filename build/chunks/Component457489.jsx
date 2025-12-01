/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Z
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

function E(e) {
  let {
    storefront: n,
    guildId: t,
    selectedPageIndex: a,
    selectedSku: o
  } = e, s = (0, C.oR)(), r = i.useRef(s);
  return i.useEffect(() => {
    r.current = s
  }, [s]), i.useEffect(() => {
    null != o ? (0, b.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: t,
      isStorefront: true,
      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: r.current,
      onClose: () => {
        "POP" !== (0, p.s1)().action && (0, j.default)({
          guildId: t,
          pageIndex: a
        })
      }
    }) : null == o && (0, b.U)()
  }, [t, a, o, n.applicationId]), (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsx)(S.Z, {
      guildId: t,
      storefront: n,
      selectedPageIndex: a
    }), (0, l.jsx)(L.$, {
      applicationId: n.applicationId,
      guildId: t,
      page: n.pages[a]
    })]
  })
}

function Z(e) {
  var n, t, a, p, j;
  let {
    match: b
  } = e, {
    guildId: S,
    gameShopPageIndex: L,
    gameShopSkuId: Z
  } = b.params, {
    analyticsLocations: R
  } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), T = (0, k.Z)({
    guildId: S,
    location: "Social Layer Storefront"
  }), A = (0, r.e7)([I.default], () => I.default.getSessionId(), []), M = (0, r.e7)([x.Z], () => x.Z.get(Z), [Z]);
  (0, _.p2)();
  let y = (0, c.Z)((0, s.Z)()),
    O = (0, r.e7)([f.ZP, I.default], () => f.ZP.isMember(S, I.default.getId())),
    P = i.useMemo(() => {
      if (null == L) return 0;
      let e = parseInt(L, 10);
      return isNaN(e) || null != T && null != T.storefront && e >= T.storefront.pages.length ? 0 : e
    }, [L, T]),
    w = null != (j = null == T || null == (t = T.storefront) || null == (n = t.pages[P]) ? true : n.title) ? j : null,
    G = (null == T || null == (p = T.storefront) || null == (a = p.pages[P]) ? true : a.leaderboard) != null,
    B = i.useMemo(() => ({
      sessionId: y,
      guildId: S,
      pageIndex: P,
      pageTitle: w,
      isUserGuildMember: O,
      pageHasLeaderboard: G
    }), [y, S, P, w, O, G]);
  return (i.useEffect(() => {
    null != S && (0, v.m0)(S, P, null != Z ? Z : null)
  }, [S, P, Z]), i.useEffect(() => {
    null != S && null != A && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, {
      shouldNavigate: false
    })
  }, [S, A]), (null == T ? true : T.state) !== "fetched" && (null == T ? true : T.state) !== "error" || null == S || (null == T ? true : T.storefront) == null) ? (0, l.jsx)("div", {
    className: o()(N.spinner, N.container),
    children: (0, l.jsx)(d.$jN, {})
  }) : (0, l.jsx)(g.Gt, {
    value: R,
    children: (0, l.jsx)(C.hL, {
      newValue: B,
      children: (0, l.jsx)(E, {
        storefront: T.storefront,
        guildId: S,
        selectedPageIndex: P,
        selectedSku: M
      })
    })
  })
}