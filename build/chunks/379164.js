/** Chunk was on 27 **/
/** chunk id: 379164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = {
  acceptInvite(e) {
    let t = i.ZP.getInviteContext("Desktop Invite Modal", e),
      n = (0, o.y)(),
      s = (0, o.h6)(),
      d = (0, o.U1)();
    i.ZP.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || i.ZP.transitionToInvite(e)
      }
    }).then(() => {
      if (null != e.guild) {
        if (s) {
          if (a.h2.getSetting().includes(e.guild.id)) {
            let t = new Set((0, u.YK)());
            t.delete(e.guild.id), a.h2.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let n = new Set((0, u.YK)());
          n.add(null == (t = e.guild) ? true : t.id), a.h2.updateSetting(Array.from(n))
        }
        if (d) {
          if (a.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, u._o)());
            t.delete(e.guild.id), a.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, u._o)());
          t.add(e.guild.id), a.SE.updateSetting(Array.from(t))
        }
        null != n && n.length > 0 && (0, l.iq)(e.guild.id, {
          nick: n
        })
      }
      this.close()
    }, e => {
      r.Z.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, c.O)(e.code)
      })
    })
  },
  close() {
    let e = (0, Chunk978986.e7)(),
      t = (0, Chunk978986._J)();
    if ((0, Chunk978986.NQ)()) {
      let n = (0, Chunk978986.y)(),
        r = (0, Chunk978986.h6)(),
        i = (0, Chunk978986.U1)(),
        l = (0, Chunk978986.aP)();
      Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: module,
        guild_id: exports,
        nickname_present: null != require && require.length > 0,
        dms_allowed: Chunk570140,
        activity_status_shown: Chunk447543,
        changed_from_default: Chunk18438
      })
    }(0, Chunk978986.oE)(), Chunk570140.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}