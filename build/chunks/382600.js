/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  P: () => a
});
var r = n(200651),
  i = n(192379),
  l = n(709014);
let o = {
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
  a = e => {
    let t = i.useRef(null),
      a = i.useRef(e);
    a.current = e;
    let s = i.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      c = i.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n)
      }, [e]);
    return {
      events: {
        onClick: s,
        onMouseEnter: c,
        onMouseLeave: i.useCallback(() => {
          if (null == t.current) return;
          let n = "enable" === e ? "hover_disabled" : "hover_enabled";
          t.current.stopIfPlaying(n)
        }, [e])
      },
      play: s,
      Component: i.useCallback(e => {
        var i, s;
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), s = s = {
          src: () => n.e("7584").then(n.t.bind(n, 883488, 19)),
          ref: t,
          initialAnimation: a.current,
          markers: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }, [])
    }
  }