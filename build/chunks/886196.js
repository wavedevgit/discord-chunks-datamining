/** Chunk was on web.js **/
/** chunk id: 886196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk70956 = require("./70956.js"),
  Chunk875527 = require("./875527.js"),
  Chunk709706 = require("./709706.js"),
  Chunk358820 = require("./358820.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u() {
  return (0, Chunk875527.wt)({
    location: "VoiceFiltersCatalogManager",
    autoTrackExposure: false
  })
}
class d extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout)
  }
  handleVoiceFilterCatalogUpdate(e) {
    let {} = e;
    this._scheduleNextRollover(), this._scheduleRefresh()
  }
  handlePostConnectionOpen() {
    u() && (0, Chunk358820.wV)()
  }
  _scheduleNextRollover() {
    clearTimeout(this.rolloverTimeout);
    let e = Chunk709706.Z.getLimitedTimeVoices();
    if (null == module) return;
    let t = new Date(module.current_set_end).getTime() - new Date().getTime(),
      n = new Date(module.next_set_end).getTime() - new Date().getTime();
    exports > 0 ? this.rolloverTimeout = setTimeout(() => {
      Chunk570140.Z.dispatch({
        type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES"
      }), this._scheduleNextRollover()
    }, exports) : require > 0 && (this.rolloverTimeout = setTimeout(() => {
      Chunk570140.Z.dispatch({
        type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES"
      })
    }, require))
  }
  _scheduleRefresh() {
    clearTimeout(this.refreshTimeout), this.refreshTimeout = setTimeout(() => {
      (0, Chunk358820.wV)()
    }, Chunk70956.Z.Millis.DAY)
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      VOICE_FILTER_CATALOG_FETCH_SUCCESS: e => this.handleVoiceFilterCatalogUpdate(e),
      VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: e => this.handleVoiceFilterCatalogUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), c(this, "rolloverTimeout", null), c(this, "refreshTimeout", null)
  }
}
let f = new d