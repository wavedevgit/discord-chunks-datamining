/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(544891),
  i = n(570140),
  o = n(985588),
  a = n(592125),
  s = n(699516),
  l = n(594174),
  c = n(626135),
  u = n(668781),
  d = n(194359),
  f = n(287734),
  p = n(981631),
  _ = n(388032);
let h = {
  call(e, t, n, i, o) {
    let a = n => {
      f.default.selectVoiceChannel(e, t), n && this.ring(e), null == o || o(e)
    };
    if (null != i) {
      if (s.Z.isBlocked(i)) return;
      let t = l.default.getUser(i);
      r.tn.get({
        url: p.ANM.CALL(e),
        oldFormErrors: !0,
        rejectWithError: !0
      }).then(e => {
        a(n && e.body.ringable)
      }, () => {
        c.default.track(p.rMx.OPEN_POPOUT, {
          type: "Not Friend",
          source: "Call"
        }), u.Z.show({
          title: _.NW.string(_.t.My50nZ),
          body: _.NW.format(_.t.IdKo29, {
            username: null != t ? t.username : ""
          }),
          confirmText: _.NW.string(_.t["PMsq/f"]),
          cancelText: _.NW.string(_.t.BddRzc),
          onConfirm() {
            d.Z.addRelationship({
              userId: i,
              context: {
                location: "Call"
              }
            })
          }
        })
      })
    } else a(n)
  },
  ring(e, t) {
    let n = a.Z.getChannel(e);
    if (null == n) return;
    let s = (0, o.V)(n),
      l = p.TPd.CALLABLE.has(n.type);
    if (s) {
      r.tn.post({
        url: p.ANM.CALL_RING(e),
        body: {
          recipients: t
        },
        oldFormErrors: !0,
        rejectWithError: !0
      }), n.type === p.d4z.GUILD_VOICE && null != t && i.Z.dispatch({
        type: "GUILD_LOCAL_RING_START",
        ringing: t,
        guildId: n.guild_id
      });
      return
    }
    l && i.Z.dispatch({
      type: "CALL_ENQUEUE_RING",
      channelId: e,
      recipients: t
    })
  },
  stopRinging: (e, t) => r.tn.post({
    url: p.ANM.CALL_STOP_RINGING(e),
    body: {
      recipients: t
    },
    oldFormErrors: !0,
    rejectWithError: !0
  })
}