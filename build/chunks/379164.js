/** Chunk was on 60231 **/
/** chunk id: 379164, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
let f = {
  acceptInvite(e) {
    let t = a.ZP.getInviteContext("Desktop Invite Modal", e),
      i = (0, l.y)(),
      _ = (0, l.h6)(),
      d = (0, l.U1)();
    a.ZP.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || a.ZP.transitionToInvite(e)
      }
    }).then(() => {
      if (null != e.guild) {
        if (_) {
          if (o.h2.getSetting().includes(e.guild.id)) {
            let t = new Set((0, c.YK)());
            t.delete(e.guild.id), o.h2.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let i = new Set((0, c.YK)());
          i.add(null == (t = e.guild) ? true : t.id), o.h2.updateSetting(Array.from(i))
        }
        if (d) {
          if (o.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, c._o)());
            t.delete(e.guild.id), o.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, c._o)());
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
    let e = (0, Chunk978986.e7)(),
      t = (0, Chunk978986._J)();
    if ((0, Chunk978986.NQ)()) {
      let i = (0, Chunk978986.y)(),
        n = (0, Chunk978986.h6)(),
        a = (0, Chunk978986.U1)(),
        r = (0, Chunk978986.aP)();
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