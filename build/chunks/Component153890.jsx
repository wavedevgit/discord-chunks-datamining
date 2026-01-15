/** Chunk was on 17992 **/
/** chunk id: 153890, original params: e,t,n (module,exports,require) **/
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

function d(e) {
  let {
    imageUrl: t,
    onSelect: n
  } = e, d = c.Sb.useSetting(), {
    tidaWebformEnabled: p
  } = s.Z.useExperiment({
    location: "GuildEventImageContextMenu"
  }, {
    autoTrackExposure: false
  }), x = a.useCallback(() => {
    (0, u.JG)(t)
  }, [t]);
  return u.wS && d && p ? (0, i.jsx)(l.v2r, {
    navId: "guild-event-image-context",
    onClose: o.Zy,
    onSelect: n,
    "aria-label": r.intl.string(r.t.Zow2V5),
    children: (0, i.jsx)(l.kSQ, {
      children: (0, i.jsx)(l.sNh, {
        id: "copy-image-link",
        label: r.intl.string(r.t["8xHmxo"]),
        action: x,
        icon: l.xPt
      })
    })
  }) : null
}