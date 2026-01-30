/** Chunk was on 64935 **/
/** chunk id: 754459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  return Object.keys(e).some(t => e[t])
}

function s(e, t) {
  let [n, s] = r.useState(t), [o, c] = r.useState(a(n)), u = r.useRef(o), d = r.useRef(null), p = r.useCallback(e => {
    s(t => {
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
        r = a(n);
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
    return i._.subscribeKeyed(l.zOV.TOGGLE_REACTION_POPOUT, e, t), () => void i._.unsubscribeKeyed(l.zOV.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, p]), {
    popouts: n,
    setPopout: p,
    selected: o
  }
}