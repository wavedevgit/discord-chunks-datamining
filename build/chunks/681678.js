/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(481060),
  i = n(633182),
  o = n(484710);
let a = {
  showIgnoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.IGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnignoreSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.UNIGNORE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showBlockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.BLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnblockSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.UNBLOCK_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showMuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.MUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showUnmuteSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.UNMUTE_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showReportSuccessToast(e, t) {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.REPORT_SUCCESS, e, t), r.ToastType.SUCCESS))
  },
  showFailedToast() {
    (0, r.showToast)((0, r.createToast)((0, i.o)(o.w.GENERIC_ERROR), r.ToastType.FAILURE))
  }
}