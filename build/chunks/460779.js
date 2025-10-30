/** Chunk was on web.js **/
/** chunk id: 460779, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => E
});
var Chunk46973 = require("./46973.js"),
  Chunk147913 = require("./147913.js"),
  Chunk714424 = require("./714424.js"),
  Chunk763296 = require("./763296.js"),
  Chunk314897 = require("./314897.js"),
  Chunk736869 = require("./736869.js"),
  Chunk333291 = require("./333291.js"),
  Chunk435064 = require("./435064.js"),
  Chunk519159 = require("./519159.js"),
  Chunk894694 = require("./894694.js"),
  Chunk39604 = require("./39604.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk147913.Z {
  handleConfigUpdate() {
    let e = Chunk435064.Z.getClipDecisionEngineConfig();
    this.engine.reconfigure(module)
  }
  handleClipsSignalCreated(e, t) {
    this.isSignalEnabled(e.type) && this.process(e, t)
  }
  handleSpeaking(e) {
    if (!d.Z.getSettings().clipsEnabled || e.context !== i.Yn.DEFAULT) return;
    let t = d.Z.isVoiceRecordingAllowedForUser(e.userId);
    (e.userId === l.default.getId() || t) && this.process({
      type: _.Bs.SPEAKING,
      speakingFlags: e.speakingFlags,
      userId: e.userId
    })
  }
  handleSoundboardPlayStart(e) {
    var t, n, r;
    let i = s.Z.getSoundById(e.soundId);
    if (null == i) return;
    let a = null == (t = o.Z.getGuildEmojis(i.guildId)) ? true : t[null != (n = i.emojiId) ? n : ""];
    this.process({
      type: _.Bs.SOUNDBOARD,
      playing: true,
      soundboardId: e.soundId,
      emojiId: null == a ? true : a.id,
      emojiAnimated: null == a ? true : a.animated,
      emojiName: null != (r = null == a ? true : a.name) ? r : i.emojiName,
      name: i.name,
      userId: e.userId
    })
  }
  handleSoundboardPlayEnd(e) {
    var t, n;
    let r = s.Z.getSoundById(e.soundId);
    if (null == r) return;
    let i = null == (t = o.Z.getGuildEmojis(r.guildId)) ? true : t[null != (n = r.emojiId) ? n : ""];
    this.process({
      type: _.Bs.SOUNDBOARD,
      playing: false,
      soundboardId: e.soundId,
      emojiId: null == i ? true : i.id,
      emojiAnimated: null == i ? true : i.animated,
      emojiName: null == i ? true : i.name,
      name: r.name,
      userId: e.userId
    })
  }
  isSignalEnabled(e) {
    switch (e) {
      case _.Bs.MANUAL:
        return d.Z.getSettings().clipSignals.enableManualSignals;
      case _.Bs.DISTRIBUTED:
        return d.Z.getSettings().clipSignals.enableDistributedSignals;
      case _.Bs.PHRASE:
        return d.Z.getSettings().clipSignals.enablePhraseSignals;
      case _.Bs.YELLING:
        return d.Z.getSettings().clipSignals.enableYellingSignals;
      case _.Bs.GAME_EVENT:
        return d.Z.getSettings().clipSignals.enableGameSignals;
      default:
        returntrue
    }
  }
  async process(e, t) {
    try {
      return await this.engine.process(e, t)
    } catch (e) {
      return null
    }
  }
  read() {
    return this.engine.read()
  }
  clear() {
    this.timeline.clear()
  }
  async saveClipCallback(e, t, n, r) {
    await (0, p.C1)(e, t, n, r)
  }
  getConfig() {
    return this.engine.getConfig()
  }
  getInternalState() {
    return this.engine.getInternalState()
  }
  constructor(e) {
    super(), h(this, "engine", true), h(this, "timeline", true), h(this, "actions", {
      CLIPS_SIGNAL_CREATED: e => this.handleClipsSignalCreated(e.signal, e.timestamp),
      CLIPS_ENGINE_CONFIG_UPDATE: () => this.handleConfigUpdate(),
      SPEAKING: e => this.handleSpeaking(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_START: e => this.handleSoundboardPlayStart(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_END: e => this.handleSoundboardPlayEnd(e),
      VOICE_CHANNEL_SELECT: () => this.clear()
    }), this.timeline = new f.m(e.timelineLengthSeconds), this.engine = new c.t(e, this.timeline, this.saveClipCallback.bind(this))
  }
}
try {
  r = Chunk435064.Z.getClipDecisionEngineConfig()
} catch (e) {
  r = (0, Chunk333291.P_)()
}
let g = new m(r);
g.initialize();
let E = g