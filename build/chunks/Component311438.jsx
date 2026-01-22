/** Chunk was on web.js **/
/** chunk id: 311438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk386406 = require("./386406.js"),
  Chunk237496 = require("./237496.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  return (0, r.jsx)(s.aFV, _({
    size: "md",
    title: f.intl.string(f.t.NYklhr),
    subtitle: f.intl.string(f.t.EJ26Oh),
    actions: [{
      text: f.intl.string(f.t.UYW0dz),
      onClick: () => {
        e.onClose(), c.A.clearVADWarning()
      },
      variant: "secondary"
    }, {
      text: f.intl.string(f.t.E3Y7NH),
      onClick: () => {
        l.A.setMode(d.TBI.PUSH_TO_TALK), e.onClose(), c.A.clearVADWarning()
      },
      variant: "primary"
    }]
  }, e))
}

function m() {
  let e = (0, a.bG)([u.A], () => u.A.shouldShowWarning(), []),
    t = i.useRef(null);

  function n() {
    null !== t.current && ((0, o.OoC)(t.current), t.current = null)
  }
  return i.useEffect(() => (e ? t.current = (0, o.qfG)(e => (0, r.jsx)(h, _({}, e))) : n(), () => {
    n()
  }), [e]), null
}