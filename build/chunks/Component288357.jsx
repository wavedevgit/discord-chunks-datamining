/** Chunk was on 7869 **/
/** chunk id: 288357, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk698441 = require("./698441.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  let e = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]);
  return null == t || null == e ? null : (0, l.jsx)(i.Drp, {
    id: "report-event",
    label: a.intl.string(a.t.IBA5wX),
    action: () => (0, u.uA)(e),
    icon: i.iFK,
    color: "danger"
  })
}