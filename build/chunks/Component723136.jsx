/** Chunk was on 64982 **/
/** chunk id: 723136, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk953252 = require("./953252.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk776853 = require("./776853.js");
async function p(e, t) {
  return await c.Z.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function f(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]), c = t.features.has(d.oNc.REPORT_TO_MOD_PILOT), [f, h] = i.useState((0, a.Z)(t) && c), x = i.useCallback(async e => {
    h(e), await p(t, e)
  }, [t]);
  return c && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: g.setupContainer,
      children: (0, r.jsx)(s.rsf, {
        label: u.intl.string(m.default["/xIz7O"]),
        description: u.intl.string(m.default.uUMXys),
        badge: "beta",
        checked: f,
        onChange: x,
        disabled: !n
      })
    }), (0, r.jsx)(s.izJ, {
      className: g.divider
    })]
  }) : null
}