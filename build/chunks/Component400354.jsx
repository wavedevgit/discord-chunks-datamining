/** Chunk was on 83243 **/
/** chunk id: 400354, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  l: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");
let l = {
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
  u = e => {
    let t = a.useRef(null),
      u = a.useRef(e);
    u.current = e;
    let s = a.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      i = a.useCallback(() => {
        if (null == t.current) return;
        let r = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(r)
      }, [e]),
      o = a.useCallback(() => {
        if (null == t.current) return;
        let r = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.stopIfPlaying(r)
      }, [e]),
      d = a.useCallback(e => {
        var a, s;
        return (0, n.jsx)(c.L, (a = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), s = s = {
          src: () => r.e("41456").then(r.t.bind(r, 406785, 19)),
          ref: t,
          initialAnimation: u.current,
          markers: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
        }), a))
      }, []);
    return {
      events: {
        onClick: s,
        onMouseEnter: i,
        onMouseLeave: o
      },
      play: s,
      getDuration: a.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: a.useCallback(() => {
        var e, r;
        return null != (r = null == (e = t.current) ? true : e.getCurrentFrame()) ? r : null
      }, []),
      Component: d
    }
  }