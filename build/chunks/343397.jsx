/** Chunk was on 22988 **/
/** chunk id: 343397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk388032 = require("./388032.js");

function d(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, d = t.id, u = (0, l.e7)([o.Z], () => o.Z.getError("name")), m = i.useCallback(e => {
    s.Z.updateGuild({
      name: e
    }), s.Z.updateGuildProfile(d, {
      name: e
    })
  }, [d]);
  return <a.xJW title={c.intl.string(c.t.X56QcH)}><a.oil type={"text"} disabled={!n} value={t.name} maxLength={100} onChange={m} error={u} /></a.xJW>
}