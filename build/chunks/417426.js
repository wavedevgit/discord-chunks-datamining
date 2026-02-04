/** Chunk was on 21738 **/
/** chunk id: 417426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js");
var Chunk562465 = require("./562465.js"),
  Chunk319400 = require("./319400.js"),
  Chunk73153 = require("./73153.js"),
  Chunk449054 = require("./449054.js"),
  Chunk965660 = require("./965660.js"),
  Chunk324580 = require("./324580.js"),
  Chunk652215 = require("./652215.js");
let u = {
  fetchSearchResults: async function e(e, t) {
    let {
      categoryId: n,
      languageCode: u,
      offset: d,
      limit: p,
      withCounts: h
    } = t;
    l.h.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
      query: e,
      categoryId: n,
      languageCode: u
    });
    try {
      let t = await r.Bo.get({
          url: c.Rsh.GUILD_DISCOVERY_SEARCH,
          query: {
            query: e,
            category_id: n === o.Iq ? null : n,
            offset: d,
            limit: p,
            language_code: u,
            with_counts: h
          },
          oldFormErrors: true,
          rejectWithError: false
        }),
        i = t.body.guilds.map(s.uk),
        a = t.body.total_count;
      if (h) {
        var f;
        let n = [];
        null == (f = t.body.categories) || f.slice(0, 8).forEach(e => {
          let {
            id: t,
            count: r
          } = e;
          n.push([Number(t), r])
        }), l.h.dispatch({
          type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
          query: e,
          categoryCounts: n
        })
      }
      l.h.dispatch({
        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
        query: e,
        categoryId: n,
        languageCode: u,
        guilds: i,
        total: a
      })
    } catch (r) {
      let t = new i.LG(r);
      a.jb({
        categoryId: n,
        error: t,
        willRequestRetry: false,
        isRequestRetry: false
      }), h && l.h.dispatch({
        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
        query: e,
        categoryCounts: []
      }), l.h.dispatch({
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
    l.h.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR",
      ignoreQueries: null != (t = null == e ? true : e.ignoreQueries) ? t : []
    })
  },
  resetSearchLayout: function() {
    l.h.dispatch({
      type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET"
    })
  }
}