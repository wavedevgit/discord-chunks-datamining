/** Chunk was on 59275 **/
/** chunk id: 365491, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => v,
  v: () => h
}), require("./896048.js"), require("./733351.js"), require("./638769.js"), require("./457529.js");
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk499867 = require("./499867.js"),
  Chunk401864 = require("./401864.js"),
  Chunk124987 = require("./124987.js"),
  Chunk946716 = require("./946716.js"),
  Chunk856686 = require("./856686.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
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

function g(e, t) {
  let n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n
}
let f = {
    sortType: Chunk124987.$.RECENCY,
    sortDirection: Chunk401864.A.DESC
  },
  p = {
    sortType: Chunk124987.$.POPULARITY,
    sortDirection: Chunk401864.A.DESC
  },
  m = {
    sortType: Chunk124987.$.RELEVANCE,
    sortDirection: Chunk401864.A.DESC
  },
  _ = {
    itemTypeFilters: new Set,
    colorFilters: new Set,
    themeFilters: new Set,
    orbEligible: false,
    sort: f,
    searchQuery: "",
    queryPageSize: 0,
    queryPageOffset: 0,
    isFetchingResults: false,
    userHasSelectedSort: false,
    currentTab: null
  },
  b = e => {
    let {
      colorFilters: t,
      themeFilters: n,
      searchQuery: r,
      itemTypeFilters: l
    } = e;
    return t.size > 0 || n.size > 0 || "" !== r.trim() ? m : l.size > 0 ? p : f
  },
  h = (0, Chunk353640.v)((0, Chunk499867.eh)((e, t) => d(u({}, _), {
    hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
    hasFilters: () => {
      let {
        itemTypeFilters: e,
        colorFilters: n,
        themeFilters: r,
        orbEligible: l,
        searchQuery: s
      } = t();
      return [e, n, r].some(e => e.size > 0) || l || "" !== s
    },
    hasRelevanceFilters: () => {
      let {
        colorFilters: e,
        themeFilters: n,
        searchQuery: r
      } = t();
      return e.size > 0 || n.size > 0 || "" !== r.trim()
    },
    onToggleItemType: t => {
      e(e => {
        let n = g(e.itemTypeFilters, t),
          r = d(u({}, e), {
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = b(r)), r
      })
    },
    onToggleColor: t => {
      e(e => {
        let n = g(e.colorFilters, t),
          r = d(u({}, e), {
            colorFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = b(r)), r
      })
    },
    onToggleTheme: t => {
      e(e => {
        let n = g(e.themeFilters, t),
          r = d(u({}, e), {
            themeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = b(r)), r
      })
    },
    onToggleOrbEligible: () => {
      e(e => {
        let t = d(u({}, e), {
          orbEligible: !e.orbEligible,
          queryPageOffset: 0
        });
        return e.userHasSelectedSort || (t.sort = b(t)), t
      })
    },
    onSetSort: t => {
      e({
        sort: t,
        queryPageOffset: 0,
        userHasSelectedSort: true
      })
    },
    onSetResponse: t => {
      e(e => u({}, e, t))
    },
    onSetSearchQuery: t => {
      e(e => {
        let n = d(u({}, e), {
          searchQuery: t,
          queryPageOffset: 0
        });
        return "" !== t.trim() ? (n.sort = m, n.userHasSelectedSort = false) : e.userHasSelectedSort || (n.sort = b(n)), n
      })
    },
    setQueryPageSize: t => {
      e({
        queryPageSize: t
      })
    },
    setQueryPageOffset: t => {
      e({
        queryPageOffset: t
      })
    },
    setItemTypeFilter: t => {
      e(e => {
        let n = new Set([t]),
          r = d(u({}, e), {
            colorFilters: new Set,
            themeFilters: new Set,
            orbEligible: false,
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = b(r)), r
      })
    },
    clearFilters: () => {
      e({
        colorFilters: new Set,
        themeFilters: new Set,
        itemTypeFilters: new Set,
        orbEligible: false
      })
    },
    reset: () => {
      let {
        queryPageSize: n,
        queryPageOffset: r
      } = t();
      e(d(u({}, _), {
        queryPageSize: n,
        queryPageOffset: r
      }))
    },
    setCurrentTab: t => {
      e({
        currentTab: t
      })
    }
  }))),
  E = e => {
    let {
      itemTypeFilters: t,
      colorFilters: n,
      themeFilters: r,
      orbEligible: l,
      sort: s,
      searchQuery: a,
      queryPageSize: i,
      queryPageOffset: o
    } = e;
    return {
      item_types: Array.from(t),
      colors: Array.from(n),
      themes: Array.from(r),
      orbs_eligible: !!l || true,
      offset: o,
      limit: i,
      sort_type: s.sortType,
      sort_direction: s.sortDirection,
      search: "" !== a ? a : true
    }
  },
  v = () => {
    let {
      onSetResponse: e,
      setSearchError: t,
      setIsFetchingResults: n
    } = (0, c.S)();
    r.useEffect(() => {
      let r = r => {
        let l = async () => {
          var l;
          n(true);
          try {
            let t, n, l, s, a = await (0, o.$)(r);
            e((t = a.skus, n = a.pagination.total, l = a.pagination.has_more, s = a.pagination.offset, {
              skus: t,
              totalCount: n,
              hasMorePages: l,
              pageOffset: s,
              pageLimit: a.pagination.limit
            }))
          } catch (e) {
            t(null != (l = null == e ? true : e.message) ? l : "Unknown error")
          } finally {
            n(false)
          }
        };
        0 !== r.limit && l()
      };
      r(E(h.getState()));
      let l = h.subscribe(E, r, {
          equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
        }),
        s = h.subscribe(e => e.hasFilters(), (e, t) => {
          if (!e && t) {
            let e = h.getState();
            e.userHasSelectedSort || h.setState({
              sort: b(e)
            })
          }
        });
      return () => {
        l(), s()
      }
    }, [e, t, n])
  }