/** Chunk was on 89250 **/
/** chunk id: 438536, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk41776 = require("./41776.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk388032 = require("./388032.jsx");

function u(t, n) {
  let e = (0, l.e7)([s.Z], () => s.Z.hasJoined(t.id));
  return (0, l.e7)([r.Z], () => null != t.guild_id && r.Z.isLurking(t.guild_id)) ? null : e ? (0, i.jsx)(a.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? d.intl.string(d.t["2LsZdT"]) : d.intl.string(d.t["fa/84m"]),
    action: () => o.Z.leaveThread(t, n)
  }) : (0, i.jsx)(a.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? d.intl.string(d.t.ihLPiO) : d.intl.string(d.t["10kukS"]),
    action: () => o.Z.joinThread(t, n)
  })
}