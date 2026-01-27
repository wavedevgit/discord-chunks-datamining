/** Chunk was on 40396 **/
/** chunk id: 935616, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./801460.js"), require("./508300.js"), require("./650828.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk643612 = require("./643612.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    poster: l,
    src: t,
    width: s,
    height: o,
    naturalWidth: u,
    naturalHeight: d,
    play: c = true,
    className: h,
    alt: p,
    responsive: m
  } = e, g = n.useRef(null);
  return (n.useEffect(() => {
    let {
      current: e
    } = g;
    if (c) {
      var l;
      null == e || null == (l = e.play()) || l.catch(e => {
        if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e
      })
    } else null == e || e.pause()
  }, [c]), u <= a.AaC && d <= a.oJQ || u <= a.oJQ && d <= a.AaC) ? (0, r.jsx)(i.A, {
    ref: g,
    className: h,
    poster: l,
    src: t,
    width: s,
    height: o,
    responsive: m,
    muted: true,
    loop: true,
    autoPlay: c,
    playsInline: true,
    preload: "none",
    "aria-label": p
  }) : (0, r.jsx)("img", {
    alt: "",
    src: l,
    width: s,
    height: o
  })
}

function d(e) {
  let {
    src: l,
    poster: t,
    naturalWidth: n,
    naturalHeight: i,
    responsive: a,
    autoPlay: d,
    className: c,
    playable: h = true,
    renderImageComponent: p,
    alt: m = o.intl.string(o.t.I5gL2H),
    sourceMetadata: g
  } = e, f = function(e, l) {
    if (null == e) return {};
    var t, r, n, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, l) {
        if (null == e) return {};
        var t, r, n = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) t = i[r], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
        return n
      }(e, l), Object.getOwnPropertySymbols)
      for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt", "sourceMetadata"]);
  return (0, r.jsx)(s.G.Consumer, {
    children: e => {
      var s, o;
      return p((s = function(e) {
        for (var l = 1; l < arguments.length; l++) {
          var t = null != arguments[l] ? arguments[l] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(l) {
            var r;
            r = t[l], l in e ? Object.defineProperty(e, l, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[l] = r
          })
        }
        return e
      }({}, f), o = o = {
        alt: m,
        src: t,
        containerClassName: c,
        autoPlay: d,
        animated: h,
        responsive: a,
        renderAccessory: e,
        tabIndex: h ? 0 : false,
        dataSafeSrc: l,
        children(e) {
          let {
            src: t,
            size: s,
            animating: o,
            alt: d
          } = e;
          return (0, r.jsx)(u, {
            alt: d,
            className: c,
            poster: t,
            src: l,
            width: s.width,
            height: s.height,
            naturalWidth: n,
            naturalHeight: i,
            responsive: a,
            play: h && o
          })
        },
        sourceMetadata: g,
        analyticsSource: "LazyGIFV"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, l) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
      }), s))
    }
  })
}