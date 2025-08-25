/** Chunk was on web.js **/
/** chunk id: 53289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk208826 = require("./208826.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
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
    i = (0, o.e7)([l.Z], () => l.Z.keyboardModeEnabled),
    f = (0, a.Z)(),
    [_, p] = r.useState(false),
    h = (0, s.Aq)();
  return r.useEffect(() => {
    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

    function e() {
      f && (h.dispatch(u.CkL.POPOUT_CLOSE), c.S.dispatch(u.CkL.CONTEXT_MENU_CLOSE))
    }
  }, [n, f, t, h]), r.useEffect(() => {
    var r;
    if (i || !_ || !t) return;
    let {
      current: o
    } = e, a = f;

    function s(t) {
      let n = t.relatedTarget;
      setTimeout(() => {
        null != n && "BUTTON" !== n.tagName || a || d(e)
      }, 100)
    }
    return null == o || o.addEventListener("focusout", s), (null == (r = n.document.activeElement) ? true : r.tagName) === "IFRAME" || a || null == o || o.focus(), () => {
      null == o || o.removeEventListener("focusout", s), a = true
    }
  }, [t, _, i, e, n, f]), p
}