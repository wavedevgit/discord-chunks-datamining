/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(481060),
  i = n(703656),
  o = n(302155),
  a = n(71509),
  s = n(981631),
  l = n(388032);
let c = new o.Z({
  onSwitchSuccess(e, t) {
    setTimeout(() => {
      t && (0, i.uL)(s.Z5c.ME), (0, r.showToast)((0, r.createToast)(l.NW.formatToPlainString(l.t.wx7O3N, {
        username: e.username
      }), r.ToastType.SUCCESS))
    }, 100)
  },
  onSwitchError() {
    (0, r.showToast)((0, r.createToast)(l.NW.string(l.t.pqvKWF), r.ToastType.FAILURE))
  },
  onTokenSet() {
    (0, r.Mr3)(a.Ui)
  }
})