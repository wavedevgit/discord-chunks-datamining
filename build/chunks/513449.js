/** Chunk was on web.js **/
/** chunk id: 513449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ku: () => _,
  MV: () => p,
  ZP: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk146085 = require("./146085.js"),
  Chunk643632 = require("./643632.js");
let d = (0, Chunk663042.U)(e => ({
    isOnStartStageScreen: true
  })),
  f = d;

function _(e) {
  (0, a.j)(() => d.setState({
    isOnStartStageScreen: e
  }))
}

function p(e) {
  let t = (0, o.e7)([l.Z], () => l.Z.getVoiceChannelId() === e.id),
    n = (0, o.e7)([s.Z], () => s.Z.can(c.yP, e), [e]),
    i = (0, u.Z)(e.id),
    a = n && !i;
  r.useEffect(() => {
    t ? a || _(false) : _(a)
  }, [t, a])
}