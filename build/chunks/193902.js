/** Chunk was on web.js **/
/** chunk id: 193902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk547750 = require("./547750.js"),
  Chunk540469 = require("./540469.js"),
  Chunk890378 = require("./890378.js"),
  Chunk815985 = require("./815985.js"),
  Chunk290717 = require("./290717.js"),
  Chunk468083 = require("./468083.js"),
  Chunk289504 = require("./289504.js"),
  Chunk362858 = require("./362858.js"),
  Chunk548354 = require("./548354.js"),
  Chunk111166 = require("./111166.js"),
  Chunk333665 = require("./333665.js"),
  Chunk717319 = require("./717319.js"),
  Chunk533435 = require("./533435.js"),
  Chunk197256 = require("./197256.js"),
  Chunk322065 = require("./322065.js"),
  Chunk843458 = require("./843458.js"),
  Chunk659124 = require("./659124.js"),
  Chunk979655 = require("./979655.js"),
  Chunk369697 = require("./369697.js"),
  Chunk250265 = require("./250265.js"),
  Chunk411307 = require("./411307.js"),
  Chunk198435 = require("./198435.js"),
  Chunk859126 = require("./859126.js");
class A {
  createCasualConfiguration(e = false) {
    let t = this.createConfiguration(false, e);
    return t.parsers.push(new h.Z), t.parsers.push(new m.Z), t.parsers.push(new o.Z), t.parsers.push(new E.Z), t.parsers.push(new y.Z), t.refiners.push(new S.Z), t
  }
  createConfiguration(e = true, t = false) {
    let n = (0, p.l)({
      parsers: [new b.Z(t), new r.Z(e), new i.Z, new a.Z(t), new g.Z, new l.Z, new c.Z(e), new u.Z(e), new d.Z(e)],
      refiners: [new _.Z]
    }, e);
    return n.parsers.unshift(new s.Z(e)), n.refiners.unshift(new v.Z), n.refiners.unshift(new O.Z), n.refiners.unshift(new I.Z), n.refiners.push(new _.Z), n.refiners.push(new T.Z), n.refiners.push(new f.Z), n
  }
}