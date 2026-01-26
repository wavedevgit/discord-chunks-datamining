/** Chunk was on 39048 **/
/** chunk id: 862651, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk557300 = require("./557300.js"),
  Chunk881288 = require("./881288.js"),
  Chunk79143 = require("./79143.jsx"),
  Chunk127757 = require("./127757.jsx"),
  Chunk700458 = require("./700458.jsx"),
  Chunk985018 = require("./985018.jsx");

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
  } = (0, o.O)(), [x, j] = c.UN(e, t), _ = (0, u.A)(t, e), {
    setCurrentTab: O
  } = (0, p.Tj)(), v = () => O(p.Oi.EMOJIS), y = (0, i.bG)([s.A], () => s.A.getGuild(t)), A = null != y ? (0, d.A)(y) : true;

  function E(e) {
    null == x ? j(new Set(e)) : j(new Set([...x, ...e]))
  }

  function N(e) {
    let t = new Set(x);
    t.delete(e), j(t)
  }
  let S = (0, a.gN)();
  return (0, r.jsxs)(l.D0$, {
    label: f.intl.string(f.t["D0qeO+"]),
    description: f.intl.format(f.t.zuwely, {
      premiumEmojiMaximum: A
    }),
    helperText: f.intl.format(f.t.sEkgBk, {
      handleTransitionToManageEmoji: v
    }),
    disabled: S,
    children: [(0, r.jsx)(m.d, {
      tierEmojiIds: x,
      guildId: t,
      onRemoveEmoji: function(e) {
        e.roles.filter(e => e !== (null == _ ? true : _.id)).length > 0 ? N(e.id) : (0, l.mMO)(async () => {
          let {
            default: t
          } = await n.e("55631").then(n.bind(n, 185074));
          return n => (0, r.jsx)(t, b(h({}, n), {
            onConfirmDelete: () => {
              N(e.id), n.onClose()
            }
          }))
        })
      }
    }), null != x && x.size > 0 ? (0, r.jsx)(l.hKd, {
      size: 8
    }) : null, (0, r.jsx)(g.n, {
      onClick: function() {
        (0, l.mMO)(async () => {
          let {
            EmojiAddModal: e
          } = await n.e("90410").then(n.bind(n, 126033));
          return n => (0, r.jsx)(e, b(h({}, n), {
            guildId: t,
            initialTierEmojiIds: x,
            onSubmit: E,
            transitionToManageEmoji: () => {
              v(), n.onClose()
            }
          }))
        })
      },
      disabled: S,
      children: f.intl.string(f.t.ouOOVy)
    })]
  })
}