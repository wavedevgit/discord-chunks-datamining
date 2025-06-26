/** Chunk was on 98595 **/
n.d(t, {
  Z: () => T
}), n(388685), n(539854);
var i = n(570140),
  r = n(317770),
  l = n(460181),
  o = n(474873),
  s = n(314897),
  a = n(19780),
  u = n(944486),
  c = n(111583),
  d = n(351780),
  h = n(843693),
  g = n(981631);
let p = (0, l.uk)("poggermode_applause", o.Z.getSoundpack()),
  f = !1,
  E = !1,
  O = [],
  _ = null,
  m = () => {
    f || (p.loop(), f = !0)
  },
  b = () => {
    p.stop(), f = !1
  },
  C = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != u.Z.getChannelId()
  },
  v = () => {
    if (0 === O.length || !C() || E) return;
    E = !0;
    let [e, t] = O[O.length - 1];
    (0, l.GN)(e, t), _ = setTimeout(y, 1e3)
  },
  y = () => {
    O.pop(), E = !1, v()
  },
  L = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = a.Z.isConnected();
    O.push([e, t * (n ? .1 : 1)]), v()
  };
class k extends r.Z {
  _initialize() {
    h.ZP.addChangeListener(this.startAudio), i.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume), i.Z.subscribe("TYPING_STOP", this.stopAudio), i.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio), i.Z.subscribe("CHANNEL_SELECT", this.stopAudio), i.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    h.ZP.removeChangeListener(this.startAudio), i.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), i.Z.unsubscribe("TYPING_STOP", this.stopAudio), i.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), i.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio), i.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(_)
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
    s.default.getId() === t && b()
  }
  stopAudio() {
    b()
  }
  startAudio() {
    var e;
    if (!C()) return;
    let t = u.Z.getChannelId();
    if (null == t) return;
    let n = s.default.getId(),
      i = c.Z.isTyping(t, n),
      r = h.ZP.getUserCombo(n, t),
      l = null != (e = null == r ? void 0 : r.multiplier) ? e : 1;
    i && l >= 7 ? m() : b()
  }
  playAchievementUnlockSound() {
    C() && L("poggermode_achievement_unlock")
  }
}
let T = new k