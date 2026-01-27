/** Chunk was on 28636 **/
/** chunk id: 360832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk935573 = require("./935573.js"),
  Chunk994369 = require("./994369.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk979590 = require("./979590.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk354138 = require("./354138.js"),
  Chunk620140 = require("./620140.js"),
  Chunk212534 = require("./212534.js"),
  Chunk38181 = require("./38181.js"),
  Chunk651753 = require("./651753.js"),
  Chunk767599 = require("./767599.js"),
  Chunk412461 = require("./412461.js"),
  Chunk867333 = require("./867333.jsx"),
  Chunk487953 = require("./487953.jsx"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk847525 = require("./847525.jsx"),
  Chunk734786 = require("./734786.jsx"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  Chunk563962 = require("./563962.js");

function N(e) {
  var t;
  let {
    onSelectApplication: n,
    onScroll: N
  } = e, T = (0, o.bG)([h.default], () => h.default.isAuthenticated()), R = l.useRef(null), L = (0, i.zy)(), D = l.useRef(null), {
    query: w,
    page: k,
    categoryId: M
  } = l.useMemo(() => {
    var e, t;
    let n = new URLSearchParams(L.search),
      r = n.get("page"),
      l = null != r ? Number(r) : 1;
    return {
      query: null != (e = n.get("q")) ? e : "",
      page: l,
      categoryId: null != (t = Number(n.get("category_id"))) ? t : I.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
    }
  }, [L.search]), G = (0, o.bG)([b.A], () => b.A.getCategories()), U = l.useMemo(() => null == G ? true : G.find(e => e.id === M), [G, M]), V = l.useCallback(e => {
    (0, v.TR)(E.HAw.APP_DIRECTORY_SEARCHED, {
      search_term: w,
      num_results: e,
      current_page: y.ev.SEARCH,
      result_page: k,
      category: null == U ? true : U.name,
      category_id: null == U ? true : U.id
    })
  }, [w, k, null == U ? true : U.name, null == U ? true : U.id]);
  l.useEffect(() => {
    var e;
    null == (e = R.current) || e.scrollTo({
      to: 0
    }), w !== D.current && (D.current = w, m.$P({
      query: w,
      options: {
        source: s.V.APP_DIRECTORY
      }
    })), m.$P({
      query: w,
      options: {
        categoryId: M,
        page: k,
        pageSize: I.PAGE_SIZE,
        source: s.V.APP_DIRECTORY
      },
      onSuccessCallback: V
    })
  }, [M, k, w, V]);
  let {
    fetchState: H,
    searchResults: B
  } = (0, o.cf)([f.A], () => ({
    fetchState: f.A.getFetchState({
      query: w,
      categoryId: M,
      page: k,
      pageSize: I.PAGE_SIZE,
      source: s.V.APP_DIRECTORY
    }),
    searchResults: f.A.getSearchResults({
      query: w,
      categoryId: M,
      page: k,
      pageSize: I.PAGE_SIZE,
      source: s.V.APP_DIRECTORY
    })
  })), F = (0, o.cf)([f.A], () => {
    let e = f.A.getSearchResults({
      query: w,
      source: s.V.APP_DIRECTORY
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
      [x.lj]: e.totalCount
    }, e.countsByCategory) : {}
  }), Y = (0, d.A)(B), z = l.useMemo(() => H === _.e.FETCHING ? Y : B, [H, Y, B]), X = l.useCallback(e => {
    (0, C.JX)({
      query: w,
      categoryId: M,
      page: e
    })
  }, [M, w]), W = l.useCallback(e => {
    (0, v.TR)(E.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: y.ev.SEARCH
    }), (0, C.JX)({
      query: w,
      categoryId: e.id
    })
  }, [w]), K = l.useCallback((e, t) => {
    (0, v.TR)(E.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
      current_page: y.ev.SEARCH,
      application_id: e,
      load_id: null == z ? true : z.loadId,
      search_term: w,
      position: t
    }), n(e)
  }, [null == z ? true : z.loadId, n, w]), Z = (0, g.A)();
  return (0, r.jsxs)("div", {
    className: P.kL,
    children: [(0, r.jsx)(p.A, {
      ref: R,
      onScroll: N,
      children: (0, r.jsxs)("div", {
        className: P.WH,
        children: [T ? null : (0, r.jsx)("div", {
          className: P.AW
        }), (0, r.jsx)(u.A, {
          children: (0, r.jsxs)("div", {
            className: P.hQ,
            children: [(0, r.jsx)("div", {
              className: P.$B,
              children: (0, r.jsx)(O.e, {
                countsByCategory: F,
                selectedCategoryId: M,
                onSelectCategory: W
              })
            }), (0, r.jsx)(j.A, {
              loading: H === _.e.FETCHING,
              children: H === _.e.FETCHED && (null == z || (null == z ? true : z.results.length) === 0) ? (0, r.jsx)(S.A, {
                selectedCategoryId: null != M ? M : Z.id,
                searchAllCategories: () => W(Z)
              }) : (0, r.jsx)("div", {
                className: P.Qs,
                children: null == z ? true : z.results.map((e, t) => {
                  if (e.type === a.j.APPLICATION) {
                    let n = e.data;
                    return (0, r.jsx)(A.A, {
                      application: n,
                      onSelectApplication: e => K(e, t),
                      showCategory: true
                    }, n.id)
                  }
                  return null
                })
              })
            }), (0, r.jsx)(c.mgR, {
              className: P.JV,
              totalCount: Math.min((null != (t = null == z ? true : z.totalPages) ? t : 0) * I.PAGE_SIZE, I.MAX_PAGES * I.PAGE_SIZE),
              pageSize: I.PAGE_SIZE,
              disablePaginationGap: true,
              hideMaxPage: true,
              currentPage: k,
              onPageChange: X
            })]
          })
        })]
      })
    }), (0, r.jsx)("div", {
      className: P.pn,
      children: (0, r.jsx)("div", {
        className: P.jv,
        children: (0, r.jsx)(O.A, {
          countsByCategory: F,
          selectedCategoryId: M,
          onSelectCategory: W
        })
      })
    })]
  })
}