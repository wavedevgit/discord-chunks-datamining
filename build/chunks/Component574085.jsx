/** Chunk was on 9536 **/
/** chunk id: 574085, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk764163 = require("./764163.jsx"),
  Chunk861345 = require("./861345.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f() {
  let {
    editStateId: e,
    guildId: t
  } = (0, a.N)(), [n, f] = s.R7(e);

  function b(e, t) {
    let {
      name: r,
      description: i,
      emojiId: l,
      emojiName: a
    } = e, s = [...n], o = {
      name: r,
      description: i,
      emoji_id: l,
      emoji_name: a,
      ref_type: d.Qs.INTANGIBLE,
      ref_id: true
    };
    null != t ? s[t] = o : s.push(o), f(s)
  }
  let p = (0, l.mY)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.p, {
      benefits: n,
      onEdit: function(e) {
        (0, i.h7j)(i => (0, r.jsx)(o.DI, m(g({}, i), {
          guildId: t,
          initialData: n[e],
          onSave: t => b(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), f(t)
          })(e)
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), f(r)
      },
      guildId: t
    }), n.length > 0 ? (0, r.jsx)(i.LZC, {
      size: 8
    }) : null, (0, r.jsx)(c.s, {
      onClick: function() {
        (0, i.h7j)(e => (0, r.jsx)(o.DI, m(g({}, e), {
          guildId: t,
          onSave: e => b(e)
        })))
      },
      disabled: p,
      children: u.intl.string(u.t["6dwqo0"])
    })]
  })
}