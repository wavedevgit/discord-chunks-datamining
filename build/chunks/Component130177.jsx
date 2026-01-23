/** Chunk was on 48666 **/
/** chunk id: 130177, original params: e,t,r (module,exports,require) **/
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
    targetElementRef: r,
    visibleContent: c,
    markAsDismissed: s,
    props: u
  } = e, [y, f] = l.useState(false), b = l.useRef(null);
  (0, a.Ay)(() => (b.current = setTimeout(() => f(true), 250), () => {
    clearTimeout(b.current), s(i.i.AUTO_DISMISS)
  }));
  let d = l.useCallback(e => {
    s("user:explicit" === e ? i.i.USER_DISMISS : i.i.AUTO_DISMISS)
  }, [s]);
  return (0, n.jsx)(o.h, function(e) {
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
  }({
    targetElementRef: r,
    shouldShow: y && c === t,
    onRequestClose: d
  }, u))
}