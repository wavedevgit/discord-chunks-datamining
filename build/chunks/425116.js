/** Chunk was on web.js **/
/** chunk id: 425116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk936926 = require("./936926.js"),
  Chunk390660 = require("./390660.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 6e4,
  c = false,
  u = null;

function d() {
  var e, t, n;
  return !!(0, a.Eq)({
    location: "RestrictedHoursManager"
  }) && null != (e = null == (n = i.default.getCurrentUser()) || null == (t = n.restrictedSchedule) ? true : t.isInRestrictedHours()) && e
}

function f() {
  let e = d();
  e !== c && ((c = e) ? (0, o.u)() : (0, o.k)())
}

function p() {
  f()
}
class _ extends Chunk439372.A {
  _initialize() {
    (c = d()) && (0, o.u)(), u = setInterval(f, l)
  }
  _terminate() {
    null != u && (clearInterval(u), u = null), (0, o.k)(), c = false
  }
  constructor(...e) {
    super(...e), s(this, "stores", new Map().set(i.default, p))
  }
}
let h = new _