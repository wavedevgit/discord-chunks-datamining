/** Chunk was on 92091 **/
/** chunk id: 32750, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk216572 = require("./216572.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  var n;
  let i = (0, r.HL)(t),
    o = (0, s.C7)(t),
    u = (0, s.tc)(t);
  if ((t.isArchivedThread() ? u : o) && !i) return (null == (n = t.threadMetadata) ? true : n.archived) ? (0, e.jsx)(l.sNh, {
    id: "unarchive-thread",
    label: t.isForumPost() ? d.intl.string(d.t.cnRubV) : d.intl.string(d.t.S9E4G7),
    action: () => a.Z.unarchiveThread(t, false)
  }) : (0, e.jsx)(l.sNh, {
    id: "archive-thread",
    label: t.isForumPost() ? d.intl.string(d.t.BTs4Kb) : d.intl.string(d.t.wiIevd),
    action: () => a.Z.archiveThread(t, false)
  })
}