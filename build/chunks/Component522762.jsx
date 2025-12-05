/** Chunk was on 78248 **/
/** chunk id: 522762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5036 = require("./5036.js"),
  Chunk9156 = require("./9156.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([c.ZP], () => c.ZP.isGuildCollapsed(e), [e]);
  return (0, r.jsx)(l.S89, {
    id: "hide-muted-channels",
    label: o.intl.string(o.t.UwOLJO),
    action: () => a.Z.toggleCollapseGuild(e),
    checked: t
  })
}