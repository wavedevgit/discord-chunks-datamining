/** Chunk was on 39048 **/
/** chunk id: 780679, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    rule: t,
    onChangeRule: n
  } = e, [c, d] = i.useState(t.name);
  return (0, r.jsx)(l.ksK, {
    label: o.intl.string(o.t.WVAHxF),
    onChange: e => {
      var r, i;
      d(e), n((r = function(e) {
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
      }({}, t), i = i = {
        name: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    },
    onClick: e => e.stopPropagation(),
    onKeyDown: e => {
      e.which === a.Ks6.SPACE && e.stopPropagation()
    },
    placeholder: o.intl.string(o.t["5AO43K"]),
    maxLength: s.NX,
    value: c
  })
}