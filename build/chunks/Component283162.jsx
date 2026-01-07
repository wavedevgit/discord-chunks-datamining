/** Chunk was on 6043 **/
/** chunk id: 283162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179658 = require("./179658.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk963886 = require("./963886.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk408602 = require("./408602.js"),
  Chunk663618 = require("./663618.js");

function h() {
  let {
    personaForceFaeFail: e,
    personaForceIdVerificationFail: t,
    personaDisableModularPilotTestTemplate: n
  } = (0, l.cj)([m.default], () => ({
    personaForceFaeFail: m.default.personaForceFaeFail,
    personaForceIdVerificationFail: m.default.personaForceIdVerificationFail,
    personaDisableModularPilotTestTemplate: m.default.personaDisableModularPilotTestTemplate
  }));
  return (0, a.jsxs)("div", {
    className: i()(f.panel, p.container),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: "Quick Actions"
      }), (0, a.jsx)(s.izJ, {
        gap: 16
      }), (0, a.jsxs)("div", {
        className: p.contentContainer,
        children: [(0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Test Tool",
          onClick: () => (0, u.E)(),
          fullWidth: true
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Modal",
          onClick: () => c.Z.showAgeVerificationGetStartedModal({
            entryPoint: d.cU.DEV_TOOLS_QUICK_ACTIONS
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
      }), (0, a.jsx)(s.izJ, {
        gap: 16
      }), (0, a.jsxs)("div", {
        className: p.contentContainer,
        children: [(0, a.jsx)(s.rsf, {
          label: "Disable Modular Pilot Test Template",
          description: "Use actual pilot template (skips age override screen) for Persona age verification testing",
          checked: n,
          onChange: e => (0, o.y)({
            personaDisableModularPilotTestTemplate: e
          })
        }), (0, a.jsx)(s.rsf, {
          label: "Force FAE to Fail",
          description: "Force Facial Age Estimation to fail for testing with Persona",
          checked: e,
          onChange: e => (0, o.y)({
            personaForceFaeFail: e
          })
        }), (0, a.jsx)(s.rsf, {
          label: "Force ID Verification to Fail",
          description: "Force ID verification to fail for testing with Persona",
          checked: t,
          onChange: e => (0, o.y)({
            personaForceIdVerificationFail: e
          })
        })]
      })]
    })]
  })
}