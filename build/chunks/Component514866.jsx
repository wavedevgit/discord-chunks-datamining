/** Chunk was on 93886 **/
/** chunk id: 514866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk668757 = require("./668757.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk963886 = require("./963886.jsx"),
  Chunk110478 = require("./110478.jsx"),
  Chunk423932 = require("./423932.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk306052 = require("./306052.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk103088 = require("./103088.js"),
  Chunk10198 = require("./10198.js");
let b = () => {
  Promise.all([require.e("52030"), require.e("91403")]).then(require.bind(require, 24031)).then(e => {
    let {
      openMFAModal: t
    } = e;
    t({
      ticket: "ticket",
      methods: [{
        type: "webauthn",
        challenge: "{}"
      }, {
        type: "totp",
        backup_codes_allowed: true
      }, {
        type: "sms"
      }, {
        type: "password"
      }]
    }, console.log, console.error)
  })
};

function g() {
  let e = Chunk594174.default.getCurrentUser(),
    t = null == module ? true : module.isStaff(),
    n = Chunk695346.Rt.useSetting();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)("div", {
      className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk306052.g, {
        isDevTools: true
      })
    }), (0, Chunk951288.jsx)("div", {
      className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Launch MFA",
        onClick: b
      })
    }), (0, Chunk951288.jsx)("div", {
      className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, Chunk423932.Z)()
      })
    }), exports && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("div", {
        className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Launch Captcha Test Tool",
          onClick: () => (0, Chunk110478.N)()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Launch Age Verification Test Tool",
          onClick: () => (0, Chunk963886.E)()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Launch Age Verification Modal",
          onClick: () => Chunk168107.Z.showAgeVerificationGetStartedModal({
            entryPoint: Chunk480916.cU.DEV_TOOLS_QUICK_ACTIONS
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Force libdiscore Crash",
          onClick: Chunk668757.$R
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk103088.buttonsContainer, Chunk10198.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: require,
          onChange: e => x.Rt.updateSetting(e),
          hideBorder: true,
          children: "Ignore profile speedbump disabled"
        })
      })]
    })]
  })
}