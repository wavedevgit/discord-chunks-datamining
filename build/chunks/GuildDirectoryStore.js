/** Chunk was on 30025 **/
/** chunk id: 273387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk975984 = require("./975984.js"),
  Chunk75666 = require("./75666.js");

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

function d(e, t) {
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
let u = Object.freeze({}),
  p = false,
  h = {},
  f = {},
  g = {},
  m = {},
  b = {};
class _ extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return p
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = f[e]) ? t : s.AR.ALL
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
    return null != (t = m[e]) ? t : u
  }
  getAdminGuildEntryIds(e) {
    return b[e]
  }
}
o(_, "displayName", "GuildDirectoryStore");
let y = new _(Chunk570140.Z, {
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
    }), h[t] = r, g[t] = i
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    p = false
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, r, i, l;
    let {
      channelId: o,
      entry: u
    } = e, p = (0, a.MQ)(u);
    if (null == p || (null == (t = h[o]) ? true : t[p.guildId]) != null) return;
    h[o] = d(c({}, h[o]), {
      [p.guildId]: p
    });
    let f = null != (r = p.primaryCategoryId) ? r : s.AR.UNCATEGORIZED;
    if (g[o] = d(c({}, g[o]), {
        [f]: d(c({}, null == (n = g[o]) ? true : n[f]), {
          [p.guildId]: p
        })
      }), null != m[o]) {
      let e = null != (l = null == (i = m[o]) ? true : i[f]) ? l : 0;
      m[o] = d(c({}, m[o]), {
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
      s = Object.assign({}, h[r]);
    delete s[i], null == (n = b[r]) || n.delete(i), b[r] = new Set(b[r]), h[r] = s;
    let o = Object.assign({}, g[r][a]);
    if (delete o[i], g[r] = d(c({}, g[r]), {
        [a]: o
      }), null != m[r]) {
      let e = m[r][a] - 1;
      m[r] = d(c({}, m[r]), {
        [a]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, i, l, o, u, p, f;
    let {
      channelId: b,
      entry: _
    } = e, y = (0, a.MQ)(_), x = null == (t = h[b]) ? true : t[y.guildId];
    h[b] = d(c({}, h[b]), {
      [y.guildId]: c({}, x, y)
    });
    let O = null != (i = null == x ? true : x.primaryCategoryId) ? i : s.AR.UNCATEGORIZED,
      j = null != (l = y.primaryCategoryId) ? l : s.AR.UNCATEGORIZED,
      v = Object.assign({}, null == (n = g[b]) ? true : n[O]);
    null != x && O !== j && delete v[y.guildId], g[b] = d(c({}, g[b]), {
      [O]: v,
      [j]: d(c({}, null == (r = g[b]) ? true : r[j]), {
        [y.guildId]: c({}, x, y)
      })
    }), j !== O && null != m[b] && (m[b] = d(c({}, m[b]), {
      [O]: (null == (o = m[b]) ? true : o[O]) > 0 ? (null == (u = m[b]) ? true : u[O]) - 1 : 0,
      [j]: (null != (f = null == (p = m[b]) ? true : p[j]) ? f : 0) + 1
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
      let t = (0, a.MQ)(e);
      r.add(t.guildId)
    }), b[t] = r
  }
})