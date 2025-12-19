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
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    personaForceFaeFail: Chunk857192.default.personaForceFaeFail,
    personaForceIdVerificationFail: Chunk857192.default.personaForceIdVerificationFail,
    personaDisableModularPilotTestTemplate: Chunk857192.default.personaDisableModularPilotTestTemplate
  }));
  return (0, Chunk54381.jsxs)("div", {
    className: i()(Chunk663618.panel, Chunk408602.container),
    children: [(0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Quick Actions"
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        gap: 16
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk408602.contentContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Test Tool",
          onClick: () => (0, Chunk963886.E)(),
          fullWidth: true
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Launch Age Verification Modal",
          onClick: () => Chunk168107.Z.showAgeVerificationGetStartedModal({
            entryPoint: Chunk480916.cU.DEV_TOOLS_QUICK_ACTIONS
          }),
          fullWidth: true
        })]
      })]
    }), (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Persona Configurations"
      }), (0, Chunk54381.jsx)("div", {
        children: "Note: this only works for generated test users"
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        gap: 16
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk408602.contentContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Disable Modular Pilot Test Template",
          description: "Use actual pilot template (skips age override screen) for Persona age verification testing",
          checked: require,
          onChange: e => (0, o.y)({
            personaDisableModularPilotTestTemplate: e
          })
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Force FAE to Fail",
          description: "Force Facial Age Estimation to fail for testing with Persona",
          checked: module,
          onChange: e => (0, o.y)({
            personaForceFaeFail: e
          })
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Force ID Verification to Fail",
          description: "Force ID verification to fail for testing with Persona",
          checked: exports,
          onChange: e => (0, o.y)({
            personaForceIdVerificationFail: e
          })
        })]
      })]
    })]
  })
}