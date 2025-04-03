/** Chunk was on 10451 **/
n.d(t, {
  $c: () => g,
  Nx: () => p,
  On: () => h,
  tQ: () => u,
  x5: () => m
});
var r = n(140492),
  i = n(475468),
  s = n(703656),
  a = n(769654),
  o = n(944486),
  l = n(914010),
  c = n(358085),
  d = n(981631);
let u = {
    binds: ["alt+down"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.Z)(), !1)
  },
  m = {
    binds: ["alt+up"],
    comboKeysBindGlobal: !0,
    action: () => ((0, r.Z)(-1), !1)
  },
  g = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: !0,
    action() {
      let e;
      if (null != l.Z.getGuildId()) e = d.ME;
      else {
        let t = l.Z.getLastSelectedGuildId();
        null != t && (e = t, (0, i.K)(t, o.Z.getChannelId(t)))
      }
      return null != e && (0, a.X)(e), !1
    }
  },
  p = {
    binds: (0, c.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: !0,
    action: () => ((0, s.op)(), !1)
  },
  h = {
    binds: (0, c.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: !0,
    action: () => ((0, s.eH)(), !1)
  }