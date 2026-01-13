/** Chunk was on 77033 **/
/** chunk id: 720983, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk418993 = require("./418993.js");

function S(e) {
  let {
    content: n,
    onClick: t,
    ariaLabel: i,
    className: a
  } = e;
  return (0, l.jsx)(s.P3F, {
    className: o()(j.iconButton, a),
    onClick: t,
    "aria-label": i,
    children: n
  })
}

function Z(e) {
  let {
    guildId: n,
    storefront: t,
    selectedPageIndex: a
  } = e, Z = (0, s.wjy)((0, d.ZP)()), E = (0, r.e7)([p.default], () => p.default.getCurrentUser()), N = (0, _.oR)(), {
    analyticsLocations: L
  } = (0, u.ZP)(), R = i.useCallback(() => {
    (null == E ? true : E.id) != null && (0, g.openUserProfileModal)({
      userId: E.id,
      tabSection: C.oh.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.Z.SOCIAL_LAYER_STOREFRONT]
    })
  }, [E]), T = i.useCallback(() => {
    I.default.track(v.rMx.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == N ? true : N.sessionId,
      cta_type: b.US.LEARN_MORE,
      location_stack: L
    }), window.open(h.Z.getArticleURL(v.BhN.SOCIAL_LAYER_STOREFRONT))
  }, [N, L]);
  if (null == t) return null;
  let A = null != t.logoAssetId ? (0, x._W)(t.applicationId, t.logoAssetId, 75) : null,
    M = null != t.lightThemeLogoAssetId ? (0, x._W)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    O = null;
  return O = Z ? null != A ? A : M : null != M ? M : A, (0, l.jsxs)(f.Z, {
    disableDoubleClick: true,
    className: j.headerContainer,
    children: [(0, l.jsxs)(s.P3F, {
      onClick: () => {
        (0, m.default)({
          guildId: n,
          pageIndex: 0
        })
      },
      className: j.titleContainer,
      children: [null != O && (0, l.jsx)("img", {
        className: j.logo,
        src: O,
        alt: t.title
      }), (0, l.jsx)(f.Z.Title, {
        children: t.title
      })]
    }), (0, l.jsx)("div", {
      className: j.titles,
      children: t.pages.map((e, t) => (0, l.jsx)(f.Z.Title, {
        onClick: () => {
          (0, m.default)({
            guildId: n,
            pageIndex: t
          })
        },
        wrapperClassName: j.titleWrapper,
        className: o()(j.pageTitleContainer, {
          [j.selectedPageIndicator]: a === t
        }),
        children: (0, l.jsx)(s.xvT, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), (0, l.jsxs)("div", {
      className: j.alignedRightContent,
      children: [(0, l.jsx)(S, {
        content: (0, l.jsx)(s.h_8, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: R,
        ariaLabel: k.intl.string(k.t["7lZ31J"]),
        className: j.wishlistButton
      }), (0, l.jsx)(S, {
        onClick: T,
        ariaLabel: k.intl.string(k.t.hvVgAZ),
        content: (0, l.jsx)(s.xvT, {
          variant: "text-sm/medium",
          children: k.intl.string(k.t.hvVgAZ)
        }),
        className: j.learnMoreButton
      })]
    })]
  })
}