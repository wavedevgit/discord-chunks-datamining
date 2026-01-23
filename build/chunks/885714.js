/** Chunk was on web.js **/
/** chunk id: 885714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cl: () => C,
  K7: () => P,
  ME: () => T,
  lb: () => N,
  pP: () => S
});
var Chunk89494 = require("./89494.js"),
  Chunk408713 = require("./408713.js"),
  Chunk23975 = require("./23975.js"),
  Chunk297987 = require("./297987.js"),
  Chunk64700 = require("./64700.js"),
  Chunk341221 = require("./341221.js");
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
  return !(e.metaKey || !(0, i.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
}

function g(e) {
  f = true, m(e) && (c = "keyboard", h("keyboard", e))
}

function E(e) {
  c = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (f = true, h("pointer", e))
}

function y(e) {
  (0, a.Y)(e) && (f = true, c = "virtual")
}

function b(e) {
  e.target !== window && e.target !== document && !r.lR && e.isTrusted && (f || p || (c = "virtual", h("virtual", e)), f = false, p = false)
}

function O() {
  r.lR || (f = false, p = true)
}

function v(e) {
  if ("u" < typeof window || "u" < typeof document || d.get((0, s.mD)(e))) return;
  let t = (0, s.mD)(e),
    n = (0, s.TW)(e),
    r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    f = true, r.apply(this, arguments)
  }, n.addEventListener("keydown", g, true), n.addEventListener("keyup", g, true), n.addEventListener("click", y, true), t.addEventListener("focus", b, true), t.addEventListener("blur", O, false), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", E, true), n.addEventListener("pointermove", E, true), n.addEventListener("pointerup", E, true)), t.addEventListener("beforeunload", () => {
    A(e)
  }, {
    once: true
  }), d.set(t, {
    focus: r
  })
}
let A = (e, t) => {
  let n = (0, s.mD)(e),
    r = (0, s.TW)(e);
  t && r.removeEventListener("DOMContentLoaded", t), d.has(n) && (n.HTMLElement.prototype.focus = d.get(n).focus, r.removeEventListener("keydown", g, true), r.removeEventListener("keyup", g, true), r.removeEventListener("click", y, true), n.removeEventListener("focus", b, true), n.removeEventListener("blur", O, false), "u" > typeof PointerEvent && (r.removeEventListener("pointerdown", E, true), r.removeEventListener("pointermove", E, true), r.removeEventListener("pointerup", E, true)), d.delete(n))
};

function I(e) {
  let t, n = (0, s.TW)(e);
  return "loading" !== n.readyState ? v(e) : (t = () => {
    v(e)
  }, n.addEventListener("DOMContentLoaded", t)), () => A(e, t)
}

function S() {
  return "pointer" !== c
}

function T() {
  return c
}

function C(e) {
  c = e, h(e, null)
}

function N() {
  v();
  let [e, t] = (0, o.useState)(c);
  return (0, o.useEffect)(() => {
    let e = () => {
      t(c)
    };
    return u.add(e), () => {
      u.delete(e)
    }
  }, []), (0, l.wR)() ? null : e
}
"u" > typeof document && I();
let w = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function R(e, t, n) {
  let r = (0, s.TW)(null == n ? true : n.target),
    i = "u" > typeof window ? (0, s.mD)(null == n ? true : n.target).HTMLInputElement : HTMLInputElement,
    a = "u" > typeof window ? (0, s.mD)(null == n ? true : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
    o = "u" > typeof window ? (0, s.mD)(null == n ? true : n.target).HTMLElement : HTMLElement,
    l = "u" > typeof window ? (0, s.mD)(null == n ? true : n.target).KeyboardEvent : KeyboardEvent;
  return !((e = e || r.activeElement instanceof i && !w.has(r.activeElement.type) || r.activeElement instanceof a || r.activeElement instanceof o && r.activeElement.isContentEditable) && "keyboard" === t && n instanceof l && !_[n.key])
}

function P(e, t, n) {
  v(), (0, o.useEffect)(() => {
    let t = (t, r) => {
      R(!!(null == n ? true : n.isTextInput), t, r) && e(S())
    };
    return u.add(t), () => {
      u.delete(t)
    }
  }, t)
}