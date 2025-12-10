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
  Chunk237396 = require("./237396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742098 = require("./742098.js"),
  Chunk932889 = require("./932889.js");
let L = t => {
  let {
    onClose: e
  } = t, n = (0, u.m)(), {
    installationStatus: L,
    perkAvailableToUser: k,
    isSupportedPrivateBrowsingPerkPlatform: A,
    isWeb: j,
    connectionStatus: S
  } = (0, h.xf)(), {
    enabled: M
  } = I.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), R = (0, r.useCallback)(() => {
    (0, o.Z)(g.Z5c.NITRO_HOME), e()
  }, [e]), D = (0, r.useCallback)(() => {
    (0, m.openUserSettings)(_.n.PRIVATE_BROWSING_PANEL, {
      section: g.oAB.CF_WARP
    })
  }, []), K = [f.Ij.CONNECTED].includes(S), O = A && M && ![f._n.ZERO_TRUST, f._n.ERROR].includes(L) && !j && (!n || k), P = (0, r.useMemo)(() => {
    switch (S) {
      case f.Ij.CONNECTED:
        return T.intl.string(E.default.FBu3XJ);
      case f.Ij.INITIALIZING:
        return T.intl.string(E.default["00vkCU"]);
      default:
        return T.intl.string(E.default["A70/wR"])
    }
  }, [S]), B = (0, r.useMemo)(() => {
    if (!k) return T.intl.string(E.default.KN6HOb);
    switch (L) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return P;
      default:
        return T.intl.string(E.default.KN6HOb)
    }
  }, [L, k, P]), w = (0, r.useMemo)(() => {
    if (!k) return (0, a.jsx)(i.xvT, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: T.intl.format(E.default["0UfKTY"], {
        helpdeskArticle: C.w
      })
    });
    switch (L) {
      case f._n.INSTALLED:
      case f._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: K ? T.intl.format(E.default.zwW10o, {
            onClick: () => {
              (0, l.j)(g.rMx.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), R()
            }
          }) : T.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, l.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), D()
            }
          })
        });
      default:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: T.intl.format(E.default.D4hu0v, {
            onClick: () => {
              (0, l.j)(g.rMx.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), D()
            }
          })
        })
    }
  }, [L, k, K, D, R]), {
    analyticsLocations: U
  } = (0, c.ZP)(s.Z.MASKED_LINK);
  return ((0, r.useEffect)(() => {
    O && x.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.PRIVACY_PERK_EXIT_MODAL,
      location_stack: U
    })
  }, [U, O]), O) ? (0, a.jsxs)("div", {
    className: b.container,
    children: [(0, a.jsx)(p.v, {
      className: b.betaBadge
    }), (0, a.jsxs)("div", {
      className: b.contentContainer,
      children: [k && (0, a.jsx)(i.$1m, {
        className: b.imageWrapper,
        offsetBottom: false,
        color: "nitro-pink",
        children: (0, a.jsx)("div", {
          className: b.imageContainer,
          children: (0, a.jsx)("img", {
            src: v,
            className: b.graphicContainer,
            alt: "Private Browsing Perk"
          })
        })
      }), (0, a.jsxs)("div", {
        className: b.details,
        children: [(0, a.jsx)(i.X6q, {
          variant: "heading-md/semibold",
          children: B
        }), w]
      }), !k && (0, a.jsx)("div", {
        className: b.ctaContainer,
        children: (0, a.jsx)(d.Z, {
          buttonTextOverride: T.intl.string(T.t["8x0jKT"]),
          subscriptionTier: N.Si.TIER_2,
          size: "sm",
          premiumModalAnalyticsLocation: {
            page: s.Z.MASKED_LINK
          }
        })
      })]
    })]
  }) : null
}