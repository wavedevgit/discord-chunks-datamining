/** Chunk was on web.js **/
/** chunk id: 446080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d
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
    disable: {
      name: "disable",
      start: 0,
      duration: 70
    },
    enable: {
      name: "enable",
      start: 100,
      duration: 70
    },
    hover_enabled: {
      name: "hover_enabled",
      start: 180,
      duration: 70
    },
    hover_disabled: {
      name: "hover_disabled",
      start: 280,
      duration: 70
    }
  },
  d = e => {
    let t = i.useRef(null),
      o = i.useRef(e);
    o.current = e;
    let l = i.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      d = i.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n)
      }, [e]),
      f = i.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(n)
      }, [e]),
      p = i.useCallback(e => (0, r.jsx)(a.P, c(s({}, e), {
        src: () => n.e("60810").then(n.t.bind(n, 55089, 19)),
        ref: t,
        initialAnimation: o.current,
        markers: u
      })), []);
    return {
      events: {
        onClick: l,
        onMouseEnter: d,
        onMouseLeave: f
      },
      play: l,
      getDuration: i.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: i.useCallback(() => {
        var e, n;
        return null != (e = null == (n = t.current) ? true : n.getCurrentFrame()) ? e : null
      }, []),
      Component: p
    }
  }