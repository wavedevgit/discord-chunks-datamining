/** Chunk was on 97492 **/
/** chunk id: 519480, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk370876 = require("./370876.js"),
  Chunk946116 = require("./946116.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
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
let d = Object.freeze({}),
  f = false,
  p = {},
  h = {},
  b = {},
  g = {},
  m = {};
class A extends(r = Chunk311907.Ay.Store) {
  isFetching() {
    return f
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = h[e]) ? t : s.mU.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null == (n = b[e]) ? true : n[t] : p[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null == (n = p[e]) ? true : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null != (t = p[e]) ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null != (t = g[e]) ? t : d
  }
  getAdminGuildEntryIds(e) {
    return m[e]
  }
}
o(A, "displayName", "GuildDirectoryStore");
let y = new A(Chunk73153.h, {
  GUILD_DIRECTORY_FETCH_START: function() {
    f = true
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    f = false;
    let r = {},
      l = {};
    n.forEach(e => {
      let t = (0, a.mR)(e);
      r[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), p[t] = r, b[t] = l
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    f = false
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, r, l, i;
    let {
      channelId: o,
      entry: d
    } = e, f = (0, a.mR)(d);
    if (null == f || (null == (n = p[o]) ? true : n[f.guildId]) != null) return;
    p[o] = u(c({}, p[o]), {
      [f.guildId]: f
    });
    let h = null != (t = f.primaryCategoryId) ? t : s.mU.UNCATEGORIZED;
    if (b[o] = u(c({}, b[o]), {
        [h]: u(c({}, null == (r = b[o]) ? true : r[h]), {
          [f.guildId]: f
        })
      }), null != g[o]) {
      let e = null != (l = null == (i = g[o]) ? true : i[h]) ? l : 0;
      g[o] = u(c({}, g[o]), {
        [h]: e + 1
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: r,
      guildId: l
    } = e, i = null == (t = p[r]) ? true : t[l];
    if (null == i) return;
    let a = i.primaryCategoryId,
      s = Object.assign({}, p[r]);
    delete s[l], null == (n = m[r]) || n.delete(l), m[r] = new Set(m[r]), p[r] = s;
    let o = Object.assign({}, b[r][a]);
    if (delete o[l], b[r] = u(c({}, b[r]), {
        [a]: o
      }), null != g[r]) {
      let e = g[r][a] - 1;
      g[r] = u(c({}, g[r]), {
        [a]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, l, i, o, d, f, h;
    let {
      channelId: m,
      entry: A
    } = e, y = (0, a.mR)(A), O = null == (r = p[m]) ? true : r[y.guildId];
    p[m] = u(c({}, p[m]), {
      [y.guildId]: c({}, O, y)
    });
    let j = null != (t = null == O ? true : O.primaryCategoryId) ? t : s.mU.UNCATEGORIZED,
      v = null != (n = y.primaryCategoryId) ? n : s.mU.UNCATEGORIZED,
      x = Object.assign({}, null == (l = b[m]) ? true : l[j]);
    null != O && j !== v && delete x[y.guildId], b[m] = u(c({}, b[m]), {
      [j]: x,
      [v]: u(c({}, null == (i = b[m]) ? true : i[v]), {
        [y.guildId]: c({}, O, y)
      })
    }), v !== j && null != g[m] && (g[m] = u(c({}, g[m]), {
      [j]: (null == (d = g[m]) ? true : d[j]) > 0 ? (null == (f = g[m]) ? true : f[j]) - 1 : 0,
      [v]: (null != (o = null == (h = g[m]) ? true : h[v]) ? o : 0) + 1
    }))
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    h[t] = n
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      counts: n
    } = e;
    g[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, r = new Set;
    n.forEach(e => {
      let t = (0, a.mR)(e);
      r.add(t.guildId)
    }), m[t] = r
  }
})