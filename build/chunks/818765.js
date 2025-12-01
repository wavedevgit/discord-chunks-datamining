/** Chunk was on web.js **/
/** chunk id: 818765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  m = 7,
  h = 1,
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
    let e = Chunk351780.Z.isEnabled(),
      t = Chunk351780.Z.comboSoundsEnabled;
    return !!module && !!exports && null != Chunk944486.Z.getChannelId()
  },
  A = () => {
    if (0 === O.length || !T() || y) return;
    y = true;
    let [e, t] = O[O.length - 1];
    (0, Chunk460181.GN)(module, exports), v = setTimeout(C, E)
  },
  C = () => {
    O.pop(), y = false, A()
  },
  N = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
      n = l.Z.isConnected() ? g : h;
    O.push([e, t * n]), A()
  };
class P extends Chunk317770.Z {
  _initialize() {
    Chunk843693.ZP.addChangeListener(this.startAudio), Chunk570140.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), Chunk570140.Z.subscribe("TYPING_STOP", this.stopAudio), Chunk570140.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), Chunk570140.Z.subscribe("CHANNEL_SELECT", this.stopAudio), Chunk570140.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    Chunk843693.ZP.removeChangeListener(this.startAudio), Chunk570140.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), Chunk570140.Z.unsubscribe("TYPING_STOP", this.stopAudio), Chunk570140.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), Chunk570140.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), Chunk570140.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(v)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === p.hes.RTC_CONNECTED ? _.volume = g : _.volume = h
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
    let t = Chunk944486.Z.getChannelId();
    if (null == exports) return;
    let n = Chunk314897.default.getId(),
      r = Chunk111583.Z.isTyping(exports, require),
      i = Chunk843693.ZP.getUserCombo(require, exports),
      a = null != (e = null == Chunk317770 ? true : Chunk317770.multiplier) ? module : 1;
    Chunk570140 && Chunk460181 >= m ? S() : I()
  }
  playAchievementUnlockSound() {
    T() && N("poggermode_achievement_unlock")
  }
}
let R = new P