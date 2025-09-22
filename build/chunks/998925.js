/** Chunk was on web.js **/
/** chunk id: 998925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => T,
  Jz: () => S,
  _w: () => A,
  mG: () => R
});
var Chunk784534 = require("./784534.js"),
  Chunk623261 = require("./623261.js"),
  Chunk133999 = require("./133999.js"),
  Chunk253231 = require("./253231.js"),
  Chunk647438 = require("./647438.js");
let l = null,
  c = new Set,
  u = new Map,
  d = false,
  f = false,
  _ = {
    Tab: true,
    Escape: true
  };

function p(e, t) {
  for (let n of c) n(e, t)
}

function h(e) {
  return !(e.metaKey || !(0, i.V5)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
}

function m(e) {
  d = true, h(e) && (l = "keyboard", p("keyboard", e))
}

function g(e) {
  l = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (d = true, p("pointer", e))
}

function E(e) {
  (0, a.Z)(e) && (d = true, l = "virtual")
}

function b(e) {
  e.target !== window && e.target !== document && !r.uR && e.isTrusted && (d || f || (l = "virtual", p("virtual", e)), d = false, f = false)
}

function y() {
  Chunk784534.uR || (d = false, f = true)
}

function O(e) {
  if ("undefined" == typeof window || u.get((0, o.kR)(e))) return;
  let t = (0, o.kR)(e),
    n = (0, o.r3)(e),
    r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    d = true, r.apply(this, arguments)
  }, n.addEventListener("keydown", m, true), n.addEventListener("keyup", m, true), n.addEventListener("click", E, true), t.addEventListener("focus", b, true), t.addEventListener("blur", y, false), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", g, true), n.addEventListener("pointermove", g, true), n.addEventListener("pointerup", g, true)) : (n.addEventListener("mousedown", g, true), n.addEventListener("mousemove", g, true), n.addEventListener("mouseup", g, true)), t.addEventListener("beforeunload", () => {
    v(e)
  }, {
    once: true
  }), u.set(t, {
    focus: r
  })
}
let v = (e, t) => {
  let n = (0, o.kR)(e),
    r = (0, o.r3)(e);
  t && r.removeEventListener("DOMContentLoaded", t), u.has(n) && (n.HTMLElement.prototype.focus = u.get(n).focus, r.removeEventListener("keydown", m, true), r.removeEventListener("keyup", m, true), r.removeEventListener("click", E, true), n.removeEventListener("focus", b, true), n.removeEventListener("blur", y, false), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", g, true), r.removeEventListener("pointermove", g, true), r.removeEventListener("pointerup", g, true)) : (r.removeEventListener("mousedown", g, true), r.removeEventListener("mousemove", g, true), r.removeEventListener("mouseup", g, true)), u.delete(n))
};

function I(e) {
  let t, n = (0, o.r3)(e);
  return "loading" !== n.readyState ? O(e) : (t = () => {
    O(e)
  }, n.addEventListener("DOMContentLoaded", t)), () => v(e, t)
}

function T() {
  return "pointer" !== l
}

function S() {
  return l
}

function A(e) {
  l = e, p(e, null)
}
"undefined" != typeof document && I();
let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function N(e, t, n) {
  let r = (0, o.r3)(null == n ? true : n.target),
    i = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLInputElement : HTMLInputElement,
    a = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
    s = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).HTMLElement : HTMLElement,
    l = "undefined" != typeof window ? (0, o.kR)(null == n ? true : n.target).KeyboardEvent : KeyboardEvent;
  return !((e = e || r.activeElement instanceof i && !C.has(r.activeElement.type) || r.activeElement instanceof a || r.activeElement instanceof s && r.activeElement.isContentEditable) && "keyboard" === t && n instanceof l && !_[n.key])
}

function R(e, t, n) {
  O(), (0, s.useEffect)(() => {
    let t = (t, r) => {
      N(!!(null == n ? true : n.isTextInput), t, r) && e(T())
    };
    return c.add(t), () => {
      c.delete(t)
    }
  }, t)
}