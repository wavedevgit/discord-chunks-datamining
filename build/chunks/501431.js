/** Chunk was on 45620 **/
/** chunk id: 501431, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E,
  S: () => b
}), require("./388685.js"), require("./781311.js"), require("./642613.js"), require("./49124.js");
var Chunk647438 = require("./647438.js"),
  Chunk191336 = require("./191336.js"),
  Chunk180059 = require("./180059.js"),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk653654 = require("./653654.js"),
  Chunk870289 = require("./870289.js"),
  Chunk149705 = require("./149705.js");

function d(e) {
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

function g(e, t) {
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

function p(e, t) {
  let n = new Set(e);
  return n.has(t) ? n.delete(t) : n.add(t), n
}
let f = {
    sortType: Chunk792091.E.RECENCY,
    sortDirection: Chunk497598.F.DESC
  },
  C = {
    sortType: Chunk792091.E.POPULARITY,
    sortDirection: Chunk497598.F.DESC
  },
  h = {
    sortType: Chunk792091.E.RELEVANCE,
    sortDirection: Chunk497598.F.DESC
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
  m = e => {
    let {
      colorFilters: t,
      themeFilters: n,
      searchQuery: r,
      itemTypeFilters: l
    } = e;
    return t.size > 0 || n.size > 0 || "" !== r.trim() ? h : l.size > 0 ? C : f
  },
  b = (0, Chunk191336.U)((0, Chunk180059.XR)((e, t) => g(d({}, _), {
    hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
    hasFilters: () => {
      let {
        itemTypeFilters: e,
        colorFilters: n,
        themeFilters: r,
        orbEligible: l,
        searchQuery: i
      } = t();
      return [e, n, r].some(e => e.size > 0) || l || "" !== i
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
        let n = p(e.itemTypeFilters, t),
          r = g(d({}, e), {
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = m(r)), r
      })
    },
    onToggleColor: t => {
      e(e => {
        let n = p(e.colorFilters, t),
          r = g(d({}, e), {
            colorFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = m(r)), r
      })
    },
    onToggleTheme: t => {
      e(e => {
        let n = p(e.themeFilters, t),
          r = g(d({}, e), {
            themeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = m(r)), r
      })
    },
    onToggleOrbEligible: () => {
      e(e => {
        let t = g(d({}, e), {
          orbEligible: !e.orbEligible,
          queryPageOffset: 0
        });
        return e.userHasSelectedSort || (t.sort = m(t)), t
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
      e(e => d({}, e, t))
    },
    onSetSearchQuery: t => {
      e(e => {
        let n = g(d({}, e), {
          searchQuery: t,
          queryPageOffset: 0
        });
        return "" !== t.trim() ? (n.sort = h, n.userHasSelectedSort = false) : e.userHasSelectedSort || (n.sort = m(n)), n
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
          r = g(d({}, e), {
            colorFilters: new Set,
            themeFilters: new Set,
            orbEligible: false,
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = m(r)), r
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
      e(g(d({}, _), {
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
  v = e => {
    let {
      itemTypeFilters: t,
      colorFilters: n,
      themeFilters: r,
      orbEligible: l,
      sort: i,
      searchQuery: o,
      queryPageSize: s,
      queryPageOffset: a
    } = e;
    return {
      item_types: Array.from(t),
      colors: Array.from(n),
      themes: Array.from(r),
      orbs_eligible: !!l || true,
      offset: a,
      limit: s,
      sort_type: i.sortType,
      sort_direction: i.sortDirection,
      search: "" !== o ? o : true
    }
  },
  E = () => {
    let {
      onSetResponse: e,
      setSearchError: t,
      setIsFetchingResults: n
    } = (0, Chunk149705.a)(), l = (0, Chunk870289.FF)("collectibles_shop_header_bar");
    Chunk647438.useEffect(() => {
      let r = r => {
        let i = async () => {
          n(true);
          try {
            let t = await (0, a.y)(r);
            e((e => {
              let t = e.skus,
                n = e.pagination.total,
                r = e.pagination.has_more,
                l = e.pagination.offset;
              return {
                skus: t,
                totalCount: n,
                hasMorePages: r,
                pageOffset: l,
                pageLimit: e.pagination.limit
              }
            })(t))
          } catch (e) {
            var l;
            t(null != (l = null == e ? true : e.message) ? l : "Unknown error")
          } finally {
            n(false)
          }
        };
        l && 0 !== r.limit && i()
      };
      Chunk647438(v(b.getState()));
      let i = b.subscribe(v, Chunk647438, {
          equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
        }),
        o = b.subscribe(e => e.hasFilters(), (e, t) => {
          if (!e && t) {
            let e = b.getState();
            e.userHasSelectedSort || b.setState({
              sort: m(e)
            })
          }
        });
      return () => {
        Chunk180059(), Chunk497598()
      }
    }, [module, exports, require, Chunk191336])
  }