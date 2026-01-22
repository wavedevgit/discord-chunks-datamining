/** Chunk was on 97492 **/
/** chunk id: 938764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk370876 = require("./370876.js");

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
let u = [],
  d = {},
  f = {};
class p extends(r = Chunk311907.Ay.Store) {
  getSearchState(e) {
    var t;
    return null != (t = d[e]) ? t : {
      mostRecentQuery: "",
      fetching: false
    }
  }
  getSearchResults(e, t) {
    var n, r, l;
    return null != (n = null == (l = f[e]) || null == (r = l[t]) ? true : r.results) ? n : u
  }
  shouldFetch(e, t) {
    var n, r;
    let l = null == (r = f[e]) || null == (n = r[t]) ? true : n.lastSearchedAt;
    return null == l || Date.now() - l > 12e4
  }
}
s(p, "displayName", "GuildDirectorySearchStore");
let h = new p(Chunk73153.h, {
  GUILD_DIRECTORY_SEARCH_START: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    d[t] = {
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
    d[t] = c(o({}, d[t]), {
      fetching: false
    });
    let l = [];
    r.forEach(e => {
      let t = (0, a.mR)(e);
      l.push(t)
    }), f[t] = c(o({}, f[t]), {
      [n]: {
        results: (0, a.DN)(l),
        lastSearchedAt: Date.now()
      }
    })
  },
  GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    d[t] = c(o({}, d[t]), {
      fetching: false
    })
  },
  GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
    let {
      channelId: t
    } = e;
    d[t] = {
      fetching: false,
      mostRecentQuery: ""
    }
  },
  GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
    let {
      channelId: t,
      query: n
    } = e;
    d[t] = {
      fetching: false,
      mostRecentQuery: n
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t;
    let {
      channelId: n,
      guildId: r
    } = e, l = null == (t = d[n]) ? true : t.mostRecentQuery;
    if (null == l) return;
    let i = f[n][l];
    if (null == i) return;
    let a = i.results.filter(e => e.guildId !== r);
    f[n] = c(o({}, f[n]), {
      [d[n].mostRecentQuery]: c(o({}, i), {
        results: a
      })
    })
  }
})