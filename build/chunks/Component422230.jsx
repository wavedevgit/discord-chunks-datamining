/** Chunk was on 65599 **/
/** chunk id: 422230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk890138 = require("./890138.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk22007 = require("./22007.js"),
  Chunk857586 = require("./857586.jsx"),
  Chunk757036 = require("./757036.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk967370 = require("./967370.js"),
  Chunk144605 = require("./144605.jsx"),
  Chunk557571 = require("./557571.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk895431 = require("./895431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk405040 = require("./405040.js"),
  Chunk446115 = require("./446115.js");
let O = e => {
  let {
    onClose: t
  } = e, n = (0, u.L)(), {
    installationStatus: O,
    perkAvailableToUser: E,
    isSupportedPrivateBrowsingPerkPlatform: T,
    isWeb: N,
    connectionStatus: w
  } = (0, v.lV)(), I = (0, f.lM)("private_browsing_perk_settings_page"), k = (0, l.useCallback)(() => {
    (0, c.A)(j.BVt.NITRO_HOME), t()
  }, [t]), P = (0, l.useCallback)(() => {
    (0, p.openUserSettings)(m.X.PRIVATE_BROWSING_PANEL, {
      section: j.nc_.PRIVATE_BROWSING
    })
  }, []), R = [g.l7.CONNECTED].includes(w), D = T && I && ![g.Lk.ZERO_TRUST, g.Lk.ERROR].includes(O) && !N && (!n || E), M = (0, l.useMemo)(() => {
    switch (w) {
      case g.l7.CONNECTED:
        return A.intl.string(y.default.FBu3XJ);
      case g.l7.INITIALIZING:
        return A.intl.string(y.default["00vkCU"]);
      default:
        return A.intl.string(y.default["A70/wR"])
    }
  }, [w]), L = (0, l.useMemo)(() => {
    if (!E) return A.intl.string(y.default.KN6HOb);
    switch (O) {
      case g.Lk.INSTALLED:
      case g.Lk.EXISTING_INSTALLATION:
        return M;
      default:
        return A.intl.string(y.default.KN6HOb)
    }
  }, [O, E, M]), U = (0, l.useMemo)(() => {
    if (!E) return (0, a.jsx)(r.EYj, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: A.intl.format(y.default.UDPKcX, {
        helpdeskArticle: x.V
      })
    });
    switch (O) {
      case g.Lk.INSTALLED:
      case g.Lk.EXISTING_INSTALLATION:
        return (0, a.jsx)(r.EYj, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: R ? A.intl.format(y.default.zwW10o, {
            onClick: () => {
              (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_PERKS_CLICKED, {}), k()
            }
          }) : A.intl.format(y.default.D4hu0v, {
            onClick: () => {
              (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), P()
            }
          })
        });
      default:
        return (0, a.jsx)(r.EYj, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children: A.intl.format(y.default.D4hu0v, {
            onClick: () => {
              (0, i.u)(j.HAw.NITRO_PRIVACY_UPSELL_SETTINGS_CLICKED, {}), P()
            }
          })
        })
    }
  }, [O, E, R, P, k]), {
    analyticsLocations: B
  } = (0, o.Ay)(s.A.MASKED_LINK);
  return ((0, l.useEffect)(() => {
    D && h.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
      type: _.e.PRIVACY_PERK_EXIT_MODAL,
      location_stack: B
    })
  }, [B, D]), D) ? (0, a.jsxs)("div", {
    className: C.kL,
    children: [(0, a.jsx)(b.q, {
      className: C.aZ
    }), (0, a.jsxs)("div", {
      className: C.hQ,
      children: [E && (0, a.jsx)(r.hLv, {
        className: C.h4,
        offsetBottom: false,
        color: "nitro-pink",
        children: (0, a.jsx)("div", {
          className: C.ZS,
          children: (0, a.jsx)("img", {
            src: S,
            className: C.KD,
            alt: "Private Browsing Perk"
          })
        })
      }), (0, a.jsxs)("div", {
        className: C.zH,
        children: [(0, a.jsx)(r.DZT, {
          variant: "heading-md/semibold",
          children: L
        }), U]
      }), !E && (0, a.jsx)("div", {
        className: C.OQ,
        children: (0, a.jsx)(d.A, {
          buttonTextOverride: A.intl.string(A.t["8x0jKT"]),
          subscriptionTier: _.pe.TIER_2,
          size: "sm",
          premiumModalAnalyticsLocation: {
            page: s.A.MASKED_LINK
          }
        })
      })]
    })]
  }) : null
}