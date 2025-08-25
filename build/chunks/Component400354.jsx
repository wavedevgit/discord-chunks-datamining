/** Chunk was on web.js **/
/** chunk id: 400354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk709014 = require("./709014.jsx");

function a(e, t, n) {
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
      a(e, t, n[t])
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
    deafen: {
      name: "deafen",
      start: 0,
      duration: 70
    },
    undeafen: {
      name: "undeafen",
      start: 110,
      duration: 70
    },
    hover_undeafened: {
      name: "hover_undeafened",
      start: 200,
      duration: 70
    },
    hover_deafened: {
      name: "hover_deafened",
      start: 300,
      duration: 70
    }
  },
  d = e => {
    let t = i.useRef(null),
      a = i.useRef(e);
    a.current = e;
    let l = i.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      d = i.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(n)
      }, [e]),
      f = i.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.stopIfPlaying(n)
      }, [e]),
      _ = i.useCallback(e => (0, r.jsx)(o.L, c(s({}, e), {
        src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
        ref: t,
        initialAnimation: a.current,
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
        return null != (n = null == (e = t.current) ? true : e.getCurrentFrame()) ? n : null
      }, []),
      Component: _
    }
  }