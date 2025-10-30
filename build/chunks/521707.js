/** Chunk was on web.js **/
/** chunk id: 521707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => S,
  Jz: () => A,
  Kf: () => N,
  _w: () => C,
  mG: () => w
});
var Chunk398583 = require("./398583.js"),
  Chunk927917 = require("./927917.js"),
  Chunk863427 = require("./863427.js"),
  Chunk743581 = require("./743581.js"),
  Chunk647438 = require("./647438.js"),
  Chunk179506 = require("./179506.js");
let c = null,
  u = new Set,
  d = new Map,
  f = false,
  _ = false,
  p = {
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
  e.target !== window && e.target !== document && !r.uR && e.isTrusted && (f || _ || (c = "virtual", h("virtual", e)), f = false, _ = false)
}

function O() {
  Chunk398583.uR || (f = false, _ = true)
}

function v(e) {
  if ("undefined" == typeof window || "undefined" == typeof document || d.get((0, o.kR)(e))) return;
  let t = (0, o.kR)(e),
    n = (0, o.r3)(e),
    r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    f = true, r.apply(this, arguments)
  }, n.addEventListener("keydown", g, true), n.addEventListener("keyup", g, true), n.addEventListener("click", b, true), t.addEventListener("focus", y, true), t.addEventListener("blur", O, false), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", E, true), n.addEventListener("pointermove", E, true), n.addEventListener("pointerup", E, true)), t.addEventListener("beforeunload", () => {
    I(e)
  }, {
    once: true
  }), d.set(t, {
    focus: r
  })
}
let I = (e, t) => {
  let n = (0, o.kR)(e),
    r = (0, o.r3)(e);
  t && r.removeEventListener("DOMContentLoaded", t), d.has(n) && (n.HTMLElement.prototype.focus = d.get(n).focus, r.removeEventListener("keydown", g, true), r.removeEventListener("keyup", g, true), r.removeEventListener("click", b, true), n.removeEventListener("focus", y, true), n.removeEventListener("blur", O, false), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", E, true), r.removeEventListener("pointermove", E, true), r.removeEventListener("pointerup", E, true)), d.delete(n))
};

function T(e) {
  let t, n = (0, o.r3)(e);
  return "loading" !== n.readyState ? v(e) : (t = () => {
    v(e)
  }, n.addEventListener("DOMContentLoaded", t)), () => I(e, t)
}

function S() {
  return "pointer" !== c
}

function A() {
  return c
}

function C(e) {
  c = e, h(e, null)
}

function N() {
  v();
  let [e, t] = (0, Chunk647438.useState)(c);
  return (0, Chunk647438.useEffect)(() => {
    let e = () => {
      exports(c)
    };
    return u.add(module), () => {
      u.delete(module)
    }
  }, []), (0, Chunk179506.Av)() ? null : module
}
"undefined" != typeof document && T();
let R = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function P(e, t, n) {
  let r = (0, o.r3)(null == n ? true : n.target),
    i = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLInputElement : HTMLInputElement,
    a = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
    s = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLElement : HTMLElement,
    l = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).KeyboardEvent : KeyboardEvent;
  return !((e = e || r.activeElement instanceof i && !R.has(r.activeElement.type) || r.activeElement instanceof a || r.activeElement instanceof s && r.activeElement.isContentEditable) && "keyboard" === t && n instanceof l && !p[n.key])
}

function w(e, t, n) {
  v(), (0, s.useEffect)(() => {
    let t = (t, r) => {
      P(!!(null == n ? true : n.isTextInput), t, r) && e(S())
    };
    return u.add(t), () => {
      u.delete(t)
    }
  }, t)
}