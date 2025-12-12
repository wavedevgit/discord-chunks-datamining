/** Chunk was on 92504 **/
/** chunk id: 683544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk461353 = require("./461353.js");
let C = {
    results: [],
    totalPages: 0,
    loadId: ""
  },
  j = function(e) {
    var t;
    let {
      categoryId: n,
      onSelectApplication: j,
      resetScroll: _
    } = e, [y, I] = r.useState(1), S = r.useCallback(e => {
      I(e)
    }, []);
    r.useEffect(() => {
      I(1)
    }, [n]);
    let P = r.useMemo(() => ({
        query: b.EMPTY_QUERY,
        page: y,
        pageSize: b.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      O = (0, l.e7)([u.Z], () => u.Z.getFetchState({
        query: b.EMPTY_QUERY,
        page: y,
        pageSize: b.PAGE_SIZE,
        categoryId: n
      })),
      E = (0, l.cj)([u.Z], () => {
        var e;
        return null != (e = u.Z.getSearchResults(P)) ? e : C
      }),
      N = null != (t = (0, o.Z)(E)) ? t : C,
      {
        results: T,
        totalPages: A,
        loadId: L
      } = r.useMemo(() => O === d.M.FETCHING ? N : E, [O, N, E]),
      R = r.useMemo(() => null == T ? true : T.filter(e => e.type === i.s.APPLICATION), [T]),
      Z = r.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: a,
          guildId: r,
          fetchCounts: i
        } = e;
        i && c.yC({
          query: b.EMPTY_QUERY,
          guildId: r
        }), c.yC({
          query: b.EMPTY_QUERY,
          guildId: r,
          options: {
            page: t,
            pageSize: b.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: a
        })
      }, []);
    r.useEffect(() => {
      _(), Z({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, _, Z, y]);
    let w = r.useCallback((e, t) => {
      (0, p.zZ)(x.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: g.m_.SEARCH,
        application_id: e,
        load_id: L,
        position: t
      }), j(e)
    }, [L, j]);
    return O === d.M.ERROR ? (0, a.jsx)("div", {
      className: v.errorContainer,
      children: (0, a.jsx)(f.Z, {
        className: v.error
      })
    }) : (0, a.jsxs)(m.Z, {
      loading: O === d.M.FETCHING,
      children: [(0, a.jsx)("div", {
        className: v.content,
        children: null == R ? true : R.map((e, t) => {
          if (e.type === i.s.APPLICATION) {
            let n = e.data;
            return (0, a.jsx)(h.Z, {
              application: n,
              onSelectApplication: e => w(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, a.jsx)(s.DsT, {
        className: v.paginationInput,
        totalCount: Math.min(A * b.PAGE_SIZE, b.MAX_PAGES * b.PAGE_SIZE),
        pageSize: b.PAGE_SIZE,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: y,
        onPageChange: S
      })]
    })
  }