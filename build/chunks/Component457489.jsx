/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => N
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

function S(e) {
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
        "POP" !== (0, p.s1)().action && (0, C.Z)({
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

function N(e) {
  var n, l, a, p, C;
  let {
    match: j
  } = e, {
    guildId: b,
    gameShopPageIndex: k,
    gameShopSkuId: N
  } = j.params, {
    analyticsLocations: L
  } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), T = (0, v.Z)({
    guildId: b
  }), P = (0, s.e7)([h.Z], () => h.Z.get(N), [N]);
  (0, _.p2)();
  let R = (0, c.Z)((0, r.Z)()),
    E = (0, s.e7)([f.ZP, I.default], () => f.ZP.isMember(b, I.default.getId())),
    A = i.useMemo(() => {
      if (null == k) return 0;
      let e = parseInt(k, 10);
      return isNaN(e) || null != T && null != T.storefront && e >= T.storefront.pages.length ? 0 : e
    }, [k, T]),
    M = null != (C = null == T || null == (l = T.storefront) || null == (n = l.pages[A]) ? true : n.title) ? C : null,
    y = (null == T || null == (p = T.storefront) || null == (a = p.pages[A]) ? true : a.leaderboard) != null,
    O = i.useMemo(() => ({
      sessionId: R,
      guildId: b,
      pageIndex: A,
      pageTitle: M,
      isUserGuildMember: E,
      pageHasLeaderboard: y
    }), [R, b, A, M, E, y]);
  return (i.useEffect(() => {
    null != b && (0, x.m0)(b, A, null != N ? N : null)
  }, [b, A, N]), ((null == T ? true : T.storefront) != null || (null == T ? true : T.error)) && !(null == T ? true : T.loading) && null != b && (null == T ? true : T.storefront) != null) ? (0, t.jsx)(g.Gt, {
    value: L,
    children: (0, t.jsx)(m.hL, {
      newValue: O,
      children: (0, t.jsx)(S, {
        storefront: T.storefront,
        guildId: b,
        selectedPageIndex: A,
        selectedSku: P
      })
    })
  }) : (0, t.jsx)("div", {
    className: o()(Z.spinner, Z.container),
    children: (0, t.jsx)(d.$jN, {})
  })
}