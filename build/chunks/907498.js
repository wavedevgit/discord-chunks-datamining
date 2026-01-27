/** Chunk was on web.js **/
/** chunk id: 907498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk240233 = require("./240233.js"),
  Chunk573879 = require("./573879.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let c = new Chunk240233.A({
  onSwitchSuccess(e, t) {
    setTimeout(() => {
      t && (0, i.pX)(s.BVt.ME), (0, r.showToast)((0, r.createToast)(l.intl.formatToPlainString(l.t.wx7O3L, {
        username: e.username
      }), r.ToastType.SUCCESS))
    }, 100)
  },
  onSwitchError() {
    (0, r.showToast)((0, r.createToast)(l.intl.string(l.t.pqvKWA), r.ToastType.FAILURE))
  },
  onTokenSet() {
    (0, r.OoC)(o.ov), (0, r.OoC)(o.Gl)
  }
})