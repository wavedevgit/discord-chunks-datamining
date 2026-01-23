/** Chunk was on 65599 **/
/** chunk id: 505312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744682 = require("./744682.jsx");
let i = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  s = () => {
    let e = l.useRef(null),
      t = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      s = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      c = l.useCallback(t => {
        var l, s;
        return (0, a.jsx)(r.P, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, t), s = s = {
          src: () => n.e("71694").then(n.t.bind(n, 29597, 19)),
          ref: e,
          markers: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
        }), l))
      }, []);
    return {
      events: {
        onMouseEnter: s,
        onMouseLeave: o
      },
      play: t,
      getDuration: l.useCallback(() => {
        var t;
        return null == (t = e.current) ? true : t.getDuration()
      }, []),
      getCurrentFrame: l.useCallback(() => {
        var t, n;
        return null != (t = null == (n = e.current) ? true : n.getCurrentFrame()) ? t : null
      }, []),
      Component: c
    }
  }