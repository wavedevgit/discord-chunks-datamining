/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk242723 = require("./242723.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk140594 = require("./140594.js");

function C(e) {
  var n, l;
  let {
    storefront: a,
    guildId: r,
    selectedPageIndex: d,
    selectedSku: o
  } = e, c = i.useRef(false);
  return i.useEffect(() => {
    let e = () => {
      c.current = true
    };
    return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
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
  }, [r, d, o, a.applicationId]), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)("div", {
      className: h.container,
      children: [(0, t.jsx)(v.Z, {
        guildId: r,
        storefront: a,
        selectedPageIndex: d
      }), (0, t.jsx)(x.$, {
        applicationId: a.applicationId,
        guildId: r,
        page: a.pages[d]
      })]
    }), (0, t.jsx)(m.n, {
      applicationId: a.applicationId,
      backgroundImageAssetId: null == (l = a.pages[d]) || null == (n = l.leaderboard) ? true : n.backgroundImageAssetId
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
  } = n.params, I = (0, d.e7)([p.Z], () => null != l ? p.Z.getStorefrontData(l) : true), v = (0, d.e7)([c.Z], () => c.Z.get(s), [s]);
  (0, g.p)();
  let x = i.useMemo(() => {
    if (null == a) return 0;
    let e = parseInt(a, 10);
    return isNaN(e) || null != I && null != I.storefront && e >= I.storefront.pages.length ? 0 : e
  }, [a, I]);
  return (i.useEffect(() => {
    null != l && (0, u.m0)(l, x, null != s ? s : null)
  }, [l, x, s]), i.useEffect(() => {
    var e;
    null != l && (null == (e = p.Z.getStorefrontData(l)) ? true : e.loading) !== true && (0, u.YL)(l)
  }, [l]), ((null == I ? true : I.storefront) != null || (null == I ? true : I.error)) && !(null == I ? true : I.loading) && null != l && (null == I ? true : I.storefront) != null) ? (0, t.jsx)(C, {
    storefront: I.storefront,
    guildId: l,
    selectedPageIndex: x,
    selectedSku: v
  }) : (0, t.jsx)("div", {
    className: r()(h.spinner, h.container),
    children: (0, t.jsx)(o.$jN, {})
  })
}