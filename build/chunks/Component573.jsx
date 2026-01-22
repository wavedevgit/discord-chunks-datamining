/** Chunk was on 28636 **/
/** chunk id: 573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
let j = {
    results: [],
    totalPages: 0,
    loadId: ""
  },
  A = function(e) {
    var t;
    let {
      categoryId: n,
      onSelectApplication: A,
      resetScroll: _
    } = e, [y, O] = a.useState(1), S = a.useCallback(e => {
      O(e)
    }, []);
    a.useEffect(() => {
      O(1)
    }, [n]);
    let C = a.useMemo(() => ({
        query: g.EMPTY_QUERY,
        page: y,
        pageSize: g.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      E = (0, i.bG)([u.A], () => u.A.getFetchState({
        query: g.EMPTY_QUERY,
        page: y,
        pageSize: g.PAGE_SIZE,
        categoryId: n
      })),
      I = (0, i.cf)([u.A], () => {
        var e;
        return null != (e = u.A.getSearchResults(C)) ? e : j
      }),
      P = null != (t = (0, c.A)(I)) ? t : j,
      {
        results: N,
        totalPages: R,
        loadId: T
      } = a.useMemo(() => E === d.e.FETCHING ? P : I, [E, P, I]),
      L = a.useMemo(() => null == N ? true : N.filter(e => e.type === r.j.APPLICATION), [N]),
      D = a.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: l,
          guildId: a,
          fetchCounts: r
        } = e;
        r && o.$P({
          query: g.EMPTY_QUERY,
          guildId: a
        }), o.$P({
          query: g.EMPTY_QUERY,
          guildId: a,
          options: {
            page: t,
            pageSize: g.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: l
        })
      }, []);
    a.useEffect(() => {
      _(), D({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, _, D, y]);
    let w = a.useCallback((e, t) => {
      (0, p.TR)(x.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: f.ev.SEARCH,
        application_id: e,
        load_id: T,
        position: t
      }), A(e)
    }, [T, A]);
    return E === d.e.ERROR ? (0, l.jsx)("div", {
      className: v.Un,
      children: (0, l.jsx)(b.A, {
        className: v.z3
      })
    }) : (0, l.jsxs)(h.A, {
      loading: E === d.e.FETCHING,
      children: [(0, l.jsx)("div", {
        className: v.Qs,
        children: null == L ? true : L.map((e, t) => {
          if (e.type === r.j.APPLICATION) {
            let n = e.data;
            return (0, l.jsx)(m.A, {
              application: n,
              onSelectApplication: e => w(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, l.jsx)(s.mgR, {
        className: v.JV,
        totalCount: Math.min(R * g.PAGE_SIZE, g.MAX_PAGES * g.PAGE_SIZE),
        pageSize: g.PAGE_SIZE,
        disablePaginationGap: true,
        hideMaxPage: true,
        currentPage: y,
        onPageChange: S
      })]
    })
  }