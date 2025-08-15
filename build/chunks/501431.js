/** Chunk was on 45620 **/
/** chunk id: 501431, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C,
  S: () => v
}), require("./388685.js"), require("./781311.js"), require("./642613.js"), require("./49124.js");
var Chunk647438 = require("./647438.js"),
  Chunk879690 = require("./879690.js"),
  Chunk8058 = require("./8058.js"),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk653654 = require("./653654.js"),
  Chunk870289 = require("./870289.js"),
  Chunk149705 = require("./149705.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function g(e, t) {
  let r = new Set(e);
  return r.has(t) ? r.delete(t) : r.add(t), r
}
let f = {
    sortType: Chunk792091.E.RECENCY,
    sortDirection: Chunk497598.F.DESC
  },
  b = {
    sortType: Chunk792091.E.POPULARITY,
    sortDirection: Chunk497598.F.DESC
  },
  m = {
    sortType: Chunk792091.E.RELEVANCE,
    sortDirection: Chunk497598.F.DESC
  },
  h = {
    itemTypeFilters: new Set,
    colorFilters: new Set,
    themeFilters: new Set,
    orbEligible: false,
    sort: f,
    searchQuery: "",
    queryPageSize: 0,
    queryPageOffset: 0,
    isFetchingResults: false,
    fullScreenOpen: false,
    userHasSelectedSort: false,
    currentTab: null
  },
  _ = e => {
    let {
      colorFilters: t,
      themeFilters: r,
      searchQuery: n,
      itemTypeFilters: l
    } = e;
    return t.size > 0 || r.size > 0 || "" !== n.trim() ? m : l.size > 0 ? b : f
  },
  v = (0, Chunk879690.U)((0, Chunk8058.XR)((e, t) => p(d({}, h), {
    hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
    hasFilters: () => {
      let {
        itemTypeFilters: e,
        colorFilters: r,
        themeFilters: n,
        orbEligible: l,
        searchQuery: a
      } = t();
      return [e, r, n].some(e => e.size > 0) || l || "" !== a
    },
    hasRelevanceFilters: () => {
      let {
        colorFilters: e,
        themeFilters: r,
        searchQuery: n
      } = t();
      return e.size > 0 || r.size > 0 || "" !== n.trim()
    },
    onToggleItemType: t => {
      e(e => {
        let r = g(e.itemTypeFilters, t),
          n = p(d({}, e), {
            itemTypeFilters: r,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = _(n)), n
      })
    },
    onToggleColor: t => {
      e(e => {
        let r = g(e.colorFilters, t),
          n = p(d({}, e), {
            colorFilters: r,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = _(n)), n
      })
    },
    onToggleTheme: t => {
      e(e => {
        let r = g(e.themeFilters, t),
          n = p(d({}, e), {
            themeFilters: r,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = _(n)), n
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
        let r = p(d({}, e), {
          searchQuery: t,
          queryPageOffset: 0
        });
        return "" !== t.trim() ? (r.sort = m, r.userHasSelectedSort = false) : e.userHasSelectedSort || (r.sort = _(r)), r
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
        let r = new Set([t]),
          n = p(d({}, e), {
            colorFilters: new Set,
            themeFilters: new Set,
            orbEligible: false,
            itemTypeFilters: r,
            queryPageOffset: 0
          });
        return e.userHasSelectedSort || (n.sort = _(n)), n
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
        queryPageSize: r,
        queryPageOffset: n
      } = t();
      e(p(d({}, h), {
        queryPageSize: r,
        queryPageOffset: n
      }))
    },
    setFullScreenOpen: t => {
      e({
        fullScreenOpen: t
      })
    },
    setCurrentTab: t => {
      e({
        currentTab: t
      })
    }
  }))),
  O = e => {
    let {
      itemTypeFilters: t,
      colorFilters: r,
      themeFilters: n,
      orbEligible: l,
      sort: a,
      searchQuery: i,
      queryPageSize: o,
      queryPageOffset: s
    } = e;
    return {
      item_types: Array.from(t),
      colors: Array.from(r),
      themes: Array.from(n),
      orbs_eligible: !!l || true,
      offset: s,
      limit: o,
      sort_type: a.sortType,
      sort_direction: a.sortDirection,
      search: "" !== i ? i : true
    }
  },
  C = () => {
    let {
      onSetResponse: e,
      setSearchError: t,
      setIsFetchingResults: r
    } = (0, Chunk149705.a)(), l = (0, Chunk870289.FF)("collectibles_shop_header_bar");
    Chunk647438.useEffect(() => {
      let n = n => {
        let a = async () => {
          r(true);
          try {
            let t = await (0, s.y)(n);
            e((e => {
              let t = e.skus,
                r = e.pagination.total,
                n = e.pagination.has_more,
                l = e.pagination.offset;
              return {
                skus: t,
                totalCount: r,
                hasMorePages: n,
                pageOffset: l,
                pageLimit: e.pagination.limit
              }
            })(t))
          } catch (e) {
            var l;
            t(null != (l = null == e ? true : e.message) ? l : "Unknown error")
          } finally {
            r(false)
          }
        };
        l && 0 !== n.limit && a()
      };
      Chunk647438(O(v.getState()));
      let a = v.subscribe(O, Chunk647438, {
          equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
        }),
        i = v.subscribe(e => e.hasFilters(), (e, t) => {
          if (!e && t) {
            let e = v.getState();
            e.userHasSelectedSort || v.setState({
              sort: _(e)
            })
          }
        });
      return () => {
        Chunk8058(), Chunk497598()
      }
    }, [module, exports, require, Chunk879690])
  }