/** Chunk was on 77033 **/
/** chunk id: 636409, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk140594 = require("./140594.js");

function _(n) {
  var e, t;
  let {
    storefront: a,
    guildId: r,
    selectedPageIndex: d,
    selectedSku: o
  } = n, c = i.useRef(false);
  return i.useEffect(() => {
    let n = () => {
      c.current = true
    };
    return window.addEventListener("popstate", n), () => window.removeEventListener("popstate", n)
  }, []), i.useEffect(() => {
    null != o ? (0, I.g)({
      skuId: o.id,
      applicationId: a.applicationId,
      guildId: r,
      isStorefront: true,
      onClose: () => {
        c.current || (0, s.uL)(f.Z5c.CHANNELS_GAME_SHOP(r, d))
      }
    }) : null == o && (0, I.U)(), c.current = false
  }, [r, d, o, a.applicationId]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: h.container,
      children: [(0, l.jsx)(v.Z, {
        guildId: r,
        storefront: a,
        selectedPageIndex: d
      }), (0, l.jsx)(x.$, {
        applicationId: a.applicationId,
        guildId: r,
        page: a.pages[d]
      })]
    }), (0, l.jsx)(m.n, {
      applicationId: a.applicationId,
      backgroundImageAssetId: null == (t = a.pages[d]) || null == (e = t.leaderboard) ? true : e.backgroundImageAssetId
    })]
  })
}

function j(n) {
  let {
    match: e
  } = n, {
    guildId: t,
    gameShopPageIndex: a,
    gameShopSkuId: s
  } = e.params, I = (0, d.e7)([g.Z], () => null != t ? g.Z.getStorefrontData(t) : true), v = (0, d.e7)([u.Z], () => u.Z.get(s), [s]);
  (0, c.p2)();
  let x = i.useMemo(() => {
    if (null == a) return 0;
    let n = parseInt(a, 10);
    return isNaN(n) || null != I && null != I.storefront && n >= I.storefront.pages.length ? 0 : n
  }, [a, I]);
  return (i.useEffect(() => {
    null != t && (0, p.m0)(t, x, null != s ? s : null)
  }, [t, x, s]), i.useEffect(() => {
    var n;
    null != t && (null == (n = g.Z.getStorefrontData(t)) ? true : n.loading) !== true && (0, p.YL)(t)
  }, [t]), ((null == I ? true : I.storefront) != null || (null == I ? true : I.error)) && !(null == I ? true : I.loading) && null != t && (null == I ? true : I.storefront) != null) ? (0, l.jsx)(_, {
    storefront: I.storefront,
    guildId: t,
    selectedPageIndex: x,
    selectedSku: v
  }) : (0, l.jsx)("div", {
    className: r()(h.spinner, h.container),
    children: (0, l.jsx)(o.$jN, {})
  })
}