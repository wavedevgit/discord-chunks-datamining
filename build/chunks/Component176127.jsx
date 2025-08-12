/** Chunk was on web.js **/
/** chunk id: 176127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./583741.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk771737 = require("./771737.js");

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
let _ = 4;

function p() {
  let e = (0, Chunk442837.Wu)([Chunk435064.Z], () => {
    var e;
    let t = null == (e = Chunk435064.Z.getLastClipsSession()) ? true : module.newClipIds;
    return null == exports ? [] : Chunk435064.Z.getClips().slice(0, _).filter(e => t.includes(e.id))
  });
  return (0, Chunk255367.jsx)("div", {
    className: o()(Chunk771737.thumbnailStack, {
      [Chunk771737["height-1"]]: 1 === module.length,
      [Chunk771737["height-2"]]: 2 === module.length,
      [Chunk771737["height-3"]]: 3 === module.length,
      [Chunk771737["height-max"]]: module.length >= 4
    }),
    children: Array.from(f(u({}, module), {
      length: _
    })).map((e, t) => null != e ? (0, r.jsx)("img", {
      alt: "",
      className: l.thumbnail,
      src: e.thumbnail
    }, e.id) : (0, r.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}