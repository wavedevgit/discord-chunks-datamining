/** Chunk was on 93886 **/
/** chunk id: 541699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => c,
  Z: () => d
}), require("./415506.js");
var Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");
let c = e => e instanceof d;
class d extends Chunk523080.Z {
  static fromServer(e) {
    return new d(e)
  }
  constructor(e) {
    super(e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "collectiblesItem", true), this.skuProductLine = s.POd.COLLECTIBLES;
    let t = (e => {
      switch (e.type) {
        case r.Z.AVATAR_DECORATION:
          return i.Z.fromServer(e);
        case r.Z.PROFILE_EFFECT:
          return l.Z.fromServer(e);
        case r.Z.NAMEPLATE:
          return a.Z.fromServer(e);
        default:
          return null
      }
    })(e.collectibles_item);
    if (null == t) throw Error("Collectibles item not found");
    this.collectiblesItem = t
  }
}