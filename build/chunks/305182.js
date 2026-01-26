/** Chunk was on 46875 **/
/** chunk id: 305182, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function i() {
  let [e, t] = r.useState(true);
  return {
    transitions: (0, l.pnh)(e, {
      keys: e => e ? "shown" : "hidden",
      config: a,
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
let a = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: true
}