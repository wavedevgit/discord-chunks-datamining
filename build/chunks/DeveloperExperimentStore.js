/** Chunk was on web.js **/
/** chunk id: 906467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk168232 = require("./168232.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk987338 = require("./987338.js"),
  Chunk48541 = require("./48541.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "production" === Chunk48541.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk48541.C.STAGING;

function p() {
  f = (0, o.QI)(l.default.getCurrentUser())
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(l.default, s.Z), Object.defineProperties(this, {
      isDeveloper: {
        configurable: false,
        get: () => f,
        set: () => {}
      }
    }), p(), setTimeout(() => Object.freeze(this))
  }
  getExperimentDescriptor() {
    return f ? {
      type: "developer",
      name: "discord_dev_testing",
      revision: 1,
      override: true,
      bucket: c.NZ.TREATMENT_1
    } : null
  }
  constructor(...e) {
    super(...e), d(this, "isDeveloper", false)
  }
}
d(_, "displayName", "DeveloperExperimentStore");
let h = new _(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  CURRENT_USER_UPDATE: p
})