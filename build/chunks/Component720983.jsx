/** Chunk was on 77033 **/
/** chunk id: 720983, original params: n,e,t (module,exports,require) **/
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

function u(n) {
  let {
    guildId: e,
    storefront: t,
    selectedPageIndex: i
  } = n;
  if (null == t) return null;
  let u = null != t.logoAssetId ? (0, o._W)(t.applicationId, t.logoAssetId, 75) : null;
  return (0, l.jsxs)("div", {
    className: c.headerContainer,
    children: [(0, l.jsxs)("div", {
      className: c.titleContainer,
      children: [null != u && (0, l.jsx)("img", {
        className: c.logo,
        src: u,
        alt: t.title
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: t.title
      })]
    }), t.pages.map((n, t) => (0, l.jsx)(r.P3F, {
      onClick: () => {
        (0, d.uL)(s.Z5c.CHANNELS_GAME_SHOP(e, t))
      },
      className: a()(c.pageTitleContainer, {
        [c.selectedPageIndicator]: i === t
      }),
      children: (0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: n.title
      })
    }, "".concat(n.title, "-").concat(t)))]
  })
}