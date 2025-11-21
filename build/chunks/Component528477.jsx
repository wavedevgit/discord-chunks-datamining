/** Chunk was on 91394 **/
/** chunk id: 528477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk336197 = require("./336197.js"),
  Chunk612659 = require("./612659.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk299886 = require("./299886.js"),
  Chunk37279 = require("./37279.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk163646 = require("./163646.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742098 = require("./742098.js"),
  Chunk932889 = require("./932889.js");
let j = e => {
  let {
    onClose: t
  } = e, n = (0, s.m)(), {
    installationStatus: j,
    perkAvailableToUser: _,
    isSupportedPrivateBrowsingPerkPlatform: y,
    isWeb: C,
    connectionStatus: S
  } = (0, m.xf)(), {
    enabled: E
  } = p.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), N = (0, l.useCallback)(() => {
    (0, i.Z)(x.Z5c.NITRO_HOME), t()
  }, [t]), T = (0, l.useCallback)(() => {
    (0, c.openUserSettings)(o.n.ADVANCED_PANEL, {
      section: x.oAB.ADVANCED
    })
  }, []), O = [u.Ij.CONNECTED].includes(S), P = y && E && ![u._n.ZERO_TRUST, u._n.ERROR].includes(j) && !C && (!n || _), I = (0, l.useMemo)(() => {
    switch (S) {
      case u.Ij.CONNECTED:
        return f.intl.string(g.default.FBu3XJ);
      case u.Ij.INITIALIZING:
        return f.intl.string(g.default["00vkCU"]);
      default:
        return f.intl.string(g.default["A70/wR"])
    }
  }, [S]), w = (0, l.useMemo)(() => {
    if (!_) return f.intl.string(g.default.KN6HOb);
    switch (j) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return I;
      default:
        return f.intl.string(g.default.KN6HOb)
    }
  }, [j, _, I]), k = (0, l.useMemo)(() => {
    if (!_) return (0, a.jsx)(r.xvT, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: f.intl.format(g.default["0UfKTY"], {
        helpdeskArticle: d.w
      })
    });
    switch (j) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(r.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: O ? f.intl.format(g.default.zwW10o, {
            onClick: () => {
              N()
            }
          }) : f.intl.format(g.default.D4hu0v, {
            onClick: () => {
              T()
            }
          })
        });
      default:
        return (0, a.jsx)(r.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: f.intl.format(g.default.D4hu0v, {
            onClick: () => {
              T()
            }
          })
        })
    }
  }, [j, _, O, T, N]);
  return P ? (0, a.jsxs)("div", {
    className: b.container,
    children: [(0, a.jsx)(h.v, {
      className: b.betaBadge
    }), (0, a.jsx)(r.$1m, {
      color: "nitro-pink",
      offsetBottom: false,
      className: b.gradientBackground,
      children: (0, a.jsxs)("div", {
        className: b.contentContainer,
        children: [(0, a.jsx)("img", {
          src: v,
          className: b.graphicContainer,
          alt: "Private Browsing Perk"
        }), (0, a.jsxs)("div", {
          className: b.details,
          children: [(0, a.jsx)(r.X6q, {
            variant: "heading-md/semibold",
            children: w
          }), k]
        })]
      })
    })]
  }) : null
}