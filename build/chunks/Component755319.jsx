/** Chunk was on 95813 **/
/** chunk id: 755319, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk486503 = require("./486503.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function d(n) {
  let {
    splashUrl: t,
    onSelect: i
  } = n, d = r.Q_.useSetting(), {
    tidaWebformEnabled: p
  } = s.A.useExperiment({
    location: "GuildOnboardingSplashContextMenu"
  }, {
    autoTrackExposure: false
  }), h = a.useCallback(() => {
    (0, c.C)(t)
  }, [t]);
  return c.p5 && d && p ? (0, e.jsx)(l.W1t, {
    navId: "guild-onboarding-splash-context",
    onClose: o.Z_,
    onSelect: i,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, e.jsx)(l.rXV, {
      children: (0, e.jsx)(l.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: h,
        icon: l.qYV
      })
    })
  }) : null
}