/** Chunk was on 71728 **/
/** chunk id: 709843, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk997509 = require("./997509.js"),
  Chunk576705 = require("./576705.js"),
  Chunk903223 = require("./903223.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    guild: a,
    onSelect: t
  } = e, p = (0, o.ws)(a, {
    location: "boost-bar-context-menu"
  }), [h, g] = n.useState(p), [m, k] = n.useState(false), x = (0, r.bG)([l.A], () => l.A.can(u.xBc.MANAGE_GUILD, a)), A = async () => {
    x && (k(true), await c.A.saveGuild(a.id, {
      premiumProgressBarEnabled: !h
    }), g(!h), k(false))
  };
  return (0, s.jsx)(i.W1t, {
    "data-menu-migrated": true,
    navId: "progress-bar-context",
    onClose: d.Z_,
    "aria-label": b.intl.string(b.t["m85s/h"]),
    onSelect: t,
    children: (0, s.jsx)(i.sLh, {
      id: "progress-bar-enabled",
      label: b.intl.string(b.t["0CJWP2"]),
      checked: h,
      disabled: m,
      action: A
    })
  })
}