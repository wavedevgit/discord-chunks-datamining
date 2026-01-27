/** Chunk was on web.js **/
/** chunk id: 118019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk511347 = require("./511347.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = c(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let u = Chunk64700.forwardRef(function(e, t) {
  let [n, ...o] = [e, t], {
    muted: c,
    volume: u,
    playing: d,
    playbackRate: f
  } = n, p = l(n, ["muted", "volume", "playing", "playbackRate"]), [_] = o, [h, m] = (0, a.A)(_);
  return i.useEffect(() => {
    let e = h.current;
    null == e || true !== c && (e.muted = c)
  }, [h, c]), i.useEffect(() => {
    let e = h.current;
    null == e || true !== u && (e.volume = u)
  }, [h, u]), i.useEffect(() => {
    let e = h.current;
    null == e || null != f && (e.playbackRate = f)
  }, [h, f]), i.useEffect(() => {
    let e = h.current;
    null == e || true !== d && (d ? e.play() : e.pause())
  }, [h, d]), (0, r.jsx)("audio", s({
    ref: m
  }, p))
})