/** Chunk was on 22988 **/
/** chunk id: 934638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk381109 = require("./381109.js");

function m(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, m = t.id, g = i.useCallback(e => {
    o.Z.updateGuild({
      description: e
    }), o.Z.updateGuildProfile(m, {
      description: e
    })
  }, [m]), p = (0, a.e7)([c.Z], () => c.Z.getError("description"));
  return <s.hjN className={u.section}>{<div className={u.sectionHeader}>{<s.vwX>{d.intl.string(d.t.Z27SCQ)}</s.vwX>}{<s.R94 type={s.geA.DESCRIPTION}>{d.intl.string(d.t.pw0MIi)}</s.R94>}</div>}{<s.Kx8 value={t.description} placeholder={d.intl.string(d.t.Nvfows)} onChange={g} maxLength={l.Us} disabled={!n} error={p} />}</s.hjN>
}