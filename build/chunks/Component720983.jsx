/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk801519 = require("./801519.js");

function u(e) {
  let {
    guildId: t,
    storefront: n,
    selectedPageIndex: l
  } = e;
  if (null == n) return null;
  let u = null != n.logoAssetId ? (0, d._W)(n.applicationId, n.logoAssetId, 75) : null;
  return (0, a.jsxs)("div", {
    className: s.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: s.titleContainer,
      children: [null != u && (0, a.jsx)("img", {
        className: s.logo,
        src: u,
        alt: n.title
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-default",
        lineClamp: 1,
        children: n.title
      })]
    }), n.pages.map((e, n) => (0, a.jsx)(i.P3F, {
      onClick: () => {
        (0, o.uL)(c.Z5c.CHANNELS_GAME_SHOP(t, n))
      },
      className: r()(s.pageTitleContainer, {
        [s.selectedPageIndicator]: l === n
      }),
      children: (0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        lineClamp: 1,
        children: e.title
      })
    }, "".concat(e.title, "-").concat(n)))]
  })
}