/** Chunk was on 28636 **/
/** chunk id: 244460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
let E = function(e) {
  let {
    applicationId: t,
    onSelectApplication: n,
    onScroll: E,
    initialTab: I,
    onButtonsVisibilityChange: P
  } = e, N = a.useRef(null), R = (0, r.bG)([u.A], () => u.A.getApplication(t)), T = (0, r.bG)([u.A], () => u.A.getApplicationFetchState(t));
  a.useEffect(() => {
    if (null != t && null == R) {
      let e = "true" === new URLSearchParams(location.search).get("preview") || true;
      d.Di(t, {
        noCache: e
      })
    }
  }, [t, R]), a.useEffect(() => {
    d.xZ({
      applicationId: t
    })
  }, [t]), a.useEffect(() => () => P(true), [P]);
  let L = null == R ? true : R.storefront_available,
    [D, w] = a.useState(null != I ? I : y.GlobalDiscoveryAppsSections.ABOUT),
    k = a.useCallback(e => {
      var t;
      null == (t = N.current) || t.scrollTo({
        to: 0
      }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
    }, [n]);
  a.useEffect(() => {
    (null == R ? true : R.storefront_available) && null != t && (0, i.F)(t)
  }, [null == R ? true : R.storefront_available, t]);
  let M = (0, f.Bn)(),
    U = (0, r.bG)([p.A], () => p.A.getFetchState({
      applicationId: null == R ? true : R.id
    })),
    G = (0, r.bG)([p.A], () => p.A.getSimilarApplications({
      applicationId: null == R ? true : R.id
    })),
    V = a.useMemo(() => null == G ? true : G.applications.slice(0, 3), [G]),
    H = {
      displayedSimilarApplications: V,
      previousView: M
    },
    F = a.useRef(H);
  a.useEffect(() => {
    F.current = H
  }), a.useEffect(() => {
    let {
      displayedSimilarApplications: e,
      previousView: t
    } = F.current;
    (null == R ? true : R.id) != null && U !== p.e.FETCHING && (0, h.TR)(O.HAw.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: f.ev.APPLICATION,
      previous_page: null == t ? true : t.type,
      application_id: R.id,
      referrer: document.referrer,
      suggested_application_ids: null == e ? true : e.map(e => e.id)
    })
  }, [null == R ? true : R.id, U]);
  let B = a.useMemo(() => [{
      id: y.GlobalDiscoveryAppsSections.ABOUT,
      label: S.intl.string(S.t.DkyHMK)
    }, {
      id: y.GlobalDiscoveryAppsSections.STORE,
      label: S.intl.string(S.t.jgEXGB)
    }], []),
    Y = a.useMemo(() => {
      if (null == R) return null;
      switch (D) {
        case y.GlobalDiscoveryAppsSections.ABOUT:
          return (0, l.jsx)(x.A, {
            application: R
          });
        case y.GlobalDiscoveryAppsSections.STORE:
          return (0, l.jsx)(_.A, {
            application: R
          })
      }
    }, [D, R]),
    z = a.useCallback(e => {
      (0, h.TR)(O.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: t,
        tab_name: e
      }), w(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, g.Fr)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, g.Fr)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
    }, [t]),
    X = D === y.GlobalDiscoveryAppsSections.ABOUT;
  return (0, l.jsx)(o.A, {
    onScroll: E,
    ref: N,
    children: (0, l.jsx)(s.A, {
      children: null == R ? null == T || T === u.e.FETCHING ? (0, l.jsx)("div", {
        className: C.Dg,
        children: (0, l.jsx)(m.A, {
          loading: true
        })
      }) : (0, l.jsx)("div", {
        className: C.Dg,
        children: (0, l.jsx)(b.A, {
          className: C.z3
        })
      }) : (0, l.jsxs)("div", {
        className: C.nM,
        children: [(0, l.jsx)(v.A, {
          application: R,
          onButtonsVisibilityChange: P
        }), (0, l.jsxs)("div", {
          className: C.hQ,
          children: [(0, l.jsxs)("div", {
            className: C.Ne,
            children: [L && (0, l.jsx)("div", {
              className: C.OF,
              children: (0, l.jsx)(c.A, {
                tabs: B,
                onTabSelect: z,
                selectedTab: D
              })
            }), Y, (0, l.jsx)(A.A, {
              applicationId: t,
              fetchState: U,
              similarApplications: V,
              onSelectApplication: k,
              similarLoadId: null == G ? true : G.loadId
            })]
          }), X && (0, l.jsx)(j.A, {
            className: C.pz,
            application: R,
            view: "side"
          })]
        })]
      })
    })
  })
}