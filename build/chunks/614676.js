/** Chunk was on 21738 **/
/** chunk id: 614676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk626584 = require("./626584.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk652215 = require("./652215.js");
let s = new Chunk626584.A(Chunk652215.meB),
  o = {
    [Chunk652215.e$_.CAPTURE_LOG]: {
      validation: e => (0, l.A)(e).required().keys({
        level: e.string().max(10).required(),
        message: e.string().max(1e3).required()
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            level: n,
            message: r
          }
        } = e;
        (0, i.lG)(t.transport);
        let l = t.application.id,
          a = "".concat(l, " - ").concat(r);
        switch (n) {
          case "log":
            s.log(a);
            break;
          case "warn":
            s.warn(a);
            break;
          case "debug":
            s.verbose(a);
            break;
          case "info":
            s.info(a);
            break;
          case "error":
            s.error(a)
        }
      }
    }
  }