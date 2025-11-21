/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => T
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

function L(e) {
  let {
    storefront: n,
    guildId: l,
    selectedPageIndex: a,
    selectedSku: o
  } = e, r = (0, C.oR)(), s = i.useRef(r);
  return i.useEffect(() => {
    s.current = r
  }, [r]), i.useEffect(() => {
    null != o ? (0, k.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: l,
      isStorefront: true,
      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: s.current,
      onClose: () => {
        "POP" !== (0, p.s1)().action && (0, j.Z)({
          guildId: l,
          pageIndex: a
        })
      }
    }) : null == o && (0, k.U)()
  }, [l, a, o, n.applicationId]), (0, t.jsxs)("div", {
    className: N.container,
    children: [(0, t.jsx)(Z.Z, {
      guildId: l,
      storefront: n,
      selectedPageIndex: a
    }), (0, t.jsx)(S.$, {
      applicationId: n.applicationId,
      guildId: l,
      page: n.pages[a]
    })]
  })
}

function T(e) {
  var n, l, a, p, j;
  let {
    match: k
  } = e, {
    guildId: Z,
    gameShopPageIndex: S,
    gameShopSkuId: T
  } = k.params, {
    analyticsLocations: P
  } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), R = (0, b.Z)({
    guildId: Z
  }), E = (0, s.e7)([_.default], () => _.default.getSessionId(), []), A = (0, s.e7)([x.Z], () => x.Z.get(T), [T]);
  (0, f.p2)();
  let M = (0, c.Z)((0, r.Z)()),
    y = (0, s.e7)([I.ZP, _.default], () => I.ZP.isMember(Z, _.default.getId())),
    O = i.useMemo(() => {
      if (null == S) return 0;
      let e = parseInt(S, 10);
      return isNaN(e) || null != R && null != R.storefront && e >= R.storefront.pages.length ? 0 : e
    }, [S, R]),
    w = null != (j = null == R || null == (l = R.storefront) || null == (n = l.pages[O]) ? true : n.title) ? j : null,
    W = (null == R || null == (p = R.storefront) || null == (a = p.pages[O]) ? true : a.leaderboard) != null,
    G = i.useMemo(() => ({
      sessionId: M,
      guildId: Z,
      pageIndex: O,
      pageTitle: w,
      isUserGuildMember: y,
      pageHasLeaderboard: W
    }), [M, Z, O, w, y, W]);
  return (i.useEffect(() => {
    null != Z && (0, v.m0)(Z, O, null != T ? T : null)
  }, [Z, O, T]), i.useEffect(() => {
    null != Z && null != E && null == h.Z.getGuild(Z) && (0, m.Ub)(Z, {}, {
      shouldNavigate: false
    })
  }, [Z, E]), ((null == R ? true : R.storefront) != null || (null == R ? true : R.error)) && !(null == R ? true : R.loading) && null != Z && (null == R ? true : R.storefront) != null) ? (0, t.jsx)(g.Gt, {
    value: P,
    children: (0, t.jsx)(C.hL, {
      newValue: G,
      children: (0, t.jsx)(L, {
        storefront: R.storefront,
        guildId: Z,
        selectedPageIndex: O,
        selectedSku: A
      })
    })
  }) : (0, t.jsx)("div", {
    className: o()(N.spinner, N.container),
    children: (0, t.jsx)(d.$jN, {})
  })
}