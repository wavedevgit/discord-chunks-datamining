/** Chunk was on 31978 **/
/** chunk id: 458034, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Am: () => u,
  ZP: () => d,
  s$: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk275759 = require("./275759.js"),
  Chunk388032 = require("./388032.jsx");
let c = "guild-connection-roles";

function u(e) {
  (0, o.ZDy)(async () => {
    let {
      default: t
    } = await n.e("40897").then(n.bind(n, 507294));
    return n => {
      var l, o;
      return (0, r.jsx)(t, (l = function(e) {
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
      }({}, n), o = o = {
        guildId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
      }), l))
    }
  }, {
    modalKey: c,
    contextKey: o.z1l,
    onCloseRequest: () => {
      (0, o.Mr3)(c, o.z1l)
    }
  })
}

function d(e) {
  return (0, l.e7)([i.Z], () => (0, a.kQ)(i.Z.getSortedRoles(e.id)), [e]) ? (0, r.jsx)(o.sNh, {
    id: "guild-connection-roles",
    label: s.intl.string(s.t.ghtnsr),
    icon: o.xPt,
    action: () => u(e.id)
  }) : null
}