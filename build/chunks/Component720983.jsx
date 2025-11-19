/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk705338 = require("./705338.js"),
  Chunk260999 = require("./260999.js");

function p(e) {
  let {
    guildId: n,
    storefront: l,
    selectedPageIndex: i
  } = e, p = (0, r.wjy)((0, d.ZP)());
  if (null == l) return null;
  let g = null != l.logoAssetId ? (0, s._W)(l.applicationId, l.logoAssetId, 75) : null,
    I = null != l.lightThemeLogoAssetId ? (0, s._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
    x = null;
  return x = p ? null != g ? g : I : null != I ? I : g, (0, t.jsxs)(o.Z, {
    disableDoubleClick: true,
    className: u.headerContainer,
    children: [(0, t.jsxs)(r.P3F, {
      onClick: () => {
        (0, c.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: u.titleContainer,
      children: [null != x && (0, t.jsx)("img", {
        className: u.logo,
        src: x,
        alt: l.title
      }), (0, t.jsx)(o.Z.Title, {
        children: l.title
      })]
    }), (0, t.jsx)("div", {
      className: u.titles,
      children: l.pages.map((e, l) => (0, t.jsx)(o.Z.Title, {
        onClick: () => {
          (0, c.Z)({
            guildId: n,
            pageIndex: l
          })
        },
        wrapperClassName: u.titleWrapper,
        className: a()(u.pageTitleContainer, {
          [u.selectedPageIndicator]: i === l
        }),
        children: e.title
      }, "".concat(e.title, "-").concat(l)))
    })]
  })
}