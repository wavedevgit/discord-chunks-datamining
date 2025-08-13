/** Chunk was on 41753 **/
/** chunk id: 818765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk339478 = require("./339478.js"),
  Chunk981631 = require("./981631.js");
let f = (0, Chunk460181.uk)("poggermode_applause", Chunk474873.Z.getSoundpack()),
  g = false,
  m = false,
  b = [],
  O = null,
  _ = () => {
    g || (f.loop(), g = true)
  },
  y = () => {
    f.stop(), g = false
  },
  C = () => {
    let e = Chunk351780.Z.isEnabled(),
      t = Chunk351780.Z.comboSoundsEnabled;
    return !!module && !!exports && null != Chunk944486.Z.getChannelId()
  },
  v = () => {
    if (0 === b.length || !C() || m) return;
    m = true;
    let [e, t] = b[b.length - 1];
    (0, Chunk460181.GN)(module, exports), O = setTimeout(j, 1e3)
  },
  j = () => {
    b.pop(), m = false, v()
  },
  E = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = a.Z.isConnected();
    b.push([e, t * (n ? .1 : 1)]), v()
  };
class S extends Chunk317770.Z {
  _initialize() {
    Chunk339478.ZP.addChangeListener(this.startAudio), Chunk570140.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), Chunk570140.Z.subscribe("TYPING_STOP", this.stopAudio), Chunk570140.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), Chunk570140.Z.subscribe("CHANNEL_SELECT", this.stopAudio), Chunk570140.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    Chunk339478.ZP.removeChangeListener(this.startAudio), Chunk570140.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), Chunk570140.Z.unsubscribe("TYPING_STOP", this.stopAudio), Chunk570140.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), Chunk570140.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), Chunk570140.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(O)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === p.hes.RTC_CONNECTED ? f.volume = .1 : f.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    s.default.getId() === t && y()
  }
  stopAudio() {
    y()
  }
  startAudio() {
    var e;
    if (!C()) return;
    let t = Chunk944486.Z.getChannelId();
    if (null == exports) return;
    let n = Chunk314897.default.getId(),
      r = Chunk111583.Z.isTyping(exports, require),
      i = Chunk339478.ZP.getUserCombo(require, exports),
      l = null != (e = null == Chunk317770 ? true : Chunk317770.multiplier) ? module : 1;
    Chunk570140 && Chunk460181 >= 7 ? _() : y()
  }
  playAchievementUnlockSound() {
    C() && E("poggermode_achievement_unlock")
  }
}
let x = new S