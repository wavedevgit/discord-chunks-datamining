/** Chunk was on web.js **/
/** chunk id: 25007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481369 = require("./481369.js"),
  Chunk944103 = require("./944103.js"),
  Chunk946050 = require("./946050.js"),
  Chunk256413 = require("./256413.js"),
  Chunk292853 = require("./292853.js"),
  Chunk359565 = require("./359565.js"),
  Chunk226027 = require("./226027.js");
let f = Chunk73800.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, l.Z)(t), f = (0, o.Z)(), {
    showUnreadsNotice: _,
    clearUnreadsNotice: p
  } = (0, a.Z)(t);
  return t.isArchivedLockedThread() ? <u.s channel={t} narrow={n} /> : t.isLockedThread() ? <u.q channel={t} narrow={n} /> : _ ? <s.Z channel={t} clearUnreadsNotice={p} /> : i && f.includes(d.E.OPT_IN_CHANNEL) ? <c.Z channel={t} narrow={n} /> : null
})