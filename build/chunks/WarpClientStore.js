/** Chunk was on web.js **/
/** chunk id: 646834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./415506.js");
var r, Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk299886 = require("./299886.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 10,
  h = {
    status: ""
  },
  m = [],
  g = ["discord.com", "discordapp.com", "discordapp.net", "dl.discordapp.net", "discordcdn.com", "discord.gg", "discord.media"];
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.updateState(), this.addListener()
  }
  logEvent(e) {
    "status" in e && "string" == typeof e.status && (h = e), m = [...m.slice(m.length < p ? 0 : 1, p), e], this.emitChange()
  }
  async updateState() {
    try {
      var e, t, n;
      this.logEvent(await (null === Chunk998502.ZP || true === Chunk998502.ZP || null == (n = Chunk998502.ZP.getDiscordUtils) || null == (t = require.call(Chunk998502.ZP)) || null == (e = exports.runWarpCommand) ? true : module.call(exports, "status")))
    } catch (e) {}
  }
  addListener() {
    try {
      var e, t, n;
      null === Chunk998502.ZP || true === Chunk998502.ZP || null == (n = Chunk998502.ZP.getDiscordUtils) || null == (t = require.call(Chunk998502.ZP)) || null == (e = exports.onWarpEvent) || module.call(exports, e => this.logEvent(e))
    } catch (e) {}
  }
  async runCommand(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    try {
      return await d.ZP.getDiscordUtils().runWarpCommand(e, ...n)
    } catch (e) {
      throw this.logEvent({
        commandError: e.message
      }), e
    }
  }
  async install() {
    if (this.clientEnabled) try {
      this.logEvent({
        status: "Installing"
      });
      let e = await Chunk998502.ZP.getDiscordUtils().installWarp();
      this.logEvent({
        status: "Installed",
        installLog: module
      }), this.connect()
    } catch (e) {
      this.logEvent({
        status: "InstallFailed",
        error: module.message
      })
    }
  }
  async promptInstall() {
    await Chunk668781.Z.confirm({
      title: "Warp not installed",
      body: "Do you want to install Warp?"
    }) ? this.install() : this.logEvent({
      status: "InstallDeclined"
    })
  }
  async configureLicense(e) {
    let {
      ignoreAPIError: t
    } = e, n = await this.runCommand("registration", "show");
    if ((null == n ? true : n.code) === "MissingRegistration") throw Error("MissingRegistration when configuring license");
    try {
      if (c.H.getConfig({
          location: "configureLicense"
        }).enabled) {
        let e = (await o.tn.post({
          url: f.ANM.USER_WARP_LICENSE,
          oldFormErrors: true,
          rejectWithError: true
        })).body.license_key;
        if (null != e && "" !== e) await this.runCommand("registration", "license", e);
        else throw Error("No license key returned from API when configuring license")
      }
    } catch (e) {
      if (t) u.Z.captureException(e, {
        tags: {
          source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE"
        }
      });
      else throw e
    }
  }
  async configureExceptions() {
    try {
      let t = await this.runCommand("tunnel", "host", "list");
      if ((null == exports ? true : exports.mode) === "exclude")
        for (let n of g) {
          var e;
          (null == exports || null == (e = exports.hosts) ? true : module.indexOf(require)) === false && await this.runCommand("tunnel", "host", "add", require)
        }
    } catch (e) {}
  }
  async configureMode() {
    try {
      await this.runCommand("mode", "warp+doh")
    } catch (e) {}
  }
  get state() {
    return h
  }
  get log() {
    return m
  }
  get clientEnabled() {
    return (0, Chunk818710.nI)() && Chunk299886.H.getConfig({
      location: "WarpClientStore"
    }).enabled
  }
  get enabled() {
    return "Connected" === h.status || this.connecting
  }
  get connecting() {
    return "Configuring" === h.status || "Connecting" === h.status || "ConnectCommandSent" === h.status || "Installing" === h.status || "Installed" === h.status
  }
  async connect() {
    if (this.clientEnabled) {
      this.logEvent({
        status: "Configuring"
      }), await this.configureLicense({
        ignoreAPIError: true
      }), await this.configureExceptions(), await this.configureMode();
      try {
        this.logEvent({
          status: "ConnectCommandSent"
        }), await this.runCommand("connect")
      } catch (e) {
        "Failed to locate warp-cli" === module.message && this.promptInstall()
      }
    }
    return this.clientEnabled
  }
  async disconnect() {
    if (this.clientEnabled) {
      let e = this.runCommand("disconnect");
      return h = {
        status: "DisconnectCommandSent"
      }, await module
    }
    return this.clientEnabled
  }
  async finishSetup() {
    return await this.configureLicense({
      ignoreAPIError: false
    }), await this.configureExceptions(), await this.configureMode(), await this.updateState(), true
  }
}
_(E, "displayName", "WarpClientStore");
let b = new E(Chunk570140.Z, {})