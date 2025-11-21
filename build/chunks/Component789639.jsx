/** Chunk was on 59416 **/
/** chunk id: 789639, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");
let u = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  a = () => {
    let e = Chunk473749.useRef(null),
      t = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      a = Chunk473749.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk473749.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      s = Chunk473749.useCallback(t => {
        var l, a;
        return (0, n.jsx)(i.L, (l = function(e) {
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
        }({}, t), a = a = {
          src: () => r.e("2199").then(r.t.bind(r, 71307, 19)),
          ref: e,
          markers: u
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }, []);
    return {
      events: {
        onMouseEnter: a,
        onMouseLeave: o
      },
      play: exports,
      getDuration: Chunk473749.useCallback(() => {
        var t;
        return null == (t = module.current) ? true : exports.getDuration()
      }, []),
      getCurrentFrame: Chunk473749.useCallback(() => {
        var t, r;
        return null != (r = null == (t = module.current) ? true : exports.getCurrentFrame()) ? require : null
      }, []),
      Component: s
    }
  }