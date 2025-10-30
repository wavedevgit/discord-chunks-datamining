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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = +Chunk70956.Z.Millis.HOUR,
  h = 7 * Chunk70956.Z.Millis.DAY,
  m = +Chunk70956.Z.Millis.DAY,
  g = Chunk433517.K.get("lastNonRequiredUpdateShown", Date.now()),
  E = new Chunk710845.Z("AutoUpdateManager");
class b extends Chunk147913.Z {
  _initialize() {
    Chunk358085.isPlatformEmbedded && (Chunk998502.ZP.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), Chunk998502.ZP.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), Chunk998502.ZP.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(true)), Chunk998502.ZP.on("UPDATE_ERROR", this._handleUpdateError), Chunk998502.ZP.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(true)), Chunk998502.ZP.on("UPDATE_MANUALLY", this._handleUpdateManually))
  }
  _terminate() {
    clearInterval(this._checkInterval)
  }
  quitAndInstall() {
    this.updateAvailable && (this.nativeUpdateAvailable ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : Chunk998502.ZP.send("QUIT_AND_INSTALL") : location.reload(true))
  }
  isNewUpdater() {
    return "win32" === (0, Chunk358085.getPlatformName)()
  }
  async handlePostConnectionOpen() {
    let e = true;
    this.isNewUpdater() && module !== await Chunk998502.ZP.getOptionalUpdates() && await Chunk998502.ZP.setOptionalUpdates(module), this.checkForUpdates(), this._checkInterval = setInterval(this.checkForUpdates, p)
  }
  async _requestNewUpdaterBootstrap() {
    let e;
    E.log("Bootstrapping new updater host...");
    try {
      await Chunk998502.ZP.ensureModule("discord_updater_bootstrap"), e = Chunk998502.ZP.requireModule("discord_updater_bootstrap"), this._bootstrapper = module
    } catch (e) {
      this._handleNativeUpdateNotAvailable();
      return
    }
    try {
      this._handleCheckingForUpdates(), await module.bootstrap(Chunk998502.ZP.releaseChannel, "win"), this.updateAvailable = true, this.nativeUpdateAvailable = true, this._handleUpdateDownloaded(true)
    } catch (e) {
      E.log("Failed to bootstrap new updater:", module), this._handleNativeUpdateNotAvailable(), Chunk960048.Z.captureException(module)
    }
  }
  _emitCallbacks() {
    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
  }
  constructor(...e) {
    var t;
    super(...e), t = this, _(this, "_checkInterval", null), _(this, "_callbacks", []), _(this, "_bootstrapper", null), _(this, "updateAvailable", false), _(this, "nativeUpdateAvailable", false), _(this, "nativeUpdatesDownloaded", 0), _(this, "nativeUpdateCountThreshold", 3), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      AUTO_UPDATER_QUIT_AND_INSTALL: () => this.quitAndInstall()
    }), _(this, "checkForUpdates", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
        n = t.isNewUpdater(),
        r = n && t.nativeUpdatesDownloaded < t.nativeUpdateCountThreshold;
      return (e || !t.nativeUpdateAvailable || r) && (u.isPlatformEmbedded ? n && f.ZP.canBootstrapNewUpdater ? t._requestNewUpdaterBootstrap() : f.ZP.send("CHECK_FOR_UPDATES", {
        allowMultipleUpdates: false
      }) : t._handleNativeUpdateNotAvailable()), new Promise(e => {
        t.updateAvailable ? e(true) : t._callbacks.push(e)
      })
    }), _(this, "_handleCheckingForUpdates", () => {
      a.Z.dispatch({
        type: "CHECKING_FOR_UPDATES"
      })
    }), _(this, "_handleNativeUpdateNotAvailable", () => {
      this._handleCheckingForUpdates(), r.tn.get({
        url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
        query: {
          _: Date.now() / 1e3 / 60 / 5 | 0
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        if (null == e.body || "88d08b5759eed2a617c3d89e9b162472ca52354a" === e.body.hash) return this._handleUpdateNotAvailable();
        if (e.body.required || (0, s.fD)()) return this._handleUpdateDownloaded(false);
        let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? h : m;
        if (Date.now() - g > t) return i.K.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(false)
      }, () => this._handleUpdateError())
    }), _(this, "_handleUpdateNotAvailable", () => {
      a.Z.dispatch({
        type: "UPDATE_NOT_AVAILABLE"
      }), this._emitCallbacks()
    }), _(this, "_handleUpdateAvailable", e => {
      this.updateAvailable = true, this.nativeUpdateAvailable = e, a.Z.dispatch({
        type: "UPDATE_AVAILABLE"
      })
    }), _(this, "_handleUpdateManually", () => {
      this.updateAvailable = true, this.nativeUpdateAvailable = true, a.Z.dispatch({
        type: "UPDATE_MANUALLY"
      })
    }), _(this, "_handleUpdateError", e => {
      this.updateAvailable = false, a.Z.dispatch({
        type: "UPDATE_ERROR",
        message: e
      })
    }), _(this, "_handleUpdateDownloaded", (e, t, n, r, i) => {
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