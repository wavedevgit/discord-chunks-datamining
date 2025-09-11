/** Chunk was on 32561 **/
/** chunk id: 569527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk209173 = require("./209173.js"),
  Chunk288385 = require("./288385.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk471518 = require("./471518.js"),
  Chunk493646 = require("./493646.js"),
  Chunk370210 = require("./370210.js"),
  Chunk678694 = require("./678694.js"),
  Chunk177653 = require("./177653.js"),
  Chunk216780 = require("./216780.js"),
  Chunk881294 = require("./881294.js"),
  Chunk523311 = require("./523311.jsx"),
  Chunk797908 = require("./797908.jsx"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk120549 = require("./120549.jsx"),
  Chunk188607 = require("./188607.jsx"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk36523 = require("./36523.js");

function T(e) {
  var t;
  let {
    onSelectApplication: n,
    onScroll: T
  } = e, A = (0, o.e7)([m.default], () => m.default.isAuthenticated()), L = a.useRef(null), R = (0, i.TH)(), Z = a.useRef(null), {
    query: w,
    page: D,
    categoryId: k
  } = a.useMemo(() => {
    var e, t;
    let n = new URLSearchParams(R.search),
      r = n.get("page"),
      a = null != r ? Number(r) : 1;
    return {
      query: null != (e = n.get("q")) ? e : "",
      page: a,
      categoryId: null != (t = Number(n.get("category_id"))) ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
    }
  }, [R.search]), M = (0, o.e7)([_.Z], () => _.Z.getCategories()), G = a.useMemo(() => null == M ? true : M.find(e => e.id === k), [M, k]), B = a.useCallback(e => {
    (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
      search_term: w,
      num_results: e,
      current_page: y.m_.SEARCH,
      result_page: D,
      category: null == G ? true : G.name,
      category_id: null == G ? true : G.id
    })
  }, [w, D, null == G ? true : G.name, null == G ? true : G.id]);
  a.useEffect(() => {
    var e;
    null == (e = L.current) || e.scrollTo({
      to: 0
    }), w !== Z.current && (Z.current = w, h.yC({
      query: w,
      options: {
        source: s.F.APP_DIRECTORY
      }
    })), h.yC({
      query: w,
      options: {
        categoryId: k,
        page: D,
        pageSize: P.PAGE_SIZE,
        source: s.F.APP_DIRECTORY
      },
      onSuccessCallback: B
    })
  }, [k, D, w, B]);
  let {
    fetchState: z,
    searchResults: U
  } = (0, o.cj)([b.Z], () => ({
    fetchState: b.Z.getFetchState({
      query: w,
      categoryId: k,
      page: D,
      pageSize: P.PAGE_SIZE,
      source: s.F.APP_DIRECTORY
    }),
    searchResults: b.Z.getSearchResults({
      query: w,
      categoryId: k,
      page: D,
      pageSize: P.PAGE_SIZE,
      source: s.F.APP_DIRECTORY
    })
  })), F = (0, o.cj)([b.Z], () => {
    let e = b.Z.getSearchResults({
      query: w,
      source: s.F.APP_DIRECTORY
    });
    return null != e ? function(e) {
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
    }({
      [x.MU]: e.totalCount
    }, e.countsByCategory) : {}
  }), V = (0, d.Z)(U), H = a.useMemo(() => z === f.M.FETCHING ? V : U, [z, V, U]), Y = a.useCallback(e => {
    (0, I.pR)({
      query: w,
      categoryId: k,
      page: e
    })
  }, [k, w]), W = a.useCallback(e => {
    (0, v.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: y.m_.SEARCH
    }), (0, I.pR)({
      query: w,
      categoryId: e.id
    })
  }, [w]), X = a.useCallback((e, t) => {
    (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
      current_page: y.m_.SEARCH,
      application_id: e,
      load_id: null == H ? true : H.loadId,
      search_term: w,
      position: t
    }), n(e)
  }, [null == H ? true : H.loadId, n, w]), q = (0, g.K)();
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsx)(p.Z, {
      ref: L,
      onScroll: T,
      children: (0, r.jsxs)("div", {
        className: N.innerContainer,
        children: [A ? null : (0, r.jsx)("div", {
          className: N.centeringBuffer
        }), (0, r.jsx)(u.Z, {
          children: (0, r.jsxs)("div", {
            className: N.contentContainer,
            children: [(0, r.jsx)("div", {
              className: N.topFilterContainer,
              children: (0, r.jsx)(O.V, {
                countsByCategory: F,
                selectedCategoryId: k,
                onSelectCategory: W
              })
            }), (0, r.jsx)(C.Z, {
              loading: z === f.M.FETCHING,
              children: z === f.M.FETCHED && (null == H || (null == H ? true : H.results.length) === 0) ? (0, r.jsx)(S.Z, {
                selectedCategoryId: null != k ? k : q.id,
                searchAllCategories: () => W(q)
              }) : (0, r.jsx)("div", {
                className: N.content,
                children: null == H ? true : H.results.map((e, t) => {
                  if (e.type === l.s.APPLICATION) {
                    let n = e.data;
                    return (0, r.jsx)(j.Z, {
                      application: n,
                      onSelectApplication: e => X(e, t),
                      showCategory: true
                    }, n.id)
                  }
                  return null
                })
              })
            }), (0, r.jsx)(c.DsT, {
              className: N.paginationInput,
              totalCount: Math.min((null != (t = null == H ? true : H.totalPages) ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
              pageSize: P.PAGE_SIZE,
              disablePaginationGap: true,
              hideMaxPage: true,
              currentPage: D,
              onPageChange: Y
            })]
          })
        })]
      })
    }), (0, r.jsx)("div", {
      className: N.sideFilterContainer,
      children: (0, r.jsx)("div", {
        className: N.sideFilterContent,
        children: (0, r.jsx)(O.Z, {
          countsByCategory: F,
          selectedCategoryId: k,
          onSelectCategory: W
        })
      })
    })]
  })
}