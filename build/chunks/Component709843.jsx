/** Chunk was on 71728 **/
/** chunk id: 709843, original params: e,a,s (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk997509 = require("./997509.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    guild: a,
    onSelect: s
  } = e, [b, p] = r.useState(a.premiumProgressBarEnabled), [h, g] = r.useState(false), m = (0, i.bG)([c.A], () => c.A.can(u.xBc.MANAGE_GUILD, a)), k = async () => {
    m && (g(true), await l.A.saveGuild(a.id, {
      premiumProgressBarEnabled: !b
    }), p(!b), g(false))
  };
  return (0, t.jsx)(n.W1t, {
    "data-menu-migrated": true,
    navId: "progress-bar-context",
    onClose: d.Z_,
    "aria-label": o.intl.string(o.t["m85s/h"]),
    onSelect: s,
    children: (0, t.jsx)(n.sLh, {
      id: "progress-bar-enabled",
      label: o.intl.string(o.t["0CJWP2"]),
      checked: b,
      disabled: h,
      action: k
    })
  })
}