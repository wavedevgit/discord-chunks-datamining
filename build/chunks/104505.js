/** Chunk was on web.js **/
/** chunk id: 104505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s,
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function o(e) {
  let [t, n] = r.useState(false), [o, s] = r.useState(false), l = r.useRef(e.current), c = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled);
  r.useEffect(() => {
    l.current = e.current
  }, [e]), r.useEffect(() => {
    let e = l.current;
    if (null == e) return;
    n(false), s(false);
    let t = () => n(true),
      r = () => n(false),
      i = () => s(true),
      a = t => {
        e.contains(t.relatedTarget) || s(false)
      };
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), e.addEventListener("focusin", i), e.addEventListener("focusout", a), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r), e.removeEventListener("focusin", i), e.removeEventListener("focusout", a)
    }
  }, [l]);
  let u = c && o;
  return {
    isHovering: t,
    isFocusing: u,
    isHoveringOrFocusing: t || u
  }
}

function s(e) {
  let [t, n] = r.useState(false), i = r.useRef(e.current);
  return r.useEffect(() => {
    i.current = e.current
  }, [e]), r.useEffect(() => {
    let e = i.current;
    if (null == e) return;
    let t = () => n(true),
      r = () => n(false);
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r)
    }
  }, [i]), t
}