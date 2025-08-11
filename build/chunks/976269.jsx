/** Chunk was on 22988 **/
/** chunk id: 976269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getSettings()), s = (0, l.e7)([c.Z], () => c.Z.getSubmitting()), u = i.useCallback(() => {
    try {
      (0, o.oo)(t, n)
    } catch (e) {}
  }, [t, n]);
  return <a.Z onSave={u} onReset={o.bj} submitting={s} onSaveText={d.intl.string(d.t.R3BPHx)} />
}
let m = function() {
  let e = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
  return null == module ? null : <u guildId={module.id} />
}