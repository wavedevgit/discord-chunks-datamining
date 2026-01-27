/** Chunk was on web.js **/
/** chunk id: 662502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk397927 = require("./397927.js"),
  Chunk323484 = require("./323484.js"),
  Chunk835002 = require("./835002.js");
let o = {
  showIgnoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.IGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnignoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.UNIGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showBlockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.BLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnblockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.UNBLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showMuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.MUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnmuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.UNMUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showReportSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(a.OB.REPORT_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showSuccessToast(e) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(e), r.ToastType.SUCCESS))
  },
  showFailedToast(e) {
    (0, r.showToast)((0, r.createToast)((0, i.$)(null != e ? e : a.OB.GENERIC_ERROR), r.ToastType.FAILURE))
  }
}