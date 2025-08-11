/** Chunk was on 1272 **/
/** chunk id: 378410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk710845 = require("./710845.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk981631 = require("./981631.js");
let o = new Chunk710845.Z(Chunk981631.BZL),
  s = {
    [Chunk981631.Etm.CAPTURE_LOG]: {
      validation: e => (0, l.Z)(e).required().keys({
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
        (0, i.bu)(t.transport);
        let l = t.application.id,
          a = "".concat(l, " - ").concat(r);
        switch (n) {
          case "log":
            o.log(a);
            break;
          case "warn":
            o.warn(a);
            break;
          case "debug":
            o.verbose(a);
            break;
          case "info":
            o.info(a);
            break;
          case "error":
            o.error(a)
        }
      }
    }
  }