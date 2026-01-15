/** Chunk was on web.js **/
/** chunk id: 275131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk664751 = require("./664751.js"),
  Chunk975641 = require("./975641.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk900849 = require("./900849.js"),
  Chunk356164 = require("./356164.js"),
  Chunk726115 = require("./726115.js"),
  Chunk128449 = require("./128449.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk147913.Z {
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }), p(this, "queue", new Set), p(this, "isFetchEnabled", false), p(this, "handleConnectionOpen", () => {
      this.isFetchEnabled = true, this.queue.forEach(e => {
        e === d.Hk ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({
          categoryId: e
        })
      })
    }), p(this, "fetchFeaturedGuilds", async e => {
      var t;
      if (!this.isFetchEnabled) return void this.queue.add(d.Hk);
      let n = null != (t = null == e ? true : e.forceRefresh) && t,
        s = c.Z.getLastFetchTimestamp({
          categoryId: d.Hk
        });
      if (n || (0, u.Ew)(s)) {
        o.Z.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
          categoryId: d.Hk,
          reset: true
        });
        try {
          let e = await a.tn.get({
              url: f.ANM.GUILD_DISCOVERY,
              query: r.stringify({
                offset: 0,
                limit: i.g.FEATURED_DEFAULT_LIMIT
              }),
              oldFormErrors: true,
              rejectWithError: false
            }),
            t = e.body.total,
            n = e.body.guilds.map(u.Uv);
          o.Z.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            categoryId: d.Hk,
            guilds: n,
            total: t
          })
        } catch (e) {
          o.Z.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
            categoryId: d.Hk,
            error: e
          }), l.rC({
            categoryId: d.Hk
          })
        }
      }
    }), p(this, "fetchCategoryFeaturedGuilds", async e => {
      let {
        categoryId: t,
        forceRefresh: n = false
      } = e;
      if (!this.isFetchEnabled) return void this.queue.add(t);
      let i = c.Z.getLastFetchTimestamp({
        categoryId: t
      });
      if (n || (0, u.Ew)(i)) {
        o.Z.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
          categoryId: t,
          reset: true
        });
        try {
          let e = await a.tn.get({
              url: f.ANM.GUILD_DISCOVERY,
              query: r.stringify({
                categories: [t]
              }),
              oldFormErrors: true,
              rejectWithError: false
            }),
            n = e.body.total,
            i = e.body.guilds.map(u.Uv);
          o.Z.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            categoryId: t,
            guilds: i,
            total: n
          })
        } catch (e) {
          o.Z.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
            categoryId: t,
            error: e
          }), l.rC({
            categoryId: t
          })
        }
      }
    })
  }
}
let h = new _