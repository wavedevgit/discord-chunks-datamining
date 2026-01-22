/** Chunk was on 47841 **/
/** chunk id: 104685, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk965033 = require("./965033.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993013 = require("./993013.js");

function f(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([c.A], () => null != t && c.A.can(o.xBc.MANAGE_GUILD, t), [t]), f = t.features.has(o.GuildFeatures.COMMUNITY), [g, b] = i.useState(t.features.has(o.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), m = i.useCallback(async e => {
    b(e), await (0, a.qH)(t, e)
  }, [t]);
  return f ? null : (0, r.jsx)("div", {
    className: u.k,
    children: (0, r.jsx)(s.dOG, {
      label: d.intl.string(d.t.jDarmy),
      description: d.intl.string(d.t["/ee7yK"]),
      checked: g,
      onChange: m,
      disabled: !n
    })
  })
}