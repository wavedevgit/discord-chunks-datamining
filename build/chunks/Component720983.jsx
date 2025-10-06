/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk73346 = require("./73346.js"),
  Chunk411935 = require("./411935.js"),
  Chunk801519 = require("./801519.js");

function s(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: l
  } = e;
  if (null == t) return null;
  let s = null != t.logoAssetId ? (0, d._W)(t.applicationId, t.logoAssetId, 75) : null;
  return (0, a.jsxs)("div", {
    className: c.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: c.titleContainer,
      children: [null != s && (0, a.jsx)("img", {
        className: c.logo,
        src: s,
        alt: t.title
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: t.title
      })]
    }), t.pages.map((e, t) => (0, a.jsx)(i.P3F, {
      onClick: () => {
        (0, o.K)(n, t)
      },
      className: r()(c.pageTitleContainer, {
        [c.selectedPageIndicator]: l === t
      }),
      children: (0, a.jsx)(i.X6q, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: e.title
      })
    }, "".concat(e.title, "-").concat(t)))]
  })
}