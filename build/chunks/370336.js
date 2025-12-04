/** Chunk was on web.js **/
/** chunk id: 370336, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Sh: () => o
});
var Chunk467510 = require("./467510.js"),
  Chunk573736 = require("./573736.js");

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
  if ((0, i.VZ)(e)) return {
    message: e.message,
    name: e.name,
    stack: e.stack,
    ...l(e)
  };
  if (!(0, i.cO)(e)) return e;
  {
    let t = {
      type: e.type,
      target: s(e.target),
      currentTarget: s(e.currentTarget),
      ...l(e)
    };
    return "undefined" != typeof CustomEvent && (0, i.V9)(e, CustomEvent) && (t.detail = e.detail), t
  }
}

function s(e) {
  try {
    return (0, i.kK)(e) ? (0, r.Rt)(e) : Object.prototype.toString.call(e)
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