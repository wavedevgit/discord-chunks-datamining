/** Chunk was on web.js **/
/** chunk id: 694230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx");

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
  let e = (0, o.e7)([c.Z], () => c.Z.isInteractionRequired(), []),
    t = i.useRef(null);

  function n() {
    null !== t.current && ((0, s.Mr3)(t.current), t.current = null)
  }

  function d() {
    l.Z.interact()
  }
  return i.useEffect(() => (e ? t.current = (0, s.h7j)(e => (0, r.jsx)(a.Modal, f({
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