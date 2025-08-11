/** Chunk was on 22988 **/
/** chunk id: 403170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk953252 = require("./953252.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130883 = require("./130883.js"),
  Chunk576583 = require("./576583.js");
async function h(e, t) {
  return await d.Z.saveGuild(e.id, {
    moderatorReportingEnabled: t
  })
}

function f(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]), d = t.features.has(u.oNc.REPORT_TO_MOD_PILOT), [f, b] = i.useState((0, o.Z)(t) && d), x = i.useCallback(async e => {
    b(e), await h(t, e)
  }, [t]);
  return d && n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: p.setupContainer,
      children: (0, r.jsx)(a.j7V, {
        value: f,
        onChange: x,
        className: p.switchItem,
        disabled: !n,
        hideBorder: true,
        children: (0, r.jsxs)("div", {
          className: p.switchItemTextContent,
          children: [(0, r.jsxs)(a.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [m.intl.string(g.default["/xIz7O"]), (0, r.jsx)(s.Z, {
              className: p.betaTag
            })]
          }), (0, r.jsx)(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: m.intl.string(g.default.uUMXys)
          })]
        })
      })
    }), (0, r.jsx)(a.$i$, {
      className: p.divider
    })]
  }) : null
}