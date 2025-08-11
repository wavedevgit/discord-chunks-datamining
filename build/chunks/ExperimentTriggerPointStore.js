/** Chunk was on 1272 **/
/** chunk id: 934401, original params: e,t,n (module,exports,require) **/
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk160462 = require("./160462.js");

function u() {
  Chunk160462.W.trigger()
}
class d extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk353926.Z)
  }
  constructor() {
    super(Chunk570140.Z, {
      CONNECTION_OPEN: u
    }, Chunk570140.c.Early)
  }
}
i = "ExperimentTriggerPointStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = i, new d