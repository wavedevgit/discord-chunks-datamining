/** Chunk was on web.js **/
/** chunk id: 44824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./853839.js"), require("./570086.js"), require("./479048.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk947849 = require("./947849.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    poster: t,
    src: n,
    width: o,
    height: l,
    naturalWidth: c,
    naturalHeight: u,
    play: d = true,
    className: f,
    alt: p,
    responsive: _
  } = e, h = i.useRef(null);
  return (i.useEffect(() => {
    let {
      current: e
    } = h;
    if (d) {
      var t;
      null == e || null == (t = e.play()) || t.catch(e => {
        if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e
      })
    } else null == e || e.pause()
  }, [d]), c <= s.N_j && u <= s.XKF || c <= s.XKF && u <= s.N_j) ? (0, r.jsx)(a.Z, {
    ref: h,
    className: f,
    poster: t,
    src: n,
    width: o,
    height: l,
    responsive: _,
    muted: true,
    loop: true,
    autoPlay: d,
    playsInline: true,
    preload: "none",
    "aria-label": p
  }) : (0, r.jsx)("img", {
    alt: "",
    src: t,
    width: o,
    height: l
  })
}

function m(e) {
  var {
    src: t,
    poster: n,
    naturalWidth: i,
    naturalHeight: a,
    responsive: s,
    autoPlay: c,
    className: d,
    playable: _ = true,
    renderImageComponent: m,
    alt: g = l.intl.string(l.t.I5gL2H),
    sourceMetadata: E
  } = e, b = p(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt", "sourceMetadata"]);
  return (0, r.jsx)(o.h.Consumer, {
    children: e => m(f(u({}, b), {
      alt: g,
      src: n,
      containerClassName: d,
      autoPlay: c,
      animated: _,
      responsive: s,
      renderAccessory: e,
      tabIndex: _ ? 0 : false,
      dataSafeSrc: t,
      children(e) {
        let {
          src: n,
          size: o,
          animating: l,
          alt: c
        } = e;
        return (0, r.jsx)(h, {
          alt: c,
          className: d,
          poster: n,
          src: t,
          width: o.width,
          height: o.height,
          naturalWidth: i,
          naturalHeight: a,
          responsive: s,
          play: _ && l
        })
      },
      sourceMetadata: E,
      analyticsSource: "LazyGIFV"
    }))
  })
}