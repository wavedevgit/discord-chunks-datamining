/** Chunk was on 88647 **/
/** chunk id: 257502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk709014 = require("./709014.jsx");
let a = {
    click: {
      name: "click",
      start: 0,
      duration: 66
    },
    hover: {
      name: "hover",
      start: 90,
      duration: 40
    }
  },
  o = () => {
    let e = Chunk647438.useRef(null),
      t = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("click")
      }, []),
      o = Chunk647438.useCallback(() => {
        null != module.current && module.current.play("hover")
      }, []),
      s = Chunk647438.useCallback(() => {
        null != module.current && module.current.stopIfPlaying("hover")
      }, []),
      c = Chunk647438.useCallback(t => {
        var i, o;
        return (0, r.jsx)(l.L, (i = function(e) {
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
          src: () => n.e("76994").then(n.t.bind(n, 146891, 19)),
          ref: e,
          markers: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
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