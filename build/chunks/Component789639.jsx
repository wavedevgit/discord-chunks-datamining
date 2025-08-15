/** Chunk was on 30202 **/
/** chunk id: 789639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk709014 = require("./709014.jsx");
let a = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  l = () => {
    let e = Chunk647438.useRef(null),
      t = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      l = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk647438.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      c = Chunk647438.useCallback(t => {
        var r, l;
        return (0, i.jsx)(s.L, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, t), l = l = {
          src: () => n.e("2199").then(n.t.bind(n, 71307, 19)),
          ref: e,
          markers: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }, []);
    return {
      events: {
        onMouseEnter: l,
        onMouseLeave: o
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