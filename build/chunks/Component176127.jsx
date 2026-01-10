/** Chunk was on 81985 **/
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
  Chunk769394 = require("./769394.js");

function d() {
  var e, t;
  let n = (0, a.Wu)([o.Z], () => {
    var e;
    let t = null == (e = o.Z.getLastClipsSession()) ? true : e.newClipIds;
    return null == t ? [] : o.Z.getClips().slice(0, 4).filter(e => t.includes(e.id))
  });
  return (0, r.jsx)("div", {
    className: l()(u.thumbnailStack, {
      [u["height-1"]]: 1 === n.length,
      [u["height-2"]]: 2 === n.length,
      [u["height-3"]]: 3 === n.length,
      [u["height-max"]]: n.length >= 4
    }),
    children: Array.from((e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, n), t = t = {
      length: 4
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e)).map((e, t) => null != e ? e.type === s.NJ.VOICE_CLIP ? (0, r.jsx)(c.Z, {
      className: u.thumbnail
    }, e.id) : (0, r.jsx)("img", {
      alt: "",
      className: u.thumbnail,
      src: e.thumbnail
    }, e.id) : (0, r.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}