/** Chunk was on 78650 **/
/** chunk id: 32750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk216572 = require("./216572.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var t;
  let n = (0, l.HL)(e),
    d = (0, o.C7)(e),
    u = (0, o.tc)(e);
  if ((e.isArchivedThread() ? u : d) && !n) return (null == (t = e.threadMetadata) ? true : t.archived) ? (0, i.jsx)(r.sNh, {
    id: "unarchive-thread",
    label: e.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
    action: () => a.Z.unarchiveThread(e, false)
  }) : (0, i.jsx)(r.sNh, {
    id: "archive-thread",
    label: e.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
    action: () => a.Z.archiveThread(e, false)
  })
}