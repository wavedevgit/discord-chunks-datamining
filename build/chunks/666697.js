/** Chunk was on 37697 **/
n.d(t, {
  Z: () => P
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  a = n(442837),
  l = n(283836),
  o = n(374939),
  s = n(233374),
  c = n(283293),
  d = n(471518),
  u = n(370210),
  p = n(255333),
  m = n(881294),
  h = n(523311),
  g = n(292191),
  _ = n(258971),
  f = n(133743),
  b = n(680474),
  v = n(571737),
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
  } = e, A = i.useRef(null), L = (0, a.e7)([u.Z], () => u.Z.getApplication(t)), T = (0, a.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
  i.useEffect(() => {
    if (null != t && null == L) {
      let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
      d.i6(t, {
        noCache: e
      })
    }
  }, [t, L]), i.useEffect(() => {
    d.T4({
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
    (null == L ? void 0 : L.storefront_available) && null != t && (0, l.Z)(t)
  }, [null == L ? void 0 : L.storefront_available, t]);
  let D = (0, _.Uc)(),
    M = (0, a.e7)([p.Z], () => p.Z.getFetchState({
      applicationId: null == L ? void 0 : L.id
    })),
    G = (0, a.e7)([p.Z], () => p.Z.getSimilarApplications({
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
    (null == L ? void 0 : L.id) != null && M !== p.M.FETCHING && (0, m.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: _.m_.APPLICATION,
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
          return (0, r.jsx)(b.Z, {
            application: L
          });
        case y.GlobalDiscoveryAppsSections.STORE:
          return (0, r.jsx)(j.Z, {
            application: L
          })
      }
    }, [k, L]),
    V = i.useCallback(e => {
      (0, m.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: t,
        tab_name: e
      }), Z(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
    }, [t]),
    H = k === y.GlobalDiscoveryAppsSections.ABOUT;
  return (0, r.jsx)(c.Z, {
    onScroll: P,
    ref: A,
    children: (0, r.jsx)(o.Z, {
      children: null == L ? null == T || T === u.M.FETCHING ? (0, r.jsx)("div", {
        className: N.centerContainer,
        children: (0, r.jsx)(h.Z, {
          loading: !0
        })
      }) : (0, r.jsx)("div", {
        className: N.centerContainer,
        children: (0, r.jsx)(g.Z, {
          className: N.error
        })
      }) : (0, r.jsxs)("div", {
        className: N.detailContainer,
        children: [(0, r.jsx)(v.Z, {
          application: L,
          onButtonsVisibilityChange: E
        }), (0, r.jsxs)("div", {
          className: N.contentContainer,
          children: [(0, r.jsxs)("div", {
            className: N.contentTabsContainer,
            children: [R && (0, r.jsx)("div", {
              className: N.contentTabs,
              children: (0, r.jsx)(s.Z, {
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