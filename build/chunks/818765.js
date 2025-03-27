/** Chunk was on 87791 **/
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
  p = n(843693),
  f = n(981631);
let h = (0, o.uk)("poggermode_applause", l.Z.getSoundpack()),
  m = !1,
  _ = !1,
  b = [],
  g = null,
  E = () => {
    !m && (h.loop(), m = !0)
  },
  v = () => {
    h.stop(), m = !1
  },
  O = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != c.Z.getChannelId()
  },
  y = () => {
    if (0 === b.length || !O() || _) return;
    _ = !0;
    let [e, t] = b[b.length - 1];
    (0, o.GN)(e, t), g = setTimeout(C, 1e3)
  },
  C = () => {
    b.pop(), _ = !1, y()
  },
  x = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = s.Z.isConnected();
    b.push([e, t * (n ? .1 : 1)]), y()
  };
class S extends i.Z {
  _initialize() {
    p.ZP.addChangeListener(this.startAudio), r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.subscribe("TYPING_STOP", this.stopAudio), r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.subscribe("CHANNEL_SELECT", this.stopAudio), r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    p.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), r.Z.unsubscribe("TYPING_STOP", this.stopAudio), r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(g)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === f.hes.RTC_CONNECTED ? h.volume = .1 : h.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    a.default.getId() === t && v()
  }
  stopAudio() {
    v()
  }
  startAudio() {
    var e;
    if (!O()) return;
    let t = c.Z.getChannelId();
    if (null == t) return;
    let n = a.default.getId(),
      r = u.Z.isTyping(t, n),
      i = p.ZP.getUserCombo(n, t),
      o = null !== (e = null == i ? void 0 : i.multiplier) && void 0 !== e ? e : 1;
    r && o >= 7 ? E() : v()
  }
  playAchievementUnlockSound() {
    O() && x("poggermode_achievement_unlock")
  }
}
let N = new S