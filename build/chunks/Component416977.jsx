/** Chunk was on 57126 **/
/** chunk id: 416977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45114 = require("./45114.js"),
  Chunk306680 = require("./306680.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let t = (0, s.e7)([c.ZP], () => c.ZP.hasUnread(e, a.W.GUILD_EVENT), [e]);
  return (0, i.jsx)(d.sNh, {
    id: "mark-events-read",
    label: u.intl.string(u.t.e6RscS),
    action: function() {
      (0, r.Ju)(e, a.W.GUILD_EVENT)
    },
    disabled: !t
  })
}