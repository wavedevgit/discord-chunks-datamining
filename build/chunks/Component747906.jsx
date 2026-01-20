/** Chunk was on 6164 **/
/** chunk id: 747906, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk709014 = require("./709014.jsx");
let i = {
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
  l = e => {
    let t = o.useRef(null),
      l = o.useRef(e);
    l.current = e;
    let c = o.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      a = o.useCallback(() => {
        if (null == t.current) return;
        let r = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.play(r)
      }, [e]),
      s = o.useCallback(() => {
        if (null == t.current) return;
        let r = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.stopIfPlaying(r)
      }, [e]),
      b = o.useCallback(e => {
        var o, c;
        return (0, n.jsx)(u.L, (o = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), c = c = {
          src: () => r.e("30261").then(r.t.bind(r, 414787, 19)),
          ref: t,
          initialAnimation: l.current,
          markers: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(c)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e))
        }), o))
      }, []);
    return {
      events: {
        onClick: c,
        onMouseEnter: a,
        onMouseLeave: s
      },
      play: c,
      getDuration: o.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: o.useCallback(() => {
        var e, r;
        return null != (r = null == (e = t.current) ? true : e.getCurrentFrame()) ? r : null
      }, []),
      Component: b
    }
  }