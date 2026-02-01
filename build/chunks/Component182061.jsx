/** Chunk was on 78441 **/
/** chunk id: 182061, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk715757 = require("./715757.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  var e;
  let n = (0, l.V)(t),
    d = (0, o.NI)(t),
    u = (0, o.lK)(t);
  if ((t.isArchivedThread() ? u : d) && !n) return (null == (e = t.threadMetadata) ? true : e.archived) ? (0, i.jsx)(r.Drp, {
    id: "unarchive-thread",
    label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
    action: () => a.A.unarchiveThread(t, false)
  }) : (0, i.jsx)(r.Drp, {
    id: "archive-thread",
    label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
    action: () => a.A.archiveThread(t, false)
  })
}