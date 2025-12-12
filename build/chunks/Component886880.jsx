/** Chunk was on 91968 **/
/** chunk id: 886880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, [f, d] = o.useState(false), b = o.useRef(null);
  (0, i.ZP)(() => (b.current = setTimeout(() => d(true), 250), () => {
    clearTimeout(b.current), s(l.L.AUTO_DISMISS)
  }));
  let y = o.useCallback(e => {
    s("user:explicit" === e ? l.L.USER_DISMISS : l.L.AUTO_DISMISS)
  }, [s]);
  return (0, r.jsx)(a.Z, function(e) {
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
    shouldShow: f && c === t,
    onRequestClose: y
  }, u))
}