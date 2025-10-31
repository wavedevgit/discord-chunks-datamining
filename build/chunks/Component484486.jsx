/** Chunk was on 71874 **/
/** chunk id: 484486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk851339 = require("./851339.js");
let c = () => {
  let e = (0, Chunk442837.e7)([Chunk597688.Z], () => Chunk597688.Z.skipNumCategories);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk851339.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Hide first # of categories"
    }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
      className: Chunk851339.numberInputStepper,
      value: module,
      onChange: e => {
        (0, i.p8)(e)
      },
      minValue: 0,
      maxValue: 100
    })]
  })
}