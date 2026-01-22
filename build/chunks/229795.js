/** Chunk was on 21738 **/
/** chunk id: 229795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk360469 = require("./360469.js"),
  Chunk818348 = require("./818348.js");
let o = {
  [Chunk818348.e$.SET_ORIENTATION_LOCK_STATE]: {
    validation: e => (0, l.A)(e).required().keys({
      lock_state: e.number().valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE).required(),
      picture_in_picture_lock_state: e.number().valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE).allow(null).optional(),
      grid_lock_state: e.number().valid(a.N7.UNLOCKED, a.N7.PORTRAIT, a.N7.LANDSCAPE).allow(null).optional()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          lock_state: n,
          picture_in_picture_lock_state: l,
          grid_lock_state: a
        }
      } = e, o = t.application.id;
      if (null != o) r.h.dispatch({
        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
        applicationId: o,
        lockState: n,
        pictureInPictureLockState: l
      }), r.h.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
        applicationId: o,
        lockState: n,
        pictureInPictureLockState: l,
        gridLockState: a
      });
      else throw new i.A({
        errorCode: s.Lw.INVALID_COMMAND
      }, "No application.")
    }
  }
}