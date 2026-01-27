/** Chunk was on web.js **/
/** chunk id: 4005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk430452 = require("./430452.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = () => {
  let e = (0, o.bG)([c.A], () => c.A.isInteractionRequired(), []),
    t = i.useRef(null);

  function n() {
    null !== t.current && ((0, s.OoC)(t.current), t.current = null)
  }

  function d() {
    l.A.interact()
  }
  return i.useEffect(() => (e ? t.current = (0, s.qfG)(e => (0, r.jsx)(a.Modal, f({
    title: u.intl.string(u.t.dLLxC2),
    subtitle: u.intl.string(u.t["64lmtw"]),
    actions: [{
      text: u.intl.string(u.t.BddRzS),
      onClick: () => {
        d(), e.onClose()
      }
    }]
  }, e))) : n(), () => {
    n()
  }), [e]), null
}