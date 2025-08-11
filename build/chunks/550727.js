/** Chunk was on web.js **/
/** chunk id: 550727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");
let a = [{
  getDueAt: () => i()().add(30, "minutes").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["OV8l/P"])
}, {
  getDueAt: () => i()().add(1, "hour").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["zf0R+/"])
}, {
  getDueAt: () => i()().add(4, "hour").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["5gztZG"])
}, {
  getDueAt: () => i()().add(1, "day").startOf("day").add(9, "hours").toDate(),
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["7MKr2N"])
}, {
  getDueAt: () => {
    let e, t = i()().day();
    return e = 0 === exports || 1 === exports && i()().startOf("day").add(9, "hours").isAfter(i()()) ? 1 : 8, i()().day(module).startOf("day").add(9, "hours").toDate()
  },
  getLabel: () => Chunk388032.intl.string(Chunk388032.t["q+Ls09"])
}]