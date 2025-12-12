/** Chunk was on 9536 **/
/** chunk id: 723136, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk953252 = require("./953252.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk876549 = require("./876549.js");
async function m(e, t) {
  return await c.Z.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function b(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]), c = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT), [b, p] = i.useState((0, s.Z)(t) && c), h = i.useCallback(async e => {
    p(e), await m(t, e)
  }, [t]);
  return c && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: f.setupContainer,
      children: (0, r.jsx)(a.rsf, {
        label: u.intl.string(g.default["/xIz7G"]),
        description: u.intl.string(g.default.uUMXyu),
        badge: "beta",
        checked: b,
        onChange: h,
        disabled: !n
      })
    }), (0, r.jsx)(a.izJ, {
      className: f.divider
    })]
  }) : null
}