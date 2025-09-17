/** Chunk was on web.js **/
/** chunk id: 490093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D2: () => r,
  nL: () => a
});
let r = 3e3,
  i = {
    EARN: .25,
    SPEND: .3
  },
  a = (e, t) => {
    let n = e > 0,
      r = t * i[n ? "EARN" : "SPEND"],
      a = n ? t - r : 0;
    return {
      duration: r,
      delay: a
    }
  }