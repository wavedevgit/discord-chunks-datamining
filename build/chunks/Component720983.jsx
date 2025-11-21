/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk567400 = require("./567400.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk73346 = require("./73346.js"),
  Chunk705338 = require("./705338.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260999 = require("./260999.js");

function v(e) {
  let {
    icon: n,
    onClick: l,
    ariaLabel: i,
    className: a
  } = e;
  return (0, t.jsx)(r.P3F, {
    className: o()(m.iconButton, a),
    onClick: l,
    "aria-label": i,
    children: n
  })
}

function C(e) {
  let {
    guildId: n,
    storefront: l,
    selectedPageIndex: a
  } = e, C = (0, r.wjy)((0, d.ZP)()), b = (0, g.Y)({
    location: "SocialLayerStorefrontHeader"
  }), j = (0, s.e7)([f.default], () => f.default.getCurrentUser()), k = i.useCallback(() => {
    (null == j ? true : j.id) != null && (0, p.openUserProfileModal)({
      userId: j.id,
      section: h.oh.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT]
    })
  }, [j]);
  if (null == l) return null;
  let Z = null != l.logoAssetId ? (0, _._W)(l.applicationId, l.logoAssetId, 75) : null,
    S = null != l.lightThemeLogoAssetId ? (0, _._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
    N = null;
  return N = C ? null != Z ? Z : S : null != S ? S : Z, (0, t.jsxs)(u.Z, {
    disableDoubleClick: true,
    className: m.headerContainer,
    children: [(0, t.jsxs)(r.P3F, {
      onClick: () => {
        (0, I.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: m.titleContainer,
      children: [null != N && (0, t.jsx)("img", {
        className: m.logo,
        src: N,
        alt: l.title
      }), (0, t.jsx)(u.Z.Title, {
        children: l.title
      })]
    }), (0, t.jsx)("div", {
      className: m.titles,
      children: l.pages.map((e, l) => (0, t.jsx)(u.Z.Title, {
        onClick: () => {
          (0, I.Z)({
            guildId: n,
            pageIndex: l
          })
        },
        wrapperClassName: m.titleWrapper,
        className: o()(m.pageTitleContainer, {
          [m.selectedPageIndicator]: a === l
        }),
        children: (0, t.jsx)(r.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(l)))
    }), b && (0, t.jsx)("div", {
      className: m.alignedRightContent,
      children: (0, t.jsx)(v, {
        icon: (0, t.jsx)(r.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: k,
        ariaLabel: x.intl.string(x.t["7lZ31J"]),
        className: m.wishlistButton
      })
    })]
  })
}