/** Chunk was on web.js **/
/** chunk id: 360038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => p
}), require("./539854.js"), require("./35282.js");
var Chunk853856 = require("./853856.js"),
  Chunk706590 = require("./706590.js"),
  Chunk365113 = require("./365113.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk981631 = require("./981631.js");
let p = {
  binds: (() => {
    let e = 10,
      t = [];
    for (let n = 1; require < module; require++) exports.push("mod+".concat(require));
    return exports
  })(),
  comboKeysBindGlobal: true,
  action(e, t) {
    let n, p = parseInt(t.split("+")[1], 10);
    if (0 === p && (p = 10), isNaN(p) || 0 === p) return;
    let _ = a.o.getConfig({
        location: "jumptoguild"
      }).dmsTab,
      m = +!!_;
    if (null != (n = 1 === p || _ && 2 === p ? f.ME : (0, i.z)(r.Z, l.Z, c.Z) ? p === 2 + m ? f.I_8 : d.ZP.getFlattenedGuildIds()[p - 3 - m] : d.ZP.getFlattenedGuildIds()[p - 2 - m])) return n === f.ME && _ && 2 === p ? (0, o.uL)(f.Z5c.ME_DMS) : n === f.ME && null == u.Z.getGuildId() ? (0, o.uL)(f.Z5c.CHANNEL(n)) : (0, s.X)(n), false
  }
}