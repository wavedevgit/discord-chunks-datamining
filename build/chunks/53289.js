/** Chunk was on web.js **/
/** chunk id: 53289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk208826 = require("./208826.js"),
  Chunk607070 = require("./607070.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let d = (0, Chunk392711.debounce)(e => {
  setTimeout(() => {
    var t;
    null == (t = e.current) || t.focus()
  }, 0)
}, 50);

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : window,
    i = (0, a.e7)([s.Z], () => s.Z.keyboardModeEnabled),
    f = (0, o.Z)(),
    [p, _] = r.useState(false),
    m = (0, l.Aq)();
  return r.useEffect(() => {
    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

    function e() {
      f && (m.dispatch(u.CkL.POPOUT_CLOSE), c.S.dispatch(u.CkL.CONTEXT_MENU_CLOSE))
    }
  }, [n, f, t, m]), r.useEffect(() => {
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