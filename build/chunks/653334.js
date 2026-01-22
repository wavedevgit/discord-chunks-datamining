/** Chunk was on web.js **/
/** chunk id: 653334, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./896048.js");
class i {
  getConsoleArgs(e, t) {
    return ["".concat(i.getDateTimeString(), " ").concat(this.name, ": ").concat(e), ...t]
  }
  log(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    console.log.apply(console, this.getConsoleArgs(e, n))
  }
  info(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    console.info.apply(console, this.getConsoleArgs(e, n))
  }
  warn(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    console.warn.apply(console, this.getConsoleArgs(e, n))
  }
  error(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    console.error.apply(console, this.getConsoleArgs(e, n))
  }
  static getDateTimeString() {
    return new Date().toISOString()
  }
  constructor(e) {
    r(this, "name", true), this.name = e
  }
}