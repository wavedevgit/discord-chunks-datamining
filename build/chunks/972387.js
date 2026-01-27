/** Chunk was on 77870 **/
/** chunk id: 972387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk159001 = require("./159001.js"),
  Chunk960736 = require("./960736.js"),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk4274 = require("./4274.js"),
  Chunk115063 = require("./115063.js"),
  Chunk652215 = require("./652215.js");
let p = {
  acceptInvite(e) {
    let t = l.Ay.getInviteContext("Desktop Invite Modal", e),
      n = (0, s.tJ)(),
      o = (0, s.Z1)(),
      d = (0, s.N9)();
    l.Ay.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e)
      }
    }).then(() => {
      if (null != e.guild) {
        if (o) {
          if (a.$s.getSetting().includes(e.guild.id)) {
            let t = new Set((0, u.Tb)());
            t.delete(e.guild.id), a.$s.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let n = new Set((0, u.Tb)());
          n.add(null == (t = e.guild) ? true : t.id), a.$s.updateSetting(Array.from(n))
        }
        if (d) {
          if (a.JG.getSetting().includes(e.guild.id)) {
            let t = new Set((0, u.Kk)());
            t.delete(e.guild.id), a.JG.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, u.Kk)());
          t.add(e.guild.id), a.JG.updateSetting(Array.from(t))
        }
        null != n && n.length > 0 && (0, i.GL)(e.guild.id, {
          nick: n
        })
      }
      this.close()
    }, e => {
      r.h.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, c.s)(e.code)
      })
    })
  },
  close() {
    let e = (0, s.p9)(),
      t = (0, s.xD)();
    if ((0, s.jJ)()) {
      let n = (0, s.tJ)(),
        r = (0, s.Z1)(),
        l = (0, s.N9)(),
        i = (0, s.qO)();
      o.default.track(d.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: e,
        guild_id: t,
        nickname_present: null != n && n.length > 0,
        dms_allowed: r,
        activity_status_shown: l,
        changed_from_default: i
      })
    }(0, s.xP)(), r.h.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}