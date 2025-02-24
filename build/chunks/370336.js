/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  xp: () => o
});
var r = n(176984),
  i = n(622916);

function o(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      configurable: !0
    })
  } catch (n) {
    r.X && i.kg.log(`Failed to add non-enumerable property "${t}" to object`, e)
  }
}

function a(e) {
  try {
    return isElement(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e)
  } catch (e) {
    return "<unknown>"
  }
}

function s(e) {
  if ("object" != typeof e || null === e) return {};
  {
    let t = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t
  }
}

function l(e) {
  if (!isPlainObject(e)) return !1;
  try {
    let t = Object.getPrototypeOf(e).constructor.name;
    return !t || "Object" === t
  } catch (e) {
    return !0
  }
}