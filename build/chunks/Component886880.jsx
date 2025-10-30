/** Chunk was on 13608 **/
/** chunk id: 886880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk921944 = require("./921944.js");

function c(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: n,
    visibleContent: c,
    markAsDismissed: s,
    props: u
  } = e, [d, f] = l.useState(false), b = l.useRef(null);
  (0, i.ZP)(() => (b.current = setTimeout(() => f(true), 250), () => {
    clearTimeout(b.current), s(a.L.AUTO_DISMISS)
  }));
  let p = l.useCallback(e => {
    s("user:explicit" === e ? a.L.USER_DISMISS : a.L.AUTO_DISMISS)
  }, [s]);
  return (0, r.jsx)(o.Z, function(e) {
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
  }({
    targetElementRef: n,
    shouldShow: d && c === t,
    onRequestClose: p
  }, u))
}