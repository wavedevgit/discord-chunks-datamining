/** Chunk was on web.js **/
/** chunk id: 802104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk865427 = require("./865427.js"),
  Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = +Chunk70956.Z.Millis.HOUR,
  m = 7 * Chunk70956.Z.Millis.DAY,
  h = +Chunk70956.Z.Millis.DAY,
  g = Chunk433517.K.get("lastNonRequiredUpdateShown", Date.now()),
  E = new Chunk710845.Z("AutoUpdateManager");
class b extends Chunk147913.Z {
  _initialize() {
    u.isPlatformEmbedded && (f.ZP.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), f.ZP.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), f.ZP.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(true)), f.ZP.on("UPDATE_ERROR", this._handleUpdateError), f.ZP.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(true)), f.ZP.on("UPDATE_MANUALLY", this._handleUpdateManually))
  }
  _terminate() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.nativeUpdateAvailable ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : f.ZP.send("QUIT_AND_INSTALL") : location.reload(true))
  }
  isNewUpdater() {
    return "win32" === (0, u.getPlatformName)()
  }
  async handlePostConnectionOpen() {
    let e = true;
    this.isNewUpdater() && e !== await f.ZP.getOptionalUpdates() && await f.ZP.setOptionalUpdates(e), this.checkForUpdates(), clearInterval(this._checkInterval), this._checkInterval = setInterval(this.checkForUpdates, _)
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    E.log("Bootstrapping new updater host...");
    try {
      await f.ZP.ensureModule("discord_updater_bootstrap"), e = f.ZP.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await e.bootstrap(f.ZP.releaseChannel, "win"), this.updateAvailable = true, this.nativeUpdateAvailable = true, this._handleUpdateDownloaded(true)
    } catch (e) {
      E.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.Z.captureException(e)
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
      return (e || !t.nativeUpdateAvailable || r) && (u.isPlatformEmbedded ? n && f.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : f.ZP.send("CHECK_FOR_UPDATES", {
        allowMultipleUpdates: false
      }) : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(true) : t._callbacks.push(e)
      })
    }), p(this, "_handleCheckingForUpdates", () => {
      a.Z.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), p(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), r.tn.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        if (null == e.body || "ad20727f33b7c65d5395136b3616d54598d57add" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, s.fD)()) return this._handleUpdateDownloaded(false);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? m : h;
        if (Date.now() - g > t) return i.K.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(false)
      }, () => this._handleUpdateError())
    }), p(this, "_handleUpdateNotAvailable", () => {
      a.Z.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), p(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = true, this.nativeUpdateAvailable = e, a.Z.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), p(this, "_handleUpdateManually", () => {
      this.updateAvailable = true, this.nativeUpdateAvailable = true, a.Z.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), p(this, "_handleUpdateError", e => {
      this.updateAvailable = false, a.Z.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), p(this, "_handleUpdateDownloaded", (e, t, n, r, i) => {
      e && (this.nativeUpdatesDownloaded += 1), this._handleUpdateAvailable(e), a.Z.dispatch({
        type: "UPDATE_DOWNLOADED",
        releaseNotes: t,
        releaseName: n,
        releaseDate: r,
        updateURL: i
      }), this._emitCallbacks()
    })
  }
}
let y = new b