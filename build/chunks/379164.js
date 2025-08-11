/** Chunk was on 34779 **/
/** chunk id: 379164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk87051 = require("./87051.js"),
  Chunk18438 = require("./18438.js"),
  Chunk44609 = require("./44609.js"),
  Chunk731971 = require("./731971.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk782605 = require("./782605.js"),
  Chunk621600 = require("./621600.js"),
  Chunk88658 = require("./88658.js"),
  Chunk981631 = require("./981631.js");
let g = {
  acceptInvite(e) {
    let t = i.ZP.getInviteContext("Desktop Invite Modal", e),
      n = (0, a.y)(),
      u = (0, a.h6)(),
      f = (0, a.U1)(),
      g = (0, a.yS)();
    i.ZP.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null == e || null == e.guild || null == e.channel || __OVERLAY__ || i.ZP.transitionToInvite(e)
      }
    }).then(() => {
      if ((0, s.gY)({
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
          n.add(null == (t = e.guild) ? true : t.id), c.h2.updateSetting(Array.from(n))
        }
        if (f) {
          if (c.SE.getSetting().includes(e.guild.id)) {
            let t = new Set((0, p._o)());
            t.delete(e.guild.id), c.SE.updateSetting(Array.from(t))
          }
        } else {
          let t = new Set((0, p._o)());
          t.add(e.guild.id), c.SE.updateSetting(Array.from(t))
        }
        null != n && n.length > 0 && (0, o.iq)(e.guild.id, {
          nick: n
        }), (0, s.m4)({
          location: "acceptInvite"
        }) && l.Z.updateGuildNotificationSettings(e.guild.id, {
          muted: g
        }, h.ZB.Muted)
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
    let e = (0, Chunk731971.e7)(),
      t = (0, Chunk731971._J)();
    if ((0, Chunk44609.gY)({
        location: "closeInvite"
      }) && (0, Chunk731971.NQ)()) {
      let n = (0, Chunk731971.y)(),
        r = (0, Chunk731971.h6)(),
        i = (0, Chunk731971.U1)(),
        l = (0, Chunk731971.yS)(),
        o = (0, Chunk731971.aP)();
      Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
        invite_code: module,
        guild_id: exports,
        nickname_present: null != require && require.length > 0,
        dms_allowed: Chunk570140,
        activity_status_shown: Chunk447543,
        muted_server: Chunk87051,
        changed_from_default: Chunk18438
      })
    }(0, Chunk731971.oE)(), Chunk570140.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}