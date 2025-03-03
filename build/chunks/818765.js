/** Chunk was on 51424 **/
n.d(t, {
  Z: () => y
}), n(47120), n(653041);
var r = n(570140),
  i = n(317770),
  l = n(460181),
  o = n(474873),
  a = n(314897),
  s = n(19780),
  c = n(944486),
  u = n(111583),
  d = n(351780),
  _ = n(843693),
  E = n(981631);
let p = (0, l.uk)("poggermode_applause", o.Z.getSoundpack()),
  m = !1,
  f = !1,
  h = [],
  g = null,
  O = () => {
    !m && (p.loop(), m = !0)
  },
  N = () => {
    p.stop(), m = !1
  },
  I = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  b = () => {
    if (0 === h.length || !I() || f) return;
    f = !0;
    let [e, t] = h[h.length - 1];
    (0, l.GN)(e, t), g = setTimeout(T, 1e3)
  },
  T = () => {
    h.pop(), f = !1, b()
  },
  C = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = s.Z.isConnected();
    h.push([e, t * (n ? .1 : 1)]), b()
  };
class S extends i.Z {
  _initialize() {
    _.ZP.addChangeListener(this.startAudio), r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.subscribe("TYPING_STOP", this.stopAudio), r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.subscribe("CHANNEL_SELECT", this.stopAudio), r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    _.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.unsubscribe("TYPING_STOP", this.stopAudio), r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(g)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === E.hes.RTC_CONNECTED ? p.volume = .1 : p.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    a.default.getId() === t && N()
  }
  stopAudio() {
    N()
  }
  startAudio() {
    var e;
    if (!I()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      r = u.Z.isTyping(t, n),
      i = _.ZP.getUserCombo(n, t),
      l = null !== (e = null == i ? void 0 : i.multiplier) && void 0 !== e ? e : 1;
    r && l >= 7 ? O() : N()
  }
  playAchievementUnlockSound() {
    I() && C("poggermode_achievement_unlock")
  }
}
let y = new S