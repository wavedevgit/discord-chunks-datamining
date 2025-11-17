/** Chunk was on web.js **/
/** chunk id: 558065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk579092 = require("./579092.js"),
  Chunk992774 = require("./992774.js");

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
let _ = new Chunk579092.Yd("DirectVideo");
class p {
  addref() {
    this.refcount++
  }
  release() {
    return this.refcount--, 0 === this.refcount
  }
  constructor(e) {
    c(this, "refcount", true), c(this, "stream", true), this.refcount = 1, this.stream = window.createDiscordStream(e)
  }
}
let h = new Map;

function m(e) {
  let t = h.get(e);
  return null == t ? (t = new p(e), (0, l.zS)().addDirectVideoOutputSink(e), h.set(e, t)) : t.addref(), t.stream
}

function g(e) {
  let t = h.get(e);
  null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), h.delete(e))
}

function E(e, t) {
  var {
    streamId: n,
    paused: a = false,
    onReady: s,
    onResize: l,
    reportContainerResized: c = true,
    className: f
  } = e, p = d(e, ["streamId", "paused", "onReady", "onResize", "reportContainerResized", "className"]);
  let h = i.useRef(null),
    E = i.useRef(null),
    b = i.useRef({
      width: 0,
      height: 0
    }),
    y = i.useRef({
      streamId: n,
      paused: a,
      onReady: s,
      onResize: l,
      onContainerResized: t
    });
  return i.useLayoutEffect(() => {
    let {
      current: e
    } = h;

    function t() {
      var e, t, n, r, i, a;
      let {
        width: o,
        height: s
      } = b.current, l = null != (n = null == (e = E.current) ? true : e.videoWidth) ? n : 0, c = null != (r = null == (t = E.current) ? true : t.videoHeight) ? r : 0;
      if (o !== l || s !== c) {
        let e = {
          width: l,
          height: c
        };
        null == (i = (a = y.current).onResize) || i.call(a, e), b.current = e
      }
    }

    function n() {
      var e, t;
      _.info("handleReady for ".concat(y.current.streamId, ", have onReady callback = ").concat(null != y.current.onReady)), null == (e = (t = y.current).onReady) || e.call(t)
    }

    function r() {
      if (!y.current.paused) {
        var e;
        null == (e = E.current) || e.play()
      }
    }
    let i = new ResizeObserver(e => {
      if (c)
        for (let r of e) {
          var t, n;
          if (r.target !== E.current) continue;
          let e = window.devicePixelRatio * r.target.clientWidth,
            i = window.devicePixelRatio * r.target.clientHeight;
          null == (t = (n = y.current).onContainerResized) || t.call(n, y.current.streamId, e, i)
        }
    });
    if (null != e) {
      let a = document.createElement("video");
      a.style.display = "block", a.style.width = "100%", a.style.height = "100%", a.autoplay = true, a.muted = true, a.addEventListener("pause", r), a.addEventListener("resize", t), a.addEventListener("canplaythrough", n), _.info("create video element for ".concat(y.current.streamId, ", readyState=").concat(a.readyState)), a.readyState > 3 && _.error("video element for ".concat(y.current.streamId, " was ready before attached")), e.appendChild(a), i.disconnect(), i.observe(a), E.current = a
    }
  }, [c]), i.useEffect(() => {
    y.current.streamId = n, y.current.paused = a, y.current.onReady = s, y.current.onResize = l
  }), i.useEffect(() => {
    let e = E.current;
    if (null != e)
      if (!a) return _.info("attaching srcObject for ".concat(n)), e.srcObject = m(n), () => {
        g(n), e.srcObject = null
      };
      else null != e.srcObject && (e.srcObject = null, g(n))
  }, [a, n]), (0, r.jsx)("div", u({
    className: o()("media-engine-video", f),
    ref: h
  }, p))
}