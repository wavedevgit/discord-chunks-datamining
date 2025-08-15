/** Chunk was on 42521 **/
/** chunk id: 815183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk410030 = require("./410030.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk231338 = require("./231338.js");
let c = function() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      tag: Chunk481060.RB0.H5,
      children: "Theme"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: [(0, Chunk951288.jsx)(Chunk583901.bD, {
        theme: Chunk231338.BR.LIGHT,
        isSelected: module === Chunk231338.BR.LIGHT,
        onSelect: () => (0, Chunk153867.ZI)({
          theme: Chunk231338.BR.LIGHT
        })
      }), (0, Chunk951288.jsx)(Chunk583901.bD, {
        theme: Chunk231338.BR.DARK,
        isSelected: module === Chunk231338.BR.DARK,
        onSelect: () => (0, Chunk153867.ZI)({
          theme: Chunk231338.BR.DARK
        })
      })]
    })]
  })
}