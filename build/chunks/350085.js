/** Chunk was on 1272 **/
/** chunk id: 350085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => d
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk283595 = require("./283595.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk996106 = require("./996106.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let d = {
  [Chunk981631.zMe.OVERLAY_UPDATE]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new o.Z({
        errorCode: u.lTL.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: r,
          dispatch: o
        } = e, c = a.default.enabled, u = true, d = n.application.id;
        if (null != d) {
          let e = l.Z.getActiveLibraryApplication(d);
          null != e && (c = c && e.isOverlayEnabled()), u = s.default.isLocked(t)
        }
        let p = {
          enabled: c,
          locked: u
        };
        return i().isEqual(p, r) || o(p), p
      }
    }
  }
}