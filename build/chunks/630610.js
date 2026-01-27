/** Chunk was on web.js **/
/** chunk id: 630610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  my: () => a
});
var Chunk919015 = require("./919015.js"),
  Chunk478681 = require("./478681.js");

function a(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: true,
      configurable: true
    })
  } catch (n) {
    r.T && i.vF.log(`Failed to add non-enumerable property "${t}" to object`, e)
  }
}

function o(e) {
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