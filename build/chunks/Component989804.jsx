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
    f.Z.trackExposure({
      location: "cd25e4_1"
    });
    let e = (0, o.e7)([E.Z], () => E.Z.theme),
      t = (0, S.Ll)(),
      {
        section: n,
        subsection: x,
        analyticsLocation: y,
        analyticsLocations: A
      } = (0, o.cj)([b.Z], () => {
        let e = b.Z.getSection(),
          t = b.Z.getSubsection();
        return {
          section: e,
          subsection: t,
          analyticsLocation: b.Z.getAnalyticsLocation(),
          analyticsLocations: b.Z.getAnalyticsLocations()
        }
      }),
      j = (0, u.Z)(n),
      P = (0, u.Z)(x),
      {
        analyticsLocations: T
      } = (0, Z.ZP)(d.Z.USER_SETTINGS);
    a.useEffect(() => {
      null != n && (n !== j || x !== P) && (0, p.QB)({
        destinationPane: n,
        originPane: null != j ? j : null,
        source: y,
        subsection: x,
        locationStack: A
      })
    }, [n, j, x, P, y, A]);
    let {
      hasSearchResults: w,
      searchResults: C
    } = (0, _.F)(), v = (0, L.VO)(), G = (0, L.q8)(C), R = a.useMemo(() => w ? G : v, [w, G, v]), U = (0, g.b)(), B = (0, h.iO)(), F = a.useCallback(e => {
      l.Z.setSection(e)
    }, []);
    return (0, i.jsx)(Z.Gt, {
      value: T,
      children: (0, i.jsx)(c.Z, {
        root: true,
        page: m.ZY5.USER_SETTINGS,
        children: (0, i.jsx)(r.ZP, {
          theme: e,
          title: k.intl.string(k.t.cduTBL),
          sidebarTheme: t,
          section: n,
          onSetSection: F,
          onClose: s.xf,
          sections: R,
          isEligibleForPomelo: U,
          questsForBadge: B,
          showUserSettingsSearch: true
        })
      })
    })
  }),
  y = Chunk473749.forwardRef(function() {
    let e = (0, o.e7)([b.Z], () => b.Z.getAnalyticsLocations()),
      {
        analyticsLocations: t
      } = (0, Z.ZP)(e);
    return (0, i.jsx)(Z.Gt, {
      value: t,
      children: (0, i.jsx)(x, {})
    })
  })