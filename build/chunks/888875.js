/** Chunk was on web.js **/
/** chunk id: 888875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk377108 = require("./377108.js"),
  Chunk147913 = require("./147913.js"),
  Chunk654455 = require("./654455.js"),
  Chunk822245 = require("./822245.js"),
  Chunk339085 = require("./339085.js"),
  Chunk178106 = require("./178106.js"),
  Chunk822179 = require("./822179.js"),
  Chunk580005 = require("./580005.js"),
  Chunk70956 = require("./70956.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk48481 = require("./48481.js"),
  Chunk526761 = require("./526761.js"),
  Chunk674563 = require("./674563.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 10 + Math.random() * (10 * Chunk70956.Z.Millis.SECOND),
  O = 2 * Chunk70956.Z.Millis.HOUR + Math.floor(Math.random() * (10 * Chunk70956.Z.Millis.MINUTE)),
  v = null,
  S = false;
class I extends Chunk147913.Z {
  _initialize() {
    _.DZ.beforeSendCallbacks.push({
      hasChanges: () => false,
      processProto: () => {
        P(O, false)
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => d.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        d.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = a.ls.create(), e.stickerFrecency.stickers = (0, h.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => c.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        c.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = a.PL.create(), e.emojiReactionFrecency = a.PL.create(), e.emojiFrecency.emojis = (0, h.tU)(c.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100), e.emojiReactionFrecency.emojis = (0, h.tU)(c.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => u.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        u.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (i().isEmpty(u.Z.playedSoundHistory) || (e.playedSoundFrecency = a.pL.create(), e.playedSoundFrecency.playedSounds = (0, h.tU)(u.Z.playedSoundHistory, 100)))
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => s.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        s.ZP.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = a.YI.create(), e.applicationCommandFrecency.applicationCommands = (0, h.tU)(s.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => l.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        l.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = a.UY.create(), e.applicationFrecency.applications = (0, h.tU)(l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.yP))
      }
    }), _.DZ.beforeSendCallbacks.push({
      hasChanges: () => f.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        f.Z.hasPendingUsage() && m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = a.lG.create(), e.guildAndChannelFrecency.guildAndChannels = (0, h.tU)(f.Z.frecencyWithoutFetchingLatest.usageHistory, f.C))
      }
    })
  }
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: T,
      CONNECTION_RESUMED: T,
      CONNECTION_CLOSED: A,
      APP_STATE_UPDATE: C
    })
  }
}

function T() {
  S = true, P(y, true)
}

function C(e) {
  S && "active" !== e.state && (clearTimeout(v), v = null, N(false))
}

function A() {
  S && (clearTimeout(v), v = null, N(false))
}
async function N(e) {
  P(O, false), !m.Z.hasLoaded(g.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (d.Z.hasPendingUsage() || c.ZP.hasPendingUsage() || s.ZP.hasPendingUsage() || l.Z.hasPendingUsage() || f.Z.hasPendingUsage() && !e) && ((0, _.T6)(), await _.DZ.loadIfNecessary()), i().forEach(_.aj, e => {
    e.markDirtyIfHasPendingChange()
  })
}

function P(e, t) {
  null != v && clearTimeout(v), v = setTimeout(() => N(t), e)
}
let R = new I