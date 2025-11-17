/** Chunk was on 77033 **/
/** chunk id: 720983, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk73346 = require("./73346.js"),
  Chunk705338 = require("./705338.js"),
  Chunk260999 = require("./260999.js");

function c(n) {
  let {
    guildId: e,
    storefront: l,
    selectedPageIndex: i
  } = n;
  if (null == l) return null;
  let c = null != l.logoAssetId ? (0, r._W)(l.applicationId, l.logoAssetId, 75) : null;
  return (0, t.jsxs)("div", {
    className: s.headerContainer,
    children: [(0, t.jsxs)("div", {
      className: s.titleContainer,
      children: [null != c && (0, t.jsx)("img", {
        className: s.logo,
        src: c,
        alt: l.title
      }), (0, t.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: l.title
      })]
    }), l.pages.map((n, l) => (0, t.jsx)(d.P3F, {
      onClick: () => {
        (0, o.Z)({
          guildId: e,
          pageIndex: l
        })
      },
      className: a()(s.pageTitleContainer, {
        [s.selectedPageIndicator]: i === l
      }),
      children: (0, t.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: n.title
      })
    }, "".concat(n.title, "-").concat(l)))]
  })
}