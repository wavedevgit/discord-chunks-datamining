/** Chunk was on web.js **/
/** chunk id: 392358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk981631 = require("./981631.js");
let a = ["Shift", "Alt", "Meta", "Control"];

function s(e, t) {
  let [n, s] = r.useState(0), l = (0, i.Aq)();
  r.useEffect(() => {
    let e = () => s(e => e + 1),
      t = () => s(e => Math.max(0, e - 1));
    return l.subscribe(o.CkL.POPOUT_SHOW, e), l.subscribe(o.CkL.POPOUT_HIDE, t), () => {
      l.unsubscribe(o.CkL.POPOUT_SHOW, e), l.unsubscribe(o.CkL.POPOUT_HIDE, t)
    }
  }, [l]);
  let [c, u] = r.useState(false);
  return r.useLayoutEffect(() => {
    let r = e => {
        if ((!t || n > 0) && c) return void u(false);
        !c && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || a.indexOf(e.key) >= 0) || u(e => !e)
      },
      i = c ? "keyup" : "mousemove";
    return t && e.addEventListener(i, r), () => null == e ? true : e.removeEventListener(i, r)
  }, [e, c, n, t]), t && 0 === n && c
}