/** Chunk was on 18320 **/
/** chunk id: 478035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk370774 = require("./370774.js"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    n = (0, o.D)();
  return __OVERLAY__ || t !== s.I_8 && !n ? null : (0, r.jsx)(l.sNh, {
    id: "go-to-original-guild",
    label: u.intl.string(u.t.WYj55Y),
    action: function() {
      (0, c.XU)(e.guild_id, e.id)
    }
  })
}