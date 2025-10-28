/** Chunk was on web.js **/
/** chunk id: 634500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk273352 = require("./273352.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk923928 = require("./923928.js"),
  Chunk269647 = require("./269647.js"),
  Chunk981631 = require("./981631.js"),
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

function h() {
  let e = (0, Chunk442837.e7)([Chunk269647.Z], () => Chunk269647.Z.shouldShowWarning(), []),
    t = Chunk647438.useRef(null);

  function n() {
    null !== exports.current && ((0, Chunk481060.Mr3)(exports.current), exports.current = null)
  }

  function _() {
    Chunk923928.Z.clearVADWarning()
  }
  return Chunk647438.useEffect(() => (module ? exports.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(o.default, p({
    title: f.intl.string(f.t.NYklhr),
    body: f.intl.string(f.t.EJ26Oh),
    onCancel: _,
    cancelText: f.intl.string(f.t.UYW0dz),
    confirmText: f.intl.string(f.t.E3Y7NH),
    onConfirm: () => {
      l.Z.setMode(d.pM4.PUSH_TO_TALK), _()
    }
  }, e))) : require(), () => {
    require()
  }), [module]), null
}