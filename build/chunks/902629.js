/** Chunk was on web.js **/
/** chunk id: 902629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk313261 = require("./313261.js"),
  Chunk38618 = require("./38618.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  handleCheckExperiments() {
    let {
      enabled: e
    } = i.O.getCurrentConfig({
      location: "gateway"
    }, {
      autoTrackExposure: true
    });
    a.Z.getSocket().dispatcher.toggleRequestIdleCallback(e)
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