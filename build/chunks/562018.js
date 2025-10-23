/** Chunk was on 1272 **/
/** chunk id: 562018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk701488 = require("./701488.js"),
  Chunk231338 = require("./231338.js");
let o = {
  [Chunk231338.Et.SET_ORIENTATION_LOCK_STATE]: {
    validation: e => (0, l.Z)(e).required().keys({
      lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).required(),
      picture_in_picture_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional(),
      grid_lock_state: e.number().valid(a.xK.UNLOCKED, a.xK.PORTRAIT, a.xK.LANDSCAPE).allow(null).optional()
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
      if (null != o) r.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
        applicationId: o,
        lockState: n,
        pictureInPictureLockState: l,
        gridLockState: a
      });
      else throw new i.Z({
        errorCode: s.lT.INVALID_COMMAND
      }, "No application.")
    }
  }
}