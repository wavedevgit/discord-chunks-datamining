/** Chunk was on web.js **/
/** chunk id: 646834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var r, Chunk990547 = require("./990547.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk323183 = require("./323183.js"),
  Chunk299886 = require("./299886.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk573261 = require("./573261.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 10,
  g = {
    status: ""
  },
  E = [],
  b = ["discord.com", "discordapp.com", "discordapp.net", "dl.discordapp.net", "discordcdn.com", "discord.gg", "discord.media"];
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.updateState(), this.addListener()
  }
  logEvent(e) {
    "status" in e && "string" == typeof e.status && (g = e), E = [...E.slice(E.length < h ? 0 : 1, h), e], this.emitChange()
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
      return await p.ZP.getDiscordUtils().runWarpCommand(e, ...n)
    } catch (e) {
      throw this.logEvent({
        commandError: e.message
      }), e
    }
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
        let e = (await f.Z.post({
          url: _.ANM.USER_WARP_LICENSE,
          retries: 3,
          oldFormErrors: true,
          rejectWithError: true,
          trackedActionData: {
            event: i.NetworkActionNames.NITRO_WARP_CREATE_LICENSE,
            properties: {
              is_on_connect: t
            }
          }
        })).body.license_key;
        if (null != e && "" !== e) await this.runCommand("registration", "license", e);
        else throw Error("No license key returned from API when configuring license")
      }
    } catch (e) {
      if (d.Z.captureException(e, {
          tags: {
            source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE"
          }
        }), u.default.track(_.rMx.PREMIUM_FEATURE_ERROR, {
          error_message: e instanceof Error ? e.message : JSON.stringify(e),
          error_source: l.D.PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE
        }), !t) throw e
    }
  }
  async configureExceptions() {
    try {
      let t = await this.runCommand("tunnel", "host", "list");
      if ((null == exports ? true : exports.mode) === "exclude")
        for (let n of b) {
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
    return E
  }
  get clientEnabled() {
    return (0, Chunk818710.nI)() && Chunk299886.H.getConfig({
      location: "WarpClientStore"
    }).enabled
  }
  get enabled() {
    return "Connected" === g.status || this.connecting
  }
  get connecting() {
    return "Configuring" === g.status || "Connecting" === g.status || "ConnectCommandSent" === g.status || "Installing" === g.status || "Installed" === g.status
  }
  async connect() {
    return this.clientEnabled && (this.logEvent({
      status: "Configuring"
    }), await this.configureLicense({
      ignoreAPIError: true
    }), await this.configureExceptions(), await this.configureMode(), this.logEvent({
      status: "ConnectCommandSent"
    }), await this.runCommand("connect")), this.clientEnabled
  }
  async disconnect() {
    if (this.clientEnabled) {
      let e = this.runCommand("disconnect");
      return g = {
        status: "DisconnectCommandSent"
      }, await module
    }
    return this.clientEnabled
  }
  async finishSetup() {
    return await this.configureExceptions(), await this.configureMode(), await this.configureLicense({
      ignoreAPIError: true
    }), await this.updateState(), true
  }
}
m(y, "displayName", "WarpClientStore");
let O = new y(Chunk570140.Z, {})