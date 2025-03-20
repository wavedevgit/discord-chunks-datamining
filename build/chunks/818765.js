/** Chunk was on 69002 **/
n.d(t, {
  Z: () => y
}), n(47120), n(653041);
var r = n(570140),
  i = n(317770),
  o = n(460181),
  l = n(474873),
  a = n(314897),
  s = n(19780),
  c = n(944486),
  u = n(111583),
  d = n(351780),
  _ = n(843693),
  p = n(981631);
let E = (0, o.uk)("poggermode_applause", l.Z.getSoundpack()),
  f = !1,
  h = !1,
  m = [],
  b = null,
  O = () => {
    !f && (E.loop(), f = !0)
  },
  g = () => {
    E.stop(), f = !1
  },
  N = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  I = () => {
    if (0 === m.length || !N() || h) return;
    h = !0;
    let [e, t] = m[m.length - 1];
    (0, o.GN)(e, t), b = setTimeout(T, 1e3)
  },
  T = () => {
    m.pop(), h = !1, I()
  },
  C = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = s.Z.isConnected();
    m.push([e, t * (n ? .1 : 1)]), I()
  };
class S extends i.Z {
  _initialize() {
    _.ZP.addChangeListener(this.startAudio), r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.subscribe("TYPING_STOP", this.stopAudio), r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.subscribe("CHANNEL_SELECT", this.stopAudio), r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    _.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.unsubscribe("TYPING_STOP", this.stopAudio), r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(b)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === p.hes.RTC_CONNECTED ? E.volume = .1 : E.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    a.default.getId() === t && g()
  }
  stopAudio() {
    g()
  }
  startAudio() {
    var e;
    if (!N()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      r = u.Z.isTyping(t, n),
      i = _.ZP.getUserCombo(n, t),
      o = null !== (e = null == i ? void 0 : i.multiplier) && void 0 !== e ? e : 1;
    r && o >= 7 ? O() : g()
  }
  playAchievementUnlockSound() {
    N() && C("poggermode_achievement_unlock")
  }
}
let y = new S