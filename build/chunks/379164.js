/** Chunk was on 76282 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(570140),
  i = n(447543),
  o = n(87051),
  l = n(18438),
  a = n(44609),
  s = n(731971),
  c = n(695346),
  u = n(626135),
  d = n(782605),
  _ = n(621600),
  p = n(88658),
  E = n(981631);
let f = {
  acceptInvite(e) {
    let t = i.ZP.getInviteContext("Desktop Invite Modal", e),
      n = (0, s.y)(),
      u = (0, s.h6)(),
      E = (0, s.U1)(),
      f = (0, s.yS)();
    i.ZP.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || i.ZP.transitionToInvite(e)
      }
    }).then(() => {
      if ((0, a.gY)({
          location: "acceptInvite"
        }) && null != e.guild) {
        if (u) {
          if (c.h2.getSetting().includes(e.guild.id)) {
            let t = new Set((0, p.YK)());
            t.delete(e.guild.id), c.h2.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let n = new Set((0, p.YK)());
          n.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), c.h2.updateSetting(Array.from(n))
        }
        if (E) {
          if (c.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, p._o)());
            t.delete(e.guild.id), c.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, p._o)());
          t.add(e.guild.id), c.SE.updateSetting(Array.from(t))
        }
        null != n && n.length > 0 && (0, l.iq)(e.guild.id, {
          nick: n
        }), (0, a.m4)({
          location: "acceptInvite"
        }) && o.Z.updateGuildNotificationSettings(e.guild.id, {
          muted: f
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
    let e = (0, s.e7)(),
      t = (0, s._J)();
    if ((0, a.gY)({
        location: "closeInvite"
      }) && (0, s.NQ)()) {
      let n = (0, s.y)(),
        r = (0, s.h6)(),
        i = (0, s.U1)(),
        o = (0, s.yS)(),
        l = (0, s.aP)();
      u.default.track(E.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: e,
        guild_id: t,
        nickname_present: null != n && n.length > 0,
        dms_allowed: r,
        activity_status_shown: i,
        muted_server: o,
        changed_from_default: l
      })
    }(0, s.oE)(), r.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}