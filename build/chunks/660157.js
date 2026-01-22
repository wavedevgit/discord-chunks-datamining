/** Chunk was on 21738 **/
/** chunk id: 660157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk420970 = require("./420970.js"),
  Chunk287809 = require("./287809.js"),
  Chunk639621 = require("./639621.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let o = {
  [Chunk652215.e$_.GET_USER]: (0, Chunk420970.T)(Chunk652215.e$_.GET_USER, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.W_, Chunk613057.hj]
    },
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e, n = i.default.getUser(t);
      return null == n ? null : (0, l.A)(n)
    }
  })
}