/** Chunk was on 99351 **/
/** chunk id: 549866, original params: n,t,e (module,exports,require) **/
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
    imageUrl: t,
    onSelect: e
  } = n, d = s.Sb.useSetting(), {
    tidaWebformEnabled: p
  } = a.Z.useExperiment({
    location: "RoleIconContextMenu"
  }, {
    autoTrackExposure: false
  }), x = o.useCallback(() => {
    (0, r.JG)(t)
  }, [t]);
  return r.wS && d && p ? (0, i.jsx)(l.v2r, {
    navId: "role-icon-context",
    onClose: c.Zy,
    onSelect: e,
    "aria-label": u.intl.string(u.t.Zow2V5),
    children: (0, i.jsx)(l.kSQ, {
      children: (0, i.jsx)(l.sNh, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: x,
        icon: l.xPt
      })
    })
  }) : null
}