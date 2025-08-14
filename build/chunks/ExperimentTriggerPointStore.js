/** Chunk was on 1272 **/
/** chunk id: 934401, original params: e,t,n (module,exports,require) **/
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk160462 = require("./160462.js");

function c() {
  Chunk160462.W.trigger()
}
class u extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk353926.Z)
  }
  constructor() {
    super(Chunk570140.Z, {
      CONNECTION_OPEN: c
    }, Chunk570140.c.Early)
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "ExperimentTriggerPointStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "ExperimentTriggerPointStore", new u