/** Chunk was on 47841 **/
/** chunk id: 512122, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk56595 = require("./56595.js"),
  Chunk576705 = require("./576705.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk841541 = require("./841541.js");
async function p(e, t) {
  return await c.A.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function f(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([o.A], () => null != t && o.A.can(d.xBc.MANAGE_GUILD, t), [t]), c = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT), [f, b] = i.useState((0, a.A)(t) && c), h = i.useCallback(async e => {
    b(e), await p(t, e)
  }, [t]);
  return c && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.hu,
      children: (0, r.jsx)(s.dOG, {
        label: u.intl.string(g.default["/xIz7G"]),
        description: u.intl.string(g.default.uUMXyu),
        badge: "beta",
        checked: f,
        onChange: h,
        disabled: !n
      })
    }), (0, r.jsx)(s.cGx, {
      className: m.yF
    })]
  }) : null
}