/** Chunk was on 76892 **/
/** chunk id: 595433, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");

function a() {
  let [e, t] = Chunk647438.useState(true);
  return {
    transitions: (0, Chunk481060.Yzy)(module, {
      keys: e => e ? "shown" : "hidden",
      config: l,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      unique: true
    }),
    setVisible: exports
  }
}
let l = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: true
}