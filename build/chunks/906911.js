/** Chunk was on 1272 **/
/** chunk id: 906911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./997841.js"), require("./388685.js"), require("./539854.js");
var Chunk243814 = require("./243814.js"),
  Chunk149765 = require("./149765.js"),
  Chunk45792 = require("./45792.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let p = {
  [Chunk981631.Etm.GET_RELATIONSHIPS]: (0, Chunk45792.S)(Chunk981631.Etm.GET_RELATIONSHIPS, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RELATIONSHIPS_READ]
    },
    handler(e) {
      var t;
      if (i.e$(i.vB(null != (t = e.socket.application.flags) ? t : 0), i.vB(d.udG.DISABLE_RELATIONSHIPS_ACCESS))) throw new o.Z({
        errorCode: d.lTL.INVALID_PERMISSIONS
      }, "Missing Permissions");
      let n = [];
      for (let [t, r] of a.Z.getMutableRelationships().entries()) {
        if (r === d.OGo.NONE) continue;
        let i = s.default.getUser(t);
        if (null == i) continue;
        let l = (0, c._J)(r, i);
        n.push((0, c.kb)(l, e.socket.application.id))
      }
      return {
        relationships: n
      }
    }
  })
}