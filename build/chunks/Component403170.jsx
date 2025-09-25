/** Chunk was on 64523 **/
/** chunk id: 403170, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk953252 = require("./953252.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk759071 = require("./759071.js");
async function f(e, t) {
  return await d.Z.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function h(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]), d = t.features.has(u.oNc.REPORT_TO_MOD_PILOT), [h, x] = i.useState((0, o.Z)(t) && d), b = i.useCallback(async e => {
    x(e), await f(t, e)
  }, [t]);
  return d && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: p.setupContainer,
      children: (0, r.jsx)(s.j7V, {
        value: h,
        onChange: b,
        className: p.switchItem,
        disabled: !n,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: p.switchItemTextContent,
          children: [(0, r.jsxs)(s.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [m.intl.string(g.default["/xIz7O"]), (0, r.jsx)(a.Z, {
              className: p.betaTag
            })]
          }), (0, r.jsx)(s.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: m.intl.string(g.default.uUMXys)
          })]
        })
      })
    }), (0, r.jsx)(s.$i$, {
      className: p.divider
    })]
  }) : null
}