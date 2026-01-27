/** Chunk was on web.js **/
/** chunk id: 540999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk572009 = require("./572009.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk688151 = require("./688151.js"),
  Chunk115093 = require("./115093.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "production" === Chunk115093.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === Chunk115093.B.STAGING;

function p() {
  f = (0, o.I9)(l.default.getCurrentUser())
}
class _ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default, s.A), Object.defineProperties(this, {
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
      bucket: c.RE.TREATMENT_1
    } : null
  }
  constructor(...e) {
    super(...e), d(this, "isDeveloper", false)
  }
}
d(_, "displayName", "DeveloperExperimentStore");
let h = new _(Chunk73153.h, {
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  CURRENT_USER_UPDATE: p
})