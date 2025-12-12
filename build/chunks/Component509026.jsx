/** Chunk was on 384 **/
/** chunk id: 509026, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471613 = require("./471613.js"),
  Chunk29605 = require("./29605.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk723047 = require("./723047.js"),
  Chunk443106 = require("./443106.js"),
  Chunk796814 = require("./796814.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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

function p(e, t) {
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

function f(e) {
  let {
    guild: t
  } = e, f = (0, i.e7)([s.Z], () => s.Z.isUploadingEmoji()), h = (0, d.Z)(t.id), x = (0, u.Z)(t) - h.length, b = (0, c.mY)();
  return (0, r.jsxs)(l.gNt, {
    label: g.intl.string(g.t["LDT0Q/"]),
    disabled: b,
    description: g.intl.format(g.t.H9Jxp6, {
      maxSlots: (0, u.Z)(t)
    }),
    children: [(0, r.jsx)(l.LZC, {
      size: 16
    }), (0, r.jsx)(o.Z, {
      onChange: (e, i) => {
        null != e && null != i && (0, l.ZDy)(async () => {
          let {
            CreateEmojiWithRolesModal: l
          } = await n.e("9007").then(n.bind(n, 604623));
          return n => (0, r.jsx)(l, p(m({}, n), {
            data: e,
            file: i,
            guildId: t.id
          }))
        })
      },
      disabled: b || f || 0 === x,
      size: "md",
      variant: "primary",
      text: g.intl.string(g.t.AuPtov),
      loading: f
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(a.L3, {
      title: g.intl.string(g.t.lu1ZQ2),
      maxSlots: (0, u.Z)(t),
      emojiCount: h.length,
      children: (0, r.jsx)(a.FT, {
        guild: t,
        emojis: h,
        onEdit: (e, t) => {
          (0, l.ZDy)(async () => {
            let {
              UpdateEmojiRolesModal: i
            } = await n.e("9007").then(n.bind(n, 604623));
            return n => (0, r.jsx)(i, p(m({}, n), {
              emoji: e,
              guildId: t
            }))
          })
        },
        editingDisabled: b
      })
    })]
  })
}