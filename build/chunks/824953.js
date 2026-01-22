/** Chunk was on web.js **/
/** chunk id: 824953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let l = ["Spidey Bot", "Captain Hook"],
  c = {
    fetchForGuild(e) {
      s.h.dispatch({
        type: "WEBHOOKS_FETCHING",
        guildId: e
      }), a.Bo.get({
        url: o.Rsh.GUILD_WEBHOOKS(e),
        oldFormErrors: true,
        rejectWithError: false
      }).then(t => {
        let {
          body: n
        } = t;
        return s.h.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          webhooks: n
        })
      }).catch(t => {
        let {
          body: n
        } = t;
        s.h.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          error: n.message
        })
      })
    },
    fetchForChannel(e, t) {
      s.h.dispatch({
        type: "WEBHOOKS_FETCHING",
        guildId: e,
        channelId: t
      }), a.Bo.get({
        url: o.Rsh.CHANNEL_WEBHOOKS(t),
        oldFormErrors: true,
        rejectWithError: true
      }).then(n => {
        let {
          body: r
        } = n;
        return s.h.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          channelId: t,
          webhooks: r
        })
      }).catch(t => {
        let {
          body: n
        } = t;
        s.h.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          error: n.message
        })
      })
    },
    create: (e, t, n) => (null == n && (n = l[i().random(0, l.length - 1)]), a.Bo.post({
      url: o.Rsh.CHANNEL_WEBHOOKS(t),
      body: {
        name: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let {
        body: n
      } = t;
      return s.h.dispatch({
        type: "WEBHOOK_CREATE",
        guildId: e,
        webhook: n
      }), n
    })),
    delete: (e, t) => a.Bo.del({
      url: o.Rsh.WEBHOOK(t),
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      s.h.dispatch({
        type: "WEBHOOK_DELETE",
        guildId: e,
        webhookId: t
      })
    }),
    update: (e, t, n) => a.Bo.patch({
      url: o.Rsh.WEBHOOK(t),
      body: n,
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let {
        body: n
      } = t;
      return s.h.dispatch({
        type: "WEBHOOK_UPDATE",
        guildId: e,
        webhook: n
      }), n
    })
  }