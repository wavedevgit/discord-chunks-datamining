/** Chunk was on web.js **/
/** chunk id: 251728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => p
});
var Chunk685816 = require("./685816.js"),
  Chunk549616 = require("./549616.js"),
  Chunk863611 = require("./863611.js"),
  Chunk472756 = require("./472756.js"),
  Chunk794934 = require("./794934.js"),
  Chunk885577 = require("./885577.js"),
  Chunk198647 = require("./198647.js"),
  Chunk820200 = require("./820200.js"),
  Chunk690913 = require("./690913.js"),
  Chunk608413 = require("./608413.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p {
  static fromServer(e) {
    return new p(e)
  }
  constructor(e) {
    var t;
    _(this, "shopBlocks", true), _(this, "categories", true), _(this, "user_discounts", true), this.shopBlocks = e.shop_blocks.map(e => {
      switch (e.type) {
        case r.z.HERO:
          return c.s.fromServer(e);
        case r.z.FEATURED:
          return s.I.fromServer(e);
        case r.z.FEED:
          return l.K.fromServer(e);
        case r.z.WIDE_BANNER:
          return f.j.fromServer(e);
        case r.z.SHELF:
          return d.O.fromServer(e);
        case r.z.COUNTDOWN_TIMER:
          return a.G.fromServer(e);
        case r.z.IMMERSIVE_BANNER:
          return u.k.fromServer(e);
        default:
          return
      }
    }).filter(e => true !== e), this.categories = e.categories.map(e => i.Z.fromServer(e)), this.user_discounts = null == (t = e.user_discounts) ? true : t.map(e => o.h.fromServer(e))
  }
}