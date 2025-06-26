/** Chunk was on 99014 **/
n.d(t, {
  Z: () => T
}), n(388685), n(539854);
var i = n(570140),
  r = n(317770),
  l = n(460181),
  o = n(474873),
  s = n(314897),
  a = n(19780),
  c = n(944486),
  u = n(111583),
  d = n(351780),
  h = n(843693),
  g = n(981631);
let p = (0, l.uk)("poggermode_applause", o.Z.getSoundpack()),
  f = !1,
  E = !1,
  _ = [],
  m = null,
  O = () => {
    f || (p.loop(), f = !0)
  },
  C = () => {
    p.stop(), f = !1
  },
  b = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  L = () => {
    if (0 === _.length || !b() || E) return;
    E = !0;
    let [e, t] = _[_.length - 1];
    (0, l.GN)(e, t), m = setTimeout(v, 1e3)
  },
  v = () => {
    _.pop(), E = !1, L()
  },
  y = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = a.Z.isConnected();
    _.push([e, t * (n ? .1 : 1)]), L()
  };
class k extends r.Z {
  _initialize() {
    h.ZP.addChangeListener(this.startAudio), i.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.Z.subscribe("TYPING_STOP", this.stopAudio), i.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.Z.subscribe("CHANNEL_SELECT", this.stopAudio), i.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    h.ZP.removeChangeListener(this.startAudio), i.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.Z.unsubscribe("TYPING_STOP", this.stopAudio), i.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(m)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === g.hes.RTC_CONNECTED ? p.volume = .1 : p.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    s.default.getId() === t && C()
  }
  stopAudio() {
    C()
  }
  startAudio() {
    var e;
    if (!b()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = s.default.getId(),
      i = u.Z.isTyping(t, n),
      r = h.ZP.getUserCombo(n, t),
      l = null != (e = null == r ? void 0 : r.multiplier) ? e : 1;
    i && l >= 7 ? O() : C()
  }
  playAchievementUnlockSound() {
    b() && y("poggermode_achievement_unlock")
  }
}
let T = new k