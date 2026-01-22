/** Chunk was on web.js **/
/** chunk id: 670412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk488428 = require("./488428.js"),
  Chunk269438 = require("./269438.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk449054 = require("./449054.js"),
  Chunk351022 = require("./351022.js"),
  Chunk965660 = require("./965660.js"),
  Chunk324580 = require("./324580.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk439372.A {
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }), p(this, "queue", new Set), p(this, "isFetchEnabled", false), p(this, "handleConnectionOpen", () => {
      this.isFetchEnabled = true, this.queue.forEach(e => {
        e === d.Iq ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({
          categoryId: e
        })
      })
    }), p(this, "fetchFeaturedGuilds", async e => {
      var t;
      if (!this.isFetchEnabled) return void this.queue.add(d.Iq);
      let n = null != (t = null == e ? true : e.forceRefresh) && t,
        o = c.A.getLastFetchTimestamp({
          categoryId: d.Iq
        });
      if (n || (0, u.M9)(o)) {
        s.h.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
          categoryId: d.Iq,
          reset: true
        });
        try {
          let e = await a.Bo.get({
              url: f.Rsh.GUILD_DISCOVERY,
              query: r.stringify({
                offset: 0,
                limit: i.w.FEATURED_DEFAULT_LIMIT
              }),
              oldFormErrors: true,
              rejectWithError: false
            }),
            t = e.body.total,
            n = e.body.guilds.map(u.MC);
          s.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            categoryId: d.Iq,
            guilds: n,
            total: t
          })
        } catch (e) {
          s.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
            categoryId: d.Iq,
            error: e
          }), l.uf({
            categoryId: d.Iq
          })
        }
      }
    }), p(this, "fetchCategoryFeaturedGuilds", async e => {
      let {
        categoryId: t,
        forceRefresh: n = false
      } = e;
      if (!this.isFetchEnabled) return void this.queue.add(t);
      let i = c.A.getLastFetchTimestamp({
        categoryId: t
      });
      if (n || (0, u.M9)(i)) {
        s.h.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
          categoryId: t,
          reset: true
        });
        try {
          let e = await a.Bo.get({
              url: f.Rsh.GUILD_DISCOVERY,
              query: r.stringify({
                categories: [t]
              }),
              oldFormErrors: true,
              rejectWithError: false
            }),
            n = e.body.total,
            i = e.body.guilds.map(u.MC);
          s.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
            categoryId: t,
            guilds: i,
            total: n
          })
        } catch (e) {
          s.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
            categoryId: t,
            error: e
          }), l.uf({
            categoryId: t
          })
        }
      }
    })
  }
}
let h = new _