/** Chunk was on 77033 **/
/** chunk id: 720983, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk73346 = require("./73346.js"),
  Chunk705338 = require("./705338.js"),
  Chunk260999 = require("./260999.js");

function u(n) {
  let {
    guildId: e,
    storefront: l,
    selectedPageIndex: i
  } = n, u = (0, d.wjy)((0, r.ZP)());
  if (null == l) return null;
  let p = null != l.logoAssetId ? (0, o._W)(l.applicationId, l.logoAssetId, 75) : null,
    g = null != l.lightThemeLogoAssetId ? (0, o._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
    I = null;
  return I = u ? null != p ? p : g : null != g ? g : p, (0, t.jsxs)("div", {
    className: c.headerContainer,
    children: [(0, t.jsxs)("div", {
      className: c.titleContainer,
      children: [null != I && (0, t.jsx)("img", {
        className: c.logo,
        src: I,
        alt: l.title
      }), (0, t.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: l.title
      })]
    }), l.pages.map((n, l) => (0, t.jsx)(d.P3F, {
      onClick: () => {
        (0, s.Z)({
          guildId: e,
          pageIndex: l
        })
      },
      className: a()(c.pageTitleContainer, {
        [c.selectedPageIndicator]: i === l
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