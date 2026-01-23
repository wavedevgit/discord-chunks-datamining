/** Chunk was on 31748 **/
/** chunk id: 621956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744682 = require("./744682.jsx");
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
      s = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      c = l.useCallback(t => {
        var l, o;
        return (0, r.jsx)(i.P, (l = function(e) {
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
          src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
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
        onMouseLeave: s
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