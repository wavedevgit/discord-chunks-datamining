/** Chunk was on web.js **/
/** chunk id: 818765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk460181 = require("./460181.js"),
  Chunk474873 = require("./474873.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk111583 = require("./111583.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js"),
  Chunk981631 = require("./981631.js");
let _ = (0, Chunk460181.uk)("poggermode_applause", Chunk474873.Z.getSoundpack()),
  h = 7,
  m = 1,
  g = .1,
  E = 1e3,
  b = false,
  y = false,
  O = [],
  v = null,
  S = () => {
    b || (_.loop(), b = true)
  },
  I = () => {
    _.stop(), b = false
  },
  T = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  C = () => {
    if (0 === O.length || !T() || y) return;
    y = true;
    let [e, t] = O[O.length - 1];
    (0, a.GN)(e, t), v = setTimeout(A, E)
  },
  A = () => {
    O.pop(), y = false, C()
  },
  N = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = l.Z.isConnected() ? g : m;
    O.push([e, t * n]), C()
  };
class P extends Chunk317770.Z {
  _initialize() {
    f.ZP.addChangeListener(this.startAudio), r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.subscribe("TYPING_STOP", this.stopAudio), r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.subscribe("CHANNEL_SELECT", this.stopAudio), r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.unsubscribe("TYPING_STOP", this.stopAudio), r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(v)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === p.hes.RTC_CONNECTED ? _.volume = g : _.volume = m
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    s.default.getId() === t && I()
  }
  stopAudio() {
    I()
  }
  startAudio() {
    var e;
    if (!T()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = s.default.getId(),
      r = u.Z.isTyping(t, n),
      i = f.ZP.getUserCombo(n, t),
      a = null != (e = null == i ? true : i.multiplier) ? e : 1;
    r && a >= h ? S() : I()
  }
  playAchievementUnlockSound() {
    T() && N("poggermode_achievement_unlock")
  }
}
let w = new P