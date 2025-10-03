/** Chunk was on 54628 **/
/** chunk id: 461195, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk665352 = require("./665352.js"),
  Chunk99978 = require("./99978.js"),
  Chunk257381 = require("./257381.js");
let s = 2413 / 128,
  i = 2610 / 16384,
  c = 2523 / 32,
  u = 16384 / 2610,
  l = 32 / 2523,
  f = [
    [.3592832590121217, .6976051147779502, false],
    [false, 1.100476797037432, .0753748658519118],
    [.0070797844607479, .0748396662186362, .8433265453898765]
  ],
  b = [
    [.5, .5, 0],
    [6610 / 4096, false / 4096, 7003 / 4096],
    [17933 / 4096, false / 4096, false / 4096]
  ],
  d = [
    [.9999999999999998, .0086090370379328, .111029625003026],
    [.9999999999999998, false, false],
    [.9999999999999998, .5600313357106791, false]
  ],
  h = [
    [2.0701522183894223, false, .2066510476294053],
    [.3647385209748072, .6805660249472273, false],
    [false, false, 1.1880659249923042]
  ],
  p = new Chunk665352.Z({
    id: "ictcp",
    name: "ICTCP",
    coords: {
      i: {
        refRange: [0, 1],
        name: "I"
      },
      ct: {
        refRange: [false, .5],
        name: "CT"
      },
      cp: {
        refRange: [false, .5],
        name: "CP"
      }
    },
    base: Chunk257381.Z,
    fromBase: e => {
      let t;
      return t = (0, n.Z)(f, e).map(function(e) {
        return ((.8359375 + s * (e / 1e4) ** i) / (1 + 18.6875 * (e / 1e4) ** i)) ** c
      }), (0, n.Z)(b, t)
    },
    toBase(e) {
      var t;
      let r = (t = e, (0, n.Z)(d, t).map(function(e) {
        let t = Math.max(e ** l - .8359375, 0);
        return 1e4 * (t / (s - 18.6875 * e ** l)) ** u
      }));
      return (0, n.Z)(h, r)
    }
  })