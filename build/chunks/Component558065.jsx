/** Chunk was on web.js **/
/** chunk id: 558065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = new Chunk579092.Yd("DirectVideo");
class _ {
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
let m = new Map;

function h(e) {
  let t = m.get(e);
  return null == t ? (t = new _(e), (0, l.zS)().addDirectVideoOutputSink(e), m.set(e, t)) : t.addref(), t.stream
}

function g(e) {
  let t = m.get(e);
  null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), m.delete(e))
}

function E(e, t) {
  var {
    streamId: n,
    paused: o = false,
    onReady: s,
    onResize: l,
    reportContainerResized: c = true,
    className: f
  } = e, _ = d(e, ["streamId", "paused", "onReady", "onResize", "reportContainerResized", "className"]);
  let m = i.useRef(null),
    E = i.useRef(null),
    b = i.useRef({
      width: 0,
      height: 0
    }),
    y = i.useRef({
      streamId: n,
      paused: o,
      onReady: s,
      onResize: l,
      onContainerResized: t
    });
  return i.useLayoutEffect(() => {
    let {
      current: e
    } = m;

    function t() {
      var e, t, n, r, i, o;
      let {
        width: a,
        height: s
      } = b.current, l = null != (n = null == (e = E.current) ? true : e.videoWidth) ? n : 0, c = null != (r = null == (t = E.current) ? true : t.videoHeight) ? r : 0;
      if (a !== l || s !== c) {
        let e = {
          width: l,
          height: c
        };
        null == (i = (o = y.current).onResize) || i.call(o, e), b.current = e
      }
    }

    function n() {
      var e, t;
      p.info("handleReady for ".concat(y.current.streamId, ", have onReady callback = ").concat(null != y.current.onReady)), null == (e = (t = y.current).onReady) || e.call(t)
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
      let o = document.createElement("video");
      o.style.display = "block", o.style.width = "100%", o.style.height = "100%", o.autoplay = true, o.muted = true, o.addEventListener("pause", r), o.addEventListener("resize", t), o.addEventListener("canplaythrough", n), p.info("create video element for ".concat(y.current.streamId, ", readyState=").concat(o.readyState)), o.readyState > 3 && p.error("video element for ".concat(y.current.streamId, " was ready before attached")), e.appendChild(o), i.disconnect(), i.observe(o), E.current = o
    }
  }, [c]), i.useEffect(() => {
    y.current.streamId = n, y.current.paused = o, y.current.onReady = s, y.current.onResize = l
  }), i.useEffect(() => {
    let e = E.current;
    if (null != e)
      if (!o) return p.info("attaching srcObject for ".concat(n)), e.srcObject = h(n), () => {
        g(n), e.srcObject = null
      };
      else null != e.srcObject && (e.srcObject = null, g(n))
  }, [o, n]), (0, r.jsx)("div", u({
    className: a()("media-engine-video", f),
    ref: m
  }, _))
}