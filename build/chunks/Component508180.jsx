/** Chunk was on web.js **/
/** chunk id: 508180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk724723 = require("./724723.js"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = () => {
  let e = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isInteractionRequired(), []),
    t = Chunk73800.useRef(null);

  function n() {
    null !== exports.current && ((0, Chunk481060.Mr3)(exports.current), exports.current = null)
  }

  function _() {
    Chunk846027.Z.interact()
  }
  return Chunk73800.useEffect(() => {
    if (module) {
      let e = Chunk724723.Z.getCurrentConfig({
        location: "InteractionRequired"
      }).enabled;
      exports.current = (0, Chunk481060.h7j)(t => e ? (0, r.jsx)(a.Modal, p({
        title: f.intl.string(f.t.dLLxCw),
        subtitle: f.intl.string(f.t["64lmt7"]),
        actions: [{
          text: f.intl.string(f.t.BddRzc),
          onClick: () => {
            _(), t.onClose()
          }
        }]
      }, t)) : (0, r.jsx)(c.default, p({
        title: f.intl.string(f.t.dLLxCw),
        body: f.intl.string(f.t["64lmt7"]),
        onConfirm: _,
        confirmText: f.intl.string(f.t.BddRzc)
      }, t)))
    } else require();
    return () => {
      require()
    }
  }, [module]), null
}