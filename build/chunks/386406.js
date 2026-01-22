/** Chunk was on web.js **/
/** chunk id: 386406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  clearVADWarning() {
    r.h.dispatch({
      type: "PERMISSION_CLEAR_VAD_WARNING"
    })
  },
  clearSuppressWarning() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    r.h.dispatch({
      type: "PERMISSION_CLEAR_SUPPRESS_WARNING",
      forever: e
    })
  },
  clearPTTAdminWarning() {
    r.h.dispatch({
      type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING"
    })
  },
  requestElevatedProcess(e) {
    r.h.dispatch({
      type: "PERMISSION_REQUEST_ELEVATED_PROCESS",
      pid: e
    })
  },
  clearElevatedProcess() {
    r.h.dispatch({
      type: "PERMISSION_CLEAR_ELEVATED_PROCESS"
    })
  },
  continueNonelevatedProcess(e) {
    r.h.dispatch({
      type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS",
      pid: e
    })
  }
}