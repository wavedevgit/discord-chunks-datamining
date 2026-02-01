/** Chunk was on 61344 **/
/** chunk id: 621956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => s
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
  s = () => {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      s = r.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      c = r.useCallback(t => {
        var r, s;
        return (0, l.jsx)(i.P, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, t), s = s = {
          src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
          ref: e,
          markers: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
        }), r))
      }, []);
    return {
      events: {
        onClick: t,
        onMouseEnter: s,
        onMouseLeave: o
      },
      play: t,
      getDuration: r.useCallback(() => {
        var t;
        return null == (t = e.current) ? true : t.getDuration()
      }, []),
      getCurrentFrame: r.useCallback(() => {
        var t, n;
        return null != (t = null == (n = e.current) ? true : n.getCurrentFrame()) ? t : null
      }, []),
      Component: c
    }
  }