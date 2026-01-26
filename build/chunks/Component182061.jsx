/** Chunk was on 88974 **/
/** chunk id: 182061, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk715757 = require("./715757.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  var n;
  let i = (0, l.V)(t),
    s = (0, d.NI)(t),
    u = (0, d.lK)(t);
  if ((t.isArchivedThread() ? u : s) && !i) return (null == (n = t.threadMetadata) ? true : n.archived) ? (0, e.jsx)(r.Drp, {
    id: "unarchive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.cnRubV) : o.intl.string(o.t.S9E4G7),
    action: () => a.A.unarchiveThread(t, false)
  }) : (0, e.jsx)(r.Drp, {
    id: "archive-thread",
    label: t.isForumPost() ? o.intl.string(o.t.BTs4Kb) : o.intl.string(o.t.wiIevd),
    action: () => a.A.archiveThread(t, false)
  })
}