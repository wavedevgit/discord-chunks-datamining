/** Chunk was on 33743 **/
/** chunk id: 455538, original params: e,n,t (module,exports,require) **/
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
    imageUrl: n,
    onSelect: t
  } = e, d = r.Q_.useSetting(), {
    tidaWebformEnabled: p
  } = l.A.useExperiment({
    location: "RoleIconContextMenu"
  }, {
    autoTrackExposure: false
  }), x = o.useCallback(() => {
    (0, s.C)(n)
  }, [n]);
  return s.p5 && d && p ? (0, i.jsx)(a.W1t, {
    "data-menu-migrated": true,
    navId: "role-icon-context",
    onClose: c.Z_,
    onSelect: t,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, i.jsx)(a.rXV, {
      children: (0, i.jsx)(a.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: x,
        icon: a.qYV,
        leadingAccessory: {
          type: "icon",
          icon: a.qYV
        }
      })
    })
  }) : null
}