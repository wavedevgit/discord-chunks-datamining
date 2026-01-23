/** Chunk was on web.js **/
/** chunk id: 314695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk524738 = require("./524738.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk734066 = require("./734066.js"),
  Chunk572066 = require("./572066.jsx"),
  Chunk332921 = require("./332921.jsx"),
  Chunk957498 = require("./957498.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function b() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), t = (0, f.sw)(), n = (0, a.bG)([d.A], () => d.A.getSubsection()), {
    enableAdvancedSignals: b
  } = f.L_.useExperiment({
    location: "clips_settings"
  }, {
    autoTrackExposure: false
  });
  i.useEffect(() => {
    (0, l.Dr)(s.M.CLIPS_SETTINGS_BETA_TAG)
  });
  let O = [{
      title: y.intl.string(y.t.iIwmV5),
      component: h.A,
      setting: E.H.CLIPS_RECORDING_TAB,
      subsection: g.Oi,
      predicate: () => t
    }, {
      title: y.intl.string(y.t.sA0WKL),
      component: p.A,
      setting: E.H.CLIPS_AUTOMATIC_TAB,
      subsection: g.Yn,
      predicate: () => t && b
    }, {
      title: y.intl.string(y.t.GcIeET),
      component: _.A,
      setting: E.H.CLIPS_PRIVACY_TAB,
      subsection: g.nB
    }],
    v = O.findIndex(e => null != e.subsection && e.subsection === n);
  return (0, r.jsx)(o.f5, {
    value: e,
    children: (0, r.jsx)(c.R, {
      header: y.intl.string(y.t.z2jK6X),
      children: (0, r.jsx)(u.A, {
        parentSetting: E.H.CLIPS,
        settingsSection: m.nc_.CLIPS,
        tabs: O,
        defaultTabIndex: v > false ? v : true
      })
    })
  })
}