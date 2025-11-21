/** Chunk was on 85668 **/
/** chunk id: 528477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => k
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
let k = t => {
  let {
    onClose: e
  } = t, n = (0, s.m)(), {
    installationStatus: k,
    perkAvailableToUser: N,
    isSupportedPrivateBrowsingPerkPlatform: v,
    isWeb: I,
    connectionStatus: b
  } = (0, m.xf)(), {
    enabled: T
  } = x.H.useConfig({
    location: "private_browsing_perk_settings_page"
  }), j = (0, r.useCallback)(() => {
    (0, l.Z)(f.Z5c.NITRO_HOME), e()
  }, [e]), A = (0, r.useCallback)(() => {
    (0, o.openUserSettings)(c.n.PRIVATE_BROWSING_PANEL, {
      section: f.oAB.CF_WARP
    })
  }, []), E = [u.Ij.CONNECTED].includes(b), L = v && T && ![u._n.ZERO_TRUST, u._n.ERROR].includes(k) && !I && (!n || N), D = (0, r.useMemo)(() => {
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
    switch (k) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return D;
      default:
        return C.intl.string(h.default.KN6HOb)
    }
  }, [k, N, D]), O = (0, r.useMemo)(() => {
    if (!N) return (0, a.jsx)(i.xvT, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: C.intl.format(h.default["0UfKTY"], {
        helpdeskArticle: d.w
      })
    });
    switch (k) {
      case u._n.INSTALLED:
      case u._n.EXISTING_INSTALLATION:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E ? C.intl.format(h.default.zwW10o, {
            onClick: () => {
              j()
            }
          }) : C.intl.format(h.default.D4hu0v, {
            onClick: () => {
              A()
            }
          })
        });
      default:
        return (0, a.jsx)(i.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: C.intl.format(h.default.D4hu0v, {
            onClick: () => {
              A()
            }
          })
        })
    }
  }, [k, N, E, A, j]);
  return L ? (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)(_.v, {
      className: g.betaBadge
    }), (0, a.jsx)(i.$1m, {
      color: "nitro-pink",
      offsetBottom: false,
      className: g.gradientBackground,
      children: (0, a.jsxs)("div", {
        className: g.contentContainer,
        children: [(0, a.jsx)("img", {
          src: p,
          className: g.graphicContainer,
          alt: "Private Browsing Perk"
        }), (0, a.jsxs)("div", {
          className: g.details,
          children: [(0, a.jsx)(i.X6q, {
            variant: "heading-md/semibold",
            children: M
          }), O]
        })]
      })
    })]
  }) : null
}