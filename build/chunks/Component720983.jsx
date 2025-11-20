/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function f(e) {
  let {
    icon: n,
    onClick: l,
    ariaLabel: i,
    className: a
  } = e;
  return (0, t.jsx)(d.P3F, {
    className: o()(_.iconButton, a),
    onClick: l,
    "aria-label": i,
    children: n
  })
}

function v(e) {
  let {
    guildId: n,
    storefront: l,
    selectedPageIndex: a
  } = e, v = (0, d.wjy)((0, s.ZP)()), j = (0, u.Y)({
    location: "SocialLayerStorefrontHeader"
  }), C = (0, r.e7)([g.default], () => g.default.getCurrentUser()), k = i.useCallback(() => {
    (null == C ? true : C.id) != null && (0, p.openUserProfileModal)({
      userId: C.id,
      section: h.oh.WISHLIST,
      showGuildProfile: false
    })
  }, [C]);
  if (null == l) return null;
  let b = null != l.logoAssetId ? (0, I._W)(l.applicationId, l.logoAssetId, 75) : null,
    Z = null != l.lightThemeLogoAssetId ? (0, I._W)(l.applicationId, l.lightThemeLogoAssetId, 75) : null,
    N = null;
  return N = v ? null != b ? b : Z : null != Z ? Z : b, (0, t.jsxs)(c.Z, {
    disableDoubleClick: true,
    className: _.headerContainer,
    children: [(0, t.jsxs)(d.P3F, {
      onClick: () => {
        (0, x.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: _.titleContainer,
      children: [null != N && (0, t.jsx)("img", {
        className: _.logo,
        src: N,
        alt: l.title
      }), (0, t.jsx)(c.Z.Title, {
        children: l.title
      })]
    }), (0, t.jsx)("div", {
      className: _.titles,
      children: l.pages.map((e, l) => (0, t.jsx)(c.Z.Title, {
        onClick: () => {
          (0, x.Z)({
            guildId: n,
            pageIndex: l
          })
        },
        wrapperClassName: _.titleWrapper,
        className: o()(_.pageTitleContainer, {
          [_.selectedPageIndicator]: a === l
        }),
        children: (0, t.jsx)(d.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(l)))
    }), j && (0, t.jsx)("div", {
      className: _.alignedRightContent,
      children: (0, t.jsx)(f, {
        icon: (0, t.jsx)(d.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: k,
        ariaLabel: m.intl.string(m.t["7lZ31J"]),
        className: _.wishlistButton
      })
    })]
  })
}