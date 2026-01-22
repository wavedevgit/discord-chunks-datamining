/** Chunk was on web.js **/
/** chunk id: 713517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  M: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function s(e) {
  let [t, n] = r.useState(false), [s, o] = r.useState(false), l = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
  r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), o(false);
    let r = () => n(true),
      i = () => n(false),
      a = () => o(true),
      s = e => {
        t.contains(e.relatedTarget) || o(false)
      };
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), t.addEventListener("focusin", a), t.addEventListener("focusout", s), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i), t.removeEventListener("focusin", a), t.removeEventListener("focusout", s)
    }
  }, [e]);
  let c = l && s;
  return {
    isHovering: t,
    isFocusing: c,
    isHoveringOrFocusing: t || c
  }
}

function o(e) {
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