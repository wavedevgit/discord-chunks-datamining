/** Chunk was on 78441 **/
/** chunk id: 707792, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let e = (0, a.H_)(t),
    n = t.isLockedThread();
  if (!(!e || t.isModeratorReportChannel())) return n ? (0, i.jsx)(r.Drp, {
    id: "unlock-thread",
    label: t.isForumPost() ? o.intl.string(o.t["/OKSxp"]) : o.intl.string(o.t["jeyb/W"]),
    action: () => l.A.unlockThread(t)
  }) : (0, i.jsx)(r.Drp, {
    id: "lock-thread",
    label: t.isForumPost() ? o.intl.string(o.t["Ur/0Na"]) : o.intl.string(o.t.HoCqm8),
    action: () => l.A.lockThread(t)
  })
}