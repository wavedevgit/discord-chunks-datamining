/** Chunk was on web.js **/
/** chunk id: 935616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./801460.js"), require("./508300.js"), require("./650828.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk643612 = require("./643612.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    poster: t,
    src: n,
    width: s,
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
  }, [d]), c <= o.AaC && u <= o.oJQ || c <= o.oJQ && u <= o.AaC) ? (0, r.jsx)(a.A, {
    ref: h,
    className: f,
    poster: t,
    src: n,
    width: s,
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
    width: s,
    height: l
  })
}

function m(e) {
  let {
    src: t,
    poster: n,
    naturalWidth: i,
    naturalHeight: a,
    responsive: o,
    autoPlay: c,
    className: d,
    playable: _ = true,
    renderImageComponent: m,
    alt: g = l.intl.string(l.t.I5gL2H),
    sourceMetadata: E
  } = e, y = p(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt", "sourceMetadata"]);
  return (0, r.jsx)(s.G.Consumer, {
    children: e => m(f(u({}, y), {
      alt: g,
      src: n,
      containerClassName: d,
      autoPlay: c,
      animated: _,
      responsive: o,
      renderAccessory: e,
      tabIndex: _ ? 0 : false,
      dataSafeSrc: t,
      children(e) {
        let {
          src: n,
          size: s,
          animating: l,
          alt: c
        } = e;
        return (0, r.jsx)(h, {
          alt: c,
          className: d,
          poster: n,
          src: t,
          width: s.width,
          height: s.height,
          naturalWidth: i,
          naturalHeight: a,
          responsive: o,
          play: _ && l
        })
      },
      sourceMetadata: E,
      analyticsSource: "LazyGIFV"
    }))
  })
}