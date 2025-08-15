/** Chunk was on 22878 **/
/** chunk id: 749280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk709014 = require("./709014.jsx");
let o = {
    hover: {
      name: "hover",
      start: 0,
      duration: 59
    },
    click: {
      name: "click",
      start: 68,
      duration: 26
    }
  },
  a = () => {
    let e = Chunk73800.useRef(null),
      t = Chunk73800.useCallback(() => {
        null != module.current && module.current.play("click")
      }, []),
      a = Chunk73800.useCallback(() => {
        null != module.current && module.current.play("hover")
      }, []),
      c = Chunk73800.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("hover")
      }, []),
      u = Chunk73800.useCallback(t => {
        var l, a;
        return (0, r.jsx)(i.L, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t), a = a = {
          src: () => n.e("56855").then(n.t.bind(n, 206509, 19)),
          ref: e,
          markers: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }, []);
    return {
      events: {
        onMouseEnter: a,
        onMouseLeave: c
      },
      play: exports,
      getDuration: Chunk73800.useCallback(() => {
        var t;
        return null == (t = module.current) ? true : exports.getDuration()
      }, []),
      getCurrentFrame: Chunk73800.useCallback(() => {
        var t, n;
        return null != (n = null == (t = module.current) ? true : exports.getCurrentFrame()) ? require : null
      }, []),
      Component: u
    }
  }