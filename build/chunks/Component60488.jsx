/** Chunk was on web.js **/
/** chunk id: 60488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => d
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
    earn: {
      name: "earn",
      start: 0,
      duration: 180
    },
    spend: {
      name: "spend",
      start: 240,
      duration: 180
    }
  },
  d = e => {
    let t = i.useRef(null),
      o = i.useRef(e);
    o.current = e;
    let l = i.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      d = i.useCallback(e => (0, r.jsx)(a.L, c(s({}, e), {
        src: () => n.e("44980").then(n.t.bind(n, 304306, 19)),
        ref: t,
        initialAnimation: o.current,
        markers: u
      })), []);
    return {
      events: {},
      play: l,
      getDuration: i.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: i.useCallback(() => {
        var e, n;
        return null != (n = null == (e = t.current) ? true : e.getCurrentFrame()) ? n : null
      }, []),
      Component: d
    }
  }