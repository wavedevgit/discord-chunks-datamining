/** Chunk was on 95813 **/
/** chunk id: 755319, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk486503 = require("./486503.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function u(n) {
  let {
    splashUrl: e,
    onSelect: i
  } = n, u = c.Q_.useSetting(), {
    tidaWebformEnabled: p
  } = s.A.useExperiment({
    location: "GuildOnboardingSplashContextMenu"
  }, {
    autoTrackExposure: false
  }), g = a.useCallback(() => {
    (0, r.C)(e)
  }, [e]);
  return r.p5 && u && p ? (0, t.jsx)(l.W1t, {
    "data-menu-migrated": true,
    navId: "guild-onboarding-splash-context",
    onClose: o.Z_,
    onSelect: i,
    "aria-label": d.intl.string(d.t.Zow2V5),
    children: (0, t.jsx)(l.rXV, {
      children: (0, t.jsx)(l.Drp, {
        id: "copy-image-link",
        label: d.intl.string(d.t["8xHmxo"]),
        action: g,
        icon: l.qYV,
        leadingAccessory: {
          type: "icon",
          icon: l.qYV
        }
      })
    })
  }) : null
}