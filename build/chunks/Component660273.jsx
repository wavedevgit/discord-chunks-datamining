/** Chunk was on 78441 **/
/** chunk id: 660273, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk857071 = require("./857071.js"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk985018 = require("./985018.jsx");

function u(t, e) {
  let n = (0, r.bG)([o.A], () => o.A.hasJoined(t.id));
  return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id)) ? null : n ? (0, i.jsx)(l.Drp, {
    id: "leave-thread",
    label: t.isForumPost() ? d.intl.string(d.t["2LsZdT"]) : d.intl.string(d.t["fa/84m"]),
    action: () => s.A.leaveThread(t, e)
  }) : (0, i.jsx)(l.Drp, {
    id: "join-thread",
    label: t.isForumPost() ? d.intl.string(d.t.ihLPiO) : d.intl.string(d.t["10kukS"]),
    action: () => s.A.joinThread(t, e)
  })
}