/** Chunk was on 1272 **/
/** chunk id: 762692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var Chunk544891 = require("./544891.js"),
  Chunk343817 = require("./343817.js"),
  Chunk570140 = require("./570140.js"),
  Chunk900849 = require("./900849.js"),
  Chunk726115 = require("./726115.js"),
  Chunk128449 = require("./128449.js"),
  Chunk981631 = require("./981631.js");
let u = {
  fetchSearchResults: async function e(e, t) {
    let {
      categoryId: n,
      languageCode: u,
      offset: d,
      limit: p,
      withCounts: f
    } = t;
    l.Z.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
      query: e,
      categoryId: n,
      languageCode: u
    });
    try {
      let t = await r.tn.get({
          url: c.ANM.GUILD_DISCOVERY_SEARCH,
          query: {
            query: e,
            category_id: n === o.Hk ? null : n,
            offset: d,
            limit: p,
            language_code: u,
            with_counts: f
          },
          oldFormErrors: true,
          rejectWithError: false
        }),
        i = t.body.guilds.map(s.Iv),
        a = t.body.total_count;
      if (f) {
        var m;
        let n = [];
        null == (m = t.body.categories) || m.slice(0, 8).forEach(e => {
          let {
            id: t,
            count: r
          } = e;
          n.push([Number(t), r])
        }), l.Z.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
          query: e,
          categoryCounts: n
        })
      }
      l.Z.dispatch({
        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
        query: e,
        categoryId: n,
        languageCode: u,
        guilds: i,
        total: a
      })
    } catch (r) {
      let t = new i.Hx(r);
      a.m9({
        categoryId: n,
        error: t,
        willRequestRetry: false,
        isRequestRetry: false
      }), f && l.Z.dispatch({
        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
        query: e,
        categoryCounts: []
      }), l.Z.dispatch({
        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
        query: e,
        categoryId: n,
        languageCode: u,
        error: r
      })
    }
  },
  clearSearchResults: function(e) {
    var t;
    l.Z.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR",
      ignoreQueries: null != (t = null == e ? true : e.ignoreQueries) ? t : []
    })
  },
  resetSearchLayout: function() {
    Chunk570140.Z.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET"
    })
  }
}