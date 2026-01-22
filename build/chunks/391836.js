/** Chunk was on 21738 **/
/** chunk id: 391836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./938796.js"), require("./896048.js"), require("./321073.js");
var Chunk179771 = require("./179771.js"),
  Chunk136722 = require("./136722.js"),
  Chunk420970 = require("./420970.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let p = {
  [Chunk652215.e$_.GET_RELATIONSHIPS]: (0, Chunk420970.T)(Chunk652215.e$_.GET_RELATIONSHIPS, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RELATIONSHIPS_READ]
    },
    handler(e) {
      var t;
      if (i.zy(i.iu(null != (t = e.socket.application.flags) ? t : 0), i.iu(d.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new o.A({
        errorCode: d.Lw6.INVALID_PERMISSIONS
      }, "Missing Permissions");
      let n = [];
      for (let [t, r] of a.A.getMutableRelationships().entries()) {
        if (r === d.eA$.NONE) continue;
        let i = s.default.getUser(t);
        if (null == i) continue;
        let l = (0, c.Gc)(r, i);
        n.push((0, c.LP)(l, e.socket.application.id))
      }
      return {
        relationships: n
      }
    }
  })
}