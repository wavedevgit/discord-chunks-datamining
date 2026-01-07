/** Chunk was on 77069 **/
/** chunk id: 868802, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => M
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let M = () => {
    let t = (0, a.a)((0, T.ZP)()),
      {
        analyticsLocations: e
      } = (0, c.ZP)(S.Z.CF_WARP_SETTINGS);
    return (0, l.useEffect)(() => {
      f.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
        type: D.cd.PRIVACY_PERK_SETTINGS,
        location_stack: e
      })
    }, [e]), (0, i.jsxs)("div", {
      className: V.settingsContainer,
      children: [(0, i.jsxs)(s.$1m, {
        color: "pink",
        children: [(0, i.jsx)("div", {
          className: V.headerContainer,
          children: (0, i.jsxs)("div", {
            className: V.header,
            children: [(0, i.jsxs)("div", {
              className: V.headerLogos,
              children: [(0, i.jsx)(C.Z, {
                color: t ? "black" : "white"
              }), (0, i.jsx)("div", {
                className: V.headerDivider
              }), (0, i.jsx)("img", {
                src: t ? Z : G,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, i.jsx)(g.v, {})]
          })
        }), (0, i.jsxs)("div", {
          className: V.contentContainer,
          children: [(0, i.jsx)("img", {
            src: h,
            width: "100",
            alt: "Private browsing perk logo"
          }), (0, i.jsxs)("div", {
            className: V.content,
            children: [(0, i.jsx)(R.C, {}), (0, i.jsx)(P.R, {})]
          }), (0, i.jsx)("div", {
            className: V.contentSpacer
          }), (0, i.jsx)("div", {
            className: V.ctaContainer,
            children: (0, i.jsx)(U, {})
          })]
        })]
      }), (0, i.jsx)(m.p, {})]
    })
  },
  U = () => {
    let {
      installationStatus: t,
      isWeb: e,
      setInstallationStatus: n
    } = (0, N.xf)(), l = (0, d.m)();
    if (e) return (0, i.jsx)(I.U, {});
    if (!l) return (0, i.jsxs)("div", {
      className: V.subscribeBtnContainer,
      children: [(0, i.jsx)(E.Z, {
        buttonTextOverride: v.intl.string(v.t["8x0jKT"]),
        subscriptionTier: D.Si.TIER_2,
        fullWidth: true,
        size: "sm",
        premiumModalAnalyticsLocation: {
          page: S.Z.CF_WARP_SETTINGS
        }
      }), (0, i.jsx)(r.zxk, {
        variant: "secondary",
        text: v.intl.string(v.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, u.closeModal)(L.USER_SETTINGS_MODAL_KEY), (0, O.uL)(b.Z5c.APPLICATION_STORE)
        }
      })]
    });
    switch (t) {
      case _._n.ERROR:
      case _._n.NOT_INSTALLED:
        return (0, i.jsx)(p.R, {});
      case _._n.INSTALLED:
        return (0, i.jsx)(A.n, {});
      case _._n.ZERO_TRUST:
        break;
      case _._n.EXISTING_INSTALLATION:
        return (0, i.jsx)(r.zxk, {
          variant: "primary",
          onClick: () => {
            (0, o.j)(b.rMx.NITRO_WARP_CTA_CLICKED, {
              is_enable_warp: true
            }), n(_._n.READY_FOR_LICENSE)
          },
          text: v.intl.string(y.default.J09UWz)
        });
      case _._n.INSTALLING:
      case _._n.READY_FOR_LICENSE:
      case _._n.WAITING_FOR_TERMS:
      case _._n.INSTALLING_TIMEOUT:
        return (0, i.jsx)("div", {
          className: V.spinner,
          children: (0, i.jsx)(s.$jN, {
            type: s.RAz.SPINNING_CIRCLE
          })
        })
    }
    return null
  }