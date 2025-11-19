/** Chunk was on 85668 **/
/** chunk id: 528477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => p
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
  Chunk80354 = require("./80354.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk645023 = require("./645023.js"),
  Chunk932889 = require("./932889.js");
let p = t => {
  let {
    onClose: e
  } = t, n = (0, s.m)(), {
    installationStatus: p,
    perkAvailableToUser: N,
    isSupportedPrivateBrowsingPerkPlatform: v,
    isWeb: I,
    connectionStatus: b
  } = (0, m.xf)(), {
    enabled: T
  } = x.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), A = (0, r.useCallback)(() => {
    (0, i.Z)(f.Z5c.NITRO_HOME), e()
  }, [e]), j = (0, r.useCallback)(() => {
    (0, o.openUserSettings)(c.n.ADVANCED_PANEL, {
      section: f.oAB.ADVANCED
    })
  }, []), D = [u.Ij.CONNECTED].includes(b), E = v && T && ![u._n.ZERO_TRUST, u._n.ERROR].includes(p) && !I && (!n || N), L = (0, r.useMemo)(() => {
    switch (b) {
      case u.Ij.CONNECTED:
        return C.intl.string(h.default.FBu3XJ);
      case u.Ij.INITIALIZING:
        return C.intl.string(h.default["00vkCU"]);
      default:
        return C.intl.string(h.default["A70/wR"])
    }
  }, [b]), M = (0, r.useMemo)(() => {
    if (!N) return C.intl.string(h.default.KN6HOb);
    switch (p) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return L;
      default:
        return C.intl.string(h.default.KN6HOb)
    }
  }, [p, N, L]), O = (0, r.useMemo)(() => {
    if (!N) return (0, a.jsx)(l.xvT, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: C.intl.format(h.default["0UfKTY"], {
        helpdeskArticle: d.w
      })
    });
    switch (p) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(l.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: D ? C.intl.format(h.default.zwW10o, {
            onClick: () => {
              A()
            }
          }) : C.intl.format(h.default.D4hu0v, {
            onClick: () => {
              j()
            }
          })
        });
      default:
        return (0, a.jsx)(l.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: C.intl.format(h.default.D4hu0v, {
            onClick: () => {
              j()
            }
          })
        })
    }
  }, [p, N, D, j, A]);
  return E ? (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)(_.v, {
      className: g.betaBadge
    }), (0, a.jsx)(l.$1m, {
      color: "nitro-pink",
      offsetBottom: false,
      className: g.gradientBackground,
      children: (0, a.jsxs)("div", {
        className: g.contentContainer,
        children: [(0, a.jsx)("img", {
          src: k,
          className: g.graphicContainer,
          alt: "Private Browsing Perk"
        }), (0, a.jsxs)("div", {
          className: g.details,
          children: [(0, a.jsx)(l.X6q, {
            variant: "heading-md/semibold",
            children: M
          }), O]
        })]
      })
    })]
  }) : null
}