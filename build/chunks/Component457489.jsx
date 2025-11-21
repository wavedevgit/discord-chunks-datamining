/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,t (module,exports,require) **/
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
    guildId: t,
    selectedPageIndex: a,
    selectedSku: o
  } = e, s = (0, m.oR)(), r = i.useRef(s);
  return i.useEffect(() => {
    r.current = s
  }, [s]), i.useEffect(() => {
    null != o ? (0, j.g)({
      skuId: o.id,
      applicationId: n.applicationId,
      guildId: t,
      isStorefront: true,
      analyticsLocations: [u.Z.SOCIAL_LAYER_STOREFRONT],
      analyticsContext: r.current,
      onClose: () => {
        "POP" !== (0, g.s1)().action && (0, C.Z)({
          guildId: t,
          pageIndex: a
        })
      }
    }) : null == o && (0, j.U)()
  }, [t, a, o, n.applicationId]), (0, l.jsxs)("div", {
    className: Z.container,
    children: [(0, l.jsx)(k.Z, {
      guildId: t,
      storefront: n,
      selectedPageIndex: a
    }), (0, l.jsx)(b.$, {
      applicationId: n.applicationId,
      guildId: t,
      page: n.pages[a]
    })]
  })
}

function S(e) {
  var n, t, a;
  let {
    match: g
  } = e, {
    guildId: C,
    gameShopPageIndex: j,
    gameShopSkuId: k
  } = g.params, {
    analyticsLocations: b
  } = (0, p.ZP)(u.Z.SOCIAL_LAYER_STOREFRONT), S = (0, v.Z)({
    guildId: C
  }), L = (0, r.e7)([f.Z], () => f.Z.get(k), [k]);
  (0, I.p2)();
  let T = (0, c.Z)((0, s.Z)()),
    P = (0, r.e7)([_.ZP, x.default], () => _.ZP.isMember(C, x.default.getId())),
    A = i.useMemo(() => {
      if (null == j) return 0;
      let e = parseInt(j, 10);
      return isNaN(e) || null != S && null != S.storefront && e >= S.storefront.pages.length ? 0 : e
    }, [j, S]),
    R = null != (a = null == S || null == (t = S.storefront) || null == (n = t.pages[A]) ? true : n.title) ? a : null,
    y = i.useMemo(() => ({
      sessionId: T,
      guildId: C,
      pageIndex: A,
      pageTitle: R,
      isUserGuildMember: P
    }), [T, C, A, R, P]);
  return (i.useEffect(() => {
    null != C && (0, h.m0)(C, A, null != k ? k : null)
  }, [C, A, k]), ((null == S ? true : S.storefront) != null || (null == S ? true : S.error)) && !(null == S ? true : S.loading) && null != C && (null == S ? true : S.storefront) != null) ? (0, l.jsx)(p.Gt, {
    value: b,
    children: (0, l.jsx)(m.hL, {
      newValue: y,
      children: (0, l.jsx)(N, {
        storefront: S.storefront,
        guildId: C,
        selectedPageIndex: A,
        selectedSku: L
      })
    })
  }) : (0, l.jsx)("div", {
    className: o()(Z.spinner, Z.container),
    children: (0, l.jsx)(d.$jN, {})
  })
}