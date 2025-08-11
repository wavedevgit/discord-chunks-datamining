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
      t && (0, i.uL)(s.Z5c.ME), (0, r.showToast)((0, r.createToast)(l.intl.formatToPlainString(l.t.wx7O3N, {
        username: e.username
      }), r.ToastType.SUCCESS))
    }, 100)
  },
  onSwitchError() {
    (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.pqvKWF), Chunk481060.ToastType.FAILURE))
  },
  onTokenSet() {
    (0, Chunk481060.Mr3)(Chunk71509.Ui), (0, Chunk481060.Mr3)(Chunk71509._5)
  }
})