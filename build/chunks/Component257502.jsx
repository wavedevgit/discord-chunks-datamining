/** Chunk was on web.js **/
/** chunk id: 257502, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    click: {
      name: "click",
      start: 0,
      duration: 66
    },
    hover: {
      name: "hover",
      start: 90,
      duration: 40
    }
  },
  d = () => {
    let e = Chunk647438.useRef(null),
      t = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("click")
      }, []),
      o = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("hover")
      }, []),
      l = Chunk647438.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("hover")
      }, []),
      d = Chunk647438.useCallback(t => (0, r.jsx)(a.L, c(s({}, t), {
        src: () => n.e("76994").then(n.t.bind(n, 146891, 19)),
        ref: e,
        markers: u
      })), []);
    return {
      events: {
        onMouseEnter: o,
        onMouseLeave: l
      },
      play: exports,
      getDuration: Chunk647438.useCallback(() => {
        var t;
        return null == (t = module.current) ? true : exports.getDuration()
      }, []),
      getCurrentFrame: Chunk647438.useCallback(() => {
        var t, n;
        return null != (n = null == (t = module.current) ? true : exports.getCurrentFrame()) ? require : null
      }, []),
      Component: d
    }
  }