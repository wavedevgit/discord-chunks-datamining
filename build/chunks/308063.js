/** Chunk was on web.js **/
/** chunk id: 308063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let l = ["Spidey Bot", "Captain Hook"],
  c = {
    fetchForGuild(e) {
      o.Z.dispatch({
        type: "WEBHOOKS_FETCHING",
        guildId: e
      }), a.tn.get({
        url: s.ANM.GUILD_WEBHOOKS(e),
        oldFormErrors: true,
        rejectWithError: false
      }).then(t => {
        let {
          body: n
        } = t;
        return o.Z.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          webhooks: n
        })
      }).catch(t => {
        let {
          body: n
        } = t;
        o.Z.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          error: n.message
        })
      })
    },
    fetchForChannel(e, t) {
      o.Z.dispatch({
        type: "WEBHOOKS_FETCHING",
        guildId: e,
        channelId: t
      }), a.tn.get({
        url: s.ANM.CHANNEL_WEBHOOKS(t),
        oldFormErrors: true,
        rejectWithError: true
      }).then(n => {
        let {
          body: r
        } = n;
        return o.Z.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          channelId: t,
          webhooks: r
        })
      }).catch(t => {
        let {
          body: n
        } = t;
        o.Z.dispatch({
          type: "WEBHOOKS_UPDATE",
          guildId: e,
          error: n.message
        })
      })
    },
    create: (e, t, n) => (null == n && (n = l[i().random(0, l.length - 1)]), a.tn.post({
      url: s.ANM.CHANNEL_WEBHOOKS(t),
      body: {
        name: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let {
        body: n
      } = t;
      return o.Z.dispatch({
        type: "WEBHOOK_CREATE",
        guildId: e,
        webhook: n
      }), n
    })),
    delete: (e, t) => a.tn.del({
      url: s.ANM.WEBHOOK(t),
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      o.Z.dispatch({
        type: "WEBHOOK_DELETE",
        guildId: e,
        webhookId: t
      })
    }),
    update: (e, t, n) => a.tn.patch({
      url: s.ANM.WEBHOOK(t),
      body: n,
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let {
        body: n
      } = t;
      return o.Z.dispatch({
        type: "WEBHOOK_UPDATE",
        guildId: e,
        webhook: n
      }), n
    })
  }