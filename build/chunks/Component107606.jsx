/** Chunk was on 93886 **/
/** chunk id: 107606, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk31336 = require("./31336.js"),
  Chunk19759 = require("./19759.js"),
  Chunk716561 = require("./716561.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.isRandomlyChangingPremiumOptions);
  return (0, Chunk255367.jsx)("div", {
    className: Chunk716561.container,
    children: (0, Chunk255367.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk716561.button,
      children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
        children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
          value: module,
          note: "Randomizes theme, avatar decorations, and nameplates, every 5 seconds",
          onChange: e => (0, i.Qh)({
            isRandomlyChangingPremiumOptions: e
          }),
          hideBorder: true,
          children: "Randomize Premium Features"
        })
      })
    })
  })
}