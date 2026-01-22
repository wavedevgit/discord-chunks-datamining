/** Chunk was on web.js **/
/** chunk id: 384377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XA: () => a,
  fu: () => i
});
let r = (0, require("./353640.js").v)(e => ({
    toastType: null,
    showToast: t => e({
      toastType: t
    })
  })),
  i = () => r(e => e.toastType),
  a = e => {
    r.getState().showToast(e)
  }