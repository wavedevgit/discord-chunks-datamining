/** Chunk was on 33743 **/
/** chunk id: 455538, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk486503 = require("./486503.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    imageUrl: n,
    onSelect: t
  } = e, p = r.Q_.useSetting(), {
    tidaWebformEnabled: d
  } = c.A.useExperiment({
    location: "RoleIconContextMenu"
  }, {
    autoTrackExposure: false
  }), x = o.useCallback(() => {
    (0, s.C)(n)
  }, [n]);
  return s.p5 && p && d ? (0, i.jsx)(l.W1t, {
    navId: "role-icon-context",
    onClose: a.Z_,
    onSelect: t,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, i.jsx)(l.rXV, {
      children: (0, i.jsx)(l.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: x,
        icon: l.qYV
      })
    })
  }) : null
}