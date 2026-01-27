/** Chunk was on 52367 **/
/** chunk id: 972387, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => s
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
let s = {
  acceptInvite(e) {
    let t = n.Ay.getInviteContext("Desktop Invite Modal", e),
      i = (0, l.tJ)(),
      d = (0, l.Z1)(),
      p = (0, l.N9)();
    n.Ay.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || n.Ay.transitionToInvite(e)
      }
    }).then(() => {
      if (null != e.guild) {
        if (d) {
          if (r.$s.getSetting().includes(e.guild.id)) {
            let t = new Set((0, f.Tb)());
            t.delete(e.guild.id), r.$s.updateSetting(Array.from(t))
          }
        } else {
          var t;
          let i = new Set((0, f.Tb)());
          i.add(null == (t = e.guild) ? true : t.id), r.$s.updateSetting(Array.from(i))
        }
        if (p) {
          if (r.JG.getSetting().includes(e.guild.id)) {
            let t = new Set((0, f.Kk)());
            t.delete(e.guild.id), r.JG.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, f.Kk)());
          t.add(e.guild.id), r.JG.updateSetting(Array.from(t))
        }
        null != i && i.length > 0 && (0, _.GL)(e.guild.id, {
          nick: i
        })
      }
      this.close()
    }, e => {
      a.h.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, o.s)(e.code)
      })
    })
  },
  close() {
    let e = (0, l.p9)(),
      t = (0, l.xD)();
    if ((0, l.jJ)()) {
      let i = (0, l.tJ)(),
        a = (0, l.Z1)(),
        n = (0, l.N9)(),
        _ = (0, l.qO)();
      d.default.track(p.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: e,
        guild_id: t,
        nickname_present: null != i && i.length > 0,
        dms_allowed: a,
        activity_status_shown: n,
        changed_from_default: _
      })
    }(0, l.xP)(), a.h.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}