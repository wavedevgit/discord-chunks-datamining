/** Chunk was on 32502 **/
/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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
let x = (0, Chunk400492.aN)("poggermode_applause", Chunk312671.A.getSoundpack()),
  p = false,
  m = false,
  A = [],
  b = null,
  j = () => {
    x.stop(), p = false
  },
  O = () => {
    let e = u.A.isEnabled(),
      t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != c.A.getChannelId()
  },
  E = () => {
    if (0 === A.length || !O() || m) return;
    m = true;
    let [e, t] = A[A.length - 1];
    (0, s.Ak)(e, t), b = setTimeout(S, 1e3)
  },
  S = () => {
    A.pop(), m = false, E()
  },
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = o.A.isConnected();
    A.push([e, t * (n ? .1 : 1)]), E()
  };
class C extends Chunk272355.A {
  _initialize() {
    h.Ay.addChangeListener(this.startAudio), i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.subscribe("TYPING_STOP", this.stopAudio), i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.subscribe("CHANNEL_SELECT", this.stopAudio), i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    h.Ay.removeChangeListener(this.startAudio), i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.h.unsubscribe("TYPING_STOP", this.stopAudio), i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(b)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === g.S7L.RTC_CONNECTED ? x.volume = .1 : x.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    a.default.getId() === t && j()
  }
  stopAudio() {
    j()
  }
  startAudio() {
    var e;
    if (!O()) return;
    let t = c.A.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      i = d.A.isTyping(t, n),
      l = h.Ay.getUserCombo(n, t),
      s = null != (e = null == l ? true : l.multiplier) ? e : 1;
    i && s >= 7 ? p || (x.loop(), p = true) : j()
  }
  playAchievementUnlockSound() {
    O() && f("poggermode_achievement_unlock")
  }
}
let v = new C