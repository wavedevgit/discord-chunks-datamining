/** Chunk was on web.js **/
/** chunk id: 26151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
let h = {
  call(e, t, n, i, o) {
    let a = n => {
      f.default.selectVoiceChannel(e, t), n && this.ring(e), null == o || o(e)
    };
    if (null != i) {
      if (s.Z.isBlocked(i)) return;
      let t = l.default.getUser(i);
      r.tn.get({
        url: _.ANM.CALL(e),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        a(n && e.body.ringable)
      }, () => {
        c.default.track(_.rMx.OPEN_POPOUT, {
          type: "Not Friend",
          source: "Call"
        }), u.Z.show({
          title: p.intl.string(p.t.My50nZ),
          body: p.intl.format(p.t.IdKo29, {
            username: null != t ? t.username : ""
          }),
          confirmText: p.intl.string(p.t["PMsq/f"]),
          cancelText: p.intl.string(p.t.BddRzc),
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
      c = _.TPd.CALLABLE.has(s.type);
    if (l) {
      r.tn.post({
        url: _.ANM.CALL_RING(e),
        body: {
          recipients: t,
          analytics_location: n
        },
        oldFormErrors: true,
        rejectWithError: true
      }), s.type === _.d4z.GUILD_VOICE && null != t && i.Z.dispatch({
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
    url: _.ANM.CALL_STOP_RINGING(e),
    body: {
      recipients: t
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}