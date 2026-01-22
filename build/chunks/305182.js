/** Chunk was on 46875 **/
/** chunk id: 305182, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function a() {
  let [e, t] = l.useState(true);
  return {
    transitions: (0, r.pnh)(e, {
      keys: e => e ? "shown" : "hidden",
      config: i,
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
let i = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: true
}