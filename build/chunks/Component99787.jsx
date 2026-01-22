/** Chunk was on 47841 **/
/** chunk id: 99787, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk372598 = require("./372598.js"),
  Chunk53594 = require("./53594.js"),
  Chunk449585 = require("./449585.jsx"),
  Chunk864557 = require("./864557.jsx");

function o(e) {
  let {
    rule: t,
    onChangeRule: n
  } = e, o = i.useMemo(() => (0, s.J6)(t.triggerType), [t.triggerType]), d = a.Bx(t.guildId), u = i.useMemo(() => (0, l.XO)(), []), f = (e, r) => {
    var i, l;
    if (null == r) return;
    let s = t.actions.some(e => e.type === r.type),
      a = [...t.actions, r];
    if (s) {
      let n = t.actions.filter(e => e.type !== r.type);
      a = e ? [...n, r] : n
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
      actions: a
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
    children: o.map(e => {
      let n = t.actions.find(t => t.type === e);
      return (0, r.jsx)(c.A, {
        guildId: t.guildId,
        triggerType: t.triggerType,
        action: null != n ? n : u[e],
        toggled: null != n,
        onToggleAction: async n => {
          let r = t.actions.find(t => t.type === e),
            i = null != r,
            l = u[e],
            s = n ? r : l;
          if (null != s && (!i || n)) {
            let n = d[e];
            null != n ? f(true, await n(t, s)) : f(true, s)
          } else f(false, i ? r : l)
        }
      }, e)
    })
  })
}