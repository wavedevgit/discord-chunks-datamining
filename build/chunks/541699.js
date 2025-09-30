/** Chunk was on 18539 **/
/** chunk id: 541699, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Q: () => a,
  Z: () => l
}), require("./415506.js");
var Chunk979554 = require("./979554.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");
let a = e => e instanceof l;
class l extends Chunk523080.Z {
  static fromServer(e) {
    return new l(e)
  }
  constructor(e) {
    super(e),
      function(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      }(this, "collectiblesItem", true), this.skuProductLine = c.POd.COLLECTIBLES;
    let t = (e => {
      switch (e.type) {
        case n.Z.AVATAR_DECORATION:
          return i.Z.fromServer(e);
        case n.Z.PROFILE_EFFECT:
          return s.Z.fromServer(e);
        case n.Z.NAMEPLATE:
          return o.Z.fromServer(e);
        default:
          return null
      }
    })(e.collectibles_item);
    if (null == t) throw Error("Collectibles item not found");
    this.collectiblesItem = t
  }
}