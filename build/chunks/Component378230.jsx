/** Chunk was on 65298 **/
/** chunk id: 378230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk926919 = require("./926919.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk480237 = require("./480237.jsx"),
  Chunk111162 = require("./111162.js"),
  Chunk667380 = require("./667380.js"),
  Chunk661251 = require("./661251.js");

function x() {
  let {
    personaForceFaeFail: e,
    personaForceIdVerificationFail: t,
    personaDisableModularPilotTestTemplate: n
  } = (0, i.cf)([m.default], () => ({
    personaForceFaeFail: m.default.personaForceFaeFail,
    personaForceIdVerificationFail: m.default.personaForceIdVerificationFail,
    personaDisableModularPilotTestTemplate: m.default.personaDisableModularPilotTestTemplate
  }));
  return (0, a.jsxs)("div", {
    className: r()(h.nd, p.k),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: "Quick Actions"
      }), (0, a.jsx)(s.cGx, {
        gap: 16
      }), (0, a.jsxs)("div", {
        className: p.h,
        children: [(0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Test Tool",
          onClick: () => (0, u.A)(),
          fullWidth: true
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Modal",
          onClick: () => c.A.showAgeVerificationGetStartedModal({
            entryPoint: d.q1.DEV_TOOLS_QUICK_ACTIONS
          }),
          fullWidth: true
        })]
      })]
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: "Persona Configurations"
      }), (0, a.jsx)("div", {
        children: "Note: this only works for generated test users"
      }), (0, a.jsx)(s.cGx, {
        gap: 16
      }), (0, a.jsxs)("div", {
        className: p.h,
        children: [(0, a.jsx)(s.dOG, {
          label: "Disable Modular Pilot Test Template",
          description: "Use actual pilot template (skips age override screen) for Persona age verification testing",
          checked: n,
          onChange: e => (0, o.x)({
            personaDisableModularPilotTestTemplate: e
          })
        }), (0, a.jsx)(s.dOG, {
          label: "Force FAE to Fail",
          description: "Force Facial Age Estimation to fail for testing with Persona",
          checked: e,
          onChange: e => (0, o.x)({
            personaForceFaeFail: e
          })
        }), (0, a.jsx)(s.dOG, {
          label: "Force ID Verification to Fail",
          description: "Force ID verification to fail for testing with Persona",
          checked: t,
          onChange: e => (0, o.x)({
            personaForceIdVerificationFail: e
          })
        })]
      })]
    })]
  })
}