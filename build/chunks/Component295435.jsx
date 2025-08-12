/** Chunk was on web.js **/
/** chunk id: 295435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk916616 = require("./916616.jsx"),
  Chunk981729 = require("./981729.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98184 = require("./98184.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let t = i.useRef(null),
    n = e.media;
  if (n.loadingState === c.f.LOADED_NOT_FOUND) return (0, r.jsx)(l.u, {
    text: f.intl.string(f.t.UvDfMz),
    position: "bottom",
    align: "center",
    targetElementRef: t,
    children: n => (0, r.jsx)("div", g(h({}, n), {
      className: a()(e.className, _.notFoundPlaceholder, {
        [_.hiddenSpoilers]: e.hiddenSpoilers
      }),
      style: {
        width: e.placeholderWidth,
        height: e.placeholderHeight
      },
      role: "img",
      children: (0, r.jsx)(u.Z, {
        ref: t,
        className: _.brokenImageIcon
      })
    }))
  });
  let o = n.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
  return (0, r.jsx)(s.E, {
    className: a()(e.className, {
      [_.hiddenSpoilers]: e.hiddenSpoilers
    }),
    readyState: o,
    src: "",
    width: e.placeholderWidth,
    height: e.placeholderHeight,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    mediaLayoutType: e.mediaLayoutType,
    useFullWidth: e.useFullWidth,
    zoomable: false
  })
}