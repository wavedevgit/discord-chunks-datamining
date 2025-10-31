/** Chunk was on 64982 **/
/** chunk id: 641249, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk443106 = require("./443106.js"),
  Chunk971792 = require("./971792.js"),
  Chunk861345 = require("./861345.jsx"),
  Chunk331146 = require("./331146.jsx"),
  Chunk798680 = require("./798680.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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

function x() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [x, j] = Chunk290348.XZ(module, exports), v = (0, Chunk971792.Z)(exports, module), {
    setCurrentTab: _
  } = (0, Chunk798680.dw)(), C = () => _(Chunk798680.ue.EMOJIS), O = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)), y = null != O ? (0, Chunk443106.Z)(O) : true;

  function E(e) {
    null == x ? j(new Set(e)) : j(new Set([...x, ...e]))
  }

  function N(e) {
    let t = new Set(x);
    t.delete(e), j(t)
  }
  let I = (0, Chunk723047.mY)();
  return (0, Chunk951288.jsxs)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t["D0qeO+"]),
    description: Chunk388032.intl.format(Chunk388032.t.zuwely, {
      premiumEmojiMaximum: y
    }),
    helperText: Chunk388032.intl.format(Chunk388032.t.sEkgBk, {
      handleTransitionToManageEmoji: C
    }),
    disabled: I,
    children: [(0, Chunk951288.jsx)(Chunk331146.E, {
      tierEmojiIds: x,
      guildId: exports,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == v ? true : v.id)).length > 0 ? N(e.id) : (0, l.ZDy)(async () => {
          let {
            default: t
          } = await n.e("59128").then(n.bind(n, 28564));
          return n => (0, r.jsx)(t, b(h({}, n), {
            onConfirmDelete: () => {
              N(e.id), n.onClose()
            }
          }))
        })
      }
    }), null != x && x.size > 0 ? (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 8
    }) : null, (0, Chunk951288.jsx)(Chunk861345.s, {
      onClick: function() {
        (0, Chunk481060.ZDy)(async () => {
          let {
            EmojiAddModal: e
          } = await require.e("21112").then(require.bind(require, 301160));
          return n => (0, r.jsx)(e, b(h({}, n), {
            guildId: t,
            initialTierEmojiIds: x,
            onSubmit: E,
            transitionToManageEmoji: () => {
              C(), n.onClose()
            }
          }))
        })
      },
      disabled: I,
      children: Chunk388032.intl.string(Chunk388032.t.ouOOVy)
    })]
  })
}