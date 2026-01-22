/** Chunk was on web.js **/
/** chunk id: 754459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function l(e) {
  return Object.keys(e).some(t => e[t])
}

function c(e, t) {
  let [n, s] = r.useState(t), [c, u] = r.useState(l(n)), d = r.useRef(c), f = r.useRef(null), p = r.useCallback(e => {
    s(t => {
      let n = o({}, t, e),
        r = l(n);
      return r !== d.current && (d.current = r, null != f.current && (cancelAnimationFrame(f.current), f.current = null), r ? u(true) : f.current = requestAnimationFrame(() => u(false))), n
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
    return i._.subscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t), () => void i._.unsubscribeKeyed(a.zOV.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, p]), {
    popouts: n,
    setPopout: p,
    selected: c
  }
}