/** Chunk was on 21738 **/
/** chunk id: 755715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk515718 = require("./515718.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let u = {
  [Chunk652215.e$_.GET_IMAGE]: {
    scope: Chunk613057.hj,
    validation: e => (0, s.A)(e).required().keys({
      type: e.string().required().valid(["user"]),
      id: e.string().required(),
      format: e.string().required().valid(["png", "webp", "jpg"]),
      size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024])
    }),
    handler(e) {
      let t, {
        args: {
          type: n,
          id: s,
          format: o = "png",
          size: u = 128
        }
      } = e;
      if ("user" === n) {
        let e = r.default.getUser(s);
        if (null != e) {
          t = i.Ay.getUserAvatarURL(e, false, u, o);
          let n = window.GLOBAL_ENV.CDN_HOST;
          null != n && false !== t.indexOf(n) && (t += "&_=")
        } else throw new a.A({
          errorCode: c.Lw6.INVALID_USER
        }, "Invalid user id: ".concat(s))
      }
      if (null == t) throw new a.A({
        errorCode: c.Lw6.INVALID_COMMAND
      }, "No valid type.");
      return fetch(t).then(e => e.blob()).then(e => (0, l.We)(e)).then(e => ({
        data_url: e
      }))
    }
  }
}