/** Chunk was on 1272 **/
/** chunk id: 758177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956664 = require("./956664.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let u = {
  [Chunk981631.Etm.GET_IMAGE]: {
    scope: Chunk186901.lH,
    validation: e => (0, o.Z)(e).required().keys({
      type: e.string().required().valid(["user"]),
      id: e.string().required(),
      format: e.string().required().valid(["png", "webp", "jpg"]),
      size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024])
    }),
    handler(e) {
      let t, {
        args: {
          type: n,
          id: o,
          format: s = "png",
          size: u = 128
        }
      } = e;
      if ("user" === n) {
        let e = r.default.getUser(o);
        if (null != e) {
          t = i.ZP.getUserAvatarURL(e, false, u, s);
          let n = window.GLOBAL_ENV.CDN_HOST;
          null != n && false !== t.indexOf(n) && (t += "&_=")
        } else throw new a.Z({
          errorCode: c.lTL.INVALID_USER
        }, "Invalid user id: ".concat(o))
      }
      if (null == t) throw new a.Z({
        errorCode: c.lTL.INVALID_COMMAND
      }, "No valid type.");
      return fetch(t).then(e => e.blob()).then(e => (0, l.fD)(e)).then(e => ({
        data_url: e
      }))
    }
  }
}