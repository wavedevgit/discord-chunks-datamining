/** Chunk was on 21738 **/
/** chunk id: 770804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => d
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk189081 = require("./189081.js"),
  Chunk242286 = require("./242286.js"),
  Chunk256415 = require("./256415.js"),
  Chunk636401 = require("./636401.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let d = {
  [Chunk652215.ZE4.OVERLAY_UPDATE]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new o.A({
        errorCode: u.Lw6.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: r,
          dispatch: o
        } = e, c = a.default.enabled, u = true, d = n.application.id;
        if (null != d) {
          let e = l.A.getActiveLibraryApplication(d);
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