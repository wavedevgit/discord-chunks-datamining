/** Chunk was on web.js **/
/** chunk id: 62170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk623113 = require("./623113.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let u = Chunk473749.forwardRef(function(e, t) {
  var {
    muted: n,
    volume: a,
    playing: c,
    playbackRate: u
  } = e, d = l(e, ["muted", "volume", "playing", "playbackRate"]);
  let [f, p] = (0, o.Z)(t);
  return i.useEffect(() => {
    let e = f.current;
    null != e && true !== n && (e.muted = n)
  }, [f, n]), i.useEffect(() => {
    let e = f.current;
    null != e && true !== a && (e.volume = a)
  }, [f, a]), i.useEffect(() => {
    let e = f.current;
    null != e && null != u && (e.playbackRate = u)
  }, [f, u]), i.useEffect(() => {
    let e = f.current;
    null != e && true !== c && (c ? e.play() : e.pause())
  }, [f, c]), (0, r.jsx)("audio", s({
    ref: p
  }, d))
})