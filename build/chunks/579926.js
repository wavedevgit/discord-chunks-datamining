/** Chunk was on web.js **/
/** chunk id: 579926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
});
var Chunk792976 = require("./792976.js"),
  Chunk341251 = require("./341251.js"),
  Chunk322010 = require("./322010.js"),
  Chunk210296 = require("./210296.js"),
  Chunk8222 = require("./8222.js"),
  Chunk199577 = require("./199577.js"),
  Chunk942548 = require("./942548.js"),
  Chunk29782 = require("./29782.js"),
  Chunk189165 = require("./189165.js"),
  Chunk761328 = require("./761328.js"),
  Chunk545570 = require("./545570.js"),
  Chunk125659 = require("./125659.js"),
  Chunk916018 = require("./916018.js"),
  Chunk905323 = require("./905323.js"),
  Chunk31111 = require("./31111.js"),
  Chunk2268 = require("./2268.js"),
  Chunk774188 = require("./774188.js"),
  Chunk183806 = require("./183806.js"),
  Chunk507833 = require("./507833.js"),
  Chunk107125 = require("./107125.js"),
  Chunk83707 = require("./83707.js"),
  Chunk730846 = require("./730846.js"),
  Chunk161666 = require("./161666.js");
class T {
  createCasualConfiguration(e = false) {
    let t = this.createConfiguration(false, e);
    return t.parsers.push(new h.A), t.parsers.push(new m.A), t.parsers.push(new o.A), t.parsers.push(new E.A), t.parsers.push(new b.A), t.refiners.push(new S.A), t
  }
  createConfiguration(e = true, t = false) {
    let n = (0, _.i)({
      parsers: [new y.A(t), new r.A(e), new i.A, new a.A(t), new g.A, new l.A, new c.A(e), new u.A(e), new d.A(e)],
      refiners: [new p.A]
    }, e);
    return n.parsers.unshift(new s.A(e)), n.refiners.unshift(new v.A), n.refiners.unshift(new O.A), n.refiners.unshift(new A.A), n.refiners.push(new p.A), n.refiners.push(new I.A), n.refiners.push(new f.A), n
  }
}