/** Chunk was on web.js **/
/** chunk id: 867628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk652215 = require("./652215.js");
let o = ["Shift", "Alt", "Meta", "Control"];

function s(e, t) {
  let [n, s] = r.useState(0), l = (0, i.aL)();
  r.useEffect(() => {
    let e = () => s(e => e + 1),
      t = () => s(e => Math.max(0, e - 1));
    return l.subscribe(a.jej.POPOUT_SHOW, e), l.subscribe(a.jej.POPOUT_HIDE, t), () => {
      l.unsubscribe(a.jej.POPOUT_SHOW, e), l.unsubscribe(a.jej.POPOUT_HIDE, t)
    }
  }, [l]);
  let [c, u] = r.useState(false);
  return r.useLayoutEffect(() => {
    let r = e => {
        (!t || n > 0) && c ? u(false) : !c && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.indexOf(e.key) >= 0) || u(e => !e)
      },
      i = c ? "keyup" : "mousemove";
    return t && e.addEventListener(i, r), () => null == e ? true : e.removeEventListener(i, r)
  }, [e, c, n, t]), t && 0 === n && c
}