/** Chunk was on web.js **/
/** chunk id: 360148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
});
var Chunk651162 = require("./651162.js"),
  Chunk510801 = require("./510801.js"),
  Chunk419709 = require("./419709.js"),
  Chunk319835 = require("./319835.js"),
  Chunk85073 = require("./85073.js"),
  Chunk793295 = require("./793295.js"),
  Chunk824699 = require("./824699.js"),
  Chunk53941 = require("./53941.js"),
  Chunk163608 = require("./163608.js"),
  Chunk237463 = require("./237463.js"),
  Chunk893998 = require("./893998.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h {
  static fromServer(e) {
    return new h(e)
  }
  constructor(e) {
    var t;
    _(this, "shopBlocks", true), _(this, "categories", true), _(this, "userDiscounts", true), this.shopBlocks = e.shop_blocks.map(e => {
      switch (e.type) {
        case r.g.HERO:
          return c.B.fromServer(e);
        case r.g.FEATURED:
          return o.t.fromServer(e);
        case r.g.FEED:
          return l.l.fromServer(e);
        case r.g.WIDE_BANNER:
          return p.y.fromServer(e);
        case r.g.SHELF:
          return f.r.fromServer(e);
        case r.g.COUNTDOWN_TIMER:
          return s.z.fromServer(e);
        case r.g.IMMERSIVE_BANNER:
          return u.A.fromServer(e);
        case r.g.REWARD_HERO:
          return d.E.fromServer(e);
        default:
          return
      }
    }).filter(e => true !== e), this.categories = e.categories.map(e => i.A.fromServer(e)), this.userDiscounts = null == (t = e.user_discounts) ? true : t.map(e => a.T.fromServer(e))
  }
}