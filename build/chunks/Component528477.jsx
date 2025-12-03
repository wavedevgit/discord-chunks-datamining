/** Chunk was on 85668 **/
/** chunk id: 528477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk594421 = require("./594421.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk336197 = require("./336197.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk299886 = require("./299886.js"),
  Chunk37279 = require("./37279.jsx"),
  Chunk773275 = require("./773275.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk163646 = require("./163646.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742098 = require("./742098.js"),
  Chunk932889 = require("./932889.js");
let L = t => {
  let {
    onClose: e
  } = t, n = (0, u.m)(), {
    installationStatus: L,
    perkAvailableToUser: b,
    isSupportedPrivateBrowsingPerkPlatform: j,
    isWeb: A,
    connectionStatus: S
  } = (0, I.xf)(), {
    enabled: R
  } = h.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), M = (0, r.useCallback)(() => {
    (0, o.Z)(g.Z5c.NITRO_HOME), e()
  }, [e]), D = (0, r.useCallback)(() => {
    (0, x.openUserSettings)(_.n.PRIVATE_BROWSING_PANEL, {
      section: g.oAB.CF_WARP
    })
  }, []), O = [f.Ij.CONNECTED].includes(S), K = j && R && ![f._n.ZERO_TRUST, f._n.ERROR].includes(L) && !A && (!n || b), P = (0, r.useMemo)(() => {
    switch (S) {
      case f.Ij.CONNECTED:
        return T.intl.string(E.default.FBu3XJ);
      case f.Ij.INITIALIZING:
        return T.intl.string(E.default["00vkCU"]);
      default:
        return T.intl.string(E.default["A70/wR"])
    }
  }, [S]), w = (0, r.useMemo)(() => {
    if (!b) return T.intl.string(E.default.KN6HOb);
    switch (L) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return P;
      default:
        return T.intl.string(E.default.KN6HOb)
    }
  }, [L, b, P]), y = (0, r.useMemo)(() => {
    if (!b) return (0, a.jsx)(i.xvT, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: T.intl.format(E.default["0UfKTY"], {
        helpdeskArticle: C.w
      })
    });
    switch (L) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: O ? T.intl.format(E.default.zwW10o, {
            onClick: () => {
              (0, s.j)(g.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), M()
            }
          }) : T.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, s.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), D()
            }
          })
        });
      default:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: T.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, s.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), D()
            }
          })
        })
    }
  }, [L, b, O, D, M]), {
    analyticsLocations: B
  } = (0, c.ZP)(l.Z.MASKED_LINK);
  return ((0, r.useEffect)(() => {
    K && m.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.PRIVACY_PERK_EXIT_MODAL,
      location_stack: B
    })
  }, [B, K]), K) ? (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(p.v, {
      className: v.betaBadge
    }), (0, a.jsxs)("div", {
      className: v.contentContainer,
      children: [b && (0, a.jsx)(i.$1m, {
        className: v.imageWrapper,
        offsetBottom: false,
        color: "nitro-pink",
        children: (0, a.jsx)("div", {
          className: v.imageContainer,
          children: (0, a.jsx)("img", {
            src: k,
            className: v.graphicContainer,
            alt: "Private Browsing Perk"
          })
        })
      }), (0, a.jsxs)("div", {
        className: v.details,
        children: [(0, a.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: w
        }), y]
      }), !b && (0, a.jsx)("div", {
        className: v.ctaContainer,
        children: (0, a.jsx)(d.Z, {
          buttonTextOverride: T.intl.string(T.t["8x0jKT"]),
          subscriptionTier: N.Si.TIER_2,
          size: "sm"
        })
      })]
    })]
  }) : null
}