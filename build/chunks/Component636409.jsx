/** Chunk was on 77033 **/
/** chunk id: 636409, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
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

function p(e) {
  var n, t, r;
  let {
    guildId: p,
    initialPageIndex: _ = 0
  } = e, v = (0, d.e7)([s.Z], () => s.Z.getStorefrontData(p)), I = (0, d.e7)([s.Z], () => s.Z.getStorefrontState(p)), x = ((null == v ? true : v.storefront) != null || (null == v ? true : v.error)) && !(null == v ? true : v.loading);
  if (l.useEffect(() => {
      null == v && (0, c.Y)(p)
    }, [p, v]), l.useEffect(() => {
      (0, c.K)(p, _)
    }, [p, _]), !x || (null == v ? true : v.storefront) == null) return (0, a.jsx)("div", {
    className: i()(m.spinner, m.container),
    children: (0, a.jsx)(o.$jN, {})
  });
  let h = null != (r = null == I ? true : I.activePage) ? r : _;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: m.container,
      children: [(0, a.jsx)(u.Z, {
        guildId: p,
        storefront: v.storefront,
        selectedPageIndex: h
      }), (0, a.jsx)(g.$, {
        applicationId: v.storefront.applicationId,
        page: v.storefront.pages[h]
      })]
    }), (0, a.jsx)(f.n, {
      applicationId: v.storefront.applicationId,
      backgroundImageAssetId: null == (t = v.storefront.pages[h]) || null == (n = t.leaderboard) ? true : n.backgroundImageAssetId
    })]
  })
}