/** Chunk was on 77069 **/
/** chunk id: 868802, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => U
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
  Chunk237396 = require("./237396.js"),
  Chunk498374 = require("./498374.js"),
  Chunk93109 = require("./93109.js"),
  Chunk446818 = require("./446818.js"),
  Chunk932889 = require("./932889.js");
let U = () => {
    let t = (0, Chunk511857.a)((0, Chunk410030.ZP)()),
      {
        analyticsLocations: e
      } = (0, Chunk906732.ZP)(Chunk100527.Z.CF_WARP_SETTINGS);
    return (0, Chunk473749.useEffect)(() => {
      Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Chunk474936.cd.PRIVACY_PERK_SETTINGS,
        location_stack: exports
      })
    }, [exports]), (0, Chunk54381.jsxs)("div", {
      className: Chunk498374.settingsContainer,
      children: [(0, Chunk54381.jsxs)(Chunk793030.$1m, {
        color: "pink",
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk498374.headerContainer,
          children: (0, Chunk54381.jsxs)("div", {
            className: Chunk498374.header,
            children: [(0, Chunk54381.jsxs)("div", {
              className: Chunk498374.headerLogos,
              children: [(0, Chunk54381.jsx)(Chunk589072.Z, {
                color: module ? "black" : "white"
              }), (0, Chunk54381.jsx)("div", {
                className: Chunk498374.headerDivider
              }), (0, Chunk54381.jsx)("img", {
                src: module ? Chunk446818 : Chunk93109,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, Chunk54381.jsx)(Chunk37279.v, {})]
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk498374.contentContainer,
          children: [(0, Chunk54381.jsx)("img", {
            src: Chunk932889,
            width: "100",
            alt: "Private browsing perk logo"
          }), (0, Chunk54381.jsxs)("div", {
            className: Chunk498374.content,
            children: [(0, Chunk54381.jsx)(Chunk614074.C, {}), (0, Chunk54381.jsx)(Chunk116282.R, {})]
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk498374.contentSpacer
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk498374.ctaContainer,
            children: (0, Chunk54381.jsx)(j, {})
          })]
        })]
      }), (0, Chunk54381.jsx)(Chunk868087.p, {})]
    })
  },
  j = () => {
    let {
      installationStatus: t,
      isWeb: e,
      setInstallationStatus: n
    } = (0, Chunk773275.xf)(), l = (0, Chunk612659.m)();
    if (exports) return (0, Chunk54381.jsx)(Chunk969521.U, {});
    if (!Chunk473749) return (0, Chunk54381.jsxs)("div", {
      className: Chunk498374.subscribeBtnContainer,
      children: [(0, Chunk54381.jsx)(Chunk740594.Z, {
        buttonTextOverride: Chunk388032.intl.string(Chunk388032.t["8x0jKT"]),
        subscriptionTier: Chunk474936.Si.TIER_2,
        fullWidth: true,
        size: "sm",
        premiumModalAnalyticsLocation: {
          page: Chunk100527.Z.CF_WARP_SETTINGS
        }
      }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, Chunk952265.closeModal)(Chunk518596.USER_SETTINGS_MODAL_KEY), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
        }
      })]
    });
    switch (module) {
      case Chunk5900._n.ERROR:
      case Chunk5900._n.NOT_INSTALLED:
        return (0, Chunk54381.jsx)(Chunk233751.R, {});
      case Chunk5900._n.INSTALLED:
        return (0, Chunk54381.jsx)(Chunk584197.n, {});
      case Chunk5900._n.ZERO_TRUST:
        break;
      case Chunk5900._n.EXISTING_INSTALLATION:
        return (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          onClick: () => {
            (0, Chunk594421.j)(Chunk981631.rMx.NITRO_WARP_CTA_CLICKED, {
              is_enable_warp: true
            }), require(Chunk5900._n.READY_FOR_LICENSE)
          },
          text: Chunk388032.intl.string(Chunk237396.default.J09UWz)
        });
      case Chunk5900._n.INSTALLING:
      case Chunk5900._n.READY_FOR_LICENSE:
      case Chunk5900._n.WAITING_FOR_TERMS:
      case Chunk5900._n.INSTALLING_TIMEOUT:
        return (0, Chunk54381.jsx)("div", {
          className: Chunk498374.spinner,
          children: (0, Chunk54381.jsx)(Chunk793030.$jN, {
            type: Chunk793030.RAz.SPINNING_CIRCLE
          })
        })
    }
    return null
  }