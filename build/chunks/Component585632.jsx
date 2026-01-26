/** Chunk was on 39048 **/
/** chunk id: 585632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk626083 = require("./626083.jsx"),
  Chunk79143 = require("./79143.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx");

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

function p() {
  let {
    editStateId: e,
    guildId: t
  } = (0, s.O)(), [n, p] = a.$O(e);

  function f(e, t) {
    let {
      name: r,
      description: i,
      emojiId: l,
      emojiName: s
    } = e, a = [...n], o = {
      name: r,
      description: i,
      emoji_id: l,
      emoji_name: s,
      ref_type: d.bN.INTANGIBLE,
      ref_id: true
    };
    null != t ? a[t] = o : a.push(o), p(a)
  }
  let h = (0, l.gN)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$, {
      benefits: n,
      onEdit: function(e) {
        (0, i.qfG)(i => (0, r.jsx)(o.aP, m(g({}, i), {
          guildId: t,
          initialData: n[e],
          onSave: t => f(t, e),
          onDelete: () => {
            let t;
            (t = [...n]).splice(e, 1), p(t)
          }
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), p(r)
      },
      guildId: t
    }), n.length > 0 ? (0, r.jsx)(i.hKd, {
      size: 8
    }) : null, (0, r.jsx)(c.n, {
      onClick: function() {
        (0, i.qfG)(e => (0, r.jsx)(o.aP, m(g({}, e), {
          guildId: t,
          onSave: e => f(e)
        })))
      },
      disabled: h,
      children: u.intl.string(u.t["6dwqo0"])
    })]
  })
}