/** Chunk was on web.js **/
/** chunk id: 26151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk985588 = require("./985588.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk668781 = require("./668781.js"),
  Chunk194359 = require("./194359.js"),
  Chunk287734 = require("./287734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = {
  call(e, t, n, i, o) {
    let a = n => {
      f.default.selectVoiceChannel(e, t), n && this.ring(e), null == o || o(e)
    };
    if (null != i) {
      if (s.Z.isBlocked(i)) return;
      let t = l.default.getUser(i);
      r.tn.get({
        url: p.ANM.CALL(e),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        a(n && e.body.ringable)
      }, () => {
        c.default.track(p.rMx.OPEN_POPOUT, {
          type: "Not Friend",
          source: "Call"
        }), u.Z.show({
          title: _.intl.string(_.t.My50nf),
          body: _.intl.format(_.t.IdKo2z, {
            username: null != t ? t.username : ""
          }),
          confirmText: _.intl.string(_.t["PMsq/b"]),
          cancelText: _.intl.string(_.t.BddRzS),
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
  ring(e, t, n) {
    let s = a.Z.getChannel(e);
    if (null == s) return;
    let l = (0, o.V)(s),
      c = p.TPd.CALLABLE.has(s.type);
    if (l) {
      r.tn.post({
        url: p.ANM.CALL_RING(e),
        body: {
          recipients: t,
          analytics_location: n
        },
        oldFormErrors: true,
        rejectWithError: true
      }), s.type === p.d4z.GUILD_VOICE && null != t && i.Z.dispatch({
        type: "GUILD_LOCAL_RING_START",
        ringing: t,
        guildId: s.guild_id
      });
      return
    }
    c && i.Z.dispatch({
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
    oldFormErrors: true,
    rejectWithError: true
  })
}