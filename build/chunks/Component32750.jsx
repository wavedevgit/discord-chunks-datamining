/** Chunk was on 99534 **/
/** chunk id: 32750, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk216572 = require("./216572.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  var n;
  let i = (0, r.HL)(t),
    s = (0, d.C7)(t),
    u = (0, d.tc)(t);
  if ((t.isArchivedThread() ? u : s) && !i) return (null == (n = t.threadMetadata) ? true : n.archived) ? (0, e.jsx)(l.sNh, {
    id: "unarchive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.cnRubW) : o.intl.string(o.t.S9E4Gx),
    action: () => a.Z.unarchiveThread(t, false)
  }) : (0, e.jsx)(l.sNh, {
    id: "archive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.BTs4KS) : o.intl.string(o.t.wiIevb),
    action: () => a.Z.archiveThread(t, false)
  })
}