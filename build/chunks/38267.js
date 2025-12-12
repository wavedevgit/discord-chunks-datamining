/** Chunk was on web.js **/
/** chunk id: 38267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e) {
  return Object.keys(e).some(t => e[t])
}

function c(e, t) {
  let [n, a] = r.useState(t), [c, u] = r.useState(l(n)), d = r.useRef(c), f = r.useRef(null), p = r.useCallback(e => {
    a(t => {
      let n = s({}, t, e),
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
    return i.S.subscribeKeyed(o.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void i.S.unsubscribeKeyed(o.LPv.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, p]), {
    popouts: n,
    setPopout: p,
    selected: c
  }
}