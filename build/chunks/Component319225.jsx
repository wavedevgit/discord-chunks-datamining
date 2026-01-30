/** Chunk was on 44411 **/
/** chunk id: 319225, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    transitionState: t,
    title: n,
    body: r,
    onClose: o
  } = e;
  return (0, i.jsx)(s.Modal, {
    title: n,
    actions: [{
      text: l.intl.string(l.t["NX+WJN"]),
      onClick: o
    }],
    transitionState: t,
    onClose: o,
    subtitle: r
  })
}

function a(e) {
  (0, r.qfG)(t => (0, i.jsx)(o, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, t, e)))
}