/** Chunk was on web.js **/
/** chunk id: 63389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk205693 = require("./205693.js"),
  Chunk439372 = require("./439372.js"),
  Chunk608960 = require("./608960.js"),
  Chunk209932 = require("./209932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk274372 = require("./274372.js"),
  Chunk661978 = require("./661978.js"),
  Chunk372684 = require("./372684.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 1e4,
  h = 1e4;
class m extends Chunk439372.A {
  handleClipsSignalCreated(e, t) {
    this.isSignalEnabled(e.type) && this.process(e, t)
  }
  handleSpeaking(e) {
    if (!(0, d.TD)() || e.context !== r.x.DEFAULT) return;
    let t = l.A.isVoiceRecordingAllowedForUser(e.userId);
    (e.userId === s.default.getId() || t) && this.process({
      type: u.Gy.SPEAKING,
      speakingFlags: e.speakingFlags,
      userId: e.userId
    })
  }
  handleSoundboardPlayStart(e) {
    var t, n, r;
    if (!(0, d.TD)()) return;
    let i = o.A.getSoundById(e.soundId);
    if (null == i) return;
    let s = null == (r = a.A.getGuildEmojis(i.guildId)) ? true : r[null != (t = i.emojiId) ? t : ""];
    this.process({
      type: u.Gy.SOUNDBOARD,
      playing: true,
      soundboardId: e.soundId,
      emojiId: null == s ? true : s.id,
      emojiAnimated: null == s ? true : s.animated,
      emojiName: null != (n = null == s ? true : s.name) ? n : i.emojiName,
      name: i.name,
      userId: e.userId
    })
  }
  handleSoundboardPlayEnd(e) {
    var t, n;
    if (!(0, d.TD)()) return;
    let r = o.A.getSoundById(e.soundId);
    if (null == r) return;
    let i = null == (n = a.A.getGuildEmojis(r.guildId)) ? true : n[null != (t = r.emojiId) ? t : ""];
    this.process({
      type: u.Gy.SOUNDBOARD,
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
      case u.Gy.DISTRIBUTED:
        return l.A.getSettings().clipSignals.enableDistributedSignals;
      case u.Gy.PHRASE:
        return l.A.getSettings().clipSignals.enablePhraseSignals;
      case u.Gy.GAME_EVENT:
        return l.A.getSettings().clipSignals.enableGameSignals;
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
      case u.Gy.MANUAL:
      case u.Gy.DISTRIBUTED:
        this.scheduleClip(e);
        break;
      case u.Gy.GAME_EVENT:
        1 === e.importance && this.scheduleClip(e, _);
        break;
      case u.Gy.PHRASE:
        var n;
        if ((null == (n = this.scheduledClipSignal) ? true : n.type) === u.Gy.GAME_EVENT || performance.now() - this.lastClipTimestamp < h) return;
        this.scheduleClip(e)
    }
  }
  read() {
    return {
      timeline: this.timeline.read(),
      scheduledClipSignal: this.scheduledClipSignal,
      phraseCooldown: Math.max(0, h - (performance.now() - this.lastClipTimestamp))
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
      this.scheduledClipSignal = null, (0, f.yd)(true, e.type === u.Gy.MANUAL ? "manual" : "auto", [...this.timeline.read()], {
        signal: e,
        timestamp: Date.now(),
        emotionHistory: []
      })
    }, t)
  }
  handleSettingsUpdate() {
    this.timeline.updateLength(l.A.getSettings().clipsLength)
  }
  constructor() {
    super(), p(this, "timeline", true), p(this, "scheduledClipTimeout", null), p(this, "scheduledClipSignal", null), p(this, "lastClipTimestamp", 0), p(this, "actions", {
      CLIPS_SIGNAL_CREATED: e => this.handleClipsSignalCreated(e.signal, e.timestamp),
      SPEAKING: e => this.handleSpeaking(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_START: e => this.handleSoundboardPlayStart(e),
      GUILD_SOUNDBOARD_SOUND_PLAY_END: e => this.handleSoundboardPlayEnd(e),
      VOICE_CHANNEL_SELECT: () => this.clear(),
      CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate()
    }), this.timeline = new c.t(l.A.getSettings().clipsLength)
  }
}
let g = new m