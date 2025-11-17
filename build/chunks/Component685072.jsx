/** Chunk was on web.js **/
/** chunk id: 685072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
    all: {
      name: "all",
      start: 0,
      duration: 90
    }
  },
  d = () => {
    let e = Chunk473749.useRef(null),
      t = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      l = Chunk473749.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      d = Chunk473749.useCallback(t => (0, r.jsx)(a.L, c(s({}, t), {
        src: () => n.e("52680").then(n.t.bind(n, 728913, 19)),
        ref: e,
        markers: u
      })), []);
    return {
      events: {
        onMouseEnter: o,
        onMouseLeave: l
      },
      play: exports,
      getDuration: Chunk473749.useCallback(() => {
        var t;
        return null == (t = module.current) ? true : exports.getDuration()
      }, []),
      getCurrentFrame: Chunk473749.useCallback(() => {
        var t, n;
        return null != (n = null == (t = module.current) ? true : exports.getCurrentFrame()) ? require : null
      }, []),
      Component: d
    }
  }