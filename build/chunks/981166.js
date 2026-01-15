/** Chunk was on web.js **/
/** chunk id: 981166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => T,
  Jz: () => C,
  Kf: () => N,
  _w: () => A,
  mG: () => R
});
var Chunk990415 = require("./990415.js"),
  Chunk21814 = require("./21814.js"),
  Chunk383669 = require("./383669.js"),
  Chunk477232 = require("./477232.js"),
  Chunk473749 = require("./473749.js"),
  Chunk112683 = require("./112683.js");
let c = null,
  u = new Set,
  d = new Map,
  f = false,
  p = false,
  _ = {
    Tab: true,
    Escape: true
  };

function h(e, t) {
  for (let n of u) n(e, t)
}

function m(e) {
  return !(e.metaKey || !(0, i.V5)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
}

function g(e) {
  f = true, m(e) && (c = "keyboard", h("keyboard", e))
}

function E(e) {
  c = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (f = true, h("pointer", e))
}

function b(e) {
  (0, a.Z)(e) && (f = true, c = "virtual")
}

function y(e) {
  e.target !== window && e.target !== document && !r.uR && e.isTrusted && (f || p || (c = "virtual", h("virtual", e)), f = false, p = false)
}

function O() {
  r.uR || (f = false, p = true)
}

function v(e) {
  if ("undefined" == typeof window || "undefined" == typeof document || d.get((0, o.kR)(e))) return;
  let t = (0, o.kR)(e),
    n = (0, o.r3)(e),
    r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    f = true, r.apply(this, arguments)
  }, n.addEventListener("keydown", g, true), n.addEventListener("keyup", g, true), n.addEventListener("click", b, true), t.addEventListener("focus", y, true), t.addEventListener("blur", O, false), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", E, true), n.addEventListener("pointermove", E, true), n.addEventListener("pointerup", E, true)), t.addEventListener("beforeunload", () => {
    S(e)
  }, {
    once: true
  }), d.set(t, {
    focus: r
  })
}
let S = (e, t) => {
  let n = (0, o.kR)(e),
    r = (0, o.r3)(e);
  t && r.removeEventListener("DOMContentLoaded", t), d.has(n) && (n.HTMLElement.prototype.focus = d.get(n).focus, r.removeEventListener("keydown", g, true), r.removeEventListener("keyup", g, true), r.removeEventListener("click", b, true), n.removeEventListener("focus", y, true), n.removeEventListener("blur", O, false), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", E, true), r.removeEventListener("pointermove", E, true), r.removeEventListener("pointerup", E, true)), d.delete(n))
};

function I(e) {
  let t, n = (0, o.r3)(e);
  return "loading" !== n.readyState ? v(e) : (t = () => {
    v(e)
  }, n.addEventListener("DOMContentLoaded", t)), () => S(e, t)
}

function T() {
  return "pointer" !== c
}

function C() {
  return c
}

function A(e) {
  c = e, h(e, null)
}

function N() {
  v();
  let [e, t] = (0, s.useState)(c);
  return (0, s.useEffect)(() => {
    let e = () => {
      t(c)
    };
    return u.add(e), () => {
      u.delete(e)
    }
  }, []), (0, l.Av)() ? null : e
}
"undefined" != typeof document && I();
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function w(e, t, n) {
  let r = (0, o.r3)(null == n ? true : n.target),
    i = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLInputElement : HTMLInputElement,
    a = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
    s = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLElement : HTMLElement,
    l = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).KeyboardEvent : KeyboardEvent;
  return !((e = e || r.activeElement instanceof i && !P.has(r.activeElement.type) || r.activeElement instanceof a || r.activeElement instanceof s && r.activeElement.isContentEditable) && "keyboard" === t && n instanceof l && !_[n.key])
}

function R(e, t, n) {
  v(), (0, s.useEffect)(() => {
    let t = (t, r) => {
      w(!!(null == n ? true : n.isTextInput), t, r) && e(T())
    };
    return u.add(t), () => {
      u.delete(t)
    }
  }, t)
}