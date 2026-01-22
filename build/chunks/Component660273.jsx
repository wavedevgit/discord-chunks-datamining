/** Chunk was on 88974 **/
/** chunk id: 660273, original params: t,n,i (module,exports,require) **/
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

function u(t, n) {
  let i = (0, r.bG)([d.A], () => d.A.hasJoined(t.id));
  return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id)) ? null : i ? (0, e.jsx)(l.Drp, {
    id: "leave-thread",
    label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
    action: () => s.A.leaveThread(t, n)
  }) : (0, e.jsx)(l.Drp, {
    id: "join-thread",
    label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
    action: () => s.A.joinThread(t, n)
  })
}