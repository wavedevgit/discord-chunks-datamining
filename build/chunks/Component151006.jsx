/** Chunk was on 31658 **/
/** chunk id: 151006, original params: e,t,n (module,exports,require) **/
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

function d(e) {
  let {
    imageUrl: t,
    onSelect: n
  } = e, d = s.Q_.useSetting(), {
    tidaWebformEnabled: p
  } = o.A.useExperiment({
    location: "GuildEventImageContextMenu"
  }, {
    autoTrackExposure: false
  }), g = a.useCallback(() => {
    (0, r.C)(t)
  }, [t]);
  return r.p5 && d && p ? (0, i.jsx)(l.W1t, {
    "data-menu-migrated": true,
    navId: "guild-event-image-context",
    onClose: c.Z_,
    onSelect: n,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, i.jsx)(l.rXV, {
      children: (0, i.jsx)(l.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
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