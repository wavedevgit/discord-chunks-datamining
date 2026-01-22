/** Chunk was on 21738 **/
/** chunk id: 385278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744682 = require("./744682.jsx");
let a = {
    disable: {
      name: "disable",
      start: 0,
      duration: 70
    },
    enable: {
      name: "enable",
      start: 100,
      duration: 70
    },
    hover_enabled: {
      name: "hover_enabled",
      start: 200,
      duration: 70
    },
    hover_disabled: {
      name: "hover_disabled",
      start: 300,
      duration: 70
    }
  },
  s = e => {
    let t = i.useRef(null),
      s = i.useRef(e);
    s.current = e;
    let o = i.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      c = i.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n)
      }, [e]),
      u = i.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(n)
      }, [e]),
      d = i.useCallback(e => {
        var i, o;
        return (0, r.jsx)(l.P, (i = function(e) {
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
        }({}, e), o = o = {
          src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
          ref: t,
          initialAnimation: s.current,
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
        onClick: o,
        onMouseEnter: c,
        onMouseLeave: u
      },
      play: o,
      getDuration: i.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: i.useCallback(() => {
        var e, n;
        return null != (e = null == (n = t.current) ? true : n.getCurrentFrame()) ? e : null
      }, []),
      Component: d
    }
  }