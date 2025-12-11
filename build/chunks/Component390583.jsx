/** Chunk was on 9536 **/
/** chunk id: 390583, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js");
require("./674180.js");
var Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk764163 = require("./764163.jsx"),
  Chunk861345 = require("./861345.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
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

function b() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [n, b] = Chunk290348.UE(module), p = Chunk473749.useMemo(() => new Set(require.map(e => e.ref_id)), [require]);

  function h(e, t) {
    let {
      channelId: r,
      description: i,
      emojiId: l,
      emojiName: a
    } = e, s = [...n], o = {
      name: "",
      description: i,
      emoji_id: l,
      emoji_name: a,
      ref_type: u.Qs.CHANNEL,
      ref_id: r
    };
    null != t ? s[t] = o : s.push(o), b(s)
  }
  let x = (0, Chunk723047.mY)();
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk861345.p, {
      benefits: require,
      onEdit: function(e) {
        (0, l.h7j)(i => (0, r.jsx)(c.x3, m(f({}, i), {
          guildId: t,
          omitChannelIds: p,
          initialData: n[e],
          onSave: t => h(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), b(t)
          })(e)
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), b(r)
      },
      guildId: exports
    }), require.length > 0 && (0, Chunk54381.jsx)(Chunk481060.LZC, {
      size: 8
    }), (0, Chunk54381.jsx)(Chunk861345.s, {
      onClick: function() {
        (0, Chunk481060.h7j)(e => (0, r.jsx)(c.x3, m(f({}, e), {
          guildId: t,
          omitChannelIds: p,
          onSave: e => h(e)
        })))
      },
      disabled: x,
      children: Chunk388032.intl.string(Chunk388032.t.PLSCUg)
    })]
  })
}