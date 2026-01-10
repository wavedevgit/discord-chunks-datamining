/** Chunk was on 69813 **/
/** chunk id: 582019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => o
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
  o = () => {
    let e = l.useRef(null),
      t = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = l.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      c = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      s = l.useCallback(t => {
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
        onClick: t,
        onMouseEnter: o,
        onMouseLeave: c
      },
      play: t,
      getDuration: l.useCallback(() => {
        var t;
        return null == (t = e.current) ? true : t.getDuration()
      }, []),
      getCurrentFrame: l.useCallback(() => {
        var t, n;
        return null != (n = null == (t = e.current) ? true : t.getCurrentFrame()) ? n : null
      }, []),
      Component: s
    }
  }