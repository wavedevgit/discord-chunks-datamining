/** Chunk was on web.js **/
/** chunk id: 633289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk299021 = require("./299021.js"),
  Chunk570140 = require("./570140.js"),
  Chunk865427 = require("./865427.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js");
class l extends Chunk299021.Z {
  initialize(e) {
    this.waitFor(o.default), this.loadStoredState(e, (0, a._S)())
  }
  constructor() {
    super(Chunk570140.Z, {
      CONNECTION_OPEN: e => this.setExperimentAssignments(e.apexExperiments),
      CONNECTION_OPEN_STATE_UPDATE: e => this.setExperimentAssignments(e.apexExperiments),
      APEX_EXPERIMENT_OVERRIDE_CREATE: e => this.createOverride(e.experimentName, e.variantId),
      APEX_EXPERIMENT_OVERRIDE_DELETE: e => this.deleteOverride(e.experimentName),
      APEX_EXPERIMENT_OVERRIDE_CLEAR: () => this.clearAllOverrides(),
      APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE: e => this.createSessionOverride(e.experimentName, e.variantId),
      APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE: e => this.deleteSessionOverride(e.experimentName),
      APEX_EXPERIMENT_CLEAR_FOR_TESTS: () => this.clearForTests(),
      APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS: e => this.setExperimentsMetadata(e.experiments),
      APEX_EXPERIMENTS_FETCH_START: e => this.handleFetchStart(e.userId),
      APEX_EXPERIMENTS_FETCH_SUCCESS: e => this.handleFetchSuccess(e.userId, e.experiments),
      APEX_EXPERIMENTS_FETCH_FAILURE: e => this.handleFetchFailure(e.userId),
      LOGOUT: e => this.handleLogout(e.isSwitchingAccount)
    }, Chunk570140.c.Early), this.track = function() {
      for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
      return Chunk626135.default.track(...exports)
    }, this.surface = "discord_app"
  }
}
let c = new l