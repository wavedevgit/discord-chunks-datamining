/** Chunk was on web.js **/
/** chunk id: 923928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  clearVADWarning() {
    r.Z.dispatch({
      type: "PERMISSION_CLEAR_VAD_WARNING"
    })
  },
  clearSuppressWarning() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    r.Z.dispatch({
      type: "PERMISSION_CLEAR_SUPPRESS_WARNING",
      forever: e
    })
  },
  clearPTTAdminWarning() {
    r.Z.dispatch({
      type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING"
    })
  },
  requestElevatedProcess(e) {
    r.Z.dispatch({
      type: "PERMISSION_REQUEST_ELEVATED_PROCESS",
      pid: e
    })
  },
  clearElevatedProcess() {
    r.Z.dispatch({
      type: "PERMISSION_CLEAR_ELEVATED_PROCESS"
    })
  },
  continueNonelevatedProcess(e) {
    r.Z.dispatch({
      type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS",
      pid: e
    })
  }
}