/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
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
  return (0, t.jsx)(o.P3F, {
    className: r()(f.iconButton, a),
    onClick: l,
    "aria-label": i,
    children: n
  })
}

function _(e) {
  let {
    guildId: n,
    storefront: l,
    selectedPageIndex: a
  } = e, _ = (0, o.wjy)((0, s.ZP)()), C = (0, u.Y)({
    location: "SocialLayerStorefrontHeader"
  }), j = (0, d.e7)([g.default], () => g.default.getCurrentUser()), k = i.useCallback(() => {
    (null == j ? true : j.id) != null && (0, p.openUserProfileModal)({
      userId: j.id,
      section: m.oh.WISHLIST,
      showGuildProfile: false
    })
  }, [j]);
  if (null == l) return null;
  let b = null != l.logoAssetId ? (0, I._W)(l.applicationId, l.logoAssetId, 75) : null,
    Z = null != l.lightThemeLogoAssetId ? (0, I._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
    N = null;
  return N = _ ? null != b ? b : Z : null != Z ? Z : b, (0, t.jsxs)(c.Z, {
    disableDoubleClick: true,
    className: f.headerContainer,
    children: [(0, t.jsxs)(o.P3F, {
      onClick: () => {
        (0, x.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: f.titleContainer,
      children: [null != N && (0, t.jsx)("img", {
        className: f.logo,
        src: N,
        alt: l.title
      }), (0, t.jsx)(c.Z.Title, {
        children: l.title
      })]
    }), (0, t.jsx)("div", {
      className: f.titles,
      children: l.pages.map((e, l) => (0, t.jsx)(c.Z.Title, {
        onClick: () => {
          (0, x.Z)({
            guildId: n,
            pageIndex: l
          })
        },
        wrapperClassName: f.titleWrapper,
        className: r()(f.pageTitleContainer, {
          [f.selectedPageIndicator]: a === l
        }),
        children: (0, t.jsx)(o.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(l)))
    }), C && (0, t.jsx)("div", {
      className: f.alignedRightContent,
      children: (0, t.jsx)(v, {
        icon: (0, t.jsx)(o.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: k,
        ariaLabel: h.intl.string(h.t["7lZ31J"]),
        className: f.wishlistButton
      })
    })]
  })
}