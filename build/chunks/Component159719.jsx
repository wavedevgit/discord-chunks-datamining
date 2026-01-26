/** Chunk was on 39048 **/
/** chunk id: 159719, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk885617 = require("./885617.js"),
  Chunk314737 = require("./314737.jsx"),
  Chunk405810 = require("./405810.jsx"),
  Chunk11351 = require("./11351.js"),
  Chunk557300 = require("./557300.js"),
  Chunk534875 = require("./534875.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = e, f = (0, i.bG)([s.A], () => s.A.isUploadingEmoji()), h = (0, u.A)(t.id), b = (0, d.A)(t) - h.length, x = (0, c.gN)();
  return (0, r.jsxs)(l.D0$, {
    label: g.intl.string(g.t["LDT0Q/"]),
    disabled: x,
    description: g.intl.format(g.t.H9Jxp6, {
      maxSlots: (0, d.A)(t)
    }),
    children: [(0, r.jsx)(l.hKd, {
      size: 16
    }), (0, r.jsx)(o.A, {
      onChange: (e, i) => {
        null != e && null != i && (0, l.mMO)(async () => {
          let {
            CreateEmojiWithRolesModal: l
          } = await n.e("15224").then(n.bind(n, 429131));
          return n => (0, r.jsx)(l, p(m({}, n), {
            data: e,
            file: i,
            guildId: t.id
          }))
        })
      },
      disabled: x || f || 0 === b,
      size: "md",
      variant: "primary",
      text: g.intl.string(g.t.AuPtov),
      loading: f
    }), (0, r.jsx)(l.hKd, {
      size: 24
    }), (0, r.jsx)(a.Bt, {
      title: g.intl.string(g.t.lu1ZQ2),
      maxSlots: (0, d.A)(t),
      emojiCount: h.length,
      children: (0, r.jsx)(a.zI, {
        guild: t,
        emojis: h,
        onEdit: (e, t) => {
          (0, l.mMO)(async () => {
            let {
              UpdateEmojiRolesModal: i
            } = await n.e("15224").then(n.bind(n, 429131));
            return n => (0, r.jsx)(i, p(m({}, n), {
              emoji: e,
              guildId: t
            }))
          })
        },
        editingDisabled: x
      })
    })]
  })
}