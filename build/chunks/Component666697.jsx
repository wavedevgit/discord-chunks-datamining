/** Chunk was on 69844 **/
/** chunk id: 666697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk283836 = require("./283836.js"),
  Chunk374939 = require("./374939.jsx"),
  Chunk233374 = require("./233374.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk255333 = require("./255333.js"),
  Chunk881294 = require("./881294.js"),
  Chunk523311 = require("./523311.jsx"),
  Chunk292191 = require("./292191.jsx"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk680474 = require("./680474.jsx"),
  Chunk571737 = require("./571737.jsx"),
  Chunk796150 = require("./796150.jsx"),
  Chunk946542 = require("./946542.jsx"),
  Chunk213746 = require("./213746.jsx"),
  Chunk979007 = require("./979007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352677 = require("./352677.js");
let O = function(e) {
  let {
    applicationId: t,
    onSelectApplication: n,
    onScroll: O,
    initialTab: E,
    onButtonsVisibilityChange: N
  } = e, T = a.useRef(null), A = (0, i.e7)([u.Z], () => u.Z.getApplication(t)), L = (0, i.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
  a.useEffect(() => {
    if (null != t && null == A) {
      let e = "true" === new URLSearchParams(location.search).get("preview") || true;
      d.i6(t, {
        noCache: e
      })
    }
  }, [t, A]), a.useEffect(() => {
    d.T4({
      applicationId: t
    })
  }, [t]), a.useEffect(() => () => N(true), [N]);
  let R = null == A ? true : A.storefront_available,
    [Z, w] = a.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
    D = a.useCallback(e => {
      var t;
      null == (t = T.current) || t.scrollTo({
        to: 0
      }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
    }, [n]);
  a.useEffect(() => {
    (null == A ? true : A.storefront_available) && null != t && (0, l.Z)(t)
  }, [null == A ? true : A.storefront_available, t]);
  let k = (0, _.Uc)(),
    M = (0, i.e7)([p.Z], () => p.Z.getFetchState({
      applicationId: null == A ? true : A.id
    })),
    G = (0, i.e7)([p.Z], () => p.Z.getSimilarApplications({
      applicationId: null == A ? true : A.id
    })),
    B = a.useMemo(() => null == G ? true : G.applications.slice(0, 3), [G]),
    U = {
      displayedSimilarApplications: B,
      previousView: k
    },
    F = a.useRef(U);
  a.useEffect(() => {
    F.current = U
  }), a.useEffect(() => {
    let {
      displayedSimilarApplications: e,
      previousView: t
    } = F.current;
    (null == A ? true : A.id) != null && M !== p.M.FETCHING && (0, m.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: _.m_.APPLICATION,
      previous_page: null == t ? true : t.type,
      application_id: A.id,
      referrer: document.referrer,
      suggested_application_ids: null == e ? true : e.map(e => e.id)
    })
  }, [null == A ? true : A.id, M]);
  let z = a.useMemo(() => [{
      id: y.GlobalDiscoveryAppsSections.ABOUT,
      label: S.intl.string(S.t.DkyHMK)
    }, {
      id: y.GlobalDiscoveryAppsSections.STORE,
      label: S.intl.string(S.t.jgEXGB)
    }], []),
    H = a.useMemo(() => {
      if (null == A) return null;
      switch (Z) {
        case y.GlobalDiscoveryAppsSections.ABOUT:
          return (0, r.jsx)(b.Z, {
            application: A
          });
        case y.GlobalDiscoveryAppsSections.STORE:
          return (0, r.jsx)(j.Z, {
            application: A
          })
      }
    }, [Z, A]),
    V = a.useCallback(e => {
      (0, m.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: t,
        tab_name: e
      }), w(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
    }, [t]),
    Y = Z === y.GlobalDiscoveryAppsSections.ABOUT;
  return (0, r.jsx)(c.Z, {
    onScroll: O,
    ref: T,
    children: (0, r.jsx)(s.Z, {
      children: null == A ? null == L || L === u.M.FETCHING ? (0, r.jsx)("div", {
        className: P.centerContainer,
        children: (0, r.jsx)(h.Z, {
          loading: true
        })
      }) : (0, r.jsx)("div", {
        className: P.centerContainer,
        children: (0, r.jsx)(g.Z, {
          className: P.error
        })
      }) : (0, r.jsxs)("div", {
        className: P.detailContainer,
        children: [(0, r.jsx)(x.Z, {
          application: A,
          onButtonsVisibilityChange: N
        }), (0, r.jsxs)("div", {
          className: P.contentContainer,
          children: [(0, r.jsxs)("div", {
            className: P.contentTabsContainer,
            children: [R && (0, r.jsx)("div", {
              className: P.contentTabs,
              children: (0, r.jsx)(o.Z, {
                tabs: z,
                onTabSelect: V,
                selectedTab: Z
              })
            }), H, (0, r.jsx)(C.Z, {
              applicationId: t,
              fetchState: M,
              similarApplications: B,
              onSelectApplication: D,
              similarLoadId: null == G ? true : G.loadId
            })]
          }), Y && (0, r.jsx)(v.Z, {
            className: P.sidebar,
            application: A,
            view: "side"
          })]
        })]
      })
    })
  })
}