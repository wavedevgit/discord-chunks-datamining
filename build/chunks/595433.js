/** Chunk was on 49131 **/
/** chunk id: 595433, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js");

function i() {
  let [e, t] = r.useState(true);
  return {
    transitions: (0, a.Yzy)(e, {
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
    setVisible: t
  }
}
let l = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: true
}