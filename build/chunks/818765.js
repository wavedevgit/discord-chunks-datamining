/** Chunk was on 27805 **/
i.d(t, {
  Z: () => T
}), i(47120), i(653041);
var n = i(570140),
  r = i(317770),
  o = i(460181),
  s = i(474873),
  l = i(314897),
  a = i(19780),
  c = i(944486),
  d = i(111583),
  u = i(351780),
  h = i(843693),
  E = i(981631);
let g = (0, o.uk)("poggermode_applause", s.Z.getSoundpack()),
  _ = !1,
  L = !1,
  m = [],
  p = null,
  C = () => {
    !_ && (g.loop(), _ = !0)
  },
  f = () => {
    g.stop(), _ = !1
  },
  O = () => {
    let e = u.Z.isEnabled(),
      t = u.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  N = () => {
    if (0 === m.length || !O() || L) return;
    L = !0;
    let [e, t] = m[m.length - 1];
    (0, o.GN)(e, t), p = setTimeout(b, 1e3)
  },
  b = () => {
    m.pop(), L = !1, N()
  },
  v = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      i = a.Z.isConnected();
    m.push([e, t * (i ? .1 : 1)]), N()
  };
class k extends r.Z {
  _initialize() {
    h.ZP.addChangeListener(this.startAudio), n.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), n.Z.subscribe("TYPING_STOP", this.stopAudio), n.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), n.Z.subscribe("CHANNEL_SELECT", this.stopAudio), n.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    h.ZP.removeChangeListener(this.startAudio), n.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), n.Z.unsubscribe("TYPING_STOP", this.stopAudio), n.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), n.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), n.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(p)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === E.hes.RTC_CONNECTED ? g.volume = .1 : g.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    l.default.getId() === t && f()
  }
  stopAudio() {
    f()
  }
  startAudio() {
    var e;
    if (!O()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let i = l.default.getId(),
      n = d.Z.isTyping(t, i),
      r = h.ZP.getUserCombo(i, t),
      o = null !== (e = null == r ? void 0 : r.multiplier) && void 0 !== e ? e : 1;
    n && o >= 7 ? C() : f()
  }
  playAchievementUnlockSound() {
    O() && v("poggermode_achievement_unlock")
  }
}
let T = new k