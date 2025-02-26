/** Chunk was on 63061 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(570140),
  i = n(447543),
  o = n(87051),
  l = n(18438),
  s = n(44609),
  a = n(731971),
  c = n(695346),
  u = n(626135),
  d = n(782605),
  _ = n(621600),
  E = n(88658),
  p = n(981631);
let m = {
  acceptInvite(e) {
    let t = i.Z.getInviteContext("Desktop Invite Modal", e),
      n = (0, a.y)(),
      u = (0, a.h6)(),
      p = (0, a.U1)(),
      m = (0, a.yS)();
    i.Z.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || i.Z.transitionToInvite(e)
      }
    }).then(() => {
      if ((0, s.gY)({
          location: "acceptInvite"
        }) && null != e.guild) {
        if (u) {
          if (c.h2.getSetting().includes(e.guild.id)) {
            let t = new Set((0, E.YK)());
            t.delete(e.guild.id), c.h2.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let n = new Set((0, E.YK)());
          n.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), c.h2.updateSetting(Array.from(n))
        }
        if (p) {
          if (c.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, E._o)());
            t.delete(e.guild.id), c.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, E._o)());
          t.add(e.guild.id), c.SE.updateSetting(Array.from(t))
        }
        null != n && n.length > 0 && (0, l.iq)(e.guild.id, {
          nick: n
        }), (0, s.m4)({
          location: "acceptInvite"
        }) && o.Z.updateGuildNotificationSettings(e.guild.id, {
          muted: m
        }, _.ZB.Muted)
      }
      this.close()
    }, e => {
      r.Z.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, d.O)(e.code)
      })
    })
  },
  close() {
    let e = (0, a.e7)(),
      t = (0, a._J)();
    if ((0, s.gY)({
        location: "closeInvite"
      }) && (0, a.NQ)()) {
      let n = (0, a.y)(),
        r = (0, a.h6)(),
        i = (0, a.U1)(),
        o = (0, a.yS)(),
        l = (0, a.aP)();
      u.default.track(p.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: e,
        guild_id: t,
        nickname_present: null != n && n.length > 0,
        dms_allowed: r,
        activity_status_shown: i,
        muted_server: o,
        changed_from_default: l
      })
    }(0, a.oE)(), r.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}