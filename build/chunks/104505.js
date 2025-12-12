/** Chunk was on web.js **/
/** chunk id: 104505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s,
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function a(e) {
  let [t, n] = r.useState(false), [a, s] = r.useState(false), l = (0, i.e7)([o.Z], () => o.Z.keyboardModeEnabled);
  r.useEffect(() => {
    let t = e.current;
    if (null == t) return;
    n(false), s(false);
    let r = () => n(true),
      i = () => n(false),
      o = () => s(true),
      a = e => {
        t.contains(e.relatedTarget) || s(false)
      };
    return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), t.addEventListener("focusin", o), t.addEventListener("focusout", a), () => {
      t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i), t.removeEventListener("focusin", o), t.removeEventListener("focusout", a)
    }
  }, [e]);
  let c = l && a;
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