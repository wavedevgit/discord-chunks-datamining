/** Chunk was on web.js **/
/** chunk id: 64585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./321073.js");
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk400492 = require("./400492.js"),
  Chunk312671 = require("./312671.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk741961 = require("./741961.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js"),
  Chunk652215 = require("./652215.js");
let _ = (0, Chunk400492.aN)("poggermode_applause", Chunk312671.A.getSoundpack()),
  h = 7,
  m = 1,
  g = .1,
  E = 1e3,
  y = false,
  b = false,
  O = [],
  v = null,
  A = () => {
    y || (_.loop(), y = true)
  },
  I = () => {
    _.stop(), y = false
  },
  S = () => {
    let e = d.A.isEnabled(),
      t = d.A.comboSoundsEnabled;
    return !!e && !!t && null != c.A.getChannelId()
  },
  T = () => {
    if (0 === O.length || !S() || b) return;
    b = true;
    let [e, t] = O[O.length - 1];
    (0, a.Ak)(e, t), v = setTimeout(C, E)
  },
  C = () => {
    O.pop(), b = false, T()
  },
  N = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = l.A.isConnected() ? g : m;
    O.push([e, t * n]), T()
  };
class R extends Chunk272355.A {
  _initialize() {
    f.Ay.addChangeListener(this.startAudio), r.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.subscribe("TYPING_STOP", this.stopAudio), r.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.subscribe("CHANNEL_SELECT", this.stopAudio), r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.Ay.removeChangeListener(this.startAudio), r.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.unsubscribe("TYPING_STOP", this.stopAudio), r.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(v)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === p.S7L.RTC_CONNECTED ? _.volume = g : _.volume = m
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    o.default.getId() === t && I()
  }
  stopAudio() {
    I()
  }
  startAudio() {
    var e;
    if (!S()) return;
    let t = c.A.getChannelId();
    if (null == t) return;
    let n = o.default.getId(),
      r = u.A.isTyping(t, n),
      i = f.Ay.getUserCombo(n, t),
      a = null != (e = null == i ? true : i.multiplier) ? e : 1;
    r && a >= h ? A() : I()
  }
  playAchievementUnlockSound() {
    S() && N("poggermode_achievement_unlock")
  }
}
let w = new R