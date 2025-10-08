/** Chunk was on 29679 **/
/** chunk id: 641249, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk851016 = require("./851016.js");

function x(e) {
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

function j() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [j, _] = Chunk290348.XZ(module, exports), v = (0, Chunk971792.Z)(exports, module), {
    setCurrentTab: C
  } = (0, Chunk798680.dw)(), O = () => C(Chunk798680.ue.EMOJIS), y = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)), N = null != y ? (0, Chunk443106.Z)(y) : true;

  function E(e) {
    null == j ? _(new Set(e)) : _(new Set([...j, ...e]))
  }

  function I(e) {
    let t = new Set(j);
    t.delete(e), _(t)
  }
  let S = (0, Chunk723047.mY)();
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: Chunk388032.intl.string(Chunk388032.t.D0qeOz),
    disabled: S,
    children: [(0, Chunk951288.jsxs)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk851016.formDescription,
      disabled: S,
      children: [Chunk388032.intl.format(Chunk388032.t.zuwel5, {
        premiumEmojiMaximum: N
      }), (0, Chunk951288.jsx)("br", {}), Chunk388032.intl.format(Chunk388032.t.sEkgBg, {
        handleTransitionToManageEmoji: O
      })]
    }), (0, Chunk951288.jsx)(Chunk331146.E, {
      tierEmojiIds: j,
      guildId: exports,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == v ? true : v.id)).length > 0 ? I(e.id) : (0, l.ZDy)(async () => {
          let {
            default: t
          } = await n.e("59128").then(n.bind(n, 28564));
          return n => (0, r.jsx)(t, b(x({}, n), {
            onConfirmDelete: () => {
              I(e.id), n.onClose()
            }
          }))
        })
      }
    }), null != j && j.size > 0 ? (0, Chunk951288.jsx)(Chunk481060.LZC, {
      size: 8
    }) : null, (0, Chunk951288.jsx)(Chunk861345.s, {
      onClick: function() {
        (0, Chunk481060.ZDy)(async () => {
          let {
            EmojiAddModal: e
          } = await require.e("21112").then(require.bind(require, 301160));
          return n => (0, r.jsx)(e, b(x({}, n), {
            guildId: t,
            initialTierEmojiIds: j,
            onSubmit: E,
            transitionToManageEmoji: () => {
              O(), n.onClose()
            }
          }))
        })
      },
      disabled: S,
      children: Chunk388032.intl.string(Chunk388032.t.ouOOV1)
    })]
  })
}