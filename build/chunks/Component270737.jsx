/** Chunk was on 30819 **/
/** chunk id: 270737, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  V: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744682 = require("./744682.jsx");
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
    let t = o.useRef(null),
      a = o.useRef(e);
    a.current = e;
    let u = o.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      c = o.useCallback(() => {
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
        var o, u;
        return (0, n.jsx)(i.P, (o = function(e) {
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
        }({}, e), u = u = {
          src: () => r.e("89759").then(r.t.bind(r, 244450, 19)),
          ref: t,
          initialAnimation: a.current,
          markers: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(u)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
        }), o))
      }, []);
    return {
      events: {
        onClick: u,
        onMouseEnter: c,
        onMouseLeave: s
      },
      play: u,
      getDuration: o.useCallback(() => {
        var e;
        return null == (e = t.current) ? true : e.getDuration()
      }, []),
      getCurrentFrame: o.useCallback(() => {
        var e, r;
        return null != (e = null == (r = t.current) ? true : r.getCurrentFrame()) ? e : null
      }, []),
      Component: b
    }
  }