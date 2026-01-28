/** Chunk was on 75473 **/
/** chunk id: 130177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk43105 = require("./43105.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk49999 = require("./49999.js");

function c(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: n,
    visibleContent: c,
    markAsDismissed: s,
    props: u
  } = e, [d, b] = o.useState(false), f = o.useRef(null);
  (0, l.Ay)(() => (f.current = setTimeout(() => b(true), 250), () => {
    clearTimeout(f.current), s(i.i.AUTO_DISMISS)
  }));
  let p = o.useCallback(e => {
    s("user:explicit" === e ? i.i.USER_DISMISS : i.i.AUTO_DISMISS)
  }, [s]);
  return (0, r.jsx)(a.h, function(e) {
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