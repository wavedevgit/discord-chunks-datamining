/** Chunk was on 48666 **/
/** chunk id: 130177, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk43105 = require("./43105.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk49999 = require("./49999.js");

function i(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: r,
    visibleContent: i,
    markAsDismissed: s,
    props: u
  } = e, [f, b] = l.useState(false), y = l.useRef(null);
  (0, a.Ay)(() => (y.current = setTimeout(() => b(true), 250), () => {
    clearTimeout(y.current), s(c.i.AUTO_DISMISS)
  }));
  let d = l.useCallback(e => {
    s("user:explicit" === e ? c.i.USER_DISMISS : c.i.AUTO_DISMISS)
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
    shouldShow: f && i === t,
    onRequestClose: d
  }, u))
}