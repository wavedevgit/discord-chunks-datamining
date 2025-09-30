/** Chunk was on 69470 **/
/** chunk id: 989804, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk113434 = require("./113434.js"),
  Chunk984802 = require("./984802.js"),
  Chunk663389 = require("./663389.js"),
  Chunk88658 = require("./88658.js"),
  Chunk210887 = require("./210887.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let L = Chunk647438.forwardRef(function() {
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
        subsection: L,
        analyticsLocation: T,
        analyticsLocations: j
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
      P = (0, Chunk110924.Z)(require),
      w = (0, Chunk110924.Z)(L),
      C = (0, Chunk996733.Z7)(),
      {
        analyticsLocations: v
      } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS);
    Chunk647438.useEffect(() => {
      null != require && (require !== P || L !== w) && (0, Chunk88658.QB)({
        destinationPane: require,
        originPane: null != P ? P : null,
        source: T,
        subsection: L,
        locationStack: j,
        searchQuery: "" !== C ? C : null
      })
    }, [require, P, L, w, T, j, C]);
    let {
      hasSearchResults: G,
      searchResults: R
    } = (0, Chunk839469.F)(), U = (0, Chunk991346.VO)(), B = (0, Chunk991346.q8)(R), F = Chunk647438.useMemo(() => G ? B : U, [G, B, U]), I = (0, Chunk332473.b)(), N = (0, Chunk113434.iO)(), q = Chunk647438.useCallback(e => {
      l.Z.setSection(e)
    }, []);
    return (0, Chunk951288.jsx)(Chunk906732.Gt, {
      value: v,
      children: (0, Chunk951288.jsx)(Chunk410575.Z, {
        root: true,
        page: Chunk981631.ZY5.USER_SETTINGS,
        children: (0, Chunk951288.jsx)(Chunk503089.ZP, {
          theme: module,
          title: Chunk388032.intl.string(Chunk388032.t.cduTBA),
          sidebarTheme: exports,
          section: require,
          onSetSection: q,
          onClose: Chunk37234.xf,
          sections: F,
          isEligibleForPomelo: I,
          questsForBadge: N,
          showUserSettingsSearch: true
        })
      })
    })
  }),
  T = Chunk647438.forwardRef(function() {
    let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getAnalyticsLocations()),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)(module);
    return (0, Chunk951288.jsx)(Chunk906732.Gt, {
      value: exports,
      children: (0, Chunk951288.jsx)(L, {})
    })
  })