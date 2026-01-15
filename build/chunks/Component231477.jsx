/** Chunk was on 89372 **/
/** chunk id: 231477, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk796762 = require("./796762.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    splashUrl: t,
    onSelect: i
  } = n, d = c.Sb.useSetting(), {
    tidaWebformEnabled: p
  } = s.Z.useExperiment({
    location: "GuildOnboardingSplashContextMenu"
  }, {
    autoTrackExposure: false
  }), h = a.useCallback(() => {
    (0, r.JG)(t)
  }, [t]);
  return r.wS && d && p ? (0, e.jsx)(l.v2r, {
    navId: "guild-onboarding-splash-context",
    onClose: o.Zy,
    onSelect: i,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, e.jsx)(l.kSQ, {
      children: (0, e.jsx)(l.sNh, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: h,
        icon: l.xPt
      })
    })
  }) : null
}