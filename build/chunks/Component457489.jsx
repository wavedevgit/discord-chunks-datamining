/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => L
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

function T(e) {
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
    children: [(0, t.jsx)(S.Z, {
      guildId: l,
      storefront: n,
      selectedPageIndex: a
    }), (0, t.jsx)(Z.$, {
      applicationId: n.applicationId,
      guildId: l,
      page: n.pages[a]
    })]
  })
}

function L(e) {
  var n, l, a, p, j;
  let {
    match: k
  } = e, {
    guildId: S,
    gameShopPageIndex: Z,
    gameShopSkuId: L
  } = k.params, {
    analyticsLocations: R
  } = (0, g.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), E = (0, b.Z)({
    guildId: S
  }), P = (0, s.e7)([f.default], () => f.default.getSessionId(), []), A = (0, s.e7)([x.Z], () => x.Z.get(L), [L]);
  (0, _.p2)();
  let M = (0, c.Z)((0, r.Z)()),
    y = (0, s.e7)([I.ZP, f.default], () => I.ZP.isMember(S, f.default.getId())),
    O = i.useMemo(() => {
      if (null == Z) return 0;
      let e = parseInt(Z, 10);
      return isNaN(e) || null != E && null != E.storefront && e >= E.storefront.pages.length ? 0 : e
    }, [Z, E]),
    w = null != (j = null == E || null == (l = E.storefront) || null == (n = l.pages[O]) ? true : n.title) ? j : null,
    G = (null == E || null == (p = E.storefront) || null == (a = p.pages[O]) ? true : a.leaderboard) != null,
    W = i.useMemo(() => ({
      sessionId: M,
      guildId: S,
      pageIndex: O,
      pageTitle: w,
      isUserGuildMember: y,
      pageHasLeaderboard: G
    }), [M, S, O, w, y, G]);
  return (i.useEffect(() => {
    null != S && (0, v.m0)(S, O, null != L ? L : null)
  }, [S, O, L]), i.useEffect(() => {
    null != S && null != P && null == h.Z.getGuild(S) && (0, m.Ub)(S, {}, {
      shouldNavigate: false
    })
  }, [S, P]), ((null == E ? true : E.storefront) != null || (null == E ? true : E.error)) && !(null == E ? true : E.loading) && null != S && (null == E ? true : E.storefront) != null) ? (0, t.jsx)(g.Gt, {
    value: R,
    children: (0, t.jsx)(C.hL, {
      newValue: W,
      children: (0, t.jsx)(T, {
        storefront: E.storefront,
        guildId: S,
        selectedPageIndex: O,
        selectedSku: A
      })
    })
  }) : (0, t.jsx)("div", {
    className: o()(N.spinner, N.container),
    children: (0, t.jsx)(d.$jN, {})
  })
}