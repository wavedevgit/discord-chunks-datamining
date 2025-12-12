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
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isInteractionRequired(), []),
    t = Chunk473749.useRef(null);

  function n() {
    null !== exports.current && ((0, Chunk481060.Mr3)(exports.current), exports.current = null)
  }

  function d() {
    Chunk846027.Z.interact()
  }
  return Chunk473749.useEffect(() => (module ? exports.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(o.Modal, f({
    title: u.intl.string(u.t.dLLxC2),
    subtitle: u.intl.string(u.t["64lmtw"]),
    actions: [{
      text: u.intl.string(u.t.BddRzS),
      onClick: () => {
        d(), e.onClose()
      }
    }]
  }, e))) : require(), () => {
    require()
  }), [module]), null
}