/** Chunk was on web.js **/
/** chunk id: 998502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => X,
  jK: () => H,
  mQ: () => B,
  tS: () => Y,
  xG: () => K
}), require("./388685.js"), require("./35282.js"), require("./704826.js"), require("./415506.js"), require("./49124.js"), require("./539854.js");
var r, i, a, o, Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk719711 = require("./719711.js"),
  Chunk544891 = require("./544891.js"),
  Chunk579092 = require("./579092.js"),
  Chunk433517 = require("./433517.js"),
  Chunk593472 = require("./593472.js"),
  Chunk189451 = require("./189451.js"),
  Chunk358085 = require("./358085.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js"),
  E = require("./413135.js").Buffer;

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = window.DiscordNative,
  T = new Set(["jpg", "jpeg", "jfif", "png"]),
  S = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
  A = e => e.startsWith("image/"),
  C = 5,
  N = null,
  R = null,
  P = null,
  D = {};
null != I && (N = I.remoteApp.getVersion().split(".").map(e => parseInt(e)), P = null == (r = (i = I.remoteApp).getModuleVersions) ? true : r.call(i), R = null == (a = (o = I.remoteApp).getBuildNumber) ? true : a.call(o));
let w = new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]),
  L = false,
  x = "lastImageSaveDirectory",
  M = /[<>:"/\\|?*@]/g,
  k = /(\.[a-zA-Z0-9]+):[^.]*$/,
  j = /(\.[a-zA-Z0-9]+)%3A.+$/,
  U = /[^a-zA-Z0-9]/g,
  G = /\.[^.]*$/;
var B = function(e) {
  return e.SAVED = "saved", e.CANCELED = "canceled", e.ERRORED = "errored", e
}({});

function Z(e) {
  try {
    let t = decodeURIComponent(e);
    return (t = (t = t.replace(k, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(M, "_")
  } catch (t) {
    return e.replace(j, "$1").replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2").replace(M, "_")
  }
}
async function F(e) {
  let t = {
      method: "GET",
      mode: "cors"
    },
    n = await fetch(new Request(e, t));
  l()(200 === n.status, "Data fetch unsuccessful");
  let r = await n.arrayBuffer();
  return l()(null != r, "Data is null"), r
}

function V(e) {
  return F(e)
}
var H = function(e) {
    return e[e.Camera = 0] = "Camera", e[e.Microphone = 1] = "Microphone", e[e.Photo = 2] = "Photo", e[e.InputMonitoring = 3] = "InputMonitoring", e[e.ScreenRecording = 4] = "ScreenRecording", e
  }({}),
  Y = function(e) {
    return e.VIDEO = "VIDEO", e.MUTE = "MUTE", e.DEAFEN = "DEAFEN", e.DISCONNECT = "DISCONNECT", e
  }({});

function W(e) {
  var t, n, r, i, a, o, s, l, c;
  return {
    id: D[null != (t = e.id) ? t : ""],
    nativeProcessObserverId: parseInt(null != (n = e.id) ? n : "", 10),
    name: null != (r = e.gameName) ? r : e.name,
    origGameName: e.origGameName,
    processName: null != (i = e.name) ? i : "",
    hidden: e.hidden,
    elevated: e.elevated,
    sandboxed: null != (a = e.sandboxed) && a,
    lastFocused: e.lastFocused,
    exePath: e.exePath,
    exeName: e.exeName,
    cmdLine: e.cmdLine,
    distributor: e.distributor,
    sku: e.sku,
    pid: e.pid,
    pidPath: null != (o = e.pidPath) ? o : [],
    gameMetadata: e.gameMetadata,
    windowHandle: null != (s = e.windowHandle) ? s : null,
    fullscreenType: null != (l = e.fullscreenType) ? l : _.Jx.UNKNOWN,
    isLauncher: null != (c = e.isLauncher) && c
  }
}

function K(e, t) {
  var n, r, i, a;
  if (null != t && A(t)) {
    let e = null == (a = t.split("/")[1]) ? true : a.toLowerCase();
    if ("jpeg" === e) return "jpg";
    if (null != e) return e
  }
  let o = m.Z.toURLSafe(e);
  if (null == o) return;
  let s = null == (i = o.pathname) || null == (r = i.split(".")) || null == (n = r.pop()) ? true : n.toLowerCase();
  return null != s && s.length <= C ? s : true
}

function z(e) {
  if ((0, h.isDesktop)()) try {
    q.send(e)
  } catch (e) {}
}
let q = {
    requireModule: e => I.nativeModules.requireModule(e),
    ensureModule: e => h.isPlatformEmbedded ? __OVERLAY__ && w.has(e) ? Promise.resolve() : I.nativeModules.ensureModule(e) : Promise.reject(Error("not embedded")),
    get canBootstrapNewUpdater() {
      return I.nativeModules.canBootstrapNewUpdater || false
    },
    getCrashReporterMetadata: () => I.crashReporter.getMetadata(),
    getSetting: async (e, t) => await I.settings.get(e, t),
    beforeUnload() {
      let e;
      try {
        e = this.requireModule("discord_overlay2")
      } catch (e) {}
      module && module.reset && module.reset(), module && module.disconnectAllProcesses && module.destroyHostProcess && (module.disconnectAllProcesses(), module.destroyHostProcess()), I.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && true !== Chunk433517.K.get(Chunk719711.SV) && this.supportsFeature(Chunk981631.eRX.USER_DATA_CACHE) && I.userDataCache.cacheUserData(Chunk433517.K.stringify())
    },
    inputEventRegister(e, t, n, r) {
      this.getDiscordUtils().inputEventRegister(parseInt("".concat(e)), t.map(e => {
        let [t, n, r] = e;
        return "string" == typeof r ? [t, n, r] : [t, n]
      }), n, r)
    },
    inputEventUnregister(e) {
      this.getDiscordUtils().inputEventUnregister(parseInt(e))
    },
    setOnInputEventCallback(e) {
      h.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e)
    },
    setFocused(e) {
      this.getDiscordUtils().inputSetFocused(e)
    },
    setObservedGamesCallback(e, t, n) {
      try {
        D = {};
        let r = 0,
          i = this.getDiscordUtils();
        (t && null != i.setObservedGamesCallback2 ? i.setObservedGamesCallback2 : i.setObservedGamesCallback)(e.map(e => {
          let t = ++r;
          return null != e.id && (D[t] = e.id), v(y({}, e), {
            cmdline: e.cmdLine,
            id: t
          })
        }), e => n(e.map(W)))
      } catch (e) {}
    },
    setGameDetectionCallback(e) {
      var t, n;
      null == (t = (n = this.getDiscordUtils()).setGameDetectionCallback) || t.call(n, (t, n) => e(t.map(W), n.map(W)))
    },
    setGameDetectionErrorCallback(e) {
      var t, n;
      null == (t = (n = this.getDiscordUtils()).setGameDetectionErrorCallback) || t.call(n, e)
    },
    setRobloxSubgameDetectionConfig(e, t) {
      var n, r;
      null == (n = (r = this.getDiscordUtils()).setRobloxSubgameDetectionConfig) || n.call(r, e, t)
    },
    checkForRobloxSubgameUpdate() {
      var e, t;
      null == (e = (t = this.getDiscordUtils()).checkForRobloxSubgameUpdate) || module.call(exports)
    },
    setCandidateGamesCallback(e) {
      this.getDiscordUtils().setCandidateGamesCallback(t => {
        e(t.map(W))
      })
    },
    clearCandidateGamesCallback() {
      this.getDiscordUtils().clearCandidateGamesCallback()
    },
    setGameCandidateOverrides(e) {
      this.getDiscordUtils().setGameCandidateOverrides(e.map(e => v(y({}, e), {
        gameId: e.id,
        gameName: e.name
      })))
    },
    setObserverDebugCallback(e, t, n) {
      this.getDiscordUtils().setObserverDebugCallback(t => e(t), t, n)
    },
    clearObserverDebugCallback() {
      this.getDiscordUtils().setObserverDebugCallback(null, Chunk189451.ls.NONE, 0)
    },
    shouldDisplayNotifications() {
      return this.getDiscordUtils().shouldDisplayNotifications()
    },
    getVoiceEngine() {
      if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
      let e = this.requireModule("discord_voice");
      return L || (0, Chunk579092.Bl)((t, n, r) => {
        e.consoleLog(n, "[".concat(t, "] ").concat(r))
      }), L = true, module
    },
    getDiscordUtils() {
      if (!L) try {
        this.getVoiceEngine()
      } catch (e) {}
      return this.requireModule("discord_utils")
    },
    isSystemDarkMode() {
      var e, t, n;
      return !!(0, Chunk358085.isWindows)() && (null == (n = null == (e = (t = this.getDiscordUtils()).isSystemDarkMode) ? true : module.call(exports)) || require)
    },
    getVoiceFilters() {
      return this.requireModule("discord_voice_filters")
    },
    getGameUtils() {
      return this.requireModule("discord_game_utils")
    },
    getCloudSync() {
      return this.requireModule("discord_cloudsync")
    },
    getDispatch() {
      return this.requireModule("discord_dispatch")
    },
    setBadge(e) {
      if ("darwin" === (0, h.getPlatformName)()) {
        let t = "";
        false === e ? t = "•" : e > 0 && (t = "".concat(e)), I.remoteApp.dock.setBadge(t)
      } else "win32" === (0, h.getPlatformName)() ? this.send("APP_BADGE_SET", e) : "linux" === (0, h.getPlatformName)() && I.remoteApp.setBadgeCount(e >= 0 ? e : 0)
    },
    setSystemTrayIcon(e) {
      h.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_ICON", e)
    },
    setThumbarButtons(e) {
      var t, n;
      h.isPlatformEmbedded && (null == (n = I.thumbar) || null == (t = n.setThumbarButtons) || t.call(n, e, this.isSystemDarkMode()))
    },
    bounceDock(e) {
      if (h.isPlatformEmbedded) {
        let t = I.remoteApp;
        if (null != t.dock) {
          let n = t.dock.bounce(e);
          return async () => {
            let e = await n;
            t.dock.cancelBounce(e)
          }
        }
      }
    },
    setSystemTrayApplications(e) {
      h.isPlatformEmbedded && this.send("SYSTEM_TRAY_SET_APPLICATIONS", e)
    },
    get architecture() {
      return Chunk358085.isPlatformEmbedded ? I.process.arch : ""
    },
    get releaseChannel() {
      if (!Chunk358085.isPlatformEmbedded) return "";
      let e = I.remoteApp.getReleaseChannel();
      if (null != module) return module;
      return ""
    },
    get version() {
      return N
    },
    get buildNumber() {
      return R
    },
    get moduleVersions() {
      return P
    },
    get parsedOSRelease() {
      if (!Chunk358085.isPlatformEmbedded) return [];
      return I.os.release.split(".").map(e => parseInt(e, 10))
    },
    copy(e) {
      h.isPlatformEmbedded && I.clipboard.copy(e)
    },
    async copyImage(e, t) {
      l()(h.isPlatformEmbedded, "Copy image method called outside native app"), l()("function" == typeof I.clipboard.copyImage, "Copy image not supported");
      let n = await V(e),
        r = K(e, t),
        i = null != r && T.has(r) ? "image.".concat(r) : e;
      I.clipboard.copyImage(E.from(n), i)
    },
    async copyImageBlob(e, t) {
      let n = await e.arrayBuffer();
      I.clipboard.copyImage(E.from(n), t)
    },
    canSaveImage(e, t) {
      if (null == e || !h.isPlatformEmbedded) returnfalse;
      let n = K(e, t);
      return null == n || S.has(n)
    },
    async saveImage(e, t, n) {
      var r, i, a;
      let o, s;
      l()(h.isPlatformEmbedded, "Save image method called outside native app");
      let c = m.Z.toURLSafe(e);
      if (null == c) return "errored";
      let u = null != (r = c.pathname.split("/").pop()) ? r : "unknown";
      u = Z(u);
      let d = c.searchParams.get("format");
      if (null != d) {
        let e = d.replace(U, "").toLowerCase();
        if (e.length > 0) {
          let t = u.replace(G, "");
          u = "".concat(t, ".").concat(e)
        }
      } else if (!u.includes(".")) {
        let r = null != (a = null != (i = K(e, t)) ? i : n) ? a : "png";
        u = "".concat(u, ".").concat(r)
      }
      let _ = await V(e),
        p = E.from(_),
        g = f.K.get(x);
      if ("string" != typeof g && (g = true), "function" == typeof I.fileManager.saveWithDialog2) {
        if (null == (o = await I.fileManager.saveWithDialog2(p, u, null != g ? g : true))) return "errored";
        if (o.canceledByUser) return "canceled";
        s = o.directory
      } else try {
        s = await I.fileManager.saveWithDialog(p, u, null != g ? g : true)
      } catch (e) {
        return "errored"
      }
      return null == s || "" === s ? "errored" : (f.K.set(x, s), "saved")
    },
    async saveFile(e, t) {
      var n;
      l()(h.isPlatformEmbedded, "Save file method called outside native app");
      let r = m.Z.toURLSafe(e);
      if (null == r) return null;
      let i = null != (n = null != t ? t : r.pathname.split("/").pop()) ? n : "unknown";
      null == t && (i = Z(i));
      let a = await F(e),
        o = E.from(a),
        s = await I.fileManager.saveWithDialog(o, i, true);
      return null == s ? null : s
    },
    async downloadVoiceFilterFile(e, t, n) {
      l()(h.isPlatformEmbedded, "Download voice filter file method called outside native app");
      let r = m.Z.toURLSafe(e);
      return l()(r, "Could not download voice filter, fileSrc was not a valid path"), await I.fileManager.maybeDownloadVoiceFilterFile(e, t, n)
    },
    stopVoiceFilterDownloads() {
      I.fileManager.stopVoiceFilterDownloads()
    },
    canCheckVoiceFilterFilesExist: () => "function" == typeof I.fileManager.checkVoiceFilterFilesExist,
    checkVoiceFilterFilesExist: async e => await I.fileManager.checkVoiceFilterFilesExist(e),
    cleanupUnusedVoiceFilterFiles: async e => await I.fileManager.cleanupUnusedVoiceFilterFiles(e),
    async downloadMLModelFile(e, t, n) {
      l()(h.isPlatformEmbedded, "Download ML model file method called outside native app");
      let r = m.Z.toURLSafe(e);
      return l()(r, "Could not download ML model, fileSrc was not a valid path"), await I.fileManager.maybeDownloadMLModelFile(e, t, n)
    },
    stopMLModelDownloads() {
      I.fileManager.stopMLModelDownloads()
    },
    canCheckMLModelFilesExist: () => "function" == typeof I.fileManager.checkMLModelFilesExist,
    checkMLModelFilesExist: async e => await I.fileManager.checkMLModelFilesExist(e),
    cleanupUnusedMLModelFiles: async e => await I.fileManager.cleanupUnusedMLModelFiles(e),
    canCopyImage() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : true;
      if (!Chunk358085.isPlatformEmbedded || "function" != typeof I.clipboard.copyImage) returnfalse;
      if (null != module) {
        let t = K(module, true);
        if (null != exports && !T.has(exports)) returnfalse
      }
      returntrue
    },
    cut() {
      Chunk358085.isPlatformEmbedded && I.clipboard.cut()
    },
    paste() {
      Chunk358085.isPlatformEmbedded && I.clipboard.paste()
    },
    readClipboard: () => Chunk358085.isPlatformEmbedded ? I.clipboard.read() : "",
    on(e, t) {
      I.ipc.on(e, t)
    },
    invoke(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return I.ipc.invoke(e, ...n)
    },
    send(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      I.ipc.send(e, ...n)
    },
    isIPCReady() {
      if (!Chunk358085.isPlatformEmbedded) returntrue;
      try {
        return (null == I ? true : I.ipc) != null && "function" == typeof I.ipc.send
      } catch (e) {
        returnfalse
      }
    },
    async waitForIPCReady() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 5e3,
        t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : window,
        n = Date.now();
      for (; Date.now() - require < module;) {
        if (this.isIPCReady()) returntrue;
        await new Promise(e => t.requestAnimationFrame(e))
      }
      returnfalse
    },
    flashFrame(e) {
      I.window.flashFrame(e)
    },
    webAuthnRegister: e => I.nativeModules.ensureModule("discord_webauthn").then(() => I.webAuthn.webAuthnRegister(e)),
    webAuthnAuthenticate: e => I.nativeModules.ensureModule("discord_webauthn").then(() => I.webAuthn.webAuthnAuthenticate(e)),
    minimize(e) {
      I.window.minimize(e)
    },
    restore(e) {
      I.window.restore(e)
    },
    maximize(e) {
      I.window.maximize(e)
    },
    focus(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      t && (0, h.isWindows)() && this.minimize(null), I.window.focus(t, e)
    },
    blur() {
      Chunk358085.isPlatformEmbedded && null != I.window.blur ? I.window.blur() : window.blur()
    },
    fullscreen(e) {
      I.window.fullscreen(e)
    },
    close(e) {
      I.window.close(e)
    },
    setAlwaysOnTop(e, t) {
      "function" == typeof I.window.setAlwaysOnTop && I.window.setAlwaysOnTop(e, t)
    },
    async isAlwaysOnTop(e) {
      let t = false;
      return "function" == typeof I.window.isAlwaysOnTop && (t = await I.window.isAlwaysOnTop(e)), t
    },
    showInactive(e) {
      var t;
      "function" == typeof(null == I || null == (t = I.window) ? true : t.showInactive) && I.window.showInactive(e)
    },
    setMinimumSize(e, t) {
      var n, r;
      null == I || null == (r = I.window) || null == (n = r.setMinimumSize) || n.call(r, e, t)
    },
    setTrafficLightPosition(e) {
      if (h.isPlatformEmbedded && "darwin" === (0, h.getPlatformName)()) try {
        this.send("WINDOW_SET_TRAFFIC_LIGHT_POSITION", e)
      } catch (e) {}
    },
    purgeMemory() {
      Chunk358085.isPlatformEmbedded && I.processUtils.purgeMemory()
    },
    updateCrashReporter(e) {
      I.crashReporter.updateCrashReporter(e)
    },
    triggerJSException(e) {
      I.crashReporter.triggerJSException(e)
    },
    flushDNSCache() {
      Chunk358085.isPlatformEmbedded && I.processUtils.flushDNSCache()
    },
    supportsFeature: e => I.features.supports(e),
    getEnableHardwareAcceleration: () => !Chunk358085.isPlatformEmbedded || !__OVERLAY__ && I.gpuSettings.getEnableHardwareAcceleration(),
    setEnableHardwareAcceleration(e) {
      I.gpuSettings.setEnableHardwareAcceleration(e)
    },
    setChromiumSwitches(e) {
      I.gpuSettings.setChromiumSwitches(e)
    },
    setSetting(e, t) {
      var n, r;
      null == (n = (r = I.gpuSettings).setSetting) || n.call(r, e, t)
    },
    getOptionalUpdates: async () => await I.settings.get("OPTIN_OPTIONAL_UPDATES", false),
    async setOptionalUpdates(e) {
      await I.settings.set("OPTIN_OPTIONAL_UPDATES", e)
    },
    getGPUDriverVersions() {
      return (0, Chunk358085.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}))
    },
    setZoomFactor: e => !!h.isPlatformEmbedded && (I.window.setZoomFactor(e), true),
    setBackgroundThrottling(e) {
      null != I.window.setBackgroundThrottling ? I.window.setBackgroundThrottling(e) : I.window.webContents.setBackgroundThrottling(e)
    },
    setFocusable(e, t) {
      "function" == typeof I.window.setFocusable && I.window.setFocusable(e, t)
    },
    pauseFrameEvictor() {
      var e, t;
      null == (e = (t = I.app).pauseFrameEvictor) || module.call(exports)
    },
    unpauseFrameEvictor() {
      var e, t;
      null == (e = (t = I.app).unpauseFrameEvictor) || module.call(exports)
    },
    getPidFromDesktopSource(e) {
      if (!(0, h.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
      let t = null == e ? true : e.split(":"),
        n = null == t ? true : t[0];
      if ("window" === n) {
        var r;
        let e = null != (r = null == t ? true : t[1]) ? r : "",
          n = this.getDiscordUtils().getPidFromWindowHandle(e);
        return null == n || 0 === n ? null : n
      }
      return n.startsWith("screen") ? 1 : "prepicked" === n ? 1 : null
    },
    getDesktopSourceFromPid(e) {
      if (!(0, h.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
      let t = this.getDiscordUtils().getWindowHandleFromPid(e);
      return null == t || 0 === t.length ? null : ["window", t, "0"].join(":")
    },
    generateSessionFromPid(e) {
      return this.getDiscordUtils().generateSessionFromPid(e)
    },
    getAudioPid(e) {
      return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e)
    },
    setForegroundProcess(e) {
      let {
        setForegroundProcess: t
      } = this.getDiscordUtils();
      try {
        return null != t && t(e)
      } catch (e) {
        returnfalse
      }
    },
    getDiscordMemoryUsage() {
      let {
        getDiscordMemoryUsage: e
      } = this.getDiscordUtils();
      return null != module ? module() : null
    },
    getDiscordMemoryUsageElectronRenderer() {
      let {
        getDiscordMemoryUsageElectronRenderer: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    getDiscordMemoryPrivateUsageElectronRenderer() {
      let {
        getDiscordMemoryPrivUsageElectronRenderer: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    getDiscordMemoryUsageElectronProcessTypeDetails() {
      let {
        getDiscordMemoryUsageElectronProcessTypeDetails: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    enablePerfMemoryHooks(e) {
      let {
        enablePerfMemoryHooks: t
      } = this.getDiscordUtils();
      return null == t ? true : t(e)
    },
    disablePerfMemoryHooks() {
      let {
        disablePerfMemoryHooks: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    getPerfAttributedMemory() {
      let {
        getPerfAttributedMemory: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    getPerfAttributedMemoryCallstacks(e) {
      let {
        getPerfAttributedMemoryCallstacks: t
      } = this.getDiscordUtils();
      return null == t ? true : t(e)
    },
    getPerfAttributedMemoryStats() {
      let {
        getPerfAttributedMemoryStats: e
      } = this.getDiscordUtils();
      return null == module ? true : module()
    },
    showOpenDialog: e => I.fileManager.showOpenDialog({
      properties: e
    }),
    flushStorageData: () => Chunk358085.isPlatformEmbedded ? new Promise((e, t) => {
      null != I.processUtils.flushStorageData ? I.processUtils.flushStorageData(n => null != n ? t(Error(n)) : e()) : e()
    }) : Promise.resolve(),
    flushCookies: () => Chunk358085.isPlatformEmbedded ? new Promise((e, t) => {
      null != I.processUtils.flushCookies ? I.processUtils.flushCookies(n => null != n ? t(Error(n)) : e()) : e()
    }) : Promise.resolve(),
    setCrashInformation(e, t) {
      var n;
      h.isPlatformEmbedded && (null == I || null == (n = I.processUtils) ? true : n.setCrashInformation) != null && I.processUtils.setCrashInformation(e, t)
    },
    blockDisplaySleep: () => Chunk358085.isPlatformEmbedded && null != I.powerSaveBlocker ? I.powerSaveBlocker.blockDisplaySleep() : null,
    unblockDisplaySleep(e) {
      h.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.unblockDisplaySleep(e)
    },
    cleanupDisplaySleep() {
      Chunk358085.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.cleanupDisplaySleep()
    },
    relaunch() {
      Chunk358085.isPlatformEmbedded && null != I.remoteApp.relaunch && I.remoteApp.relaunch()
    },
    makeChunkedRequest(e, t, n) {
      let r = "".concat((0, u.K0)()).concat(e);
      if (!h.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
      if (null == I.http) return Promise.reject(Error("HTTP module not available"));
      let {
        method: i,
        maxBps: a,
        token: o,
        chunkInterval: s,
        contentType: l
      } = y({
        maxBps: 8e3,
        chunkInterval: 50,
        contentType: "application/json"
      }, n), c = t;
      "application/json" === l && (c = JSON.stringify(t));
      let d = s / 1e3 * a,
        f = Math.ceil(c.length / d),
        _ = Array(f);
      for (let e = 0; e < f; e++) {
        let t = e * d;
        _[e] = c.substring(t, t + d)
      }
      return new Promise((e, t) => {
        null != I.http && I.http.makeChunkedRequest(r, _, {
          method: i,
          chunkInterval: s,
          contentType: l,
          token: o
        }, (n, r) => null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r))
      })
    },
    submitLiveCrashReport(e) {
      if (!(0, h.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
      let t = this.getCrashReporterMetadata(),
        n = I.app.getReleaseChannel(),
        r = null == t ? true : t.sentry;
      return this.getDiscordUtils().submitLiveCrashReport(n, y({}, r, e))
    },
    crash(e) {
      let t = this.getDiscordUtils().crash;
      return null != t && (t(e), true)
    },
    setApplicationBackgroundColor(e) {
      I.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e)
    },
    initializeExitHook() {
      let {
        initializeExitHook: e
      } = this.getDiscordUtils();
      null != module && module()
    },
    initializeWERHandler() {
      let {
        initializeWERHandler: e
      } = this.getDiscordUtils();
      null != module && module()
    },
    pollQueueMetrics(e) {
      let {
        pollQueueMetrics: t
      } = this.getDiscordUtils();
      null != t && t(e)
    },
    asyncify: e => new Promise((t, n) => {
      e(t)
    }),
    IsGameDisplayModeUpdateSupported() {
      let {
        gameDisplayModeUpdate: e
      } = this.getDiscordUtils();
      return null != module
    },
    GameDisplayModeUpdate(e) {
      let {
        gameDisplayModeUpdate: t
      } = this.getDiscordUtils();
      return null != t && null != e && t(e)
    },
    GameDisplayModeIsGameSupported(e) {
      let {
        gameDisplayModeIsSupported: t
      } = this.getDiscordUtils();
      return null != t && null != e && t(e)
    },
    GetWindowFullscreenTypeByPid(e, t, n) {
      var r;
      let {
        getWindowFullscreenTypeByPid: i
      } = this.getDiscordUtils(), a = 0 !== e && null != i && null != t ? i(e, t) : null;
      return false === a && (a = null), null != (r = null != a ? a : n) ? r : _.Jx.UNKNOWN
    },
    GetWindowFullscreenTypeExtraByPid(e, t) {
      let {
        getWindowFullscreenTypeExtraByPid: n
      } = this.getDiscordUtils();
      return null == n || null == t ? {
        quns: _.Ng.QUNS_UNKNOWN
      } : n(e, t)
    },
    SetGPUBoostEnabledByPid(e, t) {
      let {
        setGPUBoostEnabledByPid: n
      } = this.getDiscordUtils();
      return null != n && n(e, t)
    },
    IsHardwareAcceleratedGPUSchedulingEnabled() {
      let {
        isHardwareAcceleratedGPUSchedulingEnabled: e
      } = this.getDiscordUtils();
      return null != module && module()
    },
    AcquireGlobalLock(e) {
      let {
        acquireGlobalLock: t
      } = this.getDiscordUtils();
      if (null != t) return t(e)
    },
    SetServiceChannel(e) {
      let {
        setServiceChannel: t
      } = this.getDiscordUtils();
      null != t && t(e)
    },
    IsSystemServiceInstalled() {
      let {
        isSystemServiceInstalled: e
      } = this.getDiscordUtils();
      if (null != module) return module()
    },
    CanSystemServiceBeInstalled() {
      let {
        canSystemServiceBeInstalled: e
      } = this.getDiscordUtils();
      if (null != module) return module()
    },
    InstallSystemService() {
      let {
        installSystemService: e
      } = this.getDiscordUtils();
      return null != module ? module() : Promise.reject(Error("System service native not available"))
    },
    DoesSystemServiceHaveUpdate() {
      let {
        doesSystemServiceHaveUpdate: e
      } = this.getDiscordUtils();
      return null != module ? module() : Promise.reject(Error("System service native not available"))
    },
    UpdateSystemService() {
      let {
        updateSystemService: e
      } = this.getDiscordUtils();
      return null != module ? module() : Promise.reject(Error("System service native not available"))
    },
    UninstallSystemService() {
      let {
        uninstallSystemService: e
      } = this.getDiscordUtils();
      return null != module ? module() : Promise.reject(Error("System service native not available"))
    },
    InputEventServiceSetStatusCallback(e) {
      let {
        inputEventServiceSetStatusCallback: t
      } = this.getDiscordUtils();
      null != t && t(e)
    },
    InputEventServiceSetAllowed(e) {
      let {
        inputEventServiceSetAllowed: t
      } = this.getDiscordUtils();
      if (null != t) return t(e)
    },
    ToolServiceSetStatusCallback(e) {
      let {
        toolServiceSetStatusCallback: t
      } = this.getDiscordUtils();
      null != t && t(e)
    },
    ToolServiceSetAllowed(e) {
      let {
        toolServiceSetAllowed: t
      } = this.getDiscordUtils();
      if (null != t) return t(e)
    },
    isModuleVersionAtLeast(e, t) {
      var n, r, i;
      let a = [...null != N ? N : [0, 0, 0]];
      a.push(null != (r = null == (n = this.moduleVersions) ? true : n[e]) ? r : 0);
      let o = null != (i = t[this.releaseChannel]) ? i : t.stable;
      for (let [e, t] of a.entries())
        if (t > o[e]) break;
        else if (t < o[e]) returnfalse;
      returntrue
    },
    fetchRiotGamesLiveClientData(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      return h.isPlatformEmbedded ? null == I.riotGames ? Promise.reject(Error("Riot Games module not available")) : I.riotGames.fetchLiveClientData(e, t) : Promise.reject(Error("Not embedded!"))
    },
    appViewed() {
      (0, Chunk358085.isDesktop)() && this.send("APP_VIEWED")
    },
    appLoaded() {
      z("APP_LOADED")
    },
    indexLoadedAsync() {
      z("DISCORD_APP_ASYNC_INDEX_TSX_LOADED")
    }
  },
  X = q