/** Chunk was on 27434 **/
/** chunk id: 99528, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk924301 = require("./924301.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let n = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]);
  return null == t || null == n ? null : (0, l.jsx)(r.sNh, {
    id: "report-event",
    label: c.intl.string(c.t.IBA5wc),
    action: () => (0, o.d$)(n),
    icon: r.U65,
    color: "danger"
  })
}