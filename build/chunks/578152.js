/** Chunk was on web.js **/
/** chunk id: 578152, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk380610 = require("./380610.js"),
  Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = +Chunk927813.A.Millis.HOUR,
  h = 7 * Chunk927813.A.Millis.DAY,
  m = +Chunk927813.A.Millis.DAY,
  g = Chunk506774.w.get("lastNonRequiredUpdateShown", Date.now()),
  E = new Chunk626584.A("AutoUpdateManager");
class y extends Chunk439372.A {
  _initialize() {
    u.isPlatformEmbedded && (f.Ay.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), f.Ay.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), f.Ay.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(true)), f.Ay.on("UPDATE_ERROR", this._handleUpdateError), f.Ay.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(true)), f.Ay.on("UPDATE_MANUALLY", this._handleUpdateManually))
  }
  _terminate() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.nativeUpdateAvailable ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : f.Ay.send("QUIT_AND_INSTALL") : location.reload(true))
  }
  isNewUpdater() {
    return "win32" === (0, u.getPlatformName)()
  }
  handlePostConnectionOpen() {
    this.checkForUpdates(), clearInterval(this._checkInterval), this._checkInterval = setInterval(this.checkForUpdates, _)
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    E.log("Bootstrapping new updater host...");
    try {
      await f.Ay.ensureModule("discord_updater_bootstrap"), e = f.Ay.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(f.Ay.releaseChannel, "win"), this.updateAvailable = true, this.nativeUpdateAvailable = true, this._handleUpdateDownloaded(true)
    } catch (e) {
      E.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.A.captureException(e)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(...e) {
    var t;
    super(...e), t = this, p(this, "_checkInterval", null), p(this, "_callbacks", []), p(this, "_bootstrapper", null), p(this, "updateAvailable", false), p(this, "nativeUpdateAvailable", false), p(this, "nativeUpdatesDownloaded", 0), p(this, "nativeUpdateCountThreshold", 3), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      AUTO_UPDATER_QUIT_AND_INSTALL: () => this.quitAndInstall()
    }), p(this, "checkForUpdates", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        n = t.isNewUpdater(),
        r = n && t.nativeUpdatesDownloaded < t.nativeUpdateCountThreshold;
      return (e || !t.nativeUpdateAvailable || r) && (u.isPlatformEmbedded ? n && f.Ay.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : f.Ay.send("CHECK_FOR_UPDATES", {
        allowMultipleUpdates: false
      }) : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(true) : t._callbacks.push(e)
      })
    }), p(this, "_handleCheckingForUpdates", () => {
      a.h.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), p(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), r.Bo.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        if (null == e.body || "50bb442c0432cdb46b9890581e9cccc90dc4af08" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, s.kK)()) return this._handleUpdateDownloaded(false);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : m;
        if (Date.now() - g > t) return i.w.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(false)
      }, () => this._handleUpdateError())
    }), p(this, "_handleUpdateNotAvailable", () => {
      a.h.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), p(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = true, this.nativeUpdateAvailable = e, a.h.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), p(this, "_handleUpdateManually", () => {
      this.updateAvailable = true, this.nativeUpdateAvailable = true, a.h.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), p(this, "_handleUpdateError", e => {
      this.updateAvailable = false, a.h.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), p(this, "_handleUpdateDownloaded", (e, t, n, r, i) => {
      e && (this.nativeUpdatesDownloaded += 1), this._handleUpdateAvailable(e), a.h.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: r,
        updateURL: i
      }), this._emitCallbacks()
    })
  }
}
let b = new y