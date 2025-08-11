/** Chunk was on web.js **/
/** chunk id: 15559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
let r = 5;

function i(e, t, n) {
  let {
    onChange: i
  } = e, o = false, a = false;
  return e.onChange = () => {
    if (o) {
      a = true;
      return
    }
    o = true;
    try {
      let e = 0;
      do {
        if (a = false, e++ >= r) break;
        null == t || t();
        try {
          i()
        } finally {
          null == n || n()
        }
      } while (a)
    } finally {
      o = false
    }
  }, e
}