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
    ariaLabel: a,
    className: s
  } = e;
  return (0, n.jsx)(d.DUT, {
    className: i()(j.gb, s),
    onClick: t,
    "aria-label": a,
    children: l
  })
}

function S(e) {
  let {
    guildId: l,
    storefront: t,
    selectedPageIndex: s
  } = e, S = (0, d.Mwr)((0, o.Ay)()), N = (0, r.bG)([p.default], () => p.default.getCurrentUser()), L = (0, h.jM)(), {
    analyticsLocations: R
  } = (0, u.Ay)(), T = a.useCallback(() => {
    (null == N ? true : N.id) != null && (0, g.openUserProfileModal)({
      userId: N.id,
      tabSection: k.RP.WISHLIST,
      showGuildProfile: false,
      sourceAnalyticsLocations: [c.A.SOCIAL_LAYER_STOREFRONT]
    })
  }, [N]), C = a.useCallback(() => {
    I.default.track(m.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == L ? true : L.sessionId,
      cta_type: b.ST.LEARN_MORE,
      location_stack: R
    }), window.open(_.A.getArticleURL(m.MVz.SOCIAL_LAYER_STOREFRONT))
  }, [L, R]);
  if (null == t) return null;
  let y = null != t.logoAssetId ? (0, x.YE)(t.applicationId, t.logoAssetId, 75) : null,
    M = null != t.lightThemeLogoAssetId ? (0, x.YE)(t.applicationId, t.lightThemeLogoAssetId, 75) : null,
    O = null;
  return O = S ? null != y ? y : M : null != M ? M : y, (0, n.jsxs)(f.A, {
    disableDoubleClick: true,
    className: j.N1,
    children: [(0, n.jsxs)(d.DUT, {
      onClick: () => {
        (0, A.default)({
          guildId: l,
          pageIndex: 0
        })
      },
      className: j.gn,
      children: [null != O && (0, n.jsx)("img", {
        className: j.wm,
        src: O,
        alt: t.title
      }), (0, n.jsx)(f.A.Title, {
        children: t.title
      })]
    }), (0, n.jsx)("div", {
      className: j.YC,
      children: t.pages.map((e, t) => (0, n.jsx)(f.A.Title, {
        onClick: () => {
          (0, A.default)({
            guildId: l,
            pageIndex: t
          })
        },
        wrapperClassName: j.oB,
        className: i()(j.xT, {
          [j.ys]: s === t
        }),
        children: (0, n.jsx)(d.EYj, {
          variant: "text-sm/medium",
          children: e.title
        })
      }, "".concat(e.title, "-").concat(t)))
    }), (0, n.jsxs)("div", {
      className: j.sZ,
      children: [(0, n.jsx)(E, {
        content: (0, n.jsx)(d.C3E, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: T,
        ariaLabel: v.intl.string(v.t["7lZ31J"]),
        className: j.ij
      }), (0, n.jsx)(E, {
        onClick: C,
        ariaLabel: v.intl.string(v.t.hvVgAZ),
        content: (0, n.jsx)(d.EYj, {
          variant: "text-sm/medium",
          children: v.intl.string(v.t.hvVgAZ)
        }),
        className: j.AJ
      })]
    })]
  })
}