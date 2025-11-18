/** Chunk was on 33311 **/
/** chunk id: 815183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk410030 = require("./410030.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk231338 = require("./231338.js");
let c = function() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk54381.jsx)(Chunk481060.gNt, {
    label: "Theme",
    children: (0, Chunk54381.jsxs)("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: [(0, Chunk54381.jsx)(Chunk583901.bD, {
        theme: Chunk231338.BR.LIGHT,
        isSelected: module === Chunk231338.BR.LIGHT,
        onSelect: () => (0, Chunk153867.ZI)({
          theme: Chunk231338.BR.LIGHT
        })
      }), (0, Chunk54381.jsx)(Chunk583901.bD, {
        theme: Chunk231338.BR.DARK,
        isSelected: module === Chunk231338.BR.DARK,
        onSelect: () => (0, Chunk153867.ZI)({
          theme: Chunk231338.BR.DARK
        })
      })]
    })
  })
}