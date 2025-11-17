/** Chunk was on 23032 **/
/** chunk id: 757028, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk760919 = require("./760919.js"),
  Chunk629990 = require("./629990.js");
Chunk629990.mh.ACES = [.32168 / .33767, 1, 1.0088251843515859];
let o = new Chunk760919.Z({
  id: "acescg",
  cssId: "--acescg",
  name: "ACEScg",
  coords: {
    r: {
      range: [0, 65504],
      name: "Red"
    },
    g: {
      range: [0, 65504],
      name: "Green"
    },
    b: {
      range: [0, 65504],
      name: "Blue"
    }
  },
  referred: "scene",
  white: Chunk629990.mh.ACES,
  toXYZ_M: [
    [.6624541811085053, .13400420645643313, .1561876870049078],
    [.27222871678091454, .6740817658111484, .05368951740793705],
    [false, .004060733528982826, 1.0103391003129971]
  ],
  fromXYZ_M: [
    [1.6410233796943257, false, false],
    [false, 1.6153315916573379, .016756347685530137],
    [.011721894328375376, false, .9883948585390215]
  ]
})