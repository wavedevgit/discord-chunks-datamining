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
  Chunk596446 = require("./596446.js");

function m(e) {
  var t, n, l;
  let {
    guildId: m,
    initialPageIndex: I = 0
  } = e, b = (0, d.e7)([s.Z], () => s.Z.getStorefrontData(m)), v = (0, d.e7)([s.Z], () => s.Z.getStorefrontState(m)), _ = ((null == b ? true : b.storefront) != null || (null == b ? true : b.error)) && !(null == b ? true : b.loading);
  if (r.useEffect(() => {
      null == b && (0, c.Y)(m)
    }, [m, b]), r.useEffect(() => {
      (0, c.K)(m, I)
    }, [m, I]), !_ || (null == b ? true : b.storefront) == null) return (0, a.jsx)("div", {
    className: i()(p.spinner, p.container),
    children: (0, a.jsx)(o.$jN, {})
  });
  let h = null != (l = null == v ? true : v.activePage) ? l : I;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsx)(u.Z, {
        guildId: m,
        storefront: b.storefront,
        selectedPageIndex: h
      }), (0, a.jsx)(g.$, {
        applicationId: b.storefront.applicationId,
        guildId: m,
        page: b.storefront.pages[h]
      })]
    }), (0, a.jsx)(f.n, {
      applicationId: b.storefront.applicationId,
      backgroundImageAssetId: null == (n = b.storefront.pages[h]) || null == (t = n.leaderboard) ? true : t.backgroundImageAssetId
    })]
  })
}