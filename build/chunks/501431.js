/** Chunk was on 45620 **/
/** chunk id: 501431, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x,
  S: () => b
}), require("./388685.js"), require("./781311.js"), require("./642613.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk690775 = require("./690775.js"),
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

function p(e, t) {
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
    sortType: Chunk792091.E.RECENCY,
    sortDirection: Chunk497598.F.DESC
  },
  h = {
    sortType: Chunk792091.E.POPULARITY,
    sortDirection: Chunk497598.F.DESC
  },
  m = {
    sortType: Chunk792091.E.RELEVANCE,
    sortDirection: Chunk497598.F.DESC
  },
  C = {
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
  _ = e => {
    let {
      colorFilters: t,
      themeFilters: n,
      searchQuery: r,
      itemTypeFilters: l
    } = e;
    return t.size > 0 || n.size > 0 || "" !== r.trim() ? m : l.size > 0 ? h : f
  },
  b = (0, Chunk663042.U)((0, Chunk690775.XR)((e, t) => p(d({}, C), {
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
        let n = g(e.itemTypeFilters, t),
          r = p(d({}, e), {
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = _(r)), r
      })
    },
    onToggleColor: t => {
      e(e => {
        let n = g(e.colorFilters, t),
          r = p(d({}, e), {
            colorFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = _(r)), r
      })
    },
    onToggleTheme: t => {
      e(e => {
        let n = g(e.themeFilters, t),
          r = p(d({}, e), {
            themeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = _(r)), r
      })
    },
    onToggleOrbEligible: () => {
      e(e => {
        let t = p(d({}, e), {
          orbEligible: !e.orbEligible,
          queryPageOffset: 0
        });
        return e.userHasSelectedSort || (t.sort = _(t)), t
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
        let n = p(d({}, e), {
          searchQuery: t,
          queryPageOffset: 0
        });
        return "" !== t.trim() ? (n.sort = m, n.userHasSelectedSort = false) : e.userHasSelectedSort || (n.sort = _(n)), n
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
          r = p(d({}, e), {
            colorFilters: new Set,
            themeFilters: new Set,
            orbEligible: false,
            itemTypeFilters: n,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (r.sort = _(r)), r
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
      e(p(d({}, C), {
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
      searchQuery: a,
      queryPageSize: s,
      queryPageOffset: o
    } = e;
    return {
      item_types: Array.from(t),
      colors: Array.from(n),
      themes: Array.from(r),
      orbs_eligible: !!l || true,
      offset: o,
      limit: s,
      sort_type: i.sortType,
      sort_direction: i.sortDirection,
      search: "" !== a ? a : true
    }
  },
  x = () => {
    let {
      onSetResponse: e,
      setSearchError: t,
      setIsFetchingResults: n
    } = (0, Chunk149705.a)(), l = (0, Chunk870289.FF)("collectibles_shop_header_bar");
    Chunk473749.useEffect(() => {
      let r = r => {
        let i = async () => {
          n(true);
          try {
            let t = await (0, o.y)(r);
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
      Chunk473749(v(b.getState()));
      let i = b.subscribe(v, Chunk473749, {
          equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
        }),
        a = b.subscribe(e => e.hasFilters(), (e, t) => {
          if (!e && t) {
            let e = b.getState();
            e.userHasSelectedSort || b.setState({
              sort: _(e)
            })
          }
        });
      return () => {
        Chunk690775(), Chunk497598()
      }
    }, [module, exports, require, Chunk663042])
  }