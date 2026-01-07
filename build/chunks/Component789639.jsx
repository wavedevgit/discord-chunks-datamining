/** Chunk was on 95200 **/
/** chunk id: 789639, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  i: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");
let a = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  c = () => {
    let e = l.useRef(null),
      r = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      c = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      s = l.useCallback(r => {
        var l, c;
        return (0, n.jsx)(u.L, (l = function(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(r) {
              var n;
              n = t[r], r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[r] = n
            })
          }
          return e
        }({}, r), c = c = {
          src: () => t.e("2199").then(t.t.bind(t, 71307, 19)),
          ref: e,
          markers: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        })(Object(c)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
        }), l))
      }, []);
    return {
      events: {
        onMouseEnter: c,
        onMouseLeave: o
      },
      play: r,
      getDuration: l.useCallback(() => {
        var r;
        return null == (r = e.current) ? true : r.getDuration()
      }, []),
      getCurrentFrame: l.useCallback(() => {
        var r, t;
        return null != (t = null == (r = e.current) ? true : r.getCurrentFrame()) ? t : null
      }, []),
      Component: s
    }
  }