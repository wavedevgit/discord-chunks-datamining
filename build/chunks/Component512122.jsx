/** Chunk was on 47841 **/
/** chunk id: 512122, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => m
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
async function b(e, t) {
  return await o.A.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function m(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([c.A], () => null != t && c.A.can(d.xBc.MANAGE_GUILD, t), [t]), o = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT), [m, p] = i.useState((0, a.A)(t) && o), x = i.useCallback(async e => {
    p(e), await b(t, e)
  }, [t]);
  return o && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: g.hu,
      children: (0, r.jsx)(s.dOG, {
        label: u.intl.string(f.default["/xIz7G"]),
        description: u.intl.string(f.default.uUMXyu),
        badge: "beta",
        checked: m,
        onChange: x,
        disabled: !n
      })
    }), (0, r.jsx)(s.cGx, {
      className: g.yF
    })]
  }) : null
}