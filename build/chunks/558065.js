/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(665443),
  a = n.n(o),
  s = n(259443),
  l = n(992774);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let p = new s.Yd("DirectVideo");
class _ {
  addref() {
    this.refcount++
  }
  release() {
    return this.refcount--, 0 === this.refcount
  }
  constructor(e) {
    c(this, "refcount", void 0), c(this, "stream", void 0), this.refcount = 1, this.stream = window.createDiscordStream(e)
  }
}
let h = new Map;

function m(e) {
  let t = h.get(e);
  return null == t ? (t = new _(e), (0, l.zS)().addDirectVideoOutputSink(e), h.set(e, t)) : t.addref(), t.stream
}

function g(e) {
  let t = h.get(e);
  null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), h.delete(e))
}

function E(e, t) {
  var {
    streamId: n,
    paused: o,
    onReady: s,
    onResize: l,
    className: c
  } = e, f = d(e, ["streamId", "paused", "onReady", "onResize", "className"]);
  let _ = i.useRef(null),
    h = i.useRef(null),
    E = i.useRef({
      width: 0,
      height: 0
    }),
    v = i.useRef({
      streamId: n,
      paused: o,
      onReady: s,
      onResize: l,
      onContainerResized: t
    });
  return i.useLayoutEffect(() => {
    let {
      current: e
    } = _;

    function t() {
      var e, t, n, r, i, o;
      let {
        width: a,
        height: s
      } = E.current, l = null !== (n = null === (e = h.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, c = null !== (r = null === (t = h.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
      if (a !== l || s !== c) {
        let e = {
          width: l,
          height: c
        };
        null === (i = (o = v.current).onResize) || void 0 === i || i.call(o, e), E.current = e
      }
    }

    function n() {
      var e, t;
      p.info("handleReady for ".concat(v.current.streamId, ", have onReady callback = ").concat(null != v.current.onReady)), null === (e = (t = v.current).onReady) || void 0 === e || e.call(t)
    }

    function r() {
      if (!v.current.paused) {
        var e;
        null === (e = h.current) || void 0 === e || e.play()
      }
    }
    let i = new ResizeObserver(e => {
      for (let r of e) {
        var t, n;
        if (r.target !== h.current) continue;
        let e = window.devicePixelRatio * r.target.clientWidth,
          i = window.devicePixelRatio * r.target.clientHeight;
        null === (t = (n = v.current).onContainerResized) || void 0 === t || t.call(n, v.current.streamId, e, i)
      }
    });
    if (null != e) {
      let o = document.createElement("video");
      o.style.display = "block", o.style.width = "100%", o.style.height = "100%", o.autoplay = !0, o.muted = !0, o.addEventListener("pause", r), o.addEventListener("resize", t), o.addEventListener("canplaythrough", n), p.info("create video element for ".concat(v.current.streamId, ", readyState=").concat(o.readyState)), o.readyState > 3 && p.error("video element for ".concat(v.current.streamId, " was ready before attached")), e.appendChild(o), i.disconnect(), i.observe(o), h.current = o
    }
  }, []), i.useEffect(() => {
    v.current.streamId = n, v.current.paused = o, v.current.onReady = s, v.current.onResize = l
  }), i.useEffect(() => {
    let e = h.current;
    if (null != e) {
      if (!o) return p.info("attaching srcObject for ".concat(n)), e.srcObject = m(n), () => {
        g(n), e.srcObject = null
      };
      null != e.srcObject && (e.srcObject = null, g(n))
    }
  }, [o, n]), (0, r.jsx)("div", u({
    className: a()("media-engine-video", c),
    ref: _
  }, f))
}
E.defaultProps = {
  paused: !1
}