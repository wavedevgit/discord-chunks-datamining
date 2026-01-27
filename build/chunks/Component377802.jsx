/** Chunk was on web.js **/
/** chunk id: 377802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744682 = require("./744682.jsx");

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
    let e = i.useRef(null),
      t = i.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = i.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      l = i.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      d = i.useCallback(t => (0, r.jsx)(a.P, c(s({}, t), {
        src: () => n.e("70552").then(n.t.bind(n, 772203, 19)),
        ref: e,
        markers: u
      })), []);
    return {
      events: {
        onMouseEnter: o,
        onMouseLeave: l
      },
      play: t,
      getDuration: i.useCallback(() => {
        var t;
        return null == (t = e.current) ? true : t.getDuration()
      }, []),
      getCurrentFrame: i.useCallback(() => {
        var t, n;
        return null != (t = null == (n = e.current) ? true : n.getCurrentFrame()) ? t : null
      }, []),
      Component: d
    }
  }