/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk140594 = require("./140594.js");

function h(e) {
  var n, t;
  let {
    storefront: a,
    guildId: r,
    selectedPageIndex: d,
    selectedSku: o
  } = e, s = i.useRef(false);
  return i.useEffect(() => {
    let e = () => {
      s.current = true
    };
    return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
  }, []), i.useEffect(() => {
    null != o ? (0, I.g)({
      skuId: o.id,
      applicationId: a.applicationId,
      guildId: r,
      isStorefront: true,
      onClose: () => {
        s.current || (0, g.Z)({
          guildId: r,
          pageIndex: d
        })
      }
    }) : null == o && (0, I.U)(), s.current = false
  }, [r, d, o, a.applicationId]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(x.Z, {
        guildId: r,
        storefront: a,
        selectedPageIndex: d
      }), (0, l.jsx)(v.$, {
        applicationId: a.applicationId,
        guildId: r,
        page: a.pages[d]
      })]
    }), (0, l.jsx)(m.n, {
      applicationId: a.applicationId,
      backgroundImageAssetId: null == (t = a.pages[d]) || null == (n = t.leaderboard) ? true : n.backgroundImageAssetId
    })]
  })
}

function j(e) {
  let {
    match: n
  } = e, {
    guildId: t,
    gameShopPageIndex: a,
    gameShopSkuId: g
  } = n.params, I = (0, d.e7)([p.Z], () => null != t ? p.Z.getStorefrontData(t) : true), x = (0, d.e7)([c.Z], () => c.Z.get(g), [g]);
  (0, s.p2)();
  let v = i.useMemo(() => {
    if (null == a) return 0;
    let e = parseInt(a, 10);
    return isNaN(e) || null != I && null != I.storefront && e >= I.storefront.pages.length ? 0 : e
  }, [a, I]);
  return (i.useEffect(() => {
    null != t && (0, u.m0)(t, v, null != g ? g : null)
  }, [t, v, g]), i.useEffect(() => {
    var e;
    null != t && (null == (e = p.Z.getStorefrontData(t)) ? true : e.loading) !== true && (0, u.YL)(t)
  }, [t]), ((null == I ? true : I.storefront) != null || (null == I ? true : I.error)) && !(null == I ? true : I.loading) && null != t && (null == I ? true : I.storefront) != null) ? (0, l.jsx)(h, {
    storefront: I.storefront,
    guildId: t,
    selectedPageIndex: v,
    selectedSku: x
  }) : (0, l.jsx)("div", {
    className: r()(f.spinner, f.container),
    children: (0, l.jsx)(o.$jN, {})
  })
}