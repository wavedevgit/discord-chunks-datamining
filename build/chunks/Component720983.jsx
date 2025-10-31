/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk260999 = require("./260999.js");

function u(e) {
  let {
    guildId: n,
    storefront: l,
    selectedPageIndex: i
  } = e;
  if (null == l) return null;
  let u = null != l.logoAssetId ? (0, o._W)(l.applicationId, l.logoAssetId, 75) : null;
  return (0, t.jsxs)("div", {
    className: c.headerContainer,
    children: [(0, t.jsxs)("div", {
      className: c.titleContainer,
      children: [null != u && (0, t.jsx)("img", {
        className: c.logo,
        src: u,
        alt: l.title
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: l.title
      })]
    }), l.pages.map((e, l) => (0, t.jsx)(r.P3F, {
      onClick: () => {
        (0, d.uL)(s.Z5c.CHANNELS_GAME_SHOP(n, l))
      },
      className: a()(c.pageTitleContainer, {
        [c.selectedPageIndicator]: i === l
      }),
      children: (0, t.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: e.title
      })
    }, "".concat(e.title, "-").concat(l)))]
  })
}