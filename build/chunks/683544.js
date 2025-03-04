/** Chunk was on 37697 **/
n.d(t, {
  Z: () => C
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  a = n(209173),
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
  _ = n(258971),
  f = n(979007),
  b = n(981631),
  v = n(99506);
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
    } = e, [y, I] = i.useState(1), O = i.useCallback(e => {
      I(e)
    }, []);
    i.useEffect(() => {
      I(1)
    }, [n]);
    let N = i.useMemo(() => ({
        query: f.EMPTY_QUERY,
        page: y,
        pageSize: f.PAGE_SIZE,
        categoryId: n
      }), [y, n]),
      P = (0, l.e7)([u.Z], () => u.Z.getFetchState({
        query: f.EMPTY_QUERY,
        page: y,
        pageSize: f.PAGE_SIZE,
        categoryId: n
      })),
      S = (0, l.cj)([u.Z], () => {
        var e;
        return null !== (e = u.Z.getSearchResults(N)) && void 0 !== e ? e : x
      }),
      E = null !== (t = (0, s.Z)(S)) && void 0 !== t ? t : x,
      {
        results: A,
        totalPages: L,
        loadId: T
      } = i.useMemo(() => P === d.M.FETCHING ? E : S, [P, E, S]),
      R = i.useMemo(() => null == A ? void 0 : A.filter(e => e.type === a.s.APPLICATION), [A]),
      k = i.useCallback(e => {
        let {
          page: t,
          activeCategoryId: n,
          onSuccessCallback: r,
          guildId: i,
          fetchCounts: a
        } = e;
        a && c.yC({
          query: f.EMPTY_QUERY,
          guildId: i
        }), c.yC({
          query: f.EMPTY_QUERY,
          guildId: i,
          options: {
            page: t,
            pageSize: f.PAGE_SIZE,
            categoryId: n
          },
          onSuccessCallback: r
        })
      }, []);
    i.useEffect(() => {
      j(), k({
        page: y,
        activeCategoryId: n,
        onSuccessCallback: () => {}
      })
    }, [n, j, k, y]);
    let Z = i.useCallback((e, t) => {
      (0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
        current_page: _.m_.SEARCH,
        application_id: e,
        load_id: T,
        position: t
      }), C(e)
    }, [T, C]);
    return P === d.M.ERROR ? (0, r.jsx)("div", {
      className: v.errorContainer,
      children: (0, r.jsx)(g.Z, {
        className: v.error
      })
    }) : (0, r.jsxs)(m.Z, {
      loading: P === d.M.FETCHING,
      children: [(0, r.jsx)("div", {
        className: v.content,
        children: null == R ? void 0 : R.map((e, t) => {
          if (e.type === a.s.APPLICATION) {
            let n = e.data;
            return (0, r.jsx)(h.Z, {
              application: n,
              onSelectApplication: e => Z(e, t)
            }, n.id)
          }
          return null
        })
      }), (0, r.jsx)(o.DsT, {
        className: v.paginationInput,
        totalCount: Math.min(L * f.PAGE_SIZE, f.MAX_PAGES * f.PAGE_SIZE),
        pageSize: f.PAGE_SIZE,
        disablePaginationGap: !0,
        hideMaxPage: !0,
        currentPage: y,
        onPageChange: O
      })]
    })
  }