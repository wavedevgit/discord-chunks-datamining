/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk73346 = require("./73346.js"),
  Chunk411935 = require("./411935.js"),
  Chunk260999 = require("./260999.js");

function s(e) {
  let {
    guildId: t,
    storefront: n,
    selectedPageIndex: r
  } = e;
  if (null == n) return null;
  let s = null != n.logoAssetId ? (0, o._W)(n.applicationId, n.logoAssetId, 75) : null;
  return (0, a.jsxs)("div", {
    className: c.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: c.titleContainer,
      children: [null != s && (0, a.jsx)("img", {
        className: c.logo,
        src: s,
        alt: n.title
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: n.title
      })]
    }), n.pages.map((e, n) => (0, a.jsx)(i.P3F, {
      onClick: () => {
        (0, d.K)(t, n)
      },
      className: l()(c.pageTitleContainer, {
        [c.selectedPageIndicator]: r === n
      }),
      children: (0, a.jsx)(i.X6q, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: e.title
      })
    }, "".concat(e.title, "-").concat(n)))]
  })
}