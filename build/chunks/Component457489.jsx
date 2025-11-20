/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => P
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
  } = e;
  return i.useEffect(() => {
    null != o ? (0, C.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: l,
      isStorefront: true,
      onClose: () => {
        "POP" !== (0, g.s1)().action && (0, j.Z)({
          guildId: l,
          pageIndex: a
        })
      }
    }) : null == o && (0, C.U)()
  }, [l, a, o, n.applicationId]), (0, t.jsxs)("div", {
    className: Z.container,
    children: [(0, t.jsx)(k.Z, {
      guildId: l,
      storefront: n,
      selectedPageIndex: a
    }), (0, t.jsx)(b.$, {
      applicationId: n.applicationId,
      guildId: l,
      page: n.pages[a]
    })]
  })
}

function P(e) {
  var n, l, a;
  let {
    match: g
  } = e, {
    guildId: j,
    gameShopPageIndex: C,
    gameShopSkuId: k
  } = g.params, {
    analyticsLocations: b
  } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), P = (0, v.Z)({
    guildId: j
  }), S = (0, r.e7)([m.Z], () => m.Z.get(k), [k]);
  (0, I.p2)();
  let T = (0, c.Z)((0, d.Z)()),
    L = (0, r.e7)([h.ZP, x.default], () => h.ZP.isMember(j, x.default.getId())),
    M = i.useMemo(() => {
      if (null == C) return 0;
      let e = parseInt(C, 10);
      return isNaN(e) || null != P && null != P.storefront && e >= P.storefront.pages.length ? 0 : e
    }, [C, P]),
    y = null != (a = null == P || null == (l = P.storefront) || null == (n = l.pages[M]) ? true : n.title) ? a : null,
    A = i.useMemo(() => ({
      sessionId: T,
      guildId: j,
      pageIndex: M,
      pageTitle: y,
      isUserGuildMember: L
    }), [T, j, M, y, L]);
  return (i.useEffect(() => {
    null != j && (0, _.m0)(j, M, null != k ? k : null)
  }, [j, M, k]), ((null == P ? true : P.storefront) != null || (null == P ? true : P.error)) && !(null == P ? true : P.loading) && null != j && (null == P ? true : P.storefront) != null) ? (0, t.jsx)(p.Gt, {
    value: b,
    children: (0, t.jsx)(f.hL, {
      newValue: A,
      children: (0, t.jsx)(N, {
        storefront: P.storefront,
        guildId: j,
        selectedPageIndex: M,
        selectedSku: S
      })
    })
  }) : (0, t.jsx)("div", {
    className: o()(Z.spinner, Z.container),
    children: (0, t.jsx)(s.$jN, {})
  })
}