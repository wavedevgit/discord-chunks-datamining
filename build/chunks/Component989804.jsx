/** Chunk was on 69470 **/
/** chunk id: 989804, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk503089 = require("./503089.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk254901 = require("./254901.js"),
  Chunk45493 = require("./45493.js"),
  Chunk332473 = require("./332473.js"),
  Chunk313481 = require("./313481.js"),
  Chunk984802 = require("./984802.js"),
  Chunk663389 = require("./663389.js"),
  Chunk88658 = require("./88658.js"),
  Chunk210887 = require("./210887.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let y = Chunk473749.forwardRef(function() {
    Chunk45493.Z.trackExposure({
      location: "cd25e4_1"
    }), Chunk254901.Z.useExperiment({
      location: "user_setting_auto"
    }, {
      autoTrackExposure: false
    }), Chunk254901.Z.trackExposure({
      location: "user_setting_manual"
    });
    let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
      t = (0, Chunk984802.Ll)(),
      {
        section: n,
        subsection: y,
        analyticsLocation: A,
        analyticsLocations: T
      } = (0, Chunk442837.cj)([Chunk663389.Z], () => {
        let e = Chunk663389.Z.getSection(),
          t = Chunk663389.Z.getSubsection();
        return {
          section: module,
          subsection: exports,
          analyticsLocation: Chunk663389.Z.getAnalyticsLocation(),
          analyticsLocations: Chunk663389.Z.getAnalyticsLocations()
        }
      }),
      j = (0, Chunk110924.Z)(require),
      P = (0, Chunk110924.Z)(y),
      {
        analyticsLocations: w
      } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS);
    Chunk473749.useEffect(() => {
      null != require && (require !== j || y !== P) && (0, Chunk88658.QB)({
        destinationPane: require,
        originPane: null != j ? j : null,
        source: A,
        subsection: y,
        locationStack: T
      })
    }, [require, j, y, P, A, T]);
    let {
      hasSearchResults: C,
      searchResults: v
    } = (0, Chunk839469.F)(), G = (0, Chunk991346.VO)(), R = (0, Chunk991346.q8)(v), U = Chunk473749.useMemo(() => C ? R : G, [C, R, G]), B = (0, Chunk332473.b)(), F = (0, Chunk313481.iO)(), I = Chunk473749.useCallback(e => {
      l.Z.setSection(e)
    }, []);
    return (0, Chunk54381.jsx)(Chunk906732.Gt, {
      value: w,
      children: (0, Chunk54381.jsx)(Chunk410575.Z, {
        root: true,
        page: Chunk981631.ZY5.USER_SETTINGS,
        children: (0, Chunk54381.jsx)(Chunk503089.ZP, {
          theme: module,
          title: Chunk388032.intl.string(Chunk388032.t.cduTBL),
          sidebarTheme: exports,
          section: require,
          onSetSection: I,
          onClose: Chunk37234.xf,
          sections: U,
          isEligibleForPomelo: B,
          questsForBadge: F,
          showUserSettingsSearch: true
        })
      })
    })
  }),
  A = Chunk473749.forwardRef(function() {
    let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getAnalyticsLocations()),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)(module);
    return (0, Chunk54381.jsx)(Chunk906732.Gt, {
      value: exports,
      children: (0, Chunk54381.jsx)(y, {})
    })
  })