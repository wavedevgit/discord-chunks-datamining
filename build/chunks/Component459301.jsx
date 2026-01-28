/** Chunk was on 28979 **/
/** chunk id: 459301, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => Y
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
let Y = () => {
    let t = (0, o.q)((0, d.Ay)()),
      {
        analyticsLocations: e
      } = (0, S.Ay)(A.A.CF_WARP_SETTINGS);
    return (0, l.useEffect)(() => {
      D.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
        type: G.e.PRIVACY_PERK_SETTINGS,
        location_stack: e
      })
    }, [e]), (0, n.jsxs)("div", {
      className: h.V1,
      children: [(0, n.jsxs)(r.hLv, {
        color: "pink",
        children: [(0, n.jsx)("div", {
          className: h.N1,
          children: (0, n.jsxs)("div", {
            className: h.wx,
            children: [(0, n.jsxs)("div", {
              className: h.QF,
              children: [(0, n.jsx)(L.A, {
                color: t ? "black" : "white"
              }), (0, n.jsx)("div", {
                className: h.zN
              }), (0, n.jsx)("img", {
                src: t ? M : U,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, n.jsx)(c.q, {})]
          })
        }), (0, n.jsxs)("div", {
          className: h.hQ,
          children: [(0, n.jsx)("img", {
            src: X,
            width: "100",
            alt: "Private browsing perk logo"
          }), (0, n.jsxs)("div", {
            className: h.Qs,
            children: [(0, n.jsx)(P.F, {}), (0, n.jsx)(R.q, {})]
          }), (0, n.jsx)("div", {
            className: h.yP
          }), (0, n.jsx)("div", {
            className: h.OQ,
            children: (0, n.jsx)(k, {})
          })]
        })]
      }), (0, n.jsx)(m.u, {})]
    })
  },
  k = () => {
    let {
      installationStatus: t,
      isWeb: e,
      setInstallationStatus: i
    } = (0, O.lV)(), o = (0, g.L)(), d = (0, l.useRef)(false);
    if ((0, l.useEffect)(() => () => {
        d.current || C.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
      }, [d, o]), e) return (0, n.jsx)(I.X, {
      onClick: () => {
        d.current = true
      }
    });
    if (!o) return (0, n.jsxs)("div", {
      className: h._u,
      children: [(0, n.jsx)(E.A, {
        buttonTextOverride: y.intl.string(y.t["8x0jKT"]),
        subscriptionTier: G.pe.TIER_2,
        fullWidth: true,
        size: "sm",
        premiumModalAnalyticsLocation: {
          page: A.A.CF_WARP_SETTINGS
        },
        onClick: () => {
          d.current = true
        }
      }), (0, n.jsx)(a.$nd, {
        variant: "secondary",
        text: y.intl.string(y.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, u.closeModal)(p.USER_SETTINGS_MODAL_KEY), (0, b.pX)(f.BVt.APPLICATION_STORE), d.current = true
        }
      })]
    });
    switch (t) {
      case _.Lk.ERROR:
      case _.Lk.NOT_INSTALLED:
        return (0, n.jsx)(v.y, {
          onClick: () => d.current = true
        });
      case _.Lk.INSTALLED:
        return (0, n.jsx)(N.X, {});
      case _.Lk.ZERO_TRUST:
        break;
      case _.Lk.EXISTING_INSTALLATION:
        return (0, n.jsx)(a.$nd, {
          variant: "primary",
          onClick: () => {
            (0, T.u)(f.HAw.NITRO_WARP_CTA_CLICKED, {
              is_enable_warp: true
            }), i(_.Lk.READY_FOR_LICENSE), d.current = true
          },
          text: y.intl.string(V.default.J09UWz)
        });
      case _.Lk.INSTALLING:
      case _.Lk.READY_FOR_LICENSE:
      case _.Lk.WAITING_FOR_TERMS:
      case _.Lk.INSTALLING_TIMEOUT:
        return (0, n.jsx)("div", {
          className: h.u1,
          children: (0, n.jsx)(r.y$y, {
            type: r.tVU.SPINNING_CIRCLE
          })
        })
    }
    return null
  }