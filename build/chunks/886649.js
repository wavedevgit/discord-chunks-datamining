/** Chunk was on web.js **/
/** chunk id: 886649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xp: () => o
});
var Chunk975318 = require("./975318.js"),
  Chunk98076 = require("./98076.js");

function o(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: true,
      configurable: true
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
  if (!isPlainObject(e)) returnfalse;
  try {
    let t = Object.getPrototypeOf(e).constructor.name;
    return !t || "Object" === t
  } catch (e) {
    returntrue
  }
}