/** Chunk was on 30025 **/
/** chunk id: 866112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk975984 = require("./975984.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = [],
  u = {},
  p = {};
class h extends(r = Chunk442837.ZP.Store) {
  getSearchState(e) {
    var t;
    return null != (t = u[e]) ? t : {
      mostRecentQuery: "",
      fetching: false
    }
  }
  getSearchResults(e, t) {
    var n, r, i;
    return null != (i = null == (r = p[e]) || null == (n = r[t]) ? true : n.results) ? i : d
  }
  shouldFetch(e, t) {
    var n, r;
    let i = null == (r = p[e]) || null == (n = r[t]) ? true : n.lastSearchedAt;
    return null == i || Date.now() - i > 12e4
  }
}
s(h, "displayName", "GuildDirectorySearchStore");
let f = new h(Chunk570140.Z, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    u[t] = {
      fetching: true,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_SEARCH_SUCCESS: function(e) {
    let {
      channelId: t,
      query: n,
      results: r
    } = e;
    u[t] = c(o({}, u[t]), {
      fetching: false
    });
    let i = [];
    r.forEach(e => {
      let t = (0, a.MQ)(e);
      i.push(t)
    }), p[t] = c(o({}, p[t]), {
      [n]: {
        results: (0, a.Th)(i),
        lastSearchedAt: Date.now()
      }
    })
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    u[t] = c(o({}, u[t]), {
      fetching: false
    })
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    u[t] = {
      fetching: false,
      mostRecentQuery: ""
    }
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    u[t] = {
      fetching: false,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t;
    let {
      channelId: n,
      guildId: r
    } = e, i = null == (t = u[n]) ? true : t.mostRecentQuery;
    if (null == i) return;
    let l = p[n][i];
    if (null == l) return;
    let a = l.results.filter(e => e.guildId !== r);
    p[n] = c(o({}, p[n]), {
      [u[n].mostRecentQuery]: c(o({}, l), {
        results: a
      })
    })
  }
})