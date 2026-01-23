/** Chunk was on 28636 **/
/** chunk id: 573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk935573 = require("./935573.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk919796 = require("./919796.js"),
  Chunk354138 = require("./354138.js"),
  Chunk111042 = require("./111042.js"),
  Chunk651753 = require("./651753.js"),
  Chunk412461 = require("./412461.js"),
  Chunk867333 = require("./867333.jsx"),
  Chunk487953 = require("./487953.jsx"),
  Chunk111737 = require("./111737.jsx"),
  Chunk310419 = require("./310419.js"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  Chunk689917 = require("./689917.js");
let v = {
    results: [],
    totalPages: 0,
    loadId: ""
  },
  j = function(e) {
    var t;
    let {
      categoryId: n,
      onSelectApplication: j,
      resetScroll: A
    } = e, [y, C] = l.useState(1), O = l.useCallback(e => {
      C(e)
    }, []);
    l.useEffect(() => {
      C(1)
    }, [n]);
    let S = l.useMemo(() => ({
        query: b.EMPTY_QUERY,
        page: y,
        pageSize: b.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      I = (0, a.bG)([u.A], () => u.A.getFetchState({
        query: b.EMPTY_QUERY,
        page: y,
        pageSize: b.PAGE_SIZE,
        categoryId: n
      })),
      E = (0, a.cf)([u.A], () => {
        var e;
        return null != (e = u.A.getSearchResults(S)) ? e : v
      }),
      P = null != (t = (0, o.A)(E)) ? t : v,
      {
        results: N,
        totalPages: T,
        loadId: R
      } = l.useMemo(() => I === d.e.FETCHING ? P : E, [I, P, E]),
      L = l.useMemo(() => null == N ? true : N.filter(e => e.type === i.j.APPLICATION), [N]),
      D = l.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: r,
          guildId: l,
          fetchCounts: i
        } = e;
        i && c.$P({
          query: b.EMPTY_QUERY,
          guildId: l
        }), c.$P({
          query: b.EMPTY_QUERY,
          guildId: l,
          options: {
            page: t,
            pageSize: b.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: r
        })
      }, []);
    l.useEffect(() => {
      A(), D({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, A, D, y]);
    let w = l.useCallback((e, t) => {
      (0, p.TR)(f.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: _.ev.SEARCH,
        application_id: e,
        load_id: R,
        position: t
      }), j(e)
    }, [R, j]);
    return I === d.e.ERROR ? (0, r.jsx)("div", {
      className: x.Un,
      children: (0, r.jsx)(g.A, {
        className: x.z3
      })
    }) : (0, r.jsxs)(h.A, {
      loading: I === d.e.FETCHING,
      children: [(0, r.jsx)("div", {
        className: x.Qs,
        children: null == L ? true : L.map((e, t) => {
          if (e.type === i.j.APPLICATION) {
            let n = e.data;
            return (0, r.jsx)(m.A, {
              application: n,
              onSelectApplication: e => w(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, r.jsx)(s.mgR, {
        className: x.JV,
        totalCount: Math.min(T * b.PAGE_SIZE, b.MAX_PAGES * b.PAGE_SIZE),
        pageSize: b.PAGE_SIZE,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: y,
        onPageChange: O
      })]
    })
  }