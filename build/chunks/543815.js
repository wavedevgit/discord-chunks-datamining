/** Chunk was on 1272 **/
/** chunk id: 543815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk45792 = require("./45792.js"),
  Chunk594174 = require("./594174.js"),
  Chunk863141 = require("./863141.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let s = {
  [Chunk981631.Etm.GET_USER]: (0, Chunk45792.S)(Chunk981631.Etm.GET_USER, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.b_, Chunk186901.lH]
    },
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e, n = i.default.getUser(t);
      return null == n ? null : (0, l.Z)(n)
    }
  })
}