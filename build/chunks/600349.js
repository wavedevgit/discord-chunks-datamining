/** Chunk was on web.js **/
/** chunk id: 600349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk46973 = require("./46973.js"),
  Chunk147913 = require("./147913.js"),
  Chunk714424 = require("./714424.js"),
  Chunk763296 = require("./763296.js"),
  Chunk314897 = require("./314897.js"),
  Chunk435064 = require("./435064.js"),
  Chunk519159 = require("./519159.js"),
  Chunk894694 = require("./894694.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 1e4,
  m = 1e4;
class h extends Chunk147913.Z {
  handleClipsSignalCreated(e, t) {
    this.isSignalEnabled(e.type) && this.process(e, t)
  }
  handleSpeaking(e) {
    if (!(0, d.LI)() || e.context !== r.Yn.DEFAULT) return;
    let t = l.Z.isVoiceRecordingAllowedForUser(e.userId);
    (e.userId === s.default.getId() || t) && this.process({
      type: u.Bs.SPEAKING,
      speakingFlags: e.speakingFlags,
      userId: e.userId
    })
  }
  handleSoundboardPlayStart(e) {
    var t, n, r;
    if (!(0, d.LI)()) return;
    let i = a.Z.getSoundById(e.soundId);
    if (null == i) return;
    let s = null == (t = o.Z.getGuildEmojis(i.guildId)) ? true : t[null != (n = i.emojiId) ? n : ""];
    this.process({
      type: u.Bs.SOUNDBOARD,
      playing: true,
      soundboardId: e.soundId,
      emojiId: null == s ? true : s.id,
      emojiAnimated: null == s ? true : s.animated,
      emojiName: null != (r = null == s ? true : s.name) ? r : i.emojiName,
      name: i.name,
      userId: e.userId
    })
  }
  handleSoundboardPlayEnd(e) {
    var t, n;
    if (!(0, d.LI)()) return;
    let r = a.Z.getSoundById(e.soundId);
    if (null == r) return;
    let i = null == (t = o.Z.getGuildEmojis(r.guildId)) ? true : t[null != (n = r.emojiId) ? n : ""];
    this.process({
      type: u.Bs.SOUNDBOARD,
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
      case u.Bs.DISTRIBUTED:
        return l.Z.getSettings().clipSignals.enableDistributedSignals;
      case u.Bs.PHRASE:
        return l.Z.getSettings().clipSignals.enablePhraseSignals;
      case u.Bs.GAME_EVENT:
        return l.Z.getSettings().clipSignals.enableGameSignals;
      default:
        returntrue
    }
  }
  process(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Date.now();
    switch (this.timeline.add({
        signal: e,
        timestamp: t
      }), e.type) {
      case u.Bs.MANUAL:
      case u.Bs.DISTRIBUTED:
        this.scheduleClip(e);
        break;
      case u.Bs.GAME_EVENT:
        1 === e.importance && this.scheduleClip(e, _);
        break;
      case u.Bs.PHRASE:
        var n;
        if ((null == (n = this.scheduledClipSignal) ? true : n.type) === u.Bs.GAME_EVENT || performance.now() - this.lastClipTimestamp < m) return;
        this.scheduleClip(e)
    }
  }
  read() {
    return {
      timeline: this.timeline.read(),
      scheduledClipSignal: this.scheduledClipSignal,
      phraseCooldown: Math.max(0, m - (performance.now() - this.lastClipTimestamp))
    }
  }
  clear() {
    this.unscheduleClip(), this.lastClipTimestamp = 0, this.timeline.clear()
  }
  unscheduleClip() {
    null != this.scheduledClipTimeout && (clearTimeout(this.scheduledClipTimeout), this.scheduledClipTimeout = null), this.scheduledClipSignal = null
  }
  scheduleClip(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    this.unscheduleClip(), this.scheduledClipSignal = e, this.lastClipTimestamp = performance.now() + t, this.scheduledClipTimeout = setTimeout(() => {
      this.scheduledClipSignal = null, (0, f.C1)(true, e.type === u.Bs.MANUAL ? "manual" : "auto", [...this.timeline.read()], {
        signal: e,
        timestamp: Date.now(),
        emotionHistory: []
      })
    }, t)
  }
  handleSettingsUpdate() {
    this.timeline.updateLength(Chunk435064.Z.getSettings().clipsLength)
  }
  constructor() {
    super(), p(this, "timeline", true), p(this, "scheduledClipTimeout", null), p(this, "scheduledClipSignal", null), p(this, "lastClipTimestamp", 0), p(this, "actions", {
      CLIPS_SIGNAL_CREATED: e => this.handleClipsSignalCreated(e.signal, e.timestamp),
      SPEAKING: e => this.handleSpeaking(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_START: e => this.handleSoundboardPlayStart(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_END: e => this.handleSoundboardPlayEnd(e),
      VOICE_CHANNEL_SELECT: () => this.clear(),
      CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate()
    }), this.timeline = new Chunk519159.m(Chunk435064.Z.getSettings().clipsLength)
  }
}
let g = new h