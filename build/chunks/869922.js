/** Chunk was on web.js **/
/** chunk id: 869922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W4: () => o
});
var Chunk142809 = require("./142809.js"),
  Chunk550505 = require("./550505.js");

function a(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: true,
      configurable: true
    })
  } catch (n) {
    DEBUG_BUILD && logger.log(`Failed to add non-enumerable property "${t}" to object`, e)
  }
}

function o(e) {
  if ((0, i.bJ)(e)) return {
    message: e.message,
    name: e.name,
    stack: e.stack,
    ...l(e)
  };
  if (!(0, i.xH)(e)) return e;
  {
    let t = {
      type: e.type,
      target: s(e.target),
      currentTarget: s(e.currentTarget),
      ...l(e)
    };
    return "u" > typeof CustomEvent && (0, i.tH)(e, CustomEvent) && (t.detail = e.detail), t
  }
}

function s(e) {
  try {
    return (0, i.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e)
  } catch (e) {
    return "<unknown>"
  }
}

function l(e) {
  if ("object" != typeof e || null === e) return {};
  {
    let t = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t
  }
}

function c(e) {
  if (!isPlainObject(e)) returnfalse;
  try {
    let t = Object.getPrototypeOf(e).constructor.name;
    return !t || "Object" === t
  } catch (e) {
    returntrue
  }
}