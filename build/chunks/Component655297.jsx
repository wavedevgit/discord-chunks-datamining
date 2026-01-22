/** Chunk was on 67878 **/
/** chunk id: 655297, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk398590 = require("./398590.js"),
  Chunk252452 = require("./252452.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk83257 = require("./83257.jsx"),
  Chunk475743 = require("./475743.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk247901 = require("./247901.js"),
  Chunk772786 = require("./772786.js"),
  Chunk890687 = require("./890687.js"),
  Chunk97469 = require("./97469.js"),
  Chunk628965 = require("./628965.js"),
  Chunk115063 = require("./115063.js"),
  Chunk544028 = require("./544028.js"),
  Chunk360619 = require("./360619.js"),
  Chunk987281 = require("./987281.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let k = Chunk64700.forwardRef(function() {
    f.A.trackExposure({
      location: "cd25e4_1"
    });
    let e = (0, s.bG)([y.A], () => y.A.theme),
      t = (0, h.NC)(),
      {
        section: n,
        subsection: k,
        analyticsLocation: j,
        analyticsLocations: x
      } = (0, s.cf)([S.A], () => {
        let e = S.A.getSection(),
          t = S.A.getSubsection();
        return {
          section: e,
          subsection: t,
          analyticsLocation: S.A.getAnalyticsLocation(),
          analyticsLocations: S.A.getAnalyticsLocations()
        }
      }),
      C = (0, u.A)(n),
      T = (0, u.A)(k),
      {
        analyticsLocations: w
      } = (0, d.Ay)(A.A.USER_SETTINGS);
    a.useEffect(() => {
      null != n && (n !== C || k !== T) && (0, p.iY)({
        destinationPane: n,
        originPane: null != C ? C : null,
        source: j,
        subsection: k,
        locationStack: x
      })
    }, [n, C, k, T, j, x]);
    let {
      hasSearchResults: v,
      searchResults: G
    } = (0, L.V)(), N = (0, E.Lu)(), R = (0, E.g2)(G), U = a.useMemo(() => v ? R : N, [v, R, N]), I = (0, g.g)(), P = (0, b.cu)(), B = a.useCallback(e => {
      l.A.setSection(e)
    }, []);
    return (0, i.jsx)(d.f5, {
      value: w,
      children: (0, i.jsx)(c.A, {
        root: true,
        page: _.liQ.USER_SETTINGS,
        children: (0, i.jsx)(r.Ay, {
          theme: e,
          title: m.intl.string(m.t.cduTBL),
          sidebarTheme: t,
          section: n,
          onSetSection: B,
          onClose: o.jH,
          sections: U,
          isEligibleForPomelo: I,
          questsForBadge: P,
          showUserSettingsSearch: true
        })
      })
    })
  }),
  j = Chunk64700.forwardRef(function() {
    let e = (0, s.bG)([S.A], () => S.A.getAnalyticsLocations()),
      {
        analyticsLocations: t
      } = (0, d.Ay)(e);
    return (0, i.jsx)(d.f5, {
      value: t,
      children: (0, i.jsx)(k, {})
    })
  })