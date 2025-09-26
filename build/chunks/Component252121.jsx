/** Chunk was on 49236 **/
/** chunk id: 252121, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk236413 = require("./236413.js"),
  Chunk564488 = require("./564488.jsx");

function a(e) {
  let {
    guildId: t,
    triggerType: n
  } = e, a = i.useMemo(() => () => (0, l.ep)(t, n), [t, n]), [o] = i.useState(a);
  return (0, r.jsx)(s.Z, {
    rule: o
  })
}