/** Chunk was on 88282 **/
/** chunk id: 528477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => O
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
  Chunk237396 = require("./237396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742098 = require("./742098.js"),
  Chunk932889 = require("./932889.js");
let O = e => {
  let {
    onClose: t
  } = e, n = (0, u.m)(), {
    installationStatus: O,
    perkAvailableToUser: N,
    isSupportedPrivateBrowsingPerkPlatform: T,
    isWeb: P,
    connectionStatus: I
  } = (0, v.xf)(), {
    enabled: w
  } = g.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), k = (0, l.useCallback)(() => {
    (0, c.Z)(j.Z5c.NITRO_HOME), t()
  }, [t]), R = (0, l.useCallback)(() => {
    (0, p.openUserSettings)(m.n.PRIVATE_BROWSING_PANEL, {
      section: j.oAB.CF_WARP
    })
  }, []), A = [f.Ij.CONNECTED].includes(I), Z = T && w && ![f._n.ZERO_TRUST, f._n.ERROR].includes(O) && !P && (!n || N), D = (0, l.useMemo)(() => {
    switch (I) {
      case f.Ij.CONNECTED:
        return C.intl.string(y.default.FBu3XJ);
      case f.Ij.INITIALIZING:
        return C.intl.string(y.default["00vkCU"]);
      default:
        return C.intl.string(y.default["A70/wR"])
    }
  }, [I]), L = (0, l.useMemo)(() => {
    if (!N) return C.intl.string(y.default.KN6HOb);
    switch (O) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return D;
      default:
        return C.intl.string(y.default.KN6HOb)
    }
  }, [O, N, D]), M = (0, l.useMemo)(() => {
    if (!N) return (0, a.jsx)(r.xvT, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: C.intl.format(y.default["0UfKTY"], {
        helpdeskArticle: x.w
      })
    });
    switch (O) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(r.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: A ? C.intl.format(y.default.zwW10o, {
            onClick: () => {
              (0, i.j)(j.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), k()
            }
          }) : C.intl.format(y.default.D4hu0v, {
            onClick: () => {
              (0, i.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R()
            }
          })
        });
      default:
        return (0, a.jsx)(r.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: C.intl.format(y.default.D4hu0v, {
            onClick: () => {
              (0, i.j)(j.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), R()
            }
          })
        })
    }
  }, [O, N, A, R, k]), {
    analyticsLocations: U
  } = (0, o.ZP)(s.Z.MASKED_LINK);
  return ((0, l.useEffect)(() => {
    Z && h.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
      type: _.cd.PRIVACY_PERK_EXIT_MODAL,
      location_stack: U
    })
  }, [U, Z]), Z) ? (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)(b.v, {
      className: S.betaBadge
    }), (0, a.jsxs)("div", {
      className: S.contentContainer,
      children: [N && (0, a.jsx)(r.$1m, {
        className: S.imageWrapper,
        offsetBottom: false,
        color: "nitro-pink",
        children: (0, a.jsx)("div", {
          className: S.imageContainer,
          children: (0, a.jsx)("img", {
            src: E,
            className: S.graphicContainer,
            alt: "Private Browsing Perk"
          })
        })
      }), (0, a.jsxs)("div", {
        className: S.details,
        children: [(0, a.jsx)(r.X6q, {
          variant: "heading-md/semibold",
          children: L
        }), M]
      }), !N && (0, a.jsx)("div", {
        className: S.ctaContainer,
        children: (0, a.jsx)(d.Z, {
          buttonTextOverride: C.intl.string(C.t["8x0jKT"]),
          subscriptionTier: _.Si.TIER_2,
          size: "sm"
        })
      })]
    })]
  }) : null
}