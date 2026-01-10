/** Chunk was on 92977 **/
/** chunk id: 379164, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk18438 = require("./18438.js"),
  Chunk978986 = require("./978986.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk782605 = require("./782605.js"),
  Chunk88658 = require("./88658.js"),
  Chunk981631 = require("./981631.js");
let s = {
  acceptInvite(e) {
    let t = a.ZP.getInviteContext("Desktop Invite Modal", e),
      i = (0, l.y)(),
      c = (0, l.h6)(),
      f = (0, l.U1)();
    a.ZP.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || a.ZP.transitionToInvite(e)
      }
    }).then(() => {
      if (null != e.guild) {
        if (c) {
          if (o.h2.getSetting().includes(e.guild.id)) {
            let t = new Set((0, d.YK)());
            t.delete(e.guild.id), o.h2.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let i = new Set((0, d.YK)());
          i.add(null == (t = e.guild) ? true : t.id), o.h2.updateSetting(Array.from(i))
        }
        if (f) {
          if (o.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, d._o)());
            t.delete(e.guild.id), o.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, d._o)());
          t.add(e.guild.id), o.SE.updateSetting(Array.from(t))
        }
        null != i && i.length > 0 && (0, r.iq)(e.guild.id, {
          nick: i
        })
      }
      this.close()
    }, e => {
      n.Z.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, p.O)(e.code)
      })
    })
  },
  close() {
    let e = (0, l.e7)(),
      t = (0, l._J)();
    if ((0, l.NQ)()) {
      let i = (0, l.y)(),
        n = (0, l.h6)(),
        a = (0, l.U1)(),
        r = (0, l.aP)();
      c.default.track(f.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: e,
        guild_id: t,
        nickname_present: null != i && i.length > 0,
        dms_allowed: n,
        activity_status_shown: a,
        changed_from_default: r
      })
    }(0, l.oE)(), n.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}