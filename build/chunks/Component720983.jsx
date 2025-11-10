/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk73346 = require("./73346.js"),
  Chunk705338 = require("./705338.js"),
  Chunk260999 = require("./260999.js");

function c(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: i
  } = e;
  if (null == t) return null;
  let c = null != t.logoAssetId ? (0, d._W)(t.applicationId, t.logoAssetId, 75) : null;
  return (0, l.jsxs)("div", {
    className: s.headerContainer,
    children: [(0, l.jsxs)("div", {
      className: s.titleContainer,
      children: [null != c && (0, l.jsx)("img", {
        className: s.logo,
        src: c,
        alt: t.title
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: t.title
      })]
    }), t.pages.map((e, t) => (0, l.jsx)(r.P3F, {
      onClick: () => {
        (0, o.Z)({
          guildId: n,
          pageIndex: t
        })
      },
      className: a()(s.pageTitleContainer, {
        [s.selectedPageIndicator]: i === t
      }),
      children: (0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: e.title
      })
    }, "".concat(e.title, "-").concat(t)))]
  })
}