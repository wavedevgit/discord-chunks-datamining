/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk596446 = require("./596446.js");

function h(e) {
  var t, n;
  let {
    storefront: r,
    guildId: i,
    selectedPageIndex: o,
    selectedSku: d
  } = e, s = l.useRef(false);
  return l.useEffect(() => {
    let e = () => {
      s.current = true
    };
    return window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
  }, []), l.useEffect(() => {
    null != d ? (0, p.g)({
      skuId: d.id,
      applicationId: r.applicationId,
      guildId: i,
      onClose: () => {
        s.current || (0, c.uL)(v.Z5c.CHANNELS_GAME_SHOP(i, o))
      }
    }) : null == d && (0, p.U)(), s.current = false
  }, [i, o, d, r.applicationId]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsx)(f.Z, {
        guildId: i,
        storefront: r,
        selectedPageIndex: o
      }), (0, a.jsx)(m.$, {
        applicationId: r.applicationId,
        guildId: i,
        page: r.pages[o]
      })]
    }), (0, a.jsx)(b.n, {
      applicationId: r.applicationId,
      backgroundImageAssetId: null == (n = r.pages[o]) || null == (t = n.leaderboard) ? true : t.backgroundImageAssetId
    })]
  })
}

function x(e) {
  let {
    match: t
  } = e, {
    guildId: n,
    gameShopPageIndex: r,
    gameShopSkuId: c
  } = t.params, p = (0, o.e7)([g.Z], () => null != n ? g.Z.getStorefrontData(n) : true), f = l.useMemo(() => {
    if (null == r) return 0;
    let e = parseInt(r, 10);
    return isNaN(e) || null != p && null != p.storefront && e >= p.storefront.pages.length ? 0 : e
  }, [r, p]), m = (0, o.e7)([s.Z], () => null != c ? s.Z.get(c) : null, [c]);
  l.useEffect(() => {
    null != n && (0, u.m)(n, f, null != c ? c : null)
  }, [n, f, c]);
  let b = ((null == p ? true : p.storefront) != null || (null == p ? true : p.error)) && !(null == p ? true : p.loading);
  return (l.useEffect(() => {
    null != n && null == p && (0, u.Y)(n)
  }, [n, p]), b && null != n && (null == p ? true : p.storefront) != null) ? (0, a.jsx)(h, {
    storefront: p.storefront,
    guildId: n,
    selectedPageIndex: f,
    selectedSku: m
  }) : (0, a.jsx)("div", {
    className: i()(I.spinner, I.container),
    children: (0, a.jsx)(d.$jN, {})
  })
}