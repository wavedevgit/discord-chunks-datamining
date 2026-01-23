/** Chunk was on 28636 **/
/** chunk id: 244460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk123791 = require("./123791.js"),
  Chunk979590 = require("./979590.jsx"),
  Chunk45758 = require("./45758.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk354138 = require("./354138.js"),
  Chunk212534 = require("./212534.js"),
  Chunk82293 = require("./82293.js"),
  Chunk412461 = require("./412461.js"),
  Chunk867333 = require("./867333.jsx"),
  Chunk111737 = require("./111737.jsx"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk241837 = require("./241837.jsx"),
  Chunk116219 = require("./116219.jsx"),
  Chunk475356 = require("./475356.jsx"),
  Chunk489253 = require("./489253.jsx"),
  Chunk247165 = require("./247165.jsx"),
  Chunk435220 = require("./435220.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk312222 = require("./312222.js");
let I = function(e) {
  let {
    applicationId: t,
    onSelectApplication: n,
    onScroll: I,
    initialTab: E,
    onButtonsVisibilityChange: P
  } = e, N = l.useRef(null), T = (0, i.bG)([u.A], () => u.A.getApplication(t)), R = (0, i.bG)([u.A], () => u.A.getApplicationFetchState(t));
  l.useEffect(() => {
    if (null != t && null == T) {
      let e = "true" === new URLSearchParams(location.search).get("preview") || true;
      d.Di(t, {
        noCache: e
      })
    }
  }, [t, T]), l.useEffect(() => {
    d.xZ({
      applicationId: t
    })
  }, [t]), l.useEffect(() => () => P(true), [P]);
  let L = null == T ? true : T.storefront_available,
    [D, w] = l.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
    k = l.useCallback(e => {
      var t;
      null == (t = N.current) || t.scrollTo({
        to: 0
      }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
    }, [n]);
  l.useEffect(() => {
    (null == T ? true : T.storefront_available) && null != t && (0, a.F)(t)
  }, [null == T ? true : T.storefront_available, t]);
  let M = (0, _.Bn)(),
    G = (0, i.bG)([p.A], () => p.A.getFetchState({
      applicationId: null == T ? true : T.id
    })),
    U = (0, i.bG)([p.A], () => p.A.getSimilarApplications({
      applicationId: null == T ? true : T.id
    })),
    H = l.useMemo(() => null == U ? true : U.applications.slice(0, 3), [U]),
    V = {
      displayedSimilarApplications: H,
      previousView: M
    },
    B = l.useRef(V);
  l.useEffect(() => {
    B.current = V
  }), l.useEffect(() => {
    let {
      displayedSimilarApplications: e,
      previousView: t
    } = B.current;
    (null == T ? true : T.id) != null && G !== p.e.FETCHING && (0, h.TR)(C.HAw.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: _.ev.APPLICATION,
      previous_page: null == t ? true : t.type,
      application_id: T.id,
      referrer: document.referrer,
      suggested_application_ids: null == e ? true : e.map(e => e.id)
    })
  }, [null == T ? true : T.id, G]);
  let F = l.useMemo(() => [{
      id: y.GlobalDiscoveryAppsSections.ABOUT,
      label: O.intl.string(O.t.DkyHMK)
    }, {
      id: y.GlobalDiscoveryAppsSections.STORE,
      label: O.intl.string(O.t.jgEXGB)
    }], []),
    Y = l.useMemo(() => {
      if (null == T) return null;
      switch (D) {
        case y.GlobalDiscoveryAppsSections.ABOUT:
          return (0, r.jsx)(f.A, {
            application: T
          });
        case y.GlobalDiscoveryAppsSections.STORE:
          return (0, r.jsx)(A.A, {
            application: T
          })
      }
    }, [D, T]),
    z = l.useCallback(e => {
      (0, h.TR)(C.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: t,
        tab_name: e
      }), w(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, b.Fr)(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, b.Fr)(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
    }, [t]),
    X = D === y.GlobalDiscoveryAppsSections.ABOUT;
  return (0, r.jsx)(c.A, {
    onScroll: I,
    ref: N,
    children: (0, r.jsx)(s.A, {
      children: null == T ? null == R || R === u.e.FETCHING ? (0, r.jsx)("div", {
        className: S.Dg,
        children: (0, r.jsx)(m.A, {
          loading: true
        })
      }) : (0, r.jsx)("div", {
        className: S.Dg,
        children: (0, r.jsx)(g.A, {
          className: S.z3
        })
      }) : (0, r.jsxs)("div", {
        className: S.nM,
        children: [(0, r.jsx)(x.A, {
          application: T,
          onButtonsVisibilityChange: P
        }), (0, r.jsxs)("div", {
          className: S.hQ,
          children: [(0, r.jsxs)("div", {
            className: S.Ne,
            children: [L && (0, r.jsx)("div", {
              className: S.OF,
              children: (0, r.jsx)(o.A, {
                tabs: F,
                onTabSelect: z,
                selectedTab: D
              })
            }), Y, (0, r.jsx)(j.A, {
              applicationId: t,
              fetchState: G,
              similarApplications: H,
              onSelectApplication: k,
              similarLoadId: null == U ? true : U.loadId
            })]
          }), X && (0, r.jsx)(v.A, {
            className: S.pz,
            application: T,
            view: "side"
          })]
        })]
      })
    })
  })
}