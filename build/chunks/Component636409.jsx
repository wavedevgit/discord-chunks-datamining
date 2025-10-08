/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk720983 = require("./720983.jsx"),
  Chunk323540 = require("./323540.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk140594 = require("./140594.js");

function m(e) {
  var t, n, l;
  let {
    guildId: m,
    initialPageIndex: b = 0
  } = e, v = (0, o.e7)([s.Z], () => s.Z.getStorefrontData(m)), I = (0, o.e7)([s.Z], () => s.Z.getStorefrontState(m)), _ = ((null == v ? true : v.storefront) != null || (null == v ? true : v.error)) && !(null == v ? true : v.loading);
  if (r.useEffect(() => {
      null == v && (0, c.Y)(m)
    }, [m, v]), r.useEffect(() => {
      (0, c.K)(m, b)
    }, [m, b]), !_ || (null == v ? true : v.storefront) == null) return (0, a.jsx)("div", {
    className: i()(p.spinner, p.container),
    children: (0, a.jsx)(d.$jN, {})
  });
  let h = null != (l = null == I ? true : I.activePage) ? l : b;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsx)(u.Z, {
        guildId: m,
        storefront: v.storefront,
        selectedPageIndex: h
      }), (0, a.jsx)(g.$, {
        applicationId: v.storefront.applicationId,
        guildId: m,
        page: v.storefront.pages[h]
      })]
    }), (0, a.jsx)(f.n, {
      applicationId: v.storefront.applicationId,
      backgroundImageAssetId: null == (n = v.storefront.pages[h]) || null == (t = n.leaderboard) ? true : t.backgroundImageAssetId
    })]
  })
}