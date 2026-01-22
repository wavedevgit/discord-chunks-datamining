/** Chunk was on 47841 **/
/** chunk id: 179895, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");
require("./465932.js");
var Chunk11351 = require("./11351.js"),
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

function b(e, t) {
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

function m() {
  let {
    editStateId: e,
    guildId: t
  } = (0, a.O)(), [n, m] = c.lZ(e), p = i.useMemo(() => new Set(n.map(e => e.ref_id)), [n]);

  function x(e, t) {
    let {
      channelId: r,
      description: i,
      emojiId: l,
      emojiName: s
    } = e, a = [...n], c = {
      name: "",
      description: i,
      emoji_id: l,
      emoji_name: s,
      ref_type: u.bN.CHANNEL,
      ref_id: r
    };
    null != t ? a[t] = c : a.push(c), m(a)
  }
  let h = (0, s.gN)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.$, {
      benefits: n,
      onEdit: function(e) {
        (0, l.qfG)(i => (0, r.jsx)(o.oJ, b(g({}, i), {
          guildId: t,
          omitChannelIds: p,
          initialData: n[e],
          onSave: t => x(t, e),
          onDelete: () => {
            let t;
            (t = [...n]).splice(e, 1), m(t)
          }
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), m(r)
      },
      guildId: t
    }), n.length > 0 && (0, r.jsx)(l.hKd, {
      size: 8
    }), (0, r.jsx)(d.n, {
      onClick: function() {
        (0, l.qfG)(e => (0, r.jsx)(o.oJ, b(g({}, e), {
          guildId: t,
          omitChannelIds: p,
          onSave: e => x(e)
        })))
      },
      disabled: h,
      children: f.intl.string(f.t.PLSCUg)
    })]
  })
}