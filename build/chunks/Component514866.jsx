/** Chunk was on 30372 **/
/** chunk id: 514866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk677106 = require("./677106.js"),
  Chunk906605 = require("./906605.js"),
  Chunk423932 = require("./423932.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk306052 = require("./306052.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk517269 = require("./517269.js"),
  Chunk197571 = require("./197571.js");
let j = () => {
  Promise.all([require.e("52030"), require.e("1286")]).then(require.bind(require, 24031)).then(e => {
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

function _() {
  let e = Chunk594174.default.getCurrentUser(),
    t = null == module ? true : module.isStaff(),
    n = Chunk695346.Rt.useSetting();
  return (0, Chunk951288.jsxs)(Chunk481060.Ttm, {
    children: [(0, Chunk951288.jsx)("div", {
      className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk306052.g, {
        isDevTools: true
      })
    }), (0, Chunk951288.jsx)("div", {
      className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch MFA",
        onClick: j
      })
    }), (0, Chunk951288.jsx)("div", {
      className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: "Launch Vibing Wumpus",
        onClick: () => (0, Chunk423932.Z)()
      })
    }), exports && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Clicker Game",
          onClick: () => (0, Chunk677106.Z)()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Captcha Test Tool",
          onClick: () => (0, Chunk110478.N)()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Test Tool",
          onClick: () => (0, Chunk963886.E)()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Modal",
          onClick: () => Chunk168107.Z.showAgeVerificationGetStartedModal({
            entryPoint: Chunk480916.cU.DEV_TOOLS_QUICK_ACTIONS
          })
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset Hang Status State",
          onClick: Chunk906605.YU
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom8),
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Force libdiscore Crash",
          onClick: Chunk668757.$R
        })
      }), (0, Chunk951288.jsx)("div", {
        className: l()(Chunk517269.buttonsContainer, Chunk197571.marginBottom20),
        children: (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Ignore profile speedbump disabled",
          checked: require,
          onChange: e => x.Rt.updateSetting(e)
        })
      })]
    })]
  })
}