/** Chunk was on 32945 **/
/** chunk id: 789639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk709014 = require("./709014.jsx");
let i = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  o = () => {
    let e = Chunk647438.useRef(null),
      t = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      s = Chunk647438.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      c = Chunk647438.useCallback(t => {
        var r, o;
        return (0, a.jsx)(l.L, (r = function(e) {
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
        }({}, t), o = o = {
          src: () => n.e("2199").then(n.t.bind(n, 71307, 19)),
          ref: e,
          markers: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r))
      }, []);
    return {
      events: {
        onMouseEnter: o,
        onMouseLeave: s
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
      Component: c
    }
  }