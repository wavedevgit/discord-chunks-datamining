/** Chunk was on 34740 **/
/** chunk id: 176127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./583741.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk367825 = require("./367825.jsx"),
  Chunk538454 = require("./538454.js");

function d() {
  var e, t;
  let n = (0, Chunk442837.Wu)([Chunk435064.Z], () => {
    var e;
    let t = null == (e = Chunk435064.Z.getLastClipsSession()) ? true : module.newClipIds;
    return null == exports ? [] : Chunk435064.Z.getClips().slice(0, 4).filter(e => t.includes(e.id))
  });
  return (0, Chunk54381.jsx)("div", {
    className: l()(Chunk538454.thumbnailStack, {
      [Chunk538454["height-1"]]: 1 === require.length,
      [Chunk538454["height-2"]]: 2 === require.length,
      [Chunk538454["height-3"]]: 3 === require.length,
      [Chunk538454["height-max"]]: require.length >= 4
    }),
    children: Array.from((e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, require), t = t = {
      length: 4
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module)).map((e, t) => null != e ? e.type === s.NJ.VOICE_CLIP ? (0, i.jsx)(c.Z, {
      className: u.thumbnail
    }, e.id) : (0, i.jsx)("img", {
      alt: "",
      className: u.thumbnail,
      src: e.thumbnail
    }, e.id) : (0, i.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}