/** Chunk was on web.js **/
/** chunk id: 616780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u
}), require("./951288.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711);
require("./902704.js");
var Chunk941028 = require("./941028.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function u(e) {
  r.useEffect(() => (a().forEach(e, (e, t) => (0, o.ym)(t, e)), () => {
    a().forEach(e, (e, t) => (0, o.w5)(t, e))
  }), [e])
}