/** Chunk was on 37697 **/
n.d(t, {
  Z: () => A
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  a = n(512969),
  l = n(209173),
  o = n(288385),
  s = n(442837),
  c = n(481060),
  d = n(110924),
  u = n(674588),
  p = n(264043),
  m = n(894653),
  h = n(809547),
  g = n(34674),
  f = n(125909),
  _ = n(374939),
  v = n(283293),
  b = n(314897),
  x = n(493646),
  C = n(881294),
  j = n(797908),
  y = n(258971),
  I = n(133743),
  O = n(120549),
  N = n(188607),
  P = n(979007),
  S = n(981631),
  E = n(951949);

function A(e) {
  var t;
  let {
    onSelectApplication: n,
    onScroll: A
  } = e, L = (0, s.e7)([b.default], () => b.default.isAuthenticated()), T = i.useRef(null), R = (0, a.TH)(), k = i.useRef(null), {
    query: Z,
    page: w,
    categoryId: D
  } = i.useMemo(() => {
    var e, t;
    let n = new URLSearchParams(R.search),
      r = n.get("page"),
      i = null != r ? Number(r) : 1;
    return {
      query: null !== (e = n.get("q")) && void 0 !== e ? e : "",
      page: i,
      categoryId: null !== (t = Number(n.get("category_id"))) && void 0 !== t ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
    }
  }, [R.search]), M = (0, s.e7)([m.Z], () => m.Z.getCategories()), G = i.useMemo(() => null == M ? void 0 : M.find(e => e.id === D), [M, D]), z = i.useCallback(e => {
    (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCHED, {
      search_term: Z,
      num_results: e,
      current_page: y.m_.SEARCH,
      result_page: w,
      category: null == G ? void 0 : G.name,
      category_id: null == G ? void 0 : G.id
    })
  }, [Z, w, null == G ? void 0 : G.name, null == G ? void 0 : G.id]);
  i.useEffect(() => {
    var e;
    null === (e = T.current) || void 0 === e || e.scrollTo({
      to: 0
    }), Z !== k.current && (k.current = Z, u.yC({
      query: Z,
      options: {
        source: o.F.APP_DIRECTORY
      }
    })), u.yC({
      query: Z,
      options: {
        categoryId: D,
        page: w,
        pageSize: P.PAGE_SIZE,
        source: o.F.APP_DIRECTORY
      },
      onSuccessCallback: z
    })
  }, [D, w, Z, z]);
  let {
    fetchState: B,
    searchResults: U
  } = (0, s.cj)([h.Z], () => ({
    fetchState: h.Z.getFetchState({
      query: Z,
      categoryId: D,
      page: w,
      pageSize: P.PAGE_SIZE,
      source: o.F.APP_DIRECTORY
    }),
    searchResults: h.Z.getSearchResults({
      query: Z,
      categoryId: D,
      page: w,
      pageSize: P.PAGE_SIZE,
      source: o.F.APP_DIRECTORY
    })
  })), W = (0, s.cj)([h.Z], () => {
    let e = h.Z.getSearchResults({
      query: Z,
      source: o.F.APP_DIRECTORY
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
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      [g.MU]: e.totalCount
    }, e.countsByCategory) : {}
  }), F = (0, d.Z)(U), V = i.useMemo(() => B === p.M.FETCHING ? F : U, [B, F, U]), H = i.useCallback(e => {
    (0, I.pR)({
      query: Z,
      categoryId: D,
      page: e
    })
  }, [D, Z]), Y = i.useCallback(e => {
    (0, C.zZ)(S.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: y.m_.SEARCH
    }), (0, I.pR)({
      query: Z,
      categoryId: e.id
    })
  }, [Z]), X = i.useCallback((e, t) => {
    (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
      current_page: y.m_.SEARCH,
      application_id: e,
      load_id: null == V ? void 0 : V.loadId,
      search_term: Z,
      position: t
    }), n(e)
  }, [null == V ? void 0 : V.loadId, n, Z]), K = (0, x.K)();
  return (0, r.jsxs)("div", {
    className: E.container,
    children: [(0, r.jsx)(v.Z, {
      ref: T,
      onScroll: A,
      children: (0, r.jsxs)("div", {
        className: E.innerContainer,
        children: [L ? null : (0, r.jsx)("div", {
          className: E.centeringBuffer
        }), (0, r.jsx)(_.Z, {
          children: (0, r.jsxs)("div", {
            className: E.contentContainer,
            children: [(0, r.jsx)("div", {
              className: E.topFilterContainer,
              children: (0, r.jsx)(O.V, {
                countsByCategory: W,
                selectedCategoryId: D,
                onSelectCategory: Y
              })
            }), (0, r.jsx)(f.Z, {
              loading: B === p.M.FETCHING,
              children: B === p.M.FETCHED && (null == V || (null == V ? void 0 : V.results.length) === 0) ? (0, r.jsx)(N.Z, {
                selectedCategoryId: null != D ? D : K.id,
                searchAllCategories: () => Y(K)
              }) : (0, r.jsx)("div", {
                className: E.content,
                children: null == V ? void 0 : V.results.map((e, t) => {
                  if (e.type === l.s.APPLICATION) {
                    let n = e.data;
                    return (0, r.jsx)(j.Z, {
                      application: n,
                      onSelectApplication: e => X(e, t),
                      showCategory: !0
                    }, n.id)
                  }
                  return null
                })
              })
            }), (0, r.jsx)(c.DsT, {
              className: E.paginationInput,
              totalCount: Math.min((null !== (t = null == V ? void 0 : V.totalPages) && void 0 !== t ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
              pageSize: P.PAGE_SIZE,
              disablePaginationGap: !0,
              hideMaxPage: !0,
              currentPage: w,
              onPageChange: H
            })]
          })
        })]
      })
    }), (0, r.jsx)("div", {
      className: E.sideFilterContainer,
      children: (0, r.jsx)("div", {
        className: E.sideFilterContent,
        children: (0, r.jsx)(O.Z, {
          countsByCategory: W,
          selectedCategoryId: D,
          onSelectCategory: Y
        })
      })
    })]
  })
}