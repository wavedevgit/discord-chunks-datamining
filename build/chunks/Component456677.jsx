/** Chunk was on 384 **/
/** chunk id: 456677, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk866830 = require("./866830.js"),
  Chunk85960 = require("./85960.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk683579 = require("./683579.jsx");

function c(e) {
  let {
    rule: t,
    onChangeRule: n
  } = e, c = i.useMemo(() => (0, a.V9)(t.triggerType), [t.triggerType]), u = s.km(t.guildId), d = i.useMemo(() => (0, l.U5)(), []), g = (e, r) => {
    var i, l;
    if (null == r) return;
    let a = t.actions.some(e => e.type === r.type),
      s = [...t.actions, r];
    if (a) {
      let n = t.actions.filter(e => e.type !== r.type);
      s = e ? [...n, r] : n
    }
    n((i = function(e) {
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
    }({}, t), l = l = {
      actions: s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
    }), i))
  };
  return (0, r.jsx)(r.Fragment, {
    children: c.map(e => {
      let n = t.actions.find(t => t.type === e);
      return (0, r.jsx)(o.Z, {
        guildId: t.guildId,
        triggerType: t.triggerType,
        action: null != n ? n : d[e],
        toggled: null != n,
        onToggleAction: async n => {
          let r = t.actions.find(t => t.type === e),
            i = null != r,
            l = d[e],
            a = n ? r : l;
          if (null != a && (!i || n)) {
            let n = u[e];
            null != n ? g(true, await n(t, a)) : g(true, a)
          } else g(false, i ? r : l)
        }
      }, e)
    })
  })
}