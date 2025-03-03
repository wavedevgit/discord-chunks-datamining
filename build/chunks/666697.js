/** Chunk was on 37697 **/
n.d(t, {
  Z: () => P
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  a = n(442837),
  l = n(674588),
  o = n(264043),
  s = n(303383),
  c = n(125909),
  d = n(283836),
  u = n(374939),
  p = n(233374),
  m = n(283293),
  h = n(881294),
  g = n(292191),
  f = n(258971),
  _ = n(133743),
  v = n(680474),
  b = n(571737),
  x = n(796150),
  C = n(946542),
  j = n(213746),
  y = n(979007),
  I = n(981631),
  O = n(388032),
  N = n(59637);
let P = function(e) {
  let {
    applicationId: t,
    onSelectApplication: n,
    onScroll: P,
    initialTab: S,
    onButtonsVisibilityChange: E
  } = e, A = i.useRef(null), L = (0, a.e7)([o.Z], () => o.Z.getApplication(t)), T = (0, a.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
  i.useEffect(() => {
    if (null != t && null == L) {
      let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
      l.i6(t, {
        noCache: e
      })
    }
  }, [t, L]), i.useEffect(() => {
    l.T4({
      applicationId: t
    })
  }, [t]), i.useEffect(() => () => E(!0), [E]);
  let R = null == L ? void 0 : L.storefront_available,
    [k, Z] = i.useState(null != S ? S : y.GlobalDiscoveryAppsSections.ABOUT),
    w = i.useCallback(e => {
      var t;
      null === (t = A.current) || void 0 === t || t.scrollTo({
        to: 0
      }), Z(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
    }, [n]);
  i.useEffect(() => {
    (null == L ? void 0 : L.storefront_available) && null != t && (0, d.Z)(t)
  }, [null == L ? void 0 : L.storefront_available, t]);
  let D = (0, f.Uc)(),
    M = (0, a.e7)([s.Z], () => s.Z.getFetchState({
      applicationId: null == L ? void 0 : L.id
    })),
    G = (0, a.e7)([s.Z], () => s.Z.getSimilarApplications({
      applicationId: null == L ? void 0 : L.id
    })),
    z = i.useMemo(() => null == G ? void 0 : G.applications.slice(0, 3), [G]),
    B = {
      displayedSimilarApplications: z,
      previousView: D
    },
    U = i.useRef(B);
  i.useEffect(() => {
    U.current = B
  }), i.useEffect(() => {
    let {
      displayedSimilarApplications: e,
      previousView: t
    } = U.current;
    (null == L ? void 0 : L.id) != null && M !== s.M.FETCHING && (0, h.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: f.m_.APPLICATION,
      previous_page: null == t ? void 0 : t.type,
      application_id: L.id,
      referrer: document.referrer,
      suggested_application_ids: null == e ? void 0 : e.map(e => e.id)
    })
  }, [null == L ? void 0 : L.id, M]);
  let W = i.useMemo(() => [{
      id: y.GlobalDiscoveryAppsSections.ABOUT,
      label: O.NW.string(O.t.DkyHMD)
    }, {
      id: y.GlobalDiscoveryAppsSections.STORE,
      label: O.NW.string(O.t.jgEXGB)
    }], []),
    F = i.useMemo(() => {
      if (null == L) return null;
      switch (k) {
        case y.GlobalDiscoveryAppsSections.ABOUT:
          return (0, r.jsx)(v.Z, {
            application: L
          });
        case y.GlobalDiscoveryAppsSections.STORE:
          return (0, r.jsx)(j.Z, {
            application: L
          })
      }
    }, [k, L]),
    V = i.useCallback(e => {
      (0, h.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: t,
        tab_name: e
      }), Z(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, _.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, _.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
    }, [t]),
    H = k === y.GlobalDiscoveryAppsSections.ABOUT;
  return (0, r.jsx)(m.Z, {
    onScroll: P,
    ref: A,
    children: (0, r.jsx)(u.Z, {
      children: null == L ? null == T || T === o.M.FETCHING ? (0, r.jsx)("div", {
        className: N.centerContainer,
        children: (0, r.jsx)(c.Z, {
          loading: !0
        })
      }) : (0, r.jsx)("div", {
        className: N.centerContainer,
        children: (0, r.jsx)(g.Z, {
          className: N.error
        })
      }) : (0, r.jsxs)("div", {
        className: N.detailContainer,
        children: [(0, r.jsx)(b.Z, {
          application: L,
          onButtonsVisibilityChange: E
        }), (0, r.jsxs)("div", {
          className: N.contentContainer,
          children: [(0, r.jsxs)("div", {
            className: N.contentTabsContainer,
            children: [R && (0, r.jsx)("div", {
              className: N.contentTabs,
              children: (0, r.jsx)(p.Z, {
                tabs: W,
                onTabSelect: V,
                selectedTab: k
              })
            }), F, (0, r.jsx)(C.Z, {
              applicationId: t,
              fetchState: M,
              similarApplications: z,
              onSelectApplication: w,
              similarLoadId: null == G ? void 0 : G.loadId
            })]
          }), H && (0, r.jsx)(x.Z, {
            className: N.sidebar,
            application: L,
            view: "side"
          })]
        })]
      })
    })
  })
}