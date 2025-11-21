/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => S
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
  Chunk55563 = require("./55563.js"),
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
    guildId: l,
    selectedPageIndex: a,
    selectedSku: o
  } = e, r = (0, m.oR)(), s = i.useRef(r);
  return i.useEffect(() => {
    s.current = r
  }, [r]), i.useEffect(() => {
    null != o ? (0, j.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: l,
      isStorefront: true,
      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: s.current,
      onClose: () => {
        "POP" !== (0, g.s1)().action && (0, C.Z)({
          guildId: l,
          pageIndex: a
        })
      }
    }) : null == o && (0, j.U)()
  }, [l, a, o, n.applicationId]), (0, t.jsxs)("div", {
    className: Z.container,
    children: [(0, t.jsx)(b.Z, {
      guildId: l,
      storefront: n,
      selectedPageIndex: a
    }), (0, t.jsx)(k.$, {
      applicationId: n.applicationId,
      guildId: l,
      page: n.pages[a]
    })]
  })
}

function S(e) {
  var n, l, a, g, C;
  let {
    match: j
  } = e, {
    guildId: b,
    gameShopPageIndex: k,
    gameShopSkuId: S
  } = j.params, {
    analyticsLocations: L
  } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), T = (0, v.Z)({
    guildId: b
  }), P = (0, s.e7)([f.Z], () => f.Z.get(S), [S]);
  (0, I.p2)();
  let A = (0, c.Z)((0, r.Z)()),
    R = (0, s.e7)([_.ZP, x.default], () => _.ZP.isMember(b, x.default.getId())),
    y = i.useMemo(() => {
      if (null == k) return 0;
      let e = parseInt(k, 10);
      return isNaN(e) || null != T && null != T.storefront && e >= T.storefront.pages.length ? 0 : e
    }, [k, T]),
    E = null != (C = null == T || null == (l = T.storefront) || null == (n = l.pages[y]) ? true : n.title) ? C : null,
    M = (null == T || null == (g = T.storefront) || null == (a = g.pages[y]) ? true : a.leaderboard) != null,
    O = i.useMemo(() => ({
      sessionId: A,
      guildId: b,
      pageIndex: y,
      pageTitle: E,
      isUserGuildMember: R,
      pageHasLeaderboard: M
    }), [A, b, y, E, R, M]);
  return (i.useEffect(() => {
    null != b && (0, h.m0)(b, y, null != S ? S : null)
  }, [b, y, S]), ((null == T ? true : T.storefront) != null || (null == T ? true : T.error)) && !(null == T ? true : T.loading) && null != b && (null == T ? true : T.storefront) != null) ? (0, t.jsx)(p.Gt, {
    value: L,
    children: (0, t.jsx)(m.hL, {
      newValue: O,
      children: (0, t.jsx)(N, {
        storefront: T.storefront,
        guildId: b,
        selectedPageIndex: y,
        selectedSku: P
      })
    })
  }) : (0, t.jsx)("div", {
    className: o()(Z.spinner, Z.container),
    children: (0, t.jsx)(d.$jN, {})
  })
}