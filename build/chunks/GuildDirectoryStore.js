/** Chunk was on 97887 **/
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
  p = false,
  h = {},
  f = {},
  g = {},
  m = {},
  b = {};
class A extends(r = Chunk311907.Ay.Store) {
  isFetching() {
    return p
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = f[e]) ? t : a.mU.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null == (n = g[e]) ? true : n[t] : h[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null == (n = h[e]) ? true : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null != (t = h[e]) ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null != (t = m[e]) ? t : d
  }
  getAdminGuildEntryIds(e) {
    return b[e]
  }
}
o(A, "displayName", "GuildDirectoryStore");
let y = new A(Chunk73153.h, {
  GUILD_DIRECTORY_FETCH_START: function() {
    p = true
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    p = false;
    let r = {},
      l = {};
    n.forEach(e => {
      let t = (0, s.mR)(e);
      r[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), h[t] = r, g[t] = l
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    p = false
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, r, l, i;
    let {
      channelId: o,
      entry: d
    } = e, p = (0, s.mR)(d);
    if (null == p || (null == (n = h[o]) ? true : n[p.guildId]) != null) return;
    h[o] = u(c({}, h[o]), {
      [p.guildId]: p
    });
    let f = null != (t = p.primaryCategoryId) ? t : a.mU.UNCATEGORIZED;
    if (g[o] = u(c({}, g[o]), {
        [f]: u(c({}, null == (r = g[o]) ? true : r[f]), {
          [p.guildId]: p
        })
      }), null != m[o]) {
      let e = null != (l = null == (i = m[o]) ? true : i[f]) ? l : 0;
      m[o] = u(c({}, m[o]), {
        [f]: e + 1
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: r,
      guildId: l
    } = e, i = null == (t = h[r]) ? true : t[l];
    if (null == i) return;
    let s = i.primaryCategoryId,
      a = Object.assign({}, h[r]);
    delete a[l], null == (n = b[r]) || n.delete(l), b[r] = new Set(b[r]), h[r] = a;
    let o = Object.assign({}, g[r][s]);
    if (delete o[l], g[r] = u(c({}, g[r]), {
        [s]: o
      }), null != m[r]) {
      let e = m[r][s] - 1;
      m[r] = u(c({}, m[r]), {
        [s]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, l, i, o, d, p, f;
    let {
      channelId: b,
      entry: A
    } = e, y = (0, s.mR)(A), _ = null == (r = h[b]) ? true : r[y.guildId];
    h[b] = u(c({}, h[b]), {
      [y.guildId]: c({}, _, y)
    });
    let O = null != (t = null == _ ? true : _.primaryCategoryId) ? t : a.mU.UNCATEGORIZED,
      j = null != (n = y.primaryCategoryId) ? n : a.mU.UNCATEGORIZED,
      v = Object.assign({}, null == (l = g[b]) ? true : l[O]);
    null != _ && O !== j && delete v[y.guildId], g[b] = u(c({}, g[b]), {
      [O]: v,
      [j]: u(c({}, null == (i = g[b]) ? true : i[j]), {
        [y.guildId]: c({}, _, y)
      })
    }), j !== O && null != m[b] && (m[b] = u(c({}, m[b]), {
      [O]: (null == (d = m[b]) ? true : d[O]) > 0 ? (null == (p = m[b]) ? true : p[O]) - 1 : 0,
      [j]: (null != (o = null == (f = m[b]) ? true : f[j]) ? o : 0) + 1
    }))
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    f[t] = n
  },
  GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      counts: n
    } = e;
    m[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, r = new Set;
    n.forEach(e => {
      let t = (0, s.mR)(e);
      r.add(t.guildId)
    }), b[t] = r
  }
})