/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
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
    onClick: t,
    ariaLabel: i,
    className: a
  } = e;
  return (0, l.jsx)(s.P3F, {
    className: o()(f.iconButton, a),
    onClick: t,
    "aria-label": i,
    children: n
  })
}

function C(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: a
  } = e, C = (0, s.wjy)((0, d.ZP)()), j = (0, p.Y)({
    location: "SocialLayerStorefrontHeader"
  }), k = (0, r.e7)([I.default], () => I.default.getCurrentUser()), b = i.useCallback(() => {
    (null == k ? true : k.id) != null && (0, g.openUserProfileModal)({
      userId: k.id,
      section: h.oh.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT]
    })
  }, [k]);
  if (null == t) return null;
  let Z = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
    N = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    S = null;
  return S = C ? null != Z ? Z : N : null != N ? N : Z, (0, l.jsxs)(u.Z, {
    disableDoubleClick: true,
    className: f.headerContainer,
    children: [(0, l.jsxs)(s.P3F, {
      onClick: () => {
        (0, _.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: f.titleContainer,
      children: [null != S && (0, l.jsx)("img", {
        className: f.logo,
        src: S,
        alt: t.title
      }), (0, l.jsx)(u.Z.Title, {
        children: t.title
      })]
    }), (0, l.jsx)("div", {
      className: f.titles,
      children: t.pages.map((e, t) => (0, l.jsx)(u.Z.Title, {
        onClick: () => {
          (0, _.Z)({
            guildId: n,
            pageIndex: t
          })
        },
        wrapperClassName: f.titleWrapper,
        className: o()(f.pageTitleContainer, {
          [f.selectedPageIndicator]: a === t
        }),
        children: (0, l.jsx)(s.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), j && (0, l.jsx)("div", {
      className: f.alignedRightContent,
      children: (0, l.jsx)(v, {
        icon: (0, l.jsx)(s.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: b,
        ariaLabel: m.intl.string(m.t["7lZ31J"]),
        className: f.wishlistButton
      })
    })]
  })
}