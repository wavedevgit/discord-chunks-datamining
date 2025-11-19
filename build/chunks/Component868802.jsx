/** Chunk was on web.js **/
/** chunk id: 868802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => w
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk952265 = require("./952265.js"),
  Chunk159691 = require("./159691.js"),
  Chunk511857 = require("./511857.js"),
  Chunk410030 = require("./410030.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk299886 = require("./299886.js"),
  Chunk37279 = require("./37279.jsx"),
  Chunk969521 = require("./969521.jsx"),
  Chunk584197 = require("./584197.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk589072 = require("./589072.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk116282 = require("./116282.jsx"),
  Chunk614074 = require("./614074.jsx"),
  Chunk233751 = require("./233751.jsx"),
  Chunk868087 = require("./868087.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845259 = require("./845259.js"),
  Chunk498374 = require("./498374.js"),
  Chunk95213 = require("./95213.js"),
  Chunk882709 = require("./882709.js"),
  Chunk932889 = require("./932889.js");
let w = () => {
    let e = (0, Chunk612659.m)(),
      {
        isSupportedPrivateBrowsingPerkPlatform: t,
        isWeb: n,
        installationStatus: a,
        perkAvailableToUser: o
      } = (0, Chunk953865.xf)(),
      {
        enabled: c
      } = Chunk299886.H.useConfig({
        location: "private_browsing_perk_settings_page"
      }),
      h = (0, Chunk511857.a)((0, Chunk410030.ZP)()),
      m = !module || Chunk159691;
    if (!exports && !require || !Chunk740594 || !Chunk584197) return null;
    let g = [Chunk5900._n.EXISTING_INSTALLATION, Chunk5900._n.ZERO_TRUST].includes(Chunk952265) || !module;
    return (0, Chunk54381.jsxs)("div", {
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
                color: Chunk969521 ? "black" : "white"
              }), (0, Chunk54381.jsx)("div", {
                className: Chunk498374.headerDivider
              }), (0, Chunk54381.jsx)("img", {
                src: Chunk969521 ? Chunk882709 : Chunk95213,
                alt: "Cloudflare",
                width: 103,
                height: 15
              })]
            }), (0, Chunk54381.jsx)(Chunk37279.v, {})]
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk498374.contentContainer,
          children: [Chunk703656 && (0, Chunk54381.jsx)("img", {
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
            children: (0, Chunk54381.jsx)(L, {})
          })]
        })]
      }), (0, Chunk54381.jsx)(Chunk868087.p, {})]
    })
  },
  L = () => {
    let {
      installationStatus: e,
      isWeb: t,
      setInstallationStatus: n
    } = (0, Chunk953865.xf)(), s = (0, Chunk612659.m)();
    if (exports) return (0, Chunk54381.jsx)(Chunk969521.U, {});
    if (!Chunk511857) return (0, Chunk54381.jsxs)("div", {
      className: Chunk498374.subscribeBtnContainer,
      children: [(0, Chunk54381.jsx)(Chunk740594.Z, {
        buttonTextOverride: Chunk388032.intl.string(Chunk388032.t["8x0jKT"]),
        subscriptionTier: Chunk474936.Si.TIER_2,
        fullWidth: true,
        size: "sm"
      }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t.ZnqyZ2),
        size: "sm",
        onClick: () => {
          (0, Chunk952265.Mr)(Chunk518596.USER_SETTINGS_MODAL_KEY), (0, Chunk703656.uL)(Chunk981631.Z5c.APPLICATION_STORE)
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
            require(Chunk5900._n.READY_FOR_LICENSE)
          },
          text: Chunk388032.intl.string(Chunk845259.default.J09UWz)
        });
      case Chunk5900._n.INSTALLING:
      case Chunk5900._n.READY_FOR_LICENSE:
        return (0, Chunk54381.jsx)("div", {
          className: Chunk498374.spinner,
          children: (0, Chunk54381.jsx)(Chunk793030.$jN, {
            type: Chunk793030.RAz.SPINNING_CIRCLE
          })
        })
    }
    return null
  }