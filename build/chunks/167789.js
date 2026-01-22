/** Chunk was on web.js **/
/** chunk id: 167789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => a
});
let r = 1e3,
  i = window;

function a(e, t) {
  let n = i;
  if (true !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
    var a;
    let i = false,
      s = null,
      o = () => {
        i || (i = true, null != s && (n.clearTimeout(s), s = null), e())
      },
      l = n.requestIdleCallback(o, t);
    return s = n.setTimeout(() => {
      i || n.cancelIdleCallback(l), o()
    }, null != (a = null == t ? true : t.timeout) ? a : r), () => {
      n.cancelIdleCallback(l), null != s && (n.clearTimeout(s), s = null)
    }
  } {
    let t = n.setTimeout(e, 0);
    return () => {
      n.clearTimeout(t)
    }
  }
}