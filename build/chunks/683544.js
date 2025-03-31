/** Chunk was on 97231 **/
n.d(t, {
  Z: () => C
}), n(47120), n(301563);
var r = n(200651),
  a = n(192379),
  i = n(209173),
  l = n(399606),
  o = n(481060),
  s = n(699682),
  c = n(471518),
  d = n(425986),
  u = n(177653),
  p = n(881294),
  m = n(523311),
  h = n(797908),
  g = n(292191),
  f = n(258971),
  _ = n(979007),
  b = n(981631),
  v = n(115803);
let x = {
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
    } = e, [y, O] = a.useState(1), P = a.useCallback(e => {
      O(e)
    }, []);
    a.useEffect(() => {
      O(1)
    }, [n]);
    let I = a.useMemo(() => ({
        query: _.EMPTY_QUERY,
        page: y,
        pageSize: _.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      N = (0, l.e7)([u.Z], () => u.Z.getFetchState({
        query: _.EMPTY_QUERY,
        page: y,
        pageSize: _.PAGE_SIZE,
        categoryId: n
      })),
      S = (0, l.cj)([u.Z], () => {
        var e;
        return null !== (e = u.Z.getSearchResults(I)) && void 0 !== e ? e : x
      }),
      E = null !== (t = (0, s.Z)(S)) && void 0 !== t ? t : x,
      {
        results: T,
        totalPages: A,
        loadId: L
      } = a.useMemo(() => N === d.M.FETCHING ? E : S, [N, E, S]),
      R = a.useMemo(() => null == T ? void 0 : T.filter(e => e.type === i.s.APPLICATION), [T]),
      w = a.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: r,
          guildId: a,
          fetchCounts: i
        } = e;
        i && c.yC({
          query: _.EMPTY_QUERY,
          guildId: a
        }), c.yC({
          query: _.EMPTY_QUERY,
          guildId: a,
          options: {
            page: t,
            pageSize: _.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: r
        })
      }, []);
    a.useEffect(() => {
      j(), w({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, j, w, y]);
    let k = a.useCallback((e, t) => {
      (0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: f.m_.SEARCH,
        application_id: e,
        load_id: L,
        position: t
      }), C(e)
    }, [L, C]);
    return N === d.M.ERROR ? (0, r.jsx)("div", {
      className: v.errorContainer,
      children: (0, r.jsx)(g.Z, {
        className: v.error
      })
    }) : (0, r.jsxs)(m.Z, {
      loading: N === d.M.FETCHING,
      children: [(0, r.jsx)("div", {
        className: v.content,
        children: null == R ? void 0 : R.map((e, t) => {
          if (e.type === i.s.APPLICATION) {
            let n = e.data;
            return (0, r.jsx)(h.Z, {
              application: n,
              onSelectApplication: e => k(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, r.jsx)(o.DsT, {
        className: v.paginationInput,
        totalCount: Math.min(A * _.PAGE_SIZE, _.MAX_PAGES * _.PAGE_SIZE),
        pageSize: _.PAGE_SIZE,
        disablePaginationGap: !0,
        hideMaxPage: !0,
        currentPage: y,
        onPageChange: P
      })]
    })
  }