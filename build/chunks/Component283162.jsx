/** Chunk was on 75393 **/
/** chunk id: 283162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179658 = require("./179658.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk963886 = require("./963886.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk334078 = require("./334078.js"),
  Chunk451429 = require("./451429.js");

function x() {
  let {
    personaForceFaeFail: e,
    personaForceIdVerificationFail: t
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    personaForceFaeFail: Chunk857192.default.personaForceFaeFail,
    personaForceIdVerificationFail: Chunk857192.default.personaForceIdVerificationFail
  }));
  return (0, Chunk54381.jsxs)("div", {
    className: r()(Chunk451429.panel, Chunk334078.container),
    children: [(0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: "Quick Actions"
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        gap: 16
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk334078.contentContainer,
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
        className: Chunk334078.contentContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
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