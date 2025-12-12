/** Chunk was on web.js **/
/** chunk id: 967031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk239091 = require("./239091.js"),
  Chunk147913 = require("./147913.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      OVERLAY_SET_INPUT_LOCKED: () => {
        null != a.Z.getContextMenu() && (0, r.Zy)();
        let e = (0, o.Su)();
        null != e && e.windowDispatch.dispatch(l.CkL.POPOUT_CLOSE), s.S.dispatch(l.CkL.MODAL_CLOSE)
      }
    })
  }
}
let d = new u