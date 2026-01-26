/** Chunk was on 88974 **/
/** chunk id: 707792, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let n = (0, a.H_)(t),
    i = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return i ? (0, e.jsx)(r.Drp, {
    id: "unlock-thread",
    label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
    action: () => l.A.unlockThread(t)
  }) : (0, e.jsx)(r.Drp, {
    id: "lock-thread",
    label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
    action: () => l.A.lockThread(t)
  })
}