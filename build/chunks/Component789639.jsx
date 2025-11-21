/** Chunk was on 91394 **/
/** chunk id: 789639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");
let r = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  s = () => {
    let e = Chunk473749.useRef(null),
      t = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      s = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk473749.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      c = Chunk473749.useCallback(t => {
        var l, s;
        return (0, a.jsx)(i.L, (l = function(e) {
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
          src: () => n.e("2199").then(n.t.bind(n, 71307, 19)),
          ref: e,
          markers: r
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
      play: exports,
      getDuration: Chunk473749.useCallback(() => {
        var t;
        return null == (t = module.current) ? true : exports.getDuration()
      }, []),
      getCurrentFrame: Chunk473749.useCallback(() => {
        var t, n;
        return null != (n = null == (t = module.current) ? true : exports.getCurrentFrame()) ? require : null
      }, []),
      Component: c
    }
  }