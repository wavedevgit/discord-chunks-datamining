/** Chunk was on 24389 **/
n.d(t, {
  Z: () => N
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
  b = n(843693),
  h = n(981631);
let p = (0, o.uk)("poggermode_applause", l.Z.getSoundpack()),
  f = !1,
  g = !1,
  O = [],
  v = null,
  m = () => {
    !f && (p.loop(), f = !0)
  },
  y = () => {
    p.stop(), f = !1
  },
  E = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  _ = () => {
    if (0 === O.length || !E() || g) return;
    g = !0;
    let [e, t] = O[O.length - 1];
    (0, o.GN)(e, t), v = setTimeout(P, 1e3)
  },
  P = () => {
    O.pop(), g = !1, _()
  },
  j = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = s.Z.isConnected();
    O.push([e, t * (n ? .1 : 1)]), _()
  };
class C extends i.Z {
  _initialize() {
    b.ZP.addChangeListener(this.startAudio), r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.subscribe("TYPING_STOP", this.stopAudio), r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.subscribe("CHANNEL_SELECT", this.stopAudio), r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    b.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.unsubscribe("TYPING_STOP", this.stopAudio), r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(v)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === h.hes.RTC_CONNECTED ? p.volume = .1 : p.volume = 1
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
    if (!E()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      r = u.Z.isTyping(t, n),
      i = b.ZP.getUserCombo(n, t),
      o = null !== (e = null == i ? void 0 : i.multiplier) && void 0 !== e ? e : 1;
    r && o >= 7 ? m() : y()
  }
  playAchievementUnlockSound() {
    E() && j("poggermode_achievement_unlock")
  }
}
let N = new C