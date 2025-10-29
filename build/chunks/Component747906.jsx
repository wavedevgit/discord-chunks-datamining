/** Chunk was on 86863 **/
/** chunk id: 747906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk709014 = require("./709014.jsx");
let l = {
    mute: {
      name: "mute",
      start: 0,
      duration: 70
    },
    unmute: {
      name: "unmute",
      start: 100,
      duration: 70
    },
    hover_unmuted: {
      name: "hover_unmuted",
      start: 180,
      duration: 40
    },
    hover_muted: {
      name: "hover_muted",
      start: 240,
      duration: 40
    },
    sparkle_off_muted: {
      name: "sparkle_off_muted",
      start: 299,
      duration: 40
    },
    sparkle_on: {
      name: "sparkle_on",
      start: 370,
      duration: 40
    },
    sparkle_off: {
      name: "sparkle_off",
      start: 450,
      duration: 40
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
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.play(n)
      }, [e]),
      u = i.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.stopIfPlaying(n)
      }, [e]),
      d = i.useCallback(e => {
        var i, s;
        return (0, r.jsx)(o.L, (i = function(e) {
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
        }({}, e), s = s = {
          src: () => n.e("30261").then(n.t.bind(n, 414787, 19)),
          ref: t,
          initialAnimation: a.current,
          markers: l
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
      }, []);
    return {
      events: {
        onClick: s,
        onMouseEnter: c,
        onMouseLeave: u
      },
      play: s,
      getDuration: i.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: i.useCallback(() => {
        var e, n;
        return null != (n = null == (e = t.current) ? true : e.getCurrentFrame()) ? n : null
      }, []),
      Component: d
    }
  }