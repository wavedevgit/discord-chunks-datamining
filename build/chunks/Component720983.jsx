/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk567400 = require("./567400.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk73346 = require("./73346.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk705338 = require("./705338.js"),
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260999 = require("./260999.js");

function L(e) {
  let {
    content: n,
    onClick: t,
    ariaLabel: i,
    className: a
  } = e;
  return (0, l.jsx)(s.P3F, {
    className: o()(S.iconButton, a),
    onClick: t,
    "aria-label": i,
    children: n
  })
}

function N(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: a
  } = e, N = (0, s.wjy)((0, d.ZP)()), E = (0, p.Y)({
    location: "SocialLayerStorefrontHeader"
  }), Z = (0, r.e7)([I.default], () => I.default.getCurrentUser()), R = (0, m.oR)(), {
    analyticsLocations: T
  } = (0, u.ZP)(), A = i.useCallback(() => {
    (null == Z ? true : Z.id) != null && (0, _.openUserProfileModal)({
      userId: Z.id,
      section: j.oh.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT]
    })
  }, [Z]), M = i.useCallback(() => {
    f.default.track(k.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == R ? true : R.sessionId,
      cta_type: v.US.LEARN_MORE,
      location_stack: T
    }), window.open(h.Z.getArticleURL(k.BhN.SOCIAL_LAYER_STOREFRONT))
  }, [R, T]);
  if (null == t) return null;
  let y = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
    O = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    P = null;
  return P = N ? null != y ? y : O : null != O ? O : y, (0, l.jsxs)(g.Z, {
    disableDoubleClick: true,
    className: S.headerContainer,
    children: [(0, l.jsxs)(s.P3F, {
      onClick: () => {
        (0, C.default)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: S.titleContainer,
      children: [null != P && (0, l.jsx)("img", {
        className: S.logo,
        src: P,
        alt: t.title
      }), (0, l.jsx)(g.Z.Title, {
        children: t.title
      })]
    }), (0, l.jsx)("div", {
      className: S.titles,
      children: t.pages.map((e, t) => (0, l.jsx)(g.Z.Title, {
        onClick: () => {
          (0, C.default)({
            guildId: n,
            pageIndex: t
          })
        },
        wrapperClassName: S.titleWrapper,
        className: o()(S.pageTitleContainer, {
          [S.selectedPageIndicator]: a === t
        }),
        children: (0, l.jsx)(s.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), E && (0, l.jsxs)("div", {
      className: S.alignedRightContent,
      children: [(0, l.jsx)(L, {
        content: (0, l.jsx)(s.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: A,
        ariaLabel: b.intl.string(b.t["7lZ31J"]),
        className: S.wishlistButton
      }), (0, l.jsx)(L, {
        onClick: M,
        ariaLabel: b.intl.string(b.t.hvVgAZ),
        content: (0, l.jsx)(s.xvT, {
          variant: "text-sm/medium",
          children: b.intl.string(b.t.hvVgAZ)
        }),
        className: S.learnMoreButton
      })]
    })]
  })
}