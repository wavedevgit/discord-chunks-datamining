/** Chunk was on 20501 **/
/** chunk id: 956097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var i, r, s, Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk49226 = require("./49226.js"),
  Chunk981631 = require("./981631.js");
let g = {
    status: ""
  },
  h = [],
  f = ["discord.com", "discordapp.com", "discordapp.net", "dl.discordapp.net", "discordcdn.com", "discord.gg", "discord.media"];
class b extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.updateState(), this.addListener()
  }
  logEvent(e) {
    "status" in e && "string" == typeof e.status && (g = e), h = [...h.slice(h.length < 10 ? 0 : 1, 10), e], this.emitChange()
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
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    try {
      return await u.ZP.getDiscordUtils().runWarpCommand(e, ...n)
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
  async configureLicense() {
    try {
      var e;
      let t = await this.runCommand("registration", "show");
      if ((null == exports ? true : exports.code) === "MissingRegistration" && (await this.runCommand("registration", "new"), t = await this.runCommand("registration", "show")), (null == exports || null == (e = exports.account) ? true : module.type) === "free" && Chunk49226.Z.getCurrentConfig({
          location: "configureLicense"
        }).plus) {
        let {
          key: e
        } = (await Chunk544891.tn.get({
          url: Chunk981631.ANM.USER_WARP_LICENSE,
          oldFormErrors: true,
          rejectWithError: true
        })).body;
        null != module && "" !== module && await this.runCommand("registration", "license", module)
      }
    } catch (e) {}
  }
  async configureExceptions() {
    try {
      let t = await this.runCommand("tunnel", "host", "list");
      if ((null == exports ? true : exports.mode) === "exclude")
        for (let n of f) {
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
    return g
  }
  get log() {
    return h
  }
  get clientEnabled() {
    return Chunk49226.Z.getCurrentConfig({
      location: "WarpClientStore"
    }, {
      autoTrackExposure: true,
      disable: !Chunk358085.isPlatformEmbedded
    }).enable
  }
  get enabled() {
    return "Connected" === g.status || this.connecting
  }
  get connecting() {
    return "Configuring" === g.status || "Connecting" === g.status || "ConnectCommandSent" === g.status || "Installing" === g.status || "Installed" === g.status
  }
  async connect() {
    if (this.clientEnabled) {
      this.logEvent({
        status: "Configuring"
      }), await this.configureLicense(), await this.configureExceptions(), await this.configureMode();
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
  disconnect() {
    return this.clientEnabled && (this.runCommand("disconnect"), g = {
      status: "DisconnectCommandSent"
    }), this.clientEnabled
  }
}
s = "WarpClientStore", (r = "displayName") in b ? Object.defineProperty(b, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = s;
let x = new b(Chunk570140.Z, {})