/** Chunk was on 44022 **/
n.d(t, {
  Z: () => S
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
let f = (0, l.uk)("poggermode_applause", o.Z.getSoundpack()),
  p = !1,
  E = !1,
  b = [],
  m = null,
  _ = () => {
    p || (f.loop(), p = !0)
  },
  O = () => {
    f.stop(), p = !1
  },
  C = () => {
    let e = d.Z.isEnabled(),
      t = d.Z.comboSoundsEnabled;
    return !!e && !!t && null != u.Z.getChannelId()
  },
  v = () => {
    if (0 === b.length || !C() || E) return;
    E = !0;
    let [e, t] = b[b.length - 1];
    (0, l.GN)(e, t), m = setTimeout(y, 1e3)
  },
  y = () => {
    b.pop(), E = !1, v()
  },
  L = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = a.Z.isConnected();
    b.push([e, t * (n ? .1 : 1)]), v()
  };
class T extends r.Z {
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
    t === g.hes.RTC_CONNECTED ? f.volume = .1 : f.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    s.default.getId() === t && O()
  }
  stopAudio() {
    O()
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
    i && l >= 7 ? _() : O()
  }
  playAchievementUnlockSound() {
    C() && L("poggermode_achievement_unlock")
  }
}
let S = new T