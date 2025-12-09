/** Chunk was on 470 **/
/** chunk id: 99528, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk924301 = require("./924301.js"),
  Chunk388032 = require("./388032.jsx");

function a(t) {
  let e = (0, r.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(t), [t]);
  return null == t || null == e ? null : (0, l.jsx)(i.sNh, {
    id: "report-event",
    label: c.intl.string(c.t.IBA5wX),
    action: () => (0, o.d$)(e),
    icon: i.U65,
    color: "danger"
  })
}