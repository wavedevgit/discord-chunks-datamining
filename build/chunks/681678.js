/** Chunk was on web.js **/
/** chunk id: 681678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk481060 = require("./481060.js"),
  Chunk633182 = require("./633182.js"),
  Chunk484710 = require("./484710.js");
let a = {
  showIgnoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.IGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnignoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.UNIGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showBlockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.BLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnblockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.UNBLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showMuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.MUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnmuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.UNMUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showReportSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.wQ.REPORT_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showSuccessToast(e) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(e), r.ToastType.SUCCESS))
  },
  showFailedToast(e) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(null != e ? e : o.wQ.GENERIC_ERROR), r.ToastType.FAILURE))
  }
}