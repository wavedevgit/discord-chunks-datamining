/** Chunk was on 4670 **/
/** chunk id: 459301, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  m: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk517846 = require("./517846.js"),
  Chunk158954 = require("./158954.js"),
  Chunk192308 = require("./192308.js"),
  Chunk732955 = require("./732955.js"),
  Chunk462887 = require("./462887.js"),
  Chunk890138 = require("./890138.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk857586 = require("./857586.jsx"),
  Chunk757036 = require("./757036.js"),
  Chunk602450 = require("./602450.js"),
  Chunk144605 = require("./144605.jsx"),
  Chunk927766 = require("./927766.jsx"),
  Chunk557571 = require("./557571.jsx"),
  Chunk18640 = require("./18640.jsx"),
  Chunk236698 = require("./236698.js"),
  Chunk976860 = require("./976860.js"),
  Chunk392943 = require("./392943.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk715999 = require("./715999.jsx"),
  Chunk934370 = require("./934370.jsx"),
  Chunk450987 = require("./450987.jsx"),
  Chunk623375 = require("./623375.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js"),
  Chunk458017 = require("./458017.js"),
  Chunk120499 = require("./120499.js"),
  Chunk684399 = require("./684399.js"),
  Chunk446115 = require("./446115.js");
let x = () => {
    let e = (0, o.q)((0, T.Ay)()),
      {
        analyticsLocations: t
      } = (0, A.Ay)(c.A.CF_WARP_SETTINGS);
    return (0, l.useEffect)(() => {
      m.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
        type: y.e.PRIVACY_PERK_SETTINGS,
        location_stack: t
      })
    }, [t]), (0, n.jsxs)("div", {
      className: V.V1,
      children: [(0, n.jsxs)(r.hLv, {
        color: "pink",
        children: [(0, n.jsx)("div", {
          className: V.N1,
          children: (0, n.jsxs)("div", {
            className: V.wx,
            children: [(0, n.jsxs)("div", {
              className: V.QF,
              children: [(0, n.jsx)(p.A, {
                color: e ? "black" : "white"
              }), (0, n.jsx)("div", {
                className: V.zN
              }), (0, n.jsx)("img", {
                src: e ? M : U,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, n.jsx)(g.q, {})]
          })
        }), (0, n.jsxs)("div", {
          className: V.hQ,
          children: [(0, n.jsx)("img", {
            src: X,
            width: "100",
            alt: "Private browsing perk logo"
          }), (0, n.jsxs)("div", {
            className: V.Qs,
            children: [(0, n.jsx)(D.F, {}), (0, n.jsx)(L.q, {})]
          }), (0, n.jsx)("div", {
            className: V.yP
          }), (0, n.jsx)("div", {
            className: V.OQ,
            children: (0, n.jsx)(k, {})
          })]
        })]
      }), (0, n.jsx)(v.u, {})]
    })
  },
  k = () => {
    let {
      installationStatus: e,
      isWeb: t,
      setInstallationStatus: i
    } = (0, O.lV)(), o = (0, _.L)(), T = (0, l.useRef)(false);
    if ((0, l.useEffect)(() => () => {
        T.current || N.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
      }, [T, o]), t) return (0, n.jsx)(I.X, {
      onClick: () => {
        T.current = true
      }
    });
    if (!o) return (0, n.jsxs)("div", {
      className: V._u,
      children: [(0, n.jsx)(S.A, {
        buttonTextOverride: G.intl.string(G.t["8x0jKT"]),
        subscriptionTier: y.pe.TIER_2,
        fullWidth: true,
        size: "sm",
        premiumModalAnalyticsLocation: {
          page: c.A.CF_WARP_SETTINGS
        },
        onClick: () => {
          T.current = true
        }
      }), (0, n.jsx)(u.$nd, {
        variant: "secondary",
        text: G.intl.string(G.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, a.closeModal)(f.USER_SETTINGS_MODAL_KEY), (0, b.pX)(P.BVt.APPLICATION_STORE), T.current = true
        }
      })]
    });
    switch (e) {
      case E.Lk.ERROR:
      case E.Lk.NOT_INSTALLED:
        return (0, n.jsx)(R.y, {
          onClick: () => T.current = true
        });
      case E.Lk.INSTALLED:
        return (0, n.jsx)(C.X, {});
      case E.Lk.ZERO_TRUST:
        break;
      case E.Lk.EXISTING_INSTALLATION:
        return (0, n.jsx)(u.$nd, {
          variant: "primary",
          onClick: () => {
            (0, d.u)(P.HAw.NITRO_WARP_CTA_CLICKED, {
              is_enable_warp: true
            }), i(E.Lk.READY_FOR_LICENSE), T.current = true
          },
          text: G.intl.string(h.default.J09UWz)
        });
      case E.Lk.INSTALLING:
      case E.Lk.READY_FOR_LICENSE:
      case E.Lk.WAITING_FOR_TERMS:
      case E.Lk.INSTALLING_TIMEOUT:
        return (0, n.jsx)("div", {
          className: V.u1,
          children: (0, n.jsx)(r.y$y, {
            type: r.tVU.SPINNING_CIRCLE
          })
        })
    }
    return null
  }