/** Chunk was on 14078 **/
/** chunk id: 964395, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk371794 = require("./371794.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk44724 = require("./44724.js"),
  Chunk995393 = require("./995393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk848464 = require("./848464.js");

function E(e) {
  let {
    content: l,
    onClick: t,
    ariaLabel: s,
    className: a
  } = e;
  return (0, n.jsx)(d.DUT, {
    className: i()(b.gb, a),
    onClick: t,
    "aria-label": s,
    children: l
  })
}

function S(e) {
  let {
    guildId: l,
    storefront: t,
    selectedPageIndex: a
  } = e, S = (0, d.Mwr)((0, o.Ay)()), C = (0, r.bG)([p.default], () => p.default.getCurrentUser()), N = (0, h.jM)(), {
    analyticsLocations: L
  } = (0, u.Ay)(), R = s.useCallback(() => {
    (null == C ? true : C.id) != null && (0, _.openUserProfileModal)({
      userId: C.id,
      tabSection: v.RP.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.A.SOCIAL_LAYER_STOREFRONT]
    })
  }, [C]), T = s.useCallback(() => {
    I.default.track(k.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == N ? true : N.sessionId,
      cta_type: m.ST.LEARN_MORE,
      location_stack: L
    }), window.open(f.A.getArticleURL(k.MVz.SOCIAL_LAYER_STOREFRONT))
  }, [N, L]);
  if (null == t) return null;
  let y = null != t.logoAssetId ? (0, x.YE)(t.applicationId, t.logoAssetId, 75) : null,
    M = null != t.lightThemeLogoAssetId ? (0, x.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    O = null;
  return O = S ? null != y ? y : M : null != M ? M : y, (0, n.jsxs)(g.A, {
    disableDoubleClick: true,
    className: b.N1,
    children: [(0, n.jsxs)(d.DUT, {
      onClick: () => {
        (0, A.default)({
          guildId: l,
          pageIndex: 0
        })
      },
      className: b.gn,
      children: [null != O && (0, n.jsx)("img", {
        className: b.wm,
        src: O,
        alt: t.title
      }), (0, n.jsx)(g.A.Title, {
        children: t.title
      })]
    }), (0, n.jsx)("div", {
      className: b.YC,
      children: t.pages.map((e, t) => (0, n.jsx)(g.A.Title, {
        onClick: () => {
          (0, A.default)({
            guildId: l,
            pageIndex: t
          })
        },
        wrapperClassName: b.oB,
        className: i()(b.xT, {
          [b.ys]: a === t
        }),
        children: (0, n.jsx)(d.EYj, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), (0, n.jsxs)("div", {
      className: b.sZ,
      children: [(0, n.jsx)(E, {
        content: (0, n.jsx)(d.C3E, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: R,
        ariaLabel: j.intl.string(j.t["7lZ31J"]),
        className: b.ij
      }), (0, n.jsx)(E, {
        onClick: T,
        ariaLabel: j.intl.string(j.t.hvVgAZ),
        content: (0, n.jsx)(d.EYj, {
          variant: "text-sm/medium",
          children: j.intl.string(j.t.hvVgAZ)
        }),
        className: b.AJ
      })]
    })]
  })
}