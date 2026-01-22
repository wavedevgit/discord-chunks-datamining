/** Chunk was on web.js **/
/** chunk id: 931266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk118356 = require("./118356.js"),
  Chunk823598 = require("./823598.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = new Chunk118356.Vy("DirectVideo");
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
let h = new Map;

function m(e) {
  let t = h.get(e);
  return null == t ? (t = new _(e), (0, l.lE)().addDirectVideoOutputSink(e), h.set(e, t)) : t.addref(), t.stream
}

function g(e) {
  let t = h.get(e);
  null != t && t.release() && ((0, l.lE)().removeDirectVideoOutputSink(e), h.delete(e))
}

function E(e, t) {
  let [n, ...a] = [e, t], {
    streamId: o,
    paused: l = false,
    onReady: c,
    onResize: f,
    reportContainerResized: _ = true,
    className: h
  } = n, E = d(n, ["streamId", "paused", "onReady", "onResize", "reportContainerResized", "className"]), [b] = a, y = i.useRef(null), O = i.useRef(null), A = i.useRef({
    width: 0,
    height: 0
  }), v = i.useRef({
    streamId: o,
    paused: l,
    onReady: c,
    onResize: f,
    onContainerResized: b
  });
  return i.useLayoutEffect(() => {
    let {
      current: e
    } = y;

    function t() {
      var e, t, n, r, i, a;
      let {
        width: s,
        height: o
      } = A.current, l = null != (e = null == (n = O.current) ? true : n.videoWidth) ? e : 0, c = null != (t = null == (r = O.current) ? true : r.videoHeight) ? t : 0;
      if (s !== l || o !== c) {
        let e = {
          width: l,
          height: c
        };
        null == (i = (a = v.current).onResize) || i.call(a, e), A.current = e
      }
    }

    function n() {
      var e, t;
      p.info("handleReady for ".concat(v.current.streamId, ", have onReady callback = ").concat(null != v.current.onReady)), null == (e = (t = v.current).onReady) || e.call(t)
    }

    function r() {
      if (!v.current.paused) {
        var e;
        null == (e = O.current) || e.play()
      }
    }
    let i = new ResizeObserver(e => {
      if (_)
        for (let r of e) {
          var t, n;
          if (r.target !== O.current) continue;
          let e = window.devicePixelRatio * r.target.clientWidth,
            i = window.devicePixelRatio * r.target.clientHeight;
          null == (t = (n = v.current).onContainerResized) || t.call(n, v.current.streamId, e, i)
        }
    });
    if (null != e) {
      let a = document.createElement("video");
      a.style.display = "block", a.style.width = "100%", a.style.height = "100%", a.autoplay = true, a.muted = true, a.addEventListener("pause", r), a.addEventListener("resize", t), a.addEventListener("canplaythrough", n), p.info("create video element for ".concat(v.current.streamId, ", readyState=").concat(a.readyState)), a.readyState > 3 && p.error("video element for ".concat(v.current.streamId, " was ready before attached")), e.appendChild(a), i.disconnect(), i.observe(a), O.current = a
    }
  }, [_]), i.useEffect(() => {
    v.current.streamId = o, v.current.paused = l, v.current.onReady = c, v.current.onResize = f
  }), i.useEffect(() => {
    let e = O.current;
    if (null != e)
      if (!l) return p.info("attaching srcObject for ".concat(o)), e.srcObject = m(o), () => {
        g(o), e.srcObject = null
      };
      else null != e.srcObject && (e.srcObject = null, g(o))
  }, [l, o]), (0, r.jsx)("div", u({
    className: s()("media-engine-video", h),
    ref: y
  }, E))
}