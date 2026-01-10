/** Chunk was on 92091 **/
/** chunk id: 438536, original params: t,n,i (module,exports,require) **/
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
  let i = (0, l.e7)([s.Z], () => s.Z.hasJoined(t.id));
  return (0, l.e7)([a.Z], () => null != t.guild_id && a.Z.isLurking(t.guild_id)) ? null : i ? (0, e.jsx)(r.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
    action: () => d.Z.leaveThread(t, n)
  }) : (0, e.jsx)(r.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
    action: () => d.Z.joinThread(t, n)
  })
}