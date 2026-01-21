/** Chunk was on 77069 **/
/** chunk id: 868802, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => Y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk547943 = require("./547943.js"),
  Chunk793030 = require("./793030.js"),
  Chunk952265 = require("./952265.js"),
  Chunk159691 = require("./159691.js"),
  Chunk511857 = require("./511857.js"),
  Chunk594421 = require("./594421.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk5900 = require("./5900.js"),
  Chunk37279 = require("./37279.jsx"),
  Chunk969521 = require("./969521.jsx"),
  Chunk773275 = require("./773275.jsx"),
  Chunk584197 = require("./584197.jsx"),
  Chunk588529 = require("./588529.js"),
  Chunk703656 = require("./703656.js"),
  Chunk589072 = require("./589072.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk116282 = require("./116282.jsx"),
  Chunk614074 = require("./614074.jsx"),
  Chunk233751 = require("./233751.jsx"),
  Chunk868087 = require("./868087.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472057 = require("./472057.js"),
  Chunk74186 = require("./74186.js"),
  Chunk93109 = require("./93109.js"),
  Chunk446818 = require("./446818.js"),
  Chunk932889 = require("./932889.js");
let Y = () => {
    let t = (0, o.a)((0, S.ZP)()),
      {
        analyticsLocations: e
      } = (0, E.ZP)(c.Z.CF_WARP_SETTINGS);
    return (0, l.useEffect)(() => {
      P.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
        type: y.cd.PRIVACY_PERK_SETTINGS,
        location_stack: e
      })
    }, [e]), (0, i.jsxs)("div", {
      className: Z.settingsContainer,
      children: [(0, i.jsxs)(u.$1m, {
        color: "pink",
        children: [(0, i.jsx)("div", {
          className: Z.headerContainer,
          children: (0, i.jsxs)("div", {
            className: Z.header,
            children: [(0, i.jsxs)("div", {
              className: Z.headerLogos,
              children: [(0, i.jsx)(L.Z, {
                color: t ? "black" : "white"
              }), (0, i.jsx)("div", {
                className: Z.headerDivider
              }), (0, i.jsx)("img", {
                src: t ? M : h,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, i.jsx)(I.v, {})]
          })
        }), (0, i.jsxs)("div", {
          className: Z.contentContainer,
          children: [(0, i.jsx)("img", {
            src: U,
            width: "100",
            alt: "Private browsing perk logo"
          }), (0, i.jsxs)("div", {
            className: Z.content,
            children: [(0, i.jsx)(m.C, {}), (0, i.jsx)(p.R, {})]
          }), (0, i.jsx)("div", {
            className: Z.contentSpacer
          }), (0, i.jsx)("div", {
            className: Z.ctaContainer,
            children: (0, i.jsx)(k, {})
          })]
        })]
      }), (0, i.jsx)(D.p, {})]
    })
  },
  k = () => {
    let {
      installationStatus: t,
      isWeb: e,
      setInstallationStatus: n
    } = (0, N.xf)(), o = (0, _.m)(), S = (0, l.useRef)(false);
    if ((0, l.useEffect)(() => () => {
        S.current || C.ZP.fireSurveyAction(o ? s.Y.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.Y.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
      }, [S, o]), e) return (0, i.jsx)(A.U, {
      onClick: () => {
        S.current = true
      }
    });
    if (!o) return (0, i.jsxs)("div", {
      className: Z.subscribeBtnContainer,
      children: [(0, i.jsx)(d.Z, {
        buttonTextOverride: V.intl.string(V.t["8x0jKT"]),
        subscriptionTier: y.Si.TIER_2,
        fullWidth: true,
        size: "sm",
        premiumModalAnalyticsLocation: {
          page: c.Z.CF_WARP_SETTINGS
        },
        onClick: () => {
          S.current = true
        }
      }), (0, i.jsx)(a.zxk, {
        variant: "secondary",
        text: V.intl.string(V.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, r.closeModal)(R.USER_SETTINGS_MODAL_KEY), (0, f.uL)(v.Z5c.APPLICATION_STORE), S.current = true
        }
      })]
    });
    switch (t) {
      case g._n.ERROR:
      case g._n.NOT_INSTALLED:
        return (0, i.jsx)(b.R, {
          onClick: () => S.current = true
        });
      case g._n.INSTALLED:
        return (0, i.jsx)(O.n, {});
      case g._n.ZERO_TRUST:
        break;
      case g._n.EXISTING_INSTALLATION:
        return (0, i.jsx)(a.zxk, {
          variant: "primary",
          onClick: () => {
            (0, T.j)(v.rMx.NITRO_WARP_CTA_CLICKED, {
              is_enable_warp: true
            }), n(g._n.READY_FOR_LICENSE), S.current = true
          },
          text: V.intl.string(G.default.J09UWz)
        });
      case g._n.INSTALLING:
      case g._n.READY_FOR_LICENSE:
      case g._n.WAITING_FOR_TERMS:
      case g._n.INSTALLING_TIMEOUT:
        return (0, i.jsx)("div", {
          className: Z.spinner,
          children: (0, i.jsx)(u.$jN, {
            type: u.RAz.SPINNING_CIRCLE
          })
        })
    }
    return null
  }