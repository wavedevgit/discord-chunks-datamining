/** Chunk was on 22988 **/
/** chunk id: 403170, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.js"),
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
  return d && n ? <r.Fragment>{<div className={p.setupContainer}><a.j7V value={f} onChange={x} className={p.switchItem} disabled={!n} hideBorder={true}><div className={p.switchItemTextContent}>{<a.Text color={"header-primary"} variant={"text-md/semibold"}>{m.intl.string(g.default["/xIz7O"])}{<s.Z className={p.betaTag} />}</a.Text>}{<a.Text color={"header-secondary"} variant={"text-sm/normal"}>{m.intl.string(g.default.uUMXys)}</a.Text>}</div></a.j7V></div>}{<a.$i$ className={p.divider} />}</r.Fragment> : null
}