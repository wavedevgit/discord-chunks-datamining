/** Chunk was on web.js **/
/** chunk id: 571909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  ek: () => p,
  vI: () => _
});
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk233993 = require("./233993.js"),
  Chunk505543 = require("./505543.js");
let d = (0, Chunk353640.v)(e => ({
    isOnStartStageScreen: true
  })),
  f = d;

function p(e) {
  (0, a.r)(() => d.setState({
    isOnStartStageScreen: e
  }))
}

function _(e) {
  let t = (0, o.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
    n = (0, o.bG)([s.A], () => s.A.can(c.QY, e), [e]),
    i = (0, u.A)(e.id),
    a = n && !i;
  r.useEffect(() => {
    t ? a || p(false) : p(a)
  }, [t, a])
}