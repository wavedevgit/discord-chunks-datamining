/** Chunk was on web.js **/
/** chunk id: 825040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk970838 = require("./970838.js"),
  Chunk376398 = require("./376398.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  var {
    streamId: t,
    paused: n = false,
    onReady: a,
    onResize: c,
    className: f
  } = e, p = d(e, ["streamId", "paused", "onReady", "onResize", "className"]);
  let _ = i.useRef(null),
    h = i.useRef({
      width: 0,
      height: 0
    });
  i.useLayoutEffect(() => {
    let e = _.current;
    if (null != e) return (0, s.rY)(t), e.srcObject = (0, l.aG)(t), () => {
      (0, s.Bw)(t), e.srcObject = null, e.load()
    }
  }, [t]), i.useEffect(() => {
    var e, r;
    return n ? (null == (e = _.current) || e.pause(), (0, s.Bw)(t)) : null == (r = _.current) || r.play().catch(() => {}), () => {
      n && (0, s.rY)(t)
    }
  }, [n]);
  let m = i.useCallback(() => {
    var e, t, n, r;
    let {
      width: i,
      height: a
    } = h.current, o = null != (n = null == (e = _.current) ? true : e.videoWidth) ? n : 0, s = null != (r = null == (t = _.current) ? true : t.videoHeight) ? r : 0;
    if (i !== o || a !== s) {
      let e = {
        width: o,
        height: s
      };
      null == c || c(e), h.current = e
    }
  }, [c]);
  i.useLayoutEffect(() => {
    let e = _.current;
    if (null != e) return e.addEventListener("resize", m), () => e.removeEventListener("resize", m)
  }, [m]);
  let g = i.useCallback(() => {
      null == a || a()
    }, [a]),
    E = i.useCallback(e => {
      n || e.currentTarget.play()
    }, [n]);
  return (0, r.jsx)("video", u({
    className: o()("media-engine-video", f),
    ref: _,
    autoPlay: true,
    onPause: E,
    onCanPlayThrough: g,
    muted: true
  }, p))
}