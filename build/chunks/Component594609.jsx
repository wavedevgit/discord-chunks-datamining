/** Chunk was on 93140 **/
/** chunk id: 594609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
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
}

function u(e) {
  let [t, n] = i.useState(false);
  return (0, r.jsx)(l.Modal, c({
    size: "md",
    title: s.intl.string(s.t["zQ1+Jw"]),
    subtitle: s.intl.string(s.t.K1gWXn),
    actions: [{
      text: s.intl.string(s.t.BddRzS),
      onClick: () => {
        t && a.A.setSilenceWarning(false), e.onClose()
      },
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(l.Sc0, {
      checked: t,
      onChange: e => n(e),
      label: s.intl.string(s.t.XAiAgD),
      labelType: "secondary"
    })
  }, e))
}

function E() {
  (0, o.qfG)(e => (0, r.jsx)(u, c({}, e)))
}