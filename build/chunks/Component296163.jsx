/** Chunk was on web.js **/
/** chunk id: 296163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
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

function h(e) {
  return (0, r.jsx)(o.u_l, p({
    size: "md",
    title: f.intl.string(f.t.NYklhr),
    subtitle: f.intl.string(f.t.EJ26Oh),
    actions: [{
      text: f.intl.string(f.t.UYW0dz),
      onClick: () => {
        e.onClose(), c.Z.clearVADWarning()
      },
      variant: "secondary"
    }, {
      text: f.intl.string(f.t.E3Y7NH),
      onClick: () => {
        l.Z.setMode(d.pM4.PUSH_TO_TALK), e.onClose(), c.Z.clearVADWarning()
      },
      variant: "primary"
    }]
  }, e))
}

function m() {
  let e = (0, Chunk442837.e7)([Chunk269647.Z], () => Chunk269647.Z.shouldShowWarning(), []),
    t = Chunk647438.useRef(null);

  function n() {
    null !== exports.current && ((0, Chunk481060.Mr3)(exports.current), exports.current = null)
  }
  return Chunk647438.useEffect(() => (module ? exports.current = (0, Chunk481060.h7j)(e => (0, r.jsx)(h, p({}, e))) : require(), () => {
    require()
  }), [module]), null
}