/** Chunk was on web.js **/
/** chunk id: 948607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk68166 = require("./68166.js"),
  Chunk775602 = require("./775602.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let d = (0, Chunk735438.debounce)(e => {
  setTimeout(() => {
    var t;
    null == (t = e.current) || t.focus()
  }, 0)
}, 50);

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : window,
    i = (0, a.bG)([s.A], () => s.A.keyboardModeEnabled),
    f = (0, o.A)(),
    [p, _] = r.useState(false),
    h = (0, l.aL)();
  return r.useEffect(() => {
    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

    function e() {
      f && (h.dispatch(u.jej.POPOUT_CLOSE), c._.dispatch(u.jej.CONTEXT_MENU_CLOSE))
    }
  }, [n, f, t, h]), r.useEffect(() => {
    var r;
    if (i || !p || !t) return;
    let {
      current: a
    } = e, o = f;

    function s(t) {
      let n = t.relatedTarget;
      setTimeout(() => {
        null != n && "BUTTON" !== n.tagName || o || d(e)
      }, 100)
    }
    return null == a || a.addEventListener("focusout", s), (null == (r = n.document.activeElement) ? true : r.tagName) === "IFRAME" || o || null == a || a.focus(), () => {
      null == a || a.removeEventListener("focusout", s), o = true
    }
  }, [t, p, i, e, n, f]), _
}