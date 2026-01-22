/** Chunk was on web.js **/
/** chunk id: 64460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => f
}), require("./321073.js"), require("./747238.js");
var Chunk181079 = require("./181079.js"),
  Chunk832275 = require("./832275.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk711014 = require("./711014.js"),
  Chunk652215 = require("./652215.js");
let f = {
  binds: (() => {
    let e = 10,
      t = [];
    for (let n = 1; n < e; n++) t.push("mod+".concat(n));
    return t
  })(),
  comboKeysBindGlobal: true,
  action(e, t) {
    let n, f = parseInt(t.split("+")[1], 10);
    if ((0 === f && (f = 10), !isNaN(f) && 0 !== f) && null != (n = 1 === f ? d.ME : (0, i.J)(r.A, o.A, l.A) ? 2 === f ? d.YYv : u.Ay.getFlattenedGuildIds()[f - 3] : u.Ay.getFlattenedGuildIds()[f - 2])) return n === d.ME && null == c.A.getGuildId() ? (0, a.pX)(d.BVt.CHANNEL(n)) : (0, s.u)(n), false
  }
}