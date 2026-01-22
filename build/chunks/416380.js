/** Chunk was on web.js **/
/** chunk id: 416380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./321073.js"), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk803805 = require("./803805.js"),
  Chunk439372 = require("./439372.js"),
  Chunk26909 = require("./26909.js"),
  Chunk630248 = require("./630248.js"),
  Chunk508675 = require("./508675.js"),
  Chunk163956 = require("./163956.js"),
  Chunk931959 = require("./931959.js"),
  Chunk205761 = require("./205761.js"),
  Chunk927813 = require("./927813.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk761821 = require("./761821.js"),
  Chunk355097 = require("./355097.js"),
  Chunk705751 = require("./705751.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 10 + Math.random() * (10 * Chunk927813.A.Millis.SECOND),
  O = 2 * Chunk927813.A.Millis.HOUR + Math.floor(Math.random() * (10 * Chunk927813.A.Millis.MINUTE)),
  A = null,
  v = false;
class S extends Chunk439372.A {
  _initialize() {
    _.bW.beforeSendCallbacks.push({
      hasChanges: () => false,
      processProto: () => {
        R(O, false)
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => d.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !d.A.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = a.Do.create(), e.stickerFrecency.stickers = (0, m.Mr)(d.A.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => c.Ay.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !c.Ay.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = a.Q8.create(), e.emojiReactionFrecency = a.Q8.create(), e.emojiFrecency.emojis = (0, m.Mr)(c.Ay.emojiFrecencyWithoutFetchingLatest.usageHistory, 100), e.emojiReactionFrecency.emojis = (0, m.Mr)(c.Ay.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => u.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !u.A.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (i().isEmpty(u.A.playedSoundHistory) || (e.playedSoundFrecency = a.kc.create(), e.playedSoundFrecency.playedSounds = (0, m.Mr)(u.A.playedSoundHistory, 100)))
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => o.Ay.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !o.Ay.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = a.Zc.create(), e.applicationCommandFrecency.applicationCommands = (0, m.Mr)(o.Ay.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => l.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !l.A.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = a.cC.create(), e.applicationFrecency.applications = (0, m.Mr)(l.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory, E.h2))
      }
    }), _.bW.beforeSendCallbacks.push({
      hasChanges: () => f.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        !f.A.hasPendingUsage() || h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = a.F1.create(), e.guildAndChannelFrecency.guildAndChannels = (0, m.Mr)(f.A.frecencyWithoutFetchingLatest.usageHistory, f.D))
      }
    })
  }
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: I,
      CONNECTION_RESUMED: I,
      CONNECTION_CLOSED: C,
      APP_STATE_UPDATE: T
    })
  }
}

function I() {
  v = true, R(y, true)
}

function T(e) {
  v && "active" !== e.state && (clearTimeout(A), A = null, N(false))
}

function C() {
  v && (clearTimeout(A), A = null, N(false))
}
async function N(e) {
  R(O, false), !h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) && (d.A.hasPendingUsage() || c.Ay.hasPendingUsage() || o.Ay.hasPendingUsage() || l.A.hasPendingUsage() || f.A.hasPendingUsage() && !e) && ((0, _.cE)(), await _.bW.loadIfNecessary()), i().forEach(_.Df, e => {
    e.markDirtyIfHasPendingChange()
  })
}

function R(e, t) {
  null != A && clearTimeout(A), A = setTimeout(() => N(t), e)
}
let w = new S