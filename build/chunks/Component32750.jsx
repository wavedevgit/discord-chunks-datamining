/** Chunk was on 89250 **/
/** chunk id: 32750, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk216572 = require("./216572.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var n;
  let e = (0, l.HL)(t),
    d = (0, s.C7)(t),
    u = (0, s.tc)(t);
  if ((t.isArchivedThread() ? u : d) && !e) return (null == (n = t.threadMetadata) ? true : n.archived) ? (0, i.jsx)(a.sNh, {
    id: "unarchive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.cnRubV) : o.intl.string(o.t.S9E4G7),
    action: () => r.Z.unarchiveThread(t, false)
  }) : (0, i.jsx)(a.sNh, {
    id: "archive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.BTs4Kb) : o.intl.string(o.t.wiIevd),
    action: () => r.Z.archiveThread(t, false)
  })
}