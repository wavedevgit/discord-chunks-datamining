/** Chunk was on web.js **/
/** chunk id: 327593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk927813 = require("./927813.js"),
  Chunk996744 = require("./996744.js"),
  Chunk971778 = require("./971778.js"),
  Chunk342887 = require("./342887.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u() {
  return (0, o.Lb)({
    location: "VoiceFiltersCatalogManager",
    autoTrackExposure: false
  })
}
class d extends Chunk439372.A {
  _initialize() {}
  _terminate() {
    clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout)
  }
  handleVoiceFilterCatalogUpdate(e) {
    let {} = e;
    this._scheduleNextRollover(), this._scheduleRefresh()
  }
  handlePostConnectionOpen() {
    u() && (0, l.st)()
  }
  _scheduleNextRollover() {
    clearTimeout(this.rolloverTimeout);
    let e = s.A.getLimitedTimeVoices();
    if (null == e) return;
    let t = new Date(e.current_set_end).getTime() - new Date().getTime(),
      n = new Date(e.next_set_end).getTime() - new Date().getTime();
    t > 0 ? this.rolloverTimeout = setTimeout(() => {
      r.h.dispatch({
        type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES"
      }), this._scheduleNextRollover()
    }, t) : n > 0 && (this.rolloverTimeout = setTimeout(() => {
      r.h.dispatch({
        type: "VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES"
      })
    }, n))
  }
  _scheduleRefresh() {
    clearTimeout(this.refreshTimeout), this.refreshTimeout = setTimeout(() => {
      (0, l.st)()
    }, a.A.Millis.DAY)
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