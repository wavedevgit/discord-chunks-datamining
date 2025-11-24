/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function Z(e) {
  let {
    content: n,
    onClick: t,
    ariaLabel: i,
    className: a
  } = e;
  return (0, l.jsx)(r.P3F, {
    className: o()(S.iconButton, a),
    onClick: t,
    "aria-label": i,
    children: n
  })
}

function E(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: a
  } = e, E = (0, r.wjy)((0, d.ZP)()), N = (0, p.Y)({
    location: "SocialLayerStorefrontHeader"
  }), R = (0, s.e7)([f.default], () => f.default.getCurrentUser()), T = (0, m.oR)(), {
    analyticsLocations: L
  } = (0, u.ZP)(), A = i.useCallback(() => {
    (null == R ? true : R.id) != null && (0, _.openUserProfileModal)({
      userId: R.id,
      section: k.oh.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT]
    })
  }, [R]), M = i.useCallback(() => {
    I.default.track(b.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == T ? true : T.sessionId,
      cta_type: C.US.LEARN_MORE,
      location_stack: L
    }), window.open(h.Z.getArticleURL(b.BhN.SOCIAL_LAYER_STOREFRONT))
  }, [T, L]);
  if (null == t) return null;
  let O = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
    P = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    y = null;
  return y = E ? null != O ? O : P : null != P ? P : O, (0, l.jsxs)(g.Z, {
    disableDoubleClick: true,
    className: S.headerContainer,
    children: [(0, l.jsxs)(r.P3F, {
      onClick: () => {
        (0, v.Z)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: S.titleContainer,
      children: [null != y && (0, l.jsx)("img", {
        className: S.logo,
        src: y,
        alt: t.title
      }), (0, l.jsx)(g.Z.Title, {
        children: t.title
      })]
    }), (0, l.jsx)("div", {
      className: S.titles,
      children: t.pages.map((e, t) => (0, l.jsx)(g.Z.Title, {
        onClick: () => {
          (0, v.Z)({
            guildId: n,
            pageIndex: t
          })
        },
        wrapperClassName: S.titleWrapper,
        className: o()(S.pageTitleContainer, {
          [S.selectedPageIndicator]: a === t
        }),
        children: (0, l.jsx)(r.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), N && (0, l.jsxs)("div", {
      className: S.alignedRightContent,
      children: [(0, l.jsx)(Z, {
        content: (0, l.jsx)(r.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: A,
        ariaLabel: j.intl.string(j.t["7lZ31J"]),
        className: S.wishlistButton
      }), (0, l.jsx)(Z, {
        onClick: M,
        ariaLabel: j.intl.string(j.t.hvVgAZ),
        content: (0, l.jsx)(r.xvT, {
          variant: "text-sm/medium",
          children: j.intl.string(j.t.hvVgAZ)
        }),
        className: S.learnMoreButton
      })]
    })]
  })
}