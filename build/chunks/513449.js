/** Chunk was on web.js **/
/** chunk id: 513449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ku: () => _,
  MV: () => p,
  ZP: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk146085 = require("./146085.js"),
  Chunk643632 = require("./643632.js");
let d = (0, Chunk879690.U)(e => ({
    isOnStartStageScreen: true
  })),
  f = d;

function _(e) {
  (0, o.j)(() => d.setState({
    isOnStartStageScreen: e
  }))
}

function p(e) {
  let t = (0, a.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
    n = (0, a.e7)([s.Z], () => s.Z.can(c.yP, e), [e]),
    i = (0, u.Z)(e.id),
    o = n && !i;
  r.useEffect(() => {
    t ? o || _(false) : _(o)
  }, [t, o])
}