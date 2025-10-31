/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk140594 = require("./140594.js");

function y(e) {
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
    null != d ? (0, v.g)({
      skuId: d.id,
      applicationId: r.applicationId,
      guildId: i,
      onClose: () => {
        s.current || (0, c.uL)(_.Z5c.CHANNELS_GAME_SHOP(i, o))
      }
    }) : null == d && (0, v.U)(), s.current = false
  }, [i, o, d, r.applicationId]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: j.container,
      children: [(0, a.jsx)(I.Z, {
        guildId: i,
        storefront: r,
        selectedPageIndex: o
      }), (0, a.jsx)(h.$, {
        applicationId: r.applicationId,
        guildId: i,
        page: r.pages[o]
      })]
    }), (0, a.jsx)(x.n, {
      applicationId: r.applicationId,
      backgroundImageAssetId: null == (n = r.pages[o]) || null == (t = n.leaderboard) ? true : t.backgroundImageAssetId
    })]
  })
}

function C(e) {
  let {
    match: t
  } = e, {
    guildId: n,
    gameShopPageIndex: r,
    gameShopSkuId: c
  } = t.params, v = (0, o.e7)([b.Z], () => null != n ? b.Z.getStorefrontData(n) : true), I = l.useMemo(() => {
    if (null == r) return 0;
    let e = parseInt(r, 10);
    return isNaN(e) || null != v && null != v.storefront && e >= v.storefront.pages.length ? 0 : e
  }, [r, v]), h = (0, o.e7)([f.Z], () => null != c ? f.Z.get(c) : null, [c]);
  l.useEffect(() => {
    null != n && (0, m.m)(n, I, null != c ? c : null)
  }, [n, I, c]);
  let x = ((null == v ? true : v.storefront) != null || (null == v ? true : v.error)) && !(null == v ? true : v.loading);
  l.useEffect(() => {
    null != n && null == v && (0, m.Y)(n)
  }, [n, v]);
  let _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
    {
      userProfile: C,
      wishlistId: k
    } = (0, o.cj)([s.Z], () => ({
      userProfile: null != _ ? s.Z.getUserProfile(_.id) : null,
      wishlistId: null != _ ? s.Z.getFirstWishlistId(_.id) : null
    }), [_]);
  return (l.useEffect(() => {
    null != _ && null == C && (0, u.Z)(_.id)
  }, [_, C]), (0, g.kZ)(k, null == _ ? true : _.id), x && null != n && (null == v ? true : v.storefront) != null) ? (0, a.jsx)(y, {
    storefront: v.storefront,
    guildId: n,
    selectedPageIndex: I,
    selectedSku: h
  }) : (0, a.jsx)("div", {
    className: i()(j.spinner, j.container),
    children: (0, a.jsx)(d.$jN, {})
  })
}