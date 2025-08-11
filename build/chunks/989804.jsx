/** Chunk was on 69470 **/
/** chunk id: 989804, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk503089 = require("./503089.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk254901 = require("./254901.js"),
  Chunk45493 = require("./45493.js"),
  Chunk332473 = require("./332473.js"),
  Chunk113434 = require("./113434.js"),
  Chunk984802 = require("./984802.js"),
  Chunk663389 = require("./663389.js"),
  Chunk210887 = require("./210887.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let j = Chunk73800.forwardRef(function() {
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
        subsection: j,
        analyticsLocation: y,
        analyticsLocations: A
      } = (0, Chunk442837.cj)([Chunk663389.Z], () => {
        let e = Chunk663389.Z.getSection(),
          t = Chunk663389.Z.getSubsection(),
          {
            analyticsLocation: n,
            analyticsLocations: i
          } = Chunk663389.Z.getProps();
        return {
          section: module,
          subsection: exports,
          analyticsLocation: require,
          analyticsLocations: Chunk255367
        }
      }),
      w = (0, Chunk110924.Z)(require),
      C = (0, Chunk110924.Z)(j),
      G = (0, Chunk996733.Z7)(),
      {
        analyticsLocations: I
      } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS);
    Chunk73800.useEffect(() => {
      null != require && (require !== w || j !== C) && function(e) {
        let {
          destinationPane: t,
          originPane: n = null,
          source: i = null,
          subsection: a = null,
          locationStack: s = null,
          searchQuery: l = null
        } = e;
        Z.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "user",
          origin_pane: n,
          destination_pane: t,
          location_stack: s,
          source: i,
          subsection: a,
          search_query: l
        })
      }({
        destinationPane: require,
        originPane: null != w ? w : null,
        source: y,
        subsection: j,
        locationStack: A,
        searchQuery: "" !== G ? G : null
      })
    }, [require, w, j, C, y, A, G]);
    let {
      hasSearchResults: N,
      searchResults: v
    } = (0, Chunk839469.E)(), L = (0, Chunk991346.VO)(), R = (0, Chunk991346.q8)(v), U = Chunk73800.useMemo(() => N ? R : L, [N, R, L]), q = (0, Chunk332473.b)(), M = (0, Chunk113434.iO)(), B = Chunk73800.useCallback(e => {
      o.Z.setSection(e)
    }, []);
    return <Chunk906732.Gt value={I}><Chunk410575.Z root={true} page={Chunk981631.ZY5.USER_SETTINGS}><Chunk503089.ZP theme={module} title={Chunk388032.intl.string(Chunk388032.t.cduTBA)} sidebarTheme={exports} section={require} onSetSection={B} onClose={Chunk37234.xf} sections={U} isEligibleForPomelo={q} questsForBadge={M} showUserSettingsSearch={true} /></Chunk410575.Z></Chunk906732.Gt>
  }),
  y = Chunk73800.forwardRef(function() {
    let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getProps().analyticsLocations),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)(module);
    return <Chunk906732.Gt value={exports}><j /></Chunk906732.Gt>
  })