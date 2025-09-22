/** Chunk was on 62987 **/
/** chunk id: 273387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk975984 = require("./975984.js"),
  Chunk75666 = require("./75666.js");

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
  h = {},
  f = {},
  m = {},
  g = {},
  b = {};
class y extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return p
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = f[e]) ? t : o.AR.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null == (n = m[e]) ? true : n[t] : h[e]
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
    return null != (t = g[e]) ? t : d
  }
  getAdminGuildEntryIds(e) {
    return b[e]
  }
}
s(y, "displayName", "GuildDirectoryStore");
let _ = new y(Chunk570140.Z, {
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
    }), h[t] = r, m[t] = i
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
    if (null == p || (null == (t = h[s]) ? true : t[p.guildId]) != null) return;
    h[s] = u(c({}, h[s]), {
      [p.guildId]: p
    });
    let f = null != (r = p.primaryCategoryId) ? r : o.AR.UNCATEGORIZED;
    if (m[s] = u(c({}, m[s]), {
        [f]: u(c({}, null == (n = m[s]) ? true : n[f]), {
          [p.guildId]: p
        })
      }), null != g[s]) {
      let e = null != (l = null == (i = g[s]) ? true : i[f]) ? l : 0;
      g[s] = u(c({}, g[s]), {
        [f]: e + 1
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
    var t, n;
    let {
      channelId: r,
      guildId: i
    } = e, l = null == (t = h[r]) ? true : t[i];
    if (null == l) return;
    let a = l.primaryCategoryId,
      o = Object.assign({}, h[r]);
    delete o[i], null == (n = b[r]) || n.delete(i), b[r] = new Set(b[r]), h[r] = o;
    let s = Object.assign({}, m[r][a]);
    if (delete s[i], m[r] = u(c({}, m[r]), {
        [a]: s
      }), null != g[r]) {
      let e = g[r][a] - 1;
      g[r] = u(c({}, g[r]), {
        [a]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, i, l, s, d, p, f;
    let {
      channelId: b,
      entry: y
    } = e, _ = (0, a.MQ)(y), C = null == (t = h[b]) ? true : t[_.guildId];
    h[b] = u(c({}, h[b]), {
      [_.guildId]: c({}, C, _)
    });
    let v = null != (i = null == C ? true : C.primaryCategoryId) ? i : o.AR.UNCATEGORIZED,
      x = null != (l = _.primaryCategoryId) ? l : o.AR.UNCATEGORIZED,
      j = Object.assign({}, null == (n = m[b]) ? true : n[v]);
    null != C && v !== x && delete j[_.guildId], m[b] = u(c({}, m[b]), {
      [v]: j,
      [x]: u(c({}, null == (r = m[b]) ? true : r[x]), {
        [_.guildId]: c({}, C, _)
      })
    }), x !== v && null != g[b] && (g[b] = u(c({}, g[b]), {
      [v]: (null == (s = g[b]) ? true : s[v]) > 0 ? (null == (d = g[b]) ? true : d[v]) - 1 : 0,
      [x]: (null != (f = null == (p = g[b]) ? true : p[x]) ? f : 0) + 1
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
    g[t] = n
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