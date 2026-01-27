/** Chunk was on web.js **/
/** chunk id: 399486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk177658 = require("./177658.js"),
  Chunk142120 = require("./142120.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  handleCheckExperiments() {
    let {
      enabled: e
    } = i.P.getCurrentConfig({
      location: "gateway"
    }, {
      autoTrackExposure: true
    });
    a.A.getSocket().dispatcher.toggleRequestIdleCallback(e)
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
      LOGIN_SUCCESS: this.handleCheckExperiments,
      EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
      POST_CONNECTION_OPEN: this.handleCheckExperiments,
      CACHE_LOADED: this.handleCheckExperiments
    })
  }
}
let l = new s