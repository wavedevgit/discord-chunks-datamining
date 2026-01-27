/** Chunk was on web.js **/
/** chunk id: 387755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk325909 = require("./325909.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk157559 = require("./157559.js"),
  Chunk49229 = require("./49229.js"),
  Chunk956793 = require("./956793.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = {
  call(e, t, n, i, a) {
    let o = n => {
      f.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e)
    };
    if (null != i) {
      if (s.A.isBlocked(i)) return;
      let t = l.default.getUser(i);
      r.Bo.get({
        url: p.Rsh.CALL(e),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        o(n && e.body.ringable)
      }, () => {
        c.default.track(p.HAw.OPEN_POPOUT, {
          type: "Not Friend",
          source: "Call"
        }), u.A.show({
          title: _.intl.string(_.t.My50nf),
          body: _.intl.format(_.t.IdKo2z, {
            username: null != t ? t.username : ""
          }),
          confirmText: _.intl.string(_.t["PMsq/b"]),
          cancelText: _.intl.string(_.t.BddRzS),
          onConfirm() {
            d.A.addRelationship({
              userId: i,
              context: {
                location: "Call"
              }
            })
          }
        })
      })
    } else o(n)
  },
  ring(e, t, n) {
    let s = o.A.getChannel(e);
    if (null == s) return;
    let l = (0, a.p)(s),
      c = p.kvI.CALLABLE.has(s.type);
    if (l) {
      r.Bo.post({
        url: p.Rsh.CALL_RING(e),
        body: {
          recipients: t,
          analytics_location: n
        },
        oldFormErrors: true,
        rejectWithError: true
      }), s.type === p.rbe.GUILD_VOICE && null != t && i.h.dispatch({
        type: "GUILD_LOCAL_RING_START",
        ringing: t,
        guildId: s.guild_id
      });
      return
    }
    c && i.h.dispatch({
      type: "CALL_ENQUEUE_RING",
      channelId: e,
      recipients: t
    })
  },
  stopRinging: (e, t) => r.Bo.post({
    url: p.Rsh.CALL_STOP_RINGING(e),
    body: {
      recipients: t
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}