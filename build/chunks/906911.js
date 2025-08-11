/** Chunk was on 1272 **/
/** chunk id: 906911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk243814 = require("./243814.js"),
  Chunk45792 = require("./45792.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk914946 = require("./914946.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let u = {
  [Chunk981631.Etm.GET_RELATIONSHIPS]: (0, Chunk45792.S)(Chunk981631.Etm.GET_RELATIONSHIPS, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RELATIONSHIPS_READ]
    },
    handler(e) {
      let t = [];
      for (let [n, r] of l.Z.getMutableRelationships().entries()) {
        if (r === c.OGo.NONE) continue;
        let i = a.default.getUser(n);
        if (null == i) continue;
        let l = (0, o._J)(r, i);
        t.push((0, o.kb)(l, e.socket.application.id))
      }
      return {
        relationships: t
      }
    }
  })
}