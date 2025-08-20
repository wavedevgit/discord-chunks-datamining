/** Chunk was on 26434 **/
/** chunk id: 38267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return Object.keys(e).some(t => e[t])
}

function a(e, t) {
  let [n, a] = r.useState(t), [s, c] = r.useState(o(n)), u = r.useRef(s), d = r.useRef(null), p = r.useCallback(e => {
    a(t => {
      let n = function(e) {
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
        }({}, t, e),
        r = o(n);
      return r !== u.current && (u.current = r, null != d.current && (cancelAnimationFrame(d.current), d.current = null), r ? c(true) : d.current = requestAnimationFrame(() => c(false))), n
    })
  }, []);
  return r.useEffect(() => {
    let t = e => {
      let {
        emojiPicker: t,
        emojiBurstPicker: n
      } = e;
      return p({
        emojiPicker: t,
        emojiBurstPicker: n
      })
    };
    return i.S.subscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void i.S.unsubscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, p]), {
    popouts: n,
    setPopout: p,
    selected: s
  }
}