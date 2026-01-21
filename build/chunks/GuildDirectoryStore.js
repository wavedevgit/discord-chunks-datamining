/** Chunk was on 82124 **/
/** chunk id: 273387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk975984 = require("./975984.js"),
  Chunk486527 = require("./486527.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  f = {},
  h = {},
  g = {},
  m = {},
  b = {};
class y extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return p
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = h[e]) ? t : o.AR.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null == (n = g[e]) ? true : n[t] : f[e]
  }
  getDirectoryEntry(e, t) {
    var n;
    return null == (n = f[e]) ? true : n[t]
  }
  getDirectoryAllEntriesCount(e) {
    var t;
    return Object.keys(null != (t = f[e]) ? t : {}).length
  }
  getDirectoryCategoryCounts(e) {
    var t;
    return null != (t = m[e]) ? t : d
  }
  getAdminGuildEntryIds(e) {
    return b[e]
  }
}
s(y, "displayName", "GuildDirectoryStore");
let v = new y(Chunk570140.Z, {
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
      i = {};
    n.forEach(e => {
      let t = (0, a.MQ)(e);
      r[t.guildId] = t, null != i[t.primaryCategoryId] ? i[t.primaryCategoryId][t.guildId] = t : i[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), f[t] = r, g[t] = i
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    p = false
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, r, i, l;
    let {
      channelId: s,
      entry: d
    } = e, p = (0, a.MQ)(d);
    if (null == p || (null == (t = f[s]) ? true : t[p.guildId]) != null) return;
    f[s] = u(c({}, f[s]), {
      [p.guildId]: p
    });
    let h = null != (r = p.primaryCategoryId) ? r : o.AR.UNCATEGORIZED;
    if (g[s] = u(c({}, g[s]), {
        [h]: u(c({}, null == (n = g[s]) ? true : n[h]), {
          [p.guildId]: p
        })
      }), null != m[s]) {
      let e = null != (l = null == (i = m[s]) ? true : i[h]) ? l : 0;
      m[s] = u(c({}, m[s]), {
        [h]: e + 1
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: r,
      guildId: i
    } = e, l = null == (t = f[r]) ? true : t[i];
    if (null == l) return;
    let a = l.primaryCategoryId,
      o = Object.assign({}, f[r]);
    delete o[i], null == (n = b[r]) || n.delete(i), b[r] = new Set(b[r]), f[r] = o;
    let s = Object.assign({}, g[r][a]);
    if (delete s[i], g[r] = u(c({}, g[r]), {
        [a]: s
      }), null != m[r]) {
      let e = m[r][a] - 1;
      m[r] = u(c({}, m[r]), {
        [a]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, i, l, s, d, p, h;
    let {
      channelId: b,
      entry: y
    } = e, v = (0, a.MQ)(y), O = null == (t = f[b]) ? true : t[v.guildId];
    f[b] = u(c({}, f[b]), {
      [v.guildId]: c({}, O, v)
    });
    let j = null != (i = null == O ? true : O.primaryCategoryId) ? i : o.AR.UNCATEGORIZED,
      x = null != (l = v.primaryCategoryId) ? l : o.AR.UNCATEGORIZED,
      C = Object.assign({}, null == (n = g[b]) ? true : n[j]);
    null != O && j !== x && delete C[v.guildId], g[b] = u(c({}, g[b]), {
      [j]: C,
      [x]: u(c({}, null == (r = g[b]) ? true : r[x]), {
        [v.guildId]: c({}, O, v)
      })
    }), x !== j && null != m[b] && (m[b] = u(c({}, m[b]), {
      [j]: (null == (s = m[b]) ? true : s[j]) > 0 ? (null == (d = m[b]) ? true : d[j]) - 1 : 0,
      [x]: (null != (h = null == (p = m[b]) ? true : p[x]) ? h : 0) + 1
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
    m[t] = n
  },
  GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e, r = new Set;
    n.forEach(e => {
      let t = (0, a.MQ)(e);
      r.add(t.guildId)
    }), b[t] = r
  }
})