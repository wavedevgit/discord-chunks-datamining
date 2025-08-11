/** Chunk was on 46154 **/
/** chunk id: 32750, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk216572 = require("./216572.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.js");

function d(t) {
  var n;
  let e = (0, l.HL)(t),
    d = (0, o.C7)(t),
    u = (0, o.tc)(t);
  if ((t.isArchivedThread() ? u : d) && !e) return (null == (n = t.threadMetadata) ? true : n.archived) ? <a.sNh id={"unarchive-thread"} label={t.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx)} action={() => r.Z.unarchiveThread(t, false)} /> : <a.sNh id={"archive-thread"} label={t.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb)} action={() => r.Z.archiveThread(t, false)} />
}