/** Chunk was on 17534 **/
/** chunk id: 237607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./264879.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk226421 = require("./226421.jsx"),
  Chunk461583 = require("./461583.js");

function d() {
  var e, t;
  let n = (0, s.yK)([a.A], () => {
    var e;
    let t = null == (e = a.A.getLastClipsSession()) ? true : e.newClipIds;
    return null == t ? [] : a.A.getClips().slice(0, 4).filter(e => t.includes(e.id))
  });
  return (0, r.jsx)("div", {
    className: i()(u.vH, {
      [u.gb]: 1 === n.length,
      [u.$d]: 2 === n.length,
      [u.gS]: 3 === n.length,
      [u.hA]: n.length >= 4
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
    }), e)).map((e, t) => null != e ? e.type === o.nQ.VOICE_CLIP ? (0, r.jsx)(c.A, {
      className: u.xn
    }, e.id) : (0, r.jsx)("img", {
      alt: "",
      className: u.xn,
      src: e.thumbnail
    }, e.id) : (0, r.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}