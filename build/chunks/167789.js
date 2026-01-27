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
      o = null,
      s = () => {
        i || (i = true, null != o && (n.clearTimeout(o), o = null), e())
      },
      l = n.requestIdleCallback(s, t);
    return o = n.setTimeout(() => {
      i || n.cancelIdleCallback(l), s()
    }, null != (a = null == t ? true : t.timeout) ? a : r), () => {
      n.cancelIdleCallback(l), null != o && (n.clearTimeout(o), o = null)
    }
  } {
    let t = n.setTimeout(e, 0);
    return () => {
      n.clearTimeout(t)
    }
  }
}