/** Chunk was on 77033 **/
/** chunk id: 457489, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk417317 = require("./417317.js"),
  Chunk705338 = require("./705338.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk140594 = require("./140594.js");

function v(e) {
  let {
    storefront: n,
    guildId: l,
    selectedPageIndex: a,
    selectedSku: r
  } = e;
  return i.useEffect(() => {
    null != r ? (0, x.g)({
      skuId: r.id,
      applicationId: n.applicationId,
      guildId: l,
      isStorefront: true,
      onClose: () => {
        "POP" !== (0, s.s1)().action && (0, I.Z)({
          guildId: l,
          pageIndex: a
        })
      }
    }) : null == r && (0, x.U)()
  }, [l, a, r, n.applicationId]), (0, t.jsxs)("div", {
    className: f.container,
    children: [(0, t.jsx)(m.Z, {
      guildId: l,
      storefront: n,
      selectedPageIndex: a
    }), (0, t.jsx)(h.$, {
      applicationId: n.applicationId,
      guildId: l,
      page: n.pages[a]
    })]
  })
}

function _(e) {
  let {
    match: n
  } = e, {
    guildId: l,
    gameShopPageIndex: a,
    gameShopSkuId: s
  } = n.params, I = (0, g.Z)({
    guildId: l
  }), x = (0, o.e7)([u.Z], () => u.Z.get(s), [s]);
  (0, c.p2)();
  let m = i.useMemo(() => {
    if (null == a) return 0;
    let e = parseInt(a, 10);
    return isNaN(e) || null != I && null != I.storefront && e >= I.storefront.pages.length ? 0 : e
  }, [a, I]);
  return (i.useEffect(() => {
    null != l && (0, p.m0)(l, m, null != s ? s : null)
  }, [l, m, s]), ((null == I ? true : I.storefront) != null || (null == I ? true : I.error)) && !(null == I ? true : I.loading) && null != l && (null == I ? true : I.storefront) != null) ? (0, t.jsx)(v, {
    storefront: I.storefront,
    guildId: l,
    selectedPageIndex: m,
    selectedSku: x
  }) : (0, t.jsx)("div", {
    className: r()(f.spinner, f.container),
    children: (0, t.jsx)(d.$jN, {})
  })
}