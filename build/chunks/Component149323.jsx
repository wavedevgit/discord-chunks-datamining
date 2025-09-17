/** Chunk was on 93886 **/
/** chunk id: 149323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk883904 = require("./883904.js"),
  Chunk227157 = require("./227157.jsx"),
  Chunk775195 = require("./775195.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk393146 = require("./393146.js");

function m() {
  let e = Chunk647438.useCallback(() => {
    Chunk230711.Z.open(Chunk981631.oAB.DISMISSIBLE_CONTENT_OPTIONS)
  }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.Ttm, {
    className: Chunk393146.panelContainer,
    children: [(0, Chunk951288.jsxs)("p", {
      className: Chunk393146.settings,
      children: ["For more options, see the ", (0, Chunk951288.jsx)(Chunk481060.eee, {
        onClick: module,
        children: "settings page"
      }), "."]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk393146.buttonContainer,
      children: (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk393146.button,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset Daily Cap",
          onClick: () => (0, Chunk883904.EG)()
        })
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk393146.recent,
      children: [(0, Chunk951288.jsx)(Chunk775195.Z, {}), (0, Chunk951288.jsx)(Chunk227157.Z, {})]
    })]
  })
}