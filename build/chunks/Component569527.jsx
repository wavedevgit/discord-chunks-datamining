/** Chunk was on 92504 **/
/** chunk id: 569527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
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
  Chunk843931 = require("./843931.js");

function T(e) {
  var t;
  let {
    onSelectApplication: n,
    onScroll: T
  } = e, A = (0, o.e7)([m.default], () => m.default.isAuthenticated()), L = r.useRef(null), R = (0, i.TH)(), Z = r.useRef(null), {
    query: w,
    page: D,
    categoryId: k
  } = r.useMemo(() => {
    var e, t;
    let n = new URLSearchParams(R.search),
      a = n.get("page"),
      r = null != a ? Number(a) : 1;
    return {
      query: null != (e = n.get("q")) ? e : "",
      page: r,
      categoryId: null != (t = Number(n.get("category_id"))) ? t : O.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
    }
  }, [R.search]), M = (0, o.e7)([b.Z], () => b.Z.getCategories()), G = r.useMemo(() => null == M ? true : M.find(e => e.id === k), [M, k]), B = r.useCallback(e => {
    (0, C.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
      search_term: w,
      num_results: e,
      current_page: y.m_.SEARCH,
      result_page: D,
      category: null == G ? true : G.name,
      category_id: null == G ? true : G.id
    })
  }, [w, D, null == G ? true : G.name, null == G ? true : G.id]);
  r.useEffect(() => {
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
        pageSize: O.PAGE_SIZE,
        source: s.F.APP_DIRECTORY
      },
      onSuccessCallback: B
    })
  }, [k, D, w, B]);
  let {
    fetchState: U,
    searchResults: F
  } = (0, o.cj)([x.Z], () => ({
    fetchState: x.Z.getFetchState({
      query: w,
      categoryId: k,
      page: D,
      pageSize: O.PAGE_SIZE,
      source: s.F.APP_DIRECTORY
    }),
    searchResults: x.Z.getSearchResults({
      query: w,
      categoryId: k,
      page: D,
      pageSize: O.PAGE_SIZE,
      source: s.F.APP_DIRECTORY
    })
  })), z = (0, o.cj)([x.Z], () => {
    let e = x.Z.getSearchResults({
      query: w,
      source: s.F.APP_DIRECTORY
    });
    return null != e ? function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      [v.MU]: e.totalCount
    }, e.countsByCategory) : {}
  }), H = (0, d.Z)(F), V = r.useMemo(() => U === g.M.FETCHING ? H : F, [U, H, F]), Y = r.useCallback(e => {
    (0, I.pR)({
      query: w,
      categoryId: k,
      page: e
    })
  }, [k, w]), W = r.useCallback(e => {
    (0, C.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: y.m_.SEARCH
    }), (0, I.pR)({
      query: w,
      categoryId: e.id
    })
  }, [w]), X = r.useCallback((e, t) => {
    (0, C.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
      current_page: y.m_.SEARCH,
      application_id: e,
      load_id: null == V ? true : V.loadId,
      search_term: w,
      position: t
    }), n(e)
  }, [null == V ? true : V.loadId, n, w]), K = (0, f.K)();
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)(p.Z, {
      ref: L,
      onScroll: T,
      children: (0, a.jsxs)("div", {
        className: N.innerContainer,
        children: [A ? null : (0, a.jsx)("div", {
          className: N.centeringBuffer
        }), (0, a.jsx)(u.Z, {
          children: (0, a.jsxs)("div", {
            className: N.contentContainer,
            children: [(0, a.jsx)("div", {
              className: N.topFilterContainer,
              children: (0, a.jsx)(S.V, {
                countsByCategory: z,
                selectedCategoryId: k,
                onSelectCategory: W
              })
            }), (0, a.jsx)(j.Z, {
              loading: U === g.M.FETCHING,
              children: U === g.M.FETCHED && (null == V || (null == V ? true : V.results.length) === 0) ? (0, a.jsx)(P.Z, {
                selectedCategoryId: null != k ? k : K.id,
                searchAllCategories: () => W(K)
              }) : (0, a.jsx)("div", {
                className: N.content,
                children: null == V ? true : V.results.map((e, t) => {
                  if (e.type === l.s.APPLICATION) {
                    let n = e.data;
                    return (0, a.jsx)(_.Z, {
                      application: n,
                      onSelectApplication: e => X(e, t),
                      showCategory: true
                    }, n.id)
                  }
                  return null
                })
              })
            }), (0, a.jsx)(c.DsT, {
              className: N.paginationInput,
              totalCount: Math.min((null != (t = null == V ? true : V.totalPages) ? t : 0) * O.PAGE_SIZE, O.MAX_PAGES * O.PAGE_SIZE),
              pageSize: O.PAGE_SIZE,
              disablePaginationGap: true,
              hideMaxPage: true,
              currentPage: D,
              onPageChange: Y
            })]
          })
        })]
      })
    }), (0, a.jsx)("div", {
      className: N.sideFilterContainer,
      children: (0, a.jsx)("div", {
        className: N.sideFilterContent,
        children: (0, a.jsx)(S.Z, {
          countsByCategory: z,
          selectedCategoryId: k,
          onSelectCategory: W
        })
      })
    })]
  })
}