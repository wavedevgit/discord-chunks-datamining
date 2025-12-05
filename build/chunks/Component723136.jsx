/** Chunk was on 384 **/
/** chunk id: 723136, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => f
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
  Chunk864309 = require("./864309.js"),
  Chunk776853 = require("./776853.js");
async function p(e, t) {
  return await c.Z.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function f(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]), c = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT), [f, h] = i.useState((0, s.Z)(t) && c), b = i.useCallback(async e => {
    h(e), await p(t, e)
  }, [t]);
  return c && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.setupContainer,
      children: (0, r.jsx)(a.rsf, {
        label: u.intl.string(g.default["/xIz7G"]),
        description: u.intl.string(g.default.uUMXyu),
        badge: "beta",
        checked: f,
        onChange: b,
        disabled: !n
      })
    }), (0, r.jsx)(a.izJ, {
      className: m.divider
    })]
  }) : null
}