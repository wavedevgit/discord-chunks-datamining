/** Chunk was on web.js **/
/** chunk id: 14115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => i
});
let r = {
    EARN: .25,
    SPEND: .3
  },
  i = (e, t) => {
    let n = e > 0,
      i = t * r[n ? "EARN" : "SPEND"],
      a = n ? t - i : 0;
    return {
      duration: i,
      delay: a
    }
  }