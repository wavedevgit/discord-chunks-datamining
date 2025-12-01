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
  } = t, n = (0, d.m)(), {
    installationStatus: L,
    perkAvailableToUser: v,
    isSupportedPrivateBrowsingPerkPlatform: b,
    isWeb: A,
    connectionStatus: j
  } = (0, h.xf)(), {
    enabled: S
  } = f.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), M = (0, r.useCallback)(() => {
    (0, o.Z)(g.Z5c.NITRO_HOME), e()
  }, [e]), R = (0, r.useCallback)(() => {
    (0, _.openUserSettings)(u.n.PRIVATE_BROWSING_PANEL, {
      section: g.oAB.CF_WARP
    })
  }, []), D = [C.Ij.CONNECTED].includes(j), O = b && S && ![C._n.ZERO_TRUST, C._n.ERROR].includes(L) && !A && (!n || v), K = (0, r.useMemo)(() => {
    switch (j) {
      case C.Ij.CONNECTED:
        return N.intl.string(E.default.FBu3XJ);
      case C.Ij.INITIALIZING:
        return N.intl.string(E.default["00vkCU"]);
      default:
        return N.intl.string(E.default["A70/wR"])
    }
  }, [j]), P = (0, r.useMemo)(() => {
    if (!v) return N.intl.string(E.default.KN6HOb);
    switch (L) {
      case C._n.INSTALLED:
      case C._n.EXISTING_INSTALLATION:
        return K;
      default:
        return N.intl.string(E.default.KN6HOb)
    }
  }, [L, v, K]), B = (0, r.useMemo)(() => {
    if (!v) return (0, a.jsx)(s.xvT, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: N.intl.format(E.default["0UfKTY"], {
        helpdeskArticle: m.w
      })
    });
    switch (L) {
      case C._n.INSTALLED:
      case C._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(s.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: D ? N.intl.format(E.default.zwW10o, {
            onClick: () => {
              (0, i.j)(g.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), M()
            }
          }) : N.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, i.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R()
            }
          })
        });
      default:
        return (0, a.jsx)(s.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: N.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, i.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R()
            }
          })
        })
    }
  }, [L, v, D, R, M]), {
    analyticsLocations: w
  } = (0, c.ZP)(l.Z.MASKED_LINK);
  return ((0, r.useEffect)(() => {
    O && x.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
      type: p.cd.PRIVACY_PERK_EXIT_MODAL,
      location_stack: w
    })
  }, [w, O]), O) ? (0, a.jsxs)("div", {
    className: k.container,
    children: [(0, a.jsx)(I.v, {
      className: k.betaBadge
    }), (0, a.jsx)(s.$1m, {
      color: "nitro-pink",
      offsetBottom: false,
      className: k.gradientBackground,
      children: (0, a.jsxs)("div", {
        className: k.contentContainer,
        children: [(0, a.jsx)("img", {
          src: T,
          className: k.graphicContainer,
          alt: "Private Browsing Perk"
        }), (0, a.jsxs)("div", {
          className: k.details,
          children: [(0, a.jsx)(s.X6q, {
            variant: "heading-md/semibold",
            children: P
          }), B]
        })]
      })
    })]
  }) : null
}