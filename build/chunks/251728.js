/** Chunk was on web.js **/
/** chunk id: 251728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => _
});
var Chunk685816 = require("./685816.js"),
  Chunk549616 = require("./549616.js"),
  Chunk472756 = require("./472756.js"),
  Chunk794934 = require("./794934.js"),
  Chunk885577 = require("./885577.js"),
  Chunk198647 = require("./198647.js"),
  Chunk820200 = require("./820200.js"),
  Chunk690913 = require("./690913.js"),
  Chunk608413 = require("./608413.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ {
  static fromServer(e) {
    return new _(e)
  }
  constructor(e) {
    f(this, "shopBlocks", true), f(this, "categories", true), this.shopBlocks = e.shop_blocks.map(e => {
      switch (e.type) {
        case r.z.HERO:
          return l.s.fromServer(e);
        case r.z.FEATURED:
          return a.I.fromServer(e);
        case r.z.FEED:
          return s.K.fromServer(e);
        case r.z.WIDE_BANNER:
          return d.j.fromServer(e);
        case r.z.SHELF:
          return u.O.fromServer(e);
        case r.z.COUNTDOWN_TIMER:
          return o.G.fromServer(e);
        case r.z.IMMERSIVE_BANNER:
          return c.k.fromServer(e);
        default:
          return
      }
    }).filter(e => true !== e), this.categories = e.categories.map(e => i.Z.fromServer(e))
  }
}