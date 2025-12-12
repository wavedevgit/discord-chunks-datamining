/** Chunk was on web.js **/
/** chunk id: 761699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
let r = 1e3,
  i = window;

function o(e, t) {
  let n = i;
  if (true !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
    var o;
    let i = false,
      a = null,
      s = () => {
        i || (i = true, null != a && (n.clearTimeout(a), a = null), e())
      },
      l = n.requestIdleCallback(s, t);
    return a = n.setTimeout(() => {
      i || n.cancelIdleCallback(l), s()
    }, null != (o = null == t ? true : t.timeout) ? o : r), () => {
      n.cancelIdleCallback(l), null != a && (n.clearTimeout(a), a = null)
    }
  } {
    let t = n.setTimeout(e, 0);
    return () => {
      n.clearTimeout(t)
    }
  }
}