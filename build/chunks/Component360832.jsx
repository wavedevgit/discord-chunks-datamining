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
  } = e, R = (0, c.bG)([h.default], () => h.default.isAuthenticated()), T = a.useRef(null), L = (0, r.zy)(), D = a.useRef(null), {
    query: w,
    page: k,
    categoryId: M
  } = a.useMemo(() => {
    var e, t;
    let n = new URLSearchParams(L.search),
      l = n.get("page"),
      a = null != l ? Number(l) : 1;
    return {
      query: null != (e = n.get("q")) ? e : "",
      page: a,
      categoryId: null != (t = Number(n.get("category_id"))) ? t : E.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
    }
  }, [L.search]), U = (0, c.bG)([g.A], () => g.A.getCategories()), G = a.useMemo(() => null == U ? true : U.find(e => e.id === M), [U, M]), V = a.useCallback(e => {
    (0, j.TR)(I.HAw.APP_DIRECTORY_SEARCHED, {
      search_term: w,
      num_results: e,
      current_page: y.ev.SEARCH,
      result_page: k,
      category: null == G ? true : G.name,
      category_id: null == G ? true : G.id
    })
  }, [w, k, null == G ? true : G.name, null == G ? true : G.id]);
  a.useEffect(() => {
    var e;
    null == (e = T.current) || e.scrollTo({
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
        pageSize: E.PAGE_SIZE,
        source: s.V.APP_DIRECTORY
      },
      onSuccessCallback: V
    })
  }, [M, k, w, V]);
  let {
    fetchState: H,
    searchResults: F
  } = (0, c.cf)([x.A], () => ({
    fetchState: x.A.getFetchState({
      query: w,
      categoryId: M,
      page: k,
      pageSize: E.PAGE_SIZE,
      source: s.V.APP_DIRECTORY
    }),
    searchResults: x.A.getSearchResults({
      query: w,
      categoryId: M,
      page: k,
      pageSize: E.PAGE_SIZE,
      source: s.V.APP_DIRECTORY
    })
  })), B = (0, c.cf)([x.A], () => {
    let e = x.A.getSearchResults({
      query: w,
      source: s.V.APP_DIRECTORY
    });
    return null != e ? function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      [v.lj]: e.totalCount
    }, e.countsByCategory) : {}
  }), Y = (0, d.A)(F), z = a.useMemo(() => H === f.e.FETCHING ? Y : F, [H, Y, F]), X = a.useCallback(e => {
    (0, O.JX)({
      query: w,
      categoryId: M,
      page: e
    })
  }, [M, w]), K = a.useCallback(e => {
    (0, j.TR)(I.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: y.ev.SEARCH
    }), (0, O.JX)({
      query: w,
      categoryId: e.id
    })
  }, [w]), W = a.useCallback((e, t) => {
    (0, j.TR)(I.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
      current_page: y.ev.SEARCH,
      application_id: e,
      load_id: null == z ? true : z.loadId,
      search_term: w,
      position: t
    }), n(e)
  }, [null == z ? true : z.loadId, n, w]), Z = (0, b.A)();
  return (0, l.jsxs)("div", {
    className: P.kL,
    children: [(0, l.jsx)(p.A, {
      ref: T,
      onScroll: N,
      children: (0, l.jsxs)("div", {
        className: P.WH,
        children: [R ? null : (0, l.jsx)("div", {
          className: P.AW
        }), (0, l.jsx)(u.A, {
          children: (0, l.jsxs)("div", {
            className: P.hQ,
            children: [(0, l.jsx)("div", {
              className: P.$B,
              children: (0, l.jsx)(S.e, {
                countsByCategory: B,
                selectedCategoryId: M,
                onSelectCategory: K
              })
            }), (0, l.jsx)(A.A, {
              loading: H === f.e.FETCHING,
              children: H === f.e.FETCHED && (null == z || (null == z ? true : z.results.length) === 0) ? (0, l.jsx)(C.A, {
                selectedCategoryId: null != M ? M : Z.id,
                searchAllCategories: () => K(Z)
              }) : (0, l.jsx)("div", {
                className: P.Qs,
                children: null == z ? true : z.results.map((e, t) => {
                  if (e.type === i.j.APPLICATION) {
                    let n = e.data;
                    return (0, l.jsx)(_.A, {
                      application: n,
                      onSelectApplication: e => W(e, t),
                      showCategory: true
                    }, n.id)
                  }
                  return null
                })
              })
            }), (0, l.jsx)(o.mgR, {
              className: P.JV,
              totalCount: Math.min((null != (t = null == z ? true : z.totalPages) ? t : 0) * E.PAGE_SIZE, E.MAX_PAGES * E.PAGE_SIZE),
              pageSize: E.PAGE_SIZE,
              disablePaginationGap: true,
              hideMaxPage: true,
              currentPage: k,
              onPageChange: X
            })]
          })
        })]
      })
    }), (0, l.jsx)("div", {
      className: P.pn,
      children: (0, l.jsx)("div", {
        className: P.jv,
        children: (0, l.jsx)(S.A, {
          countsByCategory: B,
          selectedCategoryId: M,
          onSelectCategory: K
        })
      })
    })]
  })
}