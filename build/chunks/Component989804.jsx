/** Chunk was on 69470 **/
/** chunk id: 989804, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
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
  Chunk45493 = require("./45493.js"),
  Chunk332473 = require("./332473.js"),
  Chunk968843 = require("./968843.js"),
  Chunk984802 = require("./984802.js"),
  Chunk663389 = require("./663389.js"),
  Chunk88658 = require("./88658.js"),
  Chunk210887 = require("./210887.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let x = Chunk473749.forwardRef(function() {
    Chunk45493.Z.trackExposure({
      location: "cd25e4_1"
    });
    let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
      t = (0, Chunk984802.Ll)(),
      {
        section: n,
        subsection: x,
        analyticsLocation: y,
        analyticsLocations: A
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
      P = (0, Chunk110924.Z)(x),
      {
        analyticsLocations: T
      } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS);
    Chunk473749.useEffect(() => {
      null != require && (require !== j || x !== P) && (0, Chunk88658.QB)({
        destinationPane: require,
        originPane: null != j ? j : null,
        source: y,
        subsection: x,
        locationStack: A
      })
    }, [require, j, x, P, y, A]);
    let {
      hasSearchResults: w,
      searchResults: C
    } = (0, Chunk839469.F)(), v = (0, Chunk991346.VO)(), G = (0, Chunk991346.q8)(C), R = Chunk473749.useMemo(() => w ? G : v, [w, G, v]), U = (0, Chunk332473.b)(), B = (0, Chunk968843.iO)(), F = Chunk473749.useCallback(e => {
      l.Z.setSection(e)
    }, []);
    return (0, Chunk54381.jsx)(Chunk906732.Gt, {
      value: T,
      children: (0, Chunk54381.jsx)(Chunk410575.Z, {
        root: true,
        page: Chunk981631.ZY5.USER_SETTINGS,
        children: (0, Chunk54381.jsx)(Chunk503089.ZP, {
          theme: module,
          title: Chunk388032.intl.string(Chunk388032.t.cduTBL),
          sidebarTheme: exports,
          section: require,
          onSetSection: F,
          onClose: Chunk37234.xf,
          sections: R,
          isEligibleForPomelo: U,
          questsForBadge: B,
          showUserSettingsSearch: true
        })
      })
    })
  }),
  y = Chunk473749.forwardRef(function() {
    let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getAnalyticsLocations()),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)(module);
    return (0, Chunk54381.jsx)(Chunk906732.Gt, {
      value: exports,
      children: (0, Chunk54381.jsx)(x, {})
    })
  })