/** Chunk was on 59275 **/
/** chunk id: 365491, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => A,
  v: () => E
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
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function f(e, t) {
  let l = new Set(e);
  return l.has(t) ? l.delete(t) : l.add(t), l
}
let b = {
    sortType: Chunk124987.$.RECENCY,
    sortDirection: Chunk401864.A.DESC
  },
  g = {
    sortType: Chunk124987.$.POPULARITY,
    sortDirection: Chunk401864.A.DESC
  },
  p = {
    sortType: Chunk124987.$.RELEVANCE,
    sortDirection: Chunk401864.A.DESC
  },
  m = {
    itemTypeFilters: new Set,
    colorFilters: new Set,
    themeFilters: new Set,
    orbEligible: false,
    sort: b,
    searchQuery: "",
    queryPageSize: 0,
    queryPageOffset: 0,
    isFetchingResults: false,
    userHasSelectedSort: false,
    currentTab: null
  },
  h = e => {
    let {
      colorFilters: t,
      themeFilters: l,
      searchQuery: n,
      itemTypeFilters: r
    } = e;
    return t.size > 0 || l.size > 0 || "" !== n.trim() ? p : r.size > 0 ? g : b
  },
  E = (0, Chunk353640.v)((0, Chunk499867.eh)((e, t) => d(u({}, m), {
    hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === b.sortType && t().sort.sortDirection === b.sortDirection,
    hasFilters: () => {
      let {
        itemTypeFilters: e,
        colorFilters: l,
        themeFilters: n,
        orbEligible: r,
        searchQuery: s
      } = t();
      return [e, l, n].some(e => e.size > 0) || r || "" !== s
    },
    hasRelevanceFilters: () => {
      let {
        colorFilters: e,
        themeFilters: l,
        searchQuery: n
      } = t();
      return e.size > 0 || l.size > 0 || "" !== n.trim()
    },
    onToggleItemType: t => {
      e(e => {
        let l = f(e.itemTypeFilters, t),
          n = d(u({}, e), {
            itemTypeFilters: l,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = h(n)), n
      })
    },
    onToggleColor: t => {
      e(e => {
        let l = f(e.colorFilters, t),
          n = d(u({}, e), {
            colorFilters: l,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = h(n)), n
      })
    },
    onToggleTheme: t => {
      e(e => {
        let l = f(e.themeFilters, t),
          n = d(u({}, e), {
            themeFilters: l,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = h(n)), n
      })
    },
    onToggleOrbEligible: () => {
      e(e => {
        let t = d(u({}, e), {
          orbEligible: !e.orbEligible,
          queryPageOffset: 0
        });
        return e.userHasSelectedSort || (t.sort = h(t)), t
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
        let l = d(u({}, e), {
          searchQuery: t,
          queryPageOffset: 0
        });
        return "" !== t.trim() ? (l.sort = p, l.userHasSelectedSort = false) : e.userHasSelectedSort || (l.sort = h(l)), l
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
        let l = new Set([t]),
          n = d(u({}, e), {
            colorFilters: new Set,
            themeFilters: new Set,
            orbEligible: false,
            itemTypeFilters: l,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = h(n)), n
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
        queryPageSize: l,
        queryPageOffset: n
      } = t();
      e(d(u({}, m), {
        queryPageSize: l,
        queryPageOffset: n
      }))
    },
    setCurrentTab: t => {
      e({
        currentTab: t
      })
    }
  }))),
  v = e => {
    let {
      itemTypeFilters: t,
      colorFilters: l,
      themeFilters: n,
      orbEligible: r,
      sort: s,
      searchQuery: a,
      queryPageSize: i,
      queryPageOffset: o
    } = e;
    return {
      item_types: Array.from(t),
      colors: Array.from(l),
      themes: Array.from(n),
      orbs_eligible: !!r || true,
      offset: o,
      limit: i,
      sort_type: s.sortType,
      sort_direction: s.sortDirection,
      search: "" !== a ? a : true
    }
  },
  A = () => {
    let {
      onSetResponse: e,
      setSearchError: t,
      setIsFetchingResults: l
    } = (0, c.S)();
    n.useEffect(() => {
      let n = n => {
        let r = async () => {
          var r;
          l(true);
          try {
            let t, l, r, s, a = await (0, o.$)(n);
            e((t = a.skus, l = a.pagination.total, r = a.pagination.has_more, s = a.pagination.offset, {
              skus: t,
              totalCount: l,
              hasMorePages: r,
              pageOffset: s,
              pageLimit: a.pagination.limit
            }))
          } catch (e) {
            t(null != (r = null == e ? true : e.message) ? r : "Unknown error")
          } finally {
            l(false)
          }
        };
        0 !== n.limit && r()
      };
      n(v(E.getState()));
      let r = E.subscribe(v, n, {
          equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
        }),
        s = E.subscribe(e => e.hasFilters(), (e, t) => {
          if (!e && t) {
            let e = E.getState();
            e.userHasSelectedSort || E.setState({
              sort: h(e)
            })
          }
        });
      return () => {
        r(), s()
      }
    }, [e, t, l])
  }