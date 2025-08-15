/** Chunk was on 24255 **/
/** chunk id: 582019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk709014 = require("./709014.jsx");
let a = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  o = () => {
    let e = Chunk73800.useRef(null),
      t = Chunk73800.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      o = Chunk73800.useCallback(() => {
        null != module.current && module.current.play("all")
      }, []),
      u = Chunk73800.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("all")
      }, []),
      s = Chunk73800.useCallback(t => {
        var l, o;
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
        }({}, t), o = o = {
          src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
          ref: e,
          markers: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l))
      }, []);
    return {
      events: {
        onClick: exports,
        onMouseEnter: o,
        onMouseLeave: u
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
      Component: s
    }
  }