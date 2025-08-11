/** Chunk was on web.js **/
/** chunk id: 579092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bl: () => c,
  Sm: () => u,
  Yd: () => d,
  _n: () => s
}), require("./388685.js");
var Chunk351527 = require("./351527.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = "\nfont-weight: bold;\ncolor: purple;\n",
  a = () => {};

function s(e) {
  a = e
}
let l = () => {};

function c(e) {
  l = e
}

function u(e, t, n) {
  for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++) i[a - 3] = arguments[a];
  "file-only" !== t && console[t]("%c[".concat(e, "]"), o, n, ...i)
}
class d {
  enableNativeLogger(e) {
    this.nativeLoggerEnabled = e
  }
  constructor(e = "default") {
    var t = this;
    i(this, "name", true), i(this, "nativeLoggerEnabled", true), i(this, "logDangerously", function(e) {
      for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      a(t.name, "log", e, ...r), t.nativeLoggerEnabled && (null == l || l(t.name, "log", e, ...r))
    }), i(this, "log", function(e) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
      (0, r.c)(e, ...i), a(t.name, "log", e, ...i), t.nativeLoggerEnabled && (null == l || l(t.name, "log", e, ...i))
    }), i(this, "verboseDangerously", function(e) {
      for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      a(t.name, "debug", e, ...r), t.nativeLoggerEnabled && (null == l || l(t.name, "debug", e, ...r))
    }), i(this, "verbose", function(e) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
      (0, r.c)(e, ...i), a(t.name, "debug", e, ...i), t.nativeLoggerEnabled && (null == l || l(t.name, "debug", e, ...i))
    }), i(this, "info", function(e) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
      (0, r.c)(e, ...i), a(t.name, "info", e, ...i), t.nativeLoggerEnabled && (null == l || l(t.name, "info", e, ...i))
    }), i(this, "warn", function(e) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
      (0, r.c)(e, ...i), a(t.name, "warn", e, ...i), t.nativeLoggerEnabled && (null == l || l(t.name, "warn", e, ...i))
    }), i(this, "error", function(e) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
      (0, r.c)(e, ...i), a(t.name, "error", e, ...i), t.nativeLoggerEnabled && (null == l || l(t.name, "error", e, ...i))
    }), i(this, "trace", function(e) {
      for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      a(t.name, "trace", e, ...r), t.nativeLoggerEnabled && (null == l || l(t.name, "trace", e, ...r))
    }), i(this, "time", (e, t) => {
      let n = Date.now(),
        r = t();
      return this.log(e, Date.now() - n), r
    }), i(this, "fileOnly", function(e) {
      for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      a(t.name, "file-only", e, ...r), t.nativeLoggerEnabled && (null == l || l(t.name, "file-only", e, ...r))
    }), this.name = e, this.nativeLoggerEnabled = false
  }
}