/** Chunk was on web.js **/
/** chunk id: 1627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk302155 = require("./302155.js"),
  Chunk71509 = require("./71509.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = new Chunk302155.Z({
  onSwitchSuccess(e, t) {
    setTimeout(() => {
      t && (0, i.uL)(s.Z5c.ME), (0, r.showToast)((0, r.createToast)(l.intl.formatToPlainString(l.t.wx7O3L, {
        username: e.username
      }), r.ToastType.SUCCESS))
    }, 100)
  },
  onSwitchError() {
    (0, r.showToast)((0, r.createToast)(l.intl.string(l.t.pqvKWA), r.ToastType.FAILURE))
  },
  onTokenSet() {
    (0, r.Mr3)(o.Ui), (0, r.Mr3)(o._5)
  }
})