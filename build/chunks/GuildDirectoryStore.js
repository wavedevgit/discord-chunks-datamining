/** Chunk was on 1113 **/
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
  h = false,
  p = {},
  g = {},
  f = {},
  m = {},
  b = {};
class A extends(r = Chunk311907.Ay.Store) {
  isFetching() {
    return h
  }
  getCurrentCategoryId(e) {
    var t;
    return null != (t = g[e]) ? t : a.mU.ALL
  }
  getDirectoryEntries(e, t) {
    var n;
    return null != t ? null == (n = f[e]) ? true : n[t] : p[e]
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
    return null != (t = m[e]) ? t : d
  }
  getAdminGuildEntryIds(e) {
    return b[e]
  }
}
o(A, "displayName", "GuildDirectoryStore");
let y = new A(Chunk73153.h, {
  GUILD_DIRECTORY_FETCH_START: function() {
    h = true
  },
  GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    h = false;
    let r = {},
      l = {};
    n.forEach(e => {
      let t = (0, s.mR)(e);
      r[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
        [t.guildId]: t
      }
    }), p[t] = r, f[t] = l
  },
  GUILD_DIRECTORY_FETCH_FAILURE: function() {
    h = false
  },
  GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
    var t, n, r, l, i;
    let {
      channelId: o,
      entry: d
    } = e, h = (0, s.mR)(d);
    if (null == h || (null == (n = p[o]) ? true : n[h.guildId]) != null) return;
    p[o] = u(c({}, p[o]), {
      [h.guildId]: h
    });
    let g = null != (t = h.primaryCategoryId) ? t : a.mU.UNCATEGORIZED;
    if (f[o] = u(c({}, f[o]), {
        [g]: u(c({}, null == (r = f[o]) ? true : r[g]), {
          [h.guildId]: h
        })
      }), null != m[o]) {
      let e = null != (l = null == (i = m[o]) ? true : i[g]) ? l : 0;
      m[o] = u(c({}, m[o]), {
        [g]: e + 1
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
    let s = i.primaryCategoryId,
      a = Object.assign({}, p[r]);
    delete a[l], null == (n = b[r]) || n.delete(l), b[r] = new Set(b[r]), p[r] = a;
    let o = Object.assign({}, f[r][s]);
    if (delete o[l], f[r] = u(c({}, f[r]), {
        [s]: o
      }), null != m[r]) {
      let e = m[r][s] - 1;
      m[r] = u(c({}, m[r]), {
        [s]: e >= 0 ? e : 0
      })
    }
  },
  GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
    var t, n, r, l, i, o, d, h, g;
    let {
      channelId: b,
      entry: A
    } = e, y = (0, s.mR)(A), O = null == (r = p[b]) ? true : r[y.guildId];
    p[b] = u(c({}, p[b]), {
      [y.guildId]: c({}, O, y)
    });
    let _ = null != (t = null == O ? true : O.primaryCategoryId) ? t : a.mU.UNCATEGORIZED,
      j = null != (n = y.primaryCategoryId) ? n : a.mU.UNCATEGORIZED,
      x = Object.assign({}, null == (l = f[b]) ? true : l[_]);
    null != O && _ !== j && delete x[y.guildId], f[b] = u(c({}, f[b]), {
      [_]: x,
      [j]: u(c({}, null == (i = f[b]) ? true : i[j]), {
        [y.guildId]: c({}, O, y)
      })
    }), j !== _ && null != m[b] && (m[b] = u(c({}, m[b]), {
      [_]: (null == (d = m[b]) ? true : d[_]) > 0 ? (null == (h = m[b]) ? true : h[_]) - 1 : 0,
      [j]: (null != (o = null == (g = m[b]) ? true : g[j]) ? o : 0) + 1
    }))
  },
  GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
    let {
      channelId: t,
      categoryId: n
    } = e;
    g[t] = n
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