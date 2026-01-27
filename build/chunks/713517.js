/** Chunk was on web.js **/
/** chunk id: 713517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  M: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function o(e) {
  let [t, n] = r.useState(false), [o, s] = r.useState(false), l = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
  r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), s(false);
    let r = () => n(true),
      i = () => n(false),
      a = () => s(true),
      o = e => {
        t.contains(e.relatedTarget) || s(false)
      };
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), t.addEventListener("focusin", a), t.addEventListener("focusout", o), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i), t.removeEventListener("focusin", a), t.removeEventListener("focusout", o)
    }
  }, [e]);
  let c = l && o;
  return {
    isHovering: t,
    isFocusing: c,
    isHoveringOrFocusing: t || c
  }
}

function s(e) {
  let [t, n] = r.useState(false);
  return r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    let r = () => n(true),
      i = () => n(false);
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i)
    }
  }, [e]), t
}