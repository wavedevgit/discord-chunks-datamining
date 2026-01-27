/** Chunk was on 77870 **/
/** chunk id: 64585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
let f = (0, Chunk400492.aN)("poggermode_applause", Chunk312671.A.getSoundpack()),
  g = false,
  m = false,
  b = [],
  A = null,
  y = () => {
    f.stop(), g = false
  },
  _ = () => {
    let e = d.A.isEnabled(),
      t = d.A.comboSoundsEnabled;
    return !!e && !!t && null != c.A.getChannelId()
  },
  O = () => {
    if (0 === b.length || !_() || m) return;
    m = true;
    let [e, t] = b[b.length - 1];
    (0, i.Ak)(e, t), A = setTimeout(j, 1e3)
  },
  j = () => {
    b.pop(), m = false, O()
  },
  v = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = o.A.isConnected();
    b.push([e, t * (n ? .1 : 1)]), O()
  };
class x extends Chunk272355.A {
  _initialize() {
    p.Ay.addChangeListener(this.startAudio), r.h.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.subscribe("TYPING_STOP", this.stopAudio), r.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.subscribe("CHANNEL_SELECT", this.stopAudio), r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    p.Ay.removeChangeListener(this.startAudio), r.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.h.unsubscribe("TYPING_STOP", this.stopAudio), r.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.h.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(A)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === h.S7L.RTC_CONNECTED ? f.volume = .1 : f.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    a.default.getId() === t && y()
  }
  stopAudio() {
    y()
  }
  startAudio() {
    var e;
    if (!_()) return;
    let t = c.A.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      r = u.A.isTyping(t, n),
      l = p.Ay.getUserCombo(n, t),
      i = null != (e = null == l ? true : l.multiplier) ? e : 1;
    r && i >= 7 ? g || (f.loop(), g = true) : y()
  }
  playAchievementUnlockSound() {
    _() && v("poggermode_achievement_unlock")
  }
}
let E = new x