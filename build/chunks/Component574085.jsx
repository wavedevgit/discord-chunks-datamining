/** Chunk was on 384 **/
/** chunk id: 574085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function p() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [n, p] = Chunk290348.R7(module);

  function f(e, t) {
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
    null != t ? s[t] = o : s.push(o), p(s)
  }
  let h = (0, Chunk723047.mY)();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk861345.p, {
      benefits: require,
      onEdit: function(e) {
        (0, i.h7j)(i => (0, r.jsx)(o.DI, m(g({}, i), {
          guildId: t,
          initialData: n[e],
          onSave: t => f(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), p(t)
          })(e)
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), p(r)
      },
      guildId: exports
    }), require.length > 0 ? (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 8
    }) : null, (0, Chunk951288.jsx)(Chunk861345.s, {
      onClick: function() {
        (0, Chunk481060.h7j)(e => (0, r.jsx)(o.DI, m(g({}, e), {
          guildId: t,
          onSave: e => f(e)
        })))
      },
      disabled: h,
      children: Chunk388032.intl.string(Chunk388032.t["6dwqo0"])
    })]
  })
}