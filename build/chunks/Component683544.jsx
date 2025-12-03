/** Chunk was on 69844 **/
/** chunk id: 683544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk209173 = require("./209173.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699682 = require("./699682.js"),
  Chunk471518 = require("./471518.js"),
  Chunk425986 = require("./425986.js"),
  Chunk177653 = require("./177653.js"),
  Chunk881294 = require("./881294.js"),
  Chunk523311 = require("./523311.jsx"),
  Chunk797908 = require("./797908.jsx"),
  Chunk292191 = require("./292191.jsx"),
  Chunk258971 = require("./258971.js"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk370010 = require("./370010.js");
let v = {
    results: [],
    totalPages: 0,
    loadId: ""
  },
  C = function(e) {
    var t;
    let {
      categoryId: n,
      onSelectApplication: C,
      resetScroll: j
    } = e, [y, I] = i.useState(1), S = i.useCallback(e => {
      I(e)
    }, []);
    i.useEffect(() => {
      I(1)
    }, [n]);
    let P = i.useMemo(() => ({
        query: _.EMPTY_QUERY,
        page: y,
        pageSize: _.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      O = (0, l.e7)([u.Z], () => u.Z.getFetchState({
        query: _.EMPTY_QUERY,
        page: y,
        pageSize: _.PAGE_SIZE,
        categoryId: n
      })),
      E = (0, l.cj)([u.Z], () => {
        var e;
        return null != (e = u.Z.getSearchResults(P)) ? e : v
      }),
      N = null != (t = (0, o.Z)(E)) ? t : v,
      {
        results: T,
        totalPages: A,
        loadId: L
      } = i.useMemo(() => O === d.M.FETCHING ? N : E, [O, N, E]),
      R = i.useMemo(() => null == T ? true : T.filter(e => e.type === a.s.APPLICATION), [T]),
      Z = i.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: r,
          guildId: i,
          fetchCounts: a
        } = e;
        a && c.yC({
          query: _.EMPTY_QUERY,
          guildId: i
        }), c.yC({
          query: _.EMPTY_QUERY,
          guildId: i,
          options: {
            page: t,
            pageSize: _.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: r
        })
      }, []);
    i.useEffect(() => {
      j(), Z({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, j, Z, y]);
    let w = i.useCallback((e, t) => {
      (0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: f.m_.SEARCH,
        application_id: e,
        load_id: L,
        position: t
      }), C(e)
    }, [L, C]);
    return O === d.M.ERROR ? (0, r.jsx)("div", {
      className: x.errorContainer,
      children: (0, r.jsx)(g.Z, {
        className: x.error
      })
    }) : (0, r.jsxs)(m.Z, {
      loading: O === d.M.FETCHING,
      children: [(0, r.jsx)("div", {
        className: x.content,
        children: null == R ? true : R.map((e, t) => {
          if (e.type === a.s.APPLICATION) {
            let n = e.data;
            return (0, r.jsx)(h.Z, {
              application: n,
              onSelectApplication: e => w(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, r.jsx)(s.DsT, {
        className: x.paginationInput,
        totalCount: Math.min(A * _.PAGE_SIZE, _.MAX_PAGES * _.PAGE_SIZE),
        pageSize: _.PAGE_SIZE,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: y,
        onPageChange: S
      })]
    })
  }